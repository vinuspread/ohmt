# Admin 시스템 Phase 3-B: 페이지 + API Routes

## 작업 개요

Phase 3-A에서 만든 UI 컴포넌트와 레이아웃을 사용해 Admin 페이지와 API Routes를 구현한다.

**사전 조건: Phase 3-A 완료** (`src/app/admin/_components/` 하위 파일 전체 존재)

---

## Task 1: 로그인 페이지

**파일 경로: `src/app/admin/login/page.tsx`** (신규 생성)

- `"use client"` 선언
- `useState`로 email, password, error, loading 상태 관리
- 로그인 처리:
  ```ts
  const supabase = createClient(); // @/lib/supabase/client
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) { setError("이메일 또는 비밀번호가 올바르지 않습니다."); return; }
  router.push("/admin/templates");
  ```
- UI 구조:
  ```
  전체 화면 중앙 정렬: className="min-h-screen flex items-center justify-center bg-zinc-50"

  카드: className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm"
    브랜드명: "Oh My Template" (text-lg font-semibold)
    서브타이틀: "Admin" (text-sm text-zinc-500 mt-1)
    구분선 mt-6

    폼 (space-y-4 mt-6):
      Input label="이메일" type="email" placeholder="admin@example.com"
      Input label="비밀번호" type="password"
      에러 메시지: {error && <p className="text-sm text-red-500">{error}</p>}
      Button variant="primary" 전체 너비(className="w-full justify-center") loading={loading}
        텍스트: "로그인"
  ```

---

## Task 2: Admin 홈 리디렉션

**파일 경로: `src/app/admin/page.tsx`** (신규 생성)

```tsx
import { redirect } from "next/navigation";
export default function AdminPage() {
  redirect("/admin/templates");
}
```

---

## Task 3: API Routes - 템플릿

**파일 경로: `src/app/api/admin/templates/route.ts`** (신규 생성)

```
GET  ?slug=xxx  → slug 중복 확인 → { exists: boolean }
GET  (파라미터 없음) → 전체 목록 → Template[]
POST → 신규 등록 → 생성된 Template
```

- `createAdminClient()` 사용 (`@/lib/supabase/admin`)
- POST 요청 바디: `{ slug, name_en, name_ko, category, description_en, description_ko, thumbnail_url, price, status, sort_order, is_featured, tags }`
- 에러 시 적절한 HTTP 상태코드 반환 (400, 409 중복, 500)

**파일 경로: `src/app/api/admin/templates/[id]/route.ts`** (신규 생성)

```
GET    → 단건 조회 → Template
PATCH  → 수정 → 수정된 Template
DELETE → 삭제 → { success: true }
```

---

## Task 4: API Routes - 주문

**파일 경로: `src/app/api/admin/orders/[id]/route.ts`** (신규 생성)

```
PATCH → 주문 상태 변경 → 수정된 Order
  바디: { status: "pending" | "paid" | "cancelled" }
```

---

## Task 5: 템플릿 Feature 컴포넌트 - TemplateTable

**파일 경로: `src/app/admin/_components/templates/TemplateTable.tsx`** (신규 생성)

- `"use client"` 선언
- props: `data: Template[]`
- 상태: `filter: "all" | "published" | "draft" | "archived"`, `deleteTarget: Template | null`, `toast: { message: string; type: "success" | "error" } | null`
- 상단 영역:
  ```
  <div className="flex items-center justify-between mb-6">
    {/* 필터 탭 */}
    <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg">
      {["all","published","draft","archived"].map(f =>
        <button className={활성: "bg-white shadow-sm text-zinc-900" / 비활성: "text-zinc-500 hover:text-zinc-700"
                           + " px-3 py-1.5 text-sm rounded-md transition-colors"}>
          {f === "all" ? "전체" : f}
        </button>
      )}
    </div>
    {/* 등록 버튼 */}
    <Link href="/admin/templates/new">
      <Button variant="primary" size="sm">+ 새 템플릿</Button>
    </Link>
  </div>
  ```
- 필터링된 데이터: `filter === "all" ? data : data.filter(t => t.status === filter)`
- Table 컴포넌트에 전달할 columns:

| key | header | render |
|-----|--------|--------|
| sort_order | # | `t.sort_order` |
| slug | Slug | `<span className="font-mono text-xs text-zinc-600">{t.slug}</span>` |
| name | 이름 | `<div><p className="font-medium">{t.name_en}</p><p className="text-xs text-zinc-400">{t.name_ko}</p></div>` |
| category | 카테고리 | `t.category` |
| status | 상태 | `<Badge status={t.status} />` |
| price | 가격 | `t.price === 0 ? "무료" : t.price.toLocaleString() + "원"` |
| is_featured | Featured | `t.is_featured ? lucide CheckIcon (text-emerald-500) : "-"` |
| actions | 액션 | 수정 버튼 + 삭제 버튼 |

- 수정 버튼: `<Link href={/admin/templates/${t.id}}><Button variant="ghost" size="sm">수정</Button></Link>`
- 삭제 버튼: `<Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">삭제</Button>` → 클릭 시 `setDeleteTarget(t)`

- 삭제 확인 Modal:
  ```
  open={!!deleteTarget}
  title="템플릿 삭제"
  내용: "{deleteTarget?.name_en} 템플릿을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
  footer:
    Button variant="secondary" onClick={() => setDeleteTarget(null)} → "취소"
    Button variant="danger" loading={deleting} onClick={handleDelete} → "삭제"
  ```

- handleDelete:
  ```ts
  await fetch(`/api/admin/templates/${deleteTarget.id}`, { method: "DELETE" });
  // 성공 시: setToast({ message: "삭제됐습니다.", type: "success" }), router.refresh()
  // 실패 시: setToast({ message: "삭제에 실패했습니다.", type: "error" })
  setDeleteTarget(null);
  ```

- Toast 렌더링: `{toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}`

---

## Task 6: 템플릿 Feature 컴포넌트 - TemplateForm

**파일 경로: `src/app/admin/_components/templates/TemplateForm.tsx`** (신규 생성)

- `"use client"` 선언
- props: `mode: "create" | "edit"`, `initialData?: Template`
- 상태: 각 필드별 useState, `loading`, `toast`, `slugError`

- 폼 레이아웃: 2컬럼 그리드 (`grid grid-cols-2 gap-6`)
- 전체 너비 필드: `description_en`, `description_ko` (각각 `col-span-2`)

폼 필드 목록:

| 필드 | 컴포넌트 | 비고 |
|------|----------|------|
| `slug` | Input | `mode === "edit"` 시 `disabled` |
| `name_en` | Input | 필수 |
| `name_ko` | Input | |
| `category` | Select | options: retail/corporate/portfolio/media/service/hospitality/lifestyle |
| `status` | Select | options: draft/published/archived |
| `price` | Input type="number" | min=0 |
| `sort_order` | Input type="number" | |
| `is_featured` | checkbox | 직접 구현 (label + input[type=checkbox]) |
| `thumbnail_url` | Input | |
| `tags` | Input | placeholder="responsive, dark-mode" |
| `description_en` | textarea | `col-span-2`, className은 Input과 동일 |
| `description_ko` | textarea | `col-span-2` |

- slug 중복 검사 (`mode === "create"`만 해당):
  Input의 `onBlur` 시 `fetch("/api/admin/templates?slug=" + slug)` 호출
  `exists === true`이면 `setSlugError("이미 사용 중인 슬러그입니다.")`

- 저장 처리:
  ```ts
  // create
  const res = await fetch("/api/admin/templates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  // 성공: router.push("/admin/templates")
  // 실패: setToast({ message: "저장에 실패했습니다.", type: "error" })

  // edit
  const res = await fetch(`/api/admin/templates/${initialData.id}`, {
    method: "PATCH", ...
  });
  ```

- 하단 버튼 영역:
  ```
  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-zinc-200">
    <Button variant="ghost" onClick={() => router.push("/admin/templates")}>취소</Button>
    <Button variant="primary" type="submit" loading={loading}>
      {mode === "create" ? "등록" : "저장"}
    </Button>
  </div>
  ```

---

## Task 7: 주문 Feature 컴포넌트 - OrderTable

**파일 경로: `src/app/admin/_components/orders/OrderTable.tsx`** (신규 생성)

- `"use client"` 선언
- props: `data: Order[]`
- 상태: `filter: "all" | "pending" | "paid" | "cancelled"`, `toast`
- Table columns:

| key | header | render |
|-----|--------|--------|
| id | 주문번호 | `<span className="font-mono text-xs">{order.id.slice(0,8)}</span>` |
| template_slug | 템플릿 | `<span className="font-mono text-xs">{order.template_slug}</span>` |
| customer_email | 고객 이메일 | `order.customer_email` |
| amount | 금액 | `order.amount.toLocaleString() + "원"` |
| status | 상태 | Badge + 상태 변경 select (아래 참고) |
| created_at | 주문일 | `new Date(order.created_at).toLocaleDateString("ko-KR")` |

- 상태 변경 select:
  ```tsx
  <select
    value={order.status}
    onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
    className="text-xs border border-zinc-200 rounded px-2 py-1 bg-white"
  >
    <option value="pending">pending</option>
    <option value="paid">paid</option>
    <option value="cancelled">cancelled</option>
  </select>
  ```
- handleStatusChange:
  ```ts
  await fetch(`/api/admin/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  router.refresh();
  ```

---

## Task 8: Admin 페이지 구현

### 8-1. 템플릿 목록 페이지

**파일 경로: `src/app/admin/templates/page.tsx`** (신규 생성)

```tsx
import { createClient } from "@/lib/supabase/server";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateTable } from "@/app/admin/_components/templates/TemplateTable";

export default async function TemplatesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("templates")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <AdminShell title="Templates">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <TemplateTable data={data ?? []} />
      </div>
    </AdminShell>
  );
}
```

### 8-2. 템플릿 등록 페이지

**파일 경로: `src/app/admin/templates/new/page.tsx`** (신규 생성)

```tsx
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateForm } from "@/app/admin/_components/templates/TemplateForm";
import Link from "next/link";
import { Button } from "@/app/admin/_components/ui/Button";

export default function NewTemplatePage() {
  return (
    <AdminShell
      title="새 템플릿 등록"
      action={
        <Link href="/admin/templates">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-4xl">
        <TemplateForm mode="create" />
      </div>
    </AdminShell>
  );
}
```

### 8-3. 템플릿 수정 페이지

**파일 경로: `src/app/admin/templates/[id]/page.tsx`** (신규 생성)

```tsx
import { createClient } from "@/lib/supabase/server";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { TemplateForm } from "@/app/admin/_components/templates/TemplateForm";
import { notFound } from "next/navigation";

export default async function EditTemplatePage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("templates")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data) notFound();

  return (
    <AdminShell title={`수정: ${data.name_en}`}>
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-4xl">
        <TemplateForm mode="edit" initialData={data} />
      </div>
    </AdminShell>
  );
}
```

### 8-4. 주문 목록 페이지

**파일 경로: `src/app/admin/orders/page.tsx`** (신규 생성)

```tsx
import { createClient } from "@/lib/supabase/server";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { OrderTable } from "@/app/admin/_components/orders/OrderTable";

export default async function OrdersPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminShell title="Orders">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <OrderTable data={data ?? []} />
      </div>
    </AdminShell>
  );
}
```

---

## 완료 조건 체크리스트

- [ ] `src/app/admin/login/page.tsx` 생성됨
- [ ] `src/app/admin/page.tsx` 생성됨 (redirect)
- [ ] `src/app/api/admin/templates/route.ts` 생성됨
- [ ] `src/app/api/admin/templates/[id]/route.ts` 생성됨
- [ ] `src/app/api/admin/orders/[id]/route.ts` 생성됨
- [ ] `src/app/admin/_components/templates/TemplateTable.tsx` 생성됨
- [ ] `src/app/admin/_components/templates/TemplateForm.tsx` 생성됨
- [ ] `src/app/admin/_components/orders/OrderTable.tsx` 생성됨
- [ ] `src/app/admin/templates/page.tsx` 생성됨
- [ ] `src/app/admin/templates/new/page.tsx` 생성됨
- [ ] `src/app/admin/templates/[id]/page.tsx` 생성됨
- [ ] `src/app/admin/orders/page.tsx` 생성됨
- [ ] `npx tsc --noEmit` 통과
- [ ] `npm run build` 통과
- [ ] 로컬(`npm run dev`) 동작 확인:
  - [ ] `/admin` → `/admin/templates` 리디렉션
  - [ ] 미인증 시 `/admin/login` 리디렉션
  - [ ] 로그인 성공 후 `/admin/templates` 이동
  - [ ] 템플릿 목록 페이지 렌더링
  - [ ] 새 템플릿 등록 폼 렌더링
  - [ ] 주문 목록 페이지 렌더링
