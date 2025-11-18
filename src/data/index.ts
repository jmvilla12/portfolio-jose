import type { Project, Experience } from '@src/types'

// Sample projects data
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfolio Personnel',
    description:
      'Site portfolio developpe avec React, TypeScript et Vite pour presenter mes projets et competences',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
    category: 'web',
    githubUrl: 'https://github.com/jmvilla12/portfolio-jose',
  },
  {
    id: '2',
    title: 'Application Flutter - AltaAI',
    description:
      "Developpement d'applications mobiles avec Flutter et integration de modules d'IA",
    technologies: ['Flutter', 'TypeScript', 'AI Integration', 'Figma'],
    category: 'mobile',
    githubUrl: 'https://github.com/jmvilla12',
  },
  {
    id: '3',
    title: 'Drone Agriculture - UTP',
    description:
      "Conception d'un drone a decollage et atterrissage vertical pour le secteur agricole",
    technologies: ['C/C++', 'MicroPython', 'MATLAB', 'Systemes embarques'],
    category: 'other',
    githubUrl: 'https://github.com/jmvilla12',
  },
]

// Sample experience data
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'AltaAI | BlueSkyAI',
    position: 'Developpeur Logiciel',
    startDate: '2024-12',
    description:
      "Developpement d'applications logicielles avec Flutter, TypeScript et React. Integration de modules d'intelligence artificielle et conception d'interfaces sur Figma.",
    technologies: ['Flutter', 'TypeScript', 'React', 'Figma', 'AI'],
  },
  {
    id: '2',
    company: 'MECABOT - Universite Technologique de Pereira',
    position: 'Membre du Groupe de Recherche Aeronautique',
    startDate: '2019-11',
    endDate: '2023-07',
    description:
      "Participation a des projets d'innovation lies a l'Industrie 4.0 et a la recherche aeronautique.",
    technologies: ['MATLAB', 'C/C++', 'Recherche', 'Innovation'],
  },
  {
    id: '3',
    company: 'METGROUP SAS',
    position: 'Assistant Ingenieur',
    startDate: '2021-11',
    endDate: '2022-05',
    description:
      'Developpement materiel et programmation logicielle en MicroPython et C pour des solutions destinees au secteur automobile.',
    technologies: ['MicroPython', 'C/C++', 'Systemes embarques'],
  },
]
