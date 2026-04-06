const items = ['CARS', 'NATURE', 'ANIMALS', 'LANDSCAPES', 'MOTORSPORT', 'WILDLIFE', 'FINE ART PHOTOGRAPHY']
const doubled = [...items, ...items]

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <>
            <span key={`t-${i}`}>{item}</span>
            <span key={`s-${i}`} className="accent">✦</span>
          </>
        ))}
      </div>
    </div>
  )
}
