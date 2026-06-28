# 템플릿별 가격정책 연동 개발 지시서

## 목표

템플릿마다 적용 가능한 가격정책을 관리자에서 선택할 수 있게 하고,
고객이 템플릿 선택 후 상담 페이지로 이동할 때 해당 템플릿에 맞는 패키지만 표시한다.

---

## 현재 상태 파악

### 관련 파일
- `src/app/admin/_components/templates/TemplateForm.tsx` — 템플릿 등록/수정 폼
- `src/app/admin/_components/templates/TemplateTable.tsx` — 템플릿 목록
- `src/app/api/admin/templates/route.ts` — POST API
- `src/app/api/admin/templates/[id]/route.ts` — PATCH API
- `src/types/template.ts` — Template 타입
- `src/app/ko/page.tsx` — 랜딩 서버 컴포넌트 (templates → TemplateItem 매핑)
- `src/app/en/page.tsx` — 동일
- `src/app/ko/LandingPageClient.tsx` — `goToContact()` 함수
- `src/app/en/LandingPageClient.tsx` — 동일
- `src/app/ko/contact/page.tsx` — 서버 컴포넌트 (packages 조회 후 ContactForm props 전달)
- `src/app/en/contact/page.tsx` — 동일
- `src/app/ko/contact/_components/ContactForm.tsx` — 클라이언트 폼
- `src/app/en/contact/_components/ContactForm.tsx` — 동일

### TemplateItem 인터페이스 (현재)
```ts
export interface TemplateItem {
  id: string;      // slug
  name: string;
  url: string;
  desc: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}
```

### goToContact 현재 동작 (ko/LandingPageClient.tsx)
```ts
const goToContact = (packageId?: string, template?: TemplateItem) => {
  const params = new URLSearchParams();
  if (packageId) params.set("package", packageId);
  if (template) {
    params.set("template", template.name);
    params.set("image", template.image);
    params.set("category", template.category);
  }
  router.push(`/ko/contact?${params.toString()}`);
};
```

### contact/page.tsx 현재 동작
- DB에서 전체 가격정책 조회 → 모든 패키지 + "협의 후 결정" → ContactForm 전달

---

## 작업 항목

### 1. Supabase 테이블 변경 SQL

`supabase/template-pricing-policy.sql` 파일로 생성 (실행은 사용자가 직접):

```sql
alter table templates
  add column if not exists applicable_packages text[] not null default '{}',
  add column if not exists requires_consultation boolean not null default false;
```

---

### 2. 타입 업데이트

`src/types/template.ts`의 `Template` 인터페이스에 추가:

```ts
applicable_packages: string[];    // ['starter', 'professional'] 등 pricing_packages.slug 값
requires_consultation: boolean;
```

`TemplateItem` 인터페이스에 추가:

```ts
export interface TemplateItem {
  id: string;
  name: string;
  url: string;
  desc: string;
  category: string;
  image: string;
  isFeatured?: boolean;
  slug: string;                      // ← 추가
  applicablePackages: string[];      // ← 추가
  requiresConsultation: boolean;     // ← 추가
}
```

---

### 3. API 업데이트

#### `src/app/api/admin/templates/route.ts` (POST)
- `applicable_packages: string[]` 허용
- `requires_consultation: boolean` 허용

#### `src/app/api/admin/templates/[id]/route.ts` (PATCH)
- 동일하게 두 필드 수용

---

### 4. TemplateForm 수정

`src/app/admin/_components/templates/TemplateForm.tsx`

#### 4-1. 가격정책 체크박스 섹션 추가

컴포넌트 마운트 시 `GET /api/admin/pricing`으로 활성 패키지 목록 조회.
각 패키지를 체크박스로 표시:

```tsx
// state
const [applicablePackages, setApplicablePackages] = useState<string[]>(
  initialData?.applicable_packages ?? []
);
const [requiresConsultation, setRequiresConsultation] = useState(
  initialData?.requires_consultation ?? false
);
const [pricingOptions, setPricingOptions] = useState<{ slug: string; name: string }[]>([]);

// useEffect에서 fetch
useEffect(() => {
  fetch("/api/admin/pricing")
    .then(r => r.json())
    .then((data) => setPricingOptions(
      data.filter((p: { lang: string }) => p.lang === lang)
          .map((p: { slug: string; name: string; price: string }) => ({
            slug: p.slug,
            name: `${p.name} (${p.price})`
          }))
    ));
}, [lang]);
```

폼 UI (기존 체크박스 아래에 섹션 추가):

```tsx
<div className="md:col-span-2 space-y-3">
  <p className="text-sm font-medium text-zinc-700">적용 가격정책 <span className="text-red-500">*</span></p>
  <p className="text-xs text-zinc-400">공개 전환 시 하나 이상 선택하거나 "협의필요"를 체크해야 합니다.</p>
  <div className="flex flex-wrap gap-4">
    {pricingOptions.map((option) => (
      <label key={option.slug} className="flex items-center gap-2 text-sm text-zinc-700">
        <input
          type="checkbox"
          checked={applicablePackages.includes(option.slug)}
          onChange={(e) => {
            setApplicablePackages(prev =>
              e.target.checked
                ? [...prev, option.slug]
                : prev.filter(s => s !== option.slug)
            );
          }}
          className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
        />
        {option.name}
      </label>
    ))}
    <label className="flex items-center gap-2 text-sm text-zinc-700">
      <input
        type="checkbox"
        checked={requiresConsultation}
        onChange={(e) => setRequiresConsultation(e.target.checked)}
        className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
      />
      협의필요
    </label>
  </div>
</div>
```

#### 4-2. 공개 전환 게이트

`handleSubmit` 내부에서 공개(published) 상태로 저장 시 유효성 검사:

```ts
if (published && applicablePackages.length === 0 && !requiresConsultation) {
  setToast({ message: "공개 전환을 위해 적용 가격정책을 하나 이상 선택하거나 '협의필요'를 체크해주세요.", type: "error" });
  setLoading(false);
  return;
}
```

#### 4-3. buildPayload에 추가

```ts
const buildPayload = () => ({
  ...기존 필드...,
  applicable_packages: applicablePackages,
  requires_consultation: requiresConsultation,
});
```

---

### 5. 랜딩 페이지 서버 컴포넌트 (ko/page.tsx, en/page.tsx)

#### TemplateItem 매핑에 새 필드 추가

```ts
const templates: TemplateItem[] = templateRows.map((template) => ({
  id: template.slug,
  name: template.name,
  url: `/ko/templates/${template.slug}`,
  desc: template.description ?? "",
  category: template.category,
  image: template.thumbnail_url ?? "",
  isFeatured: template.is_featured,
  slug: template.slug,                                      // ← 추가
  applicablePackages: template.applicable_packages ?? [],   // ← 추가
  requiresConsultation: template.requires_consultation ?? false, // ← 추가
}));
```

en/page.tsx도 동일하게 수정 (`url: `/en/templates/${template.slug}``).

---

### 6. LandingPageClient의 goToContact 수정

`src/app/ko/LandingPageClient.tsx` 및 `src/app/en/LandingPageClient.tsx`

```ts
const goToContact = (packageId?: string, template?: TemplateItem) => {
  const params = new URLSearchParams();
  if (packageId) params.set("package", packageId);
  if (template) {
    params.set("template", template.name);
    params.set("image", template.image);
    params.set("category", template.category);
    params.set("template_slug", template.slug);  // ← 추가
  }
  router.push(`/ko/contact?${params.toString()}`);  // en은 /en/contact
};
```

---

### 7. contact/page.tsx 수정 (ko + en)

서버 컴포넌트에서 `template_slug` 쿼리 파라미터를 받아 해당 템플릿의 가격정책 조회.

```ts
// src/app/ko/contact/page.tsx
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ template_slug?: string; [key: string]: string | undefined }>;
}) {
  const { template_slug } = await searchParams;
  const supabase = await createClient();

  // 전체 ko 패키지 조회
  const { data: allPackages } = await supabase
    .from("pricing_packages")
    .select("slug, name, price")
    .eq("lang", "ko")
    .eq("is_active", true)
    .order("sort_order");

  let packages: PackageOption[];
  let requiresConsultation = false;

  if (template_slug) {
    // 해당 템플릿의 가격정책 조회
    const { data: templateData } = await supabase
      .from("templates")
      .select("applicable_packages, requires_consultation")
      .eq("slug", template_slug)
      .eq("lang", "ko")
      .maybeSingle();

    if (templateData) {
      requiresConsultation = templateData.requires_consultation;

      if (requiresConsultation) {
        packages = []; // 협의필요: 패키지 선택 없음
      } else {
        // applicable_packages에 해당하는 것만 필터
        const applicable = templateData.applicable_packages ?? [];
        packages = [
          ...(allPackages ?? [])
            .filter((p) => applicable.includes(p.slug))
            .map((p) => ({ id: p.slug, name: `${p.name} - ${p.price}` })),
          { id: "undecided", name: "협의 후 결정" },
        ];
      }
    } else {
      // 템플릿 못 찾으면 전체 표시
      packages = [
        ...(allPackages ?? []).map((p) => ({ id: p.slug, name: `${p.name} - ${p.price}` })),
        { id: "undecided", name: "협의 후 결정" },
      ];
    }
  } else {
    // 템플릿 미선택: 전체 표시
    packages = [
      ...(allPackages ?? []).map((p) => ({ id: p.slug, name: `${p.name} - ${p.price}` })),
      { id: "undecided", name: "협의 후 결정" },
    ];
  }

  return (
    // ... 기존 레이아웃 ...
    <Suspense>
      <ContactForm packages={packages} requiresConsultation={requiresConsultation} />
    </Suspense>
  );
}
```

en/contact/page.tsx도 동일 (`lang: "en"`, `"To be decided"`).

---

### 8. ContactForm props 업데이트

`src/app/ko/contact/_components/ContactForm.tsx`

```ts
export function ContactForm({
  packages,
  requiresConsultation = false,
}: {
  packages: PackageOption[];
  requiresConsultation?: boolean;
}) {
```

**협의필요 안내 UI** (type 선택 후, 폼 위에 표시):

```tsx
{requiresConsultation && (
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start dark:bg-amber-950/30 dark:border-amber-800">
    <span className="text-amber-500 text-lg leading-none mt-0.5">⚠</span>
    <div>
      <p className="text-sm font-bold text-amber-800 dark:text-amber-400">이 템플릿은 별도 협의가 필요합니다</p>
      <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">
        요구사항과 기능 범위에 따라 가격이 달라질 수 있습니다. 문의를 남겨주시면 담당자가 직접 안내해 드립니다.
      </p>
    </div>
  </div>
)}
```

패키지 선택 필드 조건: `requiresConsultation`이 true이면 패키지 select 숨김 (packages가 빈 배열이므로 자연스럽게 처리 가능하나, 명시적으로 숨기는 것이 좋음):

```tsx
{type !== "other" && !requiresConsultation && packages.length > 0 && (
  <div>
    <label className={LABEL_CLASS}>패키지 <span>...</span></label>
    <select ...>...</select>
  </div>
)}
```

en/ContactForm도 동일 (`requiresConsultation` prop 추가, 영문 안내 문구).

---

## 파일 수정/생성 요약

| 파일 | 작업 |
|------|------|
| `supabase/template-pricing-policy.sql` | SQL 파일 생성 |
| `src/types/template.ts` | `Template`, `TemplateItem` 타입 업데이트 |
| `src/app/api/admin/templates/route.ts` | POST: 새 필드 수용 |
| `src/app/api/admin/templates/[id]/route.ts` | PATCH: 새 필드 수용 |
| `src/app/admin/_components/templates/TemplateForm.tsx` | 가격정책 체크박스 + 공개 게이트 추가 |
| `src/app/ko/page.tsx` | TemplateItem 매핑에 새 필드 추가 |
| `src/app/en/page.tsx` | 동일 |
| `src/app/ko/LandingPageClient.tsx` | goToContact에 template_slug 추가 |
| `src/app/en/LandingPageClient.tsx` | 동일 |
| `src/app/ko/contact/page.tsx` | template_slug 기반 패키지 필터링 로직 |
| `src/app/en/contact/page.tsx` | 동일 |
| `src/app/ko/contact/_components/ContactForm.tsx` | requiresConsultation prop + 협의필요 UI |
| `src/app/en/contact/_components/ContactForm.tsx` | 동일 |

---

## 참고 파일

- `src/app/admin/_components/templates/TemplateForm.tsx` — 현재 폼 구조
- `src/app/api/admin/pricing/route.ts` — 패키지 목록 API (GET)
- `src/app/ko/contact/page.tsx` — 현재 서버 컴포넌트 구조
- `src/app/ko/contact/_components/ContactForm.tsx` — 현재 클라이언트 폼

## 주의사항

- `supabase/template-pricing-policy.sql` 파일만 생성. Supabase에 직접 실행하지 않는다.
- `src/components/` 에 새 파일 추가 금지.
- TemplateTable.tsx는 수정하지 않는다 (가격정책 표시 불필요).
- 기존 `applicable_packages`가 빈 배열인 템플릿(기존 데이터)은 contact에서 전체 패키지를 표시한다.
