import { useState } from "react";
import type { FlowDiagramData } from "./diagramTypes";
import { t, type Language } from "../../i18n";

const NODE_W = 150;
const NODE_H = 56;
const LABEL_LINE_HEIGHT = 13.5;
const SUBLABEL_LINE_HEIGHT = 11;
const LABEL_CHAR_WIDTH = 6.3;
const SUBLABEL_CHAR_WIDTH = 4.5;
const EDGE_LABEL_LINE_HEIGHT = 11;
const EDGE_LABEL_CHAR_WIDTH = 5.1;

type Point = { x: number; y: number };
type Segment = { from: Point; to: Point };
type RenderNode = FlowDiagramData["nodes"][number] & { w: number; h: number };
type RenderEdge = {
  key: string;
  className: string;
  path: string;
  markerEnd: string;
  markerStart?: string;
  labelLines: string[];
  labelX: number;
  labelY: number;
  labelWidth: number;
  labelHeight: number;
};

function wrapLabel(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function portPoint(
  node: { x: number; y: number; w?: number; h?: number },
  target: { x: number; y: number },
  axis: "horizontal" | "vertical"
): Point {
  const w = node.w ?? NODE_W;
  const h = node.h ?? NODE_H;

  if (axis === "horizontal") {
    return {
      x: node.x + (target.x >= node.x ? w / 2 : -w / 2),
      y: node.y
    };
  }

  return {
    x: node.x,
    y: node.y + (target.y >= node.y ? h / 2 : -h / 2)
  };
}

function samePoint(a: Point, b: Point) {
  return Math.abs(a.x - b.x) < 0.01 && Math.abs(a.y - b.y) < 0.01;
}

function addSegment(segments: Segment[], from: Point, to: Point) {
  if (!samePoint(from, to)) segments.push({ from, to });
}

function parseViewBox(viewBox: string) {
  const [x = 0, y = 0, w = 640, h = 360] = viewBox.split(/\s+/).map(Number);
  return { x, y, w, h, maxX: x + w, maxY: y + h };
}

function normalizeStackedNodes(nodes: FlowDiagramData["nodes"]): RenderNode[] {
  const grouped = new Map<number, (RenderNode & { hasExplicitSize: boolean })[]>();
  const rendered = nodes.map((node) => ({
    ...node,
    w: node.w ?? NODE_W,
    h: node.h ?? NODE_H,
    hasExplicitSize: node.w !== undefined && node.h !== undefined
  }));

  for (const node of rendered) {
    const key = Math.round(node.x / 10) * 10;
    grouped.set(key, [...(grouped.get(key) ?? []), node]);
  }

  for (const group of grouped.values()) {
    if (group.length < 3) continue;
    const maxW = Math.max(...group.map((node) => node.w));
    const maxH = Math.max(...group.map((node) => node.h));
    for (const node of group) {
      if (node.hasExplicitSize) continue;
      node.w = maxW;
      node.h = maxH;
    }
  }

  return rendered;
}

function isStackedDownEdge(from: RenderNode, to: RenderNode, hasManualRoute: boolean, curve?: number) {
  return !hasManualRoute && !curve && Math.abs(from.x - to.x) < 12 && to.y > from.y;
}

function routeRightStep(from: RenderNode, to: RenderNode, viewBox: ReturnType<typeof parseViewBox>) {
  const start = { x: from.x + from.w / 2, y: from.y + from.h * 0.26 };
  const end = { x: to.x + to.w / 2, y: to.y - to.h * 0.26 };
  const laneX = Math.min(viewBox.maxX - 34, Math.max(start.x, end.x) + 58);
  const elbowTop = { x: laneX, y: start.y };
  const elbowBottom = { x: laneX, y: end.y };
  const segments: Segment[] = [];
  addSegment(segments, start, elbowTop);
  addSegment(segments, elbowTop, elbowBottom);
  addSegment(segments, elbowBottom, end);

  return {
    segments,
    labelPoint: {
      x: (laneX + end.x) / 2,
      y: to.y - to.h / 2 - 9
    }
  };
}

function routeSegments(start: Point, end: Point, axis: "horizontal" | "vertical", curve?: number): Segment[] {
  const segments: Segment[] = [];
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  if (Math.abs(dx) < 0.01 || Math.abs(dy) < 0.01) {
    if (curve && Math.abs(dx) >= Math.abs(dy)) {
      const laneY = start.y + curve * Math.sign(dx || 1);
      addSegment(segments, start, { x: start.x, y: laneY });
      addSegment(segments, { x: start.x, y: laneY }, { x: end.x, y: laneY });
      addSegment(segments, { x: end.x, y: laneY }, end);
      return segments;
    }

    if (curve && Math.abs(dy) > Math.abs(dx)) {
      const laneX = start.x - curve * Math.sign(dy || 1);
      addSegment(segments, start, { x: laneX, y: start.y });
      addSegment(segments, { x: laneX, y: start.y }, { x: laneX, y: end.y });
      addSegment(segments, { x: laneX, y: end.y }, end);
      return segments;
    }

    addSegment(segments, start, end);
    return segments;
  }

  if (curve) {
    if (axis === "horizontal") {
      const laneY = (start.y + end.y) / 2 + curve * Math.sign(dx || 1);
      addSegment(segments, start, { x: start.x, y: laneY });
      addSegment(segments, { x: start.x, y: laneY }, { x: end.x, y: laneY });
      addSegment(segments, { x: end.x, y: laneY }, end);
    } else {
      const laneX = (start.x + end.x) / 2 - curve * Math.sign(dy || 1);
      addSegment(segments, start, { x: laneX, y: start.y });
      addSegment(segments, { x: laneX, y: start.y }, { x: laneX, y: end.y });
      addSegment(segments, { x: laneX, y: end.y }, end);
    }
    return segments;
  }

  if (axis === "horizontal") {
    const midX = (start.x + end.x) / 2;
    addSegment(segments, start, { x: midX, y: start.y });
    addSegment(segments, { x: midX, y: start.y }, { x: midX, y: end.y });
    addSegment(segments, { x: midX, y: end.y }, end);
  } else {
    const midY = (start.y + end.y) / 2;
    addSegment(segments, start, { x: start.x, y: midY });
    addSegment(segments, { x: start.x, y: midY }, { x: end.x, y: midY });
    addSegment(segments, { x: end.x, y: midY }, end);
  }

  return segments;
}

function pathFromSegments(segments: Segment[]) {
  if (!segments.length) return "";
  const [first] = segments;
  return `M ${first.from.x} ${first.from.y} ${segments.map((segment) => `L ${segment.to.x} ${segment.to.y}`).join(" ")}`;
}

function segmentLength(segment: Segment) {
  return Math.hypot(segment.to.x - segment.from.x, segment.to.y - segment.from.y);
}

function labelPoint(segments: Segment[]) {
  const segment = segments.reduce((best, current) => (segmentLength(current) > segmentLength(best) ? current : best), segments[0]);
  return {
    x: (segment.from.x + segment.to.x) / 2,
    y: (segment.from.y + segment.to.y) / 2
  };
}

const TONED_MARKERS = ["forward", "return", "rest", "modbus", "goose", "sync", "internal"];

function markerForTone(tone?: string, dashed?: boolean) {
  if (tone && TONED_MARKERS.includes(tone)) return `url(#flow-arrow-${tone})`;
  if (dashed) return "url(#flow-arrow-muted)";
  return "url(#flow-arrow)";
}

type FlowDiagramProps = {
  data: FlowDiagramData;
  title?: string;
  language: Language;
};

export default function FlowDiagram({ data, title, language }: FlowDiagramProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const viewBox = data.viewBox ?? "0 0 640 360";
  const viewBoxParts = parseViewBox(viewBox);
  const detailsOnHover = !!data.detailsOnHover;
  const hasLayerGroups = !!data.groups?.length;
  const markerSize = hasLayerGroups ? 5.6 : 7.5;
  const renderNodes = normalizeStackedNodes(data.nodes);
  const nodeById = new Map(renderNodes.map((node) => [node.id, node]));
  const tooltipRenders = renderNodes.flatMap((node) => {
    const nodeSublabel = node.sublabel ? t(language, node.sublabel, node.sublabelFr) : undefined;
    const tooltipLines = nodeSublabel && detailsOnHover ? wrapLabel(nodeSublabel, 30).slice(0, 3) : [];
    if (!tooltipLines.length || hoveredNodeId !== node.id) return [];

    const tooltipWidth = Math.max(...tooltipLines.map((line) => line.length)) * 5.1 + 18;
    const tooltipHeight = tooltipLines.length * 11 + 10;
    const tooltipX = Math.min(Math.max(node.x, viewBoxParts.x + tooltipWidth / 2 + 6), viewBoxParts.maxX - tooltipWidth / 2 - 6);
    const tooltipY = node.y > viewBoxParts.y + 70
      ? node.y - node.h / 2 - tooltipHeight / 2 - 8
      : node.y + node.h / 2 + tooltipHeight / 2 + 8;

    return [{
      id: node.id,
      lines: tooltipLines,
      width: tooltipWidth,
      height: tooltipHeight,
      x: tooltipX,
      y: tooltipY
    }];
  });
  const edgeRenders: RenderEdge[] = data.edges.flatMap((edge, i) => {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    if (!from || !to) return [];
    let segments: Segment[];
    let preferredLabelPoint: Point | undefined;
    let isRightStep = false;
    if (edge.points && edge.points.length >= 2) {
      segments = [];
      for (let p = 0; p < edge.points.length - 1; p += 1) {
        addSegment(segments, edge.points[p], edge.points[p + 1]);
      }
    } else {
      const axis = Math.abs(to.x - from.x) >= Math.abs(to.y - from.y) ? "horizontal" : "vertical";
      if (isStackedDownEdge(from, to, !!edge.points, edge.curve)) {
        const routed = routeRightStep(from, to, viewBoxParts);
        segments = routed.segments;
        preferredLabelPoint = routed.labelPoint;
        isRightStep = true;
      } else {
        const start = portPoint(from, to, axis);
        const end = portPoint(to, from, axis);
        segments = routeSegments(start, end, axis, edge.curve);
      }
    }

    const label = t(language, edge.label || "flow", edge.labelFr);
    const labelLines = edge.label || edge.labelFr ? wrapLabel(label, isRightStep ? 16 : 20).slice(0, 3) : [];
    const labelWidth = labelLines.length ? Math.max(...labelLines.map((line) => line.length)) * EDGE_LABEL_CHAR_WIDTH + 16 : 0;
    const labelHeight = labelLines.length * EDGE_LABEL_LINE_HEIGHT + 8;
    const preferred = edge.labelPos ?? preferredLabelPoint ?? labelPoint(segments);
    let labelX = preferred.x;
    const labelY = preferred.y;

    if (isRightStep && labelLines.length) {
      const targetRight = to.x + to.w / 2;
      const minLabelX = targetRight + labelWidth / 2 + 5;
      const maxLabelX = viewBoxParts.maxX - labelWidth / 2 - 4;
      labelX = minLabelX <= maxLabelX
        ? Math.min(maxLabelX, Math.max(minLabelX, labelX))
        : (targetRight + viewBoxParts.maxX) / 2;
    }

    const markerEnd = markerForTone(edge.tone, edge.dashed);

    return [{
      key: `${edge.from}-${edge.to}-${i}`,
      className: `flow-edge${edge.dashed ? " dashed" : ""}${edge.tone ? ` ${edge.tone}` : ""}${isRightStep ? " right-step" : ""}`,
      path: pathFromSegments(segments),
      markerEnd,
      markerStart: edge.bidirectional ? markerEnd : undefined,
      labelLines,
      labelX,
      labelY,
      labelWidth,
      labelHeight
    }];
  });

  return (
    <svg className={`flow-diagram${hasLayerGroups ? " layered-diagram" : ""}`} viewBox={viewBox} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth={markerSize} markerHeight={markerSize} orient="auto-start-reverse">
          <path d="M0 0.5L9.5 5L0 9.5z" className="flow-arrow-head" />
        </marker>
        <marker id="flow-arrow-muted" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth={markerSize} markerHeight={markerSize} orient="auto-start-reverse">
          <path d="M0 0.5L9.5 5L0 9.5z" className="flow-arrow-head-muted" />
        </marker>
        {TONED_MARKERS.map((tone) => (
          <marker key={tone} id={`flow-arrow-${tone}`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth={markerSize} markerHeight={markerSize} orient="auto-start-reverse">
            <path d="M0 0.5L9.5 5L0 9.5z" className={`flow-arrow-head-${tone}`} />
          </marker>
        ))}
      </defs>

      {data.groups && (
        <g className="flow-groups">
          {data.groups.map((group) => (
            <g key={group.label} className={`flow-group ${group.variant ?? "default"}`}>
              <rect x={group.x} y={group.y} width={group.w} height={group.h} rx={0} />
              <text x={group.x + 12} y={group.y + 22}>
                {t(language, group.label, group.labelFr)}
              </text>
            </g>
          ))}
        </g>
      )}

      <g className="flow-edges">
        {edgeRenders.map((edge) => (
          <g key={edge.key} className={edge.className}>
            <path d={edge.path} markerEnd={edge.markerEnd} markerStart={edge.markerStart} />
          </g>
        ))}
      </g>

      <g className="flow-nodes">
        {renderNodes.map((node) => {
          const w = node.w;
          const h = node.h;
          const labelMaxChars = Math.max(8, Math.floor((w - 14) / LABEL_CHAR_WIDTH));
          const nodeLabel = t(language, node.label, node.labelFr);
          const nodeSublabel = node.sublabel ? t(language, node.sublabel, node.sublabelFr) : undefined;
          const labelLines = wrapLabel(nodeLabel, labelMaxChars).slice(0, 3);
          const subMaxChars = Math.max(10, Math.floor((w - 14) / SUBLABEL_CHAR_WIDTH));
          const sublabelLines = nodeSublabel && !detailsOnHover ? wrapLabel(nodeSublabel, subMaxChars).slice(0, 2) : [];
          const labelBlockHeight = labelLines.length * LABEL_LINE_HEIGHT;
          const subBlockHeight = sublabelLines.length ? sublabelLines.length * SUBLABEL_LINE_HEIGHT + 6 : 0;
          const totalHeight = labelBlockHeight + subBlockHeight;
          const labelStartY = node.y - totalHeight / 2 + LABEL_LINE_HEIGHT * 0.74;
          const subStartY = node.y - totalHeight / 2 + labelBlockHeight + 6 + SUBLABEL_LINE_HEIGHT * 0.74;

          return (
            <g
              key={node.id}
              className={`flow-node ${node.variant ?? "muted"}`}
              tabIndex={nodeSublabel && detailsOnHover ? 0 : undefined}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onFocus={() => setHoveredNodeId(node.id)}
              onBlur={() => setHoveredNodeId(null)}
            >
              {nodeSublabel && <title>{nodeSublabel}</title>}
              <rect x={node.x - w / 2} y={node.y - h / 2} width={w} height={h} rx={0} />
              <text x={node.x} y={labelStartY} textAnchor="middle" className="flow-node-label">
                {labelLines.map((line, i) => (
                  <tspan key={i} x={node.x} dy={i === 0 ? 0 : LABEL_LINE_HEIGHT}>{line}</tspan>
                ))}
              </text>
              {sublabelLines.length > 0 && (
                <text x={node.x} y={subStartY} textAnchor="middle" className="flow-node-sublabel">
                  {sublabelLines.map((line, i) => (
                    <tspan key={i} x={node.x} dy={i === 0 ? 0 : SUBLABEL_LINE_HEIGHT}>{line}</tspan>
                  ))}
                </text>
              )}
            </g>
          );
        })}
      </g>

      <g className="flow-edge-labels">
        {edgeRenders.filter((edge) => edge.labelLines.length > 0).map((edge) => (
          <g key={`${edge.key}-label`} className="flow-edge-label">
            <rect x={edge.labelX - edge.labelWidth / 2} y={edge.labelY - edge.labelHeight / 2} width={edge.labelWidth} height={edge.labelHeight} rx={2} />
            <text x={edge.labelX} y={edge.labelY - ((edge.labelLines.length - 1) * EDGE_LABEL_LINE_HEIGHT) / 2 + 3.5} textAnchor="middle">
              {edge.labelLines.map((line, lineIndex) => (
                <tspan key={`${line}-${lineIndex}`} x={edge.labelX} dy={lineIndex === 0 ? 0 : EDGE_LABEL_LINE_HEIGHT}>{line}</tspan>
              ))}
            </text>
          </g>
        ))}
      </g>

      <g className="flow-tooltips">
        {tooltipRenders.map((tooltip) => (
          <g key={`${tooltip.id}-tooltip`} className="flow-node-tooltip">
            <rect x={tooltip.x - tooltip.width / 2} y={tooltip.y - tooltip.height / 2} width={tooltip.width} height={tooltip.height} rx={0} />
            <text x={tooltip.x} y={tooltip.y - ((tooltip.lines.length - 1) * 11) / 2 + 3} textAnchor="middle">
              {tooltip.lines.map((line, i) => (
                <tspan key={`${line}-${i}`} x={tooltip.x} dy={i === 0 ? 0 : 11}>{line}</tspan>
              ))}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
