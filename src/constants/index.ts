// Portfolio constants and configuration
export const APP_CONFIG = {
  name: 'Jose Villa Portfolio',
  tagline: 'Full Stack Developer & Software Engineer',
  description: 'Passionate developer creating innovative digital solutions',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/jmvilla12',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: 'your.email@example.com',
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
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
