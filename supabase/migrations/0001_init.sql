-- Jai Gurudev Ceramics & Hardware: initial schema
create extension if not exists pgcrypto;

-- Admins ---------------------------------------------------------------
create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- Brands ---------------------------------------------------------------
create table public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Categories -----------------------------------------------------------
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  image_url text not null default '',
  sort_order int not null default 0,
  enabled boolean not null default true,
  created_at timestamptz not null default now()
);

-- Tiles ----------------------------------------------------------------
create table public.tiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  design_number text not null unique,
  size text not null,
  price numeric(10, 2) not null,
  finish text not null,
  material text not null,
  in_stock boolean not null default true,
  category_slug text not null references public.categories (slug) on update cascade,
  brand text not null,
  images text[] not null default '{}',
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger tiles_set_updated_at
before update on public.tiles
for each row execute function public.set_updated_at();

-- Testimonials ----------------------------------------------------------
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  location text not null default '',
  quote text not null,
  sort_order int not null default 0,
  enabled boolean not null default true,
  created_at timestamptz not null default now()
);

-- Inquiries ---------------------------------------------------------------
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted')),
  created_at timestamptz not null default now()
);

-- Site content (CMS) -----------------------------------------------------
create table public.site_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create trigger site_content_set_updated_at
before update on public.site_content
for each row execute function public.set_updated_at();

-- Row Level Security ------------------------------------------------------
alter table public.admins enable row level security;
alter table public.brands enable row level security;
alter table public.categories enable row level security;
alter table public.tiles enable row level security;
alter table public.testimonials enable row level security;
alter table public.inquiries enable row level security;
alter table public.site_content enable row level security;

create policy "Admins can read admins" on public.admins
  for select using (public.is_admin());

create policy "Public read brands" on public.brands
  for select using (true);
create policy "Admin write brands" on public.brands
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public read categories" on public.categories
  for select using (true);
create policy "Admin write categories" on public.categories
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public read tiles" on public.tiles
  for select using (true);
create policy "Admin write tiles" on public.tiles
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Public read testimonials" on public.testimonials
  for select using (true);
create policy "Admin write testimonials" on public.testimonials
  for all using (public.is_admin()) with check (public.is_admin());

create policy "Anyone can create inquiries" on public.inquiries
  for insert with check (true);
create policy "Admin read inquiries" on public.inquiries
  for select using (public.is_admin());
create policy "Admin update inquiries" on public.inquiries
  for update using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete inquiries" on public.inquiries
  for delete using (public.is_admin());

create policy "Public read site content" on public.site_content
  for select using (true);
create policy "Admin write site content" on public.site_content
  for all using (public.is_admin()) with check (public.is_admin());

-- Media storage bucket ------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "Public read media" on storage.objects
  for select using (bucket_id = 'media');
create policy "Admin upload media" on storage.objects
  for insert with check (bucket_id = 'media' and public.is_admin());
create policy "Admin update media" on storage.objects
  for update using (bucket_id = 'media' and public.is_admin());
create policy "Admin delete media" on storage.objects
  for delete using (bucket_id = 'media' and public.is_admin());
