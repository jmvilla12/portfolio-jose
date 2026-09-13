// Utility functions for the portfolio

import type { Locale } from '@i18n/types'
import type { Period } from '@src/types'

/** `'2026-04'` -> `{ year: 2026, month: 4 }`; `'2026'` -> `{ year: 2026 }`. */
const parsePeriodPart = (value: string) => {
  const [year, month] = value.split('-')
  return {
    year: Number(year),
    month: month === undefined ? undefined : Number(month),
  }
}

/**
 * Renders a `Period` in the given language — "April 2026 — August 2026",
 * "avril 2026 — août 2026". Dates are stored as ISO fragments precisely so
 * they never have to be translated by hand; `Intl` knows the month names for
 * every locale and costs nothing to ship.
 *
 * Year-precision periods are passed through untouched: there is no such thing
 * as a localised "2023".
 */
export const formatPeriod = (
  period: Period,
  locale: Locale,
  presentLabel: string
): string => {
  const start = parsePeriodPart(period.start)
  const end = period.end ? parsePeriodPart(period.end) : undefined

  if (start.month === undefined) {
    if (period.ongoing) return `${start.year} — ${presentLabel}`
    if (end) return `${start.year} — ${end.year}`
    return String(start.year)
  }

  const monthYear = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
  const startLabel = monthYear.format(Date.UTC(start.year, start.month - 1, 1))

  if (period.ongoing) return `${startLabel} — ${presentLabel}`
  if (end?.month === undefined) return startLabel

  const endLabel = monthYear.format(Date.UTC(end.year, end.month - 1, 1))

  // Within a single year the year is stated once: "November — December 2024".
  if (start.year === end.year) {
    const monthOnly = new Intl.DateTimeFormat(locale, {
      month: 'long',
      timeZone: 'UTC',
    })
    const startMonth = monthOnly.format(
      Date.UTC(start.year, start.month - 1, 1)
    )
    return start.month === end.month ? endLabel : `${startMonth} — ${endLabel}`
  }

  return `${startLabel} — ${endLabel}`
}

export const formatDate = (date: string, locale: Locale): string => {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  })
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const getProjectsByCategory = <T extends { category: string }>(
  projects: T[],
  category: string
): T[] => {
  return projects.filter(project => project.category === category)
}
