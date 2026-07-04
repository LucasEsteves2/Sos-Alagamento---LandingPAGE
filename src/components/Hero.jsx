import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import PhoneMap from './PhoneMap.jsx'
import { IconSiren, IconShelter, GooglePlayIcon } from './Icons.jsx'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {val.toLocaleString('pt-BR')}
      <i>{suffix}</i>
    </span>
  )
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.6, 0.35, 1] } },
}

const DROPS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 4) % 100}%`,
  delay: (i * 0.37) % 2.6,
  duration: 2.1 + ((i * 0.13) % 1.2),
}))

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="rain">
          {DROPS.map((d, i) => (
            <span
              key={i}
              style={{ left: d.left, animationDelay: `${d.delay}s`, animationDuration: `${d.duration}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-inner">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-badge">
            <span className="dot" />
            Alertas em tempo real
          </motion.div>

          <motion.h1 variants={item}>
            Fique um passo à frente da <span className="hl">enchente.</span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            O <strong>SOS Alagamento</strong> mostra em um mapa interativo as{' '}
            <strong>sirenes</strong>, as <strong>áreas de risco</strong> e os{' '}
            <strong>pontos de apoio</strong> perto de você. Você também pode registrar ocorrências
            e avisar outras pessoas em tempo real. 🌊
          </motion.p>

          <motion.div variants={item} className="hero-ctas">
            <a href="#download" className="btn btn-primary btn-lg">
              <GooglePlayIcon size={18} /> Baixar em breve
            </a>
            <a href="#funcionalidades" className="btn btn-ghost btn-lg">
              Conhecer o app
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            <div className="stat">
              <b>
                +<Counter to={120} />
              </b>
              <span>Sirenes no mapa</span>
            </div>
            <div className="stat">
              <b>
                +<Counter to={80} />
              </b>
              <span>Pontos de apoio</span>
            </div>
            <div className="stat">
              <b>
                <Counter to={24} suffix="h" />
              </b>
              <span>Monitoramento</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
        >
          <div className="hero-phone-wrap">
            <div className="hero-ring" />
            <PhoneMap />

            <motion.div
              className="hero-chip chip-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="ic alert">
                <IconSiren size={20} />
              </span>
              <span>
                Sirene acionada
                <small>Quitandinha • agora</small>
              </span>
            </motion.div>

            <motion.div
              className="hero-chip chip-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <span className="ic safe">
                <IconShelter size={20} />
              </span>
              <span>
                Ponto de apoio
                <small>a 400m de você</small>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="hero-waves">
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path
            className="wave wave-1"
            d="M0,60 C240,100 480,20 720,55 C960,90 1200,30 1440,60 L1440,110 L0,110 Z"
          />
          <path
            className="wave wave-2"
            d="M0,80 C240,45 480,105 720,75 C960,45 1200,95 1440,70 L1440,110 L0,110 Z"
          />
        </svg>
      </div>
    </header>
  )
}
