# 가격 패키지 관리자 기능 개발 지시서

## 목표

현재 `LandingPageClient.tsx`에 하드코딩된 가격 패키지(Starter / Professional / Premium)를
Supabase DB로 이전하고, 관리자 페이지에서 편집할 수 있게 만든다.

---

## 현재 상태

### 하드코딩 위치
- `src/app/ko/LandingPageClient.tsx` — `const packages = [...]` (line 76~125)
- `src/app/en/LandingPageClient.tsx` — `const packages = [...]` (line 53~102)

### 데이터 구조 (ko 기준)
```ts
{
  id: 'starter',
  name: 'Starter',
  price: '4,200,000원',
  description: '빠르게 시작하기 위한 핵심 기능 패키지',
  features: ['템플릿 1개 선택', '기본 페이지 5개 포함', ...],
  duration: '2주 소요',
  recommended?: true
}
```

### en 데이터 구조 (동일 schema, 텍스트만 다름)
```ts
{
  id: 'professional',
  name: 'Professional',
  price: '$6,200',
  description: 'Tailored premium design package',
  features: ['1 template selection', '8 pages included', ...],
  duration: '3 weeks',
  recommended: true
}
```

---

## 작업 항목

### 1. Supabase 테이블 생성

Supabase SQL Editor에서 아래 SQL을 실행한다:

```sql
create table pricing_packages (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('ko', 'en')),
  slug text not null,           -- 'starter' | 'professional' | 'premium'
  name text not null,
  description text not null default '',
  price text not null,          -- '4,200,000원' 또는 '$4,200'
  duration text not null,       -- '2주 소요' 또는 '2 weeks'
  features text[] not null default '{}',
  is_recommended boolean not null default false,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(lang, slug)
);

-- RLS 비활성화 (관리자 전용)
alter table pricing_packages enable row level security;
create policy "admin_all" on pricing_packages using (true) with check (true);
```

초기 데이터 삽입:
```sql
-- KO
insert into pricing_packages (lang, slug, name, description, price, duration, features, is_recommended, sort_order) values
('ko', 'starter', 'Starter', '빠르게 시작하기 위한 핵심 기능 패키지', '4,200,000원', '2주 소요',
  array['템플릿 1개 선택','기본 페이지 5개 포함','기본 브랜드 커스터마이징','기술 지원 6개월 제공','모바일 반응형 레이아웃','무상 수정 2회 제공'],
  false, 0),
('ko', 'professional', 'Professional', '브랜드 맞춤형 프리미엄 디자인 패키지', '6,200,000원', '3주 소요',
  array['템플릿 1개 선택','기본 페이지 8개 포함','고급 비주얼 커스터마이징','도메인 & 호스팅 1년 지원','무상 수정 3회 제공','1대1 전담 기술 지원 1년','기본 검색엔진 최적화(SEO) 세팅'],
  true, 1),
('ko', 'premium', 'Premium', '완전 맞춤화 및 기능 확장이 가능한 스케일 플랜', '9,200,000원', '4주 소요',
  array['무제한 맞춤형 요구사항 지원','페이지 개수 무제한 제공','커스텀 레이아웃 및 컴포넌트 설계','도메인 & 호스팅 2년 지원','무상 수정 무제한 제공','우선순위 전담 기술 지원 2년','고급 SEO 및 마케팅 분석 툴 연동'],
  false, 2);

-- EN
insert into pricing_packages (lang, slug, name, description, price, duration, features, is_recommended, sort_order) values
('en', 'starter', 'Starter', 'Essential package to get started fast', '$4,200', '2 weeks',
  array['1 template selection','5 pages included','Basic brand customization','6 months tech support','Responsive mobile layout','2 revision rounds'],
  false, 0),
('en', 'professional', 'Professional', 'Tailored premium design package', '$6,200', '3 weeks',
  array['1 template selection','8 pages included','Advanced visual customization','1 year hosting & domain','3 revision rounds','1 year dedicated support','Basic SEO setup'],
  true, 1),
('en', 'premium', 'Premium', 'Fully bespoke customization package', '$9,200', '4 weeks',
  array['Unlimited custom features','Unlimited pages','Custom layout & structure','2 years hosting & domain','Unlimited revisions','2 years priority support','Advanced SEO & Analytics'],
  false, 2);
```

---

### 2. 타입 추가

`src/types/template.ts`에 아래 타입을 추가한다:

```ts
export interface PricingPackage {
  id: string;
  lang: TemplateLang;
  slug: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  is_recommended: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
```

---

### 3. API 라우트 생성

#### `src/app/api/admin/pricing/route.ts`
- `GET` — `pricing_packages` 전체 조회 (order by sort_order)
- `POST` — 새 패키지 생성

#### `src/app/api/admin/pricing/[id]/route.ts`
- `PATCH` — 패키지 수정 (name, description, price, duration, features, is_recommended, is_active, sort_order)
- `DELETE` — 패키지 삭제

기존 `src/app/api/admin/faqs/route.ts`와 `src/app/api/admin/faqs/[id]/route.ts`를 참고해서 동일한 패턴으로 작성한다.
인증은 `createAdminClient`를 사용한다.

---

### 4. 관리자 UI 페이지

#### `src/app/admin/pricing/page.tsx`
기존 `src/app/admin/faqs/page.tsx` 패턴을 참고한다.

```tsx
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { PricingTable } from "@/app/admin/_components/pricing/PricingTable";
import { createClient } from "@/lib/supabase/server";

export default async function PricingPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("pricing_packages")
    .select("*")
    .order("lang").order("sort_order");

  return (
    <AdminShell title="가격 패키지">
      <PricingTable data={data ?? []} />
    </AdminShell>
  );
}
```

#### `src/app/admin/_components/pricing/PricingTable.tsx`

"use client" 컴포넌트. 아래 기능을 포함한다:

**탭**: `ko` / `en` 언어 전환 탭

**테이블 컬럼**:
- 순서 (sort_order)
- 플랜명 (name)
- 가격 (price)
- 기간 (duration)
- 추천 여부 (is_recommended — 토글)
- 활성 여부 (is_active — 토글)
- 액션 (수정 버튼)

**수정 모달 (인라인 또는 슬라이드 패널)**:
- name, description, price, duration 텍스트 입력
- features: textarea (줄바꿈으로 구분, 저장 시 배열로 변환)
- is_recommended, is_active 체크박스
- 저장 / 취소 버튼

기존 `src/app/admin/_components/faqs/` 컴포넌트 구조를 참고한다.

---

### 5. 사이드바 메뉴 추가

`src/app/admin/_components/layout/Sidebar.tsx`의 `navItems` 배열에 추가:

```ts
import { DollarSign, ... } from "lucide-react";

{ href: "/admin/pricing", label: "가격 패키지", icon: DollarSign },
```

Analytics 메뉴 아래, Templates 메뉴 위에 배치한다.

---

### 6. 랜딩 페이지 DB 연동

#### `src/app/ko/LandingPageClient.tsx`
- `const packages = [...]` 하드코딩 블록 **삭제**
- `packages` prop을 부모(server component)에서 받도록 변경

```tsx
// LandingPageClient props에 추가
interface LandingPageClientProps {
  templates: Template[];
  packages: PricingPackage[];  // ← 추가
  faqs: Faq[];
}
```

#### `src/app/ko/page.tsx` (server component)
```tsx
const { data: packagesData } = await supabase
  .from("pricing_packages")
  .select("*")
  .eq("lang", "ko")
  .eq("is_active", true)
  .order("sort_order");
```
`<LandingPageClient packages={packagesData ?? []} ... />`

#### 가격 섹션 렌더링 수정
`pkg.recommended` → `pkg.is_recommended`
`pkg.price` → `pkg.price` (동일)
`pkg.features` → `pkg.features` (동일, 이미 배열)

#### `src/app/en/LandingPageClient.tsx` + `src/app/en/page.tsx`
동일한 방식으로 lang='en' 데이터 연동.

---

## 파일 수정 요약

| 파일 | 작업 |
|------|------|
| Supabase SQL | 테이블 생성 + 초기 데이터 삽입 |
| `src/types/template.ts` | `PricingPackage` 타입 추가 |
| `src/app/api/admin/pricing/route.ts` | 신규 생성 |
| `src/app/api/admin/pricing/[id]/route.ts` | 신규 생성 |
| `src/app/admin/pricing/page.tsx` | 신규 생성 |
| `src/app/admin/_components/pricing/PricingTable.tsx` | 신규 생성 |
| `src/app/admin/_components/layout/Sidebar.tsx` | 메뉴 추가 |
| `src/app/ko/LandingPageClient.tsx` | 하드코딩 제거 → props 수신 |
| `src/app/ko/page.tsx` | DB 조회 후 props 전달 |
| `src/app/en/LandingPageClient.tsx` | 하드코딩 제거 → props 수신 |
| `src/app/en/page.tsx` | DB 조회 후 props 전달 |

---

## 참고 파일 (패턴 참조용)

- `src/app/admin/faqs/page.tsx`
- `src/app/admin/_components/faqs/` (FaqTable, FaqForm 등)
- `src/app/api/admin/faqs/route.ts`
- `src/app/api/admin/faqs/[id]/route.ts`
- `src/lib/supabase/server.ts` / `src/lib/supabase/admin.ts`

---

## 주의사항

- `src/components/` 폴더에 새 파일 추가 금지 (프로젝트 규칙)
- 관리자 API는 반드시 `createAdminClient` 사용
- 랜딩 페이지는 server component에서 데이터 fetch, client component로 props 전달
- 기존 가격 섹션의 UI/스타일은 변경하지 않는다 (데이터 연동만)
