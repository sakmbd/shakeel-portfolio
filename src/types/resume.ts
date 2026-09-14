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

export interface ResumeData {
  identity: Identity;
  summary: string[];
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}
