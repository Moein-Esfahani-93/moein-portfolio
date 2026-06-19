import type { Publication } from "../types";
import { profile } from "./profile";

export const publicationLinks = {
  googleScholar: profile.googleScholar,
  researchGate: profile.researchGate,
  orcid: profile.orcid
};

export const publications: Publication[] = [
  {
    title: "A Distributed VPP-Integrated Co-Optimization Framework for Energy Scheduling, Frequency Regulation, and Voltage Support Using DRO",
    venue: "Applied Energy",
    year: "2024",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://doi.org/10.1016/j.apenergy.2024.122883",
    citations: 72
  },
  {
    title: "Robust Resiliency-Oriented Operation of Active Distribution Networks Considering Windstorms",
    venue: "IEEE Transactions on Power Systems",
    year: "2020",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://scholar.google.com/scholar?q=%22Robust+Resiliency-Oriented+Operation+of+Active+Distribution+Networks+Considering+Windstorms%22",
    citations: 78
  },
  {
    title: "Virtual Power Plant Formation Strategy Based on Stackelberg Game",
    venue: "Applied Energy",
    year: "2025",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://scholar.google.com/scholar?q=%22Virtual+Power+Plant+Formation+Strategy+Based+on+Stackelberg+Game%22",
    citations: 20
  },
  {
    title: "A Stochastic-Robust Aggregation Strategy for VPP Frequency Regulation via Backup Batteries",
    venue: "Journal of Energy Storage",
    year: "2024",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://doi.org/10.1016/j.est.2024.113057",
    citations: 14
  },
  {
    title: "Utility-Agnostic Virtual Power Plant Operation: Architecture, Challenges, and Essential Features",
    venue: "IEEE Power and Energy Magazine",
    year: "2025",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://scholar.google.com/scholar?q=%22Utility-Agnostic+Virtual+Power+Plant+Operation%22"
  },
  {
    title: "Bridging Theory and Practice: A Comprehensive Review of VPP Technologies",
    venue: "Renewable & Sustainable Energy Reviews",
    year: "2025",
    authors: "M. Esfahani et al.",
    type: "Journal Article",
    typeFr: "Article de revue",
    link: "https://scholar.google.com/scholar?q=%22Bridging+Theory+and+Practice%22+%22VPP+Technologies%22",
    citations: 21
  }
];
