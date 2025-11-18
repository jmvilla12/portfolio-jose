import type { Project } from '@src/types'

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
