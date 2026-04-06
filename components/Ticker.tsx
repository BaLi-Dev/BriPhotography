const items = ['CARS', 'NATURE', 'ANIMALS', 'LANDSCAPES', 'MOTORSPORT', 'WILDLIFE', 'FINE ART PHOTOGRAPHY']
const doubled = [...items, ...items]

function ChessSep() {
  return (
    <span style={{ display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', width: 12, height: 12, margin: '0 1.5rem', verticalAlign: 'middle', opacity: 0.7 }}>
      {[0,1,2,3].map(i => (
        <span key={i} style={{ background: i % 2 === 0 ? 'var(--accent)' : '#333' }} />
      ))}
    </span>
  )
}

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span>{item}</span>
            <ChessSep />
          </span>
        ))}
      </div>
    </div>
  )
}
