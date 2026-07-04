import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { GooglePlayIcon, AppleIcon } from './Icons.jsx'

export default function DownloadCTA() {
  return (
    <section className="section download" id="download">
      <div className="container">
        <Reveal>
          <div className="download-panel">
            <div className="download-waves">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                  className="wave wave-1"
                  d="M0,60 C240,100 480,20 720,55 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
                />
                <path
                  className="wave wave-2"
                  d="M0,80 C240,45 480,105 720,75 C960,45 1200,95 1440,70 L1440,120 L0,120 Z"
                />
              </svg>
            </div>

            <motion.div
              className="download-badge"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              🚀 Em breve
            </motion.div>

            <h2>
              O app que pode <span>salvar o seu dia</span>
              <br /> está chegando.
            </h2>
            <p>
              O SOS Alagamento está em fase final de desenvolvimento. Assim que estiver no ar, os
              botões abaixo levarão direto pras lojas.
            </p>

            <div className="store-buttons">
              <div className="store-btn disabled" title="Em breve">
                <GooglePlayIcon size={26} />
                <span>
                  <small>EM BREVE NO</small>
                  Google Play
                </span>
              </div>
              <div className="store-btn disabled" title="Em breve">
                <AppleIcon size={28} />
                <span>
                  <small>EM BREVE NA</small>
                  App Store
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
