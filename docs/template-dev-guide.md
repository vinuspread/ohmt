# 템플릿 개발 가이드

> AI 템플릿 제작자(Codex, Claude 등)에게 전달하는 공식 규약 문서.
> 이 문서는 시스템 등록을 위한 **구조 규칙**을 정의한다.
> 디자인, 레이아웃, 애니메이션 등 창작적 결정은 제작 AI가 자유롭게 판단한다.
> 구조 규칙을 충족하지 못한 템플릿은 등록 반려된다.

---

## ⚡ 빠른 참조 — ZIP 필수 구성 (이것부터 확인)

업로드 전 아래 파일이 **모두** zip 안에 있는지 먼저 확인한다. 하나라도 빠지면 등록 거부됨.

### en 업로드 zip 필수 파일 목록

```
[slug]/
├── _components/
│   └── TemplateWrapper.tsx   ← 반드시 있어야 함 (공유 파일 사용 불가)
├── layout.tsx                ← 반드시 있어야 함
├── page.tsx                  ← 반드시 있어야 함
├── theme.css                 ← 반드시 있어야 함
└── theme.json                ← 반드시 있어야 함

public/
└── templates/
    └── [slug]/
        └── thumbnail.jpg     ← 반드시 있어야 함 (en zip에만 포함)
```

### ko 업로드 zip 필수 파일 목록

```
[slug]/
├── _components/
│   └── TemplateWrapper.tsx   ← 반드시 있어야 함
├── layout.tsx                ← 반드시 있어야 함
├── page.tsx                  ← 반드시 있어야 함
├── theme.css                 ← 반드시 있어야 함
└── theme.json                ← 반드시 있어야 함

※ ko zip에는 public/ 폴더를 포함하지 않는다 (이미지는 en과 공유)
```

> **`thumbnail.jpg`는 파일명이 정확히 이 이름이어야 한다.** `thumb.jpg`, `preview.jpg` 등 다른 이름은 인식되지 않는다.

---

## ⚠️ 자주 발생하는 등록 오류

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| `필수 파일이 없습니다: _components/TemplateWrapper.tsx` | TemplateWrapper.tsx 누락 | `[slug]/_components/TemplateWrapper.tsx` 파일을 생성하고 zip에 포함 |
| `필수 이미지 파일이 없습니다: public/templates/[slug]/thumbnail.jpg` | 썸네일 누락 또는 파일명 불일치 | 파일명을 정확히 `thumbnail.jpg`로 하여 `public/templates/[slug]/` 경로에 포함 |
| `zip 루트에 템플릿 폴더가 정확히 1개 있어야 합니다` | zip 압축 방식 오류 | `[slug]/` 폴더와 `public/` 폴더만 zip 루트에 위치해야 함. `src/app/...` 경로 포함 불가 |
| `theme.json slug와 폴더명이 다릅니다` | theme.json의 slug 값 불일치 | theme.json의 `"slug"` 값이 폴더명과 정확히 일치해야 함 |
| `금지된 경로가 포함되어 있습니다: src/` | src/ 경로가 zip에 포함됨 | zip 루트에 `[slug]/` 폴더를 직접 위치시켜야 함 |

> **등록 시스템은 모든 오류를 한 번에 리포트한다.** 오류 목록 전체를 확인하고 한 번에 수정하여 재업로드한다.

---

## 1. 시스템 개요

**Oh My Template**는 Next.js 기반 프리미엄 웹 템플릿 서비스다. 각 템플릿은 실제 동작하는 Next.js 앱으로 제공되며, 관리자 시스템에 zip 파일로 업로드되어 서비스에 통합된다.

### 기술 스택

| 항목 | 스펙 |
|------|------|
| 프레임워크 | Next.js 16+ (App Router) — `params`/`searchParams`는 **Promise**이므로 반드시 `await` 사용 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| 애니메이션 | framer-motion |
| 이미지 | next/image |

### 핵심 원칙

**1. 완전 독립 구조**: 각 템플릿은 독립 폴더 안에서 완결된다. 다른 템플릿과 파일을 공유하지 않는다.

**2. en / ko 분리**: 영문과 국문은 별도 폴더로 분리한다. 이미지 파일만 공유한다.

**3. 정적 데이터**: 모든 콘텐츠는 컴포넌트에 직접 하드코딩한다. DB, CMS, 외부 API를 사용하지 않는다.

### 경로 구조

- **영문 경로**: `src/app/en/templates/[slug]/`
- **국문 경로**: `src/app/ko/templates/[slug]/`
- **이미지 경로**: `public/templates/[slug]/` (en/ko 공유)

### slug 명명 규칙

| 규칙 | 예시 |
|------|------|
| 영문 소문자만 사용 | `furniture` ✅ |
| 단어 구분은 하이픈(`-`) | `multi-shop` ✅ |
| 언더스코어 금지 | `multi_shop` ❌ |
| 대문자 금지 | `Furniture` ❌ |
| 공백 금지 | `multi shop` ❌ |

---

## 2. 필수 파일 구조

아래 파일이 **모두 존재**해야 등록 가능하다. 하나라도 없으면 반려.

```
[slug]/
├── _components/              # 컴포넌트 (필수 폴더)
│   └── TemplateWrapper.tsx   # 필수 - 페이지 진입 애니메이션 + CSS 변수 주입
├── [subpage]/                # 하위 페이지 (템플릿 구성에 따라 0개 이상)
│   └── page.tsx
├── data/                     # 정적 데이터 (필요 시)
│   └── *.ts
├── layout.tsx                # 필수
├── page.tsx                  # 필수
├── theme.css                 # 필수 - CSS 변수 정의
└── theme.json                # 필수 - 메타데이터 + 테마 값

public/templates/[slug]/
└── thumbnail.jpg              # 필수 (800×600) - 누락 시 업로드 거부됨
```

### 허용하지 않는 구조

```
❌ [slug]/src/components/         # src/ 중첩 폴더 금지
❌ [slug]/translations/           # translation 시스템 금지
❌ [slug]/_components/shared/     # 다른 템플릿과 공유 불가
```

### _components 내부 구조 (권장)

컴포넌트가 많을 경우 아래와 같이 분류한다:

```
_components/
├── TemplateWrapper.tsx   # 루트에 위치 (필수)
├── layout/               # 헤더, 푸터, 내비게이션
│   ├── Header.tsx
│   └── Footer.tsx
└── sections/             # 페이지 섹션 컴포넌트
    ├── Hero.tsx
    └── Features.tsx
```

---

## 2-1. zip 압축 방법 (필수)

**zip 압축 시 `src/app/[lang]/templates/` 경로를 포함하지 않는다.**
위 "경로 구조"에 적힌 경로는 시스템에 배포된 **이후의 최종 위치**이며, zip 안에 그대로 재현하는 경로가 아니다.

zip 압축 파일을 풀었을 때, 최상위(zip 루트)에는 **`[slug]/` 폴더와 `public/templates/[slug]/` 폴더만** 존재해야 한다.

### 올바른 예시 — `car-ko.zip`

```
car/                          ← zip 루트에 슬러그 폴더가 바로 위치
├── _components/
│   └── TemplateWrapper.tsx
├── layout.tsx
├── page.tsx
├── theme.css
└── theme.json
public/
└── templates/
    └── car/
        ├── car-1.jpg
        └── hero-bg.mp4
```

### 잘못된 예시 (반려됨)

```
❌ src/app/ko/templates/car/...     # src/app/[lang]/templates 경로를 zip에 포함
❌ docs/templates/car/plan.md       # 시스템과 무관한 폴더 포함
```

- zip 루트에는 슬러그 폴더(`public` 제외) **정확히 1개**만 있어야 한다. 그 외 폴더(`docs/`, `src/` 등)가 섞이면 업로드가 거부된다.
- 영문/국문은 **각각 별도 zip**으로 만든다 (`car.zip`, `car-ko.zip`). 하나의 zip에 합치지 않는다.
- 이미지/영상(`public/templates/[slug]/`)은 **en 업로드 zip에만 포함**한다. ko 업로드 zip에는 이미지를 포함하지 않는다 (en/ko가 같은 이미지를 공유하므로 중복 업로드 불필요).

---

## 3. theme.json 스펙 (필수)

`theme.json`은 시스템이 자동으로 읽어 Admin 메타데이터를 채운다. 아래 필드를 **정확히** 포함해야 한다.

```json
{
  "slug": "furniture",
  "name": "Furniture Modern",
  "name_ko": "퍼니처 모던",
  "category": "retail",
  "description": "Clean and modern furniture store template",
  "description_ko": "깔끔하고 현대적인 가구 쇼핑몰 템플릿",
  "mode": "light",
  "theme": {
    "palette": {
      "primary": "#FFFFFF",
      "secondary": "#1A1A1A",
      "accent": "#0071E3",
      "text": {
        "main": "#1D1D1F",
        "muted": "#424245",
        "contrast": "#FFFFFF"
      },
      "ui": {
        "border": "rgba(0,0,0,0.08)",
        "hover": "#F5F5F7",
        "shadow": "0 20px 50px rgba(0,0,0,0.05)"
      }
    },
    "typography": {
      "heading": {
        "font": "Outfit, sans-serif",
        "weight": "700",
        "tracking": "-0.03em",
        "style": "font-bold tracking-tighter"
      },
      "body": {
        "font": "Inter, sans-serif",
        "weight": "400",
        "leading": "1.6",
        "style": "leading-relaxed"
      }
    },
    "spacing": {
      "page_pt": "128px",
      "container": "1440px",
      "gutter": "48px",
      "card_gap": "24px"
    },
    "motion": {
      "transition_fast": "200ms",
      "transition_normal": "300ms",
      "transition_slow": "500ms",
      "easing": "cubic-bezier(0.16, 1, 0.3, 1)"
    },
    "interaction": {
      "button": "bg-[var(--color-secondary)] text-[var(--color-text-contrast)] hover:opacity-90",
      "card_hover": "hover:scale-[1.02] transition-transform duration-300"
    }
  }
}
```

### category 허용값

| 값 | 설명 |
|----|------|
| `retail` | 쇼핑몰, 이커머스 |
| `corporate` | 기업, IR, B2B |
| `portfolio` | 포트폴리오, 스튜디오 |
| `media` | 매거진, 뉴스페이퍼, 블로그 |
| `service` | SaaS, 도구, 대시보드 |
| `hospitality` | 항공, 호텔, 여행 |
| `lifestyle` | 패션, 뷰티, 라이프스타일 |

---

## 4. theme.css 스펙 (필수)

아래 변수를 **모두** 포함해야 한다.

```css
/* [slug]/theme.css */

@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;700&display=swap');

:root {
  /* 브랜드 컬러 - 6자리 헥스 또는 rgb() 사용 */
  --color-primary: #FFFFFF;
  --color-secondary: #1A1A1A;
  --color-accent: #0071E3;
  --color-bg: #FFFFFF;
  --color-bg-secondary: #F5F5F7;
  --color-text: #1D1D1F;
  --color-text-muted: #6E6E73;
  --color-text-contrast: #FFFFFF;
  --color-border: rgba(0, 0, 0, 0.08);

  /* 폰트 */
  --font-heading: 'YourHeadingFont', serif;
  --font-body: 'YourBodyFont', sans-serif;
}
```

**ko 템플릿 추가 필수**:
```css
/* 한글 접근성 */
* { word-break: keep-all; overflow-wrap: break-word; }
header a, header button, nav a, nav button { letter-spacing: -0.03em; }
```

### 금지 사항
- 8자리 헥스(`#RRGGBBAA`) 금지 → `rgba()` 또는 CSS 변수 + opacity 조합 사용
- `!important` 남용 금지 (전역 스타일 충돌)

---

## 5. layout.tsx 스펙

```tsx
// [slug]/layout.tsx
import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template Name",
  description: "Template description",
};

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

**ko 템플릿**: 한글 폰트를 반드시 로드한다.
```tsx
export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');`}</style>
      {children}
    </>
  );
}
```

---

## 6. TemplateWrapper.tsx 스펙

각 템플릿은 반드시 `_components/TemplateWrapper.tsx`를 자체 보유한다. `src/components/`의 공유 TemplateWrapper를 import하는 것은 **절대 금지**.

```tsx
// [slug]/_components/TemplateWrapper.tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

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
    const t = theme.theme;
    return {
      "--theme-primary": t.palette.primary,
      "--theme-secondary": t.palette.secondary,
      "--theme-accent": t.palette.accent,
      "--theme-text": t.palette.text.main,
      "--theme-text-muted": t.palette.text.muted,
      "--theme-text-contrast": t.palette.text.contrast,
      "--theme-border": t.palette.ui.border,
      "--theme-font-heading": t.typography.heading.font,
      "--theme-font-body": t.typography.body.font,
    } as React.CSSProperties;
  }, [theme]);

  // 이 템플릿의 브랜드 성격에 맞는 고유 애니메이션으로 반드시 교체
  return (
    <div style={cssVariables} className="min-h-screen bg-[var(--theme-primary)] text-[var(--theme-secondary)]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

### 애니메이션

페이지 진입 애니메이션은 템플릿 성격에 맞게 제작 AI가 자유롭게 결정한다. 단, `TemplateWrapper.tsx` 내부에서 구현해야 하며 아래 구조적 요건은 지켜야 한다:

- `animationComplete` 상태로 애니메이션 종료 후 `transform: none` 처리 (레이아웃 안정화)
- 스크롤 위치 초기화 (`window.scrollTo(0, 0)`)는 반드시 포함

### import 경로 규칙

| 위치 | import 경로 |
|------|------------|
| `page.tsx` (루트) | `import { TemplateWrapper } from "./_components/TemplateWrapper"` |
| `[subpage]/page.tsx` | `import { TemplateWrapper } from "../_components/TemplateWrapper"` |
| `[a]/[b]/page.tsx` | `import { TemplateWrapper } from "../../_components/TemplateWrapper"` |

---

## 7. page.tsx 사용 패턴

```tsx
// [slug]/page.tsx
import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";

export default function TemplatePage() {
  return (
    <TemplateWrapper theme={themeData}>
      {/* 페이지 콘텐츠 */}
    </TemplateWrapper>
  );
}
```

---

## 8. 이미지 규칙

| 항목 | 규칙 |
|------|------|
| 저장 위치 | `public/templates/[slug]/` |
| 참조 경로 | `/templates/[slug]/filename.ext` |
| hero 이미지 | 1600px 기준, jpg |
| 썸네일 | 800px 기준, jpg, **파일명은 정확히 `thumbnail.jpg`** (관리자 시스템이 이 경로를 자동으로 등록하므로 다른 파일명 사용 시 랜딩페이지 썸네일이 깨짐) |
| 아이콘/투명 | png 또는 svg |
| 외부 URL | **금지** (unsplash, picsum 등 CDN 참조 불가) |
| ko 템플릿 | en 폴더 공유, 별도 `/templates/[slug]-ko/` 폴더 생성 **금지** |

동영상(`.mp4`, `.mov`, `.webm`)은 zip에 포함할 수 없다 (업로드 시스템이 자동 거부). Cloudflare R2에 별도 업로드 후 URL만 코드에 삽입한다.

---

## 9. 코드 금지 사항

| 금지 항목 | 대체 방법 |
|-----------|----------|
| `font-light`, `font-thin`, `font-extralight` | `font-normal` 이상 사용 |
| `italic` Tailwind 클래스 | 금지 (`not-italic`은 허용) |
| em-dash `—` | 하이픈 `-` 또는 중간점 `·` 으로 대체 |
| 8자리 헥스 `#RRGGBBAA` | `rgba()` 또는 CSS 변수 + `/opacity` |
| `text-[#XXXXXX]` 하드코딩 | `text-[var(--color-primary)]` |
| `useTranslations`, `getTranslation` | 텍스트 직접 하드코딩 |
| `const lang = ...` 패턴 | ko/en 폴더 분리로 해결 |
| `?lang=` URL 파라미터 | 라우팅 분리로 해결 |
| 외부 이미지 URL (unsplash 등) | `public/templates/[slug]/`에 로컬 저장 |
| `.mp4` 로컬 저장 | Cloudflare R2 업로드 후 URL 사용 |
| `@/components/TemplateWrapper` import | 각 템플릿 `_components/` 내 자체 파일 사용 |
| 다른 템플릿 폴더 파일 import | 완전 독립 구조 위반 |
| `public/templates/[slug]-ko/` 폴더 생성 | 이미지는 en 폴더 공유 |

---

## 10. 한글 타이포그래피 (ko 템플릿 전용)

### 자간 (letter-spacing)

| 적용 위치 | 값 |
|----------|----|
| 헤딩 | `-0.025em` ~ `-0.03em` |
| 내비게이션 | `-0.03em` |
| 본문 | `-0.01em` ~ `-0.02em` |
| 영문 대문자 레이블만 | `0.1em` ~ `0.3em` 허용 |

**금지**: 한글 텍스트에 `tracking-[0.3em]` 등 영문 대문자용 넓은 자간 적용
**금지**: 한글 텍스트에 `uppercase` 클래스

### 행간 (line-height)

한글 대형 헤딩은 반드시 아래 기준 이상을 적용한다:

| 폰트 크기 | 최소 leading |
|----------|-------------|
| 30px ~ 48px | `leading-[1.25]` 이상 |
| 48px ~ 72px | `leading-[1.2]` 이상 |
| 72px 이상 | `leading-[1.1]` 이상 |

```tsx
// ❌ 한글 대형 헤딩에 좁은 행간
className="text-5xl font-bold leading-[0.95]"

// ✅
className="text-5xl font-bold leading-[1.25]"
```

### 줄바꿈

```tsx
// ❌ 강제 br 줄바꿈 — 모바일에서 어색하게 깨짐
<p>고대 대리석의 속삭임부터<br />천장화의 불꽃까지.</p>

// ✅ text-wrap: pretty + max-width 조정
<p
  className="max-w-[320px]"
  style={{ textWrap: "pretty" } as React.CSSProperties}
>
  고대 대리석의 속삭임부터 천장화의 불꽃까지.
</p>
```

### word-break 주의

한글 단어가 중간에 쪼개지면 아래를 추가한다:

```tsx
className="text-4xl font-bold break-keep [overflow-wrap:normal]"
```

---

## 11. SEO / GEO 최적화 규칙 (필수)

SEO는 검색엔진 노출을 위한 최적화, GEO(Generative Engine Optimization)는 ChatGPT, Perplexity, Google AI Overview 등 AI 검색엔진에서 콘텐츠가 올바르게 인식되도록 하는 최적화다. 두 가지 모두 **모든 페이지에 반드시 적용**한다.

---

### 11-1. Metadata (모든 page.tsx 필수)

정적 페이지는 `metadata` 객체, 동적 라우트는 `generateMetadata()`를 사용한다.

**정적 페이지 예시**:
```tsx
// [slug]/page.tsx 또는 [slug]/[subpage]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Modern - Premium Furniture Store Template",
  description: "Clean and modern furniture store template built with Next.js. Showcase products, manage collections, and deliver a seamless shopping experience.",
  keywords: ["furniture template", "ecommerce template", "Next.js template"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Furniture Modern - Premium Furniture Store Template",
    description: "Clean and modern furniture store template built with Next.js.",
    url: "https://ohmytemplate.com/en/templates/furniture",
    siteName: "Oh My Template",
    images: [{ url: "/templates/furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Modern - Premium Furniture Store Template",
    description: "Clean and modern furniture store template built with Next.js.",
    images: ["/templates/furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/furniture",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/furniture" },
  },
};
```

**동적 라우트 예시** (`[slug]/page.tsx`):

Next.js 16에서 `params`는 **Promise**다. 동기 객체로 타입을 선언하면 빌드 타입 오류가 발생한다.

```tsx
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} - Furniture Modern`,
    description: `Explore ${slug} collection at Furniture Modern.`,
    openGraph: { ... },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
```

**ko 템플릿 locale 설정**:
```tsx
openGraph: {
  locale: "ko_KR",
  alternateLocale: "en_US",
}
```

---

### 11-2. layout.tsx lang 속성

**템플릿 layout.tsx에는 `<html>` 태그를 절대 사용하지 않는다.** `<html>`은 시스템 루트(`src/app/layout.tsx`)에만 존재하며, 템플릿은 그 하위에 중첩되는 layout이라 자체 `<html>`을 가질 수 없다 (Next.js App Router 제약).

대신 `lang` 속성이 필요한 wrapper를 div로 감싼다. 실제 시스템 예시 (`src/app/en/layout.tsx`):

```tsx
// en 템플릿: src/app/en/templates/[slug]/layout.tsx (필요 시)
import "./theme.css";

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

`lang` 속성 자체는 `src/app/en/layout.tsx` / `src/app/ko/layout.tsx`(시스템이 이미 보유)에서 `<div lang="en">` / `<div lang="ko">`로 처리하고 있으므로, 템플릿 layout.tsx에서는 별도로 신경 쓰지 않아도 된다.

---

### 11-3. 시맨틱 HTML 구조 (필수)

모든 페이지는 아래 시맨틱 구조를 따른다. `div` 남발 금지.

```tsx
// 필수 시맨틱 구조
<body>
  <header>          {/* 사이트 헤더, 네비게이션 포함 */}
    <nav>...</nav>
  </header>
  <main>            {/* 페이지 핵심 콘텐츠 - 페이지당 1개 */}
    <section>...</section>
    <article>...</article>  {/* 독립적으로 의미 있는 콘텐츠 블록 */}
  </main>
  <footer>...</footer>
</body>
```

| 태그 | 사용 기준 |
|------|----------|
| `<header>` | 사이트/섹션 헤더 |
| `<nav>` | 내비게이션 메뉴 |
| `<main>` | 페이지당 1개, 핵심 콘텐츠 |
| `<section>` | 주제별 섹션 (heading 포함 필수) |
| `<article>` | 블로그 포스트, 제품 카드 등 독립 콘텐츠 |
| `<aside>` | 사이드바, 관련 콘텐츠 |
| `<footer>` | 푸터 |
| `<figure>` + `<figcaption>` | 이미지에 캡션이 필요할 때 |

---

### 11-4. 제목 계층 구조 (필수)

- 페이지당 `<h1>` 은 **정확히 1개**
- `h1` → `h2` → `h3` 순서를 건너뛰지 않는다
- 스타일을 위해 heading 태그를 선택하지 않는다 (크기가 작아야 하면 `h3`에 `text-sm` 적용)

```tsx
// ❌ 잘못된 예
<h1>Furniture Modern</h1>
<h1>Our Collections</h1>   // h1 두 번 사용

// ❌ 잘못된 예
<h1>Furniture Modern</h1>
<h3>Our Collections</h3>   // h2 건너뜀

// ✅ 올바른 예
<h1>Furniture Modern</h1>
<h2>Our Collections</h2>
<h3>Sofa Collection</h3>
```

---

### 11-5. 이미지 alt 텍스트 (필수)

모든 `<img>` 및 Next.js `<Image>` 컴포넌트에 `alt` 속성을 반드시 작성한다.

```tsx
// ❌ 금지
<Image src="/templates/furniture/sofa.jpg" alt="" ... />
<Image src="/templates/furniture/sofa.jpg" alt="image" ... />  // 의미 없는 alt

// ✅ 올바른 예
<Image src="/templates/furniture/sofa.jpg" alt="Modern gray linen sofa with oak legs" ... />

// 장식용 이미지 (배경, 구분선 등)
<Image src="/deco.png" alt="" role="presentation" ... />
```

ko 템플릿은 alt 텍스트도 한국어로 작성한다:
```tsx
<Image src="/templates/furniture/sofa.jpg" alt="회색 린넨 소파, 오크 다리" ... />
```

---

### 11-6. JSON-LD 구조화 데이터 (필수)

GEO 최적화의 핵심. AI 검색엔진이 페이지 콘텐츠를 정확히 파악하기 위한 구조화 데이터를 각 페이지에 삽입한다.

**모든 템플릿 루트 page.tsx에 최소 Organization 스키마 삽입**:

```tsx
// [slug]/page.tsx
export default function TemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",           // 템플릿 성격에 맞게 교체
    "name": "Furniture Modern",
    "description": "Premium furniture store offering modern designs",
    "url": "https://ohmytemplate.com/en/templates/furniture",
    "logo": "/templates/furniture/logo.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateWrapper theme={themeData}>
        {/* 콘텐츠 */}
      </TemplateWrapper>
    </>
  );
}
```

**템플릿 성격별 권장 @type**:

| 템플릿 종류 | 권장 @type |
|------------|-----------|
| 쇼핑몰 (furniture, fashion, jewelry 등) | `Store` 또는 `OnlineStore` |
| 기업/IR | `Organization` + `WebPage` |
| 포트폴리오/스튜디오 | `Person` 또는 `CreativeWork` |
| 매거진/뉴스 | `NewsMediaOrganization` + `Article` |
| 대시보드/SaaS | `SoftwareApplication` |
| 항공/여행 | `TravelAgency` 또는 `Airline` |
| 전시/갤러리 | `Museum` 또는 `ExhibitionEvent` |

**상품 목록 페이지 추가 스키마 예시**:
```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Furniture Collections",
  "numberOfItems": products.length,
  "itemListElement": products.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": p.name,
    "url": `/en/templates/furniture/product/${p.id}`,
  })),
};
```

---

### 11-7. GEO 최적화 콘텐츠 원칙

AI 검색엔진(ChatGPT, Perplexity, Google AI Overview)에서 인용되려면 콘텐츠가 명확하고 구조적이어야 한다.

**필수 적용**:
- 각 섹션에 명확한 `<h2>` 제목 사용 (AI가 섹션을 독립적으로 인식)
- Hero 섹션에 템플릿의 핵심 가치를 1~2문장으로 명확히 서술
- FAQ 섹션이 있는 경우 `<details>`/`<summary>` 또는 시맨틱 구조 + FAQ 스키마 적용:

```tsx
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What materials are used in your furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use sustainably sourced oak, walnut, and premium linen fabrics.",
      },
    },
  ],
};
```

**금지**:
- 의미 없는 마케팅 문구만 있는 섹션 (예: "We are the best!")
- 이미지에만 의존하는 콘텐츠 (텍스트 없음)
- JavaScript로만 렌더링되는 핵심 콘텐츠 (Server Component 또는 SSR 사용)

---

### 11-8. OG 이미지 규격

각 템플릿 폴더에 OG 이미지를 반드시 포함한다.

| 파일명 | 크기 | 용도 |
|--------|------|------|
| `og-image.jpg` | 1200 × 630px | 소셜 미리보기, AI 검색 |
| `thumbnail.jpg` | 800 × 600px | 랜딩페이지 카드 |

저장 위치: `public/templates/[slug]/og-image.jpg`

---

## 12. 검수 체크리스트

### 구조
- [ ] `theme.json`, `theme.css`, `layout.tsx`, `page.tsx`, `_components/TemplateWrapper.tsx` 존재
- [ ] `src/` 중첩 폴더 없음
- [ ] `translations/` 폴더 없음

### 코드
- [ ] `font-light` 클래스 없음
- [ ] `italic` 클래스 없음 (`not-italic`은 OK)
- [ ] em-dash(`—`) 없음
- [ ] 외부 이미지 URL 없음
- [ ] 하드코딩 hex 색상 없음 (`text-[#...]`, `bg-[#...]`)

### theme.json
- [ ] `slug` 값이 폴더명과 일치
- [ ] `category`가 허용값 중 하나
- [ ] `name`, `name_ko`, `description`, `description_ko` 모두 작성

### theme.css
- [ ] `--color-primary`, `--color-accent`, `--color-bg`, `--color-text`, `--color-text-muted`, `--color-text-contrast`, `--color-border` 존재
- [ ] `--font-heading`, `--font-body` 존재
- [ ] (ko) `word-break: keep-all` 적용

### 이미지
- [ ] 모든 이미지가 `public/templates/[slug]/`에 있음
- [ ] `public/templates/[slug]-ko/` 폴더 없음
- [ ] `og-image.jpg` (1200×630) 존재
- [ ] `thumbnail.jpg` (800×600) 존재

### SEO / GEO
- [ ] 모든 page.tsx에 `metadata` 또는 `generateMetadata()` 존재
- [ ] `openGraph` 필드 포함 (title, description, images, url, locale)
- [ ] `twitter` 카드 필드 포함
- [ ] `alternates.canonical` URL 설정
- [ ] `alternates.languages`에 en/ko 상호 참조 설정
- [ ] `layout.tsx`에 `lang` 속성 (en 또는 ko)
- [ ] `<main>` 태그 페이지당 1개
- [ ] `<h1>` 페이지당 정확히 1개
- [ ] h1 → h2 → h3 순서 준수 (건너뜀 없음)
- [ ] 모든 `<Image>`에 의미 있는 `alt` 텍스트
- [ ] 루트 page.tsx에 JSON-LD 구조화 데이터 삽입
- [ ] JSON-LD `@type`이 템플릿 성격에 맞는 값 사용
- [ ] 핵심 콘텐츠가 Server Component 또는 SSR로 렌더링됨 (JS 없이 노출)
