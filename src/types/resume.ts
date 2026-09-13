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
