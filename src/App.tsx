import { Route, Routes } from 'react-router-dom'
import { Layout } from '@components/layout'
import { useScrollToTop } from '@hooks/index'
import { About, Contact, CVPage, Home, NotFound, Projects } from '@pages/index'
import { ROUTES } from '@constants/index'

function App() {
  useScrollToTop()

  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.projects} element={<Projects />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.cv} element={<CVPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
