create table inquiries (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('ko', 'en')),
  inquiry_type text not null check (inquiry_type in ('template', 'custom', 'other')),
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  company text,
  role text,
  package_name text,
  template_name text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'done', 'cancelled')),
  note text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table inquiries enable row level security;

create policy "admin_all" on inquiries for all to service_role using (true) with check (true);

create or replace function update_inquiries_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger inquiries_updated_at
  before update on inquiries
  for each row execute function update_inquiries_updated_at();
