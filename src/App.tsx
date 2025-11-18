import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout'
import { Home, CVPage } from '@pages/index'
import '@styles/main.css'

// Main App component
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Layout>
  )
}

export default App
