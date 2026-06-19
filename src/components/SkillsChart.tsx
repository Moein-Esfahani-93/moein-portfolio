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
  icon: string;
  variant: "market" | "software" | "automation";
  emphasis: FuzzyLevel;
  axes: CapabilityAxis[];
  tools: Array<{ name: string; nameFr?: string }>;
};

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "VPP, Markets & Optimization",
    titleFr: "VPP, marchés et optimisation",
    icon: "trendUp",
    variant: "market",
    emphasis: 4,
    axes: [
      { label: "Market rules", labelFr: "Règles marché", level: 4 },
      { label: "Optimization", labelFr: "Optimisation", level: 4 },
      { label: "DER/grid limits", labelFr: "Limites DER/réseau", level: 3 },
      { label: "Dispatch logic", labelFr: "Logique dispatch", level: 4 }
    ],
    tools: [
      { name: "Pyomo" },
      { name: "Gurobi" },
      { name: "CPLEX" },
      { name: "IPOPT" },
      { name: "ERCOT" },
      { name: "MISO" },
      { name: "NYISO" },
      { name: "ISO-NE" }
    ]
  },
  {
    title: "Software, Forecasting & Grid Validation",
    titleFr: "Logiciel, prévision et validation réseau",
    icon: "monitor",
    variant: "software",
    emphasis: 4,
    axes: [
      { label: "Forecasting", labelFr: "Prévision", level: 3 },
      { label: "Orchestration", labelFr: "Orchestration", level: 4 },
      { label: "Grid validation", labelFr: "Validation réseau", level: 4 },
      { label: "Data streaming", labelFr: "Flux données", level: 3 }
    ],
    tools: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Kafka" },
      { name: "MQTT" },
      { name: "OpenDSS" },
      { name: "PSS/E" },
      { name: "PSCAD" },
      { name: "MATLAB" },
      { name: "XGBoost" }
    ]
  },
  {
    title: "Control Automation, RTS & Interfaces",
    titleFr: "Automatisation, RTS et interfaces",
    icon: "workflow",
    variant: "automation",
    emphasis: 3,
    axes: [
      { label: "Signal contracts", labelFr: "Contrats signaux", level: 4 },
      { label: "PLC logic", labelFr: "Logique PLC", level: 3 },
      { label: "Protocol I/O", labelFr: "E/S protocole", level: 4 },
      { label: "Timing diagnostics", labelFr: "Diagnostics timing", level: 3 }
    ],
    tools: [
      { name: "PLCnext" },
      { name: "SEL RTAC" },
      { name: "Modbus" },
      { name: "IEC 61850" },
      { name: "OPC UA" },
      { name: "DNP3" },
      { name: "OPAL-RT" },
      { name: "RTDS" }
    ]
  }
];

const fuzzyLabels = {
  en: ["light", "working", "solid", "strong", "primary"],
  fr: ["léger", "opérationnel", "solide", "fort", "principal"]
};

function localized(language: Language, en: string, fr?: string) {
  return language === "fr" && fr ? fr : en;
}

function FuzzyPills({ level, label, language }: { level: FuzzyLevel; label: string; language: Language }) {
  const descriptor = fuzzyLabels[language][level - 1];

  return (
    <div className="fuzzy-pill-meter" aria-label={`${label}: ${descriptor}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <i key={index} className={index < level ? "filled" : ""} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function SkillsChart({ language }: { language: Language }) {
  return (
    <section className="skills-chart-section" aria-labelledby="capability-map-title">
      <h3 className="section-title-small" id="capability-map-title">
        {language === "fr" ? "Carte compacte des capacités" : "Compact Capability Map"}
      </h3>
      <div className="skills-chart-grid">
        {capabilityGroups.map((group) => {
          const visibleTools = group.tools.slice(0, 6);
          const hiddenToolCount = group.tools.length - visibleTools.length;

          return (
            <article className={`skills-chart-track ${group.variant}`} key={group.title}>
              <div className="capability-track-head">
                <span className="capability-track-icon"><Icon name={group.icon} /></span>
                <div>
                  <h4>{localized(language, group.title, group.titleFr)}</h4>
                </div>
                <div className="capability-fuzzy-summary">
                  <span>{language === "fr" ? "Accent" : "Focus"}</span>
                  <FuzzyPills level={group.emphasis} label={localized(language, group.title, group.titleFr)} language={language} />
                </div>
              </div>

              <div className="capability-axis-chart" aria-label={language === "fr" ? "Indicateurs qualitatifs de capacité" : "Qualitative capability indicators"}>
                {group.axes.map((axis) => (
                  <div className="capability-axis-row" key={axis.label}>
                    <span>{localized(language, axis.label, axis.labelFr)}</span>
                    <FuzzyPills level={axis.level} label={localized(language, axis.label, axis.labelFr)} language={language} />
                  </div>
                ))}
              </div>

              <div className="capability-chip-strip">
                {visibleTools.map((tool) => (
                  <span key={tool.name}>{localized(language, tool.name, tool.nameFr)}</span>
                ))}
                {hiddenToolCount > 0 && (
                  <span className="tool-more">+{hiddenToolCount} {language === "fr" ? "autres" : "more"}</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
