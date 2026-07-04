import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'

const QUESTIONS = [
  {
    q: 'O app já está disponível para download?',
    a: 'Ainda não! Estamos na reta final de desenvolvimento. Em breve o SOS Alagamento estará disponível na Google Play e na App Store. Fique de olho por aqui!',
  },
  {
    q: 'O SOS Alagamento é gratuito?',
    a: 'Sim! O objetivo do app é ajudar pessoas em eventos extremos, então ele é e sempre será gratuito para a população.',
  },
  {
    q: 'De onde vêm as informações do mapa?',
    a: 'O mapa combina dados oficiais (sirenes, áreas de risco e pontos de apoio) com ocorrências registradas pela própria comunidade em tempo real.',
  },
  {
    q: 'Qualquer pessoa pode registrar uma ocorrência?',
    a: 'Sim. Basta criar uma conta, tirar uma foto do local e publicar. Outros usuários podem confirmar e comentar a ocorrência, mantendo a informação sempre atualizada.',
  },
  {
    q: 'O app funciona em qualquer cidade?',
    a: 'O lançamento começa pelas regiões mais afetadas por alagamentos, e a cobertura vai crescendo com o tempo. As ocorrências da comunidade funcionam em qualquer lugar.',
  },
]

function Item({ q, a, open, onClick }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button onClick={onClick}>
        {q}
        <motion.span className="faq-plus" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq" id="faq">
      <div className="container narrow">
        <Reveal className="center">
          <div className="section-tag">Dúvidas</div>
          <h2 className="section-title">
            Perguntas <span className="hl">frequentes</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="faq-list">
            {QUESTIONS.map((item, i) => (
              <Item
                key={item.q}
                {...item}
                open={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
