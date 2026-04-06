'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const { error } = await supabase.from('contact_messages').insert([form])
    setStatus(error ? 'error' : 'sent')
    if (!error) setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="section-label">Let&apos;s Work Together</div>
        <h2 className="contact-title">GET<br />IN <span>TOUCH</span></h2>
        <p style={{ fontSize: '1rem', fontWeight: 300, color: '#666', fontStyle: 'italic', lineHeight: 1.8, maxWidth: 380 }}>
          Available for commissions, exhibitions, editorial work, and automotive shoots. I&apos;d love to hear about your project.
        </p>
        <div className="contact-info">
          <div className="contact-row">
            <span className="contact-row-label">Email</span>
            <span className="contact-row-val">hello@brigittatoth.com</span>
          </div>
          <div className="contact-row">
            <span className="contact-row-label">Based</span>
            <span className="contact-row-val">Budapest, Hungary</span>
          </div>
          <div className="contact-row">
            <span className="contact-row-label">Available</span>
            <span className="contact-row-val">Worldwide commissions</span>
          </div>
          <div className="contact-row">
            <span className="contact-row-label">Instagram</span>
            <span className="contact-row-val">@brigittatoth.photo</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
          <textarea
            rows={4}
            placeholder="Your message"
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'SENT ✓' : 'SEND MESSAGE →'}
          </button>
          {status === 'error' && (
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem', color: '#8b2020', letterSpacing: '0.15em' }}>
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>

      <div className="contact-right">
        {Array.from({ length: 64 }).map((_, i) => <div key={i} />)}
        <div className="contact-right-inner">
          <div className="contact-big-letter">BT</div>
        </div>
      </div>
    </section>
  )
}
