import { SocialLinks } from '@components/ui'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Built with ❤️ by Jose Villa. All rights reserved.</p>
        <SocialLinks variant="footer" showEmail={true} />
      </div>
    </footer>
  )
}

export default Footer
