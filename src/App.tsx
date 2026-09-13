import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { Layout } from '@components/layout'
import { useScrollToTop } from '@hooks/index'
import { detectLocale, I18nProvider, isLocale } from '@i18n/index'
import { About, Contact, CVPage, Home, NotFound, Projects } from '@pages/index'

/** `/` has no language of its own — pick one and get out of the way. */
const RootRedirect = () => <Navigate to={`/${detectLocale()}`} replace />

const LocalisedApp = () => {
  const { locale } = useParams()
  const { pathname, search, hash } = useLocation()
  useScrollToTop()

  // The first segment isn't a language, so this is a pre-i18n link such as
  // `/about`. Keep the rest of the path and prefix the visitor's language,
  // which keeps old bookmarks and any indexed URL working.
  if (!isLocale(locale)) {
    return (
      <Navigate to={`/${detectLocale()}${pathname}${search}${hash}`} replace />
    )
  }

  return (
    <I18nProvider locale={locale}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cv" element={<CVPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </I18nProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:locale/*" element={<LocalisedApp />} />
    </Routes>
  )
}

export default App
