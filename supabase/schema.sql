-- Oh My Template - Database Schema
-- Supabase SQL Editor에서 실행

-- templates 테이블
create table if not exists templates (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_en text not null,
  name_ko text,
  category text not null,
  description_en text,
  description_ko text,
  thumbnail_url text,
  price integer default 0,
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  sort_order integer default 0,
  is_featured boolean default false,
  tags text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

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

-- RLS 비활성화 (service_role_key로 서버에서만 접근)
alter table templates disable row level security;
alter table orders disable row level security;
