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
  alternateEmail: string;
  linkedin: string;
  scholar: string;
  cvLabel: string;
  cvTitle: string;
  cvBody: string;
  downloadCv: string;
  spiritLabel: string;
  spiritTitle: string;
  traits: Array<{ icon: string; title: string; text: string }>;
}> = {
  en: {
    kicker: "Contact",
    title: "Contact and CV download",
    body: "Use the links below to contact me directly or download the CV version that best matches the role.",
    contactLabel: "Direct contact",
    contactTitle: "Open to power-systems, EMS, VPP, and controls roles.",
    contactText: "I am interested in engineering teams working on DER coordination, microgrid EMS, real-time simulation, and controller-facing software.",
    email: "Email me",
    alternateEmail: "Alternative email",
    linkedin: "LinkedIn",
    scholar: "Google Scholar",
    cvLabel: "CV",
    cvTitle: "Download CV",
    cvBody: "You can download my CV by answering one quick question, so I can show the version that best matches your interest.",
    downloadCv: "Download CV",
    spiritLabel: "Working style",
    spiritTitle: "Fast learner, motivated, and useful in dynamic teams.",
    traits: [
      { icon: "trendUp", title: "Fast ramp-up", text: "I learn new technical contexts quickly and convert them into practical implementation." },
      { icon: "workflow", title: "Team momentum", text: "I work well in active engineering teams where priorities evolve and delivery matters." },
      { icon: "target", title: "Problem ownership", text: "I prefer clear objectives, rigorous reasoning, and solutions that can be validated." }
    ]
  },
  fr: {
    kicker: "Contact",
    title: "Contact et telechargement du CV",
    body: "Utilisez les liens ci-dessous pour me contacter directement ou telecharger la version du CV la plus adaptee au poste.",
    contactLabel: "Contact direct",
    contactTitle: "Ouvert aux roles en reseaux electriques, EMS, VPP et controle.",
    contactText: "Je suis interesse par les equipes d'ingenierie travaillant sur la coordination DER, l'EMS microgrid, la simulation temps reel et les logiciels orientes controleur.",
    email: "M'ecrire",
    alternateEmail: "Autre courriel",
    linkedin: "LinkedIn",
    scholar: "Google Scholar",
    cvLabel: "CV",
    cvTitle: "Telecharger le CV",
    cvBody: "Vous pouvez telecharger mon CV apres une courte question, afin d'afficher la version la plus adaptee a votre interet.",
    downloadCv: "Telecharger le CV",
    spiritLabel: "Etat d'esprit",
    spiritTitle: "Apprentissage rapide, forte motivation et contribution utile dans les equipes dynamiques.",
    traits: [
      { icon: "trendUp", title: "Montee en competence rapide", text: "J'assimile vite les nouveaux contextes techniques et les transforme en implementations concretes." },
      { icon: "workflow", title: "Dynamique d'equipe", text: "Je travaille bien dans les equipes actives ou les priorites evoluent et ou la livraison compte." },
      { icon: "target", title: "Responsabilite technique", text: "Je privilegie des objectifs clairs, un raisonnement rigoureux et des solutions verifiables." }
    ]
  }
};

export default function Contact({ language }: { language: Language }) {
  const c = copy[language];
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="sub-page-container fade-in contact-page">
      <PageTitle kicker={c.kicker} title={c.title} body={c.body} />

      <div className="contact-layout">
        <div className="contact-left-column">
          <section className="contact-page-card contact-intro-card">
            <div className="contact-card-heading">
              <span>{c.contactLabel}</span>
              <h2>{c.contactTitle}</h2>
              <p>{c.contactText}</p>
            </div>

            <div className="contact-detail-list">
              <div className="contact-detail-row">
                <Icon name="mail" />
                <a href={`mailto:${profile.email}`}>
                  <b>{c.email}</b>
                  {profile.email}
                </a>
              </div>
              {profile.alternateEmail && (
                <div className="contact-detail-row">
                  <Icon name="mail" />
                  <a href={`mailto:${profile.alternateEmail}`}>
                    <b>{c.alternateEmail}</b>
                    {profile.alternateEmail}
                  </a>
                </div>
              )}
            </div>

            <div className="contact-action-row">
              <a className="button primary large" href={`mailto:${profile.email}`}>{c.email}</a>
              <a className="button large" href={profile.linkedin} target="_blank" rel="noreferrer">{c.linkedin}</a>
              {profile.googleScholar && (
                <a className="button large" href={profile.googleScholar} target="_blank" rel="noreferrer">{c.scholar}</a>
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

        <section className="contact-page-card contact-cv-card">
          <div className="contact-card-heading">
            <span>{c.cvLabel}</span>
            <h2>{c.cvTitle}</h2>
            <p>{c.cvBody}</p>
          </div>

          <div className="contact-cv-picker-panel contact-cv-download-panel">
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
