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
      role: "MICROGRID CONTROLS VALIDATION ENGINEER - CHIL/HIL & RTS INTERFACES\nVPP/DER DISPATCH, EMS VALIDATION & POWER-SYSTEM OPTIMIZATION CONTEXT",
      goTo: "Go to"
    },
    footer: {
      portfolio: "ENGINEERING PORTFOLIO"
    }
  },
  fr: {
    header: {
      languageAria: "Selection de la langue",
      navAria: "Navigation du site",
      role: "INGENIEUR VALIDATION CONTROLE MICROGRID - CHIL/HIL ET INTERFACES RTS\nCONTEXTE DISPATCH VPP/DER, VALIDATION EMS ET OPTIMISATION RESEAU",
      goTo: "Aller a"
    },
    footer: {
      portfolio: "PORTFOLIO D'INGENIERIE"
    }
  }
};
