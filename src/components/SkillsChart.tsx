import Icon from "./Icon";
import type { Language } from "../i18n";

type FuzzyLevel = 1 | 2 | 3 | 4 | 5;

type CapabilityAxis = {
  label: string;
  labelFr: string;
  level: FuzzyLevel;
};

type CapabilityGroup = {
  title: string;
  titleFr: string;
  caption: string;
  captionFr: string;
  icon: string;
  variant: "market" | "software" | "automation";
  emphasis: FuzzyLevel;
  axes: CapabilityAxis[];
  tools: Array<{ name: string; nameFr?: string }>;
};

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Controls Validation & RTS Interfaces",
    titleFr: "Validation controle et interfaces RTS",
    caption: "Primary portfolio direction",
    captionFr: "Direction principale",
    icon: "workflow",
    variant: "automation",
    emphasis: 4,
    axes: [
      { label: "Signal contracts", labelFr: "Contrats signaux", level: 4 },
      { label: "Failure modes", labelFr: "Modes defaillance", level: 4 },
      { label: "PLC/RTAC logic", labelFr: "Logique PLC/RTAC", level: 3 },
      { label: "Acceptance checks", labelFr: "Criteres acceptation", level: 4 }
    ],
    tools: [
      { name: "PLCnext" },
      { name: "SEL RTAC" },
      { name: "IEC 61131-3" },
      { name: "Modbus" },
      { name: "IEC 61850" },
      { name: "OPC UA" },
      { name: "DNP3" },
      { name: "CHIL/HIL" }
    ]
  },
  {
    title: "Power-System Software, Forecasting & EMS",
    titleFr: "Logiciel reseau, prevision et EMS",
    caption: "Software bridge from analysis to validation",
    captionFr: "Pont logiciel analyse-validation",
    icon: "monitor",
    variant: "software",
    emphasis: 4,
    axes: [
      { label: "Grid feasibility", labelFr: "Faisabilite reseau", level: 4 },
      { label: "Study automation", labelFr: "Automatisation etudes", level: 4 },
      { label: "Data pipelines", labelFr: "Pipelines donnees", level: 4 },
      { label: "EMS services", labelFr: "Services EMS", level: 4 }
    ],
    tools: [
      { name: "Python" },
      { name: "C/C++" },
      { name: "FastAPI" },
      { name: "REST" },
      { name: "SQL" },
      { name: "Redis" },
      { name: "Kafka" },
      { name: "MQTT" },
      { name: "WebSocket" },
      { name: "OpenDSS" },
      { name: "PSS/E" },
      { name: "PSCAD" }
    ]
  },
  {
    title: "VPP/DER Dispatch & Optimization",
    titleFr: "Dispatch VPP/DER et optimisation",
    caption: "Supporting power-systems depth",
    captionFr: "Base reseaux en support",
    icon: "cloud",
    variant: "market",
    emphasis: 3,
    axes: [
      { label: "DER capability", labelFr: "Capacite DER", level: 4 },
      { label: "Dispatch propagation", labelFr: "Propagation dispatch", level: 4 },
      { label: "Optimization", labelFr: "Optimisation", level: 4 },
      { label: "Market/grid rules", labelFr: "Regles marche/reseau", level: 3 }
    ],
    tools: [
      { name: "Pyomo" },
      { name: "Gurobi" },
      { name: "CPLEX" },
      { name: "DRO/MILP" },
      { name: "ADMM" },
      { name: "OpenDSS/QSTS" },
      { name: "ERCOT" },
      { name: "MISO" },
      { name: "NYISO" },
      { name: "ISO-NE" }
    ]
  }
];

const fuzzyLabels = {
  en: ["exposure", "working", "solid", "strong", "primary"],
  fr: ["exposition", "operationnel", "solide", "fort", "principal"]
};

function localized(language: Language, en: string, fr?: string) {
  return language === "fr" && fr ? fr : en;
}

function FuzzyPills({ level, label, language }: { level: FuzzyLevel; label: string; language: Language }) {
  const descriptor = fuzzyLabels[language][level - 1];

  return (
    <div className="fuzzy-score-wrap">
      <div className="fuzzy-pill-meter" aria-label={`${label}: ${descriptor}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} className={index < level ? "filled" : ""} aria-hidden="true" />
        ))}
      </div>
      <small>{descriptor}</small>
    </div>
  );
}

export default function SkillsChart({ language }: { language: Language }) {
  return (
    <section className="skills-chart-section" aria-labelledby="capability-map-title">
      <h3 className="section-title-small" id="capability-map-title">
        {language === "fr" ? "Carte compacte des capacites" : "Skills Demographic"}
      </h3>
      <div className="skills-chart-grid">
        {capabilityGroups.map((group) => {
          return (
            <article className={`skills-chart-track ${group.variant}`} key={group.title}>
              <div className="capability-track-head">
                <span className="capability-track-icon"><Icon name={group.icon} /></span>
                <div>
                  <h4>{localized(language, group.title, group.titleFr)}</h4>
                  <p>{localized(language, group.caption, group.captionFr)}</p>
                </div>
                <div className="capability-fuzzy-summary">
                  <span>{language === "fr" ? "Profondeur" : "Depth"}</span>
                  <FuzzyPills level={group.emphasis} label={localized(language, group.title, group.titleFr)} language={language} />
                </div>
              </div>

              <div className="capability-axis-chart" aria-label={language === "fr" ? "Indicateurs qualitatifs de capacite" : "Qualitative capability indicators"}>
                {group.axes.map((axis) => (
                  <div className="capability-axis-row" key={axis.label}>
                    <span>{localized(language, axis.label, axis.labelFr)}</span>
                    <FuzzyPills level={axis.level} label={localized(language, axis.label, axis.labelFr)} language={language} />
                  </div>
                ))}
              </div>

              <div className="capability-chip-strip">
                {group.tools.map((tool) => (
                  <span key={tool.name}>{localized(language, tool.name, tool.nameFr)}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
