import { motion } from 'framer-motion'

function Siren({ x, y, delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.circle
        r="10"
        fill="#E75A4C"
        opacity="0.35"
        animate={{ r: [8, 20, 8], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay }}
      />
      <circle r="7" fill="#fff" stroke="#E75A4C" strokeWidth="1.5" />
      <path d="M-3.2 1.5v-2a3.2 3.2 0 0 1 6.4 0v2" fill="none" stroke="#E75A4C" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M-4 2.6h8" stroke="#E75A4C" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  )
}

function Shelter({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-8" y="-7" width="16" height="14" rx="4" fill="#5C6BC0" />
      <path d="m-6 -3 6-4.5L6 -3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <rect x="-3" y="-2" width="6" height="6" rx="1" fill="#fff" />
      <circle cx="7" cy="7" r="5.5" fill="#34A853" stroke="#fff" strokeWidth="1.4" />
      <path d="m4.8 7 1.6 1.6 2.6-3" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  )
}

export default function PhoneMap() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        {/* topo: menu + clima */}
        <div className="phone-top">
          <span className="phone-menu">
            <i />
            <i />
            <i />
          </span>
          <motion.span
            className="phone-weather"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            🌧️ 18°C
          </motion.span>
        </div>

        {/* mapa SVG animado */}
        <svg className="phone-map" viewBox="0 0 260 380" preserveAspectRatio="xMidYMid slice">
          <rect width="260" height="380" fill="#EAF6EC" />
          {/* manchas de "cidade" */}
          <ellipse cx="150" cy="210" rx="110" ry="130" fill="#F7FBF5" />
          <ellipse cx="60" cy="60" rx="70" ry="60" fill="#DFF2E1" />
          <ellipse cx="230" cy="330" rx="80" ry="70" fill="#DFF2E1" />

          {/* rio */}
          <motion.path
            d="M30 -10 C 60 60, 20 120, 70 180 S 110 300, 80 400"
            fill="none"
            stroke="#8FC7EC"
            strokeWidth="9"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -46] }}
            style={{ strokeDasharray: '30 16' }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
          <path
            d="M30 -10 C 60 60, 20 120, 70 180 S 110 300, 80 400"
            fill="none"
            stroke="#B7DDF6"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* ruas */}
          <g stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none">
            <path d="M-10 140 H 270" />
            <path d="M130 20 V 380" />
            <path d="M20 260 C 90 240, 180 300, 270 250" />
          </g>
          <g stroke="#E3EDE4" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M-10 90 H 270" />
            <path d="M60 20 V 380" />
            <path d="M200 20 V 380" />
            <path d="M-10 320 H 270" />
          </g>

          {/* área de risco */}
          <motion.path
            d="M150 150 L 215 175 L 205 240 L 145 225 Z"
            fill="#E75A4C"
            stroke="#E75A4C"
            strokeWidth="2"
            animate={{ opacity: [0.18, 0.38, 0.18] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* pontos de apoio */}
          <Shelter x={52} y={112} />
          <Shelter x={182} y={72} />
          <Shelter x={100} y={300} />
          <Shelter x={220} y={300} />

          {/* sirenes */}
          <Siren x={95} y={190} />
          <Siren x={180} y={205} delay={0.9} />
          <Siren x={150} y={330} delay={1.6} />

          {/* usuário */}
          <g transform="translate(130 250)">
            <motion.circle
              r="9"
              fill="#1B7FC4"
              opacity="0.3"
              animate={{ r: [9, 17, 9], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
            <circle r="6" fill="#1B7FC4" stroke="#fff" strokeWidth="2.4" />
          </g>
        </svg>

        {/* busca */}
        <div className="phone-search">🔍 Digite um endereço</div>

        {/* botão + */}
        <motion.div
          className="phone-fab"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          +
        </motion.div>
      </div>
    </div>
  )
}
