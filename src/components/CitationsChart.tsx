import { publications } from "../data/publications";
import type { Language } from "../i18n";

const shortTitles: Record<string, string> = {
  "A Distributed VPP-Integrated Co-Optimization Framework for Energy Scheduling, Frequency Regulation, and Voltage Support Using DRO": "DRO Co-Optimization Framework",
  "Robust Resiliency-Oriented Operation of Active Distribution Networks Considering Windstorms": "Resiliency-Oriented ADN Operation",
  "Virtual Power Plant Formation Strategy Based on Stackelberg Game": "VPP Formation via Stackelberg Game",
  "A Stochastic-Robust Aggregation Strategy for VPP Frequency Regulation via Backup Batteries": "VPP Frequency Regulation (Stochastic-Robust)",
  "Utility-Agnostic Virtual Power Plant Operation: Architecture, Challenges, and Essential Features": "Utility-Agnostic VPP Operation",
  "Bridging Theory and Practice: A Comprehensive Review of VPP Technologies": "VPP Technologies Review"
};

const shortTitlesFr: Record<string, string> = {
  "A Distributed VPP-Integrated Co-Optimization Framework for Energy Scheduling, Frequency Regulation, and Voltage Support Using DRO": "Co-optimisation VPP par DRO",
  "Robust Resiliency-Oriented Operation of Active Distribution Networks Considering Windstorms": "Résilience des réseaux actifs",
  "Virtual Power Plant Formation Strategy Based on Stackelberg Game": "Formation VPP par jeu de Stackelberg",
  "A Stochastic-Robust Aggregation Strategy for VPP Frequency Regulation via Backup Batteries": "Régulation de fréquence VPP",
  "Utility-Agnostic Virtual Power Plant Operation: Architecture, Challenges, and Essential Features": "Opération VPP indépendante du service",
  "Bridging Theory and Practice: A Comprehensive Review of VPP Technologies": "Revue des technologies VPP"
};

export default function CitationsChart({ language }: { language: Language }) {
  const maxCitations = Math.max(...publications.map((pub) => pub.citations ?? 0), 1);

  return (
    <div className="citations-chart">
      <h3 className="section-title-small">{language === "fr" ? "Citations par publication" : "Citations by publication"}</h3>
      {publications.map((pub) => {
        const citations = pub.citations ?? 0;
        return (
          <div className="citations-chart-row" key={pub.title}>
            <b>{(language === "fr" ? shortTitlesFr[pub.title] : shortTitles[pub.title]) ?? pub.title}</b>
            <div className="citations-track">
              <i style={{ width: `${(citations / maxCitations) * 100}%` }} />
            </div>
            <span>{citations}</span>
          </div>
        );
      })}
    </div>
  );
}
