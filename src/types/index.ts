// Domain types for the portfolio content.
//
// Every entity is split in two: a `*Base` holding the language-independent
// facts (ids, dates, company names, tech stacks, URLs) that live in
// `src/data/index.ts`, and a `*Copy` holding the prose that lives in the
// dictionaries under `src/i18n/`. The id unions below are what makes a missing
// translation a compile error rather than a silent English fallback.

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'data' | 'embedded'

/**
 * A point or span in time, stored as ISO fragments rather than as a
 * hand-written label, so `formatPeriod` can render it in any language.
 *
 * `'2026'` is year precision, `'2026-04'` is month precision. Mixing the two
 * within one period is not supported — pick the precision you want to show.
 */
export interface Period {
  start: string
  /** Omit for a single point in time. */
  end?: string
  /** Still running — renders the localised "present" instead of an end date. */
  ongoing?: boolean
}

// --- Ids --------------------------------------------------------------------
// Adding an entry means adding its id here first; every dictionary then stops
// compiling until it has been translated.

export type ExperienceId =
  | 'leanpay'
  | 'alta-ai'
  | 'cidt-cinnov'
  | 'met-group'
  | 'mecabot'

export type ProjectId =
  | 'recycling-map'
  | 'ecommerce-microservices'
  | 'usv-coverage'
  | 'enso-prediction'
  | 'vtol-drone'
  | 'image-ocr'
  | 'portfolio'

export type EducationId = 'imt' | 'utp' | 'its'

export type CredentialId =
  | 'stormshield'
  | 'talento-tech'
  | 'fullstack-utp'
  | 'python-michigan'

export type AwardId =
  | 'challenge-entreprendre'
  | 'colfuturo'
  | 'distinguished'
  | 'cooeducar'

export type SkillGroupId =
  | 'frontend'
  | 'backend-data'
  | 'testing'
  | 'security'
  | 'embedded'
  | 'cad-simulation'
  | 'data'

export type SpokenLanguageId = 'es' | 'en' | 'fr'

// --- Experience -------------------------------------------------------------

export interface ExperienceBase {
  id: ExperienceId
  company: string
  period: Period
  current?: boolean
  technologies: string[]
}

export interface ExperienceCopy {
  position: string
  location: string
  description: string
  highlights: string[]
}

export type Experience = ExperienceBase & ExperienceCopy

// --- Projects ---------------------------------------------------------------

export interface ProjectBase {
  id: ProjectId
  period: Period
  technologies: string[]
  category: ProjectCategory
  githubUrl?: string
  demoUrl?: string
  /** Open-access publication or repository record — not a code repository. */
  publicationUrl?: string
}

export interface ProjectCopy {
  title: string
  context: string
  description: string
  highlights?: string[]
  award?: string
}

export type Project = ProjectBase & ProjectCopy

// --- Education --------------------------------------------------------------

export interface EducationBase {
  id: EducationId
  /** Institutions keep their own name in every language. */
  institution: string
  period: Period
}

export interface EducationCopy {
  degree: string
  location: string
  detail?: string
}

export type Education = EducationBase & EducationCopy

// --- Certifications ---------------------------------------------------------

export interface CredentialBase {
  id: CredentialId
}

export interface CredentialCopy {
  title: string
  issuer: string
  /**
   * Free text rather than a `Period`: these read "Valid to 2029" as often as
   * they read "2024", which is a label, not a date.
   */
  year: string
  detail?: string
}

export type Credential = CredentialBase & CredentialCopy

// --- Awards -----------------------------------------------------------------

export interface AwardBase {
  id: AwardId
  period: Period
}

export interface AwardCopy {
  title: string
  detail: string
}

export type Award = AwardBase & AwardCopy

// --- Skills -----------------------------------------------------------------

export interface SkillGroupBase {
  id: SkillGroupId
  /** Tool and language names are never translated. */
  skills: string[]
}

export type SkillGroup = SkillGroupBase & { title: string }

// --- Spoken languages -------------------------------------------------------

export interface SpokenLanguage {
  name: string
  level: string
}
