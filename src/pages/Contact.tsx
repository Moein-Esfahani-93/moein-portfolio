import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Icon from "../components/Icon";
import CvInterestModal from "../components/CvInterestModal";
import { profile } from "../data/profile";
import type { Language } from "../i18n";

const copy: Record<Language, {
  kicker: string;
  title: string;
  body: string;
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  email: string;
  phone: string;
  alternateEmail: string;
  linkedin: string;
  orcid: string;
  scholar: string;
  downloadCv: string;
  spiritLabel: string;
  spiritTitle: string;
  traits: Array<{ icon: string; title: string; text: string }>;
}> = {
  en: {
    kicker: "Contact",
    title: "Contact and CV download",
    body: "Use the links below to contact me directly or download my CV.",
    contactLabel: "Direct contact",
    contactTitle: "Open to microgrid controls validation, CHIL/HIL preparation, and controller-interface roles.",
    contactText: "I am interested in engineering teams working on microgrid EMS validation, test automation, real-time simulation, protocol interfaces, and controller-facing DER software.",
    email: "Email me",
    phone: "Phone",
    alternateEmail: "Academic email",
    linkedin: "LinkedIn",
    orcid: "ORCID",
    scholar: "Google Scholar",
    downloadCv: "Download CV",
    spiritLabel: "Working style",
    spiritTitle: "Validation-minded, fast to ramp up, and useful in active engineering teams.",
    traits: [
      { icon: "target", title: "Acceptance focus", text: "I turn controller behavior into measurable criteria, pass/fail checks, and evidence packages." },
      { icon: "workflow", title: "Integration ownership", text: "I work across EMS logic, simulator I/O, PLC/RTAC behavior, and protocol maps until the loop is testable." },
      { icon: "trendUp", title: "Fast ramp-up", text: "I learn new controller platforms and validation contexts quickly enough to contribute without long hand-holding." },
      { icon: "waypoints", title: "Failure-mode thinking", text: "I actively test delay, data loss, stale values, timeouts, safe fallback, and command/readback mismatches." },
      { icon: "flask", title: "Practical problem solving", text: "I connect power-system models, software traces, and controller diagnostics to isolate the real issue." },
      { icon: "send", title: "Clear communication", text: "I document assumptions, signal contracts, expected behavior, and troubleshooting records so teams can reuse the work." }
    ]
  },
  fr: {
    kicker: "Contact",
    title: "Contact et telechargement du CV",
    body: "Utilisez les liens ci-dessous pour me contacter directement ou telecharger le CV controle/RTS ou VPP/EMS.",
    contactLabel: "Contact direct",
    contactTitle: "Ouvert aux roles en validation controle microgrid, preparation CHIL/HIL et interfaces controleur.",
    contactText: "Je suis interesse par les equipes d'ingenierie travaillant sur la validation EMS microgrid, l'automatisation des tests, la simulation temps reel, les interfaces protocolaires et les logiciels DER orientes controleur.",
    email: "M'ecrire",
    phone: "Telephone",
    alternateEmail: "Autre courriel",
    linkedin: "LinkedIn",
    orcid: "ORCID",
    scholar: "Google Scholar",
    downloadCv: "Telecharger le CV",
    spiritLabel: "Methode de travail",
    spiritTitle: "Oriente validation, apprentissage rapide et utile dans les equipes d'ingenierie actives.",
    traits: [
      { icon: "target", title: "Criteres d'acceptation", text: "Je transforme le comportement controleur en mesures, verifications pass/fail et preuves de validation." },
      { icon: "workflow", title: "Integration bout en bout", text: "Je travaille entre logique EMS, E/S simulateur, PLC/RTAC et mappings protocole jusqu'a obtenir une boucle testable." },
      { icon: "trendUp", title: "Montee rapide", text: "J'apprends vite les nouvelles plateformes controleur et les contextes de validation." },
      { icon: "waypoints", title: "Modes de defaillance", text: "Je teste delais, pertes de donnees, valeurs perimees, timeouts, etats de repli et ecarts commande/lecture." },
      { icon: "flask", title: "Resolution pratique", text: "Je relie modeles reseau, traces logicielles et diagnostics controleur pour isoler le vrai probleme." },
      { icon: "send", title: "Communication claire", text: "Je documente hypotheses, contrats de signaux, comportement attendu et depannage pour rendre le travail reutilisable." }
    ]
  }
};

export default function Contact({ language }: { language: Language }) {
  const c = copy[language];
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="sub-page-container fade-in contact-page">
      <div className="contact-page-header">
        <PageTitle kicker={c.kicker} title={c.title} body={c.body} />
        <button
          type="button"
          className="button primary large contact-cv-open-button"
          aria-haspopup="dialog"
          aria-expanded={isCvModalOpen}
          onClick={() => setIsCvModalOpen(true)}
        >
          {c.downloadCv}
        </button>
      </div>

      <div className="contact-layout">
        <section className="contact-page-card contact-intro-card">
          <div className="contact-card-heading">
            <span>{c.contactLabel}</span>
            <h2>{c.contactTitle}</h2>
            <p>{c.contactText}</p>
          </div>

          <div className="contact-detail-list">
            <div className="contact-detail-row">
              <span className="contact-email-icon"><Icon name="mail" /></span>
              <a href={`mailto:${profile.email}`}>
                <b>{c.email}</b>
                {profile.email}
              </a>
            </div>
            {profile.phone && (
              <div className="contact-detail-row">
                <span className="contact-email-icon"><Icon name="phone" /></span>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                  <b>{c.phone}</b>
                  {profile.phone}
                </a>
              </div>
            )}
            {profile.alternateEmail && (
              <div className="contact-detail-row">
                <span className="contact-email-icon"><img src="/laval.png" alt="Universite Laval" className="laval-icon" /></span>
                <a href={`mailto:${profile.alternateEmail}`}>
                  <b>{c.alternateEmail}</b>
                  {profile.alternateEmail}
                </a>
              </div>
            )}
          </div>

          <div className="contact-action-row">
            <a className="button large contact-social-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-social-mark contact-linkedin-mark" aria-hidden="true">in</span>
              {c.linkedin}
            </a>
            {profile.orcid && (
              <a className="button large contact-social-button" href={profile.orcid} target="_blank" rel="noreferrer">
                <span className="contact-social-mark contact-orcid-mark" aria-hidden="true">iD</span>
                {c.orcid}
              </a>
            )}
            {profile.googleScholar && (
              <a className="button large contact-social-button" href={profile.googleScholar} target="_blank" rel="noreferrer">
                <span className="contact-social-mark contact-scholar-mark" aria-hidden="true"><Icon name="cap" /></span>
                {c.scholar}
              </a>
            )}
          </div>
        </section>

        <section className="contact-page-card contact-spirit-card">
          <div className="contact-card-heading contact-card-heading-compact">
            <span>{c.spiritLabel}</span>
            <h2>{c.spiritTitle}</h2>
          </div>

          <div className="contact-trait-grid">
            {c.traits.map((trait) => (
              <article className="contact-trait" key={trait.title}>
                <span className="contact-small-icon"><Icon name={trait.icon} /></span>
                <div>
                  <h3>{trait.title}</h3>
                  <p>{trait.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <CvInterestModal
        isOpen={isCvModalOpen}
        language={language}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
