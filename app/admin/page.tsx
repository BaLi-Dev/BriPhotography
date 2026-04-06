'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const CATEGORIES = ['Automotive', 'Nature', 'Wildlife', 'Motorsport', 'Landscape']

const inputStyle: React.CSSProperties = {
  background: '#111',
  border: '1px solid #2a2a2a',
  color: '#f5f0e8',
  fontFamily: 'Space Mono, monospace',
  fontSize: '0.75rem',
  letterSpacing: '0.1em',
  padding: '0.8rem 1rem',
  outline: 'none',
}

const btnStyle: React.CSSProperties = {
  alignSelf: 'flex-start',
  fontFamily: 'Space Mono, monospace',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  color: '#0a0a0a',
  background: '#c8a85a',
  border: 'none',
  padding: '1rem 2rem',
  cursor: 'pointer',
  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
}

export default function AdminPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const upload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setStatus('uploading')

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const ext = file.name.split('.').pop()
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('photos')
      .upload(path, file, { cacheControl: '3600', upsert: false })

    if (uploadError) {
      setStatus('error')
      setMessage(uploadError.message)
      return
    }

    const { data: { publicUrl } } = supabase.storage.from('photos').getPublicUrl(path)

    const { error: dbError } = await supabase.from('photos').insert([{
      title,
      category,
      image_url: publicUrl,
      storage_path: path,
    }])

    if (dbError) {
      setStatus('error')
      setMessage(dbError.message)
      return
    }

    setStatus('done')
    setMessage(`"${title}" uploaded successfully.`)
    setTitle('')
    setFile(null)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f0e8', padding: '4rem 3rem', fontFamily: 'Space Mono, monospace' }}>
      <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem', color: '#c8a85a', marginBottom: '2rem', letterSpacing: '0.05em' }}>
        ADMIN — UPLOAD PHOTO
      </h1>
      <form onSubmit={upload} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 480 }}>
        <input
          placeholder="Photo title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
        <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files?.[0] ?? null)}
          required
          style={{ ...inputStyle, cursor: 'pointer' }}
        />
        <button type="submit" disabled={status === 'uploading'} style={btnStyle}>
          {status === 'uploading' ? 'UPLOADING...' : 'UPLOAD →'}
        </button>
        {message && (
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: status === 'error' ? '#8b2020' : '#c8a85a' }}>
            {message}
          </span>
        )}
      </form>
    </div>
  )
}
