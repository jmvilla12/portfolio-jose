import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
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

/**
 * True once the element has scrolled into view. Latches on first intersection:
 * reveals play once and never replay when you scroll back up.
 */
export const useInView = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null)
  // Without observer support the content starts visible rather than staying
  // hidden forever. Decided at init so the effect only ever subscribes.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === 'undefined'
  )

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return

    let delivered = false

    const observer = new IntersectionObserver(
      entries => {
        delivered = true
        if (entries.some(entry => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      // Trip slightly before the element is fully on screen, so the animation
      // is already running by the time the reader gets to it.
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)

    // An observer always delivers an initial entry per target, intersecting or
    // not. Some environments (occluded frames, hidden tabs, screenshot
    // tooling) never deliver one — fail open there rather than leaving the
    // content stranded at opacity 0.
    const failOpen = window.setTimeout(() => {
      if (!delivered) setInView(true)
    }, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(failOpen)
    }
  }, [threshold, inView])

  return { ref, inView }
}

/**
 * Counts from zero up to the leading integer of `value`, preserving whatever
 * suffix follows it ("2+" -> "0+".."2+"). Values with no leading digits
 * ("Sept. 2026") are passed straight through, never animated.
 */
export const useCountUp = (value: string, active: boolean, duration = 1100) => {
  const match = /^(\d+)(.*)$/.exec(value)
  const target = match ? Number(match[1]) : null
  const suffix = match ? match[2] : ''

  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (target === null || !active || reduced) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic — fast off the mark, settles gently on the final figure.
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration, reduced])

  // Nothing numeric to count, or motion is off — show the real figure.
  if (target === null || reduced) return value
  return `${active ? current : 0}${suffix}`
}
