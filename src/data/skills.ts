import type { SkillBlock } from "../types";

export const skills: SkillBlock[] = [
  {
    title: "Power Systems & Grid Support",
    titleFr: "Réseaux électriques et soutien réseau",
    text: "I work on voltage regulation and reactive power support, primary/droop frequency response, operating reserves, active/reactive power dispatch, DER hosting-capacity and grid-impact studies, P-Q capability curves, interconnection limits, and IEEE 1547 grid-support functions.",
    textFr: "Je travaille sur la régulation de tension et le soutien de puissance réactive, la réponse de fréquence primaire/droop, les réserves d'exploitation, le dispatch P/Q, les études de capacité d'accueil DER et d'impact réseau, les courbes de capacité P-Q, les limites d'interconnexion et les fonctions réseau IEEE 1547.",
    keywords: ["voltage regulation", "frequency response", "operating reserves", "active/reactive power dispatch", "IEEE 1547"],
    keywordsFr: ["régulation de tension", "réponse de fréquence", "réserves d'exploitation", "dispatch P/Q", "IEEE 1547"],
    track: "research"
  },
  {
    title: "Optimization & Uncertainty Modelling",
    titleFr: "Optimisation et modélisation de l'incertitude",
    text: "I formulate DER dispatch problems with LP, MILP, NLP, and MISOCP models, using stochastic programming, robust optimization, Wasserstein DRO, ADMM, Nash and Stackelberg game theory, Pyomo, Gurobi, CPLEX, IPOPT, CVX, and MATLAB.",
    textFr: "Je formule les problèmes de dispatch DER avec des modèles LP, MILP, NLP et MISOCP, en utilisant la programmation stochastique, l'optimisation robuste, la DRO de Wasserstein, ADMM, les jeux de Nash et Stackelberg, Pyomo, Gurobi, CPLEX, IPOPT, CVX et MATLAB.",
    keywords: ["LP, MILP, NLP, and MISOCP", "stochastic programming", "robust optimization", "Wasserstein DRO", "ADMM"],
    keywordsFr: ["LP, MILP, NLP et MISOCP", "programmation stochastique", "optimisation robuste", "DRO de Wasserstein", "ADMM"],
    track: "market"
  },
  {
    title: "VPP & Microgrid EMS",
    titleFr: "VPP et EMS microgrid",
    text: "I develop DER aggregation, capability estimation, dispatch disaggregation, auto-trader logic, microgrid operating-mode management, setpoint and secondary-control coordination, BESS SoC and ramp-limit handling, inverter P-Q limit enforcement, and cloud-fog-edge VPP workflows.",
    textFr: "Je développe l'agrégation DER, l'estimation de capacité, la désagrégation du dispatch, la logique d'auto-trader, la gestion des modes microgrid, la coordination des consignes et du contrôle secondaire, les limites SoC et rampes BESS, les limites P-Q des onduleurs et les workflows VPP cloud-fog-edge.",
    keywords: ["DER aggregation", "capability estimation", "dispatch disaggregation", "auto-trader logic", "BESS SoC"],
    keywordsFr: ["agrégation DER", "estimation de capacité", "désagrégation du dispatch", "logique d'auto-trader", "SoC BESS"],
    track: "market"
  },
  {
    title: "ISO/RTO Market Participation",
    titleFr: "Participation aux marchés ISO/RTO",
    text: "I study and apply ERCOT, MISO, NYISO, and ISO-NE market and interconnection rules, translating energy, reserve, and frequency-regulation structures into forecast-driven bid/offer logic, dispatch schedules, KPI models, and grid-feasibility validation requirements.",
    textFr: "J'étudie et j'applique les règles de marché et d'interconnexion ERCOT, MISO, NYISO et ISO-NE, en traduisant les structures d'énergie, de réserve et de régulation de fréquence en logique d'offres, calendriers de dispatch, modèles KPI et exigences de validation réseau.",
    keywords: ["ERCOT", "MISO", "NYISO", "ISO-NE", "bid/offer logic"],
    keywordsFr: ["ERCOT", "MISO", "NYISO", "ISO-NE", "logique d'offres"],
    track: "market"
  },
  {
    title: "Power-System Simulation & Validation",
    titleFr: "Simulation et validation de réseaux électriques",
    text: "I perform steady-state power-flow and quasi-static time-series studies using tools such as OpenDSS and MATLAB; use PSS/E for planning and dynamic-analysis workflows; use PSCAD for EMT-oriented studies; and prepare SIL/controller-in-the-loop validation cases for voltage limits, feeder loading, DER response, and grid-feasibility constraints.",
    textFr: "Je réalise des études de flux de puissance et des études quasi-statiques temporelles avec des outils tels qu'OpenDSS et MATLAB; j'utilise PSS/E pour les workflows de planification et d'analyse dynamique; PSCAD pour les études orientées EMT; et je prépare des cas SIL/controller-in-the-loop pour les limites de tension, le chargement, la réponse DER et les contraintes de faisabilité réseau.",
    keywords: ["steady-state power-flow", "quasi-static time-series studies", "software-in-the-loop", "controller-in-the-loop", "OpenDSS", "PSCAD"],
    keywordsFr: ["flux de puissance", "études quasi-statiques temporelles", "software-in-the-loop", "controller-in-the-loop", "OpenDSS", "PSCAD"],
    track: "software"
  },
  {
    title: "Forecasting & Analytics",
    titleFr: "Prévision et analytique",
    text: "I build day-ahead and intraday forecasting workflows for price, load, and PV generation, using weather and market data, scenario generation, sensitivity analysis, LSTM, GRU, CNN, random forest, and XGBoost.",
    textFr: "Je construis des workflows de prévision day-ahead et intraday pour les prix, la charge et la production PV, avec données météo et marché, génération de scénarios, analyse de sensibilité, LSTM, GRU, CNN, random forest et XGBoost.",
    keywords: ["day-ahead and intraday forecasting", "price, load, and PV", "scenario generation", "LSTM", "XGBoost"],
    keywordsFr: ["prévision day-ahead et intraday", "prix, charge et PV", "génération de scénarios", "LSTM", "XGBoost"],
    track: "software"
  },
  {
    title: "Engineering Software & Data Interfaces",
    titleFr: "Logiciels d'ingénierie et interfaces de données",
    text: "I build EMS orchestration services, time-indexed simulation interfaces, streaming data pipelines, RESTful APIs, live-updating dashboards, and controller data interfaces with Python, Java, C/C++, FastAPI, MATLAB, Kafka, MQTT, WebSocket, and Redis.",
    textFr: "Je construis des services d'orchestration EMS et des interfaces de simulation indexées dans le temps, des pipelines de données streaming, des API REST, des tableaux de bord à mise à jour live et des interfaces contrôleur avec Python, Java, C/C++, FastAPI, MATLAB, Kafka, MQTT, WebSocket et Redis.",
    keywords: ["EMS orchestration services", "simulation orchestration interfaces", "RESTful APIs", "Kafka, MQTT, WebSocket", "Redis"],
    keywordsFr: ["services d'orchestration EMS", "interfaces d'orchestration de simulation", "API REST", "Kafka, MQTT, WebSocket", "Redis"],
    track: "software"
  },
  {
    title: "Controllers & IEC 61131-3 Programming",
    titleFr: "Contrôleurs et programmation IEC 61131-3",
    text: "I program IEC 61131-3 Structured Text, Ladder Diagram, and Function Block logic with scan-cycle scheduling, FSM sequencing, interlocks, watchdogs, command/readback validation, CODESYS, TwinCAT, PLCnext AXC F 3152/2152, SEL RTAC, Schneider Modicon M262/M580, DEIF AGC/ASC 150, Elum ePowerControl ES+, and ComAp InteliNeo 6000.",
    textFr: "Je programme en IEC 61131-3 Structured Text, Ladder Diagram et Function Block avec cycles de scan, séquencement FSM, interlocks, watchdogs, validation commande/lecture, CODESYS, TwinCAT, PLCnext AXC F 3152/2152, SEL RTAC, Schneider Modicon M262/M580, DEIF AGC/ASC 150, Elum ePowerControl ES+ et ComAp InteliNeo 6000.",
    keywords: ["Structured Text", "Ladder", "Function Block", "watchdogs", "PLCnext AXC F 3152/2152"],
    keywordsFr: ["Structured Text", "Ladder", "Function Block", "watchdogs", "PLCnext AXC F 3152/2152"],
    track: "automation"
  },
  {
    title: "Industrial Communication & Gateway Interfaces",
    titleFr: "Communications industrielles et passerelles",
    text: "I implement Modbus TCP/RTU and TCP/WebSocket exchange layers, define simulator-to-protocol point maps, scaling, status flags, device profiles, and gateway logic, with exposure to IEC 61850 concepts, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, EtherCAT, PROFINET, and EtherNet/IP.",
    textFr: "J'implémente des couches d'échange Modbus TCP/RTU et TCP/WebSocket, je définis les mappings points simulateur-protocole, la mise à l'échelle, les statuts, profils d'équipement et logiques de passerelle, avec exposition à IEC 61850 concepts, OPC UA, DNP3, IEC 60870-5-104, CAN/J1939, MQTT, EtherCAT, PROFINET et EtherNet/IP.",
    keywords: ["Modbus TCP/RTU", "IEC 61850 concepts", "OPC UA", "DNP3", "CAN/J1939"],
    keywordsFr: ["Modbus TCP/RTU", "IEC 61850 concepts", "OPC UA", "DNP3", "CAN/J1939"],
    track: "automation"
  },
  {
    title: "Real-Time Simulation, I/O & Timing",
    titleFr: "Simulation temps réel, E/S et timing",
    text: "I design real-time simulator interfaces and time-domain solver logic with timestamp alignment, simulator/controller update-cycle coordination, sampling and update-rate plans, execution budgets, latency/jitter diagnostics, stale-data detection, timeout handling, and offline SIL plus real-time CIL/CHIL preparation workflows. I also work with real-time and HIL environments such as OPAL-RT and RTDS, PREEMPT_RT Linux, FreeRTOS, and embedded RTOS concepts.",
    textFr: "Je conçois des interfaces de simulateur temps réel et de la logique de solveur temporel avec alignement des horodatages, coordination des cycles simulateur/contrôleur, plans d'échantillonnage, budgets d'exécution, diagnostics de latence/jitter, détection de données périmées, gestion des timeouts, études SIL hors ligne et préparation CIL/CHIL en temps réel. Je travaille aussi avec des environnements temps réel et HIL comme OPAL-RT et RTDS, PREEMPT_RT Linux, FreeRTOS et des concepts RTOS embarqués.",
    keywords: ["real-time simulator interfaces", "time-domain simulation solver", "latency and jitter", "stale-data and timeout", "OPAL-RT"],
    keywordsFr: ["interfaces de simulateur temps réel", "solveur temporel", "latence et jitter", "données périmées et timeouts", "OPAL-RT"],
    track: "automation"
  }
];
