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
  template_key text,
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

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('en', 'ko')),
  question text not null,
  answer text not null,
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists pricing_packages (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('ko', 'en')),
  slug text not null,
  name text not null,
  description text not null default '',
  price text not null,
  duration text not null,
  features text[] not null default '{}',
  is_recommended boolean not null default false,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(lang, slug)
);

insert into faqs (lang, question, answer, sort_order) values
  ('en', 'What if I need additional revisions?', 'Starter includes 2, Professional includes 3, and Premium includes unlimited revisions. Additional revisions beyond these can be scheduled as an extra service.', 0),
  ('en', 'Do you manage domain and hosting?', 'Yes, we manage domain setup and cloud hosting setup during your package period. We send renewal notifications before expiration.', 1),
  ('en', 'What level of SEO support is included?', 'Basic SEO (optimized meta tags, semantic HTML hierarchy, and Google Search Console registration) is included in all packages.', 2),
  ('en', 'Will my site look similar to others using the same template?', 'No. Every template is uniquely customized with your specific typography, color palette, custom imagery, and content hierarchy. Each resulting site feels entirely bespoke.', 3),
  ('en', 'What happens if something breaks after launch?', 'Dedicated technical support is fully active during your package support period. Afterward, you can extend support with a flexible maintenance plan.', 4),
  ('ko', '추가 수정이 필요한 경우는 어떻게 되나요?', 'Starter 패키지는 2회, Professional은 3회, Premium은 무제한 수정이 포함되어 있습니다. 무상 범위를 초과하는 수정 요청은 별도의 협의를 거쳐 작업해 드립니다.', 0),
  ('ko', '도메인과 호스팅도 관리해 주시나요?', '네, 선택하신 패키지에 명시된 무상 기간 동안 도메인 연결 및 클라우드 호스팅 인프라 설정을 전적으로 지원하고 대행해 드립니다. 계약 만료 시점 전에 갱신 안내를 전달해 드립니다.', 1),
  ('ko', '검색엔진 최적화(SEO) 지원 수준은 어떻게 되나요?', '기본적인 SEO(검색 노출을 위한 메타 태그 최적화, 시맨틱 구조 마크업 설계, Google Search Console 등록 대행)는 모든 패키지에 기본 탑재되어 제공됩니다.', 2),
  ('ko', '동일한 템플릿을 선택하면 다른 회사 사이트와 유사해 보이지 않나요?', '그렇지 않습니다. 로고, 전용 서체, 브랜드 고유의 컬러 파레트, 맞춤형 이미지 리소스와 카피라이팅이 1대1로 적용되기 때문에, 결과물은 완전히 유니크하며 브랜드 전용으로 기획 및 개발된 느낌을 줍니다.', 3),
  ('ko', '사이트 오픈 이후 오류가 생기거나 수정이 안 되면 어쩌죠?', '패키지별 기술 지원 약정 기간 동안 전담 유지보수가 제공됩니다. 해당 기간이 지난 후에도 월 단위의 유연한 유지보수 플랜으로 편리하게 서비스를 연장할 수 있습니다.', 4);

insert into pricing_packages (lang, slug, name, description, price, duration, features, is_recommended, sort_order) values
  ('ko', 'starter', 'Starter', '빠르게 시작하기 위한 핵심 기능 패키지', '4,200,000원', '2주 소요', array['템플릿 1개 선택','기본 페이지 5개 포함','기본 브랜드 커스터마이징','기술 지원 6개월 제공','모바일 반응형 레이아웃','무상 수정 2회 제공'], false, 0),
  ('ko', 'professional', 'Professional', '브랜드 맞춤형 프리미엄 디자인 패키지', '6,200,000원', '3주 소요', array['템플릿 1개 선택','기본 페이지 8개 포함','고급 비주얼 커스터마이징','도메인 & 호스팅 1년 지원','무상 수정 3회 제공','1대1 전담 기술 지원 1년','기본 검색엔진 최적화(SEO) 세팅'], true, 1),
  ('ko', 'premium', 'Premium', '완전 맞춤화 및 기능 확장이 가능한 스케일 플랜', '9,200,000원', '4주 소요', array['무제한 맞춤형 요구사항 지원','페이지 개수 무제한 제공','커스텀 레이아웃 및 컴포넌트 설계','도메인 & 호스팅 2년 지원','무상 수정 무제한 제공','우선순위 전담 기술 지원 2년','고급 SEO 및 마케팅 분석 툴 연동'], false, 2),
  ('en', 'starter', 'Starter', 'Essential package to get started fast', '$4,200', '2 weeks', array['1 template selection','5 pages included','Basic brand customization','6 months tech support','Responsive mobile layout','2 revision rounds'], false, 0),
  ('en', 'professional', 'Professional', 'Tailored premium design package', '$6,200', '3 weeks', array['1 template selection','8 pages included','Advanced visual customization','1 year hosting & domain','3 revision rounds','1 year dedicated support','Basic SEO setup'], true, 1),
  ('en', 'premium', 'Premium', 'Fully bespoke customization package', '$9,200', '4 weeks', array['Unlimited custom features','Unlimited pages','Custom layout & structure','2 years hosting & domain','Unlimited revisions','2 years priority support','Advanced SEO & Analytics'], false, 2)
on conflict (lang, slug) do nothing;

-- updated_at 자동 갱신 트리거
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists templates_updated_at on templates;
create trigger templates_updated_at
  before update on templates
  for each row execute function update_updated_at();

drop trigger if exists categories_updated_at on categories;
create trigger categories_updated_at
  before update on categories
  for each row execute function update_updated_at();

drop trigger if exists faqs_updated_at on faqs;
create trigger faqs_updated_at
  before update on faqs
  for each row execute function update_updated_at();

drop trigger if exists pricing_packages_updated_at on pricing_packages;
create trigger pricing_packages_updated_at
  before update on pricing_packages
  for each row execute function update_updated_at();

-- RLS 비활성화 (service_role_key로 서버에서만 접근)
alter table templates disable row level security;
alter table orders disable row level security;
alter table categories disable row level security;
alter table faqs disable row level security;
alter table pricing_packages enable row level security;
drop policy if exists admin_all on pricing_packages;
create policy admin_all on pricing_packages using (true) with check (true);
