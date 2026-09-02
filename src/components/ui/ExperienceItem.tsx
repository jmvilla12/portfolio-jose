import type { Experience } from '@src/types'

interface ExperienceItemProps {
  experience: Experience
  /** Collapsed form drops the bullet list — used on the home page preview. */
  compact?: boolean
}

const ExperienceItem = ({
  experience,
  compact = false,
}: ExperienceItemProps) => {
  return (
    <article
      className={`timeline__item ${experience.current ? 'timeline__item--current' : ''}`}
    >
      <div className="timeline__period">
        {experience.period}
        <span className="timeline__place">{experience.location}</span>
      </div>

      <div>
        <h3 className="timeline__role">{experience.position}</h3>
        <p className="timeline__org">{experience.company}</p>
        <p className="timeline__desc">{experience.description}</p>

        {!compact && (
          <ul className="points timeline__points">
            {experience.highlights.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <div className="tag-list timeline__tags">
          {experience.technologies.map(tech => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ExperienceItem
