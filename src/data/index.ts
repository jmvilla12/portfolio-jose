// Language-independent facts: ids, dates, company names, tech stacks, URLs.
//
// The prose that goes with each entry (positions, descriptions, highlights)
// lives in the dictionaries under `src/i18n/` and is merged in by `useContent`.
// Nothing in this file should ever need translating — if a string here would
// read differently in French, it belongs in the dictionaries instead.

import type {
  AwardBase,
  CredentialBase,
  EducationBase,
  ExperienceBase,
  ProjectBase,
  SkillGroupBase,
  SpokenLanguageId,
} from '@src/types'

// --- Experience (most recent first) ----------------------------------------

export const EXPERIENCE: ExperienceBase[] = [
  {
    id: 'leanpay',
    company: 'LeanPay',
    period: { start: '2026-04', end: '2026-08' },
    technologies: [
      'TypeScript',
      'Node.js',
      'Jest',
      'TDD',
      'PostgreSQL',
      'AWS S3',
      'GitLab CI',
      'Clean Architecture',
    ],
  },
  {
    id: 'alta-ai',
    company: 'Alta AI | BlueSkyAI',
    period: { start: '2024-12', end: '2025-12' },
    technologies: [
      'React',
      'TypeScript',
      'Framer Motion',
      'Firebase Auth',
      'CSS',
      'Figma',
    ],
  },
  {
    id: 'cidt-cinnov',
    company: 'CIDT — Universidad Tecnológica de Pereira · client Cinnov S.A.S.',
    period: { start: '2025-04', end: '2025-07' },
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Postman', 'Azure DevOps'],
  },
  {
    id: 'met-group',
    company: 'MET GROUP SAS',
    period: { start: '2021-11', end: '2022-05' },
    technologies: [
      'MicroPython',
      'C',
      'CAN bus',
      'Altium Designer',
      'IoT',
      'Cloud',
    ],
  },
  {
    id: 'mecabot',
    company: 'MECABOT Aeronautics Research Group — UTP',
    period: { start: '2019-11', end: '2023-07' },
    technologies: ['MATLAB', 'C/C++', 'SolidWorks', 'Additive manufacturing'],
  },
]

// --- Projects ---------------------------------------------------------------

export const PROJECTS: ProjectBase[] = [
  {
    id: 'recycling-map',
    period: { start: '2026-02' },
    technologies: ['TypeScript', 'React', 'Teamwork'],
    category: 'web',
  },
  {
    id: 'ecommerce-microservices',
    period: { start: '2026' },
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud Gateway',
      'JPA / Hibernate',
      'React',
      'Tailwind CSS',
      'Maven',
    ],
    category: 'backend',
  },
  {
    id: 'usv-coverage',
    period: { start: '2026' },
    technologies: ['C++', 'Qt6 / QML', 'CMake', 'Geospatial', 'OpenStreetMap'],
    category: 'embedded',
  },
  {
    id: 'enso-prediction',
    period: { start: '2024-11', end: '2024-12' },
    technologies: ['Python', 'scikit-learn', 'pandas', 'numpy', 'seaborn'],
    category: 'data',
  },
  {
    id: 'vtol-drone',
    period: { start: '2023' },
    technologies: [
      'Autodesk Inventor',
      'SolidWorks',
      'ANSYS (CFD)',
      'Pixhawk 2.4.8',
      'FDM 3D printing',
      'Control systems',
    ],
    category: 'embedded',
    publicationUrl:
      'https://repositorio.utp.edu.co/entities/publication/db6257f3-2388-45c5-9dc9-9cbf145f4136',
  },
  {
    id: 'image-ocr',
    // TODO(jose): confirm the year — the background file records the grade
    // (4.5) but not when the elective was taken. Engineering cycle, so 2021-23.
    period: { start: '2022' },
    technologies: ['MATLAB', 'OpenCV', 'Image processing', 'OCR'],
    category: 'data',
  },
  {
    id: 'portfolio',
    period: { start: '2026' },
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router'],
    category: 'web',
    githubUrl: 'https://github.com/jmvilla12/portfolio-jose',
  },
]

// --- Education --------------------------------------------------------------

export const EDUCATION: EducationBase[] = [
  {
    id: 'imt',
    institution: 'IMT Nord Europe',
    period: { start: '2025-09', ongoing: true },
  },
  {
    id: 'utp',
    institution: 'Universidad Tecnológica de Pereira',
    period: { start: '2018-01', end: '2023-07' },
  },
  {
    id: 'its',
    institution: 'Instituto Técnico Superior de Pereira',
    period: { start: '2017' },
  },
]

// --- Certifications ---------------------------------------------------------

export const CREDENTIALS: CredentialBase[] = [
  { id: 'stormshield' },
  { id: 'talento-tech' },
  { id: 'fullstack-utp' },
  { id: 'python-michigan' },
]

// --- Awards -----------------------------------------------------------------

export const AWARDS: AwardBase[] = [
  { id: 'challenge-entreprendre', period: { start: '2026' } },
  { id: 'colfuturo', period: { start: '2024' } },
  { id: 'distinguished', period: { start: '2023' } },
  { id: 'cooeducar', period: { start: '2018', end: '2023' } },
]

// --- Spoken languages -------------------------------------------------------

/** Display order; the names and levels themselves are translated. */
export const SPOKEN_LANGUAGES: SpokenLanguageId[] = ['es', 'en', 'fr']

// --- Skills -----------------------------------------------------------------

export const SKILL_GROUPS: SkillGroupBase[] = [
  {
    id: 'frontend',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Vue',
      'Flutter',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'CSS',
      'Figma',
    ],
  },
  {
    id: 'backend-data',
    skills: [
      'Node.js',
      'NestJS',
      'Java',
      'Spring Boot',
      'Python',
      'Django',
      'PostgreSQL',
      'SQL',
      'Firebase',
      'AWS S3',
      'Docker',
      'Microservices',
    ],
  },
  {
    id: 'testing',
    skills: [
      'TDD',
      'Jest',
      'Clean Architecture',
      'Code review',
      'Conventional Commits',
      'GitLab CI',
      'Scrum',
      'Git',
    ],
  },
  {
    id: 'security',
    skills: [
      'Stormshield CSNA',
      'Firewall management',
      'VPN / SSL',
      'NAT',
      'Linux',
      'Bash',
    ],
  },
  {
    id: 'embedded',
    skills: [
      'C',
      'C++',
      'MicroPython',
      'CAN bus',
      'Qt6 / QML',
      'CMake',
      'MATLAB',
      'Simulink',
      'LabVIEW',
      'PID control',
      'Pixhawk',
      'Microcontrollers',
    ],
  },
  {
    id: 'cad-simulation',
    skills: [
      'SolidWorks',
      'Autodesk Inventor',
      'Fusion 360',
      'AutoCAD',
      'ANSYS (CFD)',
      'FEA',
      'Generative design',
      'Altium Designer',
      'FDM 3D printing',
    ],
  },
  {
    id: 'data',
    skills: [
      'pandas',
      'numpy',
      'scikit-learn',
      'seaborn',
      'OpenCV',
      'Power BI',
      'R',
      'SQL',
    ],
  },
]
