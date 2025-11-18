import { SocialLinks } from '@components/ui'
import { APP_CONFIG, TECHNICAL_SKILLS } from '@constants/index'
import '@styles/pages/home.css'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-photo">
              <img
                src="/foto_jose.jpg"
                alt="Jose Villa Romero"
                className="profile-image"
              />
            </div>

            <div className="professional-info">
              <h1 className="hero-title">{APP_CONFIG.fullName}</h1>
              <p className="hero-subtitle">{APP_CONFIG.tagline}</p>
              <div className="hero-meta">
                <span className="location">{APP_CONFIG.location}</span>
                <span className="education">{APP_CONFIG.education}</span>
              </div>
              <p className="hero-description">{APP_CONFIG.description}</p>
            </div>
          </div>

          <div className="hero-social">
            <SocialLinks variant="hero" showEmail={true} />
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Competences Techniques</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Langages de Programmation</h3>
              <div className="tech-tags">
                {TECHNICAL_SKILLS.languages.map((skill, index) => (
                  <span key={index} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Outils & Technologies</h3>
              <div className="tech-tags">
                {TECHNICAL_SKILLS.tools.map((skill, index) => (
                  <span key={index} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Domaines de Specialisation</h3>
              <div className="tech-tags">
                {TECHNICAL_SKILLS.domains.map((skill, index) => (
                  <span key={index} className="tech-tag specialty">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
