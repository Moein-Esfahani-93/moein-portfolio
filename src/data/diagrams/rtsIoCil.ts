import type { ProjectDiagram } from "../../components/diagrams/diagramTypes";

export const rtsIoCil: ProjectDiagram[] = [
  {
    title: "Real-Time Simulator, Protocol Interface & AXC F 3152/RTAC Interface",
    titleFr: "Simulateur temps reel, interface protocolaire et interface AXC F 3152",
    data: {
      viewBox: "0 0 1040 520",
      detailsOnHover: true,
      groups: [
        { label: "Real-Time Simulator", labelFr: "Simulateur temps reel", x: 22, y: 28, w: 805, h: 430, variant: "simulator" },
        { label: "Real-Time Solver", labelFr: "Solveur temps reel", x: 42, y: 70, w: 178, h: 348, variant: "solver" },
        { label: "Protocol-Adapter Interface Core", labelFr: "Coeur de l'interface protocolaire", x: 232, y: 58, w: 562, h: 382, variant: "interface" },
        { label: "AXC F 3152/RTAC", labelFr: "AXC F 3152/RTAC", x: 850, y: 28, w: 158, h: 430, variant: "edge" }
      ],
      nodes: [
        { id: "rts", label: "Real-Time Solver", labelFr: "Solveur temps reel", sublabel: "Time-domain solver producing live telemetry and accepting controller command inputs", sublabelFr: "Solveur temporel produisant la telemetrie et acceptant les entrees de commande controleur", x: 131, y: 143, w: 138, h: 62, variant: "solver" },
        { id: "rtscmd", label: "Solver Command Inputs", labelFr: "Entrees de commande solveur", sublabel: "Command inputs written back to the real-time solver", sublabelFr: "Entrees de commande reecrites vers le solveur temps reel", x: 131, y: 352, w: 138, h: 54, variant: "solver" },

        { id: "ingest", label: "Ingestion Receiver", labelFr: "Recepteur d'ingestion", sublabel: "Receives raw telemetry frames from the solver interface", sublabelFr: "Recoit les trames de telemetrie brutes depuis l'interface solveur", x: 298, y: 125, w: 102, h: 56, variant: "telemetry" },
        { id: "validate", label: "Validation & Unpacker", labelFr: "Validation et deballage", sublabel: "Checks frame integrity and unpacks raw payloads into fields", sublabelFr: "Verifie l'integrite des trames et deballe les charges utiles en champs", x: 430, y: 125, w: 102, h: 56, variant: "telemetry" },
        { id: "normalize", label: "Normalization (Mapping)", labelFr: "Normalisation (mapping)", sublabel: "Maps unpacked fields onto canonical asset points", sublabelFr: "Mappe les champs deballes vers les points canoniques des actifs", x: 562, y: 125, w: 102, h: 56, variant: "telemetry" },
        { id: "sync", label: "Sync & Quality", labelFr: "Sync et qualite", sublabel: "Time-synchronizes values and attaches data-quality flags", sublabelFr: "Synchronise les valeurs et ajoute les indicateurs de qualite", x: 694, y: 125, w: 102, h: 56, variant: "telemetry" },

        { id: "diagnostics", label: "Diagnostics & Service Layer", labelFr: "Diagnostics et services", sublabel: "Tracks health, alarms, link status, counters and last command", sublabelFr: "Suit la sante, les alarmes, l'etat des liaisons, compteurs et derniere commande", x: 310, y: 248, w: 136, h: 112, variant: "service" },
        { id: "canonical", label: "Canonical Internal Model", labelFr: "Modele interne canonique", sublabel: "Single canonical representation of CB, DG, BESS and PV points", sublabelFr: "Representation canonique unique des points CB, DG, BESS et PV", x: 502, y: 248, w: 136, h: 112, variant: "model" },
        { id: "protocol", label: "Protocol Surfaces (Adapters)", labelFr: "Surfaces protocolaires (adaptateurs)", sublabel: "Modbus TCP, IEC 61850 GOOSE/MMS, OPC UA and MQTT adapter surfaces", sublabelFr: "Surfaces adaptateurs Modbus TCP, IEC 61850 GOOSE/MMS, OPC UA et MQTT", x: 694, y: 248, w: 136, h: 112, variant: "adapter" },

        { id: "cmdout", label: "Solver Command Output", labelFr: "Sortie commande solveur", sublabel: "Packs and writes accepted commands back to the solver interface", sublabelFr: "Empaquette et ecrit les commandes acceptees vers l'interface solveur", x: 298, y: 360, w: 102, h: 56, variant: "command" },
        { id: "staging", label: "Command Staging", labelFr: "Mise en file commande", sublabel: "Queues validated commands for deterministic solver writes", sublabelFr: "Met en file les commandes validees pour ecriture deterministe vers le solveur", x: 430, y: 360, w: 102, h: 56, variant: "command" },
        { id: "validator", label: "Command Validator", labelFr: "Validateur de commande", sublabel: "Checks commands against limits and current asset state", sublabelFr: "Verifie les commandes selon les limites et l'etat courant des actifs", x: 562, y: 360, w: 102, h: 56, variant: "command" },
        { id: "decoder", label: "Decoder", labelFr: "Decodeur", sublabel: "Parses protocol command payloads from the controller-facing adapters", sublabelFr: "Analyse les charges de commande provenant des adaptateurs orientes controleur", x: 694, y: 360, w: 102, h: 56, variant: "command" },

        { id: "axclogic", label: "Controller Logic / IEC 61131-3 Program", labelFr: "Logique controleur / Programme IEC 61131-3", sublabel: "User-programmed IEC 61131-3 control logic running on the AXC F 3152", sublabelFr: "Logique IEC 61131-3 programmee par l'utilisateur sur AXC F 3152", x: 930, y: 135, w: 130, h: 74, variant: "accent" },
        { id: "axcendpoints", label: "CB / DG / BESS / PV Endpoints", labelFr: "Points CB / DG / BESS / PV", sublabel: "Endpoints read telemetry registers and write command registers", sublabelFr: "Les points lisent les registres de telemetrie et ecrivent les registres de commande", x: 930, y: 312, w: 130, h: 98, variant: "accent" }
      ],
      edges: [
        { from: "rts", to: "ingest", label: "Telemetry ingest", labelFr: "Ingestion telemetrie", tone: "forward", labelPos: { x: 224, y: 119 }, points: [{ x: 200, y: 125 }, { x: 247, y: 125 }] },
        { from: "ingest", to: "validate", label: "Raw frames", labelFr: "Trames brutes", tone: "forward", labelPos: { x: 364, y: 160 } },
        { from: "validate", to: "normalize", label: "Validated frames", labelFr: "Trames validees", tone: "forward", labelPos: { x: 496, y: 160 } },
        { from: "normalize", to: "sync", label: "Mapped points", labelFr: "Points mappes", tone: "forward", labelPos: { x: 628, y: 160 } },
        { from: "sync", to: "canonical", label: "Qualified values", labelFr: "Valeurs qualifiees", tone: "forward", points: [{ x: 694, y: 153 }, { x: 694, y: 205 }, { x: 570, y: 205 }, { x: 570, y: 192 }], labelPos: { x: 632, y: 186 } },

        { from: "diagnostics", to: "canonical", label: "Health/state", labelFr: "Sante/etat", bidirectional: true, labelPos: { x: 406, y: 232 } },
        { from: "canonical", to: "protocol", label: "Canonical points", labelFr: "Points canoniques", tone: "forward", points: [{ x: 570, y: 224 }, { x: 626, y: 224 }], labelPos: { x: 598, y: 208 } },
        { from: "protocol", to: "canonical", label: "Readback state", labelFr: "Etat de retour", tone: "return", points: [{ x: 626, y: 272 }, { x: 570, y: 272 }], labelPos: { x: 598, y: 291 } },

        { from: "protocol", to: "axcendpoints", label: "Modbus TCP telemetry", labelFr: "Telemetrie Modbus TCP", tone: "forward", labelPos: { x: 814, y: 264 }, points: [{ x: 762, y: 276 }, { x: 865, y: 276 }] },
        { from: "axcendpoints", to: "protocol", label: "Modbus TCP setpoints", labelFr: "Consignes Modbus TCP", tone: "return", labelPos: { x: 814, y: 310 }, points: [{ x: 865, y: 294 }, { x: 762, y: 294 }] },
        { from: "axclogic", to: "axcendpoints", label: "Controller I/O", labelFr: "E/S controleur", tone: "internal", bidirectional: true, labelPos: { x: 970, y: 236 }, points: [{ x: 930, y: 172 }, { x: 930, y: 263 }] },

        { from: "protocol", to: "decoder", label: "Command frames", labelFr: "Trames commande", tone: "return", labelPos: { x: 736, y: 318 }, points: [{ x: 694, y: 304 }, { x: 694, y: 332 }] },
        { from: "decoder", to: "validator", label: "Decoded command", labelFr: "Commande decodee", tone: "return", labelPos: { x: 628, y: 335 } },
        { from: "validator", to: "staging", label: "Valid command", labelFr: "Commande valide", tone: "return", labelPos: { x: 496, y: 335 } },
        { from: "staging", to: "cmdout", label: "Staged output", labelFr: "Sortie en file", tone: "return", labelPos: { x: 364, y: 335 } },
        { from: "cmdout", to: "rtscmd", label: "Solver write", labelFr: "Ecriture solveur", tone: "return", labelPos: { x: 224, y: 386 }, points: [{ x: 247, y: 360 }, { x: 200, y: 360 }] }
      ]
    }
  },
  {
    title: "Telemetry / Command Exchange Map",
    titleFr: "Carte d'echange telemetrie / commandes",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "sim", label: "Simulator I/O Signals", labelFr: "Signaux E/S simulateur", sublabel: "voltage, current, power, status and solver feedback signals", sublabelFr: "signaux tension, courant, puissance, statut et retour solveur", x: 150, y: 180, w: 240, h: 90, variant: "primary" },
        { id: "ctrl", label: "Controller I/O", labelFr: "E/S controleur", sublabel: "analog and digital points for controller-facing validation", sublabelFr: "points analogiques et numeriques pour validation orientee controleur", x: 490, y: 180, w: 240, h: 90, variant: "accent" }
      ],
      edges: [
        { from: "sim", to: "ctrl", label: "Telemetry to controller", labelFr: "Telemetrie vers controleur", curve: 25, tone: "forward" },
        { from: "ctrl", to: "sim", label: "Commands from controller", labelFr: "Commandes depuis controleur", curve: 25, tone: "return" }
      ]
    }
  },
  {
    title: "Closed-Loop Timing Evaluation",
    titleFr: "Evaluation du timing en boucle fermee",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "step", label: "Simulator Time Step", labelFr: "Pas de temps simulateur", sublabel: "numerical integration, state updates and convergence handling", sublabelFr: "integration numerique, mises a jour d'etat et gestion de convergence", x: 320, y: 60, w: 380, h: 60, variant: "primary" },
        { id: "exch", label: "Protocol Exchange", labelFr: "Echange protocolaire", sublabel: "I/O scaling and protocol transmission to controller", sublabelFr: "mise a l'echelle E/S et transmission protocolaire au controleur", x: 180, y: 240, w: 220, h: 80, variant: "accent" },
        { id: "resp", label: "Controller Response", labelFr: "Reponse controleur", sublabel: "setpoint, command and status feedback returned to simulator", sublabelFr: "retour de consignes, commandes et statuts vers le simulateur", x: 500, y: 240, w: 220, h: 80, variant: "accent" }
      ],
      edges: [
        { from: "step", to: "exch", label: "I/O exchange", labelFr: "Echange E/S", tone: "forward" },
        { from: "exch", to: "resp", label: "Telemetry / command exchange", labelFr: "Echange telemetrie / commandes", tone: "forward" },
        { from: "resp", to: "step", label: "Feedback", labelFr: "Retour", dashed: true, tone: "return", labelPos: { x: 600, y: 150 }, points: [{ x: 610, y: 240 }, { x: 625, y: 240 }, { x: 625, y: 60 }, { x: 510, y: 60 }] }
      ]
    }
  }
];
