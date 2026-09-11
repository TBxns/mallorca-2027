create extension if not exists "pgcrypto";

create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.trip_state (
  trip_id uuid primary key references public.trips(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.travelers (
  id text primary key,
  trip_id uuid not null references public.trips(id) on delete cascade,
  name text not null,
  role text,
  initial text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.ideas (
  id text primary key,
  trip_id uuid not null references public.trips(id) on delete cascade,
  title text not null,
  category text not null,
  note text,
  created_by text references public.travelers(id),
  place_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.idea_votes (
  idea_id text not null references public.ideas(id) on delete cascade,
  traveler_id text not null references public.travelers(id) on delete cascade,
  voted boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (idea_id, traveler_id)
);

create table if not exists public.packing_items (
  id text primary key,
  trip_id uuid not null references public.trips(id) on delete cascade,
  group_name text not null,
  title text not null,
  note text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.packing_checks (
  item_id text not null references public.packing_items(id) on delete cascade,
  traveler_id text not null references public.travelers(id) on delete cascade,
  checked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (item_id, traveler_id)
);

create table if not exists public.activity_events (
  id bigint generated always as identity primary key,
  trip_id uuid not null references public.trips(id) on delete cascade,
  traveler_id text references public.travelers(id),
  event_type text not null,
  entity_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists idea_votes_touch_updated_at on public.idea_votes;
create trigger idea_votes_touch_updated_at
before update on public.idea_votes
for each row execute function public.touch_updated_at();

drop trigger if exists packing_checks_touch_updated_at on public.packing_checks;
create trigger packing_checks_touch_updated_at
before update on public.packing_checks
for each row execute function public.touch_updated_at();

alter table public.trips enable row level security;
alter table public.travelers enable row level security;
alter table public.ideas enable row level security;
alter table public.idea_votes enable row level security;
alter table public.packing_items enable row level security;
alter table public.packing_checks enable row level security;
alter table public.activity_events enable row level security;

-- Demo access: the app has no login yet. Replace these policies with
-- invite-code/auth policies before using this for sensitive information.
create policy "demo trips read" on public.trips for select to anon, authenticated using (true);
create policy "demo trip state read" on public.trip_state for select to anon, authenticated using (true);
create policy "demo trip state write" on public.trip_state for insert to anon, authenticated with check (true);
create policy "demo trip state update" on public.trip_state for update to anon, authenticated using (true) with check (true);
create policy "demo travelers read" on public.travelers for select to anon, authenticated using (true);
create policy "demo ideas read" on public.ideas for select to anon, authenticated using (true);
create policy "demo ideas write" on public.ideas for insert to anon, authenticated with check (true);
create policy "demo votes read" on public.idea_votes for select to anon, authenticated using (true);
create policy "demo votes write" on public.idea_votes for insert to anon, authenticated with check (true);
create policy "demo votes update" on public.idea_votes for update to anon, authenticated using (true) with check (true);
create policy "demo packing read" on public.packing_items for select to anon, authenticated using (true);
create policy "demo checks read" on public.packing_checks for select to anon, authenticated using (true);
create policy "demo checks write" on public.packing_checks for insert to anon, authenticated with check (true);
create policy "demo checks update" on public.packing_checks for update to anon, authenticated using (true) with check (true);
create policy "demo events read" on public.activity_events for select to anon, authenticated using (true);
create policy "demo events write" on public.activity_events for insert to anon, authenticated with check (true);

insert into public.trips (slug, name)
values ('mallorca-2027', 'Mallorca 2027')
on conflict (slug) do nothing;

do $$
declare
  table_name text;
begin
  foreach table_name in array array['ideas', 'idea_votes', 'packing_checks', 'activity_events', 'trip_state']
  loop
    if not exists (
      select 1
      from pg_publication_tables
      where pubname = 'supabase_realtime'
        and schemaname = 'public'
        and tablename = table_name
    ) then
      execute format('alter publication supabase_realtime add table public.%I', table_name);
    end if;
  end loop;
end;
$$;
