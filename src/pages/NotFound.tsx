import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ROUTES } from '@constants/index'

const NotFound = () => {
  return (
    <div className="container notfound">
      <p className="eyebrow" style={{ minWidth: '12rem' }}>
        Error
      </p>
      <div className="notfound__code">404</div>
      <h1>This page doesn't exist</h1>
      <p className="section__lead" style={{ marginTop: 0 }}>
        The link may be out of date, or the page may have moved.
      </p>
      <Link to={ROUTES.home} className="btn btn--ghost">
        <FiArrowLeft className="btn__icon" aria-hidden />
        Back to home
      </Link>
    </div>
  )
}

export default NotFound
