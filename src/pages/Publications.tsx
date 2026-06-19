import PageTitle from "../components/PageTitle";
import CitationsChart from "../components/CitationsChart";
import { publicationLinks, publications } from "../data/publications";
import { t, type Language } from "../i18n";

const copy: Record<Language, { kicker: string; title: string; body: string; open: string }> = {
  en: {
    kicker: "Publications",
    title: "Academic publications and research output.",
    body: "Peer-reviewed publications on DER aggregation, active-distribution-network operation, VPP technologies, and ancillary services, with citation counts listed in the CVs.",
    open: "Open link"
  },
  fr: {
    kicker: "Publications",
    title: "Publications académiques et production de recherche.",
    body: "Publications évaluées par les pairs sur l'agrégation DER, l'exploitation des réseaux de distribution actifs, les technologies VPP et les services auxiliaires, avec citations indiquées dans les CV.",
    open: "Ouvrir le lien"
  }
};

export default function Publications({ language }: { language: Language }) {
  const c = copy[language];

  return (
    <div className="sub-page-container fade-in">
      <PageTitle kicker={c.kicker} title={c.title} body={c.body} />

      <div className="publication-links">
        {publicationLinks.googleScholar && <a className="button primary" href={publicationLinks.googleScholar}>Google Scholar</a>}
        {publicationLinks.researchGate && <a className="button" href={publicationLinks.researchGate}>ResearchGate</a>}
        {publicationLinks.orcid && <a className="button" href={publicationLinks.orcid}>ORCID</a>}
      </div>

      <CitationsChart language={language} />

      <div className="publication-list">
        {publications.map((pub) => (
          <article className="card publication-card" key={`${pub.title}-${pub.year}`}>
            <div>
              <span>{t(language, pub.type, pub.typeFr)} · {pub.year}</span>
              <h2>{pub.title}</h2>
              <p>{pub.authors}</p>
              <strong>{pub.venue}</strong>
            </div>
            <a className="button primary" href={pub.link}>{c.open}</a>
          </article>
        ))}
      </div>
    </div>
  );
}
