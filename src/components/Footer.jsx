import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        © {new Date().getFullYear()} Mica Studio. All rights reserved.
      </p>
      <p className="footer-tagline">
        Handcrafted with love
      </p>
    </footer>
  )
}


