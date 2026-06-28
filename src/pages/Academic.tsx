import { useState } from "react";
import PageTitle from "../components/PageTitle";
import AcademicTimeline from "../components/AcademicTimeline";
import { academicExperience } from "../data/academic";
import { t, type Language } from "../i18n";

const copy: Record<Language, { kicker: string; title: string; body: string; more: string; less: string; supervisorLabel: string; advisorLabel: string }> = {
  en: {
    kicker: "Experience",
    title: "Professional and research experience.",
    body: "Huawei microgrid controller validation, CHIL/HIL preparation, EMS interfaces, and VPP dispatch-to-test workflows connected to doctoral research in DER coordination under uncertainty.",
    more: "More",
    less: "Show less",
    supervisorLabel: "Ph.D. Supervisor:",
    advisorLabel: "Advisor:"
  },
  fr: {
    kicker: "Experience",
    title: "Experience professionnelle et recherche.",
    body: "Travaux Huawei en validation controleur microgrid, preparation CHIL/HIL, interfaces EMS et workflows dispatch VPP vers tests, relies a la recherche doctorale en coordination DER sous incertitude.",
    more: "Plus",
    less: "Reduire",
    supervisorLabel: "Directeur de Ph.D. :",
    advisorLabel: "Conseiller :"
  }
};
const phdPeople = {
  supervisor: "https://innocent-kamwa.fsg.ulaval.ca/en",
  advisor: "https://www.federation.edu.au/research/find-an-expert/Nima-Amjady"
};

export default function Academic({ language }: { language: Language }) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const c = copy[language];

  return (
    <div className="sub-page-container fade-in">
      <PageTitle
        kicker={c.kicker}
        title={c.title}
        body={c.body}
      />

      <AcademicTimeline language={language} />

      <div className="timeline-list">
        {academicExperience.map((item) => {
          const expanded = !!expandedItems[item.title];
          const isDoctoralResearch = item.title.startsWith("Doctoral Researcher");
          return (
            <article className="card timeline-card compact-experience-card" key={item.title}>
              <span>{t(language, item.period, item.periodFr)}</span>
              <h2>{t(language, item.title, item.titleFr)}</h2>
              <strong>{t(language, item.institution, item.institutionFr)}</strong>
              <p className="one-line-summary">{t(language, item.summary, item.summaryFr)}</p>
              {isDoctoralResearch && (
                <p className="academic-person-links">
                   {c.supervisorLabel} <a className="person-link" href={phdPeople.supervisor} target="_blank" rel="noreferrer">Prof. Innocent Kamwa</a>; {c.advisorLabel} <a className="person-link" href={phdPeople.advisor} target="_blank" rel="noreferrer">Prof. Nima Amjady</a>.
                </p>
              )}
              {expanded && (
                <ul>{(language === "fr" && item.highlightsFr ? item.highlightsFr : item.highlights).map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              )}
              <button
                type="button"
                className="more-toggle"
                onClick={() => setExpandedItems((items) => ({ ...items, [item.title]: !expanded }))}
              >
                {expanded ? c.less : c.more}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
