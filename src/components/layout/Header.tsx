import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { LanguageSwitcher } from '@components/ui'
import { useTheme } from '@hooks/index'
import { LocaleLink, LocaleNavLink, useI18n } from '@i18n/index'
import { APP_CONFIG, NAV_ITEMS, ROUTES } from '@constants/index'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <LocaleLink
          to={ROUTES.home}
          className="header__brand"
          onClick={() => setMenuOpen(false)}
          viewTransition
        >
          <span className="header__brand-mark">/</span>
          {APP_CONFIG.name}
        </LocaleLink>

        <nav
          id="primary-nav"
          className={`header__nav ${menuOpen ? 'is-open' : ''}`}
        >
          {NAV_ITEMS.map(item => (
            <LocaleNavLink
              key={item.to}
              to={item.to}
              end={item.to === ROUTES.home}
              onClick={() => setMenuOpen(false)}
              viewTransition
              className={({ isActive }) =>
                `header__link ${isActive ? 'is-active' : ''}`
              }
            >
              {t.nav[item.key]}
            </LocaleNavLink>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="icon-button"
            type="button"
            aria-label={
              theme === 'dark' ? t.header.switchToLight : t.header.switchToDark
            }
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(open => !open)}
            className="icon-button header__burger"
            type="button"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
