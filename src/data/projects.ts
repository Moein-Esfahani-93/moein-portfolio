import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "rts-io-cil",
    number: "1",
    domain: "Controls Validation / RTS Interfaces",
    domainFr: "Validation controle / interfaces RTS",
    title: "Microgrid Controller Validation Framework & Simulator Interface",
    titleFr: "Framework de validation controleur microgrid et interface simulateur",
    short: "A simulator-to-controller validation framework for measurement exchange, command execution, status feedback, timing diagnostics, failure-mode testing, and closed-loop controller-response validation.",
    shortFr: "Un framework simulateur-vers-controleur pour echange de mesures, execution de commandes, retour d'etat, diagnostics timing, tests de defaillance et validation de reponse controleur en boucle fermee.",
    problem: "Controller-facing validation needs a precise signal contract, reusable protocol mappings, objective timing diagnostics, and repeatable evidence before a controller can be trusted in SIL, CHIL, or HIL-style workflows.",
    problemFr: "La validation orientee controleur exige un contrat de signaux precis, des mappings protocolaires reutilisables, des diagnostics timing objectifs et des preuves repetables avant de faire confiance au controleur en workflows SIL, CHIL ou HIL.",
    contribution: "Designed and upgraded the simulator-to-controller interface, including C/C++ and Python bridge logic, Modbus TCP/RTU exchange routines, IEC 61850 GOOSE-ready mappings, latency diagnostics, stale-data detection, readback checks, and validation artifacts.",
    contributionFr: "Conception et amelioration de l'interface simulateur-vers-controleur avec ponts C/C++ et Python, routines Modbus TCP/RTU, mappings prets IEC 61850 GOOSE, diagnostics de latence, detection de donnees perimees, verification de lecture et actifs de validation.",
    methods: [
      "Defined reusable signal contracts covering engineering units, scaling, sampling/update rates, telemetry/command direction, status and quality flags, timeout/fallback states, and mapping of simulated grid variables to controller I/O points",
      "Built C/C++ and Python bridge logic, Modbus TCP server/client and RTU slave/master functions, IEC 61850 GOOSE publisher/subscriber mappings, timing diagnostics, and I/O routines",
      "Implemented validation scenarios for communication delay, data loss, controller-response mismatch, BESS/PV/PCS operating limits, voltage-limit violations, and safe-fallback behavior",
      "Maintained validation artifacts including point maps, device profiles, expected controller behavior, test evidence logs, issue notes, and traceable links between scenarios, signals, results, and acceptance criteria"
    ],
    methodsFr: [
      "Definition de contrats de signaux reutilisables: unites, mise a l'echelle, frequences d'echantillonnage/mise a jour, direction telemetrie/commande, flags statut/qualite, etats timeout/repli et mapping des variables reseau vers E/S controleur",
      "Developpement de ponts C/C++ et Python, fonctions Modbus TCP serveur/client et RTU esclave/maitre, mappings IEC 61850 GOOSE publisher/subscriber, diagnostics timing et routines E/S",
      "Implementation de scenarios pour delai communication, perte de donnees, mismatch de reponse controleur, limites BESS/PV/PCS, violations de tension et comportement de repli sur",
      "Maintenance des actifs de validation: cartes de points, profils equipement, comportement attendu, journaux de preuve, notes d'anomalie et liens tracables entre scenarios, signaux, resultats et criteres d'acceptation"
    ],
    visualSlots: [
      "Simulator I/O and protocol interface",
      "Telemetry, command, status, and feedback exchange",
      "Closed-loop timing and controller-response validation"
    ],
    visualSlotsFr: [
      "Interface E/S et protocole du simulateur",
      "Echange telemetrie, commandes, statuts et retours",
      "Timing en boucle fermee et validation de reponse controleur"
    ],
    tags: ["Controls Validation", "RTS", "SIL/CHIL/HIL", "C/C++", "Python", "Modbus TCP/RTU", "IEC 61850 GOOSE", "Latency", "Jitter", "Readback", "Failure Modes"]
  },
  {
    id: "ems-qsts-scada",
    number: "2",
    domain: "Microgrid EMS / CIL Preparation",
    domainFr: "EMS microgrid / preparation CIL",
    title: "Microgrid EMS & Controller-in-the-Loop Preparation",
    titleFr: "EMS microgrid et preparation controller-in-the-loop",
    short: "A controller-facing EMS validation platform connecting distribution time-series simulation, PLCnext/RTAC logic, telemetry/command maps, and Python orchestration.",
    shortFr: "Une plateforme de validation EMS orientee controleur reliant simulation temporelle de distribution, logique PLCnext/RTAC, cartes telemetrie/commandes et orchestration Python.",
    problem: "EMS supervisory setpoints and secondary-control actions must be verified against simulated grid behavior before deployment-oriented controller-in-the-loop execution.",
    problemFr: "Les consignes de supervision EMS et actions de controle secondaire doivent etre verifiees face au comportement reseau simule avant execution controller-in-the-loop orientee deploiement.",
    contribution: "Developed the controller-facing layer of a microgrid EMS validation platform and programmed IEC 61131-3 logic for BESS PCS, PV inverter, meter, and hybrid PV-BESS operating modes.",
    contributionFr: "Developpement de la couche EMS orientee controleur et programmation IEC 61131-3 pour BESS PCS, onduleur PV, compteur et modes hybrides PV-BESS.",
    methods: [
      "Connected distribution time-series simulation, PLCnext/RTAC controller logic, telemetry/command maps, and Python orchestration",
      "Programmed IEC 61131-3 Structured Text logic for FSM sequencing, P/Q setpoint handling, SoC and limit supervision, alarms, watchdogs, acknowledgement/readback logic, and communication-health monitoring",
      "Verified EMS supervisory setpoints and secondary-control actions with emphasis on voltage limits, SoC constraints, communication health, and safe operating transitions",
      "Structured the path from offline distribution time-series studies toward SIL studies and real-time CIL/CHIL preparation"
    ],
    methodsFr: [
      "Connexion de la simulation temporelle de distribution, logique PLCnext/RTAC, cartes telemetrie/commandes et orchestration Python",
      "Programmation IEC 61131-3 Structured Text pour sequences FSM, consignes P/Q, supervision SoC et limites, alarmes, watchdogs, acquittement/lecture et suivi sante communication",
      "Verification des consignes EMS et actions de controle secondaire avec accent sur limites de tension, contraintes SoC, sante communication et transitions sures",
      "Structuration du passage des etudes temporelles hors ligne vers les etudes SIL et la preparation CIL/CHIL temps reel"
    ],
    visualSlots: [
      "Microgrid EMS and AXC F 3152 controller-interface architecture",
      "Microgrid EMS, secondary-control, simulation, and controller module map",
      "PLCnext telemetry, command maps, watchdogs, latency checks, and controller-test readiness"
    ],
    visualSlotsFr: [
      "Architecture EMS microgrid et interface controleur AXC F 3152",
      "Carte EMS microgrid, controle secondaire, simulation et modules controleur",
      "Telemetrie PLCnext, cartes de commandes, watchdogs, latence et preparation aux tests controleur"
    ],
    tags: ["Microgrid EMS", "CIL Prep", "PLCnext", "RTAC", "IEC 61131-3 ST", "BESS PCS", "PV Inverter", "Meter", "Watchdogs", "Safe Transitions"]
  },
  {
    id: "cloud-edge-vpp",
    number: "3",
    domain: "VPP / Power-System Software Platform",
    domainFr: "VPP / plateforme logicielle reseau",
    title: "Grid-Analysis Software & VPP Market-to-Grid Platform",
    titleFr: "Logiciel d'analyse reseau et plateforme VPP marche-reseau",
    short: "A running engineering-software workflow connecting ISO/RTO market rules, forecasting, DER capability extraction, optimization, dispatch propagation, monitoring, and OpenDSS/QSTS grid-feasibility validation.",
    shortFr: "Un workflow logiciel d'ingenierie reliant regles marche ISO/RTO, prevision, extraction de capacite DER, optimisation, propagation dispatch, monitoring et validation OpenDSS/QSTS de faisabilite reseau.",
    problem: "A VPP must convert DER portfolio capability into market offers and dispatch schedules without violating DER limits or distribution-grid constraints, so market signals, forecasts, uncertainty, operating limits, and grid-security checks need to be handled in one workflow.",
    problemFr: "Un VPP doit convertir la capacite du portefeuille DER en offres et calendriers de dispatch sans violer les limites DER ou contraintes reseau; signaux marche, previsions, incertitude, limites operationnelles et checks reseau doivent donc etre traites dans un meme workflow.",
    contribution: "Integrated auto-trader, forecasting, capability estimation, optimization, dispatch propagation, monitoring, KPI logic, and OpenDSS/QSTS validation into a repeatable market-to-grid software workflow, with controller-facing validation paths for EMS and RTS interfaces.",
    contributionFr: "Integration auto-trader, prevision, estimation de capacite, optimisation, propagation dispatch, monitoring, logique KPI et validation OpenDSS/QSTS dans un workflow logiciel marche-vers-reseau repetable, avec chemins de validation orientee controleur pour EMS et interfaces RTS.",
    methods: [
      "Implemented market-participation logic for DER assets including BESS, PV, and controllable loads across ERCOT, MISO, NYISO, and ISO-NE-style structures",
      "Used prices, reserve/regulation products, portfolio capability, uncertainty, and risk-aware constraints in bid/offer and dispatch logic",
      "Developed forecasting and scenario-generation workflows from a 50+ GB archive of price, load, PV, weather, market, simulation, and diagnostic datasets",
      "Built the software workflow around an EMS daemon, time-synchronized QSTS co-simulation API, FastAPI/REST services, SQL-backed datasets, Redis caching, and Kafka/MQTT/WebSocket data exchange",
      "Enforced grid feasibility with distribution time-series studies using OpenDSS to check voltage profiles, feeder loading, DER response, inverter limits, and grid-support functions",
      "Connected dispatch outputs to microgrid EMS and controller-validation workflows through DER flexibility envelopes, BESS SoC and ramp limits, PV availability, inverter P-Q limits, and abnormal operating scenarios"
    ],
    methodsFr: [
      "Implementation de la logique de participation marche pour actifs DER incluant BESS, PV et charges controlables dans des structures de type ERCOT, MISO, NYISO et ISO-NE",
      "Utilisation des prix, produits de reserve/regulation, capacite du portefeuille, incertitude et contraintes risque dans la logique d'offres et de dispatch",
      "Developpement de workflows de prevision et generation de scenarios depuis une archive de plus de 50 Go: prix, charge, PV, meteo, marche, simulation et diagnostic",
      "Construction du workflow logiciel autour d'un daemon EMS, d'une API de co-simulation QSTS synchronisee, de services FastAPI/REST, datasets SQL, cache Redis et echanges Kafka/MQTT/WebSocket",
      "Validation de faisabilite reseau par etudes temporelles OpenDSS: profils de tension, chargement, reponse DER, limites onduleur et fonctions de soutien reseau",
      "Connexion des sorties dispatch aux workflows EMS microgrid et validation controleur via enveloppes de flexibilite DER, limites SoC et rampes BESS, disponibilite PV, limites P-Q onduleur et scenarios anormaux"
    ],
    visualSlots: [
      "Market, forecast, capability, optimizer, and grid-validation workflow",
      "Data to forecasts to VPP strategy evaluation to dispatch",
      "Integrated VPP test environment for forecasting, optimization, grid studies, and dispatch validation"
    ],
    visualSlotsFr: [
      "Workflow marche, prevision, capacite, optimisation et validation reseau",
      "Donnees vers previsions, evaluation strategique VPP et dispatch",
      "Environnement de test VPP pour prevision, optimisation, etudes reseau et validation dispatch"
    ],
    tags: ["VPP", "DER", "Power-System Software", "FastAPI", "SQL", "Redis", "Kafka", "MQTT", "WebSocket", "OpenDSS", "QSTS", "Forecasting", "Optimization", "Grid Feasibility"]
  },
  {
    id: "gateway-microgrid-control",
    number: "4",
    domain: "Gateway Devices / Protocol Abstraction",
    domainFr: "Passerelles equipements / abstraction protocolaire",
    title: "Multi-Protocol Gateway and Device Abstraction",
    titleFr: "Passerelle multiprotocole et abstraction equipement",
    short: "A gateway and device-abstraction layer built around a common point model, device profiles, register/point maps, scaling, data-quality flags, command priority, and protocol adapters.",
    shortFr: "Une couche passerelle et abstraction equipement basee sur un modele commun de points, profils equipement, cartes registres/points, mise a l'echelle, flags qualite, priorite commande et adaptateurs protocole.",
    problem: "Heterogeneous controllers and simulators need one consistent interface instead of bespoke links for every device and protocol.",
    problemFr: "Des controleurs et simulateurs heterogenes ont besoin d'une interface coherente plutot que de liens specifiques pour chaque equipement et protocole.",
    contribution: "Built a common gateway/device-abstraction layer so heterogeneous controllers and simulators integrate through consistent point models, protocol adapters, logging, and test automation hooks.",
    contributionFr: "Developpement d'une couche commune passerelle/abstraction equipement pour integrer controleurs et simulateurs via modeles de points, adaptateurs protocolaires, journalisation et hooks d'automatisation.",
    methods: [
      "Defined a common point model with device profiles, register/point maps, scaling, data-quality flags, and command priority",
      "Implemented Modbus/TCP and TCP/WebSocket exchange layers and designed adapter-ready point models for IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3, and IEC 60870-5-104",
      "Used embedded software and interfaces in C/C++, Python, and SQL on Raspberry Pi, embedded Linux, SoC, STM32, and Zynq/PYNQ",
      "Supported test automation, logging, troubleshooting records, and traceability around the interface layer"
    ],
    methodsFr: [
      "Definition d'un modele commun avec profils equipement, cartes registres/points, mise a l'echelle, flags qualite et priorite commande",
      "Implementation de couches Modbus/TCP et TCP/WebSocket et conception de modeles prets pour adaptateurs IEC 61850, OPC UA, CAN/J1939, MQTT, DNP3 et IEC 60870-5-104",
      "Utilisation de logiciels embarques et interfaces C/C++, Python et SQL sur Raspberry Pi, Linux embarque, SoC, STM32 et Zynq/PYNQ",
      "Support de l'automatisation des tests, logs, dossiers de depannage et tracabilite autour de la couche interface"
    ],
    visualSlots: [
      "Gateway protocol interface across industrial interfaces",
      "Common point model, device profiles, maps, scaling, and quality flags",
      "Embedded interface, command priority, test automation, and logging"
    ],
    visualSlotsFr: [
      "Interface passerelle entre protocoles industriels",
      "Modele de points commun, profils, cartes, mise a l'echelle et flags qualite",
      "Interface embarquee, priorite commande, automatisation des tests et journalisation"
    ],
    tags: ["Gateway", "Device Abstraction", "Modbus", "IEC 61850", "OPC UA", "CAN/J1939", "MQTT", "DNP3", "C/C++", "Python", "SQL"]
  }
];
