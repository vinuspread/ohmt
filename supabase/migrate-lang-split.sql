-- templates 테이블을 slug 단일 행 구조에서 (slug, lang) 단위로 분리한다.
-- Supabase SQL Editor에서 순서대로 전체 실행.

-- 1. 새 컬럼 추가
alter table templates add column if not exists lang text;
alter table templates add column if not exists name text;
alter table templates add column if not exists description text;

-- 2. 기존 행을 en 행으로 채움 (지금까지 모든 행은 실질적으로 en 기준이었음)
update templates set lang = 'en', name = name_en, description = description_en where lang is null;

-- 2-1. 옛 name_en not null 제약 때문에 신규(ko) 행 insert가 막히므로 먼저 해제
alter table templates alter column name_en drop not null;

-- 2-2. slug 단독 unique 제약 때문에 같은 slug의 ko 행을 추가할 수 없으므로 먼저 해제
alter table templates drop constraint if exists templates_slug_key;

-- 3. name_ko가 있던 템플릿은 ko 행으로 복제 (en과 동일한 status/thumbnail/category 유지)
-- name_en도 같이 채워서 옛 not null 제약과 무관하게 항상 성공하도록 함
insert into templates (slug, lang, name, category, description, thumbnail_url, price, status, sort_order, is_featured, tags, name_en)
select slug, 'ko', name_ko, category, description_ko, thumbnail_url, price, status, sort_order, is_featured, tags, name_ko
from templates
where lang = 'en' and name_ko is not null and name_ko <> '';

-- 4. 제약/기본값 정리
alter table templates alter column lang set not null;
alter table templates alter column name set not null;
alter table templates add constraint templates_lang_check check (lang in ('en', 'ko'));

alter table templates add constraint templates_slug_lang_key unique (slug, lang);

-- 5. 옛 컬럼 제거
alter table templates drop column if exists name_en;
alter table templates drop column if exists name_ko;
alter table templates drop column if exists description_en;
alter table templates drop column if exists description_ko;
