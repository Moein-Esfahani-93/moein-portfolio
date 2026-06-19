import type { Language } from "../i18n";
import type { PageId } from "../types";

export const timelineItems: Array<{ id: PageId; icon: string; label: Record<Language, string> }> = [
  { id: "home", icon: "home", label: { en: "Home", fr: "Accueil" } },
  { id: "projects", icon: "project", label: { en: "Projects", fr: "Projets" } },
  { id: "academic", icon: "cap", label: { en: "Experience", fr: "Parcours" } },
  { id: "publications", icon: "article", label: { en: "Pubs", fr: "Publis" } },
  { id: "skills", icon: "cog", label: { en: "Skills", fr: "Expertise" } },
  { id: "contact", icon: "mail", label: { en: "Contact", fr: "Contact" } }
];
