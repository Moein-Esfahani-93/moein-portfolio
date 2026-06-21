import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "cloud-edge-vpp",
    number: "01",
    domain: "VPP Market Platform",
    domainFr: "Plateforme marché VPP",
    title: "Integrated VPP Market-to-Grid Platform (Cloud-to-Fog-to-Edge)",
    titleFr: "Plateforme VPP marché-réseau intégrée (cloud-fog-edge)",
    short: "An integrated VPP workflow connecting auto-trader logic, forecasting, capability extraction, optimization, dispatch propagation, monitoring, and distribution time-series grid-feasibility studies.",
    shortFr: "Un workflow VPP intégré reliant auto-trader, prévision, extraction de capacité, optimisation, propagation du dispatch, monitoring et études temporelles de faisabilité réseau.",
    problem: "A VPP must convert DER portfolio capability into market offers without violating grid limits, so market signals, DER operating limits, forecasts, portfolio capability, and grid-security constraints need to be handled in one workflow.",
    problemFr: "Un VPP doit convertir la capacité du portefeuille DER en offres de marché sans violer les limites réseau; les signaux de marché, limites DER, prévisions, capacité du portefeuille et contraintes de sécurité réseau doivent donc être traités dans un même workflow.",
    contribution: "Integrated auto-trader, forecaster, capability extractor, optimizer, dispatch propagator, and monitoring into a market-to-dispatch workflow, with dispatch decisions validated through grid-feasibility checks before controller-facing execution.",
    contributionFr: "Intégration de l'auto-trader, du prévisionniste, de l'extracteur de capacité, de l'optimiseur, du propagateur de dispatch et du monitoring dans un workflow marché-vers-dispatch, avec validation de faisabilité réseau avant l'exécution orientée contrôleur.",
    methods: [
      "Implemented market-participation logic for DER assets including BESS, PV, and controllable loads across ERCOT, MISO, and ISO-NE-style structures",
      "Used prices, reserve/regulation products, portfolio capability, and risk-aware constraints in bid/offer and dispatch logic",
      "Enforced grid feasibility with distribution time-series studies using OpenDSS checking voltage profiles, feeder loading, DER response, inverter limits, and DER grid-support functions",
      "Modeled cloud-to-edge communication effects including delay, loss, and degraded telemetry for controller-facing cases",
      "Built an EMS orchestration layer, a time-indexed simulation interface, and a streaming/data layer using Kafka, MQTT, WebSocket, FastAPI services, and Redis"
    ],
    methodsFr: [
      "Implémentation de la logique de participation marché pour actifs DER incluant BESS, PV et charges contrôlables dans des structures de type ERCOT, MISO et ISO-NE",
      "Utilisation des prix, produits de réserve/régulation, capacité du portefeuille et contraintes sensibles au risque dans la logique d'offres et de dispatch",
      "Validation de faisabilité réseau par études temporelles de distribution avec OpenDSS : profils de tension, chargement de départ, réponse DER, limites onduleur et fonctions DER de soutien réseau",
      "Modélisation des effets de communication cloud-edge: délai, perte et télémétrie dégradée pour les cas orientés contrôleur",
      "Développement d'une couche d'orchestration EMS, d'une interface de simulation indexée dans le temps et d'une couche données/streaming avec Kafka, MQTT, WebSocket, FastAPI et Redis"
    ],
    visualSlots: [
      "Market, forecast, capability, optimizer, and grid-validation workflow",
      "Data to forecasts to VPP strategy evaluation to dispatch",
      "Integrated VPP test environment for forecasting, optimization, grid studies, and dispatch validation"
    ],
    visualSlotsFr: [
      "Workflow marché, prévision, capacité, optimisation et validation réseau",
      "Données vers prévisions, évaluation stratégique VPP et dispatch",
      "Environnement de test VPP unifié pour EMS, prévision, optimisation et validation du dispatch"
    ],
    tags: ["VPP", "DER", "ISO/RTO", "ERCOT", "MISO", "ISO-NE", "Distribution Time-Series Studies", "LP/MILP/DRO", "Kafka", "MQTT", "FastAPI", "Redis"]
  },
  {
    id: "ems-qsts-scada",
    number: "02",
    domain: "Microgrid EMS",
    title: "Microgrid EMS & Secondary-Control Validation Platform",
    titleFr: "Plateforme de validation EMS microgrid et contrôle secondaire",
    short: "A microgrid EMS validation environment connecting distribution time-series simulation, PLCnext controller logic, industrial telemetry maps, and Python orchestration.",
    shortFr: "Un environnement de validation EMS microgrid reliant simulation temporelle de distribution, logique PLCnext, cartes de télémétrie industrielle et orchestration Python.",
    problem: "EMS supervisory decisions and secondary-control setpoints need to be tested against simulated grid response before offline SIL studies and subsequent real-time CIL/CHIL preparation.",
    problemFr: "Les décisions de supervision EMS et les consignes de contrôle secondaire doivent être testées face à la réponse réseau simulée avant les études SIL hors ligne et la préparation aux essais CIL/CHIL en temps réel.",
    contribution: "Built the controller-facing EMS validation layer and programmed IEC 61131-3 Structured Text logic for BESS PCS, PV inverter, meter, and hybrid PV-BESS operating modes.",
    contributionFr: "Développement de la couche de validation EMS orientée contrôleur et programmation IEC 61131-3 Structured Text pour BESS PCS, onduleur PV, compteur et modes hybrides PV-BESS.",
    methods: [
      "Connected distribution time-series simulation, PLCnext controller logic, telemetry/command maps, and Python orchestration",
      "Programmed FSM-based sequencing, charge/discharge enable, P/Q setpoint handling, SoC supervision, operating-limit supervision, alarms, watchdogs, acknowledgement/readback logic, and communication-health monitoring",
      "Defined BESS PCS, PV inverter, and meter telemetry/control mappings, state commands, measurements, acknowledgement/readback, and latency checks",
      "Structured the path from offline distribution time-series studies toward SIL studies and real-time CIL/CHIL preparation"
    ],
    methodsFr: [
      "Connexion de la simulation temporelle de distribution, de la logique PLCnext, des cartes télémétrie/commandes et de l'orchestration Python",
      "Programmation du séquencement FSM, activation charge/décharge, consignes P/Q, supervision SoC et limites, alarmes, watchdogs, logique d'acquittement/lecture et suivi de santé communication",
      "Définition des mappings télémétrie/contrôle du PCS BESS, de l'onduleur PV et du compteur, commandes d'état, mesures, acquittement/lecture et vérifications de latence",
      "Structuration du passage des études temporelles de distribution hors ligne vers les études SIL et la préparation aux essais CIL/CHIL en temps réel"
    ],
    visualSlots: [
      "Microgrid EMS and AXC F 3152 controller-interface architecture",
      "Microgrid EMS, secondary-control, simulation, and controller module map",
      "PLCnext telemetry, command maps, watchdogs, latency checks, and controller-test readiness"
    ],
    visualSlotsFr: [
      "Architecture EMS microgrid et interface contrôleur AXC F 3152",
      "Carte EMS microgrid, contrôle secondaire, simulation et modules contrôleur",
      "Télémétrie PLCnext, cartes de commandes, watchdogs, latence et préparation aux tests contrôleur"
    ],
    tags: ["Microgrid EMS", "PLCnext", "IEC 61131-3 ST", "distribution time-series studies", "Modbus TCP", "BESS PCS", "PV inverter", "SIL/CIL readiness"]
  },
  {
    id: "rts-io-cil",
    number: "03",
    domain: "RTS Controller Interfaces",
    domainFr: "Interfaces contrôleur RTS",
    title: "Real-Time Simulator I/O & Controller Interface",
    titleFr: "Interface E/S et protocoles pour simulateur temps réel",
    short: "A simulator-controller interface for evaluating external controllers in a microgrid validation test system through measurement, command, status, and feedback exchange.",
    shortFr: "Une interface simulateur-contrôleur pour évaluer des contrôleurs externes dans un système de test microgrid via échanges de mesures, commandes, statuts et retours.",
    problem: "Controller-facing validation requires a defined signal contract, protocol mappings, timing diagnostics, and closed-loop coordination between simulator update cycles and returned controller outputs.",
    problemFr: "La validation orientée contrôleur exige un contrat de signaux, des mappings protocole, des diagnostics de timing et une coordination en boucle fermée entre cycles simulateur et sorties contrôleur.",
    contribution: "Designed and upgraded the simulator-controller interface, including C/C++ interface logic, protocol exchange routines, I/O handling, latency diagnostics, and time-domain simulation coordination.",
    contributionFr: "Conception et amélioration de l'interface simulateur-contrôleur, avec logique de pont C/C++, routines d'échange protocole, gestion E/S, diagnostics de latence et coordination de simulation temporelle.",
    methods: [
      "Defined the signal contract including engineering units, scaling, sampling/update rates, telemetry/command direction, status and quality flags, timeout/fallback states, and controller I/O mapping",
      "Built C/C++ interface logic, Modbus TCP and RTU client/server routines, I/O-handling routines, and IEC 61850-ready point maps for future adapter tests",
      "Added diagnostics for round-trip latency, jitter, stale-data detection, read/write acknowledgement, and controller-response validation",
      "Developed time-domain simulation logic with numerical integration, state updates, and convergence handling, then coordinated simulator cycles with controller-facing data exchange"
    ],
    methodsFr: [
      "Définition du contrat de signaux: unités, mise à l'échelle, fréquences d'échantillonnage/mise à jour, direction télémétrie/commande, flags statut/qualité, états timeout/fallback et mapping E/S contrôleur",
      "Développement de logique de pont C/C++, routines Modbus TCP et RTU client/serveur, routines de gestion E/S et mappings de points prêts pour de futurs tests d'adaptateurs IEC 61850",
      "Ajout de diagnostics de latence aller-retour, jitter, détection de données périmées, acquittement lecture/écriture et validation de réponse contrôleur",
      "Développement de logique de simulation temporelle avec intégration numérique, mises à jour d'état et convergence, puis coordination des cycles simulateur avec l'échange orienté contrôleur"
    ],
    visualSlots: [
      "Simulator I/O and protocol interface",
      "Telemetry, command, status, and feedback exchange",
      "Closed-loop timing and controller-response validation"
    ],
    visualSlotsFr: [
      "Interface E/S et protocole du simulateur",
      "Échange télémétrie, commandes, statuts et retours",
      "Timing en boucle fermée et validation de réponse contrôleur"
    ],
    tags: ["RTS", "I/O", "C/C++", "Modbus TCP", "Modbus RTU", "IEC 61850-ready", "Latency", "Jitter", "CIL"]
  },
  {
    id: "gateway-microgrid-control",
    number: "04",
    domain: "Personal Project / Gateway Devices",
    domainFr: "Projet personnel / passerelle équipements",
    title: "Personal Project: Gateway Devices & Multi-Protocol Abstraction",
    titleFr: "Projet personnel : passerelle équipements et abstraction multiprotocole",
    short: "A gateway and device-abstraction layer built around a common point model, device profiles, register/point maps, scaling, data-quality flags, command priority, and protocol adapters.",
    shortFr: "Une couche de passerelle et d'abstraction équipement bâtie sur un modèle de points commun, profils d'équipement, cartes registres/points, mise à l'échelle, flags de qualité, priorité des commandes et adaptateurs protocole.",
    problem: "Heterogeneous controllers and simulators need one consistent interface instead of bespoke links for every device and protocol.",
    problemFr: "Des contrôleurs et simulateurs hétérogènes ont besoin d'une interface cohérente plutôt que de liens spécifiques pour chaque équipement et protocole.",
    contribution: "Built a common gateway/device-abstraction layer so heterogeneous controllers and simulators integrate through consistent point models and protocol adapters.",
    contributionFr: "Développement d'une couche commune passerelle/abstraction équipement permettant à des contrôleurs et simulateurs hétérogènes de s'intégrer via des modèles de points et adaptateurs protocole cohérents.",
    methods: [
      "Defined a common point model with device profiles, register/point maps, scaling, data-quality flags, and command priority",
      "Implemented Modbus/TCP and TCP/WebSocket exchange layers and designed adapter-ready point models for IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3, and IEC 60870-5-104",
      "Used embedded software and interfaces in C/C++, Python, and SQL on Raspberry Pi, embedded Linux, SoC, STM32, and Zynq/PYNQ",
      "Supported test automation and logging around the interface layer"
    ],
    methodsFr: [
      "Définition d'un modèle de points commun avec profils d'équipement, cartes registres/points, mise à l'échelle, flags de qualité et priorité des commandes",
      "Implémentation de couches d'échange Modbus/TCP et TCP/WebSocket et conception de modèles de points prêts pour adaptateurs IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3 et IEC 60870-5-104",
      "Utilisation de logiciels embarqués et ponts en C/C++, Python et SQL sur Raspberry Pi, Linux embarqué, SoC, STM32 et Zynq/PYNQ",
      "Support de l'automatisation des tests et de la journalisation autour de la couche de pont"
    ],
    visualSlots: [
      "Gateway protocol interface across industrial interfaces",
      "Common point model, device profiles, maps, scaling, and quality flags",
      "Embedded interface, command priority, test automation, and logging"
    ],
    visualSlotsFr: [
      "Pont protocolaire entre interfaces industrielles",
      "Modèle de points commun, profils, cartes, mise à l'échelle et flags qualité",
      "Pont embarqué, priorité de commande, automatisation des tests et journalisation"
    ],
    tags: ["Gateway", "Modbus", "IEC 61850", "OPC UA", "CAN/J1939", "MQTT", "DNP3", "C/C++", "Python", "SQL"]
  }
];
