import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { LocaleLink, useI18n } from '@i18n/index'
import { resolveCV, ROUTES } from '@constants/index'

interface CVButtonProps {
  variant?: 'download' | 'view' | 'both'
  size?: 'sm' | 'md'
  className?: string
}

const CVButton = ({
  variant = 'both',
  size = 'md',
  className = '',
}: CVButtonProps) => {
  const { locale, t } = useI18n()
  const cv = resolveCV(locale)
  const sizeClass = size === 'sm' ? 'btn--sm' : ''

  const download = (
    <a
      key="download"
      href={cv.path}
      download={cv.downloadName}
      className={`btn btn--ghost ${sizeClass}`}
    >
      <FiDownload className="btn__icon" aria-hidden />
      {t.actions.downloadCV}
    </a>
  )

  const view = (
    <LocaleLink
      key="view"
      to={ROUTES.cv}
      className={`btn btn--primary ${sizeClass}`}
      viewTransition
    >
      {t.actions.viewCV}
      <FiArrowUpRight className="btn__icon" aria-hidden />
    </LocaleLink>
  )

  return (
    <div className={`btn-row ${className}`}>
      {variant !== 'download' && view}
      {variant !== 'view' && download}
    </div>
  )
}

export default CVButton
