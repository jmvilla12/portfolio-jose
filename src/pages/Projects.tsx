import { useMemo, useState } from 'react'
import { ProjectCard, Reveal } from '@components/ui'
import { useContent, useI18n } from '@i18n/index'
import type { ProjectCategory } from '@src/types'

type Filter = ProjectCategory | 'all'

/** Display order; the labels come from `t.projectsPage.filters`. */
const FILTER_ORDER: Filter[] = [
  'all',
  'web',
  'backend',
  'embedded',
  'data',
  'mobile',
]

const Projects = () => {
  const { t } = useI18n()
  const { projects } = useContent()
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter),
    [filter, projects]
  )

  // Hide filters that would produce an empty list.
  const available = FILTER_ORDER.filter(
    option =>
      option === 'all' || projects.some(project => project.category === option)
  )

  return (
    <>
      <Reveal className="container page-head">
        <p className="eyebrow">{t.projectsPage.eyebrow}</p>
        <h1 className="page-head__title">{t.projectsPage.title}</h1>
        <p className="page-head__lead">{t.projectsPage.lead}</p>

        <div className="btn-row" style={{ marginTop: '2rem' }}>
          {available.map(option => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`btn btn--sm ${
                filter === option ? 'btn--primary' : 'btn--ghost'
              }`}
              aria-pressed={filter === option}
            >
              {t.projectsPage.filters[option]}
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
