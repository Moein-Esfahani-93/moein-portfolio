import { useState } from "react";
import PageTitle from "../components/PageTitle";
import AcademicTimeline from "../components/AcademicTimeline";
import { academicExperience } from "../data/academic";
import { t, type Language } from "../i18n";

const copy: Record<Language, { kicker: string; title: string; body: string; more: string; less: string; supervisorLabel: string; advisorLabel: string }> = {
  en: {
    kicker: "Experience",
    title: "Professional and research experience.",
    body: "Huawei VPP, microgrid EMS, controller-interface, and RTS validation work connected to doctoral research in VPP coordination under uncertainty.",
    more: "More",
    less: "Show less",
    supervisorLabel: "Ph.D. Supervisor:",
    advisorLabel: "Advisor:"
  },
  fr: {
    kicker: "Expérience",
    title: "Expérience professionnelle et recherche.",
    body: "Travaux Huawei en VPP, EMS microgrid, interfaces contrôleur et validation RTS reliés à la recherche doctorale en coordination VPP sous incertitude.",
    more: "Plus",
    less: "Réduire",
    supervisorLabel: "Directeur de Ph.D. :",
    advisorLabel: "Conseiller :"
  }
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
                  {c.supervisorLabel} Prof. I. Kamwa; {c.advisorLabel} Prof. Nima Amjady.
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
