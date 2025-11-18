import { SOCIAL_LINKS } from '@constants/index'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Jose Villa. All rights reserved.</p>
        <div className="social-links">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
