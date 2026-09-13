import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useI18n } from '@i18n/index'
import { SOCIAL_LINKS } from '@constants/index'

interface SocialLinksProps {
  /** `compact` renders icon-only links for tight spaces. */
  variant?: 'default' | 'compact'
  showEmail?: boolean
  className?: string
}

const SocialLinks = ({
  variant = 'default',
  showEmail = false,
  className = '',
}: SocialLinksProps) => {
  const { t } = useI18n()

  // GitHub and LinkedIn are product names and stay as they are in every
  // language; only "Email" has a translation.
  const links = [
    { label: 'GitHub', href: SOCIAL_LINKS.github, icon: FiGithub },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: FiLinkedin },
    ...(showEmail
      ? [
          {
            label: t.contact.emailLabel,
            href: `mailto:${SOCIAL_LINKS.email}`,
            icon: FiMail,
          },
        ]
      : []),
  ]

  return (
    <div
      className={`social ${variant === 'compact' ? 'social--compact' : ''} ${className}`}
    >
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          className="social__link"
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="social__icon" aria-hidden />
          <span className="social__text">{label}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
