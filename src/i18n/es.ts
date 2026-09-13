// Spanish. Typed against `Dictionary`, so a missing or misspelled key fails
// `tsc -b` rather than silently falling back to English.

import type { Dictionary } from './en'

export const es: Dictionary = {
  // --- Chrome -------------------------------------------------------------
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },

  header: {
    switchToLight: 'Cambiar al tema claro',
    switchToDark: 'Cambiar al tema oscuro',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    language: 'Idioma',
  },

  actions: {
    downloadCV: 'Descargar CV',
    viewCV: 'Ver CV',
    seeProjects: 'Ver proyectos',
    fullBackground: 'Trayectoria completa',
    getInTouch: 'Contáctame',
    viewSource: 'Ver el código',
    backToHome: 'Volver al inicio',
    back: 'Volver',
    open: 'Abrir',
    download: 'Descargar',
    openInNewTab: 'Abrir en una pestaña nueva',
    downloadPDF: 'Descargar el PDF',
    readPublication: 'Leer la tesis',
  },

  date: {
    present: 'actualidad',
  },

  // --- Profile ------------------------------------------------------------
  profile: {
    role: 'Ingeniero de software',
    roleAlt: 'Base en mecatrónica',
    location: 'Lille, Hauts-de-France',
    city: 'Lille',
    region: 'Hauts-de-France',
    tagline:
      'Ingeniero de software terminando un M2 en sistemas inteligentes, seguros y comunicantes en IMT Nord Europe. Construyo backends de ingesta de datos, frontends de producto y sistemas embebidos — lo más reciente en LeanPay, una fintech B2B de Lille.',
    availabilityStatus: 'Disponible para prácticas — feb. 2027',
    availabilityDetail:
      'Busco unas prácticas de ingeniería de seis meses a partir del 15 de febrero de 2027, en Francia —preferiblemente en Lille— o en otro país de la UE. IMT Nord Europe exige un mínimo de 24 semanas, así que la ventana va de febrero a agosto de 2027. Después de eso busco un puesto permanente en Europa.',
  },

  stats: [
    { value: '2+', label: 'Años desarrollando software' },
    { value: '5', label: 'Lenguajes llevados a producción' },
    { value: '3', label: 'Idiomas hablados (ES/EN/FR)' },
    { value: 'Feb. 2027', label: 'Disponible para prácticas' },
  ],

  // --- Home ---------------------------------------------------------------
  home: {
    experienceEyebrow: '01 — Experiencia',
    experienceTitle: 'Dónde he trabajado',
    experienceLead:
      'Desde pipelines de datos contables en una fintech francesa hasta telemetría por bus CAN en vehículos reales.',
    skillsEyebrow: '02 — Herramientas',
    skillsTitle: 'Con qué construyo',
    skillsLead:
      'Un núcleo de software con una base real de hardware debajo — se refuerzan en lugar de competir.',
    ctaTitle: '¿Buscas un estudiante en prácticas?',
  },

  // --- About --------------------------------------------------------------
  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniero de software con pasado en mecatrónica',
    lead: 'Empecé en mecatrónica en Colombia —motores, circuitos impresos, buses CAN— y pasé al software sin dejar atrás el hardware. Hoy termino un M2 en sistemas inteligentes, seguros y comunicantes en IMT Nord Europe, en Lille.',
    experienceEyebrow: '01 — Experiencia',
    experienceTitle: 'Trayectoria completa',
    educationEyebrow: '02 — Formación',
    educationTitle: 'Estudios',
    credentialsEyebrow: '03 — Certificaciones',
    credentialsTitle: 'Formación certificada',
    awardsEyebrow: '04 — Reconocimientos',
    awardsTitle: 'Premios y distinciones',
    talksEyebrow: '05 — Ponencias',
    talksTitle: 'Ponencias y jurados',
    talkSpeaker:
      'Ponente — XIII Encuentro Estatal de Grupos de Investigación de Risaralda',
    talkJudge:
      'Jurado — Feria de Ciencias de la Energía, Empresa de Energía de Pereira',
    languagesEyebrow: '06 — Idiomas',
    languagesTitle: 'Idiomas',
    languagesLead: 'Trabajo a diario en francés e inglés, y pienso en español.',
    languagesAlsoKey: 'También',
    languagesAlsoValue:
      'Portugués, italiano y alemán a nivel principiante (A1–A2).',
    outsideEyebrow: '07 — Fuera del trabajo',
    outsideTitle: 'Lo demás',
    volunteeringKey: 'Voluntariado',
    volunteeringTitle: 'AeroKiddo (2021, 2024)',
    volunteeringValue:
      'Enseñanza de aeronáutica a niños de 7 a 12 años con la metodología STEAM, con el grupo de investigación en aeronáutica de la UTP.',
    communityKey: 'Comunidad',
    communityTitle: 'Guardia Romana (2016–2024)',
    communityValue:
      'Un proyecto social de los estudiantes y egresados del Instituto Técnico Superior de Pereira.',
    offScreenKey: 'Fuera de la pantalla',
    offScreenValue:
      'Gimnasio, fútbol, balonmano, cocina, baile en pareja y aprender idiomas nuevos.',
    basedInKey: 'Con base en',
  },

  // --- Projects -----------------------------------------------------------
  projectsPage: {
    eyebrow: 'Proyectos',
    title: 'Lo que he construido',
    lead: 'Trabajos académicos, de competencia y personales. Cada uno dice con claridad lo que realmente es — un prototipo sigue siendo un prototipo.',
    filters: {
      all: 'Todos',
      web: 'Web',
      backend: 'Backend',
      embedded: 'Embebido',
      data: 'Data',
      mobile: 'Móvil',
    },
  },

  // --- Contact ------------------------------------------------------------
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    lead: 'La forma más rápida de localizarme es el correo. Leo todo y respondo a todo lo que sea concreto — ofertas de prácticas, trabajo freelance o una pregunta sobre algo de este sitio.',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    availabilityEyebrow: 'Disponibilidad',
    availabilityTitle: 'Lo que busco',
    contractKey: 'Contrato',
    contractTitle: 'Prácticas — seis meses mínimo',
    contractValue:
      'Convention de stage a través de IMT Nord Europe, que exige al menos 24 semanas. Una duración menor lamentablemente no es válida.',
    datesKey: 'Fechas',
    datesValue:
      'Disponible desde el 15 de febrero de 2027; la ventana llega hasta agosto de 2027.',
    tracksKey: 'Áreas',
    tracksValue:
      'Fullstack, backend, frontend, data, sistemas embebidos y control — además de preventa e ingeniería de soluciones, donde mi escuela certifica la dimensión comercial junto con la ingeniería. La base de hardware es real, no decorativa.',
    locationKey: 'Ubicación',
    locationValue: 'abierto al resto de Francia, a la UE y al trabajo remoto.',
    afterKey: 'Después',
    afterValue:
      'Un puesto permanente en Europa — idealmente en el mismo equipo.',
    languagesKey: 'Idiomas',
    languagesValue: 'Francés e inglés en C1, español nativo.',
  },

  // --- CV -----------------------------------------------------------------
  cv: {
    title: 'Curriculum Vitae',
    frameLabel: 'Curriculum Vitae',
    fallback:
      'Tu navegador no puede mostrar PDF incrustados. Abre el CV en una pestaña nueva o descárgalo.',
    documentLanguage: 'Idioma del documento',
  },

  // --- 404 ----------------------------------------------------------------
  notFound: {
    eyebrow: 'Error',
    title: 'Esta página no existe',
    lead: 'Puede que el enlace esté desactualizado o que la página se haya movido.',
  },

  // --- Footer -------------------------------------------------------------
  footer: {
    madeWith: 'Hecho con',
    madeBy: 'por',
    love: 'amor',
    builtWith: 'React, TypeScript y CSS escrito a mano.',
  },

  // --- Content ------------------------------------------------------------
  experience: {
    leanpay: {
      position: 'Desarrollador de software — Prácticas',
      location: 'Lille, Francia',
      description:
        'Plataforma SaaS B2B de gestión de cobros para direcciones financieras. Equipo de Integración de cuatro personas, tutorizado por el CTO, emparejado a diario con un desarrollador sénior.',
      highlights: [
        'Integración de más de 24 configuraciones de cliente nuevas en el pipeline de ingesta de datos contables — mapeo de columnas, formatos de fecha, filtros por cliente y reglas de tipo de diario.',
        'Diseño de un sistema de diagnóstico automático en dos capas para los fallos de importación del libro mayor: clases de error propias que transportan el contexto del fallo de forma estructurada, y un clasificador que dirige cada fallo a un módulo de verificación dedicado.',
        'Desarrollo de 6 módulos de verificación en TDD estricto con Jest (47 pruebas), con dos salidas distintas por fallo — una para el cliente y otra para el desarrollador.',
        'Defensa en code review de subordinar la vía de diagnóstico por LLM a las reglas deterministas, para mantener el comportamiento sobre datos contables verificable y reproducible.',
      ],
    },
    'alta-ai': {
      position: 'Desarrollador de software',
      location: 'Remoto — EE. UU.',
      description:
        'JRVS, un asistente de IA que permite alternar entre varios proveedores de LLM dentro de una sola interfaz.',
      highlights: [
        'Desarrollo de todo el frontend como desarrollador frontend dedicado, traduciendo los diseños de Figma a interfaz de producción junto al equipo de diseño.',
        'Implementación de Firebase Authentication con dos vías de autenticación independientes — inicio de sesión social/correo e inicio de sesión con X (Twitter).',
        'Desarrollo de todas las animaciones de interfaz con Framer Motion, elegido precisamente para mantener alto el rendimiento en ejecución.',
      ],
    },
    'cidt-cinnov': {
      position: 'Desarrollador móvil — Contrato',
      location: 'Colombia',
      description:
        'Goobi (hoy Guubi), una app en producción que mezcla red social con reporte de incidentes locales en tiempo real —robos, accidentes, daños en la vía— sobre un mapa compartido.',
      highlights: [
        'Equipo de dos desarrolladores: desarrollo del frontend en Flutter para dos funcionalidades nuevas de crecimiento, mientras un compañero construía el backend en NestJS.',
        'Entrega de un sistema de gamificación para impulsar la adopción de nuevos usuarios y de un mapa en vivo de los eventos reportados cerca.',
        'Validación de cada contrato de API con Postman antes de conectar los endpoints a la interfaz; seguimiento del trabajo en Azure DevOps.',
      ],
    },
    'met-group': {
      position: 'Asistente de ingeniería',
      location: 'Colombia',
      description:
        'Telemetría vehicular para un cliente del sector automotriz que necesitaba visibilidad en tiempo real de su flota.',
      highlights: [
        'Desarrollo de una interfaz de bus CAN en MicroPython que lee la telemetría directamente del vehículo — nivel de combustible, velocidad, estado de apertura de puertas.',
        'Construcción del pipeline que sube esos datos a la nube para monitoreo en vivo.',
        'Diseño de prototipos electrónicos y de circuitos impresos en Altium Designer.',
      ],
    },
    mecabot: {
      position: 'Miembro del grupo de investigación',
      location: 'Pereira, Colombia',
      description:
        'Grupo de investigación universitario activo en Industria 4.0, aeronáutica y competencias de robótica.',
      highlights: [
        'Participación en las competencias de ingeniería Aerodesign y vehículo de tracción humana (VTH).',
        'Desarrollo de soluciones de automatización de laboratorio para el grupo de investigación.',
        'Contribución al proyecto del dron agrícola VTOL que se convirtió en la tesis de grado.',
      ],
    },
  },

  projects: {
    'recycling-map': {
      title: 'Puntos de recolección de reciclaje',
      context: 'Challenge Entreprendre — reto de innovación interescuelas',
      description:
        'Una aplicación web que mapea todos los puntos de recolección de reciclaje de la ciudad y los tipos de material que cada centro acepta o entrega. Construida en equipo de cinco durante un reto de una semana — un prototipo sobre datos simulados, no un servicio en producción.',
      highlights: [
        'Ganador de la categoría «Medio ambiente» — 1 de 4 categorías premiadas entre unos 40 equipos.',
        'Equipos de IMT Nord Europe, Polytech Lille, Université de Lille e IAE Lille.',
      ],
      award: 'Ganador — categoría Medio ambiente',
    },
    'ecommerce-microservices': {
      title: 'Arquitectura de microservicios para e-commerce',
      context: 'Proyecto académico — IMT Nord Europe',
      description:
        'Un backend de e-commerce realista construido como servicios independientes en lugar de un monolito, con un API gateway al frente y un frontend en React que lo consume todo.',
      highlights: [
        'Servicios de Catálogo, Carrito y Seguimiento, cada uno con su propia base de datos y su API REST.',
        'API Gateway construido con Spring Cloud Gateway; persistencia con Spring Data JPA / Hibernate.',
        'Realizado en equipo de tres, con Maven para la compilación y la gestión de dependencias.',
      ],
    },
    'usv-coverage': {
      title:
        'Planificación de trayectorias de cobertura para drones acuáticos autónomos',
      context: 'Proyecto de investigación — IMT Nord Europe',
      description:
        'Una aplicación de escritorio que planifica la trayectoria de cobertura óptima para un vehículo de superficie autónomo, de modo que recorra por completo una masa de agua cualquiera en una misión de limpieza.',
      highlights: [
        'Vista de mapa interactiva sobre teselas de OpenStreetMap donde el usuario dibuja el área objetivo vértice a vértice.',
        'Algoritmo de planificación en C++ que calcula rutas de cobertura total sobre el polígono dibujado.',
        'Compilación con CMake, con clang-format y clang-tidy aplicados sobre el código.',
      ],
    },
    'enso-prediction': {
      title: 'Predicción de El Niño / La Niña',
      context: 'Proyecto final — bootcamp de análisis de datos Talento Tech',
      description:
        'Un proyecto en equipo que modela la duración y la intensidad de los ciclos de El Niño y La Niña en Colombia a partir de datos climáticos abiertos, como análisis exploratorio más un modelo de regresión lineal.',
      highlights: [
        'Datos meteorológicos reales del IDEAM — estación del Aeropuerto Matecaña: precipitación, radiación solar y temperatura de bulbo seco.',
        'Análisis exploratorio y visualización con pandas, numpy, matplotlib y seaborn.',
      ],
    },
    'vtol-drone': {
      title: 'Dron agrícola VTOL',
      context: 'Tesis de ingeniería — Universidad Tecnológica de Pereira',
      description:
        'Un dron de ala fija que despega y aterriza en vertical, para sobrevolar terrenos agrícolas en la topografía montañosa colombiana, donde una aeronave que necesita pista es inservible. Diseñado, fabricado, integrado y probado en banco de principio a fin, y publicado en acceso abierto.',
      highlights: [
        'Fuselaje diseñado en Autodesk Inventor sobre un perfil NACA 0012 y un ala trapezoidal, impreso en 3D en PLA y reforzado con perfiles de aluminio.',
        'Integración de un piloto automático de código abierto Pixhawk 2.4.8 y de toda la cadena eléctrica; pruebas en banco de superficies de control, motores brushless y modos de vuelo.',
        'Surgido de una iteración anterior diseñada en SolidWorks y validada con análisis CFD en ANSYS.',
      ],
    },
    'image-ocr': {
      title: 'Reconocimiento de caracteres en imágenes degradadas',
      context:
        'Electiva de procesamiento digital de imágenes — Universidad Tecnológica de Pereira',
      description:
        'Una cadena completa de procesamiento de imágenes y reconocimiento óptico de caracteres en MATLAB, que lee dígitos aritméticos distorsionados del conjunto de datos del curso y calcula el resultado. Aquí fue donde los principios del aprendizaje automático entraron por primera vez en el perfil.',
      highlights: [
        'Construcción de toda la cadena como trabajo del curso — preprocesamiento, segmentación y reconocimiento de caracteres.',
        'Aprendizaje autónomo de OpenCV en paralelo al programa, reimplementando las mismas técnicas fuera del curso.',
      ],
    },
    portfolio: {
      title: 'Este portafolio',
      context: 'Proyecto personal',
      description:
        'Un portafolio hecho a mano sin framework de interfaz — un pequeño sistema de design tokens, React Router para la navegación y un tema claro/oscuro que sigue la preferencia del sistema hasta que la cambias.',
    },
  },

  education: {
    imt: {
      degree:
        'Título de ingeniero — Sistemas Inteligentes, Seguros y Comunicantes (SISC)',
      location: 'Lille, Francia',
      detail:
        'Inteligencia artificial, ciberseguridad, cloud computing, sistemas embebidos y arquitecturas de red avanzadas. RNCP 41148, nivel 7 del Marco Europeo de Cualificaciones. Perfil directivo: desarrollar la dimensión comercial de los proyectos de ingeniería.',
    },
    utp: {
      degree: 'Ingeniería Mecatrónica',
      location: 'Pereira, Colombia',
      detail:
        'Una carrera por ciclos propedéuticos, con dos proyectos de grado sustentados por separado. Promedio de 4,3/5,0, sin materias perdidas. Tesis final sobre un dron agrícola VTOL fabricado con manufactura aditiva.',
    },
    its: {
      degree: 'Bachiller Técnico en Autotrónica (mecatrónica automotriz)',
      location: 'Pereira, Colombia',
      detail:
        'Mecánica automotriz y electrónica vehicular — la capa más temprana del lado hardware del perfil.',
    },
  },

  credentials: {
    stormshield: {
      title: 'Stormshield Network Administrator (CSNA)',
      issuer: 'Stormshield',
      year: 'Válido hasta 2029',
      detail:
        'Puntaje de 86 %. Áreas más fuertes: traducción de direcciones (98 %), administración del firewall (95 %), configuración de red (93 %).',
    },
    'talento-tech': {
      title: 'Bootcamp de análisis de datos',
      issuer: 'Talento Tech, Colombia',
      year: '2024',
    },
    'fullstack-utp': {
      title: 'Desarrollador Full Stack Junior — 176 h',
      issuer: 'Universidad Tecnológica de Pereira',
      year: '2024',
    },
    'python-michigan': {
      title: 'Especialización Python for Everybody — 76 h',
      issuer: 'Universidad de Míchigan · Coursera',
      year: '2021',
    },
  },

  awards: {
    'challenge-entreprendre': {
      title: 'Ganador — Challenge Entreprendre, categoría Medio ambiente',
      detail:
        'Reto de innovación interescuelas de una semana, con unos 40 equipos de IMT Nord Europe, Polytech Lille, Université de Lille e IAE Lille. Uno de los cuatro ganadores de categoría.',
    },
    colfuturo: {
      title: 'Programa Semillero de Talentos',
      detail:
        'Programa selectivo de COLFUTURO que apoya a estudiantes de excelencia académica que buscan estudiar en el exterior.',
    },
    distinguished: {
      title: 'Estudiante Distinguido en Ingeniería Mecatrónica',
      detail:
        'Otorgado por un promedio de grado de 4,3/5,0 sin materias perdidas en todo el programa.',
    },
    cooeducar: {
      title: 'Beca «Cooeducar Apoyando la Educación Superior»',
      detail: 'Otorgada por mérito académico y necesidad económica.',
    },
  },

  skillGroups: {
    frontend: 'Frontend',
    'backend-data': 'Backend & Data',
    testing: 'Pruebas y prácticas',
    security: 'Seguridad y redes',
    embedded: 'Embebidos y sistemas',
    'cad-simulation': 'CAD y simulación',
    data: 'Data y análisis',
  },

  spokenLanguages: {
    es: { name: 'Español', level: 'Nativo' },
    en: { name: 'Inglés', level: 'C1 — Avanzado' },
    fr: { name: 'Francés', level: 'C1 — Avanzado' },
  },
}
