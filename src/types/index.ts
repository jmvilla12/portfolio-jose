// Domain types for the portfolio content

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'data' | 'embedded'

export interface Project {
  id: string
  title: string
  context: string
  period: string
  description: string
  highlights?: string[]
  technologies: string[]
  category: ProjectCategory
  award?: string
  githubUrl?: string
  demoUrl?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  /** Human-readable period, e.g. "Apr. 2026 — Aug. 2026" */
  period: string
  current?: boolean
  description: string
  highlights: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  location: string
  period: string
  detail?: string
}

export interface Credential {
  id: string
  title: string
  issuer: string
  year: string
  detail?: string
}

export interface Award {
  id: string
  title: string
  year: string
  detail: string
}

export interface Language {
  name: string
  level: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}
