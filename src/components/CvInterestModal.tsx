import { useEffect, useId, useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/profile";
import type { Language } from "../i18n";

type CvTopicId = "vpp" | "controls";

type CvTopic = {
  id: CvTopicId;
  icon: string;
  title: string;
  text: string;
  downloads: Array<{ label: string; href?: string }>;
};

const copy: Record<Language, {
  title: string;
  body: string;
  downloadTitle: string;
  downloadBody: string;
  english: string;
  french: string;
  back: string;
  close: string;
  topics: Array<Omit<CvTopic, "downloads">>;
}> = {
  en: {
    title: "Help me grow",
    body: "Tell me which topic attracted your attention, then choose the CV language.",
    downloadTitle: "Download CV",
    downloadBody: "Thanks. Pick the English or French CV for this focus.",
    english: "English",
    french: "French",
    back: "Change topic",
    close: "Close CV options",
    topics: [
      {
        id: "vpp",
        icon: "network",
        title: "VPP & Microgrid EMS",
        text: "DER coordination, VPP dispatch, forecasting, EMS workflows, and grid validation."
      },
      {
        id: "controls",
        icon: "monitorCog",
        title: "Controls, Automation & Real-Time Simulation",
        text: "Controller Interfaces, simulator I/O, PLC logic, protocol maps, and timing diagnostics."
      }
    ]
  },
  fr: {
    title: "Aidez-moi a progresser",
    body: "Dites-moi quel sujet a attire votre attention, puis choisissez la langue du CV.",
    downloadTitle: "Telecharger le CV",
    downloadBody: "Merci. Choisissez le CV anglais ou francais pour cet axe.",
    english: "Anglais",
    french: "Francais",
    back: "Changer de sujet",
    close: "Fermer les options de CV",
    topics: [
      {
        id: "vpp",
        icon: "network",
        title: "VPP et EMS microgrid",
        text: "Coordination DER, dispatch VPP, prevision, workflows EMS et validation reseau."
      },
      {
        id: "controls",
        icon: "monitorCog",
        title: "Controle, automatisation et simulation temps reel",
        text: "Interfaces controleur, E/S simulateur, logique PLC, cartes protocole et diagnostics de timing."
      }
    ]
  }
};

function getCvTopics(language: Language): CvTopic[] {
  const c = copy[language];

  return c.topics.map((topic) => ({
    ...topic,
    downloads: topic.id === "vpp"
      ? [
          { label: c.english, href: profile.cvVppEms },
          { label: c.french, href: profile.cvVppEmsFr }
        ]
      : [
          { label: c.english, href: profile.cvControlAutomation },
          { label: c.french, href: profile.cvControlAutomationFr }
        ]
  }));
}

export default function CvInterestModal({
  isOpen,
  language,
  onClose
}: {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}) {
  const [selectedTopicId, setSelectedTopicId] = useState<CvTopicId | null>(null);
  const titleId = useId();
  const bodyId = useId();
  const c = copy[language];
  const topics = getCvTopics(language);
  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);

  useEffect(() => {
    if (!isOpen) setSelectedTopicId(null);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cv-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="cv-modal-close" aria-label={c.close} onClick={onClose}>
          x
        </button>
        <span className="cv-modal-icon"><Icon name={selectedTopic?.icon || "download"} /></span>
        <h2 id={titleId}>{selectedTopic ? c.downloadTitle : c.title}</h2>
        <p id={bodyId}>{selectedTopic ? c.downloadBody : c.body}</p>

        {selectedTopic ? (
          <>
            <div className="cv-selected-choice">
              <span className="cv-topic-icon"><Icon name={selectedTopic.icon} /></span>
              <div>
                <h3>{selectedTopic.title}</h3>
                <p>{selectedTopic.text}</p>
              </div>
            </div>
            <div className="cv-language-row cv-language-row-large">
              {selectedTopic.downloads.map((download) => (
                download.href && (
                  <a href={download.href} download key={`${selectedTopic.id}-${download.label}`} onClick={onClose}>
                    {download.label}
                  </a>
                )
              ))}
            </div>
            <button type="button" className="cv-modal-back" onClick={() => setSelectedTopicId(null)}>
              {c.back}
            </button>
          </>
        ) : (
          <div className="cv-modal-actions">
            {topics.map((topic) => (
              <button
                type="button"
                className="cv-modal-choice cv-topic-choice"
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
              >
                <span className="cv-topic-icon"><Icon name={topic.icon} /></span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
