# Admin 시스템 Phase 2: 랜딩페이지 DB 연동

## 작업 개요

`src/app/en/page.tsx`와 `src/app/ko/page.tsx`의 하드코딩 템플릿 배열을 Supabase DB 조회로 교체한다.
Phase 1에서 생성한 `src/lib/supabase/server.ts`와 `src/types/template.ts`를 사용한다.

## 사전 조건

- Phase 1 완료 (`src/lib/supabase/server.ts`, `src/types/template.ts` 존재)
- `.env.local`에 Supabase 키 설정 완료

---

## 공통 규칙

- 두 파일 모두 `export default async function`으로 변경한다 (Server Component).
- 기존 하드코딩 템플릿 배열 전체를 제거하고 DB 조회로 교체한다.
- DB에 데이터가 없을 때 빈 배열(`[]`)을 사용하며, 에러가 발생해도 페이지가 깨지지 않아야 한다.
- 기존 UI 컴포넌트 구조, 스타일, 레이아웃은 **절대 변경하지 않는다.**
- 템플릿 카드에 사용하는 필드 매핑만 변경한다.

---

## Task 1: 영문 랜딩페이지 DB 연동

**파일 경로: `src/app/en/page.tsx`** (수정)

### 변경 사항

**1. import 추가** (파일 상단):
```ts
import { createClient } from "@/lib/supabase/server";
import type { Template } from "@/types/template";
```

**2. 함수 시그니처 변경**:
```ts
// Before
export default function Page() {

// After
export default async function Page() {
```

**3. 하드코딩 템플릿 배열 제거 후 아래 코드로 교체**:
```ts
const supabase = await createClient();
const { data, error } = await supabase
  .from("templates")
  .select("*")
  .eq("status", "published")
  .order("sort_order", { ascending: true });

const templates: Template[] = data ?? [];
```

**4. 템플릿 카드 렌더링 필드 매핑**:

기존 하드코딩 배열의 각 필드를 아래와 같이 DB 필드로 교체한다:

| 기존 필드 | DB 필드 |
|-----------|---------|
| 템플릿 이름 | `template.name_en` |
| 설명 | `template.description_en ?? ""` |
| 썸네일 이미지 경로 | `template.thumbnail_url ?? ""` |
| 템플릿 링크 | `/en/templates/${template.slug}` |
| 카테고리 | `template.category` |
| featured 여부 | `template.is_featured` |

---

## Task 2: 국문 랜딩페이지 DB 연동

**파일 경로: `src/app/ko/page.tsx`** (수정)

Task 1과 동일한 방식으로 수정한다. 아래 필드 매핑만 다르다:

| 기존 필드 | DB 필드 |
|-----------|---------|
| 템플릿 이름 | `template.name_ko ?? template.name_en` |
| 설명 | `template.description_ko ?? template.description_en ?? ""` |
| 썸네일 이미지 경로 | `template.thumbnail_url ?? ""` |
| 템플릿 링크 | `/ko/templates/${template.slug}` |
| 카테고리 | `template.category` |
| featured 여부 | `template.is_featured` |

---

## 완료 조건 체크리스트

- [ ] `src/app/en/page.tsx`: async Server Component로 변경됨
- [ ] `src/app/ko/page.tsx`: async Server Component로 변경됨
- [ ] 두 파일 모두 하드코딩 템플릿 배열이 제거됨
- [ ] DB 조회 오류 발생 시 빈 배열로 fallback 처리됨
- [ ] TypeScript 오류 없음 (`npx tsc --noEmit`)
- [ ] `npm run build` 통과
- [ ] 로컬 실행(`npm run dev`) 후 `/en`, `/ko` 접속 시 페이지 정상 렌더링 확인
  - DB에 데이터가 없어도 페이지가 깨지지 않아야 함
  - DB에 데이터가 있으면 카드가 표시되어야 함
