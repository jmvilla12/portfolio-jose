import { CVButton, ExperienceItem, Reveal } from '@components/ui'
import { useContent, useFormatPeriod, useI18n } from '@i18n/index'

const About = () => {
  const { t } = useI18n()
  const { awards, credentials, education, experience, spokenLanguages } =
    useContent()
  const formatPeriod = useFormatPeriod()

  return (
    <>
      <header className="container page-head">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1 className="page-head__title">{t.about.title}</h1>
        <p className="page-head__lead">{t.about.lead}</p>
        <div style={{ marginTop: '2rem' }}>
          <CVButton />
        </div>
      </header>

      {/* --- Experience --------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">{t.about.experienceEyebrow}</p>
            <h2>{t.about.experienceTitle}</h2>
          </div>

          <Reveal className="timeline">
            {experience.map(item => (
              <ExperienceItem key={item.id} experience={item} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- Education ---------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.about.educationEyebrow}</p>
              <h2>{t.about.educationTitle}</h2>
            </div>

            <Reveal className="timeline">
              {education.map(item => (
                <article key={item.id} className="timeline__item">
                  <div className="timeline__period">
                    {formatPeriod(item.period)}
                    <span className="timeline__place">{item.location}</span>
                  </div>
                  <div>
                    <h3 className="timeline__role">{item.institution}</h3>
                    <p className="timeline__org">{item.degree}</p>
                    {item.detail && (
                      <p className="timeline__desc">{item.detail}</p>
                    )}
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Certifications ----------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">{t.about.credentialsEyebrow}</p>
            <h2>{t.about.credentialsTitle}</h2>
          </div>

          <Reveal className="card-grid">
            {credentials.map(item => (
              <article key={item.id} className="card">
                <div className="card__head">
                  <h3 className="card__title card__title--sm">{item.title}</h3>
                  <span className="card__meta">{item.year}</span>
                </div>
                <div>
                  <p className="card__sub">{item.issuer}</p>
                  {item.detail && (
                    <p className="card__body" style={{ marginTop: '0.75rem' }}>
                      {item.detail}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- Awards & languages ------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.about.awardsEyebrow}</p>
              <h2>{t.about.awardsTitle}</h2>
            </div>

            <div className="rows">
              {awards.map(award => (
                <div key={award.id} className="row">
                  <div className="row__key">{formatPeriod(award.period)}</div>
                  <div className="row__value">
                    <strong>{award.title}</strong>
                    {award.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.about.talksEyebrow}</p>
              <h2>{t.about.talksTitle}</h2>
            </div>

            <div className="rows">
              <div className="row">
                <div className="row__key">2023</div>
                <div className="row__value">{t.about.talkSpeaker}</div>
              </div>
              <div className="row">
                <div className="row__key">2022</div>
                <div className="row__value">{t.about.talkJudge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.about.languagesEyebrow}</p>
              <h2>{t.about.languagesTitle}</h2>
              <p className="section__lead">{t.about.languagesLead}</p>
            </div>

            <div className="rows">
              {spokenLanguages.map(language => (
                <div key={language.id} className="row">
                  <div className="row__key">{language.name}</div>
                  <div className="row__value">{language.level}</div>
                </div>
              ))}
              <div className="row">
                <div className="row__key">{t.about.languagesAlsoKey}</div>
                <div className="row__value">{t.about.languagesAlsoValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Beyond work --------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.about.outsideEyebrow}</p>
              <h2>{t.about.outsideTitle}</h2>
            </div>

            <div className="rows">
              <div className="row">
                <div className="row__key">{t.about.volunteeringKey}</div>
                <div className="row__value">
                  <strong>{t.about.volunteeringTitle}</strong>
                  {t.about.volunteeringValue}
                </div>
              </div>
              <div className="row">
                <div className="row__key">{t.about.communityKey}</div>
                <div className="row__value">
                  <strong>{t.about.communityTitle}</strong>
                  {t.about.communityValue}
                </div>
              </div>
              <div className="row">
                <div className="row__key">{t.about.offScreenKey}</div>
                <div className="row__value">{t.about.offScreenValue}</div>
              </div>
              <div className="row">
                <div className="row__key">{t.about.basedInKey}</div>
                <div className="row__value">{t.profile.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
