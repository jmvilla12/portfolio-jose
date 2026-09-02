// Portfolio configuration

export const APP_CONFIG = {
  name: 'José Villa-Romero',
  shortName: 'JVR',
  firstName: 'José',
  lastName: 'Villa-Romero',
  role: 'Software Engineer',
  roleAlt: 'Mechatronics background',
  location: 'Lille, Hauts-de-France',
  education: 'M2 Intelligent, Secure & Communicating Systems — IMT Nord Europe',
  tagline:
    'Software engineer finishing an M2 in intelligent, secure and communicating systems at IMT Nord Europe. I build data-ingestion backends, product frontends and embedded systems — most recently at LeanPay, a B2B fintech in Lille.',
  availability: {
    status: 'Open to alternance — Sept. 2026',
    detail:
      'Looking for a 10–12 month alternance (apprenticeship) starting September 2026. Rhythm from September to February: Monday–Wednesday at school, Thursday–Friday in company; full-time in company from March 2027.',
  },
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/jmvilla12',
  linkedin: 'https://linkedin.com/in/jose-manuel-villa-romero',
  email: 'josemvilla12@gmail.com',
  phone: '+33 7 43 54 90 42',
  phoneHref: 'tel:+33743549042',
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
  cv: '/cv',
} as const

export const NAV_ITEMS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'About', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact },
] as const

export const CV_CONFIG = {
  path: '/CV_Jose_FR.pdf',
  downloadName: 'CV_Jose_Villa_Romero.pdf',
} as const

// Figures shown in the hero strip — keep in sync with the data files.
export const STATS = [
  { value: '2+', label: 'Years building software' },
  { value: '5', label: 'Languages shipped to prod' },
  { value: '3', label: 'Spoken languages (ES/EN/FR)' },
  { value: 'Sept. 2026', label: 'Available for alternance' },
] as const
