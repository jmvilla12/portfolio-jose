import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SOCIAL_LINKS } from '@constants/index'

interface SocialLinksProps {
  variant?: 'default' | 'hero' | 'footer'
  showEmail?: boolean
}

const SocialLinks = ({
  variant = 'default',
  showEmail = false,
}: SocialLinksProps) => {
  const baseClass = 'social-links'
  const variantClass = `${baseClass}--${variant}`

  const handleSocialClick = (url: string) => {
    // Analytics tracking could be added here
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`${baseClass} ${variantClass}`}>
      <button
        onClick={() => handleSocialClick(SOCIAL_LINKS.github)}
        className="social-link social-link--github"
        aria-label="Visit my GitHub profile"
        type="button"
      >
        <FaGithub className="social-icon" />
        <span className="social-text">GitHub</span>
      </button>

      <button
        onClick={() => handleSocialClick(SOCIAL_LINKS.linkedin)}
        className="social-link social-link--linkedin"
        aria-label="Visit my LinkedIn profile"
        type="button"
      >
        <FaLinkedin className="social-icon" />
        <span className="social-text">LinkedIn</span>
      </button>

      {showEmail && (
        <button
          onClick={() => handleSocialClick(`mailto:${SOCIAL_LINKS.email}`)}
          className="social-link social-link--email"
          aria-label="Send me an email"
          type="button"
        >
          <FaEnvelope className="social-icon" />
          <span className="social-text">Email</span>
        </button>
      )}
    </div>
  )
}

export default SocialLinks
