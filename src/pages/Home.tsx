import Icon from "../components/Icon";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import type { Language } from "../i18n";
import { t as translate } from "../i18n";
import type { PageId } from "../types";

const copy = {
  en: {
    profileTitle: "Summary of What I do",
    profile:"Power systems control and validation engineer focused on testing EMS and microgrid controllers before field deployment. I build realistic simulation-based validation workflows that connect EMS/VPP dispatch logic, DER operating constraints, real-time simulator interfaces, PLC/RTAC controller logic, and industrial communication protocols. My work includes controller-facing test scenarios, real-time I/O mapping, communication-delay and failure-mode testing, command/readback verification, timing and latency diagnostics, validation logs, and acceptance evidence for SIL, CHIL, and HIL preparation. I also bring VPP/DER optimization experience, including forecasting, DER capability estimation, market rules, grid-feasibility studies, and uncertainty-aware dispatch outputs, which helps me create realistic EMS and controller-validation cases.",
    selectedProjectsTitle: "PROJECTS & IMPLEMENTATIONS",
    capabilityTitle: "CAPABILITY BACKBONE",
    contactTitle: "CONTACT",
    technicalTitle: "ENGINEERING TOOLKIT",
    educationTitle: "EDUCATION & RESEARCH",
    controls: "Controls",
    simulation: "Simulation",
    vpp: "VPP/DER",
    supervisor: "Ph.D. Supervisor",
    advisor: "Advisor",
    supervisorName: "Prof. Innocent Kamwa",
    advisorName: "Prof. Nima Amjady",
    viewProjects: "View Projects",
    seeMore: "See more",
    chips: ["CHIL/HIL Prep", "RTS Interfaces", "Microgrid EMS", "Test Automation", "VPP/DER Context", "Optimization"],
    education: [
      { degree: "Ph.D., Electrical Engineering", detail: "Universite Laval, Quebec City, QC | 2020 - 2024" }
    ],
  },
  fr: {
    profileTitle: "PROFIL VALIDATION CONTROLE",
    profile:
      "Ingenieur en validation controle microgrid axe sur la validation EMS, la simulation orientee controleur, la preparation CHIL/HIL, les interfaces RTS et l'automatisation des tests. Je travaille entre logique PLC/RTAC, E/S simulateur temps reel, mappings protocolaires, scenarios de defaillance, diagnostics timing, verification commande/lecture, journaux de validation et preuves d'acceptation. Le dispatch VPP/DER et l'optimisation restent un axe de support important: j'utilise prevision, capacite DER, regles marche, etudes de faisabilite reseau et sorties de dispatch sous incertitude pour creer des cas realistes de validation EMS et controleur.",
    selectedProjectsTitle: "PROJETS ET IMPLEMENTATIONS",
    capabilityTitle: "AXES TECHNIQUES",
    contactTitle: "CONTACT",
    technicalTitle: "OUTILS D'INGENIERIE",
    educationTitle: "FORMATION & RECHERCHE",
    controls: "Controle",
    simulation: "Simulation",
    vpp: "VPP/DER",
   supervisor: "Directeur de Ph.D.",
    advisor: "Conseiller",
    supervisorName: "Prof. Innocent Kamwa",
    advisorName: "Prof. Nima Amjady",
    viewProjects: "Voir les projets",
    seeMore: "Voir plus",
    chips: ["Preparation CHIL/HIL", "Interfaces RTS", "EMS microgrid", "Automatisation tests", "Contexte VPP/DER", "Optimisation"],
    education: [
      { degree: "Ph.D., Genie electrique", detail: "Universite Laval, Quebec City, QC | 2020 - 2024" }
    ],
  }
};

const capabilityCards = [
  {
    title: "Controls validation and real-time interfaces",
    titleFr: "Validation controle et interfaces temps reel",
    icon: "workflow",
    bullets: [
      "SIL/CHIL/HIL preparation, controller-in-the-loop workflows, validation scenarios, logs, and evidence packages",
      "IEC 61131-3 Structured Text, Ladder, Function Block, FSM sequencing, interlocks, watchdogs, and safe fallback",
      "PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider M262/M580, DEIF, ELUM, and ComAp controllers",
      "Modbus TCP/RTU, IEC 61850 MMS/GOOSE, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, WebSocket"
    ],
    bulletsFr: [
      "Preparation SIL/CHIL/HIL, workflows controller-in-the-loop, scenarios de validation, journaux et preuves",
      "IEC 61131-3 Structured Text, Ladder, Function Block, sequences FSM, interlocks, watchdogs et repli sur",
      "Controleurs PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider M262/M580, DEIF, ELUM et ComAp",
      "Modbus TCP/RTU, IEC 61850 MMS/GOOSE, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, WebSocket"
    ]
  },
  {
    title: "Simulation, EMS and grid feasibility",
    titleFr: "Simulation, EMS et faisabilite reseau",
    icon: "monitor",
    bullets: [
      "OpenDSS QSTS/time-series studies, PSS/E planning and dynamic workflows, PSCAD EMT analysis, MATLAB/Simulink",
      "Microgrid EMS supervisory decisions, secondary-control interaction, voltage limits, feeder loading, and DER response",
      "Scenario generation from price, load, PV, weather, market, simulation, and diagnostic datasets",
      "Python, C/C++, SQL, FastAPI, Kafka, MQTT, WebSocket, Redis, Git, validation logs, and JSON/SQL artifacts"
    ],
    bulletsFr: [
      "Etudes OpenDSS QSTS/temporelles, workflows PSS/E planification/dynamique, analyse EMT PSCAD, MATLAB/Simulink",
      "Decisions EMS microgrid, interaction controle secondaire, limites de tension, chargement et reponse DER",
      "Generation de scenarios depuis donnees prix, charge, PV, meteo, marche, simulation et diagnostic",
      "Python, C/C++, SQL, FastAPI, Kafka, MQTT, WebSocket, Redis, Git, journaux de validation et artefacts JSON/SQL"
    ]
  },
  {
    title: "VPP/DER dispatch and optimization context",
    titleFr: "Contexte dispatch VPP/DER et optimisation",
    icon: "cloud",
    bullets: [
      "Auto-trader, forecaster, capability extractor, optimizer, dispatch propagator, and monitoring workflows",
      "ISO/RTO market structures including ERCOT, MISO, NYISO, and ISO-NE concepts",
      "Energy, reserve, frequency-regulation, voltage-support, and grid-feasibility objectives",
      "DER aggregation, flexibility envelopes, BESS SoC, PV availability, risk-aware constraints, and dispatch disaggregation"
    ],
    bulletsFr: [
      "Workflows auto-trader, prevision, extracteur de capacite, optimiseur, propagateur de dispatch et monitoring",
      "Structures marche ISO/RTO incluant concepts ERCOT, MISO, NYISO et ISO-NE",
      "Objectifs energie, reserve, regulation de frequence, soutien de tension et faisabilite reseau",
      "Aggregation DER, enveloppes de flexibilite, SoC BESS, disponibilite PV, contraintes risque et desagregation dispatch"
    ]
  }
];

const projectIcons: Record<string, string> = {
  "rts-io-cil": "workflow",
  "ems-qsts-scada": "monitor",
  "cloud-edge-vpp": "cloud",
  "gateway-microgrid-control": "serverCog"
};
const phdPeople = {
  supervisor: "https://innocent-kamwa.fsg.ulaval.ca/en",
  advisor: "https://www.federation.edu.au/research/find-an-expert/Nima-Amjady"
};
export default function Home({ language, goToPage, setActiveProjectId }: { language: Language; goToPage: (page: PageId) => void; setActiveProjectId: (id: string) => void }) {
  const c = copy[language];

  function openProject(projectId: string) {
    setActiveProjectId(projectId);
    goToPage("projects");
  }

  return (
    <div className="home-flow fade-in">
      <section className="home-row">
        <h2 className="section-title hero-title">{c.profileTitle}</h2>
        <div className="card home-profile-card">
          <div className="profile-card-body">
            <p className="profile-lede">{c.profile}</p>
            <div className="home-chip-row">
              {c.chips.map((chip) => <span key={chip}>{chip}</span>)}
              <button type="button" className="home-view-projects" onClick={() => goToPage("projects")}>
                {c.viewProjects} -&gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-row">
        <h2 className="section-title section-title-compact">{c.selectedProjectsTitle}</h2>
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
                  {c.seeMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-row">
        <h2 className="section-title section-title-compact">{c.capabilityTitle}</h2>
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
          <h2 className="section-title-small">{c.contactTitle}</h2>
          <div className="info-line"><Icon name="mail" className="small" /><span>{profile.email}</span></div>
          {profile.phone && <div className="info-line"><Icon name="phone" className="small" /><span>{profile.phone}</span></div>}
              {profile.alternateEmail && (
            <a className="info-line contact-link" href={`mailto:${profile.alternateEmail}`}>
              <img src="/laval.png" alt="Universite Laval" className="laval-icon" /><span>{profile.alternateEmail}</span>
            </a>
          )}
          <a className="info-line contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="linkedin-box">in</span><span>linkedin.com/in/moeinesfahani1993</span>
          </a>
        </div>

        <div className="card bottom-card skills-card">
          <h2 className="section-title-small">{c.technicalTitle}</h2>
          <div className="technical-matrix">
            <div><b>{c.controls}</b><span>IEC 61131-3</span><span>Modbus</span><span>RTAC</span><span>CHIL/HIL</span></div>
            <div><b>{c.simulation}</b><span>OpenDSS</span><span>PSS/E</span><span>PSCAD</span><span>MATLAB</span></div>
            <div><b>{c.vpp}</b><span>MILP</span><span>DRO</span><span>ERCOT</span><span>MISO</span></div>
          </div>
        </div>

        <div className="card bottom-card education-card">
          <h2 className="section-title-small">{c.educationTitle}</h2>
          <div className="education-list">
            {c.education.map((item) => (
              <div className="education-row" key={item.degree}>
                <div className="education-icon"><img src="/laval.png" alt="Universite Laval" className="laval-icon" /></div>
                <div>
                  <b>{item.degree}</b>
                  <p>{item.detail}</p>
                  <div className="education-people">
                    <span>{c.supervisor}: <a className="person-link" href={phdPeople.supervisor} target="_blank" rel="noreferrer">{c.supervisorName}</a></span>
                    <span>{c.advisor}: <a className="person-link" href={phdPeople.advisor} target="_blank" rel="noreferrer">{c.advisorName}</a></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
