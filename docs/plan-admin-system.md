# Admin 시스템 개발계획서

> Codex 실행 지시서. 각 Phase는 독립적으로 실행 가능하다.
> 검증 및 커밋은 별도 담당자가 진행한다.

---

## 개요

### 목표
템플릿 메타데이터를 DB(Supabase)로 관리하고, 관리자 페이지에서 템플릿 등록/수정/삭제 및 주문 조회가 가능한 시스템 구축.

### 핵심 원칙
- 템플릿 **코드(Next.js 라우트)는 변경하지 않는다.**
- Admin은 DB 레코드만 관리한다.
- `slug` = DB의 식별자 = 폴더명 (예: `furniture`, `multi-shop`)
- 랜딩페이지(`/en`, `/ko`)는 하드코딩 배열 대신 DB를 조회한다.
- **UI 컴포넌트와 데이터 로직을 엄격히 분리한다.**

### 기술 스택
- DB: Supabase (PostgreSQL)
- 인증: Supabase Auth (이메일/패스워드)
- Admin UI: Next.js App Router (`src/app/admin/`)
- 스타일: Tailwind CSS

---

## UI / 로직 분리 원칙

Admin 시스템은 아래 3개 레이어로 엄격히 분리한다.

```
┌─────────────────────────────────────────────┐
│  Page Layer (Server Component)              │
│  - 데이터 fetch (Supabase 직접 조회)         │
│  - URL 파라미터 처리                          │
│  - UI 컴포넌트에 props 전달만 함              │
│  - 비즈니스 로직 없음                          │
├─────────────────────────────────────────────┤
│  Feature Component Layer (Client Component) │
│  - 상태 관리 (useState, useOptimistic)       │
│  - 사용자 이벤트 처리                          │
│  - API 호출 (Server Action 또는 fetch)       │
│  - UI 컴포넌트 조합                           │
├─────────────────────────────────────────────┤
│  UI Component Layer (Pure Component)        │
│  - 데이터/로직 없음                            │
│  - props만 받아 렌더링                         │
│  - 재사용 가능, 스토리북 없이도 독립 테스트 가능  │
│  - src/app/admin/_components/ui/ 에 위치     │
└─────────────────────────────────────────────┘
```

### 파일 구조

```
src/app/admin/
├── _components/
│   ├── ui/                      # 순수 UI 컴포넌트 (로직 없음)
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Table.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   └── EmptyState.tsx
│   ├── layout/                  # 레이아웃 컴포넌트
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── AdminShell.tsx       # Sidebar + TopBar 조합
│   ├── templates/               # 템플릿 Feature 컴포넌트
│   │   ├── TemplateTable.tsx    # 목록 테이블 (Client)
│   │   ├── TemplateForm.tsx     # 등록/수정 폼 (Client)
│   │   └── TemplateActions.tsx  # 삭제/상태변경 버튼 (Client)
│   └── orders/                  # 주문 Feature 컴포넌트
│       ├── OrderTable.tsx
│       └── OrderStatusSelect.tsx
├── login/
│   └── page.tsx
├── templates/
│   ├── page.tsx                 # Server: 목록 fetch → TemplateTable
│   ├── new/
│   │   └── page.tsx             # Server: 빈 폼 → TemplateForm
│   └── [id]/
│       └── page.tsx             # Server: 단건 fetch → TemplateForm
├── orders/
│   └── page.tsx                 # Server: 주문 fetch → OrderTable
├── layout.tsx
└── page.tsx                     # /admin/templates 로 redirect
```

---

## Admin 디자인 시스템

### 디자인 원칙
- **미니멀**: 불필요한 장식 없음. 데이터와 액션만 표시.
- **직관적**: 버튼 위치, 상태 색상이 일관됨. 학습 없이 사용 가능.
- **밀도**: 한 화면에 최대한 많은 정보. 페이지 이동 최소화.

### 컬러 토큰

```tsx
// src/app/admin/_components/ui/tokens.ts
export const adminTokens = {
  // 배경
  bg: {
    page: "bg-zinc-50",           // 페이지 전체 배경
    surface: "bg-white",          // 카드, 테이블 배경
    sidebar: "bg-zinc-900",       // 사이드바
    hover: "hover:bg-zinc-50",    // 행 hover
    muted: "bg-zinc-100",         // 비활성 영역
  },
  // 텍스트
  text: {
    primary: "text-zinc-900",     // 주요 텍스트
    secondary: "text-zinc-500",   // 보조 텍스트
    muted: "text-zinc-400",       // 힌트, 플레이스홀더
    inverse: "text-white",        // 다크 배경 위
    link: "text-blue-600",
  },
  // 보더
  border: {
    default: "border-zinc-200",
    focus: "border-zinc-900",
    error: "border-red-400",
  },
  // 상태 배지 색상
  status: {
    published: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    draft:     { bg: "bg-zinc-100",   text: "text-zinc-600",    dot: "bg-zinc-400" },
    archived:  { bg: "bg-red-50",     text: "text-red-600",     dot: "bg-red-400" },
    paid:      { bg: "bg-blue-50",    text: "text-blue-700",    dot: "bg-blue-500" },
    pending:   { bg: "bg-amber-50",   text: "text-amber-700",   dot: "bg-amber-500" },
    cancelled: { bg: "bg-zinc-100",   text: "text-zinc-500",    dot: "bg-zinc-400" },
  },
} as const;
```

### 타이포그래피

시스템 폰트만 사용 (외부 폰트 로드 없음, 빠른 Admin 로딩).

```css
/* admin layout에서 system font 사용 */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

| 용도 | 클래스 |
|------|--------|
| 페이지 제목 | `text-lg font-semibold text-zinc-900` |
| 섹션 제목 | `text-sm font-medium text-zinc-900` |
| 테이블 헤더 | `text-xs font-medium text-zinc-500 uppercase tracking-wider` |
| 본문 | `text-sm text-zinc-700` |
| 보조 텍스트 | `text-xs text-zinc-500` |

### 스페이싱

| 영역 | 값 |
|------|-----|
| 페이지 패딩 | `p-8` |
| 카드 패딩 | `p-6` |
| 섹션 간격 | `space-y-6` |
| 인풋 패딩 | `px-3 py-2` |
| 테이블 셀 | `px-4 py-3` |

---

## UI 컴포넌트 스펙

### Button.tsx

```tsx
// src/app/admin/_components/ui/Button.tsx
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}
```

variant별 스타일:
- `primary`: `bg-zinc-900 text-white hover:bg-zinc-700`
- `secondary`: `bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50`
- `ghost`: `text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100`
- `danger`: `bg-red-600 text-white hover:bg-red-700`

size별 스타일:
- `sm`: `text-xs px-3 py-1.5 rounded-md`
- `md`: `text-sm px-4 py-2 rounded-lg`

loading 상태: 버튼 비활성화 + 텍스트 앞에 스피너 아이콘 (lucide-react `Loader2`)

### Badge.tsx

```tsx
interface BadgeProps {
  status: "published" | "draft" | "archived" | "paid" | "pending" | "cancelled";
  label?: string; // 없으면 status 텍스트 자동 사용
}
```

렌더링: `● 라벨` 형태. 좌측에 상태 점(`●`), 우측에 텍스트.
```
● Published   (emerald)
● Draft       (zinc)
● Archived    (red)
```

### Input.tsx

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}
```

- label: `text-sm font-medium text-zinc-700 mb-1`
- input: `w-full px-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900`
- error: `text-xs text-red-500 mt-1`
- hint: `text-xs text-zinc-400 mt-1`

### Table.tsx

```tsx
interface Column<T> {
  key: string;
  header: string;
  width?: string;
  render: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}
```

- 헤더: `bg-zinc-50 border-b border-zinc-200`
- 행: `border-b border-zinc-100 hover:bg-zinc-50 transition-colors`
- 빈 상태: EmptyState 컴포넌트 표시

### Modal.tsx

```tsx
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
```

- 배경: `fixed inset-0 bg-black/40 backdrop-blur-sm`
- 패널: `bg-white rounded-xl shadow-xl max-w-md w-full p-6`
- 닫기: ESC 키 및 배경 클릭으로 닫힘

### EmptyState.tsx

```tsx
interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}
```

렌더링: 중앙 정렬, 아이콘(lucide-react) + 제목 + 설명 + 액션 버튼

---

## 레이아웃 컴포넌트 스펙

### AdminShell.tsx

전체 Admin 레이아웃. Sidebar + 우측 콘텐츠 영역.

```
┌──────────┬──────────────────────────────────┐
│          │  TopBar                           │
│ Sidebar  ├──────────────────────────────────┤
│  (240px) │                                  │
│          │  {children}                       │
│          │                                  │
└──────────┴──────────────────────────────────┘
```

### Sidebar.tsx

```
Oh My Template          ← 브랜드명 (상단)
─────────────
📄 Templates            ← 현재 경로 활성화 표시
📦 Orders
─────────────
[Logout]                ← 하단 고정
```

스타일:
- 배경: `bg-zinc-900`
- 메뉴 텍스트: `text-zinc-400`
- 활성 메뉴: `bg-zinc-800 text-white rounded-lg`
- 너비: `w-60` (고정)

### TopBar.tsx

```
[페이지 제목]                    [액션 버튼]
```

- 좌측: 현재 페이지 제목 (`text-lg font-semibold`)
- 우측: 페이지별 주요 액션 버튼 (예: "새 템플릿 등록")
- 하단 보더: `border-b border-zinc-200`

---

## Phase 1: Supabase 연동 기반 설정

### 1-1. 패키지 설치

```bash
npm install @supabase/supabase-js @supabase/ssr
```

### 1-2. 환경변수

파일: `.env.local` (신규 생성)

```env
NEXT_PUBLIC_SUPABASE_URL=https://[your-project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
```

### 1-3. Supabase 클라이언트 유틸

**파일: `src/lib/supabase/client.ts`** (신규 생성)
```ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

**파일: `src/lib/supabase/server.ts`** (신규 생성)
```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
}
```

**파일: `src/lib/supabase/admin.ts`** (신규 생성)
```ts
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
```

### 1-4. 타입 정의

**파일: `src/types/template.ts`** (신규 생성)

```ts
export type TemplateStatus = "draft" | "published" | "archived";

export interface Template {
  id: string;
  slug: string;
  name_en: string;
  name_ko: string | null;
  category: string;
  description_en: string | null;
  description_ko: string | null;
  thumbnail_url: string | null;
  price: number;
  status: TemplateStatus;
  sort_order: number;
  is_featured: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type OrderStatus = "pending" | "paid" | "cancelled";

export interface Order {
  id: string;
  template_id: string | null;
  template_slug: string;
  customer_email: string;
  customer_name: string | null;
  amount: number;
  status: OrderStatus;
  note: string | null;
  created_at: string;
}
```

### 1-5. DB 스키마

**파일: `supabase/schema.sql`** (신규 생성 - 실행은 담당자가 Supabase 대시보드에서 직접)

```sql
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

create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger templates_updated_at
  before update on templates
  for each row execute function update_updated_at();

alter table templates disable row level security;
alter table orders disable row level security;
```

---

## Phase 2: 랜딩페이지 DB 연동

### 2-1. 영문 랜딩페이지 수정

**파일: `src/app/en/page.tsx`**

- `export default async function` 으로 변경
- 상단에 추가: `import { createClient } from "@/lib/supabase/server";`
- 하드코딩 배열 제거, 아래 코드로 교체:

```ts
const supabase = await createClient();
const { data: templates } = await supabase
  .from("templates")
  .select("*")
  .eq("status", "published")
  .order("sort_order", { ascending: true });
const list = templates ?? [];
```

- 카드 렌더링 매핑:
  - 이름: `template.name_en`
  - 설명: `template.description_en`
  - 썸네일: `template.thumbnail_url`
  - 링크: `/en/templates/${template.slug}`
  - 카테고리: `template.category`
  - featured: `template.is_featured`

### 2-2. 국문 랜딩페이지 수정

**파일: `src/app/ko/page.tsx`**

2-1과 동일, 아래 값 사용:
- 이름: `template.name_ko ?? template.name_en`
- 설명: `template.description_ko ?? template.description_en`
- 링크: `/ko/templates/${template.slug}`

---

## Phase 3: Admin UI 구축

### 3-1. Admin 레이아웃 및 인증

**파일: `src/middleware.ts`** (신규 생성)

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (pathname === "/admin/login") return NextResponse.next();

  const response = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => request.cookies.getAll(), setAll: () => {} } }
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/admin/login", request.url));
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
```

**파일: `src/app/admin/layout.tsx`** (신규 생성)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin - Oh My Template" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-zinc-50 text-zinc-900 antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
```

### 3-2. UI 컴포넌트 구현

아래 파일을 모두 신규 생성한다. 각 컴포넌트는 위 "UI 컴포넌트 스펙"을 그대로 구현한다.

- `src/app/admin/_components/ui/Button.tsx`
- `src/app/admin/_components/ui/Badge.tsx`
- `src/app/admin/_components/ui/Card.tsx`
- `src/app/admin/_components/ui/Input.tsx`
- `src/app/admin/_components/ui/Select.tsx`
- `src/app/admin/_components/ui/Table.tsx`
- `src/app/admin/_components/ui/Modal.tsx`
- `src/app/admin/_components/ui/EmptyState.tsx`
- `src/app/admin/_components/ui/Toast.tsx`

**Toast.tsx 동작**: 우측 하단 고정 (`fixed bottom-4 right-4`), 3초 후 자동 사라짐, 성공(emerald)/에러(red) 두 가지.

### 3-3. 레이아웃 컴포넌트 구현

- `src/app/admin/_components/layout/Sidebar.tsx` — 위 스펙 참고
- `src/app/admin/_components/layout/TopBar.tsx` — 좌측 제목, 우측 slot
- `src/app/admin/_components/layout/AdminShell.tsx` — Sidebar + TopBar + children 조합

### 3-4. 로그인 페이지

**파일: `src/app/admin/login/page.tsx`** (신규 생성)

화면 구성:
```
중앙 카드 (max-w-sm, shadow-lg, rounded-2xl, p-8)
─────────────────────────────
Oh My Template              ← 브랜드명
Admin                       ← 서브타이틀 (text-zinc-500)

[이메일 Input]
[패스워드 Input]
[로그인 버튼 - primary, w-full]
[에러 메시지 - text-red-500 text-sm]
```

동작:
- "use client" 컴포넌트
- `createClient().auth.signInWithPassword({ email, password })` 호출
- 성공 시 `router.push("/admin/templates")`
- 실패 시 에러 메시지 표시

### 3-5. 템플릿 목록 페이지

**파일: `src/app/admin/templates/page.tsx`** (신규 생성 - Server Component)

```tsx
// 데이터 fetch만 담당
const supabase = await createClient();
const { data } = await supabase.from("templates").select("*").order("sort_order");
return <TemplateTable data={data ?? []} />;
```

**파일: `src/app/admin/_components/templates/TemplateTable.tsx`** (신규 생성 - Client Component)

테이블 컬럼:
| 컬럼 | 내용 |
|------|------|
| 순서 | `sort_order` 숫자 |
| 슬러그 | `slug` (monospace, `font-mono text-xs`) |
| 이름 | `name_en` + 아래에 `name_ko` (text-zinc-400) |
| 카테고리 | 텍스트 |
| 상태 | Badge 컴포넌트 |
| 가격 | `price.toLocaleString()원` |
| Featured | 체크 아이콘 또는 빈칸 |
| 액션 | 수정 버튼(ghost), 삭제 버튼(danger/ghost) |

상단 영역:
- 상태 필터 탭: 전체 / Published / Draft / Archived
- 우측: "새 템플릿 등록" 버튼

삭제 동작: Modal로 확인 후 `/api/admin/templates/[id]` DELETE 호출 → Toast 표시 → 목록 갱신

### 3-6. 템플릿 등록/수정 폼

**파일: `src/app/admin/templates/new/page.tsx`** (Server Component)
```tsx
return <TemplateForm mode="create" />;
```

**파일: `src/app/admin/templates/[id]/page.tsx`** (Server Component)
```tsx
const { data } = await supabase.from("templates").select("*").eq("id", params.id).single();
return <TemplateForm mode="edit" initialData={data} />;
```

**파일: `src/app/admin/_components/templates/TemplateForm.tsx`** (Client Component)

폼 필드 (2컬럼 그리드 레이아웃):

| 필드 | 타입 | 필수 | 설명 |
|------|------|:---:|------|
| `slug` | Input | ✓ | 영문 소문자/하이픈만, create 시만 편집 가능 |
| `name_en` | Input | ✓ | 영문 이름 |
| `name_ko` | Input | | 국문 이름 |
| `category` | Select | ✓ | retail/corporate/portfolio/media/service/hospitality/lifestyle |
| `status` | Select | ✓ | draft/published/archived |
| `price` | Input[number] | | KRW, 0 이상 |
| `sort_order` | Input[number] | | 표시 순서 |
| `is_featured` | Checkbox | | featured 여부 |
| `thumbnail_url` | Input | | 썸네일 URL |
| `description_en` | Textarea | | 영문 설명 |
| `description_ko` | Textarea | | 국문 설명 |
| `tags` | Input | | 쉼표 구분 (예: `responsive, dark-mode`) |

하단 버튼: "저장" (primary) + "취소" (ghost, `/admin/templates`로 이동)

slug 중복 검증: Input blur 시 `/api/admin/templates?slug=xxx` GET으로 중복 확인, 중복이면 에러 표시.

저장 동작:
- create: POST `/api/admin/templates` → 성공 시 `/admin/templates` 이동 + Toast
- edit: PATCH `/api/admin/templates/[id]` → 성공 시 목록 이동 + Toast

### 3-7. API Routes

**파일: `src/app/api/admin/templates/route.ts`** (신규 생성)

```
GET  ?slug=xxx  → slug 중복 확인 (200: {exists: boolean})
GET  (no param) → 전체 목록
POST            → 신규 등록
```

**파일: `src/app/api/admin/templates/[id]/route.ts`** (신규 생성)

```
GET    → 단건 조회
PATCH  → 수정
DELETE → 삭제
```

모든 route는 `createAdminClient()` 사용.

### 3-8. 주문 목록 페이지

**파일: `src/app/admin/orders/page.tsx`** (Server Component)

```tsx
const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
return <OrderTable data={data ?? []} />;
```

**파일: `src/app/admin/_components/orders/OrderTable.tsx`** (Client Component)

테이블 컬럼: 주문번호(앞 8자리), 템플릿 slug, 고객 이메일, 금액, 상태 Badge, 주문일

상태 변경: 각 행 상태 셀에 Select 드롭다운, 변경 시 즉시 PATCH 호출

### 3-9. Admin 홈

**파일: `src/app/admin/page.tsx`** (신규 생성)
```tsx
import { redirect } from "next/navigation";
export default function AdminPage() { redirect("/admin/templates"); }
```

---

## Phase 4: 기존 템플릿 데이터 마이그레이션

**파일: `supabase/seed.sql`** (신규 생성)

17개 템플릿 전체에 대한 insert 구문. 담당자가 Supabase 대시보드에서 실행.

```sql
insert into templates (slug, name_en, name_ko, category, description_en, description_ko, thumbnail_url, price, status, sort_order, is_featured) values
('airline', 'Airline', '에어라인', 'hospitality', 'Premium airline booking template', '프리미엄 항공 예약 템플릿', '/templates/airline/thumbnail.jpg', 0, 'published', 1, false),
('car', 'Car Showroom', '자동차 쇼룸', 'retail', 'Luxury car showroom template', '럭셔리 자동차 쇼룸 템플릿', '/templates/car/thumbnail.jpg', 0, 'published', 2, false),
('cosmetic', 'Cosmetic Store', '코스메틱 스토어', 'lifestyle', 'Beauty and cosmetic store template', '뷰티 코스메틱 스토어 템플릿', '/templates/cosmetic/thumbnail.jpg', 0, 'published', 3, false),
('dashboard', 'Dashboard', '대시보드', 'service', 'Analytics dashboard template', '분석 대시보드 템플릿', '/templates/dashboard/thumbnail.jpg', 0, 'published', 4, false),
('docs', 'Documentation', '문서 시스템', 'service', 'Documentation workspace template', '문서 협업 워크스페이스 템플릿', '/templates/docs/thumbnail.jpg', 0, 'published', 5, false),
('exhibition', 'Exhibition', '전시관', 'portfolio', 'Museum and exhibition template', '미술관 전시 템플릿', '/templates/exhibition/thumbnail.jpg', 0, 'published', 6, false),
('fashion', 'Fashion Store', '패션 스토어', 'lifestyle', 'Elegant fashion store template', '엘레강트한 패션 스토어 템플릿', '/templates/fashion/thumbnail.jpg', 0, 'published', 7, false),
('furniture', 'Furniture Modern', '퍼니처 모던', 'retail', 'Modern furniture store template', '현대적인 가구 스토어 템플릿', '/templates/furniture/thumbnail.jpg', 0, 'published', 8, false),
('ir', 'IR', 'IR', 'corporate', 'Investor relations template', '투자자 관계(IR) 템플릿', '/templates/ir/thumbnail.jpg', 0, 'published', 9, false),
('jewelry', 'Jewelry', '주얼리', 'lifestyle', 'Luxury jewelry store template', '럭셔리 주얼리 스토어 템플릿', '/templates/jewelry/thumbnail.jpg', 0, 'published', 10, false),
('magazine', 'Magazine', '매거진', 'media', 'Editorial magazine template', '에디토리얼 매거진 템플릿', '/templates/magazine/thumbnail.jpg', 0, 'published', 11, false),
('multi-shop', 'Multi Shop', '멀티샵', 'retail', 'Multi-category shop template', '멀티 카테고리 쇼핑 템플릿', '/templates/multi-shop/thumbnail.jpg', 0, 'published', 12, false),
('newspaper', 'Newspaper', '신문', 'media', 'Online newspaper template', '온라인 신문 템플릿', '/templates/newspaper/thumbnail.jpg', 0, 'published', 13, false),
('portfolio', 'Portfolio', '포트폴리오', 'portfolio', 'Creative portfolio template', '크리에이티브 포트폴리오 템플릿', '/templates/portfolio/thumbnail.jpg', 0, 'published', 14, false),
('sneaker', 'Sneaker Store', '스니커 스토어', 'retail', 'Sneaker and streetwear store template', '스니커 스트리트웨어 스토어 템플릿', '/templates/sneaker/thumbnail.jpg', 0, 'published', 15, false),
('studio', 'Studio', '스튜디오', 'portfolio', 'Creative studio template', '크리에이티브 스튜디오 템플릿', '/templates/studio/thumbnail.jpg', 0, 'published', 16, false),
('technology', 'Technology - Robotflow', '테크놀로지 - 로봇플로우', 'corporate', 'AI robotics company template', 'AI 로봇 기업 템플릿', '/templates/technology/thumbnail.jpg', 0, 'published', 17, true);
```

---

## 작업 순서 요약

| Phase | 작업 | 신규 파일 수 |
|-------|------|:---:|
| 1 | Supabase 설정, 타입, DB 스키마 | 5개 |
| 2 | 랜딩페이지 DB 연동 | 2개 수정 |
| 3 | UI 컴포넌트 + Admin 페이지 전체 | 22개 |
| 4 | Seed SQL | 1개 |

---

## 검증 항목 (담당자 확인)

**Phase 1 완료 후:**
- [ ] `supabase/schema.sql` 내용 검토 후 Supabase 대시보드에서 실행
- [ ] `.env.local`에 실제 키 입력 (담당자 직접)

**Phase 2 완료 후:**
- [ ] `/en`, `/ko` 접속 시 DB 기반 카드 렌더링 확인
- [ ] DB 데이터 없을 때 빈 상태 처리 확인

**Phase 3 완료 후:**
- [ ] `/admin/login` → 로그인 → `/admin/templates` 이동
- [ ] 미인증 시 `/admin/login` 리디렉션
- [ ] 템플릿 등록 → 목록에 표시
- [ ] 템플릿 수정 → 변경 내용 반영
- [ ] 삭제 확인 모달 → 삭제 → 목록에서 제거
- [ ] Toast 정상 표시 (성공/에러)
- [ ] 주문 목록 조회 및 상태 변경

**Phase 4 완료 후:**
- [ ] `supabase/seed.sql` 실행 후 랜딩페이지에 17개 카드 정상 표시
