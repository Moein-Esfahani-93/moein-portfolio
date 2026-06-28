import { useEffect, useId, useState } from "react";
import Icon from "./Icon";
import { profile } from "../data/profile";
import type { Language } from "../i18n";

type CvTrackId = "controls" | "vpp";
type VoteId = "project-1" | "project-2" | "vpp" | "project-4";

type CvDownload = {
  label: string;
  href?: string;
};

type CvTrack = {
  id: CvTrackId;
  icon: string;
  title: string;
  text: string;
  downloads: CvDownload[];
};

type VoteOption = {
  id: VoteId;
  trackId: CvTrackId;
  icon: string;
  title: string;
  text: string;
};

const voteStorageKey = "moein-cv-interest-vote-v1";

const copy: Record<Language, {
  title: string;
  questionTitle: string;
  questionBody: string;
  thankYou: string;
  alreadyVoted: string;
  controlsTitle: string;
  controlsText: string;
  vppTitle: string;
  vppText: string;
  english: string;
  french: string;
  close: string;
  voteOptions: VoteOption[];
}> = {
  en: {
    title: "Download CV",
    questionTitle: "Help me grow",
    questionBody: "Which project attracted your attention more than the others?",
    thankYou: "Thank you!",
    alreadyVoted: "Thanks again. Your previous vote is already recorded.",
    controlsTitle: "Controls, Automation & RTS",
    controlsText: "Microgrid EMS validation, SIL/CHIL/HIL preparation, controller interfaces, test automation, failure-mode validation, and acceptance evidence.",
    vppTitle: "VPP, DER & Microgrid EMS",
    vppText: "DER coordination, VPP dispatch, forecasting, optimization, market/grid feasibility, microgrid EMS workflows, and power-system research context.",
    english: "English CV",
    french: "French CV",
    close: "Close CV options",
    voteOptions: [
      {
        id: "project-1",
        trackId: "controls",
        icon: "workflow",
        title: "1. Controls / RTS",
        text: "Simulator-controller validation"
      },
      {
        id: "project-2",
        trackId: "controls",
        icon: "monitor",
        title: "2. Microgrid EMS",
        text: "EMS and CIL preparation"
      },
      {
        id: "vpp",
        trackId: "vpp",
        icon: "cloud",
        title: "3. VPP / DER",
        text: "Dispatch and optimization"
      },
      {
        id: "project-4",
        trackId: "controls",
        icon: "serverCog",
        title: "4. Protocol Gateway",
        text: "Device and protocol abstraction"
      }
    ]
  },
  fr: {
    title: "Telecharger le CV",
    questionTitle: "Aidez-moi a progresser",
    questionBody: "Quel projet a le plus attire votre attention?",
    thankYou: "Merci. Votre vote est enregistre.",
    alreadyVoted: "Merci encore. Votre vote precedent est deja enregistre.",
    controlsTitle: "Controle, automatisation et RTS",
    controlsText: "Validation EMS microgrid, preparation SIL/CHIL/HIL, interfaces controleur, automatisation des tests, defaillances et preuves d'acceptation.",
    vppTitle: "VPP, DER et EMS microgrid",
    vppText: "Coordination DER, dispatch VPP, prevision, optimisation, faisabilite marche/reseau, workflows EMS microgrid et contexte recherche reseaux.",
    english: "CV anglais",
    french: "CV francais",
    close: "Fermer les options de CV",
    voteOptions: [
      {
        id: "project-1",
        trackId: "controls",
        icon: "workflow",
        title: "1. Controle / RTS",
        text: "Validation simulateur-controleur"
      },
      {
        id: "project-2",
        trackId: "controls",
        icon: "monitor",
        title: "2. EMS microgrid",
        text: "EMS et preparation CIL"
      },
      {
        id: "vpp",
        trackId: "vpp",
        icon: "cloud",
        title: "3. VPP / DER",
        text: "Dispatch et optimisation"
      },
      {
        id: "project-4",
        trackId: "controls",
        icon: "serverCog",
        title: "4. Passerelle",
        text: "Abstraction protocolaire"
      }
    ]
  }
};

function getCvTracks(language: Language): Record<CvTrackId, CvTrack> {
  const c = copy[language];

  return {
    controls: {
      id: "controls",
      icon: "monitorCog",
      title: c.controlsTitle,
      text: c.controlsText,
      downloads: [
        { label: c.english, href: profile.cvControlAutomation },
        { label: c.french, href: profile.cvControlAutomationFr }
      ]
    },
    vpp: {
      id: "vpp",
      icon: "cloud",
      title: c.vppTitle,
      text: c.vppText,
      downloads: [
        { label: c.english, href: profile.cvVppEms },
        { label: c.french, href: profile.cvVppEmsFr }
      ]
    }
  };
}

function isVoteId(value: string | null): value is VoteId {
  return value === "project-1" || value === "project-2" || value === "vpp" || value === "project-4";
}

function readStoredVote(): VoteId | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(voteStorageKey);
    return isVoteId(value) ? value : null;
  } catch {
    return null;
  }
}

function getTrackForVote(voteId: VoteId, options: VoteOption[]): CvTrackId {
  return options.find((option) => option.id === voteId)?.trackId || "controls";
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
  const titleId = useId();
  const bodyId = useId();
  const c = copy[language];
  const tracks = getCvTracks(language);
  const [selectedVoteId, setSelectedVoteId] = useState<VoteId | null>(null);
  const [justVoted, setJustVoted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setSelectedVoteId(readStoredVote());
    setJustVoted(false);

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function recordVote(voteId: VoteId) {
    if (selectedVoteId || typeof window === "undefined") return;

    try {
      window.localStorage.setItem(voteStorageKey, voteId);
    } catch {
      // Some privacy modes block storage; still let the user continue this session.
    }

    setSelectedVoteId(voteId);
    setJustVoted(true);
  }

  const selectedOption = selectedVoteId ? c.voteOptions.find((option) => option.id === selectedVoteId) : undefined;
  const selectedTrack = selectedVoteId ? tracks[getTrackForVote(selectedVoteId, c.voteOptions)] : null;

  return (
    <div className="cv-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="cv-modal cv-modal-wide"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="cv-modal-close" aria-label={c.close} onClick={onClose}>
          x
        </button>
        <span className="cv-modal-icon"><Icon name={selectedTrack?.icon || "download"} /></span>
        <h2 id={titleId}>{selectedVoteId ? c.title : c.questionTitle}</h2>
        <p id={bodyId}>{selectedVoteId ? (justVoted ? c.thankYou : c.alreadyVoted) : c.questionBody}</p>

        {!selectedVoteId ? (
          <div className="cv-question-grid">
            {c.voteOptions.map((option) => (
              <button type="button" className="cv-modal-choice cv-vote-choice" key={option.id} onClick={() => recordVote(option.id)}>
                <span className="cv-focus-icon"><Icon name={option.icon} /></span>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </button>
            ))}
          </div>
        ) : selectedTrack && (
          <div className="cv-voted-panel">
            {selectedOption && (
              <div className="cv-selected-choice">
                <span className="cv-focus-icon"><Icon name={selectedOption.icon} /></span>
                <div>
                  <h3>{selectedOption.title}</h3>
                  <p>{selectedOption.text}</p>
                </div>
              </div>
            )}

            <article className="cv-download-track cv-download-track-selected">
              <span className="cv-focus-icon"><Icon name={selectedTrack.icon} /></span>
              <h3>{selectedTrack.title}</h3>
              <p>{selectedTrack.text}</p>
              <div className="cv-language-row">
                {selectedTrack.downloads.map((download) => (
                  download.href && (
                    <a href={download.href} download key={`${selectedTrack.id}-${download.label}`} onClick={onClose}>
                      {download.label}
                    </a>
                  )
                ))}
              </div>
            </article>
          </div>
        )}
      </section>
    </div>
  );
}
