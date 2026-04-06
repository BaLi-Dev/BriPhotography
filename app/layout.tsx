import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bri Photography',
  description: 'Photography portfolio — Automotive, Nature, Wildlife',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
