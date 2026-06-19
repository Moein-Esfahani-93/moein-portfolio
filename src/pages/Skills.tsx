import { useState } from "react";
import PageTitle from "../components/PageTitle";
import SkillsChart from "../components/SkillsChart";
import Icon from "../components/Icon";
import { skills } from "../data/skills";
import { t, type Language } from "../i18n";
import type { SkillBlock } from "../types";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms(text: string, terms: string[]) {
  const sortedTerms = terms
    .filter((term) => text.toLowerCase().includes(term.toLowerCase()))
    .sort((a, b) => b.length - a.length);

  if (!sortedTerms.length) return text;

  const pattern = new RegExp(`(?<![A-Za-z0-9])(${sortedTerms.map(escapeRegExp).join("|")})(?![A-Za-z0-9])`, "gi");
  return text.split(pattern).map((part, index) => {
    const isTerm = sortedTerms.some((term) => term.toLowerCase() === part.toLowerCase());
    return isTerm ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

const skillPreviewWordLimit = 24;

function getSkillPreview(text: string) {
  const words = text.split(/\s+/);

  if (words.length <= skillPreviewWordLimit) {
    return { preview: text, hasMore: false };
  }

  return {
    preview: words.slice(0, skillPreviewWordLimit).join(" ").replace(/[,:;]$/, ""),
    hasMore: true
  };
}

const copy: Record<Language, { kicker: string; title: string; body: string }> = {
  en: {
    kicker: "Technical fit",
    title: "Core skills and specialties",
    body: ""
  },
  fr: {
    kicker: "Profil technique",
    title: "Competences cles en optimisation, plateformes et automatisation.",
    body: "Vue compacte des principaux axes techniques. Utilisez Plus pour afficher la suite."
  }
};

const trackMeta: Record<SkillBlock["track"], { label: string; labelFr: string; icon: string }> = {
  research: { label: "Grid research", labelFr: "Recherche reseau", icon: "network" },
  market: { label: "Market logic", labelFr: "Logique marche", icon: "trendUp" },
  software: { label: "Software stack", labelFr: "Pile logicielle", icon: "serverCog" },
  automation: { label: "Control layer", labelFr: "Couche controle", icon: "workflow" }
};

const skillIcons = [
  "network",
  "target",
  "workflow",
  "bid",
  "monitor",
  "chart",
  "serverCog",
  "code",
  "circuit",
  "flask"
];

export default function Skills({ language }: { language: Language }) {
  const c = copy[language];
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(() => new Set());
  const moreLabel = language === "fr" ? "Plus" : "More";
  const lessLabel = language === "fr" ? "Moins" : "Less";

  function toggleSkill(title: string) {
    setExpandedSkills((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  }

  return (
    <div className="sub-page-container fade-in">
      <PageTitle
        kicker={c.kicker}
        title={c.title}
        body={c.body}
      />

      <SkillsChart language={language} />

      <div className="skills-grid">
        {skills.map((item, index) => {
          const terms = language === "fr" && item.keywordsFr ? item.keywordsFr : item.keywords;
          const fullText = t(language, item.text, item.textFr);
          const { preview, hasMore } = getSkillPreview(fullText);
          const isExpanded = expandedSkills.has(item.title);
          const visibleText = isExpanded ? fullText : preview;

          return (
            <article className={`card skill-card skill-card-${item.track}`} key={item.title}>
              <div className="skill-card-diagram" aria-hidden="true">
                <span className="skill-card-icon"><Icon name={skillIcons[index] || trackMeta[item.track].icon} /></span>
              </div>
              <div className="skill-card-content">
                <div className="skill-card-meta">
                  <span className="skill-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="skill-track-pill">
                    <Icon name={trackMeta[item.track].icon} />
                    {t(language, trackMeta[item.track].label, trackMeta[item.track].labelFr)}
                  </span>
                </div>
                <h3>{t(language, item.title, item.titleFr)}</h3>
                <p className="skill-card-summary">
                  {highlightTerms(visibleText, terms)}
                  {hasMore && !isExpanded && (
                    <>
                      <span aria-hidden="true">... </span>
                      <button
                        type="button"
                        className="skill-more-button"
                        aria-expanded={isExpanded}
                        aria-label={`${moreLabel}: ${t(language, item.title, item.titleFr)}`}
                        onClick={() => toggleSkill(item.title)}
                      >
                        {moreLabel}
                      </button>
                    </>
                  )}
                  {hasMore && isExpanded && (
                    <>
                      {" "}
                      <button
                        type="button"
                        className="skill-more-button skill-less-button"
                        aria-expanded={isExpanded}
                        aria-label={`${lessLabel}: ${t(language, item.title, item.titleFr)}`}
                        onClick={() => toggleSkill(item.title)}
                      >
                        {lessLabel}
                      </button>
                    </>
                  )}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
