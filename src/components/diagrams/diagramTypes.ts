export type FlowNodeVariant =
  | "primary"
  | "accent"
  | "muted"
  | "highlight"
  | "telemetry"
  | "model"
  | "adapter"
  | "command"
  | "service"
  | "solver";

export type FlowNode = {
  id: string;
  label: string;
  labelFr?: string;
  sublabel?: string;
  sublabelFr?: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  variant?: FlowNodeVariant;
};

export type FlowEdge = {
  from: string;
  to: string;
  label?: string;
  labelFr?: string;
  dashed?: boolean;
  bidirectional?: boolean;
  tone?: "forward" | "return" | "rest" | "modbus" | "goose" | "sync" | "internal";
  curve?: number;
  /** Explicit label anchor point (diagram coordinates). Overrides automatic placement so the
   *  label can be parked in open space away from boxes and other labels. */
  labelPos?: { x: number; y: number };
  /** Explicit orthogonal waypoints (diagram coordinates, including start/end ports). Overrides
   *  automatic port/routing for edges that must travel around other boxes (e.g. side-margin
   *  feedback loops). */
  points?: { x: number; y: number }[];
};

export type FlowGroup = {
  label: string;
  labelFr?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  variant?: "cloud" | "platform" | "edge" | "simulator" | "solver" | "interface";
};

export type FlowDiagramData = {
  viewBox?: string;
  groups?: FlowGroup[];
  detailsOnHover?: boolean;
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export type ProjectDiagram = {
  title: string;
  titleFr?: string;
  data: FlowDiagramData;
};
