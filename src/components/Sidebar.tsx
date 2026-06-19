import { useState } from "react";
import Icon from "./Icon";
import CvInterestModal from "./CvInterestModal";
import { siteCopy, type Language } from "../i18n";
import { profile } from "../data/profile";
import type { PageId } from "../types";
import { timelineItems } from "../data/nav";

const sidebarOrder: PageId[] = ["home", "skills", "academic", "projects", "contact"];

export default function Sidebar({
  activePage,
  goToPage,
  language
}: {
  activePage: PageId;
  goToPage: (page: PageId) => void;
  language: Language;
}) {
  const copy = siteCopy[language];
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const sidebarItems = sidebarOrder
    .map((pageId) => timelineItems.find((item) => item.id === pageId))
    .filter((item): item is (typeof timelineItems)[number] => Boolean(item));

  const utilityCopy = {
    en: {
      button: "CV",
      aria: "Choose CV download",
      email: "Email"
    },
    fr: {
      button: "CV",
      aria: "Choisir le CV a telecharger",
      email: "Courriel"
    }
  }[language];

  return (
    <>
      <nav className="sidebar" aria-label={copy.header.navAria}>
        <div className="sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`sidebar-btn ${activePage === item.id ? "active" : ""}`}
              aria-label={`${copy.header.goTo} ${item.label[language]}`}
              aria-current={activePage === item.id ? "page" : undefined}
              onClick={() => goToPage(item.id)}
            >
              <span className="sidebar-circle"><Icon name={item.icon} /></span>
              <span className="sidebar-label">{item.label[language]}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-utility">
          <button
            type="button"
            className="sidebar-btn sidebar-utility-btn"
            aria-label={utilityCopy.aria}
            aria-haspopup="dialog"
            aria-expanded={isCvModalOpen}
            onClick={() => setIsCvModalOpen(true)}
          >
            <span className="sidebar-circle"><Icon name="download" /></span>
            <span className="sidebar-label">{utilityCopy.button}</span>
          </button>
          <a className="sidebar-btn sidebar-utility-btn" href={`mailto:${profile.email}`} aria-label={`${copy.header.goTo} email`}>
            <span className="sidebar-circle"><Icon name="send" /></span>
            <span className="sidebar-label">{utilityCopy.email}</span>
          </a>
        </div>
      </nav>

      <CvInterestModal
        isOpen={isCvModalOpen}
        language={language}
        onClose={() => setIsCvModalOpen(false)}
      />
    </>
  );
}
