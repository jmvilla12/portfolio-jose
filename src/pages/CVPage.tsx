import { FaDownload, FaArrowLeft } from 'react-icons/fa'
import { CV_CONFIG } from '@constants/index'
import '@styles/pages/cv-page.css'

const CVPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = CV_CONFIG.path
    link.download = CV_CONFIG.downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="cv-page">
      <div className="cv-page__header">
        <button
          onClick={handleGoBack}
          className="cv-page__back-btn"
          aria-label="Retour"
          type="button"
        >
          <FaArrowLeft className="cv-page__back-icon" />
          <span>Retour</span>
        </button>

        <h1 className="cv-page__title">Mon CV</h1>

        <button
          onClick={handleDownload}
          className="cv-page__download-btn"
          aria-label="Télécharger le CV"
          type="button"
        >
          <FaDownload className="cv-page__download-icon" />
          <span>Télécharger</span>
        </button>
      </div>

      <div className="cv-page__content">
        <div className="cv-page__pdf-container">
          <embed
            src={CV_CONFIG.path}
            type="application/pdf"
            className="cv-page__pdf-embed"
            width="100%"
            height="100%"
          />

          {/* Fallback for browsers that don't support embed */}
          <div className="cv-page__fallback">
            <p>Votre navigateur ne peut pas afficher le PDF.</p>
            <button
              onClick={handleDownload}
              className="cv-page__fallback-btn"
              type="button"
            >
              Télécharger le PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVPage
