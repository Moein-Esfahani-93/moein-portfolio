import Icon from "./Icon";
import { languageLabels, siteCopy, type Language } from "../i18n";
import type { PageId } from "../types";
import { timelineItems } from "../data/nav";

export default function Header({
  activePage,
  goToPage,
  language,
  setLanguage
}: {
  activePage: PageId;
  goToPage: (page: PageId) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const copy = siteCopy[language];

  return (
    <>
      <header className="page-header">
        <div className="page-header-identity">
          <div className="profile-avatar header-avatar"><img src="/myphoto.jpg" alt="Moein Esfahani" /></div>
          <div className="page-header-text">
            <h1>MOEIN ESFAHANI</h1>
            <p className="page-header-role">{copy.header.role.split("\n").map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}</p>
          </div>
        </div>

        <div className="language-switch" aria-label={copy.header.languageAria}>
          <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>{languageLabels.en}</button>
          <button type="button" className={language === "fr" ? "active" : ""} aria-pressed={language === "fr"} onClick={() => setLanguage("fr")}>{languageLabels.fr}</button>
        </div>
      </header>

      <nav className="mobile-tab-bar" aria-label={copy.header.navAria}>
        {timelineItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`mobile-tab-btn ${activePage === item.id ? "active" : ""}`}
            aria-current={activePage === item.id ? "page" : undefined}
            onClick={() => goToPage(item.id)}
          >
            <Icon name={item.icon} />
            <span>{item.label[language]}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
