'use client'
import { useState } from 'react'
import Image from 'next/image'
import type { Photo } from '@/lib/supabase'

const FILTERS = ['All', 'Automotive', 'Nature', 'Wildlife', 'Motorsport', 'Landscape']

const GRID_SPANS = [
  { col: 'span 5', row: 'span 2', pb: '150%' },
  { col: 'span 4', row: 'span 1', pb: '75%' },
  { col: 'span 3', row: 'span 1', pb: '150%' },
  { col: 'span 4', row: 'span 1', pb: '75%' },
  { col: 'span 3', row: 'span 2', pb: '75%' },
  { col: 'span 4', row: 'span 1', pb: '75%' },
  { col: 'span 3', row: 'span 1', pb: '75%' },
  { col: 'span 4', row: 'span 1', pb: '75%' },
  { col: 'span 5', row: 'span 1', pb: '75%' },
  { col: 'span 3', row: 'span 1', pb: '75%' },
]

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #1a1005 0%, #2d2010 40%, #1a0f05 100%)',
  'linear-gradient(160deg, #0a1a0a 0%, #0f2010 100%)',
  'linear-gradient(200deg, #150510 0%, #200a18 100%)',
  'linear-gradient(120deg, #0a0a1a 0%, #101025 100%)',
  'linear-gradient(160deg, #1a0808 0%, #200c0c 100%)',
  'linear-gradient(135deg, #0d1508 0%, #1a2a10 100%)',
  'linear-gradient(135deg, #1a1005 0%, #251a08 100%)',
  'linear-gradient(135deg, #100a1a 0%, #1a1025 100%)',
  'linear-gradient(160deg, #0a1208 0%, #0f1a0c 100%)',
  'linear-gradient(160deg, #18100a 0%, #241808 100%)',
]

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active)
  const items = filtered.length > 0 ? filtered : []

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <div className="gallery-title">
          <span>Selected Work</span>
          PORTFOLIO
        </div>
        <ul className="gallery-filter">
          {FILTERS.map(f => (
            <li key={f}>
              <button className={active === f ? 'active' : ''} onClick={() => setActive(f)}>{f}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="gallery-grid">
        {items.map((photo, i) => {
          const span = GRID_SPANS[i % GRID_SPANS.length]
          return (
            <div
              key={photo.id}
              className="gallery-item"
              style={{ gridColumn: span.col, gridRow: span.row }}
              onClick={() => setLightbox(photo)}
            >
              <div className="gallery-item-inner" style={{ paddingBottom: span.pb }}>
                <div className="gallery-placeholder" style={{ background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length] }}>
                  <Image
                    src={photo.image_url}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="gallery-overlay">
                  <div>
                    <span className="overlay-cat">{photo.category}</span>
                    <span className="overlay-title">{photo.title}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {items.length === 0 && (
          <div style={{ gridColumn: 'span 12', padding: '4rem', textAlign: 'center', color: '#444', fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
            NO PHOTOS YET
          </div>
        )}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>CLOSE ✕</button>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh', width: '100%', height: '100%' }}>
            <Image
              src={lightbox.image_url}
              alt={lightbox.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
            <span className="overlay-cat">{lightbox.category}</span>
            <span className="overlay-title" style={{ display: 'block' }}>{lightbox.title}</span>
          </div>
        </div>
      )}
    </section>
  )
}
