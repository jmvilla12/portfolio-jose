import { CVButton, ExperienceItem, Reveal } from '@components/ui'
import { APP_CONFIG } from '@constants/index'
import {
  AWARDS,
  CREDENTIALS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
} from '@data/index'

const About = () => {
  return (
    <>
      <header className="container page-head">
        <p className="eyebrow">About</p>
        <h1 className="page-head__title">
          Software engineer with a mechatronics past
        </h1>
        <p className="page-head__lead">
          I started in mechatronics in Colombia — engines, PCBs, CAN buses — and
          moved into software without leaving the hardware behind. Today I'm
          finishing an M2 in intelligent, secure and communicating systems at
          IMT Nord Europe, in Lille.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <CVButton />
        </div>
      </header>

      {/* --- Experience --------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">01 — Experience</p>
            <h2>Full history</h2>
          </div>

          <Reveal className="timeline">
            {EXPERIENCE.map(experience => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- Education ---------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">02 — Education</p>
              <h2>Studies</h2>
            </div>

            <Reveal className="timeline">
              {EDUCATION.map(item => (
                <article key={item.id} className="timeline__item">
                  <div className="timeline__period">
                    {item.period}
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
            <p className="eyebrow">03 — Certifications</p>
            <h2>Formal training</h2>
          </div>

          <Reveal className="card-grid">
            {CREDENTIALS.map(item => (
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
              <p className="eyebrow">04 — Recognition</p>
              <h2>Awards</h2>
            </div>

            <div className="rows">
              {AWARDS.map(award => (
                <div key={award.id} className="row">
                  <div className="row__key">{award.year}</div>
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
              <p className="eyebrow">05 — Languages</p>
              <h2>Spoken</h2>
              <p className="section__lead">
                Working daily in French and English, thinking in Spanish.
              </p>
            </div>

            <div className="rows">
              {LANGUAGES.map(language => (
                <div key={language.name} className="row">
                  <div className="row__key">{language.name}</div>
                  <div className="row__value">{language.level}</div>
                </div>
              ))}
              <div className="row">
                <div className="row__key">Also</div>
                <div className="row__value">
                  Portuguese, Italian and German at a beginner level (A1–A2).
                </div>
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
              <p className="eyebrow">06 — Outside work</p>
              <h2>The rest</h2>
            </div>

            <div className="rows">
              <div className="row">
                <div className="row__key">Volunteering</div>
                <div className="row__value">
                  <strong>AeroKiddo (2021, 2024)</strong>
                  Teaching aeronautics to children aged 7–12 through the STEAM
                  methodology, with the UTP aeronautics research group.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Community</div>
                <div className="row__value">
                  <strong>Garde Romaine (2016–2024)</strong>A social project run
                  by students and graduates of the Instituto Técnico Superior in
                  Pereira.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Off-screen</div>
                <div className="row__value">
                  Strength training, football, handball, cooking, partner
                  dancing and picking up new languages.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Based in</div>
                <div className="row__value">{APP_CONFIG.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
