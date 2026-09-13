import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi'
import { useI18n } from '@i18n/index'
import { resolveCV } from '@constants/index'

const CVPage = () => {
  const navigate = useNavigate()
  const { locale, t } = useI18n()
  const cv = resolveCV(locale)

  return (
    <div className="container cv">
      <div className="cv__bar">
        <button
          onClick={() => navigate(-1)}
          className="btn btn--quiet"
          type="button"
        >
          <FiArrowLeft className="btn__icon" aria-hidden />
          {t.actions.back}
        </button>

        <h1 className="cv__title">{t.cv.title}</h1>

        <div className="btn-row">
          <a
            href={cv.path}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
          >
            <FiExternalLink className="btn__icon" aria-hidden />
            {t.actions.openInNewTab}
          </a>
          <a
            href={cv.path}
            download={cv.downloadName}
            className="btn btn--primary btn--sm"
          >
            <FiDownload className="btn__icon" aria-hidden />
            {t.actions.downloadPDF}
          </a>
        </div>
      </div>

      <div className="cv__frame">
        {/* `object` renders the browser's PDF viewer and falls back to its
            children when the browser can't — which is most mobile browsers. */}
        <object
          data={cv.path}
          type="application/pdf"
          aria-label={t.cv.frameLabel}
        >
          <div className="cv__fallback">
            <p>{t.cv.fallback}</p>
            <div className="btn-row">
              <a
                href={cv.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <FiExternalLink className="btn__icon" aria-hidden />
                {t.actions.open}
              </a>
              <a
                href={cv.path}
                download={cv.downloadName}
                className="btn btn--primary"
              >
                <FiDownload className="btn__icon" aria-hidden />
                {t.actions.download}
              </a>
            </div>
          </div>
        </object>
      </div>

      {/* Names the language of the PDF actually served, which is not always the
          language of the page — see `resolveCV`. */}
      <p className="cv__lang">
        {t.cv.documentLanguage}: {t.spokenLanguages[cv.documentLocale].name}
      </p>
    </div>
  )
}

export default CVPage
