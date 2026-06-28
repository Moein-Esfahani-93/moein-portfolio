export type PageId = "home" | "projects" | "skills" | "academic" | "publications" | "contact";

export type PageLink = { id: PageId; label: string };

export type Profile = {
  name: string;
  role: string;
  email: string;
  phone?: string;
  alternateEmail?: string;
  linkedin: string;
  googleScholar?: string;
  researchGate?: string;
  orcid?: string;
  cvVppEms?: string;
  cvVppEmsFr?: string;
  cvControlAutomation?: string;
  cvControlAutomationFr?: string;
};

export type Project = {
  id: string;
  number: string;
  domain: string;
  domainFr?: string;
  title: string;
  titleFr?: string;
  short: string;
  shortFr?: string;
  problem: string;
  problemFr?: string;
  contribution: string;
  contributionFr?: string;
  methods: string[];
  methodsFr?: string[];
  visualSlots: string[];
  visualSlotsFr?: string[];
  tags: string[];
};

export type SkillBlock = {
  title: string;
  titleFr?: string;
  text: string;
  textFr?: string;
  keywords: string[];
  keywordsFr?: string[];
  track: "software" | "market" | "automation" | "research";
};

export type AcademicItem = {
  title: string;
  titleFr?: string;
  institution: string;
  institutionFr?: string;
  period: string;
  periodFr?: string;
  startYear: number;
  endYear: number | "present";
  summary: string;
  summaryFr?: string;
  highlights: string[];
  highlightsFr?: string[];
};

export type Publication = { title: string; venue: string; year: string; authors: string; type: string; typeFr?: string; link: string; citations?: number };
