import { SocialLinks } from '@components/ui'
import { useI18n } from '@i18n/index'
import { APP_CONFIG } from '@constants/index'

const Heart = ({ label }: { label: string }) => (
  <svg
    className="footer__heart"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={label}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__note">
          <p className="footer__made">
            {t.footer.madeWith} <Heart label={t.footer.love} />{' '}
            {t.footer.madeBy} {APP_CONFIG.name}
          </p>
          <p className="footer__meta">
            {t.profile.location} · © {new Date().getFullYear()} ·{' '}
            {t.footer.builtWith}
          </p>
        </div>

        <SocialLinks showEmail />
      </div>
    </footer>
  )
}

export default Footer
