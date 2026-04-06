export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-checker chess-bw" style={{ opacity: 0.85 }}>
        {Array.from({ length: 36 }).map((_, i) => <div key={i} />)}
        <div className="about-checker-inner">
          <div className="lens-graphic">
            <div className="lens-center" />
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="section-label">About</div>
        <h2 className="about-title">THE EYE<br /><em>Behind</em><br />THE LENS</h2>
        <p className="about-text">
          I&apos;m Bri — a photographer obsessed with the intersection of speed and stillness, metal and moss, the tame and the wild. I believe every subject has a quiet truth waiting to be found in the right light, at the right moment.
        </p>
        <p className="about-text">
          My cameras are extensions of my curiosity. Whether I&apos;m tracking a rally car through hairpin turns or waiting motionless for a hawk to catch the morning sun, it&apos;s all the same act of devotion.
        </p>
        <div className="about-stats">
          <div style={{ position: 'relative' }}>
            {/* mini chess board corner */}
            <div style={{ position: 'absolute', top: 0, right: -16, display: 'grid', gridTemplateColumns: 'repeat(4, 6px)', gridTemplateRows: 'repeat(4, 6px)', opacity: 0.2 }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} style={{ background: (Math.floor(i / 4) + i) % 2 === 0 ? 'var(--accent)' : 'transparent' }} />
              ))}
            </div>
            <div className="stat-num">12+</div>
            <div className="stat-label">Years Shooting</div>
          </div>
          <div>
            <div className="stat-num">168</div>
            <div className="stat-label">Published Works</div>
          </div>
          <div>
            <div className="stat-num">34</div>
            <div className="stat-label">Exhibitions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
