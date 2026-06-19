import type { ProjectDiagram } from "../../components/diagrams/diagramTypes";
import { cloudEdgeVpp } from "./cloudEdgeVpp";
import { emsQstsScada } from "./emsQstsScada";
import { rtsIoCil } from "./rtsIoCil";
import { gatewayMicrogrid } from "./gatewayMicrogrid";

export const diagramsByProject: Record<string, ProjectDiagram[]> = {
  "cloud-edge-vpp": cloudEdgeVpp,
  "ems-qsts-scada": emsQstsScada,
  "rts-io-cil": rtsIoCil,
  "gateway-microgrid-control": gatewayMicrogrid
};
