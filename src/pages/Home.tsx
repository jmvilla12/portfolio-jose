import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import {
  CountUp,
  CVButton,
  ExperienceItem,
  Reveal,
  SocialLinks,
} from '@components/ui'
import { APP_CONFIG, ROUTES, STATS } from '@constants/index'
import { EXPERIENCE, SKILL_GROUPS } from '@data/index'

const Home = () => {
  const featured = EXPERIENCE.slice(0, 3)

  return (
    <>
      {/* --- Hero --------------------------------------------------------- */}
      <section className="hero">
        <div className="container hero__inner">
          <Reveal>
            <span className="status">
              <span className="status__dot" aria-hidden />
              {APP_CONFIG.availability.status}
            </span>

            <h1 className="hero__name">
              <span>{APP_CONFIG.firstName}</span>
              <span>{APP_CONFIG.lastName}</span>
            </h1>

            <p className="hero__role">
              {APP_CONFIG.role}
              <span className="hero__role-sep" aria-hidden />
              <span className="hero__role-alt">{APP_CONFIG.roleAlt}</span>
            </p>

            <p className="hero__lead">{APP_CONFIG.tagline}</p>

            <div className="hero__actions btn-row">
              <CVButton />
              <Link
                to={ROUTES.projects}
                className="btn btn--quiet"
                viewTransition
              >
                See projects
                <FiArrowRight className="btn__icon" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <div className="hero__portrait">
            <img src="/foto_jose.jpg" alt={APP_CONFIG.name} />
            <div className="hero__badge">
              <strong>Lille</strong>
              Hauts-de-France
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats -------------------------------------------------------- */}
      <Reveal className="container">
        <div className="stats">
          {STATS.map(stat => (
            <div key={stat.label} className="stat">
              <div className="stat__value">
                <CountUp value={stat.value} />
              </div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* --- Experience --------------------------------------------------- */}
      <section className="section section--flush">
        <div className="container">
          <Reveal className="split">
            <div className="split__aside">
              <p className="eyebrow">01 — Experience</p>
              <h2>Where I've worked</h2>
              <p className="section__lead">
                From accounting-data pipelines in a French fintech to CAN bus
                telemetry on real vehicles.
              </p>
              <Link
                to={ROUTES.about}
                className="btn btn--quiet"
                style={{ marginTop: '1.5rem' }}
                viewTransition
              >
                Full background
                <FiArrowRight className="btn__icon" aria-hidden />
              </Link>
            </div>

            <Reveal className="timeline">
              {featured.map(experience => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* --- Skills ------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">02 — Toolkit</p>
            <h2>What I build with</h2>
            <p className="section__lead">
              A software core with a genuine hardware background underneath —
              the two reinforce each other rather than compete.
            </p>
          </Reveal>

          <Reveal className="skills">
            {SKILL_GROUPS.map(group => (
              <div key={group.title} className="skill-group">
                <h3 className="skill-group__title">
                  {group.title}
                  <span className="skill-group__count">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </h3>
                <div className="tag-list">
                  {group.skills.map(skill => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- CTA ---------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="cta">
            <div>
              <h2 className="cta__title">Looking for an alternant?</h2>
              <p className="cta__text">{APP_CONFIG.availability.detail}</p>
            </div>

            <div className="btn-row">
              <Link
                to={ROUTES.contact}
                className="btn btn--primary"
                viewTransition
              >
                Get in touch
                <FiArrowRight className="btn__icon" aria-hidden />
              </Link>
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home
