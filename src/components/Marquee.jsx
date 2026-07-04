const ITEMS = [
  '🚨 Sirenes em tempo real',
  '🗺️ Mapa interativo',
  '⚠️ Áreas de risco',
  '🏠 Pontos de apoio',
  '📸 Registre ocorrências',
  '🤝 Comunidade ativa',
  '🌧️ Clima ao vivo',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>
            {t} <b>•</b>
          </span>
        ))}
      </div>
    </div>
  )
}
