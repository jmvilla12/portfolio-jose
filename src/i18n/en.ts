// English — the source of truth for the SHAPE of every dictionary.
//
// `Dictionary` is derived from this object, so every other locale must match it
// key for key or the build fails. Deliberately no `as const`: the keys must
// widen to `string`, otherwise a translation could only ever repeat the
// English literal.

import type {
  AwardCopy,
  AwardId,
  CredentialCopy,
  CredentialId,
  EducationCopy,
  EducationId,
  ExperienceCopy,
  ExperienceId,
  ProjectCopy,
  ProjectId,
  SkillGroupId,
  SpokenLanguage,
  SpokenLanguageId,
} from '@src/types'

export const en = {
  // --- Chrome -------------------------------------------------------------
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  header: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  actions: {
    downloadCV: 'Download CV',
    viewCV: 'View CV',
    seeProjects: 'See projects',
    fullBackground: 'Full background',
    getInTouch: 'Get in touch',
    viewSource: 'View source',
    backToHome: 'Back to home',
    back: 'Back',
    open: 'Open',
    download: 'Download',
    openInNewTab: 'Open in new tab',
    downloadPDF: 'Download PDF',
    readPublication: 'Read the thesis',
  },

  date: {
    /** Rendered in place of an end date for anything still running. */
    present: 'present',
  },

  // --- Profile ------------------------------------------------------------
  profile: {
    role: 'Software Engineer',
    roleAlt: 'Mechatronics background',
    location: 'Lille, Hauts-de-France',
    city: 'Lille',
    region: 'Hauts-de-France',
    tagline:
      'Software engineer finishing an M2 in intelligent, secure and communicating systems at IMT Nord Europe. I build data-ingestion backends, product frontends and embedded systems — most recently at LeanPay, a B2B fintech in Lille.',
    availabilityStatus: 'Open to an internship — Feb. 2027',
    availabilityDetail:
      'Looking for a six-month engineering internship starting 15 February 2027, in France — Lille preferred — or elsewhere in the EU. IMT Nord Europe requires a minimum of 24 weeks, so the window runs February to August 2027. What I want after it is a permanent role in Europe.',
  },

  stats: [
    { value: '2+', label: 'Years building software' },
    { value: '5', label: 'Languages shipped to prod' },
    { value: '3', label: 'Spoken languages (ES/EN/FR)' },
    { value: 'Feb. 2027', label: 'Available for an internship' },
  ],

  // --- Home ---------------------------------------------------------------
  home: {
    experienceEyebrow: '01 — Experience',
    experienceTitle: "Where I've worked",
    experienceLead:
      'From accounting-data pipelines in a French fintech to CAN bus telemetry on real vehicles.',
    skillsEyebrow: '02 — Toolkit',
    skillsTitle: 'What I build with',
    skillsLead:
      'A software core with a genuine hardware background underneath — the two reinforce each other rather than compete.',
    ctaTitle: 'Looking for an intern?',
  },

  // --- About --------------------------------------------------------------
  about: {
    eyebrow: 'About',
    title: 'Software engineer with a mechatronics past',
    lead: "I started in mechatronics in Colombia — engines, PCBs, CAN buses — and moved into software without leaving the hardware behind. Today I'm finishing an M2 in intelligent, secure and communicating systems at IMT Nord Europe, in Lille.",
    experienceEyebrow: '01 — Experience',
    experienceTitle: 'Full history',
    educationEyebrow: '02 — Education',
    educationTitle: 'Studies',
    credentialsEyebrow: '03 — Certifications',
    credentialsTitle: 'Formal training',
    awardsEyebrow: '04 — Recognition',
    awardsTitle: 'Awards',
    talksEyebrow: '05 — Talks',
    talksTitle: 'Talks and juries',
    talkSpeaker:
      'Speaker — XIII Statal Meeting of Research Groups of Risaralda',
    talkJudge: 'Judge — Energy Science Fair, Empresa de Energía de Pereira',
    languagesEyebrow: '06 — Languages',
    languagesTitle: 'Spoken',
    languagesLead: 'Working daily in French and English, thinking in Spanish.',
    languagesAlsoKey: 'Also',
    languagesAlsoValue:
      'Portuguese, Italian and German at a beginner level (A1–A2).',
    outsideEyebrow: '07 — Outside work',
    outsideTitle: 'The rest',
    volunteeringKey: 'Volunteering',
    volunteeringTitle: 'AeroKiddo (2021, 2024)',
    volunteeringValue:
      'Teaching aeronautics to children aged 7–12 through the STEAM methodology, with the UTP aeronautics research group.',
    communityKey: 'Community',
    communityTitle: 'Garde Romaine (2016–2024)',
    communityValue:
      'A social project run by students and graduates of the Instituto Técnico Superior in Pereira.',
    offScreenKey: 'Off-screen',
    offScreenValue:
      'Strength training, football, handball, cooking, partner dancing and picking up new languages.',
    basedInKey: 'Based in',
  },

  // --- Projects -----------------------------------------------------------
  projectsPage: {
    eyebrow: 'Projects',
    title: "Things I've built",
    lead: 'Academic, competition and personal work. Each one says plainly what it actually is — a prototype stays a prototype.',
    filters: {
      all: 'All',
      web: 'Web',
      backend: 'Backend',
      embedded: 'Embedded',
      data: 'Data',
      mobile: 'Mobile',
    },
  },

  // --- Contact ------------------------------------------------------------
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    lead: 'The fastest way to reach me is email. I read everything and reply to anything concrete — internship offers, freelance work, or a question about something on this site.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    availabilityEyebrow: 'Availability',
    availabilityTitle: "What I'm looking for",
    contractKey: 'Contract',
    contractTitle: 'Internship — six months minimum',
    contractValue:
      'Convention de stage through IMT Nord Europe, which requires at least 24 weeks. A shorter placement unfortunately does not qualify.',
    datesKey: 'Dates',
    datesValue:
      'Available from 15 February 2027; the window runs to August 2027.',
    tracksKey: 'Tracks',
    tracksValue:
      'Fullstack, backend, frontend, data, embedded systems and control — and pre-sales or solution engineering, where my school certifies the commercial side alongside the engineering. The hardware background is real, not decorative.',
    locationKey: 'Location',
    locationValue:
      'open to the rest of France, to the EU, and to remote roles.',
    afterKey: 'After',
    afterValue: 'A permanent role in Europe — ideally with the same team.',
    languagesKey: 'Languages',
    languagesValue: 'French and English at C1, Spanish native.',
  },

  // --- CV -----------------------------------------------------------------
  cv: {
    title: 'Curriculum Vitae',
    frameLabel: 'Curriculum Vitae',
    fallback:
      "Your browser can't display PDFs inline. Open the CV in a new tab or download it instead.",
    documentLanguage: 'Document language',
  },

  // --- 404 ----------------------------------------------------------------
  notFound: {
    eyebrow: 'Error',
    title: "This page doesn't exist",
    lead: 'The link may be out of date, or the page may have moved.',
  },

  // --- Footer -------------------------------------------------------------
  footer: {
    madeWith: 'Made with',
    madeBy: 'by',
    love: 'love',
    builtWith: 'React, TypeScript and hand-written CSS.',
  },

  // --- Content ------------------------------------------------------------
  experience: {
    leanpay: {
      position: 'Software Developer — Internship',
      location: 'Lille, France',
      description:
        'B2B SaaS accounts-receivable platform for finance departments. Four-person Integration team, tutored by the CTO, pairing daily with a senior developer.',
      highlights: [
        'Integrated 24+ new client configurations into the accounting-data ingestion pipeline — column mapping, date formats, client filters and journal-type rules.',
        'Designed a two-layer automatic diagnosis system for general-ledger import failures: custom error classes carrying structured failure context, and a classifier routing each failure to a dedicated checker module.',
        'Built 6 checker modules in strict TDD with Jest (47 tests), producing two distinct outputs per failure — one for the client, one for the developer.',
        'Argued in code review for subordinating an LLM diagnosis path to the deterministic rules, keeping accounting-data behaviour testable and reproducible.',
      ],
    },
    'alta-ai': {
      position: 'Software Developer',
      location: 'Remote — USA',
      description:
        'JRVS, an AI assistant that lets users switch between multiple LLM providers inside a single interface.',
      highlights: [
        'Built the entire frontend as the dedicated frontend developer, translating Figma designs into production UI alongside the design team.',
        'Implemented Firebase Authentication with two independent auth paths — social/email login and X (Twitter) login.',
        'Built all UI animation with Framer Motion, chosen specifically to keep runtime performance high.',
      ],
    },
    'cidt-cinnov': {
      position: 'Mobile Developer — Contract',
      location: 'Colombia',
      description:
        'Goobi (now Guubi), a live production app mixing a social network with real-time local incident reporting — thefts, accidents, road damage — on a shared map.',
      highlights: [
        'Two-person dev team: built the Flutter frontend for two new growth features while a teammate built the NestJS backend.',
        'Shipped a gamification system to drive new-user adoption and a live map of nearby reported events.',
        'Used Postman to validate each API contract before wiring endpoints into the UI; work tracked in Azure DevOps.',
      ],
    },
    'met-group': {
      position: 'Engineering Assistant',
      location: 'Colombia',
      description:
        'Vehicle telemetry for an automotive-sector client that needed real-time visibility into its fleet.',
      highlights: [
        'Developed a CAN bus interface in MicroPython reading telemetry directly from the vehicle — fuel level, speed, door-open status.',
        'Built the pipeline uploading that data to the cloud for live monitoring.',
        'Designed electronic prototypes and PCB layouts in Altium Designer.',
      ],
    },
    mecabot: {
      position: 'Research Group Member',
      location: 'Pereira, Colombia',
      description:
        'University research group working across Industry 4.0, aeronautics and robotics competitions.',
      highlights: [
        'Competed in Aerodesign and human-powered vehicle (VTH) engineering competitions.',
        'Built lab automation solutions for the research group.',
        'Contributed to the VTOL agricultural drone project that became the graduation thesis.',
      ],
    },
  } satisfies Record<ExperienceId, ExperienceCopy>,

  projects: {
    'recycling-map': {
      title: 'Recycling Collection Points',
      context: 'Challenge Entreprendre — inter-school innovation challenge',
      description:
        'A web app mapping every recycling collection point in the city and the material types each centre accepts or provides. Built in a team of five during a one-week challenge — a prototype running on mocked data, not a production service.',
      highlights: [
        'Won the "Environment" category — 1 of 4 category winners out of ~40 teams.',
        'Teams from IMT Nord Europe, Polytech Lille, Université de Lille and IAE Lille.',
      ],
      award: 'Winner — Environment category',
    },
    'ecommerce-microservices': {
      title: 'E-Commerce Microservices Architecture',
      context: 'Student project — IMT Nord Europe',
      description:
        'A realistic e-commerce backend built as independent services rather than a monolith, with an API gateway in front and a React frontend consuming everything.',
      highlights: [
        'Catalogue, Cart and Tracking services, each with its own database and REST API.',
        'API Gateway built with Spring Cloud Gateway; persistence through Spring Data JPA / Hibernate.',
        'Built in a team of three, with Maven for build and dependency management.',
      ],
    },
    'usv-coverage': {
      title: 'Coverage Path Planning for Autonomous Water Drones',
      context: 'Research project — IMT Nord Europe',
      description:
        'A desktop application that plans an optimal coverage path for an autonomous surface vehicle, so it can fully traverse an arbitrary body of water on a cleaning mission.',
      highlights: [
        'Interactive map view built on OpenStreetMap tiles where the user draws the target area vertex by vertex.',
        'C++ path-planning algorithm computing full-coverage routes over the drawn polygon.',
        'CMake build with clang-format and clang-tidy enforced on the codebase.',
      ],
    },
    'enso-prediction': {
      title: 'El Niño / La Niña Prediction',
      context: 'Capstone — Talento Tech Data Analysis bootcamp',
      description:
        'A team project modelling the duration and intensity of El Niño and La Niña cycles in Colombia from open climate data, built as exploratory analysis plus a linear regression model.',
      highlights: [
        'Real meteorological data from IDEAM — Matecaña Airport station: precipitation, solar radiation and dry-bulb temperature.',
        'Exploratory analysis and visualisation with pandas, numpy, matplotlib and seaborn.',
      ],
    },
    'vtol-drone': {
      title: 'VTOL Agricultural Drone',
      context: 'Engineering thesis — Universidad Tecnológica de Pereira',
      description:
        'A fixed-wing drone that takes off and lands vertically, so it can survey farmland in mountainous Colombian terrain where runway-dependent aircraft are useless. Designed, manufactured, integrated and bench-tested end to end, and published open access.',
      highlights: [
        'Airframe designed in Autodesk Inventor around a NACA 0012 profile and a trapezoidal wing, then 3D-printed in PLA and reinforced with aluminium profiles.',
        'Integrated a Pixhawk 2.4.8 open-source autopilot and the full electrical stack; bench-tested control surfaces, brushless motors and flight modes.',
        'Grew out of an earlier iteration designed in SolidWorks and validated with CFD analysis in ANSYS.',
      ],
    },
    'image-ocr': {
      title: 'Character Recognition on Distorted Images',
      context:
        'Digital image processing elective — Universidad Tecnológica de Pereira',
      description:
        'A full image-processing and optical character recognition pipeline in MATLAB, reading distorted arithmetic digits from the course dataset and computing the result. This is where machine-learning principles first entered the profile.',
      highlights: [
        'Built the whole pipeline as coursework — preprocessing, segmentation and character recognition.',
        'Self-taught OpenCV alongside the syllabus, re-implementing the same techniques outside the course.',
      ],
    },
    portfolio: {
      title: 'This Portfolio',
      context: 'Personal project',
      description:
        'A hand-built portfolio with no UI framework — a small design-token system, React Router for navigation and a light/dark theme that follows the system preference until you override it.',
    },
  } satisfies Record<ProjectId, ProjectCopy>,

  education: {
    imt: {
      degree:
        "Master's in Engineering — Intelligent, Secure and Communicating Systems (SISC)",
      location: 'Lille, France',
      detail:
        'Artificial intelligence, cybersecurity, cloud computing, embedded systems and advanced network architectures. RNCP 41148, EQF Level 7. Managerial track: developing the commercial side of engineering projects.',
    },
    utp: {
      degree: 'Mechatronics Engineering',
      location: 'Pereira, Colombia',
      detail:
        'A two-stage degree with two separately defended degree projects. GPA 4.3/5.0, no failed courses. Final thesis on a VTOL agricultural drone built with additive manufacturing.',
    },
    its: {
      degree:
        'Technical Baccalaureate in Autotronics (Automotive Mechatronics)',
      location: 'Pereira, Colombia',
      detail:
        'Automotive mechanics and vehicle electronics — the earliest layer of the hardware side of the profile.',
    },
  } satisfies Record<EducationId, EducationCopy>,

  credentials: {
    stormshield: {
      title: 'Stormshield Network Administrator (CSNA)',
      issuer: 'Stormshield',
      year: 'Valid to 2029',
      detail:
        'Scored 86%. Strongest areas: address translation (98%), firewall management (95%), network configuration (93%).',
    },
    'talento-tech': {
      title: 'Data Analysis Bootcamp',
      issuer: 'Talento Tech, Colombia',
      year: '2024',
    },
    'fullstack-utp': {
      title: 'Junior Full Stack Developer — 176h',
      issuer: 'Universidad Tecnológica de Pereira',
      year: '2024',
    },
    'python-michigan': {
      title: 'Python for Everybody Specialization — 76h',
      issuer: 'University of Michigan · Coursera',
      year: '2021',
    },
  } satisfies Record<CredentialId, CredentialCopy>,

  awards: {
    'challenge-entreprendre': {
      title: 'Winner — Challenge Entreprendre, Environment category',
      detail:
        'One-week inter-school innovation challenge, ~40 teams from IMT Nord Europe, Polytech Lille, Université de Lille and IAE Lille. One of four category winners.',
    },
    colfuturo: {
      title: 'Talent Seedbed Program (Pépinière de Talents)',
      detail:
        'Selective COLFUTURO program supporting academically excellent students pursuing study abroad.',
    },
    distinguished: {
      title: 'Distinguished Student in Mechatronics Engineering',
      detail:
        'Awarded for a 4.3/5.0 graduation GPA with no failed courses across the whole program.',
    },
    cooeducar: {
      title: '"Cooeducar Supporting Higher Education" Scholarship',
      detail: 'Awarded on academic merit and financial need.',
    },
  } satisfies Record<AwardId, AwardCopy>,

  skillGroups: {
    frontend: 'Frontend',
    'backend-data': 'Backend & Data',
    testing: 'Testing & Practices',
    security: 'Security & Networks',
    embedded: 'Embedded & Systems',
    'cad-simulation': 'CAD & Simulation',
    data: 'Data & Analysis',
  } satisfies Record<SkillGroupId, string>,

  spokenLanguages: {
    es: { name: 'Spanish', level: 'Native' },
    en: { name: 'English', level: 'C1 — Advanced' },
    fr: { name: 'French', level: 'C1 — Advanced' },
  } satisfies Record<SpokenLanguageId, SpokenLanguage>,
}

/**
 * The shape every locale must satisfy. Because it is derived from `en`, adding
 * a key here without translating it in `fr.ts` is a compile error, not a silent
 * fallback to English.
 */
export type Dictionary = typeof en
