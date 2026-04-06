-- Run this in your Supabase SQL editor

create table photos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('Automotive', 'Nature', 'Wildlife', 'Motorsport', 'Landscape')),
  image_url text not null,
  storage_path text not null,
  created_at timestamptz default now()
);

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

-- Storage bucket: create a public bucket named "photos" in Supabase dashboard
-- Then add this policy for public read:
-- Storage > photos bucket > Policies > New policy > "Allow public read"
-- Definition: (bucket_id = 'photos')

alter table photos enable row level security;
create policy "Public read photos" on photos for select using (true);

alter table contact_messages enable row level security;
create policy "Insert contact" on contact_messages for insert with check (true);
