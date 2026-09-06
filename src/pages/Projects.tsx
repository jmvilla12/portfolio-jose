import { useMemo, useState } from 'react'
import { ProjectCard, Reveal } from '@components/ui'
import { PROJECTS } from '@data/index'
import type { ProjectCategory } from '@src/types'

const FILTERS: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Backend', value: 'backend' },
  { label: 'Embedded', value: 'embedded' },
  { label: 'Data', value: 'data' },
]

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === filter),
    [filter]
  )

  // Hide filters that would produce an empty list.
  const available = FILTERS.filter(
    option =>
      option.value === 'all' ||
      PROJECTS.some(project => project.category === option.value)
  )

  return (
    <>
      <Reveal className="container page-head">
        <p className="eyebrow">Projects</p>
        <h1 className="page-head__title">Things I've built</h1>
        <p className="page-head__lead">
          Academic, competition and personal work. Each one says plainly what it
          actually is — a prototype stays a prototype.
        </p>

        <div className="btn-row" style={{ marginTop: '2rem' }}>
          {available.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              className={`btn btn--sm ${
                filter === option.value ? 'btn--primary' : 'btn--ghost'
              }`}
              aria-pressed={filter === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </Reveal>

      <section className="section">
        <div className="container">
          <Reveal className="card-grid">
            {visible.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Projects
