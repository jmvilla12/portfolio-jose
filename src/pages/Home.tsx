import { Button, ProjectCard } from '@components/ui'
import { PROJECTS } from '@data/index'
import { useMediaQuery } from '@hooks/index'

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Jose Villa, a passionate developer creating amazing digital
          experiences
        </p>
        <Button variant="primary" size={isMobile ? 'md' : 'lg'}>
          View My Work
        </Button>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
