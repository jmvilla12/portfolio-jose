import type { Project, Experience } from '@src/types'

// Sample projects data
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, TypeScript, and Vite',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS3'],
    category: 'web',
    githubUrl: 'https://github.com/jmvilla12/portfolio-jose',
  },
  // Add more projects as you build them
]

// Sample experience data
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Your Company',
    position: 'Software Developer',
    startDate: '2024-01',
    description:
      'Developing modern web applications using React and TypeScript',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  // Add your real experience here
]
