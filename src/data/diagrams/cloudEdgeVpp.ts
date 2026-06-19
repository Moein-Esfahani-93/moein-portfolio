import type { ProjectDiagram } from "../../components/diagrams/diagramTypes";

export const cloudEdgeVpp: ProjectDiagram[] = [
  {
    title: "VPP Platform Architecture",
    titleFr: "Architecture VPP",
    data: {
      viewBox: "0 0 760 470",
      detailsOnHover: true,
      groups: [
        { label: "Cloud Layer", labelFr: "Couche cloud", x:70, y: 58, w: 610, h: 170, variant: "cloud" },
        { label: "Platform Layer", labelFr: "Couche plateforme", x: 70, y: 242, w: 610, h: 86, variant: "platform" },
        { label: "Edge / Site Layer", labelFr: "Couche edge / site", x: 70, y: 344, w: 610, h: 110, variant: "edge" }
      ],
      nodes: [
        { id: "grid", label: "Market, Weather & Grid Data", labelFr: "Données marché, météo et réseau", sublabel: "price / load / PV / weather / market signals", sublabelFr: "prix / charge / PV / météo / signaux marché", x: 455, y: 35, w: 160, h: 32, variant: "highlight" },
        { id: "user", label: "EMS Orchestration / Services", labelFr: "Orchestration EMS / services", sublabel: "REST APIs / live dashboard / KPI models", sublabelFr: "API REST / tableau de bord live / modèles KPI", x: 220, y: 80, w: 126, h: 36, variant: "muted" },
        { id: "digital", label: "VPP Capability Model", labelFr: "Modèle de capacité VPP", sublabel: "capability / flexibility / constraints", sublabelFr: "capacité / flexibilité / contraintes", x: 220, y: 150, w: 126, h: 36, variant: "accent" },
        { id: "autotrader", label: "Auto-Trader", sublabel: "forecasting / strategy evaluation", sublabelFr: "prévision / évaluation stratégie", x: 410, y: 150, w: 126, h: 36, variant: "primary" },
        { id: "optipagator", label: "Dispatch Optimizer", sublabel: "active + reserve power allocation", sublabelFr: "allocation puissance active + réserve", x: 610, y: 150, w: 126, h: 36, variant: "accent" },
        { id: "data", label: "Data Platform", labelFr: "Plateforme données", sublabel: "streaming / messaging / telemetry backbone", sublabelFr: "streaming / messagerie / télémétrie", x: 330, y: 285, w: 158, h: 36, variant: "primary" },
        { id: "monitor", label: "Monitoring", labelFr: "Monitoring", sublabel: "KPI models / telemetry / dispatch status", sublabelFr: "modèles KPI / télémétrie / statut dispatch", x: 565, y: 285, w: 132, h: 36, variant: "accent" },
        { id: "gateway", label: "Edge Gateway", labelFr: "Passerelle edge", sublabel: "telemetry & command of CB", sublabelFr: "relais télémétrie et commandes", x: 430, y: 365, w: 200, h: 32, variant: "accent" },
        { id: "derfleet", label: "DER Fleet and Site Assets", labelFr: "Flotte DER et actifs site", sublabel: "PV | BESS | controllable loads | meters", sublabelFr: "PV | BESS | charges contrôlables | compteurs", x: 430, y: 430, w: 285, h: 30, variant: "highlight" }
      ],
      edges: [
        { from: "grid", to: "autotrader", label: "market + weather data", labelFr: "données marché + météo", labelPos: { x: 505, y: 82 }, points: [{ x: 455, y: 51 }, { x: 455, y: 132 }] },
        { from: "user", to: "digital", label: "REST API / dashboard", labelFr: "API REST / tableau de bord", bidirectional: true, labelPos: { x: 110, y: 136 }, points: [{ x: 220, y: 100 }, { x: 220, y: 130 }] },
        { from: "digital", to: "autotrader", label: "capacity / flexibility", labelFr: "capacité / flexibilité", labelPos: { x: 315, y: 134 }, points: [{ x: 283, y: 150 }, { x: 347, y: 150 }] },
        { from: "autotrader", to: "optipagator", label: "strategy / market targets", labelFr: "stratégie / cibles marché", labelPos: { x: 510, y: 134 }, points: [{ x: 473, y: 150 }, { x: 547, y: 150 }] },
        { from: "digital", to: "optipagator", label: "SoC / PV / load limits", labelFr: "SoC / PV / limites charge", labelPos: { x: 415, y: 204 }, points: [{ x: 220, y: 168 }, { x: 220, y: 204 }, { x: 610, y: 204 }, { x: 610, y: 168 }] },
        { from: "digital", to: "data", label: "state / telemetry", labelFr: "état / télémétrie", labelPos: { x: 275, y: 232 }, points: [{ x: 252, y: 168 }, { x: 252, y: 232 }, { x: 330, y: 232 }, { x: 330, y: 267 }] },
        { from: "data", to: "monitor", label: "KPI models / telemetry", labelFr: "modèles KPI / télémétrie", bidirectional: true, labelPos: { x: 448, y: 266 }, points: [{ x: 409, y: 285 }, { x: 499, y: 285 }] },
        { from: "gateway", to: "data", label: "telemetry / status", labelFr: "télémétrie / état", labelPos: { x: 314, y: 326 }, points: [{ x: 386, y: 349 }, { x: 386, y: 336 }, { x: 300, y: 336 }, { x: 300, y: 303 }] },
        { from: "data", to: "gateway", label: "control / dispatch", labelFr: "contrôle / dispatch", labelPos: { x: 482, y: 326 }, points: [{ x: 360, y: 303 }, { x: 360, y: 326 }, { x: 474, y: 326 }, { x: 474, y: 349 }] },
        { from: "derfleet", to: "gateway", label: "telemetry", labelFr: "télémétrie", labelPos: { x: 344, y: 398 }, points: [{ x: 398, y: 415 }, { x: 398, y: 381 }] },
        { from: "gateway", to: "derfleet", label: "commands / control", labelFr: "commandes / contrôle", labelPos: { x: 552, y: 398 }, points: [{ x: 462, y: 381 }, { x: 462, y: 415 }] }
      ]
    }
  },
  {
    title: "Data → Forecasts → Capability Model → Dispatch",
    titleFr: "Données → Prévisions → Modèle de capacité → Dispatch",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "weather", label: "Market, Weather & Grid Data", labelFr: "Données marché, météo et réseau", sublabel: "weather, price, load, PV and market-signal data", sublabelFr: "météo, prix, charge, PV et signaux marché", x: 300, y: 35, w: 420, h: 50, variant: "muted" },
        { id: "forecast", label: "Forecasting Modules", labelFr: "Modules de prévision", sublabel: "renewable generation, load, prices, capacity and flexibility", sublabelFr: "production renouvelable, charge, prix, capacité et flexibilité", x: 300, y: 105, w: 380, h: 50, variant: "accent" },
        { id: "optimizer", label: "Capability-Based Strategy Evaluation", labelFr: "Évaluation stratégie basée capacité", sublabel: "market participation tested before dispatch", sublabelFr: "participation marché testée avant dispatch", x: 300, y: 178, w: 420, h: 56, variant: "primary" },
        { id: "bid", label: "Auto-Trader + Optimizer", labelFr: "Auto-trader + optimiseur", sublabel: "active and reserve dispatch allocation", sublabelFr: "allocation dispatch active et réserve", x: 300, y: 251, w: 380, h: 50, variant: "accent" },
        { id: "settle", label: "Grid Studies + KPI Models", labelFr: "Études réseau + modèles KPI", sublabel: "market algorithms, forecasts and dispatch strategies", sublabelFr: "algorithmes marché, prévisions et stratégies dispatch", x: 300, y: 321, w: 380, h: 50, variant: "muted" }
      ],
      edges: [
        { from: "weather", to: "forecast", label: "training + live inputs", labelFr: "entrées entraînement + direct" },
        { from: "forecast", to: "optimizer", label: "capability forecasts", labelFr: "prévisions capacité" },
        { from: "optimizer", to: "bid", label: "evaluated strategy", labelFr: "stratégie évaluée" },
        { from: "bid", to: "settle", label: "dispatch results", labelFr: "résultats dispatch" },
        { from: "settle", to: "optimizer", label: "validation feedback", labelFr: "retour validation", dashed: true, points: [{ x: 110, y: 321 }, { x: 50, y: 321 }, { x: 50, y: 178 }, { x: 90, y: 178 }] }
      ]
    }
  },
  {
    title: "Unified VPP Test Environment",
    titleFr: "Environnement de test VPP unifié",
    data: {
      viewBox: "0 0 640 360",
      nodes: [
        { id: "market", label: "Market Algorithms", labelFr: "Algorithmes marché", sublabel: "bid/offer, reserve, regulation and dispatch logic", sublabelFr: "logique offres, réserve, régulation et dispatch", x: 100, y: 80, w: 190, h: 60, variant: "accent" },
        { id: "grid", label: "Capability Forecasts", labelFr: "Prévisions de capacité", sublabel: "available capacity, flexibility, PV, load and BESS SoC", sublabelFr: "capacité, flexibilité, PV, charge et SoC BESS", x: 300, y: 80, w: 190, h: 60, variant: "accent" },
        { id: "optkpi", label: "Dispatch + Grid Validation", labelFr: "Dispatch + validation réseau", sublabel: "active/reactive setpoints, reserves and grid-limit checks", sublabelFr: "consignes P/Q, réserves et vérification limites réseau", x: 500, y: 80, w: 190, h: 60, variant: "accent" },
        { id: "dash", label: "Integrated VPP Test Bench", labelFr: "Banc de test VPP intégré", sublabel: "forecasting, market optimization and dispatch validation", sublabelFr: "prévision, optimisation marché et validation dispatch", x: 300, y: 300, w: 320, h: 80, variant: "primary" }
      ],
      edges: [
        { from: "market", to: "dash", label: "Scenario data", labelFr: "Données de scénario" },
        { from: "grid", to: "dash", label: "Grid telemetry", labelFr: "Télémétrie réseau" },
        { from: "optkpi", to: "dash", label: "validation metrics", labelFr: "mesures de validation" }
      ]
    }
  }
];
