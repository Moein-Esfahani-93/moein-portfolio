import type { AcademicItem } from "../types";

export const academicExperience: AcademicItem[] = [
  {
    title: "Researcher - Microgrid Controller Design & CHIL Implementation",
    titleFr: "Chercheur - conception controleur microgrid et implementation CHIL",
    institution: "Huawei Technologies Canada - Montreal, QC",
    period: "Dec 2024 - Present",
    periodFr: "Dec. 2024 - aujourd'hui",
    startYear: 2024,
    endYear: "present",
    summary: "Develops controller-facing validation workflows translating EMS setpoints and VPP dispatch targets into executable controller logic, test scenarios, metrics, and evidence for BESS, PV, PCS, and meter interfaces.",
    summaryFr: "Developpe des workflows de validation orientee controleur qui traduisent consignes EMS et cibles de dispatch VPP en logique controleur executable, scenarios, metriques et preuves pour interfaces BESS, PV, PCS et compteurs.",
    highlights: [
      "Develop controller-facing validation workflows that translate supervisory EMS setpoints and VPP dispatch targets into executable controller logic for BESS, PV, PCS, and meter interfaces",
      "Implement IEC 61131-3 Structured Text, FSM sequencing, interlocks, watchdogs, diagnostic states, command/readback validation, and safe-state behavior for microgrid controller testing",
      "Build simulation-to-controller interface layers using C/C++ and Python bridge logic, Modbus TCP point maps, telemetry/command scaling, acknowledgement/status/fault bits, watchdog timers, latency logging, and JSON/SQL test artifacts",
      "Define validation scenarios, expected behavior, objective metrics, and acceptance checks for voltage limits, feeder loading, BESS SoC, P/Q setpoint tracking, stale data, communication loss, timeout, and safe fallback",
      "Troubleshoot simulator/controller integration issues using timing logs, communication-health flags, command/readback mismatches, protocol traces, and repeatable test evidence",
      "Work hands-on across PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider Modicon M262/M580, DEIF AGC/ASC 150, ELUM Es+, and ComAp InteliNeo 6000 controllers"
    ],
    highlightsFr: [
      "Developpement de workflows de validation orientee controleur traduisant consignes EMS et cibles de dispatch VPP en logique controleur executable pour interfaces BESS, PV, PCS et compteurs",
      "Implementation IEC 61131-3 Structured Text, sequences FSM, interlocks, watchdogs, etats diagnostics, validation commande/lecture et comportement safe-state pour tests controleur microgrid",
      "Construction de couches simulateur-vers-controleur avec ponts C/C++ et Python, cartes Modbus TCP, mise a l'echelle telemetrie/commande, bits acknowledgement/status/fault, timers watchdog, logs latence et artefacts JSON/SQL",
      "Definition de scenarios de validation, comportement attendu, metriques objectives et checks d'acceptation pour tension, chargement, SoC BESS, suivi P/Q, donnees perimees, perte communication, timeout et repli sur",
      "Depannage d'integration simulateur/controleur avec logs timing, flags sante communication, mismatches commande/lecture, traces protocolaires et preuves repetables",
      "Travail pratique avec PLCnext AXC F 3152/2152, SEL RTAC 3350, Schneider Modicon M262/M580, DEIF AGC/ASC 150, ELUM Es+ et ComAp InteliNeo 6000"
    ]
  },
  {
    title: "Research Intern - VPP & Microgrid Controller Interfaces",
    titleFr: "Stagiaire de recherche - VPP et interfaces controleur microgrid",
    institution: "Huawei Technologies Canada - Montreal, QC",
    period: "Oct 2023 - Dec 2024",
    periodFr: "Oct. 2023 - dec. 2024",
    startYear: 2023,
    endYear: 2024,
    summary: "Built early VPP software foundations and the first software-to-controller transition layer for later EMS/controller validation workflows.",
    summaryFr: "A construit les bases logicielles VPP et la premiere couche logiciel-vers-controleur pour les workflows ulterieurs de validation EMS/controleur.",
    highlights: [
      "Built early VPP software foundations including DER aggregation, forecasting inputs, optimizer outputs, capability limits, dispatch propagation, and grid-feasibility checks for later EMS/controller validation workflows",
      "Defined the first software-to-controller transition layer: measurement/command contracts, device profiles, register maps, scheduler timing assumptions, diagnostic logs, and PLC/RTAC test cases",
      "Validated market, weather, simulation, and diagnostic datasets exceeding 50 GB for forecasting, scenario generation, and repeatable validation",
      "Connected VPP optimizer outputs to DER flexibility envelopes, BESS SoC limits, PV availability, network voltage/loading constraints, and abnormal operating conditions"
    ],
    highlightsFr: [
      "Construction des bases logicielles VPP: aggregation DER, entrees de prevision, sorties optimiseur, limites de capacite, propagation dispatch et checks de faisabilite reseau pour validation EMS/controleur",
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
