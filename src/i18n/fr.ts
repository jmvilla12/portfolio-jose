// French. Typed against `Dictionary`, so a missing or misspelled key fails
// `tsc -b` rather than silently falling back to English.

import type { Dictionary } from './en'

export const fr: Dictionary = {
  // --- Chrome -------------------------------------------------------------
  nav: {
    home: 'Accueil',
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
  },

  header: {
    switchToLight: 'Passer au thème clair',
    switchToDark: 'Passer au thème sombre',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },

  actions: {
    downloadCV: 'Télécharger le CV',
    viewCV: 'Voir le CV',
    seeProjects: 'Voir les projets',
    fullBackground: 'Parcours complet',
    getInTouch: 'Me contacter',
    viewSource: 'Voir le code',
    backToHome: "Retour à l'accueil",
    back: 'Retour',
    open: 'Ouvrir',
    download: 'Télécharger',
    openInNewTab: 'Ouvrir dans un nouvel onglet',
    downloadPDF: 'Télécharger le PDF',
    readPublication: 'Lire le mémoire',
  },

  date: {
    present: "aujourd'hui",
  },

  // --- Profile ------------------------------------------------------------
  profile: {
    role: 'Ingénieur logiciel',
    roleAlt: 'Formation en mécatronique',
    location: 'Lille, Hauts-de-France',
    city: 'Lille',
    region: 'Hauts-de-France',
    tagline:
      "Ingénieur logiciel en fin de M2 Systèmes Intelligents, Sûrs et Communicants à IMT Nord Europe. Je développe des backends d'ingestion de données, des frontends produit et des systèmes embarqués — dernièrement chez LeanPay, une fintech B2B lilloise.",
    availabilityStatus: 'Ouvert à un stage — févr. 2027',
    availabilityDetail:
      "À la recherche d'un stage d'ingénieur de six mois à partir du 15 février 2027, en France — Lille de préférence — ou ailleurs dans l'UE. IMT Nord Europe exige un minimum de 24 semaines : la fenêtre va donc de février à août 2027. Mon objectif ensuite est un CDI ou un CDD en Europe.",
  },

  stats: [
    { value: '2+', label: 'Années de développement' },
    { value: '5', label: 'Langages livrés en production' },
    { value: '3', label: 'Langues parlées (ES/EN/FR)' },
    { value: 'Févr. 2027', label: 'Disponible pour un stage' },
  ],

  // --- Home ---------------------------------------------------------------
  home: {
    experienceEyebrow: '01 — Expérience',
    experienceTitle: "Où j'ai travaillé",
    experienceLead:
      'Des pipelines de données comptables dans une fintech française à la télémétrie bus CAN sur des véhicules réels.',
    skillsEyebrow: '02 — Outils',
    skillsTitle: 'Ce avec quoi je construis',
    skillsLead:
      'Un cœur logiciel avec une vraie base matérielle en dessous — les deux se renforcent au lieu de se concurrencer.',
    ctaTitle: 'Vous cherchez un stagiaire ?',
  },

  // --- About --------------------------------------------------------------
  about: {
    eyebrow: 'À propos',
    title: 'Ingénieur logiciel avec un passé en mécatronique',
    lead: "J'ai commencé par la mécatronique en Colombie — moteurs, circuits imprimés, bus CAN — et je suis passé au logiciel sans abandonner le matériel. Aujourd'hui je termine un M2 Systèmes Intelligents, Sûrs et Communicants à IMT Nord Europe, à Lille.",
    experienceEyebrow: '01 — Expérience',
    experienceTitle: 'Parcours complet',
    educationEyebrow: '02 — Formation',
    educationTitle: 'Études',
    credentialsEyebrow: '03 — Certifications',
    credentialsTitle: 'Formations certifiantes',
    awardsEyebrow: '04 — Distinctions',
    awardsTitle: 'Prix et distinctions',
    talksEyebrow: '05 — Interventions',
    talksTitle: 'Conférences et jurys',
    talkSpeaker:
      'Intervenant — XIIIe Rencontre régionale des groupes de recherche du Risaralda',
    talkJudge:
      "Juré — Foire des sciences de l'énergie, Empresa de Energía de Pereira",
    languagesEyebrow: '06 — Langues',
    languagesTitle: 'Langues parlées',
    languagesLead:
      'Je travaille au quotidien en français et en anglais, et je pense en espagnol.',
    languagesAlsoKey: 'Aussi',
    languagesAlsoValue:
      'Portugais, italien et allemand niveau débutant (A1–A2).',
    outsideEyebrow: '07 — Hors travail',
    outsideTitle: 'Le reste',
    volunteeringKey: 'Bénévolat',
    volunteeringTitle: 'AeroKiddo (2021, 2024)',
    volunteeringValue:
      "Initiation à l'aéronautique pour des enfants de 7 à 12 ans selon la méthodologie STEAM, avec le groupe de recherche en aéronautique de l'UTP.",
    communityKey: 'Associatif',
    communityTitle: 'Garde Romaine (2016–2024)',
    communityValue:
      "Un projet social porté par les étudiants et les diplômés de l'Instituto Técnico Superior de Pereira.",
    offScreenKey: "Loin de l'écran",
    offScreenValue:
      'Musculation, football, handball, cuisine, danses de couple et apprentissage de nouvelles langues.',
    basedInKey: 'Basé à',
  },

  // --- Projects -----------------------------------------------------------
  projectsPage: {
    eyebrow: 'Projets',
    title: "Ce que j'ai construit",
    lead: "Travaux académiques, de compétition et personnels. Chacun dit clairement ce qu'il est — un prototype reste un prototype.",
    filters: {
      all: 'Tous',
      web: 'Web',
      backend: 'Backend',
      embedded: 'Embarqué',
      data: 'Data',
      mobile: 'Mobile',
    },
  },

  // --- Contact ------------------------------------------------------------
  contact: {
    eyebrow: 'Contact',
    title: 'Discutons',
    lead: "Le plus rapide pour me joindre, c'est l'e-mail. Je lis tout et je réponds à tout ce qui est concret — offres de stage, missions freelance, ou une question sur ce site.",
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    availabilityEyebrow: 'Disponibilité',
    availabilityTitle: 'Ce que je recherche',
    contractKey: 'Contrat',
    contractTitle: 'Stage — six mois minimum',
    contractValue:
      'Convention de stage via IMT Nord Europe, qui exige au moins 24 semaines. Une durée inférieure ne peut malheureusement pas convenir.',
    datesKey: 'Dates',
    datesValue:
      "Disponible à partir du 15 février 2027 ; la fenêtre court jusqu'en août 2027.",
    tracksKey: 'Domaines',
    tracksValue:
      "Fullstack, backend, frontend, data, systèmes embarqués et automatique — ainsi que l'avant-vente et l'ingénierie de solutions, où mon école certifie la dimension commerciale en plus de l'ingénierie. La base matérielle est réelle, pas décorative.",
    locationKey: 'Localisation',
    locationValue: "ouvert au reste de la France, à l'UE et au télétravail.",
    afterKey: 'Ensuite',
    afterValue: 'Un CDI ou un CDD en Europe — idéalement dans la même équipe.',
    languagesKey: 'Langues',
    languagesValue:
      'Français et anglais niveau C1, espagnol langue maternelle.',
  },

  // --- CV -----------------------------------------------------------------
  cv: {
    title: 'Curriculum Vitae',
    frameLabel: 'Curriculum Vitae',
    fallback:
      'Votre navigateur ne peut pas afficher les PDF directement. Ouvrez le CV dans un nouvel onglet ou téléchargez-le.',
    documentLanguage: 'Langue du document',
  },

  // --- 404 ----------------------------------------------------------------
  notFound: {
    eyebrow: 'Erreur',
    title: "Cette page n'existe pas",
    lead: 'Le lien est peut-être obsolète, ou la page a été déplacée.',
  },

  // --- Footer -------------------------------------------------------------
  footer: {
    madeWith: 'Fait avec',
    madeBy: 'par',
    love: 'amour',
    builtWith: 'React, TypeScript et du CSS écrit à la main.',
  },

  // --- Content ------------------------------------------------------------
  experience: {
    leanpay: {
      position: 'Développeur logiciel — Stage',
      location: 'Lille, France',
      description:
        'Plateforme SaaS B2B de recouvrement client pour les directions financières. Équipe Intégration de quatre personnes, encadré par le CTO, en binôme quotidien avec un développeur senior.',
      highlights: [
        "Intégration de plus de 24 nouvelles configurations client dans le pipeline d'ingestion de données comptables — mapping de colonnes, formats de date, filtres client et règles de type de journal.",
        "Conception d'un système de diagnostic automatique à deux couches pour les échecs d'import de grand livre : des classes d'erreur sur mesure portant un contexte d'échec structuré, et un classificateur orientant chaque échec vers un module de vérification dédié.",
        'Développement de 6 modules de vérification en TDD strict avec Jest (47 tests), produisant deux sorties distinctes par échec — une pour le client, une pour le développeur.',
        'Argumentation en code review pour subordonner la voie de diagnostic par LLM aux règles déterministes, afin de garder le comportement sur les données comptables testable et reproductible.',
      ],
    },
    'alta-ai': {
      position: 'Développeur logiciel',
      location: 'À distance — États-Unis',
      description:
        "JRVS, un assistant IA qui permet de basculer entre plusieurs fournisseurs de LLM au sein d'une seule interface.",
      highlights: [
        "Développement de l'intégralité du frontend en tant que développeur frontend dédié, en traduisant les maquettes Figma en interface de production aux côtés de l'équipe design.",
        "Mise en place de Firebase Authentication avec deux parcours d'authentification indépendants — connexion sociale/e-mail et connexion X (Twitter).",
        "Réalisation de toutes les animations d'interface avec Framer Motion, choisi précisément pour préserver les performances à l'exécution.",
      ],
    },
    'cidt-cinnov': {
      position: 'Développeur mobile — Prestation',
      location: 'Colombie',
      description:
        "Goobi (aujourd'hui Guubi), une application en production mêlant réseau social et signalement d'incidents locaux en temps réel — vols, accidents, dégradations de voirie — sur une carte partagée.",
      highlights: [
        'Équipe de deux développeurs : développement du frontend Flutter pour deux nouvelles fonctionnalités de croissance, pendant qu’un collègue développait le backend NestJS.',
        "Livraison d'un système de gamification pour favoriser l'adoption par les nouveaux utilisateurs, et d'une carte en direct des événements signalés à proximité.",
        "Validation de chaque contrat d'API avec Postman avant de brancher les endpoints dans l'interface ; suivi du travail sur Azure DevOps.",
      ],
    },
    'met-group': {
      position: "Assistant d'ingénierie",
      location: 'Colombie',
      description:
        "Télémétrie véhicule pour un client du secteur automobile ayant besoin d'une visibilité en temps réel sur sa flotte.",
      highlights: [
        "Développement d'une interface bus CAN en MicroPython lisant la télémétrie directement depuis le véhicule — niveau de carburant, vitesse, état d'ouverture des portes.",
        "Construction du pipeline d'envoi de ces données vers le cloud pour un suivi en direct.",
        'Conception de prototypes électroniques et de circuits imprimés sous Altium Designer.',
      ],
    },
    mecabot: {
      position: 'Membre du groupe de recherche',
      location: 'Pereira, Colombie',
      description:
        "Groupe de recherche universitaire actif sur l'Industrie 4.0, l'aéronautique et les compétitions de robotique.",
      highlights: [
        "Participation aux compétitions d'ingénierie Aerodesign et véhicule à propulsion humaine (VTH).",
        "Développement de solutions d'automatisation de laboratoire pour le groupe de recherche.",
        'Contribution au projet de drone agricole VTOL devenu le mémoire de fin d’études.',
      ],
    },
  },

  projects: {
    'recycling-map': {
      title: 'Points de collecte de recyclage',
      context: "Challenge Entreprendre — challenge d'innovation inter-écoles",
      description:
        "Une application web cartographiant tous les points de collecte de recyclage de la ville et les types de matériaux que chaque centre accepte ou fournit. Réalisée en équipe de cinq pendant un challenge d'une semaine — un prototype fonctionnant sur des données simulées, pas un service en production.",
      highlights: [
        'Lauréat de la catégorie « Environnement » — 1 des 4 catégories primées sur environ 40 équipes.',
        "Équipes d'IMT Nord Europe, Polytech Lille, Université de Lille et IAE Lille.",
      ],
      award: 'Lauréat — catégorie Environnement',
    },
    'ecommerce-microservices': {
      title: 'Architecture microservices e-commerce',
      context: 'Projet étudiant — IMT Nord Europe',
      description:
        "Un backend e-commerce réaliste construit en services indépendants plutôt qu'en monolithe, avec une API gateway en façade et un frontend React consommant l'ensemble.",
      highlights: [
        'Services Catalogue, Panier et Suivi, chacun avec sa propre base de données et son API REST.',
        'API Gateway construite avec Spring Cloud Gateway ; persistance via Spring Data JPA / Hibernate.',
        'Réalisé en équipe de trois, avec Maven pour la compilation et la gestion des dépendances.',
      ],
    },
    'usv-coverage': {
      title:
        'Planification de trajectoire de couverture pour drones aquatiques autonomes',
      context: 'Projet de recherche — IMT Nord Europe',
      description:
        "Une application de bureau qui planifie une trajectoire de couverture optimale pour un véhicule de surface autonome, afin qu'il puisse parcourir intégralement une étendue d'eau quelconque lors d'une mission de nettoyage.",
      highlights: [
        "Vue cartographique interactive basée sur les tuiles OpenStreetMap, où l'utilisateur trace la zone cible sommet par sommet.",
        'Algorithme de planification en C++ calculant des trajets de couverture totale sur le polygone tracé.',
        'Compilation CMake avec clang-format et clang-tidy imposés sur la base de code.',
      ],
    },
    'enso-prediction': {
      title: 'Prédiction El Niño / La Niña',
      context:
        "Projet de fin de parcours — bootcamp d'analyse de données Talento Tech",
      description:
        "Un projet en équipe modélisant la durée et l'intensité des cycles El Niño et La Niña en Colombie à partir de données climatiques ouvertes, sous forme d'une analyse exploratoire et d'un modèle de régression linéaire.",
      highlights: [
        "Données météorologiques réelles de l'IDEAM — station de l'aéroport Matecaña : précipitations, rayonnement solaire et température sèche.",
        'Analyse exploratoire et visualisation avec pandas, numpy, matplotlib et seaborn.',
      ],
    },
    'vtol-drone': {
      title: 'Drone agricole VTOL',
      context: "Mémoire d'ingénieur — Universidad Tecnológica de Pereira",
      description:
        "Un drone à voilure fixe qui décolle et atterrit à la verticale, pour survoler des terres agricoles dans le relief montagneux colombien, où un appareil dépendant d'une piste est inutilisable. Conçu, fabriqué, intégré et testé au banc de bout en bout, et publié en accès libre.",
      highlights: [
        "Cellule conçue sous Autodesk Inventor autour d'un profil NACA 0012 et d'une aile trapézoïdale, puis imprimée en 3D en PLA et renforcée par des profilés en aluminium.",
        "Intégration d'un pilote automatique open source Pixhawk 2.4.8 et de toute la chaîne électrique ; essais au banc des gouvernes, des moteurs brushless et des modes de vol.",
        "Issu d'une première itération conçue sous SolidWorks et validée par une analyse CFD sous ANSYS.",
      ],
    },
    'image-ocr': {
      title: 'Reconnaissance de caractères sur images dégradées',
      context:
        "Électif de traitement numérique d'images — Universidad Tecnológica de Pereira",
      description:
        "Une chaîne complète de traitement d'images et de reconnaissance optique de caractères sous MATLAB, qui lit des chiffres arithmétiques déformés dans le jeu de données du cours et en calcule le résultat. C'est là que les principes de l'apprentissage automatique sont entrés dans le profil.",
      highlights: [
        'Construction de toute la chaîne dans le cadre du cours — prétraitement, segmentation et reconnaissance de caractères.',
        "Apprentissage autonome d'OpenCV en parallèle du programme, en réimplémentant les mêmes techniques hors du cours.",
      ],
    },
    portfolio: {
      title: 'Ce portfolio',
      context: 'Projet personnel',
      description:
        "Un portfolio écrit à la main sans framework d'interface — un petit système de design tokens, React Router pour la navigation et un thème clair/sombre qui suit la préférence système jusqu'à ce que vous la remplaciez.",
    },
  },

  education: {
    imt: {
      degree:
        "Diplôme d'ingénieur — Systèmes Intelligents, Sûrs et Communicants (SISC)",
      location: 'Lille, France',
      detail:
        "Intelligence artificielle, cybersécurité, cloud computing, systèmes embarqués et architectures réseau avancées. RNCP 41148, niveau 7 du CEC. Profil managérial : développer la dimension commerciale des projets d'ingénierie.",
    },
    utp: {
      degree: 'Ingénierie mécatronique',
      location: 'Pereira, Colombie',
      detail:
        'Un cursus en deux cycles, avec deux projets de fin de cycle soutenus séparément. Moyenne de 4,3/5,0, aucun échec. Mémoire final sur un drone agricole VTOL réalisé en fabrication additive.',
    },
    its: {
      degree:
        'Baccalauréat technique en autotronique (mécatronique automobile)',
      location: 'Pereira, Colombie',
      detail:
        'Mécanique automobile et électronique embarquée — la première couche du versant matériel du profil.',
    },
  },

  credentials: {
    stormshield: {
      title: 'Stormshield Network Administrator (CSNA)',
      issuer: 'Stormshield',
      year: "Valide jusqu'en 2029",
      detail:
        "Score de 86 %. Points forts : translation d'adresses (98 %), administration du pare-feu (95 %), configuration réseau (93 %).",
    },
    'talento-tech': {
      title: "Bootcamp d'analyse de données",
      issuer: 'Talento Tech, Colombie',
      year: '2024',
    },
    'fullstack-utp': {
      title: 'Développeur Full Stack Junior — 176 h',
      issuer: 'Universidad Tecnológica de Pereira',
      year: '2024',
    },
    'python-michigan': {
      title: 'Spécialisation Python for Everybody — 76 h',
      issuer: 'Université du Michigan · Coursera',
      year: '2021',
    },
  },

  awards: {
    'challenge-entreprendre': {
      title: 'Lauréat — Challenge Entreprendre, catégorie Environnement',
      detail:
        "Challenge d'innovation inter-écoles d'une semaine, environ 40 équipes d'IMT Nord Europe, Polytech Lille, Université de Lille et IAE Lille. Un des quatre lauréats de catégorie.",
    },
    colfuturo: {
      title: 'Programme Pépinière de Talents',
      detail:
        "Programme sélectif de COLFUTURO soutenant les étudiants d'excellence académique qui poursuivent des études à l'étranger.",
    },
    distinguished: {
      title: 'Étudiant distingué en ingénierie mécatronique',
      detail:
        "Distinction obtenue pour une moyenne de fin d'études de 4,3/5,0 sans aucun échec sur l'ensemble du cursus.",
    },
    cooeducar: {
      title: "Bourse « Cooeducar soutient l'enseignement supérieur »",
      detail: 'Attribuée au mérite académique et sur critères sociaux.',
    },
  },

  skillGroups: {
    frontend: 'Frontend',
    'backend-data': 'Backend & Data',
    testing: 'Tests & pratiques',
    security: 'Sécurité & réseaux',
    embedded: 'Embarqué & systèmes',
    'cad-simulation': 'CAO & simulation',
    data: 'Data & analyse',
  },

  spokenLanguages: {
    es: { name: 'Espagnol', level: 'Langue maternelle' },
    en: { name: 'Anglais', level: 'C1 — Avancé' },
    fr: { name: 'Français', level: 'C1 — Avancé' },
  },
}
