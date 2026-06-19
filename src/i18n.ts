export type Language = "en" | "fr";

export type LocalizedString = {
  en: string;
  fr: string;
};

export const languageLabels: Record<Language, string> = {
  en: "EN",
  fr: "FR"
};

export function t(language: Language, en: string, fr?: string) {
  return language === "fr" && fr ? fr : en;
}

export const siteCopy: Record<Language, { header: { languageAria: string; navAria: string; role: string; goTo: string }; footer: { portfolio: string } }> = {
  en: {
    header: {
      languageAria: "Language selection",
      navAria: "Page navigation",
      role: "POWER SYSTEMS ENGINEER - DER COORDINATION & VPP DISPATCH\nMICROGRID EMS · CONTROL AUTOMATION · RTS INTERFACES",
      goTo: "Go to"
    },
    footer: {
      portfolio: "ENGINEERING PORTFOLIO"
    }
  },
  fr: {
    header: {
      languageAria: "Sélection de la langue",
      navAria: "Navigation du site",
      role: "INGÉNIEUR RÉSEAUX ÉLECTRIQUES - COORDINATION DER ET DISPATCH VPP\nEMS MICROGRID · AUTOMATISATION · INTERFACES RTS",
      goTo: "Aller à"
    },
    footer: {
      portfolio: "PORTFOLIO D'INGÉNIERIE"
    }
  }
};
