# Task: SEO / GEO 최적화 구현

## 목적

`www.ohmt.site` 서비스의 검색엔진(SEO) 및 AI 검색(GEO) 최적화를 구현한다.
현재 메타데이터, robots.txt, sitemap, JSON-LD 구조화 데이터가 모두 없는 상태다.

---

## 브랜드 정보 (하드코딩 기준값)

```
서비스명: Oh My Template
도메인: https://www.ohmt.site
설명(EN): Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.
설명(KO): 브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿 서비스.
이메일: contact@ohmytemplate.com
```

---

## Step 1. 루트 layout.tsx 메타데이터 개선

파일: `src/app/layout.tsx`

### 현재
```ts
export const metadata: Metadata = {
  title: "OH! My templates!",
  description: "Premium Template Ecosystem",
};
```

### 변경 후
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.ohmt.site"),
  title: {
    default: "Oh My Template — Premium Next.js Web Templates",
    template: "%s | Oh My Template",
  },
  description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
  keywords: ["Next.js template", "web template", "premium template", "website template", "brand website"],
  authors: [{ name: "Oh My Template", url: "https://www.ohmt.site" }],
  creator: "Oh My Template",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ohmt.site",
    siteName: "Oh My Template",
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Oh My Template" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.ohmt.site/en",
    languages: {
      "en": "https://www.ohmt.site/en",
      "ko": "https://www.ohmt.site/ko",
    },
  },
};
```

---

## Step 2. en 랜딩 페이지 메타데이터

파일: `src/app/en/page.tsx`

`export const metadata: Metadata` 추가:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oh My Template — Premium Next.js Web Templates",
  description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
  alternates: {
    canonical: "https://www.ohmt.site/en",
    languages: {
      "en": "https://www.ohmt.site/en",
      "ko": "https://www.ohmt.site/ko",
    },
  },
  openGraph: {
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
    url: "https://www.ohmt.site/en",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
};
```

---

## Step 3. ko 랜딩 페이지 메타데이터

파일: `src/app/ko/page.tsx`

`export const metadata: Metadata` 추가:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oh My Template — 프리미엄 Next.js 웹 템플릿",
  description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿. 전문 팀이 2일 안에 커스터마이징해 드립니다.",
  alternates: {
    canonical: "https://www.ohmt.site/ko",
    languages: {
      "en": "https://www.ohmt.site/en",
      "ko": "https://www.ohmt.site/ko",
    },
  },
  openGraph: {
    title: "Oh My Template — 프리미엄 Next.js 웹 템플릿",
    description: "브랜드, 에이전시, 크리에이터를 위한 프리미엄 Next.js 웹 템플릿.",
    url: "https://www.ohmt.site/ko",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
};
```

---

## Step 4. lang 속성 동적 처리

현재 `src/app/layout.tsx`의 `<html lang="en">`이 ko 페이지에서도 동일하게 적용됨.

### 해결 방법: en/ko 각각 별도 layout.tsx 추가

**`src/app/en/layout.tsx`** 신규 생성:
```tsx
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
```

**`src/app/ko/layout.tsx`** 신규 생성:
```tsx
export default function KoLayout({ children }: { children: React.ReactNode }) {
  return <div lang="ko">{children}</div>;
}
```

> 주의: `<html>`/`<body>` 태그는 루트 layout.tsx 소유이므로 여기서는 `<div lang>` wrapper를 사용한다. `<html lang>` 자체를 바꾸려면 Next.js의 `generateMetadata`를 활용하거나, 루트 layout에서 pathname 기반으로 분기해야 하는데 서버 컴포넌트 제약으로 어렵다. `<div lang>` wrapper가 현실적인 차선책이다.

---

## Step 5. robots.txt

파일: `public/robots.txt` (신규 생성)

```txt
User-agent: *
Allow: /

Sitemap: https://www.ohmt.site/sitemap.xml
```

---

## Step 6. sitemap.xml (동적 생성)

파일: `src/app/sitemap.ts` (신규 생성)

```ts
import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();
  const { data: templates } = await supabase
    .from("templates")
    .select("slug, updated_at")
    .eq("status", "published");

  const templateUrls = (templates ?? []).flatMap((t) => [
    {
      url: `https://www.ohmt.site/en/templates/${t.slug}`,
      lastModified: t.updated_at ? new Date(t.updated_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `https://www.ohmt.site/ko/templates/${t.slug}`,
      lastModified: t.updated_at ? new Date(t.updated_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    {
      url: "https://www.ohmt.site/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.ohmt.site/ko",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...templateUrls,
  ];
}
```

---

## Step 7. JSON-LD 구조화 데이터 (GEO)

### 7-1. WebSite + Organization 스키마

`src/app/en/LandingPageClient.tsx` 와 `src/app/ko/LandingPageClient.tsx` 의 `<main>` 태그 바로 안에 `<script>` 태그 추가.

**EN 버전:**
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.ohmt.site/#website",
          "url": "https://www.ohmt.site",
          "name": "Oh My Template",
          "description": "Premium Next.js web templates for brands, agencies, and creators.",
          "inLanguage": ["en", "ko"],
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.ohmt.site/en?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "Organization",
          "@id": "https://www.ohmt.site/#organization",
          "name": "Oh My Template",
          "url": "https://www.ohmt.site",
          "email": "contact@ohmytemplate.com",
          "description": "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
          "sameAs": [],
        },
      ],
    }),
  }}
/>
```

**KO 버전:** 동일 구조, description만 한국어로 교체.

### 7-2. ItemList 스키마 (템플릿 목록)

LandingPageClient에 `templates` prop을 받아 JSON-LD 생성. `<script>` 태그를 WebSite 스키마와 동일한 위치에 추가.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Oh My Template — Template Collection",
      "description": "Premium Next.js web templates",
      "url": "https://www.ohmt.site/en",
      "numberOfItems": templates.length,
      "itemListElement": templates.map((t, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": t.name,
        "description": t.desc,
        "url": `https://www.ohmt.site${t.url}`,
        "image": t.image ? `https://www.ohmt.site${t.image}` : undefined,
      })),
    }),
  }}
/>
```

### 7-3. FAQPage 스키마

FAQ 데이터는 LandingPageClient 내부에 하드코딩되어 있음. FAQ 섹션과 같은 위치에 스키마 추가.

EN FAQ 항목을 그대로 schema.org FAQPage 형식으로 변환:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    }),
  }}
/>
```

FAQ_ITEMS는 LandingPageClient 내부의 FAQ 배열을 그대로 참조한다.

---

## Step 8. og-image.png 준비

`public/og-image.png` — 1200×630px OG 이미지 필요.
현재 `public/hero-showcase.png` 또는 `public/showcase-desktop.png` 중 적합한 파일이 있으면 복사해서 사용.

```bash
cp public/showcase-desktop.png public/og-image.png
```

실제 디자인된 OG 이미지로 교체하는 것이 권장되지만, 우선 기존 이미지로 대체한다.

---

## 검증 체크리스트

- [ ] `https://www.ohmt.site/en` — `<title>` 태그 확인
- [ ] `https://www.ohmt.site/ko` — `<title>` 한국어로 표시
- [ ] `https://www.ohmt.site/robots.txt` — 접근 가능
- [ ] `https://www.ohmt.site/sitemap.xml` — 접근 가능 + 템플릿 URL 포함
- [ ] 소스보기 → `application/ld+json` 스크립트 존재 확인
- [ ] Open Graph 태그 (`og:title`, `og:image`, `og:description`) 존재 확인
- [ ] hreflang `en`/`ko` alternate 링크 존재 확인
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) 에서 FAQ, ItemList 검증
