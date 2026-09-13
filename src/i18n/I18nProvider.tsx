import { useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { DICTIONARIES, I18nContext } from './store'
import type { Locale } from './types'
import { LOCALES } from './types'

interface I18nProviderProps {
  locale: Locale
  children: ReactNode
}

/**
 * Publishes the active locale, mirrors it onto `<html lang>` and emits the
 * `hreflang` alternates Google uses to tie the language versions together.
 *
 * The locale itself comes from the URL — this component never decides it, so
 * there is exactly one source of truth for what language the page is in.
 */
const I18nProvider = ({ locale, children }: I18nProviderProps) => {
  const { pathname } = useLocation()

  const value = useMemo(() => ({ locale, t: DICTIONARIES[locale] }), [locale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // The path with its locale segment stripped, so each alternate can be built
  // by swapping in its own: `/fr/projects` -> `/projects`.
  const path = pathname.replace(/^\/[^/]+/, '')
  const origin = typeof window === 'undefined' ? '' : window.location.origin

  return (
    <I18nContext value={value}>
      {LOCALES.map(alternate => (
        <link
          key={alternate}
          rel="alternate"
          hrefLang={alternate}
          href={`${origin}/${alternate}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${origin}/en${path}`} />
      {children}
    </I18nContext>
  )
}

export default I18nProvider
