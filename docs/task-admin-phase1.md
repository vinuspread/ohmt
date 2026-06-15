# Admin 시스템 Phase 1: Supabase 연동 기반 설정

## 작업 개요

Supabase 클라이언트 유틸 파일 3개와 타입 정의 파일 1개를 생성한다.
DB 스키마(`supabase/schema.sql`)는 이미 Supabase에 적용 완료되어 있다.

## 사전 조건

- `.env.local` 파일이 프로젝트 루트에 존재하며 아래 키가 설정되어 있다:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

---

## Task 1: 패키지 설치

프로젝트 루트에서 아래 명령 실행:

```bash
npm install @supabase/supabase-js @supabase/ssr
```

---

## Task 2: 브라우저 클라이언트 생성

**파일 경로: `src/lib/supabase/client.ts`** (신규 생성)

```ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

---

## Task 3: 서버 클라이언트 생성

**파일 경로: `src/lib/supabase/server.ts`** (신규 생성)

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
        getAll() {
          return cookieStore.getAll();
        },
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

---

## Task 4: Admin 전용 클라이언트 생성

**파일 경로: `src/lib/supabase/admin.ts`** (신규 생성)

서버 전용 파일이다. `SUPABASE_SERVICE_ROLE_KEY`를 사용하며 RLS를 우회한다.

```ts
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
```

---

## Task 5: 타입 정의 생성

**파일 경로: `src/types/template.ts`** (신규 생성)

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

---

## 완료 조건 체크리스트

아래 항목을 모두 확인하고 완료 보고한다.

- [ ] `npm install` 완료 (`package.json`에 `@supabase/supabase-js`, `@supabase/ssr` 추가됨)
- [ ] `src/lib/supabase/client.ts` 생성됨
- [ ] `src/lib/supabase/server.ts` 생성됨
- [ ] `src/lib/supabase/admin.ts` 생성됨
- [ ] `src/types/template.ts` 생성됨
- [ ] TypeScript 오류 없음 (`npx tsc --noEmit` 실행하여 확인)
