create table board_posts (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('ko', 'en')),
  title text not null,
  author_name text not null,
  contact text not null,
  content text not null,
  password_hash text not null,
  is_secret boolean not null default false,
  answer text,
  answered_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index board_posts_lang_created_at_idx on board_posts (lang, created_at desc);

alter table board_posts enable row level security;

create policy "admin_all" on board_posts for all to service_role using (true) with check (true);

create or replace function update_board_posts_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger board_posts_updated_at
  before update on board_posts
  for each row execute function update_board_posts_updated_at();
