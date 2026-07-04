import { Logo } from './Icons.jsx'
import { CONTACT_EMAIL } from '../constants.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="nav-logo">
          <Logo size={28} />
          <span>
            SOS<em>Alagamento</em>
          </span>
        </a>

        <div className="footer-links">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#comunidade">Comunidade</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </div>

        <p className="footer-note">
          © {new Date().getFullYear()} SOS Alagamento. Tecnologia a favor da vida. 💙
        </p>
      </div>
    </footer>
  )
}
