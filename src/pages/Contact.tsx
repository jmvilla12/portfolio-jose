import { FaTools, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SocialLinks } from '@components/ui'
import '@styles/pages/construction.css'

const Contact = () => {
  return (
    <div className="construction-page">
      <div className="container">
        <div className="construction-content">
          <div className="construction-icon">
            <FaTools />
          </div>
          <h1 className="construction-title">Contact en Construction</h1>
          <p className="construction-description">
            Un formulaire de contact sera bientôt disponible. En attendant,
            n'hésitez pas à me contacter directement via les liens ci-dessous.
          </p>

          <div className="construction-contact">
            <h3>Me contacter dès maintenant :</h3>
            <div className="temp-contact">
              <SocialLinks variant="default" showEmail={true} />
            </div>
          </div>

          <div className="construction-features">
            <h3>Bientôt disponible :</h3>
            <ul>
              <li>
                <FaEnvelope className="feature-icon" />
                Formulaire de contact intégré
              </li>
              <li>
                <FaLinkedin className="feature-icon" />
                Calendrier de rendez-vous
              </li>
              <li>
                <FaGithub className="feature-icon" />
                Statut de disponibilité en temps réel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
