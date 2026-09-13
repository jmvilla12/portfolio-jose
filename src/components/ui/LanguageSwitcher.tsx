import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { LOCALE_NAMES, LOCALES, persistLocale, useI18n } from '@i18n/index'
import type { Locale } from '@i18n/index'
import { LOCALE_COUNTRY } from '@i18n/types'
import Flag from './Flag'

/**
 * Switching language changes the URL, not just local state: `/fr/projects`
 * becomes `/en/projects`, so the visitor stays on the page they were reading
 * and the result is shareable. The choice is remembered for the next visit.
 *
 * A menu rather than a row of buttons, so the header stays the same width
 * however many languages the site grows to.
 */
const LanguageSwitcher = () => {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const { pathname, search, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    // Escape returns focus to the toggle rather than dropping it on <body>,
    // so keyboard users don't lose their place in the header.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const switchTo = (next: Locale) => {
    setOpen(false)
    if (next === locale) return
    persistLocale(next)
    const rest = pathname.replace(/^\/[^/]+/, '')
    navigate(`/${next}${rest}${search}${hash}`, {
      replace: true,
      viewTransition: true,
    })
  }

  return (
    <div className="lang" ref={containerRef}>
      <button
        ref={toggleRef}
        type="button"
        className="lang__toggle"
        onClick={() => setOpen(isOpen => !isOpen)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t.header.language}: ${LOCALE_NAMES[locale]}`}
      >
        <Flag country={LOCALE_COUNTRY[locale]} />
        <span className="lang__code">{locale.toUpperCase()}</span>
        <FiChevronDown className="lang__caret" aria-hidden />
      </button>

      {open && (
        <div className="lang__menu" role="menu">
          {LOCALES.map(option => (
            <button
              key={option}
              type="button"
              role="menuitem"
              className={`lang__option ${option === locale ? 'is-active' : ''}`}
              onClick={() => switchTo(option)}
              lang={option}
            >
              <Flag country={LOCALE_COUNTRY[option]} />
              <span className="lang__code">{option.toUpperCase()}</span>
              <span className="lang__name">{LOCALE_NAMES[option]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
