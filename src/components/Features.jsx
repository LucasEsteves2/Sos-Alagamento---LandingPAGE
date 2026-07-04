import Reveal from './Reveal.jsx'
import { IconMap, IconSiren, IconWarning, IconShelter, IconCamera, IconRain } from './Icons.jsx'

const FEATURES = [
  {
    icon: <IconMap />,
    title: 'Mapa interativo',
    desc: 'Tudo o que importa em um só lugar: sirenes, áreas de risco, pontos de apoio e ocorrências da comunidade, atualizados em tempo real.',
  },
  {
    icon: <IconSiren />,
    title: 'Sirenes de alerta',
    desc: 'Veja a localização das sirenes da sua cidade e saiba na hora quando uma delas for acionada perto de você.',
  },
  {
    icon: <IconWarning />,
    title: 'Áreas de risco',
    desc: 'Regiões com histórico de alagamento e deslizamento ficam destacadas no mapa para você planejar rotas mais seguras.',
  },
  {
    icon: <IconShelter />,
    title: 'Pontos de apoio',
    desc: 'Encontre rapidamente abrigos e pontos de apoio mais próximos quando precisar sair de casa em uma emergência.',
  },
  {
    icon: <IconCamera />,
    title: 'Registro com foto',
    desc: 'Viu um alagamento? Tire uma foto, publique a ocorrência e ajude a alertar quem ainda vai passar por ali.',
  },
  {
    icon: <IconRain />,
    title: 'Clima em tempo real',
    desc: 'Acompanhe a previsão e as condições do tempo direto no mapa para se antecipar aos eventos extremos.',
  },
]

export default function Features() {
  return (
    <section className="section features" id="funcionalidades">
      <div className="container">
        <Reveal className="center">
          <div className="section-tag">Funcionalidades</div>
          <h2 className="section-title">
            Tudo pra você se manter <span className="hl">em segurança</span>
          </h2>
          <p className="section-sub">
            Informação certa, na hora certa. O SOS Alagamento reúne dados oficiais e relatos da
            comunidade em um mapa simples de usar.
          </p>
        </Reveal>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="feature-card">
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
