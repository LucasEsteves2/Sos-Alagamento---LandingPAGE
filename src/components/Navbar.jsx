import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Logo } from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <Logo />
          <span>
            SOS<em>Alagamento</em>
          </span>
        </a>

        <div className="nav-links">
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#comunidade">Comunidade</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </div>

        <div className="nav-actions">
          <a href="#download" className="btn btn-primary nav-cta">
            Baixar o app
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
