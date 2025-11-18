// Portfolio constants and configuration
export const APP_CONFIG = {
  name: 'José Villa Romero Portfolio',
  tagline:
    'Développeur Logiciel / Élève Ingénieur Systèmes Intelligents, Securises et Communicants',
  description:
    "À la recherche d'un stage de 16 semaines à partir du 13 avril 2026 dans les domaines du développement logiciel, de l'intelligence artificielle ou des technologies innovantes",
  fullName: 'José Villa Romero',
  location: 'Lille, Hauts de France',
  experience: 'Développeur chez AltaAI | BlueSkyAI',
  education: 'Ingenieur SISC (Bac+4) - IMT Nord Europe',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/jmvilla12',
  linkedin: 'https://linkedin.com/in/jose-manuel-villa-romero',
  email: 'josemvilla12@gmail.com',
  portfolio: 'https://jmvilla12-portfolio.netlify.app',
  phone: '+33 7 43 54 90 42',
} as const

export const ROUTES = {
  home: '/',
  about: '/a-propos',
  projects: '/projets',
  experience: '/experience',
  contact: '/contact',
} as const

export const PROJECT_CATEGORIES = [
  'web',
  'mobile',
  'desktop',
  'ai',
  'other',
] as const

// Technical Skills from CV
export const TECHNICAL_SKILLS = {
  languages: [
    'React',
    'TypeScript',
    'Flutter',
    'Vue',
    'NodeJS',
    'NestJS',
    'Python',
    'Django',
    'SQL',
    'MATLAB',
    'C/C++',
    'R',
  ],
  tools: ['Figma', 'UI/UX', 'Git/GitHub', 'SCRUM', 'PowerBI'],
  domains: [
    'Intelligence Artificielle',
    'Cybersecurite',
    'Systemes Embarques',
    'Reseaux Avances',
    'Industrie 4.0',
  ],
} as const
