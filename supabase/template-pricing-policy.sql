alter table templates
  add column if not exists applicable_packages text[] not null default '{}',
  add column if not exists requires_consultation boolean not null default false;
