import type { AcademicItem } from "../types";

export const academicExperience: AcademicItem[] = [
  {
    title: "Researcher - Microgrid EMS Design and Controller-Interface Validation",
    titleFr: "Chercheur - Conception EMS microgrid et validation des Interfaces contrôleur",
    institution: "Huawei Technologies",
    period: "Dec 2024 - Present",
    periodFr: "Déc. 2024 - aujourd'hui",
    startYear: 2024,
    endYear: "present",
    summary: "Promoted to Researcher level 16. Leads VPP market analytics, grid-aware optimization, microgrid EMS validation, controller-facing workflows, and RTS/AXC F 3152 closed-loop analysis.",
    summaryFr: "Promu Researcher level 16. Mène l'analytique marché VPP, l'optimisation orientée réseau, la validation EMS microgrid, les workflows orientés contrôleur et l'analyse en boucle fermée RTS/AXC F 3152.",
    highlights: [
      "Lead VPP market-analytics and grid-aware optimization, translating energy, reserve, and frequency-regulation rules into forecast-driven bid/offer logic, dispatch schedules, KPI models, and grid-feasibility validation requirements",
      "Advanced the VPP platform from separate analytical modules toward an integrated workflow linking auto-trader, forecasting, capability estimation, optimization, dispatch propagation, and grid-validation",
      "Built a parallel microgrid EMS validation workflow on PLCnext AXC F 3152/2152 with IEC 61131-3 Structured Text and Python orchestration",
      "Designed and developed a controller-facing validation platform based on RTS and AXC F 3152 to evaluate secondary-control logic, real-time solver performance, and closed-loop controller behavior",
      "Defined BESS PCS, PV inverter, and meter telemetry/control mappings, P/Q setpoints, state commands, SoC, measurements, acknowledgement/readback, and latency checks"
    ],
    highlightsFr: [
      "Pilotage de l'analytique marché VPP et de l'optimisation orientée réseau, traduisant règles énergie, réserve et régulation de fréquence en logique d'offres basée prévisions, calendriers de dispatch, modèles KPI et exigences de validation réseau",
      "Évolution de la plateforme VPP depuis des modules analytiques séparés vers un workflow intégré reliant auto-trader, prévision, estimation de capacité, optimisation, propagation du dispatch et validation réseau",
      "Développement d'un workflow parallèle de validation EMS microgrid sur PLCnext AXC F 3152/2152 avec IEC 61131-3 Structured Text et orchestration Python",
      "Conception et développement d'une plateforme de validation orientée contrôleur basée sur RTS et AXC F 3152 pour évaluer la logique de contrôle secondaire, performance de solveur temps réel et comportement contrôleur en boucle fermée",
      "Définition des mappings télémétrie/contrôle du PCS BESS, de l'onduleur PV et du compteur, consignes P/Q, commandes d'état, SoC, mesures, acquittement/lecture et vérifications de latence"
    ]
  },
  {
    title: "Research Intern - VPP Platform, Microgrid EMS Software & Controller Interfaces",
    titleFr: "Stagiaire de recherche - Plateforme VPP, logiciel EMS microgrid et Interfaces contrôleur",
    institution: "Huawei Technologies",
    period: "Oct 2023 - Dec 2024",
    periodFr: "Oct. 2023 - déc. 2024",
    startYear: 2023,
    endYear: 2024,
    summary: "Promoted from intern into full-time employee after graduation. Built early VPP platform foundations, forecasting data, optimizer outputs, controller-interface assumptions, and validation workflows.",
    summaryFr: "Promu de stagiaire à employé temps plein après graduation. A construit les bases de la plateforme VPP, les données de prévision, sorties d'optimiseur, hypothèses d'Interface contrôleur et workflows de validation.",
    highlights: [
      "Built the early VPP platform foundation through ISO/RTO market-rule analysis, DER portfolio aggregation requirements, and market-facing dispatch architecture",
      "Created a 50+ GB historical price, weather, load, and PV data foundation for forecasting, scenario generation, and repeatable validation",
      "Developed and validated the optimizer, dispatch propagator, capability extractor, forecasting engine, and capability/state-estimation models as standalone components and as part of end-to-end VPP orchestration",
      "Defined the first software-to-controller transition layer: measurement/command contracts, device profiles, register maps, scheduler timing assumptions, diagnostic logs, and PLC/RTAC test scenarios"
    ],
    highlightsFr: [
      "Construction des bases de la plateforme VPP par analyse des règles marché ISO/RTO, exigences d'agrégation DER et architecture de dispatch orientée marché",
      "Création d'une base historique de plus de 50 Go de prix, météo, charge et PV pour prévision, génération de scénarios et validation reproductible",
      "Développement et validation de l'optimiseur, propagateur de dispatch, extracteur de capacité, moteur de prévision et modèles d'estimation de capacité/état comme composants autonomes et dans l'orchestration VPP bout en bout",
      "Définition de la première couche logiciel-vers-contrôleur: contrats mesure/commande, profils d'équipement, cartes registres, hypothèses de timing scheduler, logs diagnostics et scénarios PLC/RTAC"
    ]
  },
  {
    title: "Doctoral Researcher - Optimization & Uncertainty Modelling for VPP Coordination",
    titleFr: "Doctorant chercheur - Optimisation et modélisation de l'incertitude pour coordination VPP",
    institution: "Université Laval",
    period: "Dec 2020 - Dec 2024",
    periodFr: "Déc. 2020 - déc. 2024",
    startYear: 2020,
    endYear: 2024,
    summary: "Completed Ph.D. research in DER coordination and VPP optimization under renewable, load, and market uncertainty.",
    summaryFr: "Recherche de Ph.D. complétée en coordination DER et optimisation VPP sous incertitude renouvelable, charge et marché.",
    highlights: [
      "Developed stochastic, robust, and Wasserstein-DRO models for VPP coordination under renewable, load, and market uncertainty",
      "Covered energy scheduling, frequency regulation, voltage support, and grid-feasibility requirements",
      "Developed ADMM-distributed, Stackelberg, and Nash coordination schemes for DSO-VPP interaction",
      "Published 4 first-author papers from the doctoral research"
    ],
    highlightsFr: [
      "Développement de modèles stochastiques, robustes et Wasserstein-DRO pour la coordination VPP sous incertitude renouvelable, charge et marché",
      "Couverture de la planification énergie, régulation de fréquence, soutien de tension et exigences de faisabilité réseau",
      "Développement de schémas de coordination ADMM distribuée, Stackelberg et Nash pour interaction DSO-VPP",
      "Publication de 4 articles en premier auteur issus de la recherche doctorale"
    ]
  },
  {
    title: "Research Collaborator - DER Resilience & Grid Integration",
    titleFr: "Collaborateur de recherche - Résilience DER et intégration réseau",
    institution: "Université Laval - EVLO collaboration",
    period: "Jan 2021 - Sep 2022",
    periodFr: "Janv. 2021 - sept. 2022",
    startYear: 2021,
    endYear: 2022,
    summary: "Supported robust scenario analysis and storage-based DER coordination for active distribution networks under severe-event, resilience, and operating-constraint conditions.",
    summaryFr: "A soutenu l'analyse robuste de scénarios et la coordination DER avec stockage pour réseaux de distribution actifs sous conditions d'événements sévères, de résilience et de contraintes d'exploitation.",
    highlights: [
      "Supported robust scenario analysis for active distribution networks under severe-event and resilience conditions",
      "Supported storage-based DER coordination under operating-constraint conditions"
    ],
    highlightsFr: [
      "Soutien à l'analyse robuste de scénarios pour réseaux de distribution actifs sous événements sévères et conditions de résilience",
      "Soutien à la coordination DER avec stockage sous contraintes d'exploitation"
    ]
  }
];
