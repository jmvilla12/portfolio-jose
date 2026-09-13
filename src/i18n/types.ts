// Locale primitives. Kept in their own module so `data`, `constants` and the
// dictionaries can all depend on it without importing the React context.

export const LOCALES = ['en', 'fr', 'es'] as const

export type Locale = (typeof LOCALES)[number]

/** English is the default: it is what most international employers read. */
export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'locale'

/** Native names, shown in the switcher — a language is always named in itself. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
}

/** ISO country whose flag stands for each language in the switcher. */
export type CountryCode = 'GB' | 'ES' | 'FR'

export const LOCALE_COUNTRY: Record<Locale, CountryCode> = {
  en: 'GB',
  fr: 'FR',
  es: 'ES',
}

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
