// Locale state and the hooks that read it. Kept free of JSX so the provider
// component can live on its own and `react-refresh/only-export-components`
// stays quiet.

import { createContext, useCallback, useContext, useMemo } from 'react'
import {
  AWARDS,
  CREDENTIALS,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILL_GROUPS,
  SPOKEN_LANGUAGES,
} from '@data/index'
import { formatPeriod } from '@utils/index'
import type {
  Award,
  Credential,
  Education,
  Experience,
  Period,
  Project,
  SkillGroup,
} from '@src/types'
import { en } from './en'
import type { Dictionary } from './en'
import { fr } from './fr'
import type { Locale } from './types'
import { DEFAULT_LOCALE, isLocale, LOCALE_STORAGE_KEY } from './types'

export const DICTIONARIES: Record<Locale, Dictionary> = { en, fr }

export interface I18nValue {
  locale: Locale
  /** The active dictionary. Named `t` for brevity at call sites. */
  t: Dictionary
}

export const I18nContext = createContext<I18nValue>({
  locale: DEFAULT_LOCALE,
  t: en,
})

export const useI18n = () => useContext(I18nContext)

// --- Detection & persistence ------------------------------------------------

/**
 * Precedence: an explicit choice the visitor already made, then what their
 * browser asks for, then English. The URL always wins over both — it is read
 * by the router before this is ever consulted, so a shared `/fr/projects` link
 * stays French for a visitor whose browser is in English.
 */
export const detectLocale = (): Locale => {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // Private mode or blocked storage — fall through to the browser languages.
  }

  const requested = navigator.languages ?? [navigator.language]
  for (const tag of requested) {
    const base = tag.split('-')[0]
    if (isLocale(base)) return base
  }

  return DEFAULT_LOCALE
}

export const persistLocale = (locale: Locale) => {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Nothing to do — the URL still carries the locale for this session.
  }
}

// --- Derived helpers --------------------------------------------------------

/**
 * Prefixes an app path from `ROUTES` with the active locale.
 * `'/'` becomes `/en`, `'/about'` becomes `/en/about`.
 */
export const useLocalePath = () => {
  const { locale } = useI18n()
  return useCallback(
    (path: string) => (path === '/' ? `/${locale}` : `/${locale}${path}`),
    [locale]
  )
}

/** Renders a `Period` in the active language. */
export const useFormatPeriod = () => {
  const { locale, t } = useI18n()
  return useCallback(
    (period: Period) => formatPeriod(period, locale, t.date.present),
    [locale, t]
  )
}

/**
 * Merges the language-independent facts in `@data` with the prose in the
 * active dictionary. The id unions in `@src/types` guarantee every base entry
 * has a matching translation, so the lookups below cannot miss.
 */
export const useContent = () => {
  const { t } = useI18n()

  return useMemo(
    () => ({
      experience: EXPERIENCE.map(
        (base): Experience => ({
          ...base,
          ...t.experience[base.id],
        })
      ),
      projects: PROJECTS.map(
        (base): Project => ({
          ...base,
          ...t.projects[base.id],
        })
      ),
      education: EDUCATION.map(
        (base): Education => ({
          ...base,
          ...t.education[base.id],
        })
      ),
      credentials: CREDENTIALS.map(
        (base): Credential => ({
          ...base,
          ...t.credentials[base.id],
        })
      ),
      awards: AWARDS.map((base): Award => ({ ...base, ...t.awards[base.id] })),
      skillGroups: SKILL_GROUPS.map(
        (base): SkillGroup => ({
          ...base,
          title: t.skillGroups[base.id],
        })
      ),
      spokenLanguages: SPOKEN_LANGUAGES.map(id => ({
        id,
        ...t.spokenLanguages[id],
      })),
    }),
    [t]
  )
}
