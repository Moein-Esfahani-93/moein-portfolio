import type { SkillBlock } from "../types";

export const skills: SkillBlock[] = [
  {
    title: "Microgrid Validation, SIL, CHIL & HIL Preparation",
    titleFr: "Validation microgrid, preparation SIL, CHIL et HIL",
    text: "I build controller-in-the-loop and HIL-preparation workflows for EMS supervisory decisions, secondary-control interaction, normal and abnormal scenarios, communication loss, stale data, timeout behavior, equipment-limit violations, and safe-fallback states.",
    textFr: "Je construis des workflows controller-in-the-loop et de preparation HIL pour decisions EMS, interaction de controle secondaire, scenarios normaux/anormaux, perte de communication, donnees perimees, timeouts, violations de limites equipement et etats de repli surs.",
    keywords: ["controller-in-the-loop", "HIL-preparation", "EMS supervisory decisions", "communication loss", "safe-fallback states"],
    keywordsFr: ["controller-in-the-loop", "preparation HIL", "decisions EMS", "perte de communication", "etats de repli"],
    track: "automation"
  },
  {
    title: "Power-System Software, Simulation & Test Automation",
    titleFr: "Logiciel reseau, simulation et automatisation des tests",
    text: "I build Python/C++ automation around OpenDSS QSTS/time-series studies, PSS/E, PSCAD EMT analysis, MATLAB/Simulink, custom time-domain simulation logic, automated study execution, repeatable scenario libraries, validation logs, regression-style runs, and pass/fail reporting.",
    textFr: "Je construis l'automatisation Python/C++ autour des etudes OpenDSS QSTS/temporelles, PSS/E, analyse EMT PSCAD, MATLAB/Simulink, logique de simulation temporelle, execution automatique d'etudes, bibliotheques de scenarios repetables, journaux de validation, executions type regression et rapports pass/fail.",
    keywords: ["Python/C++ automation", "OpenDSS QSTS", "automated study execution", "regression-style runs", "pass/fail reporting"],
    keywordsFr: ["automatisation Python/C++", "OpenDSS QSTS", "execution automatique", "executions type regression", "rapports pass/fail"],
    track: "software"
  },
  {
    title: "Engineering Software, APIs & Data Pipelines",
    titleFr: "Logiciel d'ingenierie, API et pipelines donnees",
    text: "I develop modular engineering software with FastAPI services, REST interfaces, SQL-backed data layers, Redis caching, Kafka/MQTT/WebSocket data exchange, Git-based development, dashboard/data-interface support, and logging around market, weather, load, PV, simulation, and diagnostic datasets.",
    textFr: "Je developpe des logiciels d'ingenierie modulaires avec services FastAPI, interfaces REST, couches de donnees SQL, cache Redis, echanges Kafka/MQTT/WebSocket, developpement Git, support dashboard/interfaces donnees et journalisation autour des donnees marche, meteo, charge, PV, simulation et diagnostic.",
    keywords: ["FastAPI", "REST", "SQL", "Redis", "Kafka", "MQTT", "WebSocket", "Git"],
    keywordsFr: ["FastAPI", "REST", "SQL", "Redis", "Kafka", "MQTT", "WebSocket", "Git"],
    track: "software"
  },
  {
    title: "Performance Metrics & Acceptance Criteria",
    titleFr: "Mesures de performance et criteres d'acceptation",
    text: "I define objective validation metrics for controller response, round-trip latency, jitter, stale-data detection, command acknowledgement/readback, voltage-limit compliance, feeder loading, BESS SoC limits, P/Q setpoint tracking, frequency/voltage-support adequacy, and system-readiness criteria.",
    textFr: "Je definis des mesures objectives pour reponse controleur, latence aller-retour, jitter, detection de donnees perimees, acquittement commande/lecture, respect des limites de tension, chargement de depart, limites SoC BESS, suivi de consignes P/Q, adequation soutien frequence/tension et criteres de readiness systeme.",
    keywords: ["round-trip latency", "jitter", "command acknowledgement", "P/Q setpoint tracking", "system-readiness criteria"],
    keywordsFr: ["latence aller-retour", "jitter", "acquittement commande", "suivi de consignes P/Q", "criteres de readiness"],
    track: "automation"
  },
  {
    title: "Requirements Traceability & Validation Assets",
    titleFr: "Tracabilite des exigences et actifs de validation",
    text: "I maintain signal contracts, device profiles, point/register maps, test cases, expected behavior definitions, result logs, JSON/SQL artifacts, Git-controlled repositories, technical documentation, troubleshooting records, and evidence packages.",
    textFr: "Je maintiens contrats de signaux, profils d'equipements, cartes points/registres, cas de test, definitions de comportement attendu, journaux de resultats, artefacts JSON/SQL, depots Git, documentation technique, dossiers de depannage et preuves de validation.",
    keywords: ["signal contracts", "device profiles", "point/register maps", "expected behavior", "evidence packages"],
    keywordsFr: ["contrats de signaux", "profils d'equipements", "cartes points/registres", "comportement attendu", "preuves de validation"],
    track: "software"
  },
  {
    title: "Industrial Controls & IEC 61131-3 Programming",
    titleFr: "Controle industriel et programmation IEC 61131-3",
    text: "I program IEC 61131-3 Structured Text, Ladder, and Function Block logic with FSM sequencing, interlocks, watchdogs, cyclic-task and scan-cycle scheduling, command/readback validation, communication-health monitoring, alarms, diagnostic states, and safe-state behavior.",
    textFr: "Je programme en IEC 61131-3 Structured Text, Ladder et Function Block avec sequences FSM, interlocks, watchdogs, taches cycliques, cycles de scan, validation commande/lecture, suivi sante communication, alarmes, etats diagnostics et comportement safe-state.",
    keywords: ["IEC 61131-3", "Structured Text", "FSM sequencing", "watchdogs", "command/readback validation"],
    keywordsFr: ["IEC 61131-3", "Structured Text", "sequences FSM", "watchdogs", "validation commande/lecture"],
    track: "automation"
  },
  {
    title: "Controller Hardware & Industrial Communication",
    titleFr: "Materiel controleur et communication industrielle",
    text: "I work across PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider Modicon M262/M580, DEIF AGC/ASC 150, ELUM Es+, ComAp InteliNeo 6000, Modbus TCP/RTU, IEC 61850 MMS/GOOSE, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, WebSocket, TCP sockets, EtherCAT, PROFINET, and EtherNet/IP.",
    textFr: "Je travaille avec PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider Modicon M262/M580, DEIF AGC/ASC 150, ELUM Es+, ComAp InteliNeo 6000, Modbus TCP/RTU, IEC 61850 MMS/GOOSE, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, WebSocket, sockets TCP, EtherCAT, PROFINET et EtherNet/IP.",
    keywords: ["PLCnext", "SEL RTAC", "Modbus TCP/RTU", "IEC 61850", "OPC UA"],
    keywordsFr: ["PLCnext", "SEL RTAC", "Modbus TCP/RTU", "IEC 61850", "OPC UA"],
    track: "automation"
  },
  {
    title: "Grid Simulation & Power-System Studies",
    titleFr: "Simulation reseau et etudes electriques",
    text: "I perform OpenDSS QSTS/time-series studies, PSS/E planning and dynamic-analysis workflows, PSCAD EMT-oriented analysis, MATLAB/Simulink studies, voltage-limit checks, feeder loading analysis, DER response validation, grid-feasibility evaluation, and controller-test-case design.",
    textFr: "Je realise etudes OpenDSS QSTS/temporelles, workflows PSS/E de planification et dynamique, analyse EMT PSCAD, etudes MATLAB/Simulink, verification de tension, analyse de chargement, validation de reponse DER, faisabilite reseau et conception de cas de test controleur.",
    keywords: ["OpenDSS", "PSS/E", "PSCAD", "voltage-limit checks", "controller-test-case design"],
    keywordsFr: ["OpenDSS", "PSS/E", "PSCAD", "verification de tension", "cas de test controleur"],
    track: "research"
  },
  {
    title: "VPP Dispatch to Controller-Test Scenarios",
    titleFr: "Dispatch VPP vers scenarios de test controleur",
    text: "I convert VPP forecasting, DER capability estimation, optimizer outputs, and dispatch propagation results into controller-test scenarios with DER flexibility envelopes, BESS SoC and ramp limits, PV availability, inverter P-Q limits, network voltage/loading constraints, uncertainty cases, and abnormal operating conditions.",
    textFr: "Je convertis prevision VPP, estimation de capacite DER, sorties optimiseur et propagation dispatch en scenarios de test controleur avec enveloppes de flexibilite DER, limites SoC et rampes BESS, disponibilite PV, limites P-Q onduleur, contraintes tension/chargement, cas d'incertitude et conditions anormales.",
    keywords: ["VPP forecasting", "DER capability", "dispatch propagation", "BESS SoC", "inverter P-Q limits"],
    keywordsFr: ["prevision VPP", "capacite DER", "propagation dispatch", "SoC BESS", "limites P-Q onduleur"],
    track: "market"
  },
  {
    title: "Optimization & Uncertainty Modelling",
    titleFr: "Optimisation et modelisation de l'incertitude",
    text: "My Ph.D. work covers stochastic, robust, and distributionally robust optimization for VPP coordination under renewable, load, and market uncertainty, translating results into DER operating limits, flexibility envelopes, BESS SoC constraints, and network limits.",
    textFr: "Mon Ph.D. couvre optimisation stochastique, robuste et distributionally robust pour coordination VPP sous incertitude renouvelable, charge et marche, avec traduction vers limites operationnelles DER, enveloppes de flexibilite, contraintes SoC BESS et limites reseau.",
    keywords: ["stochastic", "robust", "distributionally robust optimization", "VPP coordination", "network limits"],
    keywordsFr: ["stochastique", "robuste", "distributionally robust", "coordination VPP", "limites reseau"],
    track: "market"
  },
  {
    title: "Grid, Standards & Market Context",
    titleFr: "Contexte reseau, normes et marche",
    text: "I connect microgrid EMS, DER coordination, BESS/PV/PCS/meter interfaces, IEEE 1547/1547.1, IEEE 2030.7/2030.8, UL 1741, IEEE 519, IEC 62443 awareness, IEC 61508 awareness, ISO/RTO market-rule analysis, reserve/regulation products, dispatch schedules, grid-feasibility checks, and ERCOT/MISO/NYISO/ISO-NE concepts.",
    textFr: "Je relie EMS microgrid, coordination DER, interfaces BESS/PV/PCS/compteur, IEEE 1547/1547.1, IEEE 2030.7/2030.8, UL 1741, IEEE 519, sensibilisation IEC 62443, sensibilisation IEC 61508, analyse des regles ISO/RTO, produits reserve/regulation, calendriers dispatch, faisabilite reseau et concepts ERCOT/MISO/NYISO/ISO-NE.",
    keywords: ["IEEE 1547", "ISO/RTO", "reserve/regulation", "grid-feasibility", "ERCOT"],
    keywordsFr: ["IEEE 1547", "ISO/RTO", "reserve/regulation", "faisabilite reseau", "ERCOT"],
    track: "research"
  }
];
