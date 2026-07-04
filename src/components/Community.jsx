import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { IconThumb, IconChat, IconPin, IconCamera } from './Icons.jsx'

export default function Community() {
  return (
    <section className="section community" id="comunidade">
      <div className="container community-inner">
        <Reveal>
          <div className="section-tag">Comunidade</div>
          <h2 className="section-title">
            Uma comunidade que <span className="hl">se ajuda</span>
          </h2>
          <p className="section-sub left">
            Quando alguém registra uma ocorrência, todo mundo por perto fica sabendo. E quem passa
            pelo local pode confirmar se a rua ainda está alagada, mantendo o mapa sempre
            atualizado.
          </p>

          <ul className="community-list">
            <li>
              <span className="ic">
                <IconCamera size={20} />
              </span>
              <div>
                <b>Publique com foto</b>
                <p>Registre o alagamento em segundos e ajude a comunidade inteira.</p>
              </div>
            </li>
            <li>
              <span className="ic">
                <IconThumb size={20} />
              </span>
              <div>
                <b>Confirme ocorrências</b>
                <p>Interaja com relatos de outros usuários: confirme, comente e mantenha tudo atualizado.</p>
              </div>
            </li>
            <li>
              <span className="ic">
                <IconPin size={20} />
              </span>
              <div>
                <b>Veja o que está perto</b>
                <p>As ocorrências aparecem direto no mapa, na região onde você está.</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="occurrence-wrap">
            <motion.div
              className="occurrence-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="occ-head">
                <span className="occ-avatar">M</span>
                <div>
                  <b>Maria S.</b>
                  <small>Rua Coronel Veiga • há 8 min</small>
                </div>
                <span className="occ-tag">🌊 Alagamento</span>
              </div>

              <div className="occ-photo">
                <svg viewBox="0 0 300 150" preserveAspectRatio="xMidYMid slice">
                  <rect width="300" height="150" fill="#BFE3F7" />
                  <rect y="0" width="300" height="60" fill="#DDF1FC" />
                  <rect x="30" y="18" width="40" height="52" rx="3" fill="#8FB6CE" />
                  <rect x="90" y="8" width="52" height="62" rx="3" fill="#A5C6DB" />
                  <rect x="210" y="22" width="46" height="48" rx="3" fill="#8FB6CE" />
                  <motion.path
                    d="M0 80 C 50 70, 100 92, 150 82 S 250 70, 300 84 L300 150 L0 150 Z"
                    fill="#4C9FD6"
                    animate={{ d: [
                      'M0 80 C 50 70, 100 92, 150 82 S 250 70, 300 84 L300 150 L0 150 Z',
                      'M0 84 C 50 92, 100 72, 150 86 S 250 90, 300 78 L300 150 L0 150 Z',
                      'M0 80 C 50 70, 100 92, 150 82 S 250 70, 300 84 L300 150 L0 150 Z',
                    ] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <path d="M140 55 l18 0 -4 -14 c14 4 18 18 14 30 l-38 0 z" fill="#E75A4C" opacity="0.9" />
                </svg>
              </div>

              <p className="occ-text">Rua totalmente alagada na altura do mercado, evitem passar por aqui! 🚫</p>

              <div className="occ-actions">
                <motion.button whileTap={{ scale: 0.92 }} className="occ-btn primary">
                  <IconThumb size={16} /> Confirmar <b>23</b>
                </motion.button>
                <motion.button whileTap={{ scale: 0.92 }} className="occ-btn">
                  <IconChat size={16} /> Comentar <b>7</b>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="occ-reaction r1"
              animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              👍 +1
            </motion.div>
            <motion.div
              className="occ-reaction r2"
              animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              ⚠️ Ainda alagado
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
