const CATS = [
  { icon: '🚗', name: 'Automotive', desc: 'From showroom elegance to motorsport grit — capturing machines in their element with cinematic precision.', key: 'Automotive' },
  { icon: '🌿', name: 'Nature', desc: 'Forests, mist, light through leaves — the quiet language of the natural world, spoken in frame.', key: 'Nature' },
  { icon: '🐾', name: 'Animals', desc: 'Patient observation meets decisive moments — wildlife and domestic animals portrayed with honesty and warmth.', key: 'Wildlife' },
]

export default function Categories({ counts }: { counts: Record<string, number> }) {
  return (
    <section className="categories" id="categories">
      <div className="section-label">Specialties</div>
      <div className="cat-grid">
        {CATS.map(cat => (
          <div className="cat-item" key={cat.name}>
            <div className="cat-checker">
              {Array.from({ length: 16 }).map((_, i) => <div key={i} />)}
            </div>
            <span className="cat-icon">{cat.icon}</span>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-desc">{cat.desc}</div>
            <div className="cat-count"><span>{counts[cat.key] ?? 0}</span> photographs</div>
          </div>
        ))}
      </div>
    </section>
  )
}
