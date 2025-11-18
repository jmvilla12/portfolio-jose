import { FaDownload, FaEye } from 'react-icons/fa'
import { CV_CONFIG } from '@constants/index'
import '@styles/components/cv-button.css'

interface CVButtonProps {
  variant?: 'download' | 'view' | 'both'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const CVButton = ({
  variant = 'both',
  size = 'md',
  className = '',
}: CVButtonProps) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = CV_CONFIG.path
    link.download = CV_CONFIG.downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    window.open('/cv', '_blank', 'noopener,noreferrer')
  }

  const baseClass = 'cv-button'
  const sizeClass = `cv-button--${size}`

  if (variant === 'download') {
    return (
      <button
        onClick={handleDownload}
        className={`${baseClass} ${baseClass}--download ${sizeClass} ${className}`}
        aria-label="Télécharger mon CV"
        type="button"
      >
        <FaDownload className="cv-button__icon" />
        <span>Télécharger CV</span>
      </button>
    )
  }

  if (variant === 'view') {
    return (
      <button
        onClick={handleView}
        className={`${baseClass} ${baseClass}--view ${sizeClass} ${className}`}
        aria-label="Voir mon CV"
        type="button"
      >
        <FaEye className="cv-button__icon" />
        <span>Voir CV</span>
      </button>
    )
  }

  return (
    <div className={`cv-button-group cv-button-group--${size} ${className}`}>
      <button
        onClick={handleView}
        className={`${baseClass} ${baseClass}--view ${sizeClass}`}
        aria-label="Voir mon CV"
        type="button"
      >
        <FaEye className="cv-button__icon" />
        <span>Voir CV</span>
      </button>
      <button
        onClick={handleDownload}
        className={`${baseClass} ${baseClass}--download ${sizeClass}`}
        aria-label="Télécharger mon CV"
        type="button"
      >
        <FaDownload className="cv-button__icon" />
        <span>Télécharger</span>
      </button>
    </div>
  )
}

export default CVButton
