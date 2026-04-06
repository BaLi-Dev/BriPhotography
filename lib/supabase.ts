import { createBrowserClient } from '@supabase/ssr'

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export type Photo = {
  id: string
  title: string
  category: string
  image_url: string
  storage_path: string
  created_at: string
}

export type ContactMessage = {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}
