import Icon from "../components/Icon";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import type { Language } from "../i18n";
import { t as translate } from "../i18n";
import type { PageId } from "../types";

const copy = {
  en: {
    profileTitle: "PERSONAL PROFILE",
    profile:
      "Power systems engineer with a completed Ph.D. in DER coordination and VPP optimization, working across market, grid, and controller-validation layers. On the VPP side, I build market-participation workflows that translate ISO/RTO rules, forecasts, DER portfolio capability, and grid-security constraints into bid/offer and dispatch decisions. In parallel, I develop microgrid EMS workflows for operating-mode logic, supervisory setpoints, secondary-control interaction, and controller-facing validation. On the controls side, I build IEC 61131-3 logic, real-time simulator I/O, and industrial protocol interfaces that make those decisions executable and testable with PLCs, RTACs, and vendor microgrid controllers.",
    selectedProjectsTitle: "PROJECTS & IMPLEMENTATIONS",
    capabilityTitle: "CAPABILITY BACKBONE",
    contactTitle: "CONTACT",
    technicalTitle: "TECHNICAL CENTER",
    educationTitle: "EDUCATION & RESEARCH",
    power: "Power systems",
    optimization: "Optimization",
    software: "Programming Languages",
    degree: "Ph.D. - Electrical Engineering",
    completed: "Université Laval - completed Ph.D.",
    focus: "Technical focus",
    viewProjects: "View Projects",
    seeMore: "See more",
    chips: ["VPP Dispatch", "Microgrid EMS", "Grid Studies", "RTS Interfaces", "Optimization"]
  },
  fr: {
    profileTitle: "PROFIL",
    profile:
      "Ingénieur en réseaux électriques avec un Ph.D. complété en coordination DER et optimisation VPP, travaillant entre les couches marché, réseau et validation contrôleur. Côté VPP, je développe des workflows de participation marché qui traduisent règles ISO/RTO, prévisions, capacité de portefeuille DER et contraintes réseau en décisions d'offre et de dispatch. En parallèle, je développe des workflows EMS microgrid pour les modes d'exploitation, consignes de supervision, interaction avec le contrôle secondaire et validation orientée contrôleur. Côté contrôle, je développe la logique IEC 61131-3, les E/S de simulateur temps réel et les interfaces protocolaires qui rendent ces décisions exécutables et testables avec des PLC, RTAC et contrôleurs microgrid fournisseurs.",
    selectedProjectsTitle: "RÉSUMÉ DES PROJETS 1-3",
    capabilityTitle: "AXES TECHNIQUES",
    contactTitle: "CONTACT",
    technicalTitle: "CENTRE TECHNIQUE",
    educationTitle: "FORMATION & RECHERCHE",
    power: "Réseaux",
    optimization: "Optimisation",
    software: "Logiciel",
    degree: "Ph.D. - Génie électrique",
    completed: "Université Laval - complété",
    focus: "Axe technique",
    viewProjects: "Voir les projets",
    seeMore: "Voir plus",
    chips: ["Dispatch VPP", "EMS microgrid", "Études réseau", "Interfaces RTS", "Optimisation"]
  }
};

const capabilityCards = [
  {
    title: "VPP market dispatch",
    titleFr: "Dispatch marché VPP",
    icon: "target",
    bullets: [
      "Auto-trader, forecaster, capability extractor, optimizer, dispatch propagator",
      "ISO/RTO rules - ERCOT, MISO, NYISO, ISO-NE",
      "Energy, reserve, and frequency-regulation products; voltage-support objectives",
      "Distribution time-series studies and EMT-oriented validation"
    ],
    bulletsFr: [
      "Auto-trader, prévision, extracteur de capacité, optimiseur, propagateur de dispatch",
      "Règles ISO/RTO - ERCOT, MISO, NYISO, ISO-NE",
      "Produits énergie, réserve et régulation de fréquence; objectifs de soutien de tension",
      "Études temporelles de distribution et validation orientée EMT"
    ]
  },
  {
    title: "Software and solvers",
    titleFr: "Logiciels et solveurs",
    icon: "code",
    bullets: [
      "PSS/E, OpenDSS, PSCAD, MATLAB",
      "FastAPI services, Kafka, MQTT, WebSocket, Redis",
      "Price, load, and PV forecasting with LSTM, GRU, CNN, random forest, XGBoost",
      "Python, C/C++, SQL, Java, TypeScript; live dashboards, telemetry, and dispatch data streams"
    ],
    bulletsFr: [
      "PSS/E, OpenDSS, PSCAD, MATLAB",
      "Services FastAPI, Kafka, MQTT, WebSocket, Redis",
      "Prévision prix, charge et PV avec LSTM, GRU, CNN, random forest, XGBoost",
      "Python, C/C++, SQL, Java, TypeScript;Tableaux de bord live, télémétrie et flux de données de dispatch"
    ]
  },
  {
    title: "Automation and controllers",
    titleFr: "Automatisation et contrôleurs",
    icon: "bot",
    bullets: [
      "IEC 61131-3 Structured Text, Ladder, and Function Block",
      "Real-time simulator I/O and controller-in-the-loop preparation",
      "Modbus TCP/RTU, IEC 61850 and OPC UA concepts, DNP3, CAN/J1939",
      "Latency, jitter, stale-data, timeout, acknowledgement, and readback diagnostics"
    ],
    bulletsFr: [
      "IEC 61131-3 Structured Text, Ladder et Function Block",
      "E/S de simulateur temps réel et préparation controller-in-the-loop",
      "Modbus TCP/RTU, IEC 61850 and OPC UA concepts, DNP3, CAN/J1939",
      "Diagnostics de latence, jitter, données périmées, timeout, acquittement et lecture"
    ]
  }
];

const projectIcons: Record<string, string> = {
  "cloud-edge-vpp": "trendUp",
  "ems-qsts-scada": "monitor",
  "rts-io-cil": "workflow"
};

export default function Home({ language, goToPage, setActiveProjectId }: { language: Language; goToPage: (page: PageId) => void; setActiveProjectId: (id: string) => void }) {
  const t = copy[language];

  function openProject(projectId: string) {
    setActiveProjectId(projectId);
    goToPage("projects");
  }

  return (
    <div className="home-flow fade-in">
      <section className="home-row">
        <h2 className="section-title hero-title">{t.profileTitle}</h2>
        <div className="card home-profile-card">
          <div className="profile-card-body">
            <p className="profile-lede">{t.profile}</p>
            <div className="home-chip-row">
              {t.chips.map((chip) => <span key={chip}>{chip}</span>)}
              <button type="button" className="home-view-projects" onClick={() => goToPage("projects")}>
                {t.viewProjects} →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-row">
        <h2 className="section-title section-title-compact">{t.selectedProjectsTitle}</h2>
        <div className="home-projects-grid">
          {projects.slice(0, 3).map((project) => (
            <div
              className="card home-project-card"
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openProject(project.id);
                }
              }}
            >
              <div className="home-card-ribbon">
                <span className="home-card-ribbon-icon"><Icon name={projectIcons[project.id]} /></span>
                <b>{translate(language, project.title, project.titleFr)}</b>
              </div>
              <p>{translate(language, project.short, project.shortFr)}</p>
              <div className="home-project-footer">
                <div className="home-project-tags"><span>{project.tags[0]}</span><span>{project.tags[1]}</span></div>
                <button
                  type="button"
                  className="home-project-see-more"
                  onClick={(event) => {
                    event.stopPropagation();
                    openProject(project.id);
                  }}
                >
                  {t.seeMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-row">
        <h2 className="section-title section-title-compact">{t.capabilityTitle}</h2>
        <div className="achievement-grid capability-grid-home">
          {capabilityCards.map((card) => (
            <div className="card achievement-card capability-card-home" key={card.title}>
              <div className="home-card-ribbon">
                <span className="home-card-ribbon-icon"><Icon name={card.icon} /></span>
                <b>{translate(language, card.title, card.titleFr)}</b>
              </div>
              <ul>
                {(language === "fr" ? card.bulletsFr : card.bullets).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="home-row home-bottom-layout">
        <div className="card bottom-card contact-card">
          <h2 className="section-title-small">{t.contactTitle}</h2>
          <div className="info-line"><Icon name="mail" className="small" /><span>{profile.email}</span></div>
          <a className="info-line contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="linkedin-box">in</span><span>linkedin.com/in/moeinesfahani1993</span>
          </a>
        </div>

        <div className="card bottom-card skills-card">
          <h2 className="section-title-small">{t.technicalTitle}</h2>
          <div className="technical-matrix">
            <div><b>{t.power}</b><span>PSS/E</span><span>OpenDSS</span><span>PSCAD</span><span>MATLAB</span></div>
            <div><b>{t.optimization}</b><span>Robust</span><span>Stochastic</span><span>Probabilistic</span></div>
            <div><b>{t.software}</b><span>Python</span><span>C/C++</span><span>SQL</span><span>TypeScript</span></div>
          </div>
        </div>

        <div className="card bottom-card education-card">
          <h2 className="section-title-small">{t.educationTitle}</h2>
          <div className="education-list">
            <div className="education-row divider">
              <div className="education-icon"><Icon name="cap" className="small" /></div>
              <div><b>{t.degree}</b><p>{t.completed}</p></div>
            </div>
            <div className="education-row">
              <div className="education-icon"><Icon name="flask" className="small" /></div>
              <div><b>{t.focus}</b><p>{language === "fr" ? "Coordination DER orientée réseau, dispatch VPP sous incertitude, validation EMS microgrid, soutien tension/fréquence et simulation orientée contrôleur" : "Grid-aware DER coordination, VPP dispatch under uncertainty, microgrid EMS validation, voltage/frequency support, and controller-facing simulation"}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
