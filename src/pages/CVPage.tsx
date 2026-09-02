import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi'
import { CV_CONFIG } from '@constants/index'

const CVPage = () => {
  const navigate = useNavigate()

  return (
    <div className="container cv">
      <div className="cv__bar">
        <button
          onClick={() => navigate(-1)}
          className="btn btn--quiet"
          type="button"
        >
          <FiArrowLeft className="btn__icon" aria-hidden />
          Back
        </button>

        <h1 className="cv__title">Curriculum Vitae</h1>

        <div className="btn-row">
          <a
            href={CV_CONFIG.path}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
          >
            <FiExternalLink className="btn__icon" aria-hidden />
            Open in new tab
          </a>
          <a
            href={CV_CONFIG.path}
            download={CV_CONFIG.downloadName}
            className="btn btn--primary btn--sm"
          >
            <FiDownload className="btn__icon" aria-hidden />
            Download PDF
          </a>
        </div>
      </div>

      <div className="cv__frame">
        {/* `object` renders the browser's PDF viewer and falls back to its
            children when the browser can't — which is most mobile browsers. */}
        <object
          data={CV_CONFIG.path}
          type="application/pdf"
          aria-label="Curriculum Vitae"
        >
          <div className="cv__fallback">
            <p>
              Your browser can't display PDFs inline. Open the CV in a new tab
              or download it instead.
            </p>
            <div className="btn-row">
              <a
                href={CV_CONFIG.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <FiExternalLink className="btn__icon" aria-hidden />
                Open
              </a>
              <a
                href={CV_CONFIG.path}
                download={CV_CONFIG.downloadName}
                className="btn btn--primary"
              >
                <FiDownload className="btn__icon" aria-hidden />
                Download
              </a>
            </div>
          </div>
        </object>
      </div>

      <p className="cv__lang">Document language: French</p>
    </div>
  )
}

export default CVPage
