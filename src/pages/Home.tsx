import { Button, ProjectCard } from '@components/ui'
import { PROJECTS } from '@data/index'
import { useMediaQuery } from '@hooks/index'
import { APP_CONFIG } from '@constants/index'
import '@styles/pages/home.css'

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Jose Villa</h1>
          <p className="hero-subtitle">{APP_CONFIG.tagline}</p>
          <p className="hero-description">
            {APP_CONFIG.description}. I specialize in creating beautiful,
            functional, and user-centered digital experiences.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size={isMobile ? 'md' : 'lg'}>
              View My Work
            </Button>
            <Button variant="outline" size={isMobile ? 'md' : 'lg'}>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {PROJECTS.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
