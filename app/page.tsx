export const dynamic = 'force-dynamic'
import { createClient } from '@supabase/supabase-js'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Gallery from '@/components/Gallery'
import Categories from '@/components/Categories'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import type { Photo } from '@/lib/supabase'

async function getPhotos(): Promise<Photo[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data } = await supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false })
  return data ?? []
}

async function getCategoryCounts(): Promise<Record<string, number>> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data } = await supabase.from('photos').select('category')
  if (!data) return {}
  return data.reduce((acc: Record<string, number>, row) => {
    acc[row.category] = (acc[row.category] ?? 0) + 1
    return acc
  }, {})
}

export default async function Home() {
  const [photos, counts] = await Promise.all([getPhotos(), getCategoryCounts()])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Gallery photos={photos} />
      <div className="chess-bw" style={{ height: 40, opacity: 0.9 }} />
      <Categories counts={counts} />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
