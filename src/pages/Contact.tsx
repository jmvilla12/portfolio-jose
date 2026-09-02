import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { CVButton } from '@components/ui'
import { APP_CONFIG, SOCIAL_LINKS } from '@constants/index'

const CHANNELS = [
  {
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: SOCIAL_LINKS.phone,
    href: SOCIAL_LINKS.phoneHref,
    icon: FiPhone,
  },
  {
    label: 'LinkedIn',
    value: 'jose-manuel-villa-romero',
    href: SOCIAL_LINKS.linkedin,
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'jmvilla12',
    href: SOCIAL_LINKS.github,
    icon: FiGithub,
  },
]

const Contact = () => {
  return (
    <>
      <header className="container page-head">
        <p className="eyebrow">Contact</p>
        <h1 className="page-head__title">Let's talk</h1>
        <p className="page-head__lead">
          The fastest way to reach me is email. I read everything and reply to
          anything concrete — alternance offers, freelance work, or a question
          about something on this site.
        </p>
      </header>

      <section className="section section--flush">
        <div className="container">
          <div className="contact-grid">
            {CHANNELS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="contact-card"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <span className="contact-card__icon">
                  <Icon aria-hidden />
                </span>
                <span className="contact-card__label">{label}</span>
                <span className="contact-card__value">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">Availability</p>
              <h2>What I'm looking for</h2>
            </div>

            <div className="rows">
              <div className="row">
                <div className="row__key">Contract</div>
                <div className="row__value">
                  <strong>Alternance — 10 to 12 months</strong>
                  Contrat d'apprentissage or professionnalisation, starting
                  September 2026.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Rhythm</div>
                <div className="row__value">
                  Sept.–Feb.: Monday to Wednesday at school, Thursday and Friday
                  in company. Full-time in company from March 2027.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Tracks</div>
                <div className="row__value">
                  Fullstack, backend, frontend, data, or embedded systems — the
                  hardware background is real, not decorative.
                </div>
              </div>
              <div className="row">
                <div className="row__key">Location</div>
                <div className="row__value">
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <FiMapPin aria-hidden />
                    {APP_CONFIG.location} — open to relocation within France and
                    to remote roles.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__key">Languages</div>
                <div className="row__value">
                  French and English at C1, Spanish native.
                </div>
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>
              <CVButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
