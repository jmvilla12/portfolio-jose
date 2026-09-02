import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { CV_CONFIG, ROUTES } from '@constants/index'

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
  const sizeClass = size === 'sm' ? 'btn--sm' : ''

  const download = (
    <a
      key="download"
      href={CV_CONFIG.path}
      download={CV_CONFIG.downloadName}
      className={`btn btn--ghost ${sizeClass}`}
    >
      <FiDownload className="btn__icon" aria-hidden />
      Download CV
    </a>
  )

  const view = (
    <Link key="view" to={ROUTES.cv} className={`btn btn--primary ${sizeClass}`}>
      View CV
      <FiArrowUpRight className="btn__icon" aria-hidden />
    </Link>
  )

  return (
    <div className={`btn-row ${className}`}>
      {variant !== 'download' && view}
      {variant !== 'view' && download}
    </div>
  )
}

export default CVButton
