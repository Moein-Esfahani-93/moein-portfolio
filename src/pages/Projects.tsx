import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Icon from "../components/Icon";
import DiagramPanel from "../components/diagrams/DiagramPanel";
import { projects } from "../data/projects";
import { diagramsByProject } from "../data/diagrams";
import type { Project } from "../types";
import { t, type Language } from "../i18n";

type ProjectsProps = { activeProject: Project; setActiveProjectId: (id: string) => void; language: Language };

const tabLabels: Record<string, Record<Language, string>> = {
  "cloud-edge-vpp": { en: "VPP Market-to-Grid", fr: "VPP marche-reseau" },
  "rts-io-cil": { en: "Controls Validation", fr: "Validation controle" },
  "ems-qsts-scada": { en: "EMS CHIL Prep", fr: "Preparation EMS CHIL" },
  "gateway-microgrid-control": { en: "Protocol Gateway", fr: "Passerelle protocole" }
};

const tabIcons: Record<string, string> = {
  "rts-io-cil": "workflow",
  "ems-qsts-scada": "monitor",
  "cloud-edge-vpp": "cloud",
  "gateway-microgrid-control": "serverCog"
};

const copy: Record<Language, {
  nav: string;
  diagrams: string;
  selector: string;
  showDiagram: string;
  nextDiagram: string;
  next: string;
  details: string;
  problem: string;
  approach: string;
  methods: string;
  kicker: string;
  title: string;
  body: string;
}> = {
  en: {
    kicker: "Projects",
    title: "Controls, EMS & VPP Implementations",
    body: "The primary thread is controller-facing validation for microgrid EMS, PLC/RTAC logic, and RTS interfaces. VPP/DER software work remains visible as a supporting power-systems track for forecasting, DER capability, optimization, dispatch propagation, data pipelines, and OpenDSS/QSTS grid-feasibility validation.",
    nav: "Project areas",
    diagrams: "Architecture & data-flow diagrams",
    selector: "Diagram selector",
    showDiagram: "Show diagram",
    nextDiagram: "Show next diagram",
    next: "Next",
    details: "Project details",
    problem: "Problem",
    approach: "Approach",
    methods: "Methods"
  },
  fr: {
    kicker: "Projets",
    title: "Implementations controle, EMS et VPP",
    body: "Le fil principal est la validation orientee controleur pour EMS microgrid, logique PLC/RTAC et interfaces RTS. Le travail logiciel VPP/DER reste visible comme axe reseaux en support pour prevision, capacite DER, optimisation, propagation dispatch, pipelines donnees et validation OpenDSS/QSTS de faisabilite reseau.",
    nav: "Domaines de projet",
    diagrams: "Schemas d'architecture et de flux de donnees",
    selector: "Selecteur de schema",
    showDiagram: "Afficher le schema",
    nextDiagram: "Afficher le schema suivant",
    next: "Suivant",
    details: "Details du projet",
    problem: "Probleme",
    approach: "Approche",
    methods: "Methodes"
  }
};

export default function Projects({ activeProject, setActiveProjectId, language }: ProjectsProps) {
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  const diagrams = diagramsByProject[activeProject.id] || [];
  const activeDiagram = diagrams[activeDiagramIndex] || diagrams[0];
  const c = copy[language];
  const domain = t(language, activeProject.domain, activeProject.domainFr);
  const title = t(language, activeProject.title, activeProject.titleFr);
  const visualSlots = language === "fr" && activeProject.visualSlotsFr ? activeProject.visualSlotsFr : activeProject.visualSlots;

  useEffect(() => {
    setActiveDiagramIndex(0);
  }, [activeProject.id]);

  function goToNextDiagram() {
    if (!diagrams.length) return;
    setActiveDiagramIndex((index) => (index + 1) % diagrams.length);
  }

  return (
    <div className="sub-page-container projects-page fade-in">
      <PageTitle kicker={c.kicker} title={c.title} body={c.body} />

      <nav className="project-tab-grid" aria-label={c.nav}>
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={activeProject.id === project.id ? "active" : ""}
            onClick={() => setActiveProjectId(project.id)}
          >
            <span className="project-tab-number">{project.number}</span>
            <span className="project-tab-icon"><Icon name={tabIcons[project.id]} /></span>
            <strong>{tabLabels[project.id]?.[language] || t(language, project.domain, project.domainFr)}</strong>
            <small>{t(language, project.domain, project.domainFr)}</small>
          </button>
        ))}
      </nav>

      <article className="card project-detail project-detail-compact">
        <header className="project-hero-row">
          <div className="project-meta"><span>{activeProject.number}</span><span>{domain}</span></div>
          <h2>{title}</h2>
          <p className="project-short">{t(language, activeProject.short, activeProject.shortFr)}</p>
          <div className="tags">
            {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>

        {diagrams.length > 0 && activeDiagram && (
          <>
            <h3 className="section-title-small">{c.diagrams}</h3>
            <div className="project-diagram-carousel">
              <DiagramPanel
                key={activeDiagram.title}
                title={t(language, activeDiagram.title, activeDiagram.titleFr)}
                caption={visualSlots[activeDiagramIndex]}
                data={activeDiagram.data}
                language={language}
              />
              <aside className="diagram-carousel-controls" aria-label={c.selector}>
                <div className="diagram-step-buttons">
                  {diagrams.map((diagram, index) => (
                    <button
                      key={diagram.title}
                      type="button"
                      className={activeDiagramIndex === index ? "active" : ""}
                      aria-label={`${c.showDiagram} ${index + 1}: ${t(language, diagram.title, diagram.titleFr)}`}
                      aria-current={activeDiagramIndex === index ? "true" : undefined}
                      onClick={() => setActiveDiagramIndex(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button type="button" className="diagram-next-button" onClick={goToNextDiagram} aria-label={c.nextDiagram}>
                  <span>{c.next}</span>
                  <Icon name="arrowRight" />
                </button>
              </aside>
            </div>
          </>
        )}

        <details className="project-details">
          <summary>
            <span>{c.details}</span>
            <Icon name="chevron" className="small" />
          </summary>
          <div className="project-summary-strip">
            <section>
              <h3>{c.problem}</h3>
              <p>{t(language, activeProject.problem, activeProject.problemFr)}</p>
            </section>
            <section>
              <h3>{c.approach}</h3>
              <p>{t(language, activeProject.contribution, activeProject.contributionFr)}</p>
            </section>
          </div>
          <div className="project-list-box">
            <h3>{c.methods}</h3>
            <ul>{(language === "fr" && activeProject.methodsFr ? activeProject.methodsFr : activeProject.methods).map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </details>
      </article>
    </div>
  );
}
