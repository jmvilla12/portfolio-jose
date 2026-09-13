// Portfolio configuration.
//
// Only language-independent values live here. Anything that would read
// differently in French (role, tagline, availability, nav labels) is in the
// dictionaries under `src/i18n/`.

import type { Locale } from '@i18n/types'

export const APP_CONFIG = {
  name: 'Jose Villa',
  shortName: 'JV',
  firstName: 'Jose',
  lastName: 'Villa',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/jmvilla12',
  linkedin: 'https://linkedin.com/in/jose-manuel-villa-romero',
  email: 'josemvilla12@gmail.com',
  phone: '+33 7 43 54 90 42',
  phoneHref: 'tel:+33743549042',
} as const

/** App paths, without the locale segment — add it with `useLocalePath`. */
export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
  cv: '/cv',
} as const

/** `key` indexes `t.nav`, so the labels follow the active language. */
export const NAV_ITEMS = [
  { key: 'home', to: ROUTES.home },
  { key: 'projects', to: ROUTES.projects },
  { key: 'about', to: ROUTES.about },
  { key: 'contact', to: ROUTES.contact },
] as const

// --- CV ---------------------------------------------------------------------

/**
 * The CV PDFs that actually exist in `public/`. A locale missing from this map
 * falls back to `CV_FALLBACK_*`, and the CV page then labels the document with
 * the language it really served — the site never offers a translation it does
 * not have. Adding `Jose_Villa_CV_EN.pdf` to `public/` is a one-line change.
 */
const CV_FILES: Partial<Record<Locale, string>> = {
  en: 'Jose_Villa_CV_EN.pdf',
  fr: 'Jose_Villa_CV_FR.pdf',
  // `Jose_Villa_CV_ES.pdf` is already in `public/`; it gets wired up here the
  // moment 'es' joins LOCALES.
}

const CV_FALLBACK_LOCALE: Locale = 'en'
const CV_FALLBACK_FILE = 'Jose_Villa_CV_EN.pdf'

export interface ResolvedCV {
  path: string
  downloadName: string
  /** Language of the document served, which may not be the UI language. */
  documentLocale: Locale
}

export const resolveCV = (locale: Locale): ResolvedCV => {
  const file = CV_FILES[locale]

  return file
    ? { path: `/${file}`, downloadName: file, documentLocale: locale }
    : {
        path: `/${CV_FALLBACK_FILE}`,
        downloadName: CV_FALLBACK_FILE,
        documentLocale: CV_FALLBACK_LOCALE,
      }
}
