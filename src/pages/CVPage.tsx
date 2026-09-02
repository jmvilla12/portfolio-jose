import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiDownload } from 'react-icons/fi'
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

        <h1 style={{ fontSize: 'var(--text-h3)' }}>Curriculum Vitae</h1>

        <a
          href={CV_CONFIG.path}
          download={CV_CONFIG.downloadName}
          className="btn btn--primary btn--sm"
        >
          <FiDownload className="btn__icon" aria-hidden />
          Download PDF
        </a>
      </div>

      <div className="cv__frame">
        <object data={CV_CONFIG.path} type="application/pdf">
          <div className="cv__fallback">
            <p>Your browser can't display the PDF inline.</p>
            <a
              href={CV_CONFIG.path}
              download={CV_CONFIG.downloadName}
              className="btn btn--primary"
            >
              <FiDownload className="btn__icon" aria-hidden />
              Download the PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  )
}

export default CVPage
