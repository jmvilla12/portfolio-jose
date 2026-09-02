import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { useLocation } from 'react-router-dom'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  // No explicit choice yet — follow the OS preference.
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

/** Theme state, persisted to localStorage and mirrored onto <html>. */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(current => (current === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}

/** Reset scroll position on every route change. */
export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}

/**
 * Subscribe to a media query. Uses useSyncExternalStore rather than
 * state-in-an-effect so the first render already reports the real value.
 */
export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener('change', onChange)
      return () => mediaQuery.removeEventListener('change', onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}
