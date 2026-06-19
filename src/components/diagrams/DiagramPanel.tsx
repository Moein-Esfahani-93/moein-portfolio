import FlowDiagram from "./FlowDiagram";
import type { FlowDiagramData } from "./diagramTypes";
import { type Language } from "../../i18n";

type DiagramPanelProps = {
  title: string;
  caption: string;
  data: FlowDiagramData;
  language: Language;
};

function TitleArrow() {
  return (
    <svg className="diagram-title-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h16M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

function renderDiagramTitle(title: string) {
  const parts = title.split(/\s*(?:->|→)\s*/);

  if (parts.length === 1) return title;

  return parts.map((part, index) => (
    <span key={`${part}-${index}`} className="diagram-title-part">
      {index > 0 && <TitleArrow />}
      {part}
    </span>
  ));
}

export default function DiagramPanel({ title, caption, data, language }: DiagramPanelProps) {
  const label = language === "fr" ? "Schéma" : "Diagram";

  return (
    <figure className="diagram-panel">
      <div className="diagram-panel-heading">
        <span>{label}</span>
        <h3>{renderDiagramTitle(title)}</h3>
      </div>
      <FlowDiagram data={data} title={title} language={language} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
