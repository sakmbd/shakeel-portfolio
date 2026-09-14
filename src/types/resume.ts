export interface Identity {
  name: string;
  title: string;
  location: string;
  relocation: string;
  availability: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  employer: string;
  role: string;
  duration: string;
  technologies: string[];
  achievements: string[];
  // True only when the source of truth explicitly identifies this as the
  // active/ongoing role. Never inferred from recency or list position.
  current?: boolean;
}

export interface EducationEntry {
  name: string;
  description: string;
}

export interface EngineeringHighlight {
  stat: string;
  description: string;
  // Must match an existing ExperienceEntry.employer.
  employer: string;
  // Material Symbols name, rendered via <q-icon>.
  icon: string;
}

export interface FeaturedExperienceEntry {
  slug: string;
  title: string;
  domain: string;
  // Must match an existing ExperienceEntry.employer.
  employer: string;
  duration: string;
  // 2-4 bullets — must be verbatim substrings of that employer's achievements.
  highlights: string[];
  // Subset of that employer's technologies array only — never a prose-only mention.
  technologies: string[];
  featured?: boolean;
}

export interface ResumeData {
  identity: Identity;
  summary: string[];
  // The exact technologies named in summary[1], surfaced as an at-a-glance
  // core stack ahead of the full skills breakdown. Keep in sync with that
  // sentence's wording if it ever changes.
  coreStack: string[];
  skills: SkillGroup[];
  highlights: EngineeringHighlight[];
  featuredExperience: FeaturedExperienceEntry[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}
