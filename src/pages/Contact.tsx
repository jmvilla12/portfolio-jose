import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { CVButton, Reveal } from '@components/ui'
import { useI18n } from '@i18n/index'
import { SOCIAL_LINKS } from '@constants/index'

const Contact = () => {
  const { t } = useI18n()

  const channels = [
    {
      label: t.contact.emailLabel,
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: FiMail,
    },
    {
      label: t.contact.phoneLabel,
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

  return (
    <>
      <header className="container page-head">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1 className="page-head__title">{t.contact.title}</h1>
        <p className="page-head__lead">{t.contact.lead}</p>
      </header>

      <section className="section section--flush">
        <div className="container">
          <Reveal className="contact-grid">
            {channels.map(({ label, value, href, icon: Icon }) => (
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__aside">
              <p className="eyebrow">{t.contact.availabilityEyebrow}</p>
              <h2>{t.contact.availabilityTitle}</h2>
            </div>

            <div className="rows">
              <div className="row">
                <div className="row__key">{t.contact.contractKey}</div>
                <div className="row__value">
                  <strong>{t.contact.contractTitle}</strong>
                  {t.contact.contractValue}
                </div>
              </div>
              <div className="row">
                <div className="row__key">{t.contact.datesKey}</div>
                <div className="row__value">{t.contact.datesValue}</div>
              </div>
              <div className="row">
                <div className="row__key">{t.contact.tracksKey}</div>
                <div className="row__value">{t.contact.tracksValue}</div>
              </div>
              <div className="row">
                <div className="row__key">{t.contact.locationKey}</div>
                <div className="row__value">
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <FiMapPin aria-hidden />
                    {t.profile.location} — {t.contact.locationValue}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__key">{t.contact.languagesKey}</div>
                <div className="row__value">{t.contact.languagesValue}</div>
              </div>
              <div className="row">
                <div className="row__key">{t.contact.afterKey}</div>
                <div className="row__value">{t.contact.afterValue}</div>
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
