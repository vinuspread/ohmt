# ohmytemplate 프로젝트 규칙 및 프로세스

## 필수 선행 작업

**모든 작업 시작 전 아래 문서를 반드시 먼저 읽는다.**

- `CLAUDE.md` — 프로젝트 전체 규칙 및 프로세스
- `TEMPLATE_AUDIT.md` — 템플릿 현황 및 미처리 이슈 목록

작업 종류에 관계없이 (신규 템플릿, 수정, 버그 수정 등) 위 문서를 읽지 않고 작업을 시작하면 안 된다.

---

## 작업 범위 제한 규칙 (필수)

**사용자가 명시적으로 지시한 템플릿 또는 파일만 수정한다.**

- 작업 지시에 포함되지 않은 다른 템플릿(en/ko 포함)을 임의로 수정하거나 변경하지 않는다.
- 예: technology 템플릿 작업 중 fashion, furniture 등 다른 템플릿 폴더를 건드리지 않는다.
- ko 템플릿은 사용자가 명시적으로 "국문에도 반영해줘" 또는 동등한 지시를 한 경우에만 수정한다.
- 공통 파일(`globals.css`, `tailwind.config.ts`, `layout.tsx` 등)을 수정할 경우 반드시 사전에 사용자에게 영향 범위를 고지한다.

---

## 문서 명명 규칙

### 루트 문서 (2개만 허용)
루트에는 아래 2개 문서만 존재한다. 그 외 모든 문서는 `docs/` 폴더에 둔다.

| 파일 | 용도 |
|------|------|
| `CLAUDE.md` | 프로젝트 전체 규칙 및 프로세스 |
| `TEMPLATE_AUDIT.md` | 템플릿 현황 및 미처리 이슈 목록 |

### `docs/` 폴더 문서 규칙

**네이밍**: 반드시 `kebab-case.md` 형식 사용. 대문자 파일명 금지 (`DESIGN.md` → `design-system.md`).

**접두어 규칙** (카테고리 구분):

| 접두어 | 용도 | 예시 |
|--------|------|------|
| `design-` | 디자인 시스템/가이드 | `design-system.md`, `design-technology.md` |
| `plan-` | 기획/설계 문서 | `plan-technology.md`, `landing-page-plan.md` |
| `task-` | 작업 지시서 (OpenCode 등) | `task-opencode.md`, `task-technology-opencode.md` |
| (없음) | 일반 참고 문서 | `product.md` |

**현재 `docs/` 문서 목록**:
- `design-system.md` — 전체 디자인 시스템 및 컴포넌트 규칙
- `design-technology.md` — technology 템플릿 Robotflow 디자인 가이드
- `product.md` — 프로덕트 정의, 타겟 유저, 브랜드 퍼스낼리티
- `landing-page-plan.md` — 랜딩페이지 기획안 (서비스 패키지 포함)
- `plan-technology.md` — technology 템플릿 기획 및 콘텐츠 계획
- `task-opencode.md` — 전체 템플릿 OpenCode 작업 지시서
- `task-technology-opencode.md` — technology 템플릿 OpenCode 개발 지시서

### 템플릿별 문서 위치 규칙

**템플릿 고유 문서는 절대 루트에 만들지 않는다.**

특정 템플릿에만 해당하는 기획서, 디자인 가이드, 작업 지시서는 반드시 `docs/` 폴더에 둔다.

```
❌ /PLAN_TECHNOLOGY.md
❌ /DESIGN_TECHNOLOGY.md
❌ /opencode-technology.md

✅ /docs/plan-technology.md
✅ /docs/design-technology.md
✅ /docs/task-technology-opencode.md
```

새 템플릿 작업 시 관련 문서를 만들어야 한다면 아래 패턴을 따른다:

| 문서 종류 | 파일명 형식 | 예시 |
|-----------|------------|------|
| 기획/설계 | `docs/plan-[template].md` | `docs/plan-furniture.md` |
| 디자인 가이드 | `docs/design-[template].md` | `docs/design-furniture.md` |
| 작업 지시서 | `docs/task-[template]-opencode.md` | `docs/task-furniture-opencode.md` |

### 버전 파일 금지
동일 주제의 `V2`, `_v2`, `_old` 파일을 루트나 `docs/`에 남기지 않는다. 최신 버전만 유지하고 이전 버전은 삭제한다.

---

## 브랜드 규칙

- **브랜드명은 반드시 `Oh My Template`** 으로 표기한다. (대소문자 유지)
- 이메일: `vinus@vinus.co.kr`
- 저작권: `© 2026 Oh My Template.`

---

## 프로젝트 개요

각 템플릿은 **완전 독립 구조**로 운영된다. 영문(en)과 국문(ko) 템플릿은 별도 폴더로 분리되며 공유 컴포넌트 없이 각자 독립적으로 존재한다.

---

## [필수] 템플릿 독립 구조 규칙 (절대 위반 금지)

### src/components/ 허용 파일

`src/components/`에는 아래 파일만 존재할 수 있다:

| 파일 | 용도 |
|------|------|
| `Logo.tsx` | 서비스 로고 컴포넌트 |

**그 외 어떤 파일도 `src/components/`에 추가하지 않는다.**

### TemplateWrapper 규칙

- `src/components/TemplateWrapper.tsx` — **존재 금지**. 이 파일이 있으면 즉시 삭제 대상이다.
- 각 템플릿은 반드시 `_components/TemplateWrapper.tsx`를 자체적으로 보유한다.
- import 경로는 반드시 로컬 상대 경로를 사용한다:
  ```tsx
  // ❌ 절대 금지
  import { TemplateWrapper } from "@/components/TemplateWrapper";

  // ✅ 필수
  import { TemplateWrapper } from "./_components/TemplateWrapper";   // 루트 페이지
  import { TemplateWrapper } from "../_components/TemplateWrapper";  // 하위 페이지
  import { TemplateWrapper } from "../../_components/TemplateWrapper"; // 2단계 하위
  ```

### 신규 템플릿 TemplateWrapper 작성 기준

신규 템플릿의 `_components/TemplateWrapper.tsx`는 아래 구조를 따른다:

```tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ThemeConfig {
  palette: {
    primary: string; secondary: string; accent: string;
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
      if ('history' in window && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
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
        initial={{ opacity: 0, y: 10 }}   {/* ← 이 템플릿 고유 애니메이션으로 교체 */}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none", filter: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

페이지 전환 애니메이션은 템플릿의 브랜드 성격에 맞게 **반드시 커스터마이징**한다. 모든 템플릿이 동일한 애니메이션을 사용하지 않는다.

---

## 신규 템플릿 제작 프로세스

영문 템플릿 완료 후 아래 순서대로 일괄 처리한다.

### Step 1. 영문 템플릿 완료 검수

아래 항목을 모두 통과해야 완료로 간주한다.

**구조 규칙**
- [ ] `src/` 중첩 폴더 없음 — `template/src/components/` 구조 금지, `template/_components/` 형태로 flat하게
- [ ] `translations/` 폴더 없음 — translation 시스템 사용 금지
- [ ] `useTranslations`, `getTranslation` import 없음
- [ ] `const lang = ...` 패턴 없음
- [ ] `?lang=` URL 파라미터 처리 코드 없음

**코드 규칙**
- [ ] `italic` Tailwind 클래스 없음 (`not-italic`은 허용)
- [ ] 텍스트는 컴포넌트에 직접 하드코딩
- [ ] 외부 이미지 URL 없음 (unsplash.com 등 CDN 참조 금지)

**이미지 규칙**
- [ ] 모든 이미지는 `public/templates/[template-name]/` 에 로컬 저장
- [ ] 이미지 경로는 `/templates/[template-name]/filename.ext` 형식

**디자인 토큰**
- [ ] 템플릿 루트에 `theme.css` 또는 `theme.json` 존재
- [ ] 브랜드 색상, 폰트, 주요 간격을 CSS 변수로 정의
  ```css
  --color-primary: #XXXXXX;
  --color-bg: #XXXXXX;
  --color-text: #XXXXXX;
  --font-heading: 'Font Name', serif;
  --font-body: 'Font Name', sans-serif;
  ```
- [ ] `layout.tsx`에서 `theme.css` import

---

### Step 2. 랜딩 페이지 업데이트

파일: `src/app/en/page.tsx` (영문), `src/app/ko/page.tsx` (국문)

- 신규 템플릿 카드 추가
- 썸네일 이미지: `public/templates/[template-name]/` 에 대표 이미지 준비
- 영문/국문 링크 모두 추가 (국문은 Step 3 완료 후 활성화)
- `src/app/page.tsx`는 `/en`으로 리디렉션

---

### Step 3. 국문 템플릿 제작

영문 템플릿 폴더를 복사 후 아래 항목 수정한다.

**폴더 구조**
```
src/app/ko/templates/[template-name]/   ← 신규 생성
public/templates/[template-name]/       ← 이미지는 영문과 공유 (별도 생성 금지)
```

**텍스트 교체**
- 모든 영문 텍스트 → 한국어로 교체 (하드코딩)
- UI 레이블, 버튼, 메뉴, 본문 전부 포함

**라우팅 경로 교체**
- `/en/templates/[name]/` → `/ko/templates/[name]/` 로 일괄 변경
- 단, 이미지 경로(`/templates/[name]/image.jpg`)는 변경하지 않음

**폰트**
- 한글 전용 폰트 추가 (Noto Sans KR, Pretendard 등)
- `layout.tsx` 에서 한글 폰트 적용

**이미지 경로 규칙 (중요)**
- ko 템플릿은 en 폴더 이미지를 그대로 참조
  - ✅ `/templates/furniture/sofa.png`
  - ❌ `/templates/furniture-ko/sofa.png` (별도 폴더 생성 금지)
- `public/templates/[name]-ko/` 폴더를 새로 만들지 않는다

**검수 항목**
- [ ] 영문 텍스트 잔여 없음
- [ ] 이미지 경로가 en 폴더를 참조하고 있음
- [ ] `public/templates/[name]-ko/` 폴더가 생성되지 않았음
- [ ] 라우팅 링크가 `/ko/templates/[name]/` 경로로 되어 있음
- [ ] 이미지 경로에 `-ko` 경로가 포함되지 않음

---

### Step 4. 커밋 & 푸시

```
feat: add [template-name] template (en + ko)
```

---

## 코드 규칙 (전체 템플릿 공통)

### 금지 사항
| 항목 | 이유 |
|------|------|
| `font-light` Tailwind 클래스 | 전체 폰트 굵기는 `font-normal` 이상 사용 |
| `italic` Tailwind 클래스 | 디자인 일관성 |
| `src/` 중첩 폴더 | flat 구조 유지 |
| translation 시스템 | ko/en 독립 구조와 충돌, 코드 복잡도 증가 |
| 외부 이미지 URL (unsplash 등) | 서비스 안정성 |
| `public/templates/[name]-ko/` 폴더 생성 | 이미지 중복 방지 |
| em-dash `—` | 깨진 문자로 렌더링될 수 있음. 쉼표/마침표/하이픈으로 대체 |
| `??` 등 특수문자 플레이스홀더 | 실제 구분자로 `·` (중간점) 또는 `-` 사용 |

### 컴포넌트 구조
```
template/
├── _components/       ← 공통 컴포넌트 (layout, common 등)
├── [page]/
│   └── page.tsx
├── data/              ← 데이터 파일
├── theme.css          ← 디자인 토큰 (en/ko 모두 필수)
├── layout.tsx
└── page.tsx
```

### 디자인 토큰 사용
컴포넌트 내 색상 하드코딩 대신 CSS 변수 사용:
```tsx
// ❌
className="text-[#C9A84C]"

// ✅
className="text-[var(--color-primary)]"
```

투명도 포함 8자리 헥스 처리:
```tsx
// ❌ (스크립트가 깨뜨릴 수 있음)
className="bg-[#0F0F0FB2]"

// ✅
className="bg-[var(--color-primary)]/70"
```

브랜드 컬러 일괄 치환 필요 시 `scripts/replace-hex-colors.mjs` 실행:
```bash
node scripts/replace-hex-colors.mjs
```

---

## 한글 타이포그래피 규칙

### globals.css 한글 전역 스타일 이해
`globals.css`에 `-ko` 템플릿 전체에 적용되는 전역 스타일이 있다:
```css
[class*="-ko"] * {
  letter-spacing: -0.025em !important;  /* 전체 기본 자간 */
  word-break: keep-all;
  overflow-wrap: break-word;
}
[class*="-ko"] header *, [class*="-ko"] nav * {
  letter-spacing: -0.03em !important;   /* 헤더/nav 자간 강화 */
}
```
이 규칙은 레이아웃 wrapper div에 `-ko` 클래스가 있을 때만 동작한다.
`layout.tsx`의 wrapper div에 `-ko` 포함 클래스가 없으면 전역 스타일이 적용되지 않는다.

### 자간 (letter-spacing)
| 적용 위치 | 클래스 |
|---|---|
| 한글 내비게이션 | `tracking-tight` (기본값, globals.css 오버라이드로 충분) |
| 한글 헤딩 | 별도 설정 불필요 (전역 `-0.025em` 적용됨) |
| 영문 대문자 레이블 | `tracking-[0.1em]` ~ `tracking-[0.3em]` 허용 |

**금지**: 한글 nav/메뉴에 `tracking-[0.3em]` 등 영문 대문자용 넓은 자간 적용
**금지**: 한글 텍스트에 `uppercase` 클래스 (의미 없음)

### 행간 (line-height)
한글 대형 헤딩은 반드시 아래 기준 이상:

| 폰트 크기 | 최소 leading |
|---|---|
| 30px ~ 48px | `leading-[1.25]` 이상 |
| 48px ~ 72px | `leading-[1.2]` 이상 |
| 72px 이상 | `leading-[1.1]` 이상 |

```tsx
// ❌ 한글 헤딩에 너무 좁은 행간
className="text-5xl font-bold leading-[0.95]"

// ✅
className="text-5xl font-bold leading-[1.25]"
```

### 줄바꿈 처리
```tsx
// ❌ 강제 br 줄바꿈 — 모바일에서 어색하게 깨짐
<p>고대 대리석의 속삭임부터<br />천장화의 불꽃까지.</p>

// ✅ text-wrap: pretty + max-width 조정으로 자연스럽게
<p
  className="max-w-[320px]"
  style={{ textWrap: "pretty" } as React.CSSProperties}
>
  고대 대리석의 속삭임부터 천장화의 불꽃까지.
</p>
```

### word-break 주의
`globals.css`의 `overflow-wrap: break-word`가 `word-break: keep-all`을 무력화하는 경우가 있다.
대형 헤딩에서 한글 단어가 중간에 쪼개지면 `[overflow-wrap:normal]` 추가:
```tsx
className="text-4xl font-bold break-keep [overflow-wrap:normal]"
```

---

## theme.css 작성 규칙

en/ko 템플릿 **모두** 루트에 `theme.css` 필수. 아래 변수는 반드시 포함:

```css
:root {
  /* 브랜드 컬러 */
  --color-primary: #XXXXXX;
  --color-accent: #XXXXXX;
  --color-bg: #XXXXXX;
  --color-bg-secondary: #XXXXXX;
  --color-text: #XXXXXX;
  --color-text-muted: #XXXXXX;
  --color-border: #XXXXXX;

  /* 폰트 */
  --font-heading: 'Font Name', serif;
  --font-body: 'Font Name', sans-serif;
}
```

ko 템플릿 theme.css 추가 필수:
```css
/* 한글 접근성 */
body, * { word-break: keep-all; }

/* 헤더 자간 */
header a, header button, header nav { letter-spacing: -0.03em; }
```

---

## 기존 템플릿 현황 (참고)

### 완료된 템플릿

`/en/templates/[name]` / `/ko/templates/[name]`

- airline / airline
- car / car
- cosmetic / cosmetic
- dashboard / dashboard
- docs / docs
- exhibition / exhibition
- fashion / fashion
- furniture / furniture
- ir / ir
- jewelry / jewelry
- magazine / magazine
- multi-shop / multi-shop
- newspaper / newspaper
- portfolio / portfolio
- sneaker / sneaker
- studio / studio
- technology / technology

### 알려진 미처리 작업

#### ✅ 완료 (2026-05-30)
- src/ 구조 제거 (모든 템플릿 flat화)
- translation 시스템 제거
- CSS 토큰 시스템화 (모든 템플릿에 theme.css/json)
- 이미지 폴더 참조 규칙 통일 (fashion-ko, jewelry-ko, ir-ko 정리)
- UI/UX 개선 (shadow 제거, PageHero 통일, rounded 정규화)

#### ⏳ 진행 중
- **ko 텍스트 한글화** (5개): airline-ko, fashion-ko, furniture-ko, magazine-ko, sneaker-ko
  - 나머지 8개 ko 템플릿은 한글 완료
  - 경로 변경 완료: `/templates/[name]-ko` → `/ko/templates/[name]`

---

## 이미지 관리 규칙

- 저장 위치: `public/templates/[template-name]/`
- 경로 형식: `/templates/[template-name]/filename.ext`
- ko 템플릿은 en 폴더 공유
- hero 이미지: 1600px 기준
- 썸네일/콘텐츠 이미지: 800px 기준
- 포맷: jpg (사진), png (누끼/투명), svg (아이콘)
