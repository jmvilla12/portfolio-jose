import type { MouseEvent } from 'react'
import { FiAward, FiExternalLink, FiGithub } from 'react-icons/fi'
import { useFormatPeriod, useI18n } from '@i18n/index'
import type { Project } from '@src/types'

interface ProjectCardProps {
  project: Project
  index: number
}

/** Feeds the cursor position to the CSS spotlight in `.project::after`. */
const trackCursor = (event: MouseEvent<HTMLElement>) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  card.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useI18n()
  const formatPeriod = useFormatPeriod()

  return (
    <article className="card project" onMouseMove={trackCursor}>
      <div className="card__head">
        <span className="project__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="card__meta">{formatPeriod(project.period)}</span>
      </div>

      <div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__sub">{project.context}</p>
      </div>

      {project.award && (
        <span className="project__award">
          <FiAward aria-hidden />
          {project.award}
        </span>
      )}

      <p className="card__body">{project.description}</p>

      {project.highlights && (
        <ul className="points">
          {project.highlights.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      <div className="tag-list">
        {project.technologies.map(tech => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {(project.githubUrl || project.publicationUrl) && (
        <div className="card__footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden />
              {t.actions.viewSource}
            </a>
          )}
          {project.publicationUrl && (
            <a
              href={project.publicationUrl}
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink aria-hidden />
              {t.actions.readPublication}
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
