import { FiArrowLeft } from 'react-icons/fi'
import { LocaleLink, useI18n } from '@i18n/index'
import { ROUTES } from '@constants/index'

const NotFound = () => {
  const { t } = useI18n()

  return (
    <div className="container notfound">
      <p className="eyebrow" style={{ minWidth: '12rem' }}>
        {t.notFound.eyebrow}
      </p>
      <div className="notfound__code">404</div>
      <h1>{t.notFound.title}</h1>
      <p className="section__lead" style={{ marginTop: 0 }}>
        {t.notFound.lead}
      </p>
      <LocaleLink to={ROUTES.home} className="btn btn--ghost" viewTransition>
        <FiArrowLeft className="btn__icon" aria-hidden />
        {t.actions.backToHome}
      </LocaleLink>
    </div>
  )
}

export default NotFound
