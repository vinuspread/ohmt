-- Oh My Template - Database Schema
-- Supabase SQL Editor에서 실행

-- templates 테이블
-- 슬러그당 1행이 아니라 (slug, lang)당 1행. en/ko 정보는 완전히 독립적으로 관리된다.
create table if not exists templates (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  lang text not null check (lang in ('en', 'ko')),
  name text not null,
  category text not null,
  description text,
  thumbnail_url text,
  price integer default 0,
  status text default 'draft' check (status in ('uploaded', 'draft', 'published', 'archived')),
  sort_order integer default 0,
  is_featured boolean default false,
  tags text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (slug, lang)
);

-- categories 테이블
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

insert into categories (name, sort_order) values
  ('retail', 0),
  ('corporate', 1),
  ('portfolio', 2),
  ('media', 3),
  ('service', 4),
  ('hospitality', 5),
  ('lifestyle', 6)
on conflict (name) do nothing;

-- orders 테이블
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  template_id uuid references templates(id) on delete set null,
  template_slug text not null,
  customer_email text not null,
  customer_name text,
  amount integer not null,
  status text default 'pending' check (status in ('pending', 'paid', 'cancelled')),
  note text,
  created_at timestamptz default now()
);

-- updated_at 자동 갱신 트리거
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger templates_updated_at
  before update on templates
  for each row execute function update_updated_at();

create trigger categories_updated_at
  before update on categories
  for each row execute function update_updated_at();

-- RLS 비활성화 (service_role_key로 서버에서만 접근)
alter table templates disable row level security;
alter table orders disable row level security;
alter table categories disable row level security;
