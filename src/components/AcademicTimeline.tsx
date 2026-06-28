import { academicExperience } from "../data/academic";
import { t, type Language } from "../i18n";

export default function AcademicTimeline({ language }: { language: Language }) {
  const currentYear = new Date().getFullYear();
  const starts = academicExperience.map((item) => item.startYear);
  const ends = academicExperience.map((item) => (item.endYear === "present" ? currentYear : item.endYear));
  const minYear = Math.min(...starts);
  const maxYear = Math.max(...ends);
  const span = maxYear - minYear;

  return (
    <div className="academic-timeline">
      <h3 className="section-title-small">{language === "fr" ? "Chronologie de carriere" : "Career timeline"}</h3>
      {academicExperience.map((item) => {
        const end = item.endYear === "present" ? currentYear : item.endYear;
        const left = ((item.startYear - minYear) / span) * 100;
        const width = Math.max(((end - item.startYear) / span) * 100, 3);
        return (
          <div className="academic-timeline-row" key={item.title}>
            <div>
              <b>{t(language, item.institution, item.institutionFr)}</b>
              <small>{t(language, item.period, item.periodFr)}</small>
            </div>
            <div className="academic-timeline-track-row">
              <div className="academic-timeline-bar" style={{ left: `${left}%`, width: `${width}%` }} />
            </div>
            <span className="academic-timeline-period">{t(language, item.period, item.periodFr)}</span>
          </div>
        );
      })}
    </div>
  );
}
