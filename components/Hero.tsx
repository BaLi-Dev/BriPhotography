export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        {/* subtle chess watermark */}
        <div style={{ position: 'absolute', top: '4rem', right: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 14px)', gridTemplateRows: 'repeat(6, 14px)', opacity: 0.06, pointerEvents: 'none' }}>
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} style={{ background: (Math.floor(i / 6) + i) % 2 === 0 ? 'var(--white)' : 'transparent' }} />
          ))}
        </div>
        <div className="hero-eyebrow">Photography Portfolio</div>
        <h1 className="hero-title">
          BRIGITTA<br />
          <span className="line2">TOTH</span>
        </h1>
        <p className="hero-desc">
          Capturing the soul of machines, the wildness of nature, and the quiet dignity of animals — one frame at a time.
        </p>
        <a href="#gallery" className="hero-cta">View Portfolio →</a>
      </div>
      <div className="hero-right">
        <div className="hero-image-placeholder">
          <div className="camera-icon-bg">⬛</div>
          <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.2 }} width="280" height="200" viewBox="0 0 280 200" fill="none">
            <rect x="20" y="60" width="240" height="130" rx="4" stroke="#c8a85a" strokeWidth="2" />
            <circle cx="140" cy="130" r="45" stroke="#c8a85a" strokeWidth="2" />
            <circle cx="140" cy="130" r="30" stroke="#c8a85a" strokeWidth="1" opacity="0.5" />
            <circle cx="140" cy="130" r="12" fill="#c8a85a" opacity="0.3" />
            <rect x="80" y="40" width="60" height="22" rx="2" stroke="#c8a85a" strokeWidth="2" />
            <rect x="220" y="75" width="25" height="16" rx="2" stroke="#c8a85a" strokeWidth="1.5" />
            <circle cx="40" cy="80" r="8" stroke="#c8a85a" strokeWidth="1.5" />
          </svg>
          <div className="hero-checker-overlay">
            {Array.from({ length: 24 }).map((_, i) => <div key={i} />)}
          </div>
          <span className="hero-image-label">PORTFOLIO / 2024</span>
        </div>
      </div>
    </section>
  )
}
