# Code Quality Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** CLAUDE.md 규칙을 위반하는 코드를 수정한다. TemplateWrapper 독립화(2026-06-12-template-independence.md)와 독립적으로 진행 가능하다.

**Architecture:** 수정 범위는 4가지다. (1) dashboard/docs/technology 3개 템플릿에 TemplateWrapper 신규 추가, (2) 외부 이미지 URL 제거, (3) font-light/italic 제거, (4) em-dash 제거. 하드코딩 색상(655곳)은 별도 지시가 있을 때까지 이 계획에서 제외한다.

**Tech Stack:** Next.js 16, React 19, framer-motion, TypeScript, Tailwind CSS v4

---

## 프로젝트 루트 경로

모든 경로는 아래 루트를 기준으로 한다:

```
/Users/sungyounghan/project/ohmytemplates/
```

---

## Task 1: EN dashboard TemplateWrapper 신규 추가

dashboard 템플릿은 TemplateWrapper를 전혀 사용하지 않는다. 또한 `theme.json`이 없으므로 CSS 변수 주입 없이 애니메이션만 적용하는 단순 버전을 사용한다.

**생성할 파일:**
```
src/app/en/templates/dashboard/_components/TemplateWrapper.tsx
```

**수정할 파일 (TemplateWrapper import 추가 및 적용):**
```
src/app/en/templates/dashboard/page.tsx                      → "./_components/TemplateWrapper"
src/app/en/templates/dashboard/analytics/page.tsx            → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/calendar/page.tsx             → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/customers/page.tsx            → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/orders/page.tsx               → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/profile/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/reports/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/dashboard/settings/page.tsx             → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/dashboard/_components/TemplateWrapper.tsx` 생성

dashboard는 theme.json이 없으므로 CSS 변수 주입 없이 애니메이션만 적용한다:

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={() => setAnimationComplete(true)}
      style={animationComplete ? { transform: "none" } : {}}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2:** 위 8개 파일 각각에 아래 내용을 추가한다

각 page.tsx 파일 상단에 import 추가:
```tsx
import { TemplateWrapper } from "./_components/TemplateWrapper";   // page.tsx
import { TemplateWrapper } from "../_components/TemplateWrapper";  // 하위 페이지
```

각 page.tsx의 return문에서 최상위 요소를 `<TemplateWrapper>`로 감싼다:
```tsx
// 변경 전
return (
  <div className="...">
    ...
  </div>
);

// 변경 후
return (
  <TemplateWrapper>
    <div className="...">
      ...
    </div>
  </TemplateWrapper>
);
```

- [ ] **Step 3:** TypeScript 검증
```bash
npx tsc --noEmit 2>&1 | grep "dashboard"
```
Expected: 에러 없음

- [ ] **Step 4:** 커밋
```bash
git add src/app/en/templates/dashboard/
git commit -m "refactor: EN dashboard TemplateWrapper 신규 추가"
```

---

## Task 2: KO dashboard TemplateWrapper 신규 추가

**생성할 파일:**
```
src/app/ko/templates/dashboard/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/dashboard/page.tsx                      → "./_components/TemplateWrapper"
src/app/ko/templates/dashboard/analytics/page.tsx            → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/calendar/page.tsx             → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/customers/page.tsx            → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/orders/page.tsx               → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/profile/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/reports/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/dashboard/settings/page.tsx             → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 1과 동일한 방식으로 KO dashboard 처리. 커밋 메시지: `"refactor: KO dashboard TemplateWrapper 신규 추가"`

---

## Task 3: EN docs TemplateWrapper 신규 추가

docs도 theme.json이 없으므로 dashboard와 동일한 단순 버전을 사용한다.

**생성할 파일:**
```
src/app/en/templates/docs/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/docs/page.tsx                           → "./_components/TemplateWrapper"
src/app/en/templates/docs/[slug]/page.tsx                    → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/docs/_components/TemplateWrapper.tsx` 생성 (Task 1 Step 1과 동일한 코드)

- [ ] **Step 2:** 위 2개 파일에 import 추가 및 return문 감싸기

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "docs"`

- [ ] **Step 4:** `git add src/app/en/templates/docs/ && git commit -m "refactor: EN docs TemplateWrapper 신규 추가"`

---

## Task 4: KO docs TemplateWrapper 신규 추가

**생성할 파일:**
```
src/app/ko/templates/docs/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/docs/page.tsx                           → "./_components/TemplateWrapper"
src/app/ko/templates/docs/[slug]/page.tsx                    → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 3과 동일한 방식으로 KO docs 처리. 커밋 메시지: `"refactor: KO docs TemplateWrapper 신규 추가"`

---

## Task 5: EN technology TemplateWrapper 신규 추가

technology는 `theme.json`이 존재한다. CSS 변수 주입을 포함한 전체 버전을 사용한다.

**생성할 파일:**
```
src/app/en/templates/technology/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/technology/page.tsx                     → "./_components/TemplateWrapper"
src/app/en/templates/technology/about/page.tsx               → "../_components/TemplateWrapper"
src/app/en/templates/technology/contact/page.tsx             → "../_components/TemplateWrapper"
src/app/en/templates/technology/products/page.tsx            → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/technology/_components/TemplateWrapper.tsx` 생성

technology는 SaaS/Tech 계열이므로 깔끔한 fade-up 애니메이션을 적용한다:

```tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ThemeConfig {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    text: { main: string; muted: string; contrast: string };
    ui: { border: string; hover: string; shadow: string };
  };
  typography: {
    heading: { font: string; style: string };
    body: { font: string; style: string };
  };
  spacing: { page_pt: string; container: string; gutter: string; card_gap: string };
  interaction: { button: string; card_hover: string };
}

export function TemplateWrapper({ theme, children }: { theme: any; children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  const cssVariables = useMemo(() => {
    const t = theme.theme as ThemeConfig;
    return {
      "--theme-primary": t.palette.primary,
      "--theme-secondary": t.palette.secondary,
      "--theme-accent": t.palette.accent,
      "--theme-text": t.palette.text.main,
      "--theme-text-muted": t.palette.text.muted,
      "--theme-text-contrast": t.palette.text.contrast,
      "--theme-border": t.palette.ui.border,
      "--theme-ui-hover": t.palette.ui.hover,
      "--theme-ui-shadow": t.palette.ui.shadow,
      "--theme-font-heading": t.typography.heading.font,
      "--theme-font-body": t.typography.body.font,
      "--theme-page-pt": t.spacing.page_pt,
      "--theme-container": t.spacing.container,
      "--theme-gutter": t.spacing.gutter,
    } as React.CSSProperties;
  }, [theme]);

  return (
    <div style={cssVariables} className="min-h-screen bg-[var(--theme-primary)] text-[var(--theme-secondary)]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2:** 위 4개 파일에 `import { TemplateWrapper } from "./_components/TemplateWrapper"` (또는 `"../"`) 추가 및 `theme` prop과 함께 return문 감싸기

각 파일에서 `theme.json` import가 없다면 추가:
```tsx
import theme from "./theme.json";       // page.tsx
import theme from "../theme.json";      // 하위 페이지
```

return문:
```tsx
<TemplateWrapper theme={theme}>
  ...
</TemplateWrapper>
```

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "technology"`

- [ ] **Step 4:** `git add src/app/en/templates/technology/ && git commit -m "refactor: EN technology TemplateWrapper 신규 추가"`

---

## Task 6: KO technology TemplateWrapper 신규 추가

**생성할 파일:**
```
src/app/ko/templates/technology/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/technology/page.tsx                     → "./_components/TemplateWrapper"
src/app/ko/templates/technology/about/page.tsx               → "../_components/TemplateWrapper"
src/app/ko/templates/technology/contact/page.tsx             → "../_components/TemplateWrapper"
src/app/ko/templates/technology/products/page.tsx            → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 5와 동일한 방식으로 KO technology 처리. theme.json 경로는 `"../theme.json"`. 커밋 메시지: `"refactor: KO technology TemplateWrapper 신규 추가"`

---

## Task 7: 외부 이미지 URL 제거 — airline destinations

**수정할 파일:**
```
src/app/en/templates/airline/destinations/[slug]/destinationData.ts
src/app/ko/templates/airline/destinations/[slug]/destinationData.ts
```

- [ ] **Step 1:** `src/app/en/templates/airline/destinations/[slug]/destinationData.ts` 파일을 열어 `https://images.unsplash.com/` URL을 모두 확인한다

- [ ] **Step 2:** 각 URL을 아래 규칙으로 교체한다

```
교체 규칙:
- hero 이미지 → "/templates/airline/hero-[도시명].jpg"
- 카드 이미지 → "/templates/airline/dest-[도시명]-[번호].jpg"
```

실제 이미지 파일이 아직 없으므로, URL을 placeholder 경로로만 변경한다:
```ts
// 변경 전
heroImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=90"

// 변경 후
heroImg: "/templates/airline/dest-paris-hero.jpg"
```

- [ ] **Step 3:** `src/app/ko/templates/airline/destinations/[slug]/destinationData.ts` 동일하게 처리 (파일 내용이 EN과 동일하다면 동일한 경로 사용)

- [ ] **Step 4:** `npx tsc --noEmit 2>&1 | grep "airline"`

- [ ] **Step 5:**
```bash
git add src/app/en/templates/airline/destinations/
git add src/app/ko/templates/airline/destinations/
git commit -m "fix: airline destination 외부 이미지 URL 로컬 경로로 교체"
```

---

## Task 8: 외부 이미지 URL 제거 — dashboard customers

**수정할 파일:**
```
src/app/en/templates/dashboard/data/customers-data.ts
src/app/ko/templates/dashboard/data/customers-data.ts
```

- [ ] **Step 1:** `src/app/en/templates/dashboard/data/customers-data.ts` 파일을 열어 `avatarUrl` 필드의 Unsplash URL을 모두 확인한다

- [ ] **Step 2:** 모든 `avatarUrl` 값을 아래와 같이 교체한다

```ts
// 변경 전
avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&..."

// 변경 후
avatarUrl: "/templates/dashboard/avatar-placeholder.png"
```

모든 고객 아바타는 동일한 placeholder 경로를 사용한다.

- [ ] **Step 3:** `src/app/ko/templates/dashboard/data/customers-data.ts` 동일하게 처리

- [ ] **Step 4:**
```bash
git add src/app/en/templates/dashboard/data/
git add src/app/ko/templates/dashboard/data/
git commit -m "fix: dashboard customers 외부 이미지 URL 로컬 경로로 교체"
```

---

## Task 9: font-light 제거 — EN sneaker Hero

**수정할 파일:**
```
src/app/en/templates/sneaker/_components/sections/Hero.tsx
```

- [ ] **Step 1:** 파일을 열어 `font-light` 클래스를 찾는다

```bash
grep -n "font-light" src/app/en/templates/sneaker/_components/sections/Hero.tsx
```

- [ ] **Step 2:** `font-light` → `font-normal` 로 교체한다

- [ ] **Step 3:**
```bash
git add src/app/en/templates/sneaker/_components/sections/Hero.tsx
git commit -m "fix: sneaker Hero font-light → font-normal 교체"
```

---

## Task 10: italic 제거 — EN/KO docs

**수정할 파일:**
```
src/app/en/templates/docs/[slug]/page.tsx  (109번째 줄)
src/app/ko/templates/docs/[slug]/page.tsx  (109번째 줄)
```

- [ ] **Step 1:** `src/app/en/templates/docs/[slug]/page.tsx` 109번째 줄에서 `italic` 클래스 제거

```tsx
// 변경 전
<p className="text-[15px] text-[var(--color-text)] leading-relaxed italic">

// 변경 후
<p className="text-[15px] text-[var(--color-text)] leading-relaxed">
```

- [ ] **Step 2:** `src/app/ko/templates/docs/[slug]/page.tsx` 동일하게 처리

- [ ] **Step 3:**
```bash
git add src/app/en/templates/docs/[slug]/page.tsx
git add "src/app/ko/templates/docs/[slug]/page.tsx"
git commit -m "fix: docs italic 클래스 제거"
```

---

## Task 11: em-dash 제거 — EN/KO dashboard

em-dash(`—`)는 쉼표, 마침표, 하이픈(`-`)으로 대체한다.

**수정할 파일:**
```
src/app/en/templates/dashboard/_components/charts/ModelSalesLine.tsx
src/app/en/templates/dashboard/_components/charts/RevenueBarChart.tsx
src/app/en/templates/dashboard/_components/charts/ScatterChart.tsx
src/app/en/templates/dashboard/_components/layout/Sidebar.tsx
src/app/en/templates/dashboard/_components/widgets/ActivityFeed.tsx
src/app/en/templates/dashboard/_components/widgets/ProjectStatus.tsx
src/app/en/templates/dashboard/_components/widgets/QuickNotes.tsx
src/app/en/templates/dashboard/profile/page.tsx
src/app/ko/templates/dashboard/_components/charts/ModelSalesLine.tsx
src/app/ko/templates/dashboard/_components/charts/RevenueBarChart.tsx
src/app/ko/templates/dashboard/_components/charts/ScatterChart.tsx
src/app/ko/templates/dashboard/_components/layout/Sidebar.tsx
src/app/ko/templates/dashboard/_components/widgets/ActivityFeed.tsx
src/app/ko/templates/dashboard/_components/widgets/ProjectStatus.tsx
src/app/ko/templates/dashboard/_components/widgets/QuickNotes.tsx
src/app/ko/templates/dashboard/profile/page.tsx
```

- [ ] **Step 1:** 위 16개 파일에서 `—` 를 문맥에 맞게 교체한다

교체 기준:
- 문장 사이 구분: `—` → ` - `
- 범위 표시 (예: `Jan — Mar`): `—` → `-`
- 문장 끝: `—` → `.`

- [ ] **Step 2:** 교체 후 확인
```bash
grep -r "—" src/app/en/templates/dashboard/ src/app/ko/templates/dashboard/ --include="*.tsx"
```
Expected: 아무 결과도 없어야 한다.

- [ ] **Step 3:**
```bash
git add src/app/en/templates/dashboard/ src/app/ko/templates/dashboard/
git commit -m "fix: dashboard em-dash 제거"
```

---

## Task 12: em-dash 제거 — EN docs layout

**수정할 파일:**
```
src/app/en/templates/docs/layout.tsx
src/app/ko/templates/docs/layout.tsx
```

- [ ] **Step 1:** 두 파일에서 `—` 를 문맥에 맞게 교체

- [ ] **Step 2:** `grep "—" src/app/en/templates/docs/layout.tsx src/app/ko/templates/docs/layout.tsx`
Expected: 아무 결과도 없어야 한다.

- [ ] **Step 3:**
```bash
git add src/app/en/templates/docs/layout.tsx src/app/ko/templates/docs/layout.tsx
git commit -m "fix: docs layout em-dash 제거"
```

---

## Task 13: em-dash 제거 — EN multi-shop blog

**수정할 파일:**
```
src/app/en/templates/multi-shop/blog/[slug]/page.tsx
```

- [ ] **Step 1:** 파일에서 `—` 를 문맥에 맞게 교체

- [ ] **Step 2:** `grep "—" "src/app/en/templates/multi-shop/blog/[slug]/page.tsx"`
Expected: 아무 결과도 없어야 한다.

- [ ] **Step 3:**
```bash
git add "src/app/en/templates/multi-shop/blog/[slug]/page.tsx"
git commit -m "fix: multi-shop blog em-dash 제거"
```

---

## Task 14: em-dash 제거 — EN/KO technology

**수정할 파일:**
```
src/app/en/templates/technology/_components/BlogNews.tsx
src/app/en/templates/technology/_components/Header.tsx
src/app/en/templates/technology/_components/Hero.tsx
src/app/en/templates/technology/about/page.tsx
src/app/en/templates/technology/products/page.tsx
src/app/ko/templates/technology/_components/BlogNews.tsx
src/app/ko/templates/technology/_components/Header.tsx
src/app/ko/templates/technology/_components/Hero.tsx
src/app/ko/templates/technology/products/page.tsx
```

- [ ] **Step 1:** 위 9개 파일에서 `—` 를 문맥에 맞게 교체

- [ ] **Step 2:**
```bash
grep -r "—" src/app/en/templates/technology/ src/app/ko/templates/technology/ --include="*.tsx"
```
Expected: 아무 결과도 없어야 한다.

- [ ] **Step 3:**
```bash
git add src/app/en/templates/technology/ src/app/ko/templates/technology/
git commit -m "fix: technology em-dash 제거"
```

---

## 검증 (Claude Code 담당)

전체 완료 후 최종 확인:

```bash
# 외부 이미지 URL 잔여 여부
grep -r "unsplash\|picsum\|pexels" src/app --include="*.tsx" --include="*.ts"

# font-light 잔여 여부
grep -r "font-light" src/app/en/templates src/app/ko/templates --include="*.tsx"

# italic 잔여 여부 (not-italic 제외)
grep -r " italic" src/app/en/templates src/app/ko/templates --include="*.tsx" | grep -v "not-italic"

# em-dash 잔여 여부
grep -r "—" src/app/en/templates src/app/ko/templates --include="*.tsx"

# TypeScript 전체 검증
npx tsc --noEmit
```
