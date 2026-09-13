import { useId } from 'react'
import type { CountryCode } from '@i18n/types'

interface FlagProps {
  country: CountryCode
  className?: string
}

/**
 * Inline 3:2 flags. Deliberately not a library: three flags cost ~30 lines
 * here, whereas `react-country-flag` either pulls each SVG from a third-party
 * CDN at render time (an extra request and a visible flash in the header) or
 * falls back to flag emoji, which Windows does not render at all — it shows
 * the two letters instead.
 *
 * Decorative: the language name next to it carries the meaning, so these are
 * hidden from assistive tech.
 */
const Flag = ({ country, className = '' }: FlagProps) => {
  // The Union Jack counterchange needs a clip path, and this component renders
  // more than once per page, so the id has to be unique per instance.
  const clipId = useId()

  return (
    <svg
      viewBox="0 0 60 40"
      className={`flag ${className}`}
      role="presentation"
      aria-hidden
      focusable="false"
    >
      {country === 'FR' && (
        <>
          <rect width="20" height="40" fill="#002395" />
          <rect x="20" width="20" height="40" fill="#ffffff" />
          <rect x="40" width="20" height="40" fill="#ED2939" />
        </>
      )}

      {country === 'ES' && (
        <>
          <rect width="60" height="40" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
        </>
      )}

      {country === 'GB' && (
        <>
          <clipPath id={clipId}>
            <path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z" />
          </clipPath>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#ffffff" strokeWidth="8" />
          <path
            d="M0,0 L60,40 M60,0 L0,40"
            clipPath={`url(#${clipId})`}
            stroke="#C8102E"
            strokeWidth="5"
          />
          <path d="M30,0 v40 M0,20 h60" stroke="#ffffff" strokeWidth="13" />
          <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="8" />
        </>
      )}
    </svg>
  )
}

export default Flag
