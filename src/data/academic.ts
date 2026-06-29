import type { AcademicItem } from "../types";

export const academicExperience: AcademicItem[] = [
  {
    title: "Researcher - Power-System Software & Controller Validation",
    titleFr: "Chercheur - logiciel reseau et validation controleur",
    institution: "Huawei Technologies Canada - Montreal, QC",
    period: "Dec 2024 - Present",
    periodFr: "Dec. 2024 - aujourd'hui",
    startYear: 2024,
    endYear: "present",
    summary: "Develops power-system software workflows and controller-facing validation platforms linking ISO/RTO rules, forecasts, DER limits, VPP/EMS dispatch, OpenDSS/QSTS grid validation, RTS interfaces, and PLCnext controller testing.",
    summaryFr: "Developpe des workflows logiciels reseau et plateformes de validation controleur reliant regles ISO/RTO, previsions, limites DER, dispatch VPP/EMS, validation OpenDSS/QSTS, interfaces RTS et tests PLCnext.",
    highlights: [
      "Translate ISO/RTO rules, forecasts, DER operating limits, reserve requirements, and grid-security constraints into dispatch schedules, KPI logic, and validation requirements",
      "Advance the VPP/EMS platform from separate analytical modules into an integrated workflow linking forecasting, capability estimation, optimization, dispatch propagation, OpenDSS/QSTS grid validation, and monitoring",
      "Develop engineering software services and data interfaces using Python/C++, FastAPI/REST, SQL-backed datasets, Redis caching, Kafka/MQTT/WebSocket exchange, logging, and Git-controlled workflows",
      "Develop controller-facing validation workflows that translate supervisory EMS setpoints and VPP dispatch targets into executable controller logic for BESS, PV, PCS, and meter interfaces",
      "Implement IEC 61131-3 Structured Text, FSM sequencing, interlocks, watchdogs, diagnostic states, command/readback validation, and safe-state behavior for microgrid controller testing",
      "Build simulation-to-controller interface layers using C/C++ and Python bridge logic, Modbus TCP point maps, telemetry/command scaling, acknowledgement/status/fault bits, watchdog timers, latency logging, and JSON/SQL test artifacts",
      "Design a real-time validation platform based on RTS and PLCnext AXC F 3152 to test secondary-controller algorithms, solver/interface performance, and closed-loop behavior",
      "Define validation scenarios, expected behavior, objective metrics, and acceptance checks for voltage limits, feeder loading, BESS SoC, P/Q setpoint tracking, stale data, communication loss, timeout, and safe fallback"
    ],
    highlightsFr: [
      "Traduction des regles ISO/RTO, previsions, limites operationnelles DER, exigences de reserve et contraintes de securite reseau en calendriers dispatch, logique KPI et exigences de validation",
      "Evolution de la plateforme VPP/EMS depuis des modules analytiques separes vers un workflow integre reliant prevision, estimation de capacite, optimisation, propagation dispatch, validation OpenDSS/QSTS et monitoring",
      "Developpement de services logiciels et interfaces donnees avec Python/C++, FastAPI/REST, datasets SQL, cache Redis, echanges Kafka/MQTT/WebSocket, logs et workflows sous Git",
      "Developpement de workflows de validation orientee controleur traduisant consignes EMS et cibles de dispatch VPP en logique controleur executable pour interfaces BESS, PV, PCS et compteurs",
      "Implementation IEC 61131-3 Structured Text, sequences FSM, interlocks, watchdogs, etats diagnostics, validation commande/lecture et comportement safe-state pour tests controleur microgrid",
      "Construction de couches simulateur-vers-controleur avec ponts C/C++ et Python, cartes Modbus TCP, mise a l'echelle telemetrie/commande, bits acknowledgement/status/fault, timers watchdog, logs latence et artefacts JSON/SQL",
      "Conception d'une plateforme de validation temps reel basee sur RTS et PLCnext AXC F 3152 pour tester algorithmes de controle secondaire, performance solveur/interface et comportement en boucle fermee",
      "Definition de scenarios de validation, comportement attendu, metriques objectives et checks d'acceptation pour tension, chargement, SoC BESS, suivi P/Q, donnees perimees, perte communication, timeout et repli sur"
    ]
  },
  {
    title: "Research Intern - VPP Platform & Grid-Analysis Software",
    titleFr: "Stagiaire de recherche - plateforme VPP et logiciel d'analyse reseau",
    institution: "Huawei Technologies Canada - Montreal, QC",
    period: "Oct 2023 - Dec 2024",
    periodFr: "Oct. 2023 - dec. 2024",
    startYear: 2023,
    endYear: 2024,
    summary: "Built early VPP software foundations, grid-analysis data pipelines, and the first software-to-controller transition layer for later EMS/controller validation workflows.",
    summaryFr: "A construit les bases logicielles VPP, les pipelines de donnees d'analyse reseau et la premiere couche logiciel-vers-controleur pour les workflows ulterieurs de validation EMS/controleur.",
    highlights: [
      "Built early VPP software foundations including ISO/RTO market-rule analysis, DER aggregation requirements, forecasting inputs, optimizer outputs, capability limits, dispatch propagation, distribution simulation, and SIL workflow assumptions",
      "Developed and validated core modules including optimizer, dispatch propagator, capability extractor, forecasting engine, and digital-twin models as standalone components and as part of end-to-end orchestration",
      "Defined the first software-to-controller transition layer: measurement/command contracts, device profiles, register maps, scheduler timing assumptions, diagnostic logs, and PLC/RTAC test cases",
      "Validated market, weather, simulation, and diagnostic datasets exceeding 50 GB for forecasting, scenario generation, and repeatable validation",
      "Connected VPP optimizer outputs to DER flexibility envelopes, BESS SoC limits, PV availability, network voltage/loading constraints, and abnormal operating conditions"
    ],
    highlightsFr: [
      "Construction des bases logicielles VPP: analyse des regles ISO/RTO, exigences d'agregation DER, entrees de prevision, sorties optimiseur, limites de capacite, propagation dispatch, simulation distribution et hypotheses de workflow SIL",
      "Developpement et validation des modules coeur: optimiseur, propagateur dispatch, extracteur de capacite, moteur de prevision et modeles digital twin comme composants autonomes et dans l'orchestration bout-en-bout",
      "Definition de la premiere couche logiciel-vers-controleur: contrats mesure/commande, profils equipement, cartes registres, hypotheses timing scheduler, logs diagnostic et cas de test PLC/RTAC",
      "Validation de plus de 50 Go de donnees marche, meteo, simulation et diagnostic pour prevision, generation de scenarios et validation repetable",
      "Connexion des sorties optimiseur VPP aux enveloppes de flexibilite DER, limites SoC BESS, disponibilite PV, contraintes tension/chargement et conditions anormales"
    ]
  },
  {
    title: "Doctoral Researcher - Power Systems Modelling & Control",
    titleFr: "Doctorant chercheur - modelisation et controle des reseaux electriques",
    institution: "Universite Laval - Quebec City, QC",
    period: "Dec 2020 - Dec 2024",
    periodFr: "Dec. 2020 - dec. 2024",
    startYear: 2020,
    endYear: 2024,
    summary: "Completed Ph.D. research in DER coordination, VPP optimization, voltage/frequency support, and uncertainty-aware power-system operation.",
    summaryFr: "Ph.D. complete en coordination DER, optimisation VPP, soutien tension/frequence et operation de reseaux sous incertitude.",
    highlights: [
      "Developed stochastic, robust, and distributionally robust optimization for VPP coordination under renewable, load, and market uncertainty",
      "Translated optimization outcomes into control-oriented DER operating limits, flexibility envelopes, BESS SoC constraints, and network limits",
      "Built time-series validation workflows for DER portfolios supporting EMS dispatch, grid-feasibility evaluation, controller-test-case design, voltage/frequency support assessment, and resilience-oriented operating scenarios",
      "Published first-author work on VPP coordination, DRO co-optimization, frequency regulation, voltage support, and resilience-oriented distribution-network operation"
    ],
    highlightsFr: [
      "Developpement d'optimisation stochastique, robuste et distributionally robust pour coordination VPP sous incertitude renouvelable, charge et marche",
      "Traduction des sorties d'optimisation en limites DER orientees controle, enveloppes de flexibilite, contraintes SoC BESS et limites reseau",
      "Construction de workflows de validation temporelle pour portefeuilles DER supportant dispatch EMS, faisabilite reseau, conception de cas de test controleur, soutien tension/frequence et scenarios resilience",
      "Publications premier auteur sur coordination VPP, co-optimisation DRO, regulation de frequence, soutien de tension et operation de distribution orientee resilience"
    ]
  },
  {
    title: "Research Collaborator - DER Resilience & Grid Integration",
    titleFr: "Collaborateur de recherche - resilience DER et integration reseau",
    institution: "Universite Laval - EVLO collaboration",
    period: "Jan 2021 - Sep 2022",
    periodFr: "Jan. 2021 - sept. 2022",
    startYear: 2021,
    endYear: 2022,
    summary: "Supported robust scenario analysis and storage-based DER coordination for active distribution networks under severe-event, resilience, and operating-constraint conditions.",
    summaryFr: "A soutenu l'analyse robuste de scenarios et la coordination DER avec stockage pour reseaux de distribution actifs sous evenements severes, resilience et contraintes d'exploitation.",
    highlights: [
      "Supported robust scenario analysis for active distribution networks under severe-event and resilience conditions",
      "Supported storage-based DER coordination under operating-constraint conditions"
    ],
    highlightsFr: [
      "Soutien a l'analyse robuste de scenarios pour reseaux de distribution actifs sous evenements severes et conditions de resilience",
      "Soutien a la coordination DER avec stockage sous contraintes d'exploitation"
    ]
  }
];
