ALTER TABLE templates
  ADD COLUMN IF NOT EXISTS applicable_industries text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS hashtags text[] NOT NULL DEFAULT '{}';
