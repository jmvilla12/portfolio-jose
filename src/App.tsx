import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout'
import { Home, CVPage, About, Projects, Contact } from '@pages/index'
import '@styles/main.css'

// Main App component
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
