import { FiAward, FiGithub } from 'react-icons/fi'
import type { Project } from '@src/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <article className="card project">
      <div className="card__head">
        <span className="project__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="card__meta">{project.period}</span>
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

      {project.githubUrl && (
        <div className="card__footer">
          <a
            href={project.githubUrl}
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden />
            View source
          </a>
        </div>
      )}
    </article>
  )
}

export default ProjectCard
