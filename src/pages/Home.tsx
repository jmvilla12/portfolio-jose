import { FiArrowRight } from 'react-icons/fi'
import {
  CountUp,
  CVButton,
  ExperienceItem,
  Reveal,
  SocialLinks,
} from '@components/ui'
import { LocaleLink, useContent, useI18n } from '@i18n/index'
import { APP_CONFIG, ROUTES } from '@constants/index'

const Home = () => {
  const { t } = useI18n()
  const { experience, skillGroups } = useContent()
  const featured = experience.slice(0, 3)

  return (
    <>
      {/* --- Hero --------------------------------------------------------- */}
      <section className="hero">
        <div className="container hero__inner">
          <Reveal>
            <span className="status">
              <span className="status__dot" aria-hidden />
              {t.profile.availabilityStatus}
            </span>

            <h1 className="hero__name">
              <span>{APP_CONFIG.firstName}</span>
              <span>{APP_CONFIG.lastName}</span>
            </h1>

            <p className="hero__role">
              {t.profile.role}
              <span className="hero__role-sep" aria-hidden />
              <span className="hero__role-alt">{t.profile.roleAlt}</span>
            </p>

            <p className="hero__lead">{t.profile.tagline}</p>

            <div className="hero__actions btn-row">
              <CVButton />
              <LocaleLink
                to={ROUTES.projects}
                className="btn btn--quiet"
                viewTransition
              >
                {t.actions.seeProjects}
                <FiArrowRight className="btn__icon" aria-hidden />
              </LocaleLink>
            </div>
          </Reveal>

          <div className="hero__portrait">
            <img src="/foto_jose.jpg" alt={APP_CONFIG.name} />
            <div className="hero__badge">
              <strong>{t.profile.city}</strong>
              {t.profile.region}
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats -------------------------------------------------------- */}
      <Reveal className="container">
        <div className="stats">
          {t.stats.map(stat => (
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
              <p className="eyebrow">{t.home.experienceEyebrow}</p>
              <h2>{t.home.experienceTitle}</h2>
              <p className="section__lead">{t.home.experienceLead}</p>
              <LocaleLink
                to={ROUTES.about}
                className="btn btn--quiet"
                style={{ marginTop: '1.5rem' }}
                viewTransition
              >
                {t.actions.fullBackground}
                <FiArrowRight className="btn__icon" aria-hidden />
              </LocaleLink>
            </div>

            <Reveal className="timeline">
              {featured.map(item => (
                <ExperienceItem key={item.id} experience={item} />
              ))}
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* --- Skills ------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">{t.home.skillsEyebrow}</p>
            <h2>{t.home.skillsTitle}</h2>
            <p className="section__lead">{t.home.skillsLead}</p>
          </Reveal>

          <Reveal className="skills">
            {skillGroups.map(group => (
              <div key={group.id} className="skill-group">
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
              <h2 className="cta__title">{t.home.ctaTitle}</h2>
              <p className="cta__text">{t.profile.availabilityDetail}</p>
            </div>

            <div className="btn-row">
              <LocaleLink
                to={ROUTES.contact}
                className="btn btn--primary"
                viewTransition
              >
                {t.actions.getInTouch}
                <FiArrowRight className="btn__icon" aria-hidden />
              </LocaleLink>
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Home
