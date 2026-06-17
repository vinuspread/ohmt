# FAQ 관리 기능 추가 — Codex 작업 지시서

## 목표

홈 랜딩 페이지(`/en`, `/ko`)의 FAQ 섹션 콘텐츠를 관리자(`/admin`)에서 추가/수정/삭제할 수 있도록 구현한다.

---

## 현황 파악

### FAQ 데이터 위치 (현재)
- `src/app/en/LandingPageClient.tsx` 95~116번째 줄 — 영문 FAQ 5개 하드코딩
- `src/app/ko/LandingPageClient.tsx` 95~116번째 줄 — 국문 FAQ 5개 하드코딩

### FAQ 데이터 구조 (현재)
```ts
{ q: string; a: string }
```

### FAQ UI (홈)
- accordion 형태 (질문 클릭 → 답변 펼침)
- Framer Motion `AnimatePresence`로 애니메이션 처리
- `en`, `ko` 언어별로 완전히 독립된 데이터

### 기존 관리자 패턴 (반드시 따를 것)
- DB: Supabase (`src/lib/supabase/admin.ts`, `server.ts`, `client.ts` 참고)
- API 라우트: `src/app/api/admin/[resource]/route.ts` (GET/POST), `src/app/api/admin/[resource]/[id]/route.ts` (PATCH/DELETE)
- Admin UI: `src/app/admin/[resource]/page.tsx` (서버 컴포넌트 + 데이터 fetch) + `src/app/admin/_components/[resource]/` (클라이언트 컴포넌트)
- UI 컴포넌트: `src/app/admin/_components/ui/` 안의 `Button`, `Input`, `Modal`, `Table`, `Toast` 사용
- 레이아웃: `AdminShell` 사용
- 사이드바: `src/app/admin/_components/layout/Sidebar.tsx` — `navItems` 배열에 추가

---

## 구현 범위

### 1. Supabase `faqs` 테이블 추가

`supabase/schema.sql` 파일에 아래 내용을 추가한다. (사용자가 Supabase SQL Editor에서 직접 실행)

```sql
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

drop trigger if exists faqs_updated_at on faqs;
create trigger faqs_updated_at
  before update on faqs
  for each row execute function update_updated_at();

alter table faqs disable row level security;
```

기존 하드코딩된 FAQ 데이터를 시드로 삽입한다:

```sql
-- 영문 FAQ
insert into faqs (lang, question, answer, sort_order) values
  ('en', 'What if I need additional revisions?', 'Starter includes 2, Professional includes 3, and Premium includes unlimited revisions. Additional revisions beyond these can be scheduled as an extra service.', 0),
  ('en', 'Do you manage domain and hosting?', 'Yes, we manage domain setup and cloud hosting setup during your package period. We send renewal notifications before expiration.', 1),
  ('en', 'What level of SEO support is included?', 'Basic SEO (optimized meta tags, semantic HTML hierarchy, and Google Search Console registration) is included in all packages.', 2),
  ('en', 'Will my site look similar to others using the same template?', 'No. Every template is uniquely customized with your specific typography, color palette, custom imagery, and content hierarchy. Each resulting site feels entirely bespoke.', 3),
  ('en', 'What happens if something breaks after launch?', 'Dedicated technical support is fully active during your package support period. Afterward, you can extend support with a flexible maintenance plan.', 4);

-- 국문 FAQ
insert into faqs (lang, question, answer, sort_order) values
  ('ko', '추가 수정이 필요한 경우는 어떻게 되나요?', 'Starter 패키지는 2회, Professional은 3회, Premium은 무제한 수정이 포함되어 있습니다. 무상 범위를 초과하는 수정 요청은 별도의 협의를 거쳐 작업해 드립니다.', 0),
  ('ko', '도메인과 호스팅도 관리해 주시나요?', '네, 선택하신 패키지에 명시된 무상 기간 동안 도메인 연결 및 클라우드 호스팅 인프라 설정을 전적으로 지원하고 대행해 드립니다. 계약 만료 시점 전에 갱신 안내를 전달해 드립니다.', 1),
  ('ko', '검색엔진 최적화(SEO) 지원 수준은 어떻게 되나요?', '기본적인 SEO(검색 노출을 위한 메타 태그 최적화, 시맨틱 구조 마크업 설계, Google Search Console 등록 대행)는 모든 패키지에 기본 탑재되어 제공됩니다.', 2),
  ('ko', '동일한 템플릿을 선택하면 다른 회사 사이트와 유사해 보이지 않나요?', '그렇지 않습니다. 로고, 전용 서체, 브랜드 고유의 컬러 파레트, 맞춤형 이미지 리소스와 카피라이팅이 1대1로 적용되기 때문에, 결과물은 완전히 유니크하며 브랜드 전용으로 기획 및 개발된 느낌을 줍니다.', 3),
  ('ko', '사이트 오픈 이후 오류가 생기거나 수정이 안 되면 어쩌죠?', '패키지별 기술 지원 약정 기간 동안 전담 유지보수가 제공됩니다. 해당 기간이 지난 후에도 월 단위의 유연한 유지보수 플랜으로 편리하게 서비스를 연장할 수 있습니다.', 4);
```

---

### 2. 타입 추가

`src/types/template.ts`에 추가:

```ts
export interface Faq {
  id: string;
  lang: TemplateLang;
  question: string;
  answer: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
```

---

### 3. API 라우트

**`src/app/api/admin/faqs/route.ts`** — GET(목록), POST(생성)
- GET: `?lang=en` 쿼리 파라미터로 언어 필터링 가능. 없으면 전체 반환. `sort_order` 오름차순 정렬.
- POST: `{ lang, question, answer, sort_order?, is_active? }` 받아서 insert.
- 유효성 검사: `lang`이 `'en'|'ko'`인지, `question`/`answer`가 비어있지 않은지 확인.

**`src/app/api/admin/faqs/[id]/route.ts`** — PATCH(수정), DELETE(삭제)
- PATCH: `{ question?, answer?, sort_order?, is_active? }` 부분 업데이트.
- DELETE: 단순 삭제, 의존성 없음.

기존 `src/app/api/admin/categories/route.ts` 구조를 그대로 따른다.

---

### 4. 관리자 UI

#### `src/app/admin/faqs/page.tsx` (서버 컴포넌트)
- Supabase에서 faqs 전체 조회 (`sort_order` 오름차순)
- `AdminShell title="FAQ"` 사용
- `FaqManager` 클라이언트 컴포넌트에 데이터 전달

#### `src/app/admin/_components/faqs/FaqManager.tsx` (클라이언트 컴포넌트)
- **언어 탭**: EN / KO 탭으로 전환하여 해당 언어 FAQ만 표시
- **테이블**: 기존 `Table` 컴포넌트 사용. 컬럼: `언어`, `질문`, `공개 여부`, `옵션(수정/삭제)`
- **추가/수정 모달**: 기존 `Modal` 컴포넌트 사용. 필드:
  - 언어 select (EN / KO)
  - 질문 `Input`
  - 답변 `<textarea>` (min-height 확보)
  - 공개 여부 checkbox
- **삭제**: `window.confirm` 후 DELETE 요청
- **Toast**: 성공/실패 피드백
- 저장 후 `router.refresh()` 호출

기존 `src/app/admin/_components/categories/CategoryManager.tsx` 구조를 참고한다.

---

### 5. 사이드바 메뉴 추가

`src/app/admin/_components/layout/Sidebar.tsx`의 `navItems`에 추가:

```ts
{ href: "/admin/faqs", label: "FAQ", icon: MessageCircleQuestion },
```

`lucide-react`에서 `MessageCircleQuestion` import 추가.

---

### 6. 홈 랜딩 페이지 연결

**`src/app/en/page.tsx`**
- Supabase에서 `lang='en'`, `is_active=true` FAQ를 `sort_order` 오름차순으로 조회
- `LandingPageClient`에 `faqs` prop으로 전달

**`src/app/ko/page.tsx`**
- 동일하게 `lang='ko'`, `is_active=true` FAQ 조회 후 전달

**`src/app/en/LandingPageClient.tsx`**
- `TemplateItem` 인터페이스 옆에 `FaqItem` 인터페이스 추가: `{ id: string; question: string; answer: string }`
- 컴포넌트 props에 `faqs: FaqItem[]` 추가
- 하드코딩된 `const faqs = [...]` 배열 제거
- FAQ 렌더링 부분: `faq.q` → `faq.question`, `faq.a` → `faq.answer`로 교체
- faqSchema의 `name: faq.q`, `text: faq.a` → `name: faq.question`, `text: faq.answer`로 교체

**`src/app/ko/LandingPageClient.tsx`**
- 동일하게 적용

---

## 파일 변경 목록 요약

| 파일 | 작업 |
|------|------|
| `supabase/schema.sql` | `faqs` 테이블 + 트리거 + 시드 추가 |
| `src/types/template.ts` | `Faq` 인터페이스 추가 |
| `src/app/api/admin/faqs/route.ts` | 신규 생성 |
| `src/app/api/admin/faqs/[id]/route.ts` | 신규 생성 |
| `src/app/admin/faqs/page.tsx` | 신규 생성 |
| `src/app/admin/_components/faqs/FaqManager.tsx` | 신규 생성 |
| `src/app/admin/_components/layout/Sidebar.tsx` | navItems에 FAQ 추가 |
| `src/app/en/page.tsx` | faqs DB 조회 + prop 전달 |
| `src/app/ko/page.tsx` | faqs DB 조회 + prop 전달 |
| `src/app/en/LandingPageClient.tsx` | faqs prop 수신, 하드코딩 제거 |
| `src/app/ko/LandingPageClient.tsx` | faqs prop 수신, 하드코딩 제거 |

---

## 주의사항

- `src/components/` 폴더에 파일을 추가하지 않는다 (`Logo.tsx`만 존재해야 함)
- em-dash(`—`) 사용 금지
- `font-light` Tailwind 클래스 사용 금지
- 빌드 완료 후 `npx tsc --noEmit` 및 `npm run build`로 반드시 검증
- 커밋 메시지: `feat: FAQ 관리 기능 추가 (admin CRUD + 홈 연결)`
