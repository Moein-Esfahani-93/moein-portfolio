import type { ProjectDiagram } from "../../components/diagrams/diagramTypes";

export const emsQstsScada: ProjectDiagram[] = [
  {
    title: "Microgrid EMS, AXC F 3152 & Controller-Interface Architecture",
    titleFr: "Architecture EMS microgrid, AXC F 3152 et Interface contrôleur",
    data: {
      viewBox: "0 0 1020 760",
      detailsOnHover: true,
      groups: [
        { label: "Northbound / Enterprise EMS", labelFr: "EMS northbound / entreprise", x: 300, y: 20, w: 600, h: 150, variant: "cloud" },
        { label: "Controller (AXC F 3152)", labelFr: "Controleur (AXC F 3152)", x: 290, y: 190, w: 600, h: 320, variant: "platform" },
        { label: "Plant Model: QSTS Emulation & Real-Time HIL", labelFr: "Modele de procede : emulation QSTS et HIL temps reel", x: 290, y: 540, w: 600, h: 170, variant: "edge" }
      ],
      nodes: [
        { id: "laptop", label: "Personal Laptop / Frontend Server", labelFr: "Portable personnel / serveur frontend", sublabel: "Issues EMS requests over HTTPS and REST only; no Modbus link", sublabelFr: "Envoie des requetes EMS via HTTPS et REST uniquement; aucun lien Modbus", x: 70, y: 375, w: 110, h: 710, variant: "muted" },
        { id: "timesource", label: "Deterministic Time Source (IEEE 1588 / Hardware Sync)", labelFr: "Source de temps deterministe (IEEE 1588 / sync materielle)", sublabel: "Distributes hardware time sync to the GOOSE endpoint and to Layer 3", sublabelFr: "Distribue la synchronisation materielle au point GOOSE et a la couche 3", x: 220, y: 450, w: 160, h: 55, variant: "muted" },

        { id: "webui", label: "Web UI Backend", labelFr: "Backend interface web", sublabel: "Serves the dashboard and forwards laptop requests to the dispatch engine", sublabelFr: "Sert le tableau de bord et relaie les requetes du portable vers le moteur de dispatch", x: 395, y: 95, w: 110, h: 55, variant: "muted" },
        { id: "restapi", label: "REST API Gateway", labelFr: "Passerelle API REST", sublabel: "Routes control-API requests into the dispatch engine", sublabelFr: "Route les requetes de l'API de controle vers le moteur de dispatch", x: 520, y: 95, w: 110, h: 55, variant: "muted" },
        { id: "dispatch", label: "Dispatch Engine & OPC UA Core Server (OPC UA)", labelFr: "Moteur de dispatch et serveur coeur OPC UA", sublabel: "Issues tertiary setpoints to the controller and receives telemetry and states back", sublabelFr: "Envoie des consignes tertiaires au controleur et recoit en retour la telemetrie et les etats", x: 700, y: 95, w: 200, h: 55, variant: "accent" },
        { id: "historian", label: "Historian DB", labelFr: "BD Historian", sublabel: "Time-series historian storing telemetry and event history", sublabelFr: "Historian temporel stockant telemetrie et historique d'evenements", x: 940, y: 70, w: 130, h: 44, variant: "muted" },
        { id: "sqlconfig", label: "SQL Config", labelFr: "Config SQL", sublabel: "SQL store for controller and point-map configuration", sublabelFr: "Base SQL pour la configuration du controleur et des cartes de points", x: 940, y: 125, w: 130, h: 44, variant: "muted" },

        { id: "axcentry", label: "Controller Interface (OPC UA)", labelFr: "Interface controleur (OPC UA)", sublabel: "Generic OPC UA boundary between the enterprise EMS and the controller; no specific inner box", sublabelFr: "Frontiere OPC UA generique entre l'EMS d'entreprise et le controleur; aucune boite interne specifique", x: 605, y: 230, w: 560, h: 14, variant: "highlight" },

        { id: "clientpv", label: "Client PV", labelFr: "Client PV", sublabel: "Receives Modbus telemetry relayed directly from Server PV", sublabelFr: "Recoit la telemetrie Modbus relayee directement depuis le serveur PV", x: 380, y: 270, w: 110, h: 55, variant: "muted" },
        { id: "clientbess", label: "Client BESS", labelFr: "Client BESS", sublabel: "Receives Modbus telemetry relayed directly from Server BESS", sublabelFr: "Recoit la telemetrie Modbus relayee directement depuis le serveur BESS", x: 510, y: 270, w: 110, h: 55, variant: "muted" },
        { id: "clientdg", label: "Client DG", labelFr: "Client DG", sublabel: "Receives Modbus telemetry relayed directly from Server DG", sublabelFr: "Recoit la telemetrie Modbus relayee directement depuis le serveur DG", x: 640, y: 270, w: 110, h: 55, variant: "muted" },
        { id: "goose", label: "GOOSE Subscriber/Publisher", labelFr: "Abonne/Editeur GOOSE", sublabel: "IEC 61850 GOOSE broadcast endpoint paired with the circuit breaker", sublabelFr: "Point GOOSE IEC 61850 en diffusion, associe au disjoncteur", x: 770, y: 270, w: 110, h: 55, variant: "highlight" },

        { id: "controlcore", label: "Layer 2: Control Core (per-unit)", labelFr: "Couche 2 : noyau de controle (par unite)", sublabel: "Microgrid State Machine, Alarm & Event Monitor, Transition Fn, Protection Stub, Dispatch (Q,V,P), EMS Supervisor", sublabelFr: "Machine d'etat microreseau, moniteur d'alarmes/evenements, fonction de transition, stub de protection, dispatch (Q,V,P), supervision EMS", x: 590, y: 360, w: 400, h: 55, variant: "accent" },
        { id: "detexec", label: "Layer 3: Output Scheduler & Deterministic Execution", labelFr: "Couche 3 : planificateur de sortie et execution deterministe", sublabel: "Cyclic math execution (10 ms) plus event-driven GOOSE interrupts; no direct link to the plant model", sublabelFr: "Execution cyclique (10 ms) et interruptions GOOSE evenementielles; aucun lien direct vers le modele de procede", x: 590, y: 450, w: 400, h: 55, variant: "primary" },

        { id: "serverpv", label: "Server PV", labelFr: "Serveur PV", sublabel: "Simulated or real PV inverter under test", sublabelFr: "Onduleur PV simule ou reel sous test", x: 380, y: 610, w: 100, h: 55, variant: "muted" },
        { id: "serverbess", label: "Server BESS", labelFr: "Serveur BESS", sublabel: "Simulated or real BESS power-conversion system under test", sublabelFr: "Systeme de conversion BESS simule ou reel sous test", x: 510, y: 610, w: 100, h: 55, variant: "muted" },
        { id: "serverdg", label: "Server DG", labelFr: "Serveur DG", sublabel: "Simulated or real diesel-generator set under test", sublabelFr: "Groupe diesel simule ou reel sous test", x: 640, y: 610, w: 100, h: 55, variant: "muted" },
        { id: "cb", label: "Circuit Breaker (CB) Publisher/Subscriber", labelFr: "Disjoncteur (CB) editeur/abonne", sublabel: "Broadcasts and receives GOOSE status/trip-close in both directions with the GOOSE endpoint", sublabelFr: "Diffuse et recoit le statut/declenchement GOOSE dans les deux sens avec le point GOOSE", x: 780, y: 610, w: 130, h: 55, variant: "highlight" }
      ],
      edges: [
        { from: "laptop", to: "webui", label: "HTTPS / Web API", labelFr: "HTTPS / API Web", tone: "rest", bidirectional: true, labelPos: { x: 230, y: 70 } },
        { from: "laptop", to: "restapi", label: "REST / Control API", labelFr: "REST / API de controle", tone: "rest", bidirectional: true, labelPos: { x: 230, y: 150 } },
        { from: "webui", to: "dispatch", label: " ", labelFr: "Requetes web", tone: "rest", bidirectional: true, labelPos: { x: 450, y: 168 } },
        { from: "restapi", to: "dispatch", label: "Dispatch requests", labelFr: "Requetes de dispatch", tone: "rest", bidirectional: true, labelPos: { x: 605, y: 168 } },
        { from: "dispatch", to: "historian", label: "Telemetry & history", labelFr: "Telemetrie et historique", tone: "rest", bidirectional: true, labelPos: { x: 870, y: 30 } },
        { from: "dispatch", to: "sqlconfig", label: " ", labelFr: "Config controleur", tone: "rest", bidirectional: true, labelPos: { x: 870, y: 168 } },
        { from: "dispatch", to: "axcentry", label: "Tertiary setpoints / telemetry & states", labelFr: "Consignes tertiaires / telemetrie et etats", tone: "rest", bidirectional: true, labelPos: { x: 680, y: 200 } },

        { from: "clientbess", to: "controlcore", label: "Polled telemetry", labelFr: "Telemetrie scrutee", tone: "internal", labelPos: { x: 470, y: 315 } },
        { from: "controlcore", to: "detexec", label: "Computed setpoints", labelFr: "Consignes calculees", tone: "internal", labelPos: { x: 470, y: 405 }, points: [{ x: 590, y: 387.5 }, { x: 590, y: 422.5 }] },

        { from: "timesource", to: "goose", label: "IEEE 1588 sync", labelFr: "Synchro IEEE 1588", tone: "sync", labelPos: { x: 260, y: 410 }, points: [{ x: 300, y: 450 }, { x: 300, y: 240 }, { x: 770, y: 240 }, { x: 770, y: 242.5 }] },
        { from: "timesource", to: "detexec", label: " ", labelFr: " ", tone: "sync", labelPos: { x: 345, y: 405 } },

        { from: "goose", to: "cb", label: "GOOSE multicast: status/trip", labelFr: "Multicast GOOSE : statut/declenchement", tone: "goose", bidirectional: true, labelPos: { x: 850, y: 440 }, points: [{ x: 780, y: 582.5 }, { x: 780, y: 525 }, { x: 805, y: 525 }, { x: 805, y: 300 }] },

        { from: "serverpv", to: "clientpv", label: " ", labelFr: "Telemetrie Modbus", tone: "modbus", bidirectional: true, labelPos: { x: 230, y: 380 }, points: [{ x: 380, y: 582.5 }, { x: 380, y: 525 }, { x: 310, y: 525 }, { x: 310, y: 240 }, { x: 380, y: 240 }, { x: 380, y: 242.5 }] },
        { from: "serverbess", to: "clientbess", label: "Modbus telemetry", labelFr: "Telemetrie Modbus", tone: "modbus",bidirectional: true, labelPos: { x: 280, y: 525 }, points: [{ x: 510, y: 582.5 }, { x: 510, y: 525 }, { x: 322, y: 525 }, { x: 322, y: 240 }, { x: 510, y: 240 }, { x: 510, y: 242.5 }] },
        { from: "serverdg", to: "clientdg", label: " ", labelFr: "Telemetrie Modbus", tone: "modbus", labelPos: { x: 235, y: 610 }, points: [{ x: 640, y: 582.5 }, { x: 640, y: 525 }, { x: 334, y: 525 }, { x: 334, y: 240 }, { x: 640, y: 240 }, { x: 640, y: 242.5 }] }
      ]
    }
  },
  {
    title: "Microgrid EMS & Secondary-Control Module Map",
    titleFr: "Carte des modules EMS microréseau et contrôle secondaire",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "hub", label: "Microgrid EMS Core", labelFr: "Microgrid EMS Core", sublabel: "supervisory decisions + secondary-control setpoints", sublabelFr: "décisions de supervision + consignes de contrôle secondaire", x: 320, y: 180, w: 190, h: 72, variant: "primary" },
        { id: "state", label: "DER Asset State", labelFr: "État des actifs DER", sublabel: "PV availability, BESS SoC, measurements and device limits", sublabelFr: "disponibilité PV, SoC BESS, mesures et limites équipement", x: 320, y: 45, w: 260, h: 54, variant: "accent" },
        { id: "database", label: "Telemetry / Command Maps", labelFr: "Cartes télémétrie / commandes", sublabel: "Modbus TCP point maps, P/Q setpoints and SoC readback", sublabelFr: "cartes de points Modbus TCP, consignes P/Q et lecture SoC", x: 320, y: 315, w: 260, h: 54, variant: "muted" },
        { id: "opendss", label: "Distribution Grid Study", labelFr: "Étude réseau de distribution", sublabel: "power-flow and time-series grid-response assessment", sublabelFr: "flux de puissance et analyse temporelle de la réponse réseau", x: 90, y: 95, w: 170, h: 60, variant: "muted" },
        { id: "dashboard", label: "Watchdog & Latency Checks", labelFr: "Watchdogs et vérifications de latence", sublabel: "acknowledgement/readback and comm-health monitoring", sublabelFr: "acquittement/lecture et surveillance de l'état des communications", x: 90, y: 265, w: 170, h: 60, variant: "muted" },
        { id: "scheduler", label: "Setpoint Scheduler", labelFr: "Planificateur de consignes", sublabel: "BESS PCS and PV inverter P/Q setpoints", sublabelFr: "consignes P/Q PCS BESS et onduleur PV", x: 550, y: 95, w: 170, h: 60, variant: "accent" },
        { id: "voltage", label: "PLCnext FSM Sequencing", labelFr: "Séquencement FSM PLCnext", sublabel: "charge/discharge enable and operating-limit supervision", sublabelFr: "activation charge/décharge et supervision des limites d'exploitation", x: 550, y: 265, w: 170, h: 60, variant: "accent" }
      ],
      edges: [
        { from: "state", to: "hub", label: "device states", labelFr: "états équipement", bidirectional: true, labelPos: { x: 374, y: 116 }, points: [{ x: 320, y: 72 }, { x: 320, y: 144 }] },
        { from: "hub", to: "database", label: "telemetry / commands", labelFr: "télémétrie / commandes", bidirectional: true, labelPos: { x: 374, y: 252 }, points: [{ x: 320, y: 216 }, { x: 320, y: 288 }] },
        { from: "hub", to: "opendss", label: "grid response", labelFr: "réponse réseau", bidirectional: true, dashed: true, labelPos: { x: 248, y: 126 }, points: [{ x: 225, y: 158 }, { x: 196, y: 158 }, { x: 196, y: 95 }, { x: 175, y: 95 }] },
        { from: "hub", to: "dashboard", label: "ack / readback", labelFr: "acquittement / lecture", bidirectional: true, labelPos: { x: 248, y: 234 }, points: [{ x: 225, y: 202 }, { x: 196, y: 202 }, { x: 196, y: 265 }, { x: 175, y: 265 }] },
        { from: "hub", to: "scheduler", label: "setpoint schedule", labelFr: "planning des consignes", bidirectional: true, labelPos: { x: 392, y: 126 }, points: [{ x: 415, y: 158 }, { x: 444, y: 158 }, { x: 444, y: 95 }, { x: 465, y: 95 }] },
        { from: "hub", to: "voltage", label: "FSM commands", labelFr: "commandes FSM", bidirectional: true, labelPos: { x: 392, y: 234 }, points: [{ x: 415, y: 202 }, { x: 444, y: 202 }, { x: 444, y: 265 }, { x: 465, y: 265 }] }
      ]
    }
  },
  {
    title: "PLCnext Telemetry, Command Maps & CIL Readiness",
    titleFr: "Télémétrie PLCnext, cartes de commandes et préparation CIL",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "devices", label: "BESS PCS, PV Inverter & Meter", labelFr: "PCS BESS, onduleur PV et compteur", sublabel: "controller-test Interfaces", sublabelFr: "Interfaces de test contrôleur", x: 320, y: 35, w: 420, h: 50, variant: "muted" },
        { id: "protocols", label: "Modbus TCP Point Maps", labelFr: "Cartes de points Modbus TCP", sublabel: "P/Q setpoints, SoC and state commands", sublabelFr: "consignes P/Q, SoC et commandes d'état", x: 320, y: 105, w: 380, h: 50, variant: "accent" },
        { id: "ems", label: "EMS Command and Feedback Loop", labelFr: "Boucle commande-retour EMS", sublabel: "supervisory setpoints and device response", sublabelFr: "consignes de supervision et réponse des équipements", x: 320, y: 178, w: 380, h: 56, variant: "primary" },
        { id: "scada", label: "Watchdog & Latency Diagnostics", labelFr: "Diagnostics watchdog et latence", sublabel: "acknowledgement/readback and comm-health checks", sublabelFr: "vérifications d'acquittement/lecture et état des communications", x: 320, y: 251, w: 380, h: 50, variant: "highlight" },
        { id: "compare", label: "Controller-Test Readiness Checks", labelFr: "Vérifications de préparation aux tests contrôleur", sublabel: "path from distribution time-series studies toward SIL/CIL tests", sublabelFr: "chemin des études temporelles de distribution vers les tests SIL/CIL", x: 320, y: 321, w: 380, h: 50, variant: "muted" }
      ],
      edges: [
        { from: "devices", to: "protocols", label: "telemetry", labelFr: "télémétrie" },
        { from: "protocols", to: "ems", label: "state + commands", labelFr: "états + commandes", bidirectional: true },
        { from: "ems", to: "scada", label: "telemetry updates", labelFr: "mises à jour télémétrie" },
        { from: "scada", to: "compare", label: "diagnostic replay", labelFr: "relecture diagnostique" }
      ]
    }
  }
];
