export type Locale = "it" | "en";

export interface NavContent {
  links: { id: string; label: string }[];
  ctaLabel: string;
}

export interface HeroStat {
  value: string;
  label: string;
  sub: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  valueProp: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
  statsCaption: string;
  scrollHint: string;
}

export interface AboutContent {
  title: string;
  kicker: string;
  paragraphs: string[];
  pullQuote: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillsContent {
  title: string;
  kicker: string;
  categories: SkillCategory[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface EarlierExperienceEntry {
  role: string;
  org: string;
  period: string;
}

export interface ExperienceContent {
  title: string;
  kicker: string;
  entries: ExperienceEntry[];
  earlierLabel: string;
  earlierNote: string;
  earlier: EarlierExperienceEntry[];
  cvCta: string;
}

export type ProjectStatus = "development" | "active" | "paused";

export interface ProjectContent {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  statusNote: string;
  launchedTag?: string;
  problem: string;
  solution: string;
  role: string;
  process: string;
  tools: string[];
  result: string;
  diagramCaption: string;
  demoUrl?: string;
  demoLabel?: string;
  screenshots?: ProjectScreenshot[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface SideProject {
  name: string;
  description: string;
}

export interface ProjectsContent {
  title: string;
  kicker: string;
  intro: string;
  items: ProjectContent[];
  sideProjectsTitle: string;
  sideProjects: SideProject[];
  viewDetailLabel: string;
  backLabel: string;
  detailLabels: {
    problem: string;
    solution: string;
    role: string;
    process: string;
    tools: string;
    result: string;
    status: string;
    screenshots: string;
  };
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
}

export interface EducationContent {
  title: string;
  kicker: string;
  degrees: EducationItem[];
  certificationsTitle: string;
  certifications: EducationItem[];
}

export interface ContactContent {
  title: string;
  kicker: string;
  body: string;
  emailLabel: string;
  linkedinLabel: string;
  discordLabel: string;
  discordNote: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  formNote: string;
  formMessagePlaceholder: string;
}

export interface CvDownloadContent {
  label: string;
  it: string;
  en: string;
}

export interface FooterContent {
  rights: string;
  built: string;
  backToTop: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface Content {
  meta: SiteMeta;
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  education: EducationContent;
  contact: ContactContent;
  cvDownload: CvDownloadContent;
  footer: FooterContent;
  statusBadgeLabels: Record<ProjectStatus, string>;
}
