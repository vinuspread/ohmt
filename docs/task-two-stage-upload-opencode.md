# Task: 템플릿 2단계 등록 시스템 구현

## 목적

현재 zip 업로드와 서비스 노출이 한 번에 처리되는 구조를 **2단계로 분리**한다.

- **1단계 (zip 등록)**: GitHub에 파일 배포, `status: uploaded`로 저장
- **2단계 (서비스 등록)**: 메타데이터 검수 및 수정 후 `draft` / `published`로 전환 → ohmt.site 노출

---

## 변경 범위 요약

| 파일 | 변경 내용 |
|---|---|
| `src/types/template.ts` | `TemplateStatus`에 `'uploaded'` 추가 |
| `src/app/api/admin/templates/upload/route.ts` | insert 시 `status: 'uploaded'`로 변경 |
| `src/app/admin/uploads/page.tsx` | 신규 — uploaded 목록 페이지 |
| `src/app/admin/_components/uploads/UploadedTable.tsx` | 신규 — uploaded 템플릿 테이블 |
| `src/app/admin/uploads/[id]/page.tsx` | 신규 — 2단계 등록 폼 페이지 |
| `src/app/admin/_components/uploads/RegisterForm.tsx` | 신규 — 메타데이터 수정 + 등록 폼 |
| `src/app/admin/_components/layout/Sidebar.tsx` | 메뉴 구조 업데이트 |
| `src/app/admin/_components/templates/TemplateTable.tsx` | `uploaded` 상태 필터 제거 (템플릿 목록은 draft/published/archived만 표시) |
| `src/app/admin/_components/ui/Badge.tsx` | `uploaded` 상태 배지 추가 |

---

## Step 1. `src/types/template.ts` — TemplateStatus 추가

```ts
export type TemplateStatus = "uploaded" | "draft" | "published" | "archived";
```

---

## Step 2. `src/app/api/admin/templates/upload/route.ts` — status 변경

업로드 성공 시 Supabase insert 부분에서 `status: "draft"` → `status: "uploaded"` 로 변경:

```ts
const { error: insertError } = await supabase.from("templates").insert({
  slug,
  name_en: themeJson.name ?? slug,
  name_ko: themeJson.name_ko ?? null,
  category: themeJson.category ?? "uncategorized",
  description_en: themeJson.description ?? null,
  description_ko: themeJson.description_ko ?? null,
  thumbnail_url: `/templates/${slug}/thumbnail.jpg`,
  price: 0,
  status: "uploaded",   // ← 변경
  sort_order: 999,
  is_featured: false,
  tags: themeJson.tags ?? [],
});
```

---

## Step 3. `src/app/admin/_components/ui/Badge.tsx` — uploaded 배지 추가

기존 Badge 컴포넌트에 `uploaded` 상태 추가:

```ts
// status별 색상 맵에 추가
uploaded: "bg-violet-50 text-violet-600 border-violet-200",
```

---

## Step 4. `src/app/admin/uploads/page.tsx` — 업로드 목록 페이지 (신규)

Server Component. `status = 'uploaded'`인 템플릿만 조회.

```tsx
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { UploadedTable } from "@/app/admin/_components/uploads/UploadedTable";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";

export default async function UploadsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("status", "uploaded")
    .order("created_at", { ascending: false });

  const templates: Template[] = error ? [] : data ?? [];

  return (
    <AdminShell title="업로드 목록">
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <UploadedTable data={templates} />
      </div>
    </AdminShell>
  );
}
```

---

## Step 5. `src/app/admin/_components/uploads/UploadedTable.tsx` — 업로드 목록 테이블 (신규)

Client Component. 컬럼 구성:

| 컬럼 | 내용 |
|---|---|
| Slug | 모노스페이스 |
| 이름 | name_en / name_ko |
| 카테고리 | category |
| 업로드일 | created_at (날짜만) |
| 상태 | Badge (uploaded) |
| 액션 | "등록하기" 버튼 → `/admin/uploads/[id]` 이동 |

- "등록하기" 버튼: `variant="primary" size="sm"` → `href="/admin/uploads/${template.id}"`
- 삭제 기능 포함 (업로드된 항목 제거, API DELETE 호출)
- 빈 목록일 경우 EmptyState 표시: "업로드된 템플릿이 없습니다."

---

## Step 6. `src/app/admin/uploads/[id]/page.tsx` — 2단계 등록 페이지 (신규)

Server Component. `id`로 템플릿 조회 후 RegisterForm에 전달.
`status !== 'uploaded'`인 경우 `notFound()`.

```tsx
import { notFound, redirect } from "next/navigation";
import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { RegisterForm } from "@/app/admin/_components/uploads/RegisterForm";
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";
import { Button } from "@/app/admin/_components/ui/Button";
import Link from "next/link";

export default async function RegisterTemplatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data || data.status !== "uploaded") notFound();

  const template = data as Template;

  return (
    <AdminShell
      title="템플릿 서비스 등록"
      action={
        <Link href="/admin/uploads">
          <Button variant="ghost" size="sm">← 목록</Button>
        </Link>
      }
    >
      <div className="bg-white rounded-xl border border-zinc-200 p-8 max-w-2xl">
        <p className="text-sm text-zinc-500 mb-6">
          업로드된 템플릿의 메타데이터를 검수하고 수정한 후 서비스에 등록합니다.
          등록 후 상태를 <strong>published</strong>로 변경하면 랜딩페이지에 노출됩니다.
        </p>
        <RegisterForm template={template} />
      </div>
    </AdminShell>
  );
}
```

---

## Step 7. `src/app/admin/_components/uploads/RegisterForm.tsx` — 등록 폼 (신규)

Client Component. `template` prop을 받아 폼 초기값으로 사용.

### 폼 필드

| 필드 | 입력 타입 | 초기값 | 비고 |
|---|---|---|---|
| 템플릿명 (EN) | Input | `template.name_en` | 필수 |
| 템플릿명 (KO) | Input | `template.name_ko ?? ""` | 선택 |
| 카테고리 | Select | `template.category` | 필수 |
| 설명 (EN) | textarea | `template.description_en ?? ""` | 선택 |
| 설명 (KO) | textarea | `template.description_ko ?? ""` | 선택 |
| 썸네일 URL | Input | `template.thumbnail_url ?? ""` | 선택 |
| 공개 여부 | Select (draft / published) | `"draft"` | 필수 |

카테고리 옵션 (Select):
```ts
const CATEGORIES = [
  "retail", "lifestyle", "corporate", "portfolio",
  "media", "hospitality", "service", "uncategorized"
];
```

### 제출 동작

`PATCH /api/admin/templates/[id]` 호출:

```ts
const payload = {
  name_en,
  name_ko: name_ko || null,
  category,
  description_en: description_en || null,
  description_ko: description_ko || null,
  thumbnail_url: thumbnail_url || null,
  status,  // "draft" | "published"
};
```

성공 시 Toast 표시 후 `router.push("/admin/templates")`.
실패 시 Toast 에러 표시.

### UI 구성

- 기존 `Input`, `Select`, `Button`, `Toast` 컴포넌트 재사용
- 제출 버튼: `"서비스 등록"` (variant="primary")
- 취소 버튼: `"취소"` (variant="secondary") → `/admin/uploads`로 이동

---

## Step 8. Sidebar 메뉴 업데이트

`src/app/admin/_components/layout/Sidebar.tsx`

```ts
const navItems = [
  { label: "Templates", href: "/admin/templates", icon: LayoutTemplate },
  { label: "업로드 목록", href: "/admin/uploads", icon: Inbox },
  { label: "zip 업로드", href: "/admin/templates/upload", icon: Upload },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
];
```

`lucide-react`의 `Inbox` 아이콘 사용.

---

## Step 9. TemplateTable 필터에서 uploaded 제거

`src/app/admin/_components/templates/TemplateTable.tsx`

기존 필터:
```ts
const filters: TemplateFilter[] = ["all", "published", "draft", "archived"];
```

Templates 목록은 `uploaded` 상태를 표시하지 않는다.
Server Component(`templates/page.tsx`)의 쿼리에도 `.neq("status", "uploaded")` 조건 추가:

```ts
const { data, error } = await supabase
  .from("templates")
  .select("*")
  .neq("status", "uploaded")
  .order("sort_order", { ascending: true });
```

---

## 검증 체크리스트

- [ ] zip 업로드 후 Supabase에 `status: uploaded`로 저장되는지 확인
- [ ] `/admin/uploads` 에서 uploaded 목록 표시 확인
- [ ] "등록하기" 클릭 → `/admin/uploads/[id]` 접근 확인
- [ ] 폼 초기값이 theme.json에서 추출된 값으로 채워지는지 확인
- [ ] 저장 시 PATCH API 호출 후 `/admin/templates`로 이동 확인
- [ ] `/admin/templates` 목록에 `uploaded` 상태 항목이 보이지 않는지 확인
- [ ] `published`로 등록 시 랜딩페이지에 노출 확인
- [ ] Sidebar에 "업로드 목록" 메뉴 표시 확인
