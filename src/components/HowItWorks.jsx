import Reveal from './Reveal.jsx'
import { IconMap, IconBell, IconCamera, IconShelter } from './Icons.jsx'

const STEPS = [
  {
    icon: <IconMap />,
    title: 'Abra o mapa',
    desc: 'Veja sua região com sirenes, áreas de risco e pontos de apoio destacados em tempo real.',
  },
  {
    icon: <IconBell />,
    title: 'Receba alertas',
    desc: 'Quando uma sirene for acionada ou uma ocorrência aparecer perto de você, o app te avisa na hora.',
  },
  {
    icon: <IconCamera />,
    title: 'Registre ocorrências',
    desc: 'Presenciou um alagamento? Publique com foto em segundos e alerte toda a comunidade.',
  },
  {
    icon: <IconShelter />,
    title: 'Encontre abrigo',
    desc: 'Se precisar sair de casa, o mapa mostra o ponto de apoio mais próximo e o caminho até ele.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <Reveal className="center">
          <div className="section-tag">Como funciona</div>
          <h2 className="section-title">
            Proteção em <span className="hl">4 passos</span>
          </h2>
          <p className="section-sub">
            Simples de usar no dia a dia, essencial quando a chuva aperta.
          </p>
        </Reveal>

        <div className="how-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="how-card">
                <span className="num">0{i + 1}</span>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
