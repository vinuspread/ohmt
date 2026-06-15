# Admin 시스템 Phase 3-A: 인증 + UI 컴포넌트 + 레이아웃

## 작업 개요

Admin 시스템의 기반을 구축한다.
- Supabase Auth 기반 인증 미들웨어
- 재사용 가능한 순수 UI 컴포넌트 8종
- Admin 레이아웃 컴포넌트 3종

**UI 컴포넌트는 props만 받아 렌더링한다. 데이터 fetch, API 호출, 상태 관리 코드를 포함하지 않는다.**

---

## 디자인 시스템 기준

모든 컴포넌트는 아래 토큰을 기준으로 구현한다.

```
배경
  페이지 전체:  bg-zinc-50
  카드/테이블:  bg-white
  사이드바:     bg-zinc-900
  행 hover:     hover:bg-zinc-50

텍스트
  주요:         text-zinc-900
  보조:         text-zinc-500
  힌트:         text-zinc-400
  다크 배경 위: text-white

보더
  기본:         border-zinc-200
  포커스:       border-zinc-900
  에러:         border-red-400

상태 색상
  published:  bg-emerald-50  text-emerald-700  dot: bg-emerald-500
  draft:      bg-zinc-100    text-zinc-600      dot: bg-zinc-400
  archived:   bg-red-50      text-red-600       dot: bg-red-400
  paid:       bg-blue-50     text-blue-700      dot: bg-blue-500
  pending:    bg-amber-50    text-amber-700     dot: bg-amber-500
  cancelled:  bg-zinc-100    text-zinc-500      dot: bg-zinc-400

폰트: system font
  style 속성: fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  외부 폰트 로드 없음

스페이싱
  페이지 패딩:  p-8
  카드 패딩:    p-6
  인풋 패딩:    px-3 py-2
  테이블 셀:    px-4 py-3
```

---

## Task 1: 미들웨어 생성

**파일 경로: `src/middleware.ts`** (신규 생성)

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

---

## Task 2: Admin 레이아웃

**파일 경로: `src/app/admin/layout.tsx`** (신규 생성)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin - Oh My Template" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className="bg-zinc-50 text-zinc-900 antialiased"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## Task 3: UI 컴포넌트 - Button

**파일 경로: `src/app/admin/_components/ui/Button.tsx`** (신규 생성)

- `"use client"` 선언
- props: `variant?: "primary" | "secondary" | "ghost" | "danger"` (기본값: `"secondary"`), `size?: "sm" | "md"` (기본값: `"md"`), `loading?: boolean`, 나머지는 `React.ButtonHTMLAttributes<HTMLButtonElement>` 확장
- variant별 className:
  - `primary`: `bg-zinc-900 text-white hover:bg-zinc-700`
  - `secondary`: `bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50`
  - `ghost`: `text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100`
  - `danger`: `bg-red-600 text-white hover:bg-red-700`
- size별 className:
  - `sm`: `text-xs px-3 py-1.5 rounded-md`
  - `md`: `text-sm px-4 py-2 rounded-lg`
- 공통 className: `inline-flex items-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed`
- `loading={true}` 시: `disabled` 처리 + 텍스트 앞에 lucide-react `Loader2` 아이콘 (`animate-spin w-3 h-3`)

---

## Task 4: UI 컴포넌트 - Badge

**파일 경로: `src/app/admin/_components/ui/Badge.tsx`** (신규 생성)

- props: `status: "published" | "draft" | "archived" | "paid" | "pending" | "cancelled"`, `label?: string`
- `label`이 없으면 `status` 문자열을 그대로 표시
- 렌더링: `<span>` 태그, 좌측에 채워진 원(●, `inline-block w-1.5 h-1.5 rounded-full`), 우측에 텍스트
- 공통 className: `inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full`
- 상태별 className (위 디자인 시스템 토큰 참고)

---

## Task 5: UI 컴포넌트 - Input

**파일 경로: `src/app/admin/_components/ui/Input.tsx`** (신규 생성)

- `"use client"` 선언
- props: `label?: string`, `error?: string`, `hint?: string`, 나머지는 `React.InputHTMLAttributes<HTMLInputElement>` 확장
- 구조:
  ```
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium text-zinc-700">}
    <input className="w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors
                      border-zinc-200 focus:border-zinc-900
                      placeholder:text-zinc-400 disabled:bg-zinc-50 disabled:text-zinc-400" />
    {error && <p className="text-xs text-red-500">}
    {hint && <p className="text-xs text-zinc-400">}
  </div>
  ```
- error가 있을 때 input의 border를 `border-red-400`으로 변경

---

## Task 6: UI 컴포넌트 - Select

**파일 경로: `src/app/admin/_components/ui/Select.tsx`** (신규 생성)

- `"use client"` 선언
- props: `label?: string`, `error?: string`, `options: { value: string; label: string }[]`, 나머지는 `React.SelectHTMLAttributes<HTMLSelectElement>` 확장
- Input과 동일한 래퍼/레이블/에러 구조
- `<select>` className: Input의 `<input>`과 동일하게, 우측에 chevron 아이콘은 브라우저 기본 사용

---

## Task 7: UI 컴포넌트 - Table

**파일 경로: `src/app/admin/_components/ui/Table.tsx`** (신규 생성)

- Generic 컴포넌트: `Table<T>`
- props:
  ```ts
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
- 구조:
  ```
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-zinc-50 border-b border-zinc-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
      <tbody>
        {data.length === 0 ? (
          <tr><td colSpan={columns.length}> EmptyState </td></tr>
        ) : data.map((row, i) => (
          <tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
            <td className="px-4 py-3">
  ```
- `emptyMessage`가 없으면 "데이터가 없습니다" 기본값

---

## Task 8: UI 컴포넌트 - Modal

**파일 경로: `src/app/admin/_components/ui/Modal.tsx`** (신규 생성)

- `"use client"` 선언
- props: `open: boolean`, `onClose: () => void`, `title: string`, `children: React.ReactNode`, `footer?: React.ReactNode`
- `open === false`이면 `null` 반환
- ESC 키 이벤트: `useEffect`로 `keydown` 이벤트 등록, ESC 누르면 `onClose()` 호출
- 구조:
  ```
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* 배경 오버레이 */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
    {/* 패널 */}
    <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-zinc-900">{title}</h2>
        <button onClick={onClose}> X 아이콘 (lucide-react X) </button>
      </div>
      {children}
      {footer && <div className="mt-6 flex justify-end gap-2">{footer}</div>}
    </div>
  </div>
  ```

---

## Task 9: UI 컴포넌트 - EmptyState

**파일 경로: `src/app/admin/_components/ui/EmptyState.tsx`** (신규 생성)

- props: `title: string`, `description?: string`, `action?: React.ReactNode`
- 구조: 중앙 정렬 세로 스택, lucide-react `Inbox` 아이콘 (`w-10 h-10 text-zinc-300`), 제목, 설명, 액션
- className: `flex flex-col items-center justify-center py-16 text-center`

---

## Task 10: UI 컴포넌트 - Toast

**파일 경로: `src/app/admin/_components/ui/Toast.tsx`** (신규 생성)

- `"use client"` 선언
- props: `message: string`, `type: "success" | "error"`, `onClose: () => void`
- `useEffect`로 3000ms 후 자동 `onClose()` 호출
- 위치: `fixed bottom-4 right-4 z-50`
- 구조:
  ```
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm font-medium
    ${type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                         : "bg-red-50 text-red-800 border border-red-200"}`}>
    {/* lucide-react: CheckCircle2 (success) 또는 XCircle (error) */}
    {message}
    <button onClick={onClose}> X </button>
  </div>
  ```

---

## Task 11: 레이아웃 - Sidebar

**파일 경로: `src/app/admin/_components/layout/Sidebar.tsx`** (신규 생성)

- `"use client"` 선언 (로그아웃 버튼 이벤트, usePathname 필요)
- `usePathname()`으로 현재 경로 확인, 해당 메뉴 활성 스타일 적용
- 구조:
  ```
  <aside className="w-60 min-h-screen bg-zinc-900 flex flex-col">
    {/* 브랜드 */}
    <div className="px-6 py-5 border-b border-zinc-800">
      <span className="text-white font-semibold text-sm">Oh My Template</span>
      <span className="block text-zinc-500 text-xs mt-0.5">Admin</span>
    </div>

    {/* 메뉴 */}
    <nav className="flex-1 px-3 py-4 space-y-1">
      {/* Templates 메뉴 */}
      <Link href="/admin/templates"
        className={활성: "bg-zinc-800 text-white" / 비활성: "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                   + " flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors"}>
        lucide-react LayoutTemplate 아이콘
        Templates
      </Link>
      {/* Orders 메뉴 - 동일한 패턴 */}
      lucide-react ShoppingBag 아이콘 + "Orders"
    </nav>

    {/* 로그아웃 */}
    <div className="px-3 py-4 border-t border-zinc-800">
      <button onClick={로그아웃 처리} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
        lucide-react LogOut 아이콘
        로그아웃
      </button>
    </div>
  </aside>
  ```
- 로그아웃: `createClient().auth.signOut()` 후 `router.push("/admin/login")`
- `createClient`는 `@/lib/supabase/client` (브라우저 클라이언트)

---

## Task 12: 레이아웃 - TopBar

**파일 경로: `src/app/admin/_components/layout/TopBar.tsx`** (신규 생성)

- props: `title: string`, `action?: React.ReactNode`
- 구조:
  ```
  <header className="h-14 bg-white border-b border-zinc-200 px-8 flex items-center justify-between">
    <h1 className="text-base font-semibold text-zinc-900">{title}</h1>
    {action && <div>{action}</div>}
  </header>
  ```

---

## Task 13: 레이아웃 - AdminShell

**파일 경로: `src/app/admin/_components/layout/AdminShell.tsx`** (신규 생성)

- props: `title: string`, `action?: React.ReactNode`, `children: React.ReactNode`
- 구조:
  ```
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col min-w-0">
      <TopBar title={title} action={action} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  </div>
  ```

---

## 완료 조건 체크리스트

- [ ] `src/middleware.ts` 생성됨
- [ ] `src/app/admin/layout.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Button.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Badge.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Input.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Select.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Table.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Modal.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/EmptyState.tsx` 생성됨
- [ ] `src/app/admin/_components/ui/Toast.tsx` 생성됨
- [ ] `src/app/admin/_components/layout/Sidebar.tsx` 생성됨
- [ ] `src/app/admin/_components/layout/TopBar.tsx` 생성됨
- [ ] `src/app/admin/_components/layout/AdminShell.tsx` 생성됨
- [ ] `npx tsc --noEmit` 통과
- [ ] `npm run build` 통과
