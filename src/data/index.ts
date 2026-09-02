import type {
  Award,
  Credential,
  Education,
  Experience,
  Language,
  Project,
  SkillGroup,
} from '@src/types'

// --- Experience (most recent first) ----------------------------------------

export const EXPERIENCE: Experience[] = [
  {
    id: 'leanpay',
    company: 'LeanPay',
    position: 'Software Developer — Internship',
    location: 'Lille, France',
    period: 'Apr. 2026 — Aug. 2026',
    description:
      'B2B SaaS accounts-receivable platform for finance departments. Four-person Integration team, tutored by the CTO, pairing daily with a senior developer.',
    highlights: [
      'Integrated 24+ new client configurations into the accounting-data ingestion pipeline — column mapping, date formats, client filters and journal-type rules.',
      'Designed a two-layer automatic diagnosis system for general-ledger import failures: custom error classes carrying structured failure context, and a classifier routing each failure to a dedicated checker module.',
      'Built 6 checker modules in strict TDD with Jest (47 tests), producing two distinct outputs per failure — one for the client, one for the developer.',
      'Argued in code review for subordinating an LLM diagnosis path to the deterministic rules, keeping accounting-data behaviour testable and reproducible.',
    ],
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
    position: 'Software Developer',
    location: 'Remote — USA',
    period: 'Dec. 2024 — Dec. 2025',
    description:
      'JRVS, an AI assistant that lets users switch between multiple LLM providers inside a single interface.',
    highlights: [
      'Built the entire frontend as the dedicated frontend developer, translating Figma designs into production UI alongside the design team.',
      'Implemented Firebase Authentication with two independent auth paths — social/email login and X (Twitter) login.',
      'Built all UI animation with Framer Motion, chosen specifically to keep runtime performance high.',
    ],
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
    position: 'Mobile Developer — Contract',
    location: 'Colombia',
    period: 'Apr. 2025 — Jul. 2025',
    description:
      'Goobi (now Guubi), a live production app mixing a social network with real-time local incident reporting — thefts, accidents, road damage — on a shared map.',
    highlights: [
      'Two-person dev team: built the Flutter frontend for two new growth features while a teammate built the NestJS backend.',
      'Shipped a gamification system to drive new-user adoption and a live map of nearby reported events.',
      'Used Postman to validate each API contract before wiring endpoints into the UI; work tracked in Azure DevOps.',
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Postman', 'Azure DevOps'],
  },
  {
    id: 'met-group',
    company: 'MET GROUP SAS',
    position: 'Engineering Assistant',
    location: 'Colombia',
    period: 'Nov. 2021 — May 2022',
    description:
      'Vehicle telemetry for an automotive-sector client that needed real-time visibility into its fleet.',
    highlights: [
      'Developed a CAN bus interface in MicroPython reading telemetry directly from the vehicle — fuel level, speed, door-open status.',
      'Built the pipeline uploading that data to the cloud for live monitoring.',
      'Designed electronic prototypes and PCB layouts in Altium Designer.',
    ],
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
    position: 'Research Group Member',
    location: 'Pereira, Colombia',
    period: 'Nov. 2019 — Jul. 2023',
    description:
      'University research group working across Industry 4.0, aeronautics and robotics competitions.',
    highlights: [
      'Competed in Aerodesign and human-powered vehicle (VTH) engineering competitions.',
      'Built lab automation solutions for the research group.',
      'Contributed to the VTOL agricultural drone project that became the graduation thesis.',
    ],
    technologies: ['MATLAB', 'C/C++', 'SolidWorks', 'Additive manufacturing'],
  },
]

// --- Projects ---------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    id: 'recycling-map',
    title: 'Recycling Collection Points',
    context: 'Challenge Entreprendre — inter-school innovation challenge',
    period: 'Feb. 2026',
    description:
      'A web app mapping every recycling collection point in the city and the material types each centre accepts or provides. Built in a team of five during a one-week challenge — a prototype running on mocked data, not a production service.',
    highlights: [
      'Won the "Environment" category — 1 of 4 category winners out of ~40 teams.',
      'Teams from IMT Nord Europe, Polytech Lille, Université de Lille and IAE Lille.',
    ],
    technologies: ['TypeScript', 'React', 'Teamwork'],
    category: 'web',
    award: 'Winner — Environment category',
  },
  {
    id: 'ecommerce-microservices',
    title: 'E-Commerce Microservices Architecture',
    context: 'Student project — IMT Nord Europe',
    period: '2026',
    description:
      'A realistic e-commerce backend built as independent services rather than a monolith, with an API gateway in front and a React frontend consuming everything.',
    highlights: [
      'Catalogue, Cart and Tracking services, each with its own database and REST API.',
      'API Gateway built with Spring Cloud Gateway; persistence through Spring Data JPA / Hibernate.',
      'Built in a team of three, with Maven for build and dependency management.',
    ],
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
    title: 'Coverage Path Planning for Autonomous Water Drones',
    context: 'Research project — IMT Nord Europe',
    period: '2026',
    description:
      'A desktop application that plans an optimal coverage path for an autonomous surface vehicle, so it can fully traverse an arbitrary body of water on a cleaning mission.',
    highlights: [
      'Interactive map view built on OpenStreetMap tiles where the user draws the target area vertex by vertex.',
      'C++ path-planning algorithm computing full-coverage routes over the drawn polygon.',
      'CMake build with clang-format and clang-tidy enforced on the codebase.',
    ],
    technologies: ['C++', 'Qt6 / QML', 'CMake', 'Geospatial', 'OpenStreetMap'],
    category: 'embedded',
  },
  {
    id: 'enso-prediction',
    title: 'El Niño / La Niña Prediction',
    context: 'Capstone — Talento Tech Data Analysis bootcamp',
    period: 'Nov. — Dec. 2024',
    description:
      'A team project modelling the duration and intensity of El Niño and La Niña cycles in Colombia from open climate data, built as exploratory analysis plus a linear regression model.',
    highlights: [
      'Real meteorological data from IDEAM — Matecaña Airport station: precipitation, solar radiation and dry-bulb temperature.',
      'Exploratory analysis and visualisation with pandas, numpy, matplotlib and seaborn.',
    ],
    technologies: ['Python', 'scikit-learn', 'pandas', 'numpy', 'seaborn'],
    category: 'data',
  },
  {
    id: 'vtol-drone',
    title: 'VTOL Agricultural Drone',
    context: 'Graduation thesis — Universidad Tecnológica de Pereira',
    period: '2023',
    description:
      'Design and implementation of an unmanned aerial vehicle with a vertical take-off and landing system for the agricultural sector, with an airframe produced using additive manufacturing technologies.',
    technologies: [
      'C/C++',
      'MATLAB',
      'SolidWorks',
      'Additive manufacturing',
      'Control systems',
    ],
    category: 'embedded',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    context: 'Personal project',
    period: '2026',
    description:
      'A hand-built portfolio with no UI framework — a small design-token system, React Router for navigation and a light/dark theme that follows the system preference until you override it.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router'],
    category: 'web',
    githubUrl: 'https://github.com/jmvilla12/portfolio-jose',
  },
]

// --- Education --------------------------------------------------------------

export const EDUCATION: Education[] = [
  {
    id: 'imt',
    institution: 'IMT Nord Europe',
    degree:
      "Master's in Engineering — Intelligent, Secure and Communicating Systems (SISC)",
    location: 'Lille, France',
    period: 'Sept. 2025 — present',
    detail:
      'Artificial intelligence, cybersecurity, cloud computing, embedded systems and advanced network architectures. RNCP 41148, EQF Level 7.',
  },
  {
    id: 'utp',
    institution: 'Universidad Tecnológica de Pereira',
    degree: 'Mechatronics Engineering',
    location: 'Pereira, Colombia',
    period: 'Jan. 2018 — Jul. 2023',
    detail:
      'GPA 4.3/5.0, no failed courses. Thesis on a VTOL agricultural drone built with additive manufacturing.',
  },
  {
    id: 'its',
    institution: 'Instituto Técnico Superior de Pereira',
    degree: 'Technical Baccalaureate in Autotronics (Automotive Mechatronics)',
    location: 'Pereira, Colombia',
    period: '2017',
    detail:
      'Automotive mechanics and vehicle electronics — the earliest layer of the hardware side of the profile.',
  },
]

// --- Certifications ---------------------------------------------------------

export const CREDENTIALS: Credential[] = [
  {
    id: 'stormshield',
    title: 'Stormshield Network Administrator (CSNA)',
    issuer: 'Stormshield',
    year: 'Valid to 2029',
    detail:
      'Scored 86%. Strongest areas: address translation (98%), firewall management (95%), network configuration (93%).',
  },
  {
    id: 'talento-tech',
    title: 'Data Analysis Bootcamp',
    issuer: 'Talento Tech, Colombia',
    year: '2024',
  },
  {
    id: 'fullstack-utp',
    title: 'Junior Full Stack Developer — 176h',
    issuer: 'Universidad Tecnológica de Pereira',
    year: '2024',
  },
  {
    id: 'python-michigan',
    title: 'Python for Everybody Specialization — 76h',
    issuer: 'University of Michigan · Coursera',
    year: '2021',
  },
]

// --- Awards -----------------------------------------------------------------

export const AWARDS: Award[] = [
  {
    id: 'challenge-entreprendre',
    title: 'Winner — Challenge Entreprendre, Environment category',
    year: '2026',
    detail:
      'One-week inter-school innovation challenge, ~40 teams from IMT Nord Europe, Polytech Lille, Université de Lille and IAE Lille. One of four category winners.',
  },
  {
    id: 'colfuturo',
    title: 'Talent Seedbed Program (Pépinière de Talents)',
    year: '2024',
    detail:
      'Selective COLFUTURO program supporting academically excellent students pursuing study abroad.',
  },
  {
    id: 'distinguished',
    title: 'Distinguished Student in Mechatronics Engineering',
    year: '2023',
    detail:
      'Awarded for a 4.3/5.0 graduation GPA with no failed courses across the whole program.',
  },
  {
    id: 'cooeducar',
    title: '"Cooeducar Supporting Higher Education" Scholarship',
    year: '2018 — 2023',
    detail: 'Awarded on academic merit and financial need.',
  },
]

// --- Languages --------------------------------------------------------------

export const LANGUAGES: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C1 — Advanced' },
  { name: 'French', level: 'C1 — Advanced' },
]

// --- Skills -----------------------------------------------------------------

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
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
    title: 'Backend & Data',
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
    title: 'Testing & Practices',
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
    title: 'Security & Networks',
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
    title: 'Embedded & Systems',
    skills: [
      'C',
      'C++',
      'MicroPython',
      'CAN bus',
      'Qt6 / QML',
      'CMake',
      'MATLAB',
      'Simulink',
      'Altium Designer',
    ],
  },
  {
    title: 'Data & Analysis',
    skills: [
      'pandas',
      'numpy',
      'scikit-learn',
      'seaborn',
      'Power BI',
      'R',
      'Excel',
    ],
  },
]
