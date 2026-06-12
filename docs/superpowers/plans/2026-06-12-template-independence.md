# Template Independence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 공유 컴포넌트 `src/components/TemplateWrapper.tsx`를 삭제하고, 각 템플릿 폴더가 자체 `TemplateWrapper.tsx`를 보유하도록 독립화한다.

**Architecture:** EN과 KO는 완전히 별개의 폴더다. `src/app/en/templates/airline/`과 `src/app/ko/templates/airline/`은 파일을 공유하지 않으며, 각각 독립된 `_components/TemplateWrapper.tsx`를 가져야 한다. Task는 EN 14개 + KO 14개 + 공통 2개 = 총 30개다.

**Tech Stack:** Next.js 16, React 19, framer-motion, TypeScript, Tailwind CSS v4

---

## 프로젝트 루트 경로

모든 경로는 아래 루트를 기준으로 한다:

```
/Users/sungyounghan/project/ohmytemplates/
```

---

## 사전 이해: TemplateWrapper 역할

현재 `src/components/TemplateWrapper.tsx`는 두 가지 역할을 한다:

**1. CSS 변수 주입** — `theme.json`의 값을 CSS custom property로 변환

```tsx
const cssVariables = useMemo(() => {
  const t = theme.theme;
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
```

**2. 페이지 전환 애니메이션** — 템플릿별로 다른 framer-motion 애니메이션

**3. 스크롤 복원**

```tsx
React.useEffect(() => {
  if (typeof window !== "undefined") {
    if ('history' in window && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0 });
  }
}, []);
```

---

## 템플릿별 애니메이션 정의

각 템플릿 고유의 `motion.div` 설정이다. Task 실행 시 아래 표를 참고해 해당 템플릿의 값을 사용한다.

| 템플릿 | initial | animate | transition |
|--------|---------|---------|------------|
| airline | `{ opacity: 0, scale: 1.05 }` | `{ opacity: 1, scale: 1 }` | `{ duration: 1.0, ease: [0.33, 1, 0.68, 1] }` |
| car | `{ opacity: 0, scale: 0.95, x: 30 }` | `{ opacity: 1, scale: 1, x: 0 }` | `{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }` |
| cosmetic | `{ opacity: 0, x: -10 }` | `{ opacity: 1, x: 0 }` | `{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }` |
| exhibition | `{ opacity: 0, y: 40 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }` |
| fashion | `{ opacity: 0, filter: "blur(4px)" }` | `{ opacity: 1, filter: "blur(0px)" }` | `{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }` |
| furniture | `{ opacity: 0, scale: 0.98, y: 15 }` | `{ opacity: 1, scale: 1, y: 0 }` | `{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }` |
| ir | `{ opacity: 0, y: 8 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.5, ease: "easeOut" }` |
| jewelry | `{ opacity: 0 }` | `{ opacity: 1 }` | `{ duration: 1.2, ease: "easeInOut" }` |
| magazine | `{ opacity: 0, rotateX: 5, y: 20 }` | `{ opacity: 1, rotateX: 0, y: 0 }` | `{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }` |
| multi-shop | `{ opacity: 0, y: 10 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6, ease: "easeOut" }` |
| newspaper | `{ opacity: 0, scale: 0.97 }` | `{ opacity: 1, scale: 1 }` | `{ duration: 0.4, ease: "easeOut" }` |
| portfolio | `{ opacity: 0, scale: 0.92, y: 20 }` | `{ opacity: 1, scale: 1, y: 0 }` | `{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }` |
| sneaker | `{ opacity: 0, x: 40 }` | `{ opacity: 1, x: 0 }` | `{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }` |
| studio | `{ opacity: 0, y: 30 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }` |

---

## TemplateWrapper 표준 템플릿 코드

아래는 모든 템플릿에 공통으로 적용되는 골격이다. `[INITIAL]`, `[ANIMATE]`, `[TRANSITION]`만 위 표의 값으로 교체하면 된다.

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
        initial={[INITIAL]}
        animate={[ANIMATE]}
        transition={[TRANSITION]}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none", filter: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

---

## import 경로 규칙

page.tsx 파일의 깊이에 따라 import 경로가 달라진다.

| page.tsx 위치 | import 경로 |
|--------------|-------------|
| `templates/[name]/page.tsx` | `"./_components/TemplateWrapper"` |
| `templates/[name]/[subpage]/page.tsx` | `"../_components/TemplateWrapper"` |
| `templates/[name]/[subpage]/[slug]/page.tsx` | `"../../_components/TemplateWrapper"` |

---

## Task 1: EN airline 독립화

**생성할 파일:**
```
src/app/en/templates/airline/_components/TemplateWrapper.tsx
```

**수정할 파일 (import 경로 변경):**
```
src/app/en/templates/airline/page.tsx                        → "./_components/TemplateWrapper"
src/app/en/templates/airline/book/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/airline/destinations/page.tsx           → "../_components/TemplateWrapper"
src/app/en/templates/airline/destinations/[slug]/page.tsx    → "../../_components/TemplateWrapper"
src/app/en/templates/airline/experience/page.tsx             → "../_components/TemplateWrapper"
src/app/en/templates/airline/loyalty/page.tsx                → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** 위 표준 템플릿 코드를 사용해 `src/app/en/templates/airline/_components/TemplateWrapper.tsx` 생성. airline 애니메이션 적용: `initial={{ opacity: 0, scale: 1.05 }}` / `animate={{ opacity: 1, scale: 1 }}` / `transition={{ duration: 1.0, ease: [0.33, 1, 0.68, 1] }}`

- [ ] **Step 2:** 위 6개 파일에서 `import { TemplateWrapper } from "@/components/TemplateWrapper"` 를 각 파일별 경로로 교체

- [ ] **Step 3:** TypeScript 검증
```bash
npx tsc --noEmit 2>&1 | grep "airline"
```
Expected: airline 관련 에러 없음

- [ ] **Step 4:** 커밋
```bash
git add src/app/en/templates/airline/
git commit -m "refactor: EN airline TemplateWrapper 독립화"
```

---

## Task 2: KO airline 독립화

**생성할 파일:**
```
src/app/ko/templates/airline/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/airline/page.tsx                        → "./_components/TemplateWrapper"
src/app/ko/templates/airline/book/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/airline/destinations/page.tsx           → "../_components/TemplateWrapper"
src/app/ko/templates/airline/destinations/[slug]/page.tsx    → "../../_components/TemplateWrapper"
src/app/ko/templates/airline/experience/page.tsx             → "../_components/TemplateWrapper"
src/app/ko/templates/airline/loyalty/page.tsx                → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** Task 1 Step 1과 동일한 내용으로 `src/app/ko/templates/airline/_components/TemplateWrapper.tsx` 생성

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** TypeScript 검증
```bash
npx tsc --noEmit 2>&1 | grep "airline"
```

- [ ] **Step 4:** 커밋
```bash
git add src/app/ko/templates/airline/
git commit -m "refactor: KO airline TemplateWrapper 독립화"
```

---

## Task 3: EN car 독립화

**생성할 파일:**
```
src/app/en/templates/car/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/car/page.tsx                            → "./_components/TemplateWrapper"
src/app/en/templates/car/about/page.tsx                      → "../_components/TemplateWrapper"
src/app/en/templates/car/configure/page.tsx                  → "../_components/TemplateWrapper"
src/app/en/templates/car/models/page.tsx                     → "../_components/TemplateWrapper"
src/app/en/templates/car/models/[slug]/page.tsx              → "../../_components/TemplateWrapper"
src/app/en/templates/car/technology/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/car/_components/TemplateWrapper.tsx` 생성. car 애니메이션: `initial={{ opacity: 0, scale: 0.95, x: 30 }}` / `animate={{ opacity: 1, scale: 1, x: 0 }}` / `transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}`

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "car"`

- [ ] **Step 4:** `git add src/app/en/templates/car/ && git commit -m "refactor: EN car TemplateWrapper 독립화"`

---

## Task 4: KO car 독립화

**생성할 파일:**
```
src/app/ko/templates/car/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/car/page.tsx                            → "./_components/TemplateWrapper"
src/app/ko/templates/car/about/page.tsx                      → "../_components/TemplateWrapper"
src/app/ko/templates/car/configure/page.tsx                  → "../_components/TemplateWrapper"
src/app/ko/templates/car/models/page.tsx                     → "../_components/TemplateWrapper"
src/app/ko/templates/car/models/[slug]/page.tsx              → "../../_components/TemplateWrapper"
src/app/ko/templates/car/technology/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** Task 3과 동일한 내용으로 `src/app/ko/templates/car/_components/TemplateWrapper.tsx` 생성

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "car"`

- [ ] **Step 4:** `git add src/app/ko/templates/car/ && git commit -m "refactor: KO car TemplateWrapper 독립화"`

---

## Task 5: EN cosmetic 독립화

**생성할 파일:**
```
src/app/en/templates/cosmetic/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/cosmetic/page.tsx                       → "./_components/TemplateWrapper"
src/app/en/templates/cosmetic/account/page.tsx               → "../_components/TemplateWrapper"
src/app/en/templates/cosmetic/journal/page.tsx               → "../_components/TemplateWrapper"
src/app/en/templates/cosmetic/journal/[slug]/page.tsx        → "../../_components/TemplateWrapper"
src/app/en/templates/cosmetic/shop/page.tsx                  → "../_components/TemplateWrapper"
src/app/en/templates/cosmetic/story/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/cosmetic/_components/TemplateWrapper.tsx` 생성. cosmetic 애니메이션: `initial={{ opacity: 0, x: -10 }}` / `animate={{ opacity: 1, x: 0 }}` / `transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}`

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "cosmetic"`

- [ ] **Step 4:** `git add src/app/en/templates/cosmetic/ && git commit -m "refactor: EN cosmetic TemplateWrapper 독립화"`

---

## Task 6: KO cosmetic 독립화

**생성할 파일:**
```
src/app/ko/templates/cosmetic/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/cosmetic/page.tsx                       → "./_components/TemplateWrapper"
src/app/ko/templates/cosmetic/account/page.tsx               → "../_components/TemplateWrapper"
src/app/ko/templates/cosmetic/journal/page.tsx               → "../_components/TemplateWrapper"
src/app/ko/templates/cosmetic/journal/[slug]/page.tsx        → "../../_components/TemplateWrapper"
src/app/ko/templates/cosmetic/shop/page.tsx                  → "../_components/TemplateWrapper"
src/app/ko/templates/cosmetic/story/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 5와 동일한 방식으로 KO cosmetic 처리. 커밋 메시지: `"refactor: KO cosmetic TemplateWrapper 독립화"`

---

## Task 7: EN exhibition 독립화

**생성할 파일:**
```
src/app/en/templates/exhibition/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/exhibition/page.tsx                          → "./_components/TemplateWrapper"
src/app/en/templates/exhibition/collections/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/exhibition/collections/[slug]/page.tsx       → "../../_components/TemplateWrapper"
src/app/en/templates/exhibition/curator-note/page.tsx             → "../_components/TemplateWrapper"
src/app/en/templates/exhibition/exhibitions/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/exhibition/our-story/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/exhibition/product/[id]/page.tsx             → "../../_components/TemplateWrapper"
src/app/en/templates/exhibition/shop/page.tsx                     → "../_components/TemplateWrapper"
src/app/en/templates/exhibition/souvenir/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/exhibition/_components/TemplateWrapper.tsx` 생성. exhibition 애니메이션: `initial={{ opacity: 0, y: 40 }}` / `animate={{ opacity: 1, y: 0 }}` / `transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}`

- [ ] **Step 2:** 위 9개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "exhibition"`

- [ ] **Step 4:** `git add src/app/en/templates/exhibition/ && git commit -m "refactor: EN exhibition TemplateWrapper 독립화"`

---

## Task 8: KO exhibition 독립화

**생성할 파일:**
```
src/app/ko/templates/exhibition/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/exhibition/page.tsx                          → "./_components/TemplateWrapper"
src/app/ko/templates/exhibition/collections/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/exhibition/collections/[slug]/page.tsx       → "../../_components/TemplateWrapper"
src/app/ko/templates/exhibition/curator-note/page.tsx             → "../_components/TemplateWrapper"
src/app/ko/templates/exhibition/exhibitions/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/exhibition/our-story/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/exhibition/product/[id]/page.tsx             → "../../_components/TemplateWrapper"
src/app/ko/templates/exhibition/shop/page.tsx                     → "../_components/TemplateWrapper"
src/app/ko/templates/exhibition/souvenir/page.tsx                 → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 7과 동일한 방식으로 KO exhibition 처리. 커밋 메시지: `"refactor: KO exhibition TemplateWrapper 독립화"`

---

## Task 9: EN fashion 독립화

**생성할 파일:**
```
src/app/en/templates/fashion/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/fashion/page.tsx                        → "./_components/TemplateWrapper"
src/app/en/templates/fashion/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/fashion/category/[id]/page.tsx          → "../../_components/TemplateWrapper"
src/app/en/templates/fashion/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/fashion/_components/TemplateWrapper.tsx` 생성. fashion 애니메이션: `initial={{ opacity: 0, filter: "blur(4px)" }}` / `animate={{ opacity: 1, filter: "blur(0px)" }}` / `transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}`

- [ ] **Step 2:** 위 4개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "fashion"`

- [ ] **Step 4:** `git add src/app/en/templates/fashion/ && git commit -m "refactor: EN fashion TemplateWrapper 독립화"`

---

## Task 10: KO fashion 독립화

**생성할 파일:**
```
src/app/ko/templates/fashion/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/fashion/page.tsx                        → "./_components/TemplateWrapper"
src/app/ko/templates/fashion/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/fashion/category/[id]/page.tsx          → "../../_components/TemplateWrapper"
src/app/ko/templates/fashion/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
src/app/ko/templates/fashion/journal/[id]/page.tsx           → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 9와 동일한 방식으로 KO fashion 처리 (수정 파일 5개). 커밋 메시지: `"refactor: KO fashion TemplateWrapper 독립화"`

---

## Task 11: EN furniture 독립화

**생성할 파일:**
```
src/app/en/templates/furniture/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/furniture/page.tsx                      → "./_components/TemplateWrapper"
src/app/en/templates/furniture/cart/page.tsx                 → "../_components/TemplateWrapper"
src/app/en/templates/furniture/category/[id]/page.tsx        → "../../_components/TemplateWrapper"
src/app/en/templates/furniture/product/[id]/page.tsx         → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/furniture/_components/TemplateWrapper.tsx` 생성. furniture 애니메이션: `initial={{ opacity: 0, scale: 0.98, y: 15 }}` / `animate={{ opacity: 1, scale: 1, y: 0 }}` / `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`

- [ ] **Step 2:** 위 4개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "furniture"`

- [ ] **Step 4:** `git add src/app/en/templates/furniture/ && git commit -m "refactor: EN furniture TemplateWrapper 독립화"`

---

## Task 12: KO furniture 독립화

**생성할 파일:**
```
src/app/ko/templates/furniture/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/furniture/page.tsx                      → "./_components/TemplateWrapper"
src/app/ko/templates/furniture/cart/page.tsx                 → "../_components/TemplateWrapper"
src/app/ko/templates/furniture/category/[id]/page.tsx        → "../../_components/TemplateWrapper"
src/app/ko/templates/furniture/product/[id]/page.tsx         → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 11과 동일한 방식으로 KO furniture 처리. 커밋 메시지: `"refactor: KO furniture TemplateWrapper 독립화"`

---

## Task 13: EN ir 독립화

**생성할 파일:**
```
src/app/en/templates/ir/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/ir/page.tsx                             → "./_components/TemplateWrapper"
src/app/en/templates/ir/contact/page.tsx                     → "../_components/TemplateWrapper"
src/app/en/templates/ir/financials/page.tsx                  → "../_components/TemplateWrapper"
src/app/en/templates/ir/governance/page.tsx                  → "../_components/TemplateWrapper"
src/app/en/templates/ir/news/page.tsx                        → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/ir/_components/TemplateWrapper.tsx` 생성. ir 애니메이션: `initial={{ opacity: 0, y: 8 }}` / `animate={{ opacity: 1, y: 0 }}` / `transition={{ duration: 0.5, ease: "easeOut" }}`

- [ ] **Step 2:** 위 5개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "/ir/"`

- [ ] **Step 4:** `git add src/app/en/templates/ir/ && git commit -m "refactor: EN ir TemplateWrapper 독립화"`

---

## Task 14: KO ir 독립화

**생성할 파일:**
```
src/app/ko/templates/ir/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/ir/page.tsx                             → "./_components/TemplateWrapper"
src/app/ko/templates/ir/contact/page.tsx                     → "../_components/TemplateWrapper"
src/app/ko/templates/ir/financials/page.tsx                  → "../_components/TemplateWrapper"
src/app/ko/templates/ir/governance/page.tsx                  → "../_components/TemplateWrapper"
src/app/ko/templates/ir/news/page.tsx                        → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 13과 동일한 방식으로 KO ir 처리. 커밋 메시지: `"refactor: KO ir TemplateWrapper 독립화"`

---

## Task 15: EN jewelry 독립화

**생성할 파일:**
```
src/app/en/templates/jewelry/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/jewelry/page.tsx                        → "./_components/TemplateWrapper"
src/app/en/templates/jewelry/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/jewelry/category/[id]/page.tsx          → "../../_components/TemplateWrapper"
src/app/en/templates/jewelry/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/jewelry/_components/TemplateWrapper.tsx` 생성. jewelry 애니메이션: `initial={{ opacity: 0 }}` / `animate={{ opacity: 1 }}` / `transition={{ duration: 1.2, ease: "easeInOut" }}`

- [ ] **Step 2:** 위 4개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "jewelry"`

- [ ] **Step 4:** `git add src/app/en/templates/jewelry/ && git commit -m "refactor: EN jewelry TemplateWrapper 독립화"`

---

## Task 16: KO jewelry 독립화

**생성할 파일:**
```
src/app/ko/templates/jewelry/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/jewelry/page.tsx                        → "./_components/TemplateWrapper"
src/app/ko/templates/jewelry/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/jewelry/category/[id]/page.tsx          → "../../_components/TemplateWrapper"
src/app/ko/templates/jewelry/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 15와 동일한 방식으로 KO jewelry 처리. 커밋 메시지: `"refactor: KO jewelry TemplateWrapper 독립화"`

---

## Task 17: EN magazine 독립화

**생성할 파일:**
```
src/app/en/templates/magazine/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/magazine/page.tsx                       → "./_components/TemplateWrapper"
src/app/en/templates/magazine/article/[slug]/page.tsx        → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/magazine/_components/TemplateWrapper.tsx` 생성. magazine 애니메이션: `initial={{ opacity: 0, rotateX: 5, y: 20 }}` / `animate={{ opacity: 1, rotateX: 0, y: 0 }}` / `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}`

- [ ] **Step 2:** 위 2개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "magazine"`

- [ ] **Step 4:** `git add src/app/en/templates/magazine/ && git commit -m "refactor: EN magazine TemplateWrapper 독립화"`

---

## Task 18: KO magazine 독립화

**생성할 파일:**
```
src/app/ko/templates/magazine/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/magazine/page.tsx                       → "./_components/TemplateWrapper"
src/app/ko/templates/magazine/article/[slug]/page.tsx        → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 17과 동일한 방식으로 KO magazine 처리. 커밋 메시지: `"refactor: KO magazine TemplateWrapper 독립화"`

---

## Task 19: EN multi-shop 독립화

**생성할 파일:**
```
src/app/en/templates/multi-shop/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/multi-shop/page.tsx                     → "./_components/TemplateWrapper"
src/app/en/templates/multi-shop/about/page.tsx               → "../_components/TemplateWrapper"
src/app/en/templates/multi-shop/blog/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/multi-shop/blog/[slug]/page.tsx         → "../../_components/TemplateWrapper"
src/app/en/templates/multi-shop/contact/page.tsx             → "../_components/TemplateWrapper"
src/app/en/templates/multi-shop/product/[id]/page.tsx        → "../../_components/TemplateWrapper"
src/app/en/templates/multi-shop/shop/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/multi-shop/shop/[category]/page.tsx     → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/multi-shop/_components/TemplateWrapper.tsx` 생성. multi-shop 애니메이션: `initial={{ opacity: 0, y: 10 }}` / `animate={{ opacity: 1, y: 0 }}` / `transition={{ duration: 0.6, ease: "easeOut" }}`

- [ ] **Step 2:** 위 8개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "multi-shop"`

- [ ] **Step 4:** `git add src/app/en/templates/multi-shop/ && git commit -m "refactor: EN multi-shop TemplateWrapper 독립화"`

---

## Task 20: KO multi-shop 독립화

**생성할 파일:**
```
src/app/ko/templates/multi-shop/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/multi-shop/page.tsx                     → "./_components/TemplateWrapper"
src/app/ko/templates/multi-shop/about/page.tsx               → "../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/blog/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/blog/[slug]/page.tsx         → "../../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/contact/page.tsx             → "../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/product/[id]/page.tsx        → "../../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/shop/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/multi-shop/shop/[category]/page.tsx     → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 19와 동일한 방식으로 KO multi-shop 처리. 커밋 메시지: `"refactor: KO multi-shop TemplateWrapper 독립화"`

---

## Task 21: EN newspaper 독립화

**생성할 파일:**
```
src/app/en/templates/newspaper/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/newspaper/page.tsx                      → "./_components/TemplateWrapper"
src/app/en/templates/newspaper/[category]/page.tsx           → "../_components/TemplateWrapper"
src/app/en/templates/newspaper/[category]/[slug]/page.tsx    → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/newspaper/_components/TemplateWrapper.tsx` 생성. newspaper 애니메이션: `initial={{ opacity: 0, scale: 0.97 }}` / `animate={{ opacity: 1, scale: 1 }}` / `transition={{ duration: 0.4, ease: "easeOut" }}`

- [ ] **Step 2:** 위 3개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "newspaper"`

- [ ] **Step 4:** `git add src/app/en/templates/newspaper/ && git commit -m "refactor: EN newspaper TemplateWrapper 독립화"`

---

## Task 22: KO newspaper 독립화

**생성할 파일:**
```
src/app/ko/templates/newspaper/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/newspaper/page.tsx                      → "./_components/TemplateWrapper"
src/app/ko/templates/newspaper/[category]/page.tsx           → "../_components/TemplateWrapper"
src/app/ko/templates/newspaper/[category]/[slug]/page.tsx    → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 21과 동일한 방식으로 KO newspaper 처리. 커밋 메시지: `"refactor: KO newspaper TemplateWrapper 독립화"`

---

## Task 23: EN portfolio 독립화

**생성할 파일:**
```
src/app/en/templates/portfolio/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/portfolio/page.tsx                      → "./_components/TemplateWrapper"
src/app/en/templates/portfolio/about/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/portfolio/contact/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/portfolio/journal/page.tsx              → "../_components/TemplateWrapper"
src/app/en/templates/portfolio/manifesto/page.tsx            → "../_components/TemplateWrapper"
src/app/en/templates/portfolio/project/[id]/page.tsx         → "../../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/portfolio/_components/TemplateWrapper.tsx` 생성. portfolio 애니메이션: `initial={{ opacity: 0, scale: 0.92, y: 20 }}` / `animate={{ opacity: 1, scale: 1, y: 0 }}` / `transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}`

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "portfolio"`

- [ ] **Step 4:** `git add src/app/en/templates/portfolio/ && git commit -m "refactor: EN portfolio TemplateWrapper 독립화"`

---

## Task 24: KO portfolio 독립화

**생성할 파일:**
```
src/app/ko/templates/portfolio/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/portfolio/page.tsx                      → "./_components/TemplateWrapper"
src/app/ko/templates/portfolio/about/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/portfolio/contact/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/portfolio/journal/page.tsx              → "../_components/TemplateWrapper"
src/app/ko/templates/portfolio/manifesto/page.tsx            → "../_components/TemplateWrapper"
src/app/ko/templates/portfolio/project/[id]/page.tsx         → "../../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 23과 동일한 방식으로 KO portfolio 처리. 커밋 메시지: `"refactor: KO portfolio TemplateWrapper 독립화"`

---

## Task 25: EN sneaker 독립화

**생성할 파일:**
```
src/app/en/templates/sneaker/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/sneaker/page.tsx                        → "./_components/TemplateWrapper"
src/app/en/templates/sneaker/about/page.tsx                  → "../_components/TemplateWrapper"
src/app/en/templates/sneaker/blog/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/sneaker/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/sneaker/contact/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/sneaker/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
src/app/en/templates/sneaker/shop-all/page.tsx               → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/sneaker/_components/TemplateWrapper.tsx` 생성. sneaker 애니메이션: `initial={{ opacity: 0, x: 40 }}` / `animate={{ opacity: 1, x: 0 }}` / `transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}`

- [ ] **Step 2:** 위 7개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "sneaker"`

- [ ] **Step 4:** `git add src/app/en/templates/sneaker/ && git commit -m "refactor: EN sneaker TemplateWrapper 독립화"`

---

## Task 26: KO sneaker 독립화

**생성할 파일:**
```
src/app/ko/templates/sneaker/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/sneaker/page.tsx                        → "./_components/TemplateWrapper"
src/app/ko/templates/sneaker/about/page.tsx                  → "../_components/TemplateWrapper"
src/app/ko/templates/sneaker/blog/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/sneaker/cart/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/sneaker/contact/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/sneaker/product/[id]/page.tsx           → "../../_components/TemplateWrapper"
src/app/ko/templates/sneaker/shop-all/page.tsx               → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 25와 동일한 방식으로 KO sneaker 처리. 커밋 메시지: `"refactor: KO sneaker TemplateWrapper 독립화"`

---

## Task 27: EN studio 독립화

**생성할 파일:**
```
src/app/en/templates/studio/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/en/templates/studio/page.tsx                         → "./_components/TemplateWrapper"
src/app/en/templates/studio/about/page.tsx                   → "../_components/TemplateWrapper"
src/app/en/templates/studio/contact/page.tsx                 → "../_components/TemplateWrapper"
src/app/en/templates/studio/projects/page.tsx                → "../_components/TemplateWrapper"
src/app/en/templates/studio/projects/[id]/page.tsx           → "../../_components/TemplateWrapper"
src/app/en/templates/studio/services/page.tsx                → "../_components/TemplateWrapper"
```

- [ ] **Step 1:** `src/app/en/templates/studio/_components/TemplateWrapper.tsx` 생성. studio 애니메이션: `initial={{ opacity: 0, y: 30 }}` / `animate={{ opacity: 1, y: 0 }}` / `transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}`

- [ ] **Step 2:** 위 6개 파일 import 경로 교체

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "studio"`

- [ ] **Step 4:** `git add src/app/en/templates/studio/ && git commit -m "refactor: EN studio TemplateWrapper 독립화"`

---

## Task 28: KO studio 독립화

**생성할 파일:**
```
src/app/ko/templates/studio/_components/TemplateWrapper.tsx
```

**수정할 파일:**
```
src/app/ko/templates/studio/page.tsx                         → "./_components/TemplateWrapper"
src/app/ko/templates/studio/about/page.tsx                   → "../_components/TemplateWrapper"
src/app/ko/templates/studio/contact/page.tsx                 → "../_components/TemplateWrapper"
src/app/ko/templates/studio/projects/page.tsx                → "../_components/TemplateWrapper"
src/app/ko/templates/studio/projects/[id]/page.tsx           → "../../_components/TemplateWrapper"
src/app/ko/templates/studio/services/page.tsx                → "../_components/TemplateWrapper"
```

- [ ] **Step 1~4:** Task 27과 동일한 방식으로 KO studio 처리. 커밋 메시지: `"refactor: KO studio TemplateWrapper 독립화"`

---

## Task 29: 랜딩 페이지 TemplateWrapper 제거

랜딩 페이지는 템플릿이 아니므로 TemplateWrapper가 불필요하다.

**수정할 파일:**
```
src/app/en/page.tsx
src/app/ko/page.tsx
```

- [ ] **Step 1:** `src/app/en/page.tsx`에서 아래 두 줄 삭제
```tsx
import { TemplateWrapper } from "@/components/TemplateWrapper";
import theme from "./theme.json";
```
그리고 `<TemplateWrapper theme={theme}>...</TemplateWrapper>` 태그를 제거하고 children만 남긴다.

- [ ] **Step 2:** `src/app/ko/page.tsx` 동일하게 처리

- [ ] **Step 3:** `npx tsc --noEmit`

- [ ] **Step 4:**
```bash
git add src/app/en/page.tsx src/app/ko/page.tsx
git commit -m "refactor: 랜딩 페이지 TemplateWrapper 제거"
```

---

## Task 30: 공유 TemplateWrapper 삭제 (최종)

**반드시 Task 1~29 완료 후 실행한다.**

- [ ] **Step 1:** 잔여 import 전수 확인
```bash
grep -r "@/components/TemplateWrapper" src/
```
Expected: 아무 결과도 출력되지 않아야 한다. 결과가 있으면 해당 파일을 먼저 수정한다.

- [ ] **Step 2:** 공유 파일 삭제
```bash
rm src/components/TemplateWrapper.tsx
```

- [ ] **Step 3:** 최종 빌드 확인
```bash
npx tsc --noEmit
npm run build
```
Expected: 에러 없이 빌드 성공

- [ ] **Step 4:** 커밋
```bash
git add -u src/components/TemplateWrapper.tsx
git commit -m "refactor: 공유 TemplateWrapper 삭제 완료 - 모든 템플릿 독립화"
```

---

## 검증 (Claude Code 담당)

각 Task 완료 후 아래 명령으로 검증한다. `[name]`과 `[en/ko]`를 실제 값으로 교체.

```bash
# 1. 공유 import 잔여 여부
grep -r "@/components/TemplateWrapper" src/app/[en|ko]/templates/[name]/

# 2. 로컬 TemplateWrapper 파일 존재 여부
ls src/app/[en|ko]/templates/[name]/_components/TemplateWrapper.tsx

# 3. TypeScript 에러 여부
npx tsc --noEmit 2>&1 | grep "[name]"
```
