import { FaTools } from 'react-icons/fa'
import '@styles/pages/construction.css'

const About = () => {
  return (
    <div className="construction-page">
      <div className="construction-content">
        <div className="construction-icon">
          <FaTools />
        </div>
        <h1 className="construction-title">Page en Construction</h1>
        <p className="construction-description">
          Cette page est actuellement en développement. Revenez bientôt pour
          découvrir plus d'informations sur mon parcours et mes expériences.
        </p>
        <div className="construction-features">
          <h3>Bientôt disponible :</h3>
          <ul>
            <li>Mon parcours académique détaillé</li>
            <li>Mes expériences professionnelles</li>
            <li>Mes centres d'intérêt et hobbies</li>
            <li>Mes certifications et formations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
