import { FaTools, FaCode, FaMobile, FaBrain } from 'react-icons/fa'
import '@styles/pages/construction.css'

const Projects = () => {
  return (
    <div className="construction-page">
      <div className="construction-content">
        <div className="construction-icon">
          <FaTools />
        </div>
        <h1 className="construction-title">Projets en Construction</h1>
        <p className="construction-description">
          Cette section sera bientôt remplie avec mes projets les plus
          intéressants. En attendant, vous pouvez consulter mon profil GitHub
          pour voir mes contributions récentes.
        </p>
        <div className="construction-features">
          <h3>Types de projets à venir :</h3>
          <ul>
            <li>
              <FaCode className="feature-icon" />
              Applications Web (React, Vue, TypeScript)
            </li>
            <li>
              <FaMobile className="feature-icon" />
              Applications Mobiles (Flutter)
            </li>
            <li>
              <FaBrain className="feature-icon" />
              Projets d'Intelligence Artificielle
            </li>
            <li>
              <FaCode className="feature-icon" />
              Systèmes Embarqués et IoT
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
