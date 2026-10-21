// Small watercolour-style drawings from Hippla: coffee, pepper, areca, forest,
// elephants and birds of the Bhadra valley, and the Chandradrona peak.

function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="wc" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.7" result="b" />
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.55 1.15" result="paper" />
          <feComposite in="b" in2="paper" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}

const leaf = 'M0 0 C 10 -11, 32 -11, 44 0 C 32 11, 10 11, 0 0 Z'

function CoffeeBranch() {
  return (
    <svg viewBox="0 0 140 120" width="150">
      <g filter="url(#wc)">
        <path d="M8 104 C 40 84, 82 60, 132 18" className="line" style={{ color: '#7a5a3a' }} strokeWidth="2.5" />
        <g className="wash" style={{ color: '#5d7f45' }}>
          <path d={leaf} transform="translate(36 82) rotate(-62)" />
          <path d={leaf} transform="translate(58 70) rotate(38)" />
          <path d={leaf} transform="translate(84 52) rotate(-72)" />
          <path d={leaf} transform="translate(102 40) rotate(28)" />
          <path d={leaf} transform="translate(120 27) rotate(-38) scale(.75)" />
        </g>
        <g className="wash" style={{ color: '#b5473d' }}>
          <circle cx="54" cy="76" r="5" />
          <circle cx="61" cy="80" r="4.5" />
          <circle cx="96" cy="49" r="5" />
          <circle cx="101" cy="55" r="4.3" />
        </g>
        <g className="wash" style={{ color: '#9aaa55' }}>
          <circle cx="48" cy="81" r="4" />
          <circle cx="91" cy="55" r="4" />
        </g>
      </g>
    </svg>
  )
}

function Leaf({ color = '#6f9150', width = 56 }) {
  return (
    <svg viewBox="0 0 60 30" width={width}>
      <g filter="url(#wc)" style={{ color }}>
        <path d={leaf} transform="translate(6 15) scale(1.1)" className="wash" />
        <path d="M8 15 C 22 13, 36 13, 52 15" className="line" strokeWidth="1" />
      </g>
    </svg>
  )
}

function Areca() {
  return (
    <svg viewBox="0 0 90 170" width="80">
      <g filter="url(#wc)">
        <path d="M44 168 C 43 120, 44 80, 46 42" className="line" style={{ color: '#9a8a6a' }} strokeWidth="3.5" />
        <g className="line" style={{ color: '#5f8448' }} strokeWidth="5">
          <path d="M46 42 C 30 30, 14 36, 4 54" />
          <path d="M46 42 C 62 30, 78 36, 88 54" />
          <path d="M46 42 C 38 22, 26 12, 12 10" />
          <path d="M46 42 C 54 22, 66 12, 80 10" />
          <path d="M46 42 C 46 26, 47 12, 46 2" />
        </g>
        <g className="wash" style={{ color: '#c9893a' }}>
          <circle cx="40" cy="50" r="3.5" />
          <circle cx="46" cy="52" r="3.5" />
          <circle cx="51" cy="49" r="3.2" />
        </g>
      </g>
    </svg>
  )
}

function Tree() {
  return (
    <svg viewBox="0 0 120 130" width="120">
      <g filter="url(#wc)">
        <path d="M60 128 L 58 74 M58 92 L 44 78 M59 86 L 74 72" className="line" style={{ color: '#7a5a3a' }} strokeWidth="4" />
        <g className="wash">
          <circle cx="44" cy="58" r="26" style={{ color: '#6f9150' }} />
          <circle cx="76" cy="54" r="28" style={{ color: '#4f7340' }} />
          <circle cx="60" cy="34" r="26" style={{ color: '#88a35e' }} />
        </g>
      </g>
    </svg>
  )
}

function Pepper() {
  const berries = [0, 1, 2, 3, 4, 5, 6]
  return (
    <svg viewBox="0 0 50 100" width="44">
      <g filter="url(#wc)">
        <path d="M10 0 C 30 20, 6 40, 26 60" className="line" style={{ color: '#5d7f45' }} strokeWidth="2" />
        <path d={leaf} transform="translate(18 22) rotate(20) scale(.6)" className="wash" style={{ color: '#5d7f45' }} />
        <g className="wash">
          {berries.map((i) => (
            <circle key={i} cx={26 + (i % 2 ? 3 : -3)} cy={64 + i * 5} r="3.2" style={{ color: i < 2 ? '#b5473d' : '#7f9a45' }} />
          ))}
        </g>
      </g>
    </svg>
  )
}

function Elephant() {
  return (
    <svg viewBox="0 0 130 90" width="110">
      <g filter="url(#wc)" className="wash" style={{ color: '#7d7f86' }}>
        <ellipse cx="58" cy="42" rx="34" ry="22" />
        <circle cx="92" cy="36" r="15" />
        <path d="M102 40 C 110 52, 108 64, 114 72 C 116 75, 112 77, 109 74 C 102 66, 100 56, 96 48 Z" />
        <rect x="32" y="52" width="10" height="24" rx="4" />
        <rect x="46" y="54" width="10" height="22" rx="4" />
        <rect x="68" y="54" width="10" height="22" rx="4" />
        <rect x="80" y="50" width="10" height="26" rx="4" />
        <path d="M24 38 C 18 44, 18 52, 20 58" className="line" strokeWidth="2" />
      </g>
      <g filter="url(#wc)" className="wash" style={{ color: '#5f6168' }}>
        <ellipse cx="85" cy="36" rx="7" ry="11" />
      </g>
    </svg>
  )
}

function Birds() {
  return (
    <svg viewBox="0 0 90 40" width="80">
      <g filter="url(#wc)" className="line" style={{ color: '#4a4a52' }} strokeWidth="2">
        <path d="M2 22 Q 10 12, 18 22 Q 26 12, 34 22" />
        <path d="M46 10 Q 52 3, 58 10 Q 64 3, 70 10" />
        <path d="M60 30 Q 65 24, 70 30 Q 75 24, 80 30" />
      </g>
    </svg>
  )
}

function Butterfly() {
  return (
    <svg viewBox="0 0 40 30" width="38">
      <g filter="url(#wc)" className="wash" style={{ color: '#d49a3a' }}>
        <ellipse cx="12" cy="11" rx="9" ry="7" transform="rotate(-20 12 11)" />
        <ellipse cx="28" cy="11" rx="9" ry="7" transform="rotate(20 28 11)" />
        <ellipse cx="14" cy="21" rx="6" ry="5" />
        <ellipse cx="26" cy="21" rx="6" ry="5" />
      </g>
    </svg>
  )
}

// Fixed in the page margins on wide screens.
export function Margins() {
  return (
    <div className="decor" aria-hidden="true">
      <Defs />
      <div className="col left">
        <div className="item glide" style={{ top: '6%', left: '30%' }}><Birds /></div>
        <div className="item sway" style={{ top: '20%', left: '20%' }}><CoffeeBranch /></div>
        <div className="item drift" style={{ top: '48%', left: '55%' }}><Leaf /></div>
        <div className="item sway slow" style={{ top: '58%', left: '8%' }}><Pepper /></div>
        <div className="item walk" style={{ top: '76%', left: '18%' }}><Elephant /></div>
      </div>
      <div className="col right">
        <div className="item sway slow" style={{ top: '10%', left: '40%' }}><Areca /></div>
        <div className="item flutter" style={{ top: '40%', left: '20%' }}><Butterfly /></div>
        <div className="item drift slow" style={{ top: '52%', left: '52%' }}><Leaf color="#8aa35a" width={44} /></div>
        <div className="item sway" style={{ top: '66%', left: '30%' }}><Tree /></div>
      </div>
    </div>
  )
}

// The valley under Chandradrona, with the streams from the logo.
export function Valley() {
  return (
    <svg className="valley" viewBox="0 0 760 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g filter="url(#wc)" className="wash">
        <path style={{ color: '#9db2bd' }} d="M0 150 L0 112 C 120 104, 220 96, 300 74 C 320 66, 340 40, 360 20 C 380 40, 398 66, 420 74 C 500 98, 620 102, 760 106 L760 150 Z" />
        <path style={{ color: '#7f9c72' }} d="M0 150 L0 120 C 140 108, 260 118, 380 110 C 500 102, 620 116, 760 112 L760 150 Z" />
        <g style={{ color: '#5d7f45' }}>
          <circle cx="90" cy="118" r="14" />
          <circle cx="110" cy="114" r="18" />
          <circle cx="600" cy="116" r="16" />
          <circle cx="624" cy="112" r="20" />
          <circle cx="648" cy="120" r="12" />
        </g>
      </g>
      <g className="mist" filter="url(#wc)">
        <ellipse cx="300" cy="78" rx="140" ry="8" fill="#ffffff" opacity=".7" />
      </g>
      <g filter="url(#wc)" className="line" style={{ color: '#7fa3b8' }} strokeWidth="2.5">
        <path d="M200 136 q 15 -8 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0" />
        <path d="M240 146 q 15 -8 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0" />
      </g>
    </svg>
  )
}
