# 문의 접수 기능 개발 지시서

## 목표

`/ko/contact` 및 `/en/contact` 폼 제출 시 현재 `mailto:` 로 처리되던 방식을
Supabase DB에 저장하는 방식으로 전환하고,
관리자 `/admin/orders` 페이지에서 문의 내역을 조회·관리할 수 있게 만든다.

---

## 현재 상태

### contact 페이지
- `src/app/ko/contact/page.tsx` — `handleSubmit`이 `mailto:` 링크를 열고 종료
- `src/app/en/contact/page.tsx` — 동일한 구조

### 수집 데이터 (폼 필드)
| 필드 | 타입 | 조건 |
|------|------|------|
| inquiry_type | 'template' \| 'custom' \| 'other' | 항상 |
| customer_name | string | 필수 |
| customer_email | string | 필수 |
| customer_phone | string | 선택 |
| company | string | type='other'일 때만 |
| role | string | type='other'일 때만 |
| package_name | string | type!='other'일 때 |
| template_name | string | type='template'일 때 |
| message | string | 필수 |
| lang | 'ko' \| 'en' | 페이지 기준 |

### 관리자 Orders 페이지
- `src/app/admin/orders/page.tsx` — 현재 `orders` 테이블만 표시
- `src/app/admin/_components/orders/OrderTable.tsx` — 기존 주문 테이블

---

## 작업 항목

### 1. Supabase 테이블 생성

**Supabase SQL Editor에서 직접 실행하지 않는다.**
아래 SQL을 `supabase/inquiries.sql` 파일로 저장만 한다 (실행은 사용자가 직접):

```sql
create table inquiries (
  id uuid primary key default gen_random_uuid(),
  lang text not null check (lang in ('ko', 'en')),
  inquiry_type text not null check (inquiry_type in ('template', 'custom', 'other')),
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  company text,
  role text,
  package_name text,
  template_name text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'done', 'cancelled')),
  note text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table inquiries enable row level security;
create policy "admin_all" on inquiries using (true) with check (true);

create or replace function update_inquiries_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger inquiries_updated_at
  before update on inquiries
  for each row execute function update_inquiries_updated_at();
```

---

### 2. 타입 추가

`src/types/template.ts`에 추가:

```ts
export type InquiryType = "template" | "custom" | "other";
export type InquiryStatus = "new" | "in_progress" | "done" | "cancelled";

export interface Inquiry {
  id: string;
  lang: TemplateLang;
  inquiry_type: InquiryType;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  company: string | null;
  role: string | null;
  package_name: string | null;
  template_name: string | null;
  message: string;
  status: InquiryStatus;
  note: string | null;
  created_at: string;
  updated_at: string;
}
```

---

### 3. API 라우트 생성

#### `src/app/api/inquiries/route.ts` (공개 API — 인증 불필요)

`POST` 요청을 받아 `inquiries` 테이블에 저장.
`createAdminClient`를 사용 (RLS 우회를 위해).

요청 body:
```ts
{
  lang: 'ko' | 'en';
  inquiry_type: 'template' | 'custom' | 'other';
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  company?: string;
  role?: string;
  package_name?: string;
  template_name?: string;
  message: string;
}
```

유효성 검사:
- `lang`, `inquiry_type`, `customer_name`, `customer_email`, `message` 는 필수
- `customer_email` 형식 검사 (`@` 포함 여부)
- 성공 시 `{ success: true, id }` 반환, 실패 시 400/500

#### `src/app/api/admin/inquiries/[id]/route.ts` (관리자 전용)

`PATCH` — status, note 변경
```ts
{ status?: InquiryStatus; note?: string }
```
`createAdminClient` 사용. 유효성: status는 enum 값만 허용.

---

### 4. contact 페이지 수정

#### `src/app/ko/contact/page.tsx`

`handleSubmit` 함수를 `mailto:` 방식에서 API POST 방식으로 전환:

```ts
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitting(true);
  setError(null);

  // 폼 데이터 수집 (기존과 동일한 방식)
  const form = e.currentTarget;
  // ... 필드 수집 ...

  try {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lang: "ko",
        inquiry_type: type,
        customer_name: name,
        customer_email: email,
        customer_phone: phone || null,
        company: company || null,
        role: role || null,
        package_name: pkg || null,
        template_name: template || null,
        message,
      }),
    });

    if (!res.ok) throw new Error("서버 오류");
    setSubmitted(true);
  } catch {
    setError("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
  } finally {
    setSubmitting(false);
  }
};
```

추가 state:
```ts
const [submitting, setSubmitting] = useState(false);
const [error, setError] = useState<string | null>(null);
```

버튼 수정:
```tsx
<button
  type="submit"
  disabled={submitting}
  className="w-full bg-[#F1B100] hover:bg-[#D9A000] disabled:opacity-50 disabled:cursor-not-allowed text-zinc-900 font-bold uppercase tracking-widest text-xs py-4 transition-all rounded-lg"
>
  {submitting ? "제출 중..." : "문의 제출하기"}
</button>
```

에러 메시지 (버튼 위):
```tsx
{error && (
  <p className="text-sm text-red-500 text-center">{error}</p>
)}
```

성공 화면 (`submitted === true`):
- 기존 UI 유지. "이메일 앱이 열렸습니다" → "문의가 접수되었습니다" 로 텍스트 변경.
- "문의를 검토 후 24시간 이내에 연락드립니다." 유지.

#### `src/app/en/contact/page.tsx`

동일한 방식으로 수정. `lang: "en"` 사용.
성공 텍스트: "Your inquiry has been submitted."

---

### 5. 관리자 Orders 페이지 확장

#### `src/app/admin/orders/page.tsx`

현재 orders만 조회하는 것에서 inquiries도 함께 조회하도록 수정:

```tsx
const [ordersResult, inquiriesResult] = await Promise.all([
  supabase.from("orders").select("*").order("created_at", { ascending: false }),
  supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
]);
```

두 데이터를 모두 `AdminShell` 안에 렌더링:

```tsx
<AdminShell title="Orders">
  <div className="space-y-8">
    <div>
      <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">문의 접수</h2>
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <InquiryTable data={inquiries} />
      </div>
    </div>
    <div>
      <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">주문 내역</h2>
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <OrderTable data={orders} />
      </div>
    </div>
  </div>
</AdminShell>
```

#### `src/app/admin/_components/orders/InquiryTable.tsx` (신규)

"use client" 컴포넌트.

**테이블 컬럼**:
| 컬럼 | 내용 |
|------|------|
| 접수일 | `created_at` (날짜만) |
| 유형 | `inquiry_type` (한국어 레이블: 템플릿 기반 / 맞춤 제작 / 기타) |
| 언어 | `lang` (KO / EN 뱃지) |
| 이름 | `customer_name` |
| 이메일 | `customer_email` |
| 패키지 | `package_name` |
| 상태 | `status` select (new / in_progress / done / cancelled) |
| 상세 | "보기" 버튼 → 모달 |

**상태 변경**: `PATCH /api/admin/inquiries/{id}` 호출 후 `router.refresh()`

**상세 모달**: 기존 `Modal.tsx` 컴포넌트 활용
- 모달 내 표시 항목: 이름, 이메일, 전화번호, 회사, 직책, 패키지, 템플릿, 문의 내용 전문, 메모(note) 편집 가능
- note 저장: `PATCH /api/admin/inquiries/{id}` with `{ note }`

**상태 레이블 (한국어)**:
```ts
const STATUS_LABELS = {
  new: "신규",
  in_progress: "진행 중",
  done: "완료",
  cancelled: "취소",
};
```

---

## 파일 수정/생성 요약

| 파일 | 작업 |
|------|------|
| `supabase/inquiries.sql` | SQL 파일 생성 (실행은 사용자가 직접) |
| `src/types/template.ts` | `Inquiry`, `InquiryType`, `InquiryStatus` 타입 추가 |
| `src/app/api/inquiries/route.ts` | 신규 — 공개 POST API |
| `src/app/api/admin/inquiries/[id]/route.ts` | 신규 — 관리자 PATCH API |
| `src/app/ko/contact/page.tsx` | mailto → API POST 전환 |
| `src/app/en/contact/page.tsx` | 동일 |
| `src/app/admin/orders/page.tsx` | inquiries 조회 추가 및 렌더링 구조 변경 |
| `src/app/admin/_components/orders/InquiryTable.tsx` | 신규 |

---

## 참고 파일

- `src/app/admin/_components/orders/OrderTable.tsx` — 테이블 UI 패턴
- `src/app/admin/_components/ui/Modal.tsx` — 모달 컴포넌트
- `src/app/admin/_components/ui/Badge.tsx` — 뱃지 패턴
- `src/app/api/admin/orders/[id]/route.ts` — PATCH 패턴
- `src/app/api/admin/pricing/route.ts` — POST 패턴

## 주의사항

- `src/app/api/inquiries/route.ts` 는 공개 API (인증 불필요). 단, rate-limit은 없어도 됨.
- contact 페이지는 `"use client"` 이므로 fetch 사용 가능.
- `supabase/inquiries.sql` 파일만 생성하고, Supabase에 직접 SQL을 실행하지 않는다.
- 기존 `OrderTable.tsx`는 수정하지 않는다.
- `src/components/` 에 새 파일 추가 금지.
