import { SocialLinks } from '@components/ui'
import { APP_CONFIG } from '@constants/index'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__note">
          <strong>{APP_CONFIG.name}</strong>
          {APP_CONFIG.location} · © {new Date().getFullYear()} · Built with
          React, TypeScript and no UI framework.
        </div>

        <SocialLinks showEmail />
      </div>
    </footer>
  )
}

export default Footer
