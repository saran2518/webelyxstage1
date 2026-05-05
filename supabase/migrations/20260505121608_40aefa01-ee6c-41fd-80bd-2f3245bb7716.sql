create table public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique,
  name text not null,
  age integer not null check (age >= 18 and age <= 120),
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.early_access_signups enable row level security;

create policy "Users can insert own signup"
  on public.early_access_signups for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can view own signup"
  on public.early_access_signups for select
  to authenticated
  using (auth.uid() = user_id);