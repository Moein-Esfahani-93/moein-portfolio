import type { ProjectDiagram } from "../../components/diagrams/diagramTypes";

export const gatewayMicrogrid: ProjectDiagram[] = [
  {
    title: "Gateway Protocol Interface",
    titleFr: "Pont de protocoles de la passerelle",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "hub", label: "Multi-Protocol Gateway", labelFr: "Passerelle multiprotocole", sublabel: "common point model for controllers and simulators", sublabelFr: "modèle de points commun pour contrôleurs et simulateurs", x: 320, y: 180, w: 200, h: 80, variant: "primary" },
        { id: "p1", label: "IEC 61850 / DNP3 / IEC 60870-5-104", labelFr: "IEC 61850 / DNP3 / IEC 60870-5-104", sublabel: "telemetry, commands and status exchange", sublabelFr: "échange télémétrie, commandes et statuts", x: 210, y: 50, w: 220, h: 64, variant: "accent" },
        { id: "p2", label: "OPC UA / MQTT / WebSocket", labelFr: "OPC UA / MQTT / WebSocket", sublabel: "software and data-Interface exchange", sublabelFr: "échange logiciel et Interfaces de données", x: 430, y: 50, w: 220, h: 64, variant: "accent" },
        { id: "p3", label: "Modbus TCP / RTU", labelFr: "Modbus TCP / RTU", sublabel: "device-level register I/O exchange", sublabelFr: "échange E/S registre au niveau équipement", x: 210, y: 310, w: 220, h: 64, variant: "accent" },
        { id: "p4", label: "CAN / J1939", labelFr: "CAN / J1939", sublabel: "device telemetry and command exchange", sublabelFr: "échange télémétrie et commandes équipement", x: 430, y: 310, w: 220, h: 64, variant: "accent" }
      ],
      edges: [
        { from: "hub", to: "p1", label: "status / commands", labelFr: "statuts / commandes", bidirectional: true },
        { from: "hub", to: "p2", label: "software data", labelFr: "données logiciel", bidirectional: true },
        { from: "hub", to: "p3", label: "register I/O", labelFr: "E/S registres", bidirectional: true },
        { from: "hub", to: "p4", label: "device data", labelFr: "données équipement", bidirectional: true }
      ]
    }
  },
  {
    title: "Common Point Model",
    titleFr: "Modèle de points commun",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "proto", label: "Adapter-Ready Protocol Layer", labelFr: "Couche protocole prête pour adaptateurs", sublabel: "Modbus implementation; IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3 and IEC 60870-5-104 adapter targets", sublabelFr: "implémentation Modbus; cibles adaptateurs IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3 et IEC 60870-5-104", x: 320, y: 50, w: 480, h: 56, variant: "accent" },
        { id: "canon", label: "Common Point Model", labelFr: "Modèle de points commun", sublabel: "device profiles, register maps, scaling and quality flags", sublabelFr: "profils équipement, cartes registres, mise à l'échelle et flags qualité", x: 320, y: 150, w: 320, h: 64, variant: "primary" },
        { id: "up", label: "EMS Setpoints and VPP Dispatch Targets", labelFr: "Consignes EMS et cibles de dispatch VPP", sublabel: "setpoints, limits and command priority", sublabelFr: "consignes, limites et priorité des commandes", x: 180, y: 300, w: 260, h: 70, variant: "muted" },
        { id: "down", label: "Device Control Interfaces", labelFr: "Interfaces de contrôle équipement", sublabel: "BESS PCS, PV inverter, meter, and controller points", sublabelFr: "points PCS BESS, onduleur PV, compteur et contrôleur", x: 460, y: 300, w: 260, h: 70, variant: "muted" }
      ],
      edges: [
        { from: "proto", to: "canon", label: "normalized data", labelFr: "données normalisées" },
        { from: "canon", to: "up", label: "setpoints & limits", labelFr: "consignes et limites" },
        { from: "canon", to: "down", label: "device commands", labelFr: "commandes équipement" }
      ]
    }
  },
  {
    title: "Embedded Interface & Command Priority",
    titleFr: "Pont embarqué et priorité des commandes",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "primary", label: "Device Profiles & Register Maps", labelFr: "Profils d'équipement et cartes registres", sublabel: "point model, scaling and data-quality flags", sublabelFr: "modèle de points, mise à l'échelle et flags qualité", x: 320, y: 45, w: 420, h: 54, variant: "primary" },
        { id: "Interface", label: "Command Priority Logic", labelFr: "Logique de priorité des commandes", sublabel: "multi-source control arbitration", sublabelFr: "arbitrage de contrôle multi-source", x: 320, y: 130, w: 440, h: 58, variant: "accent" },
        { id: "secondary", label: "Embedded Interface(C/C++ / Python / SQL)", labelFr: "Pont embarqué (C/C++ / Python / SQL)", sublabel: "Raspberry Pi, embedded Linux, SoC, STM32, Zynq/PYNQ", sublabelFr: "Raspberry Pi, Linux embarqué, SoC, STM32, Zynq/PYNQ", x: 320, y: 215, w: 440, h: 58, variant: "accent" },
        { id: "microgrid", label: "Test Automation & Logging", labelFr: "Automatisation des tests et journalisation", sublabel: "repeatable interface validation", sublabelFr: "validation reproductible du pont", x: 320, y: 300, w: 420, h: 54, variant: "muted" }
      ],
      edges: [
        { from: "primary", to: "Interface", label: "profiles / flags", labelFr: "profils / flags", bidirectional: true },
        { from: "Interface", to: "secondary", label: "prioritized commands", labelFr: "commandes priorisées", bidirectional: true },
        { from: "secondary", to: "microgrid", label: "test runs / logs", labelFr: "tests / journaux", bidirectional: true }
      ]
    }
  }
];
