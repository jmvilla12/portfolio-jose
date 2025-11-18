// Portfolio project types
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  category: ProjectCategory
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'ai' | 'other'

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  linkedin?: string
  github?: string
  website?: string
}
