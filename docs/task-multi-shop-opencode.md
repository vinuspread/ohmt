# Multi-Shop 템플릿 OpenCode 개발 지시서

레퍼런스: https://zinzira.webflow.io/
브랜드: Oh My Template / 컨셉: Zinzira 스타일 패션 멀티샵

---

## 현재 완료 상태 (Claude Code 작업 완료 - 2026-06-12)

아래 파일들은 Zinzira 컨셉으로 이미 리디자인 완료. **수정하지 말 것.**

| 파일 | 변경 내용 |
|------|-----------|
| `theme.css` | `--color-primary: #0A0A0A`, `--color-sale: #DC2626`, `--color-star: #F59E0B`, `--color-bg-secondary: #F2F2F2` 추가 |
| `_components/Header.tsx` | 검정 헤더, 화이트 텍스트, 홈에서만 투명->불투명 스크롤 전환, 검색 아이콘 추가 |
| `_components/Hero.tsx` | 풀블리드 센터 레이아웃, 다크 오버레이, 볼드 헤딩, 스크롤 인디케이터 |
| `data/data.ts` | `originalPrice`, `rating`, `reviewCount` 필드 추가 |
| `_components/ProductCard.tsx` | 할인 배지(빨강), 별점, 원가 취소선, Quick View 오버레이 |
| `_components/CategoryGrid.tsx` | 2x2→4컬럼, 그라데이션 오버레이, View All 링크 |
| `_components/NewArrivals.tsx` | 4컬럼 그리드 |
| `_components/BestSellers.tsx` | 4컬럼 2행 그리드 |
| `_components/Services.tsx` | 다크 배경 4개 항목 수평 바 (배송/반품/보안/지원) |
| `_components/AboutBrand.tsx` | 이미지 왼쪽 배치, 통계 수치 추가 |
| `_components/Reviews.tsx` | 데스크탑 4컬럼 카드 그리드, 모바일 캐러셀 |
| `_components/BlogPreview.tsx` | 16:10 비율, View All 링크 |
| `_components/Newsletter.tsx` | 도트 패턴 배경, Early Access 카피 |
| `_components/Footer.tsx` | Privacy/Terms 링크, 브랜드 컬럼 강화 |

---

## 교차검수 결과 (Playwright, 2026-06-12)

### 수정 필요

1. **`product/[id]/page.tsx` — 상품명 색상**
   - 현재: 상품명이 `--color-text-muted` (회색) 으로 렌더링됨
   - 수정: `text-[var(--color-text)]` 또는 `font-bold` 로 변경 — WCAG 4.5:1 대비 확보 필요

2. **Category Grid 이미지 밝기**
   - 실제 브라우저에서 카테고리 이미지가 과도하게 밝게 보이는지 확인
   - 만약 그렇다면 `bg-gradient-to-t from-black/70` 오버레이 강도 조정

### 정상 확인

- 검정 헤더 + 화이트 텍스트 (home 투명 전환 포함)
- 풀블리드 히어로 + motion 애니메이션
- 4컬럼 제품 그리드 (New Arrivals / Best Sellers)
- 할인 배지 (빨강), 별점, 원가 취소선
- Shop 페이지 카테고리 필터 탭
- Product 상세 — 사이즈 셀렉터 + ADD TO CART
- Newsletter 다크 섹션
- 모바일 반응형 Hero

---

## 남은 작업 (OpenCode 처리)

### 1. 서브 페이지 — Zinzira 스타일 적용

#### `shop/page.tsx`
- 페이지 헤딩: `text-4xl md:text-5xl font-bold tracking-tight`
- 제품 그리드: `grid-cols-2 md:grid-cols-4`
- ProductCard에 새 props (`originalPrice`, `rating`, `reviewCount`) 전달

#### `shop/[category]/page.tsx`
- 카테고리 히어로: 풀블리드 이미지 + 다크 오버레이, 카테고리명 센터
- 제품 그리드: 4컬럼

#### `product/[id]/page.tsx`
- 이미지: 좌측 `aspect-[3/4]` 라이트 그레이 배경
- 가격: 할인가 `font-bold text-2xl` + 원가 취소선 + 빨간 배지
- 별점: ProductCard와 동일한 Star 컴포넌트 재사용
- Add to Cart 버튼: `bg-[var(--color-primary)] text-white w-full py-4 text-sm uppercase tracking-[0.2em] font-semibold`
- 관련 상품: 4컬럼 그리드

#### `about/page.tsx`
- 히어로: 풀블리드 이미지 + 오버레이, 센터 헤딩
- 통계 섹션: 3컬럼 숫자+레이블

#### `blog/page.tsx`
- 이미지 비율: `aspect-[16/10]`
- 카테고리 필터 탭 상단 추가

#### `blog/[slug]/page.tsx`
- 본문: `max-w-2xl mx-auto text-base leading-[1.8]`

#### `contact/page.tsx`
- 레이아웃: 좌측 정보 + 우측 폼 2컬럼
- 입력 필드: `border border-[var(--color-border)] bg-white px-4 py-3 w-full text-sm`

### 2. TeamSection 리디자인

`_components/TeamSection.tsx`:
- 이미지가 카드 상단을 가득 채우는 형식
- 이름: `font-semibold` / 역할: `text-xs uppercase tracking-[0.15em]`

### 3. `theme.json` 업데이트

`theme.json`의 색상 값을 `theme.css`와 일치시킴:
```json
{
  "colors": {
    "primary": "#0A0A0A",
    "accent": "#C9A97A",
    "sale": "#DC2626",
    "star": "#F59E0B",
    "bg": "#FFFFFF",
    "bgSecondary": "#F2F2F2",
    "bgDark": "#0A0A0A",
    "text": "#0A0A0A",
    "textMuted": "#6B6B6B",
    "border": "#E5E5E5"
  }
}
```

### 4. 모션 추가

```bash
npm install lenis motion
```

**Lenis 스무스 스크롤** — `_components/SmoothScroll.tsx`:
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return null;
}
```

`layout.tsx`에 `<SmoothScroll />` 추가.

**whileInView 진입 애니메이션** (motion/react):
```tsx
import { motion } from "motion/react";
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
>
  <ProductCard ... />
</motion.div>
```

적용 우선순위: ProductCard(NewArrivals, BestSellers) > CategoryGrid > BlogPreview > AboutBrand

**필수**: `prefers-reduced-motion` 처리:
```tsx
import { useReducedMotion } from "motion/react";
const shouldReduce = useReducedMotion();
```

---

## 완료 체크리스트

- [ ] 모든 서브 페이지 4컬럼 그리드 적용
- [ ] `product/[id]/page.tsx` 별점 + 할인 배지
- [ ] `theme.json` 색상 값 업데이트
- [ ] 하드코딩 헥스 없음
- [ ] 모바일 반응형 정상 동작
- [ ] 모션 `prefers-reduced-motion` 처리

---

## 코드 규칙 (반드시 준수)

- 하드코딩 헥스 색상 금지 → `var(--color-*)` 사용
- `italic` / `font-light` Tailwind 클래스 금지
- em-dash `—` 금지 → `,` `/` `·` 사용
- 외부 이미지 URL 금지
- 이미지 경로: `/templates/multi-shop/filename.ext`
- `rounded-*` 클래스 금지 (샤프 에지 디자인)

---

## 기존 구조 참고 (변경 없음)

## SECTION 1. 프로젝트 구조

```
src/app/en/templates/multi-shop/
├── _components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── CategoryGrid.tsx
│       ├── NewArrivals.tsx
│       ├── AboutBrand.tsx
│       ├── Services.tsx
│       ├── BestSellers.tsx
│       ├── TeamSection.tsx
│       ├── Reviews.tsx
│       ├── BlogPreview.tsx
│       └── Newsletter.tsx
├── data/
│   └── data.ts
├── shop/
│   ├── page.tsx
│   └── [category]/
│       └── page.tsx
├── product/
│   └── [id]/
│       └── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── theme.css
├── theme.json
├── layout.tsx
└── page.tsx
```

이미지 경로: `public/templates/multi-shop/`
KO 버전: `src/app/ko/templates/multi-shop/` (이미지 공유, 텍스트만 한국어 교체)

---

## SECTION 2. 디자인 시스템

### 2-1. theme.css

레퍼런스(Nolyta) 분석 결과: **단일 sans-serif 시스템** - 세리프 없음.
헤딩도 sans-serif, 본문도 sans-serif. Jost 사용.

```css
:root {
  --color-primary: #111111;
  --color-accent: #C9A97A;
  --color-bg: #FFFFFF;
  --color-bg-secondary: #F7F5F2;
  --color-bg-dark: #111111;
  --color-text: #111111;
  --color-text-muted: #515151;
  --color-border: #E8E4DF;

  --font-heading: 'Jost', sans-serif;
  --font-body: 'Jost', sans-serif;
}
```

### 2-2. 폰트 (layout.tsx style 태그)

```html
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
```

### 2-3. 타이포그래피 규칙

- **단일 폰트**: Jost 하나로 전체 사이트 운영. `fontFamily` 별도 지정 불필요.
- **헤딩**: 굵기와 크기 대비로 위계 표현 (세리프 감성 제거)
- **레이블**: `uppercase tracking-[0.2em]` 으로 패션 감각 유지

| 용도 | 클래스 | 굵기 |
|------|--------|------|
| Hero 헤드라인 | `text-5xl lg:text-7xl leading-tight` | font-normal (400) |
| 섹션 제목 | `text-4xl lg:text-5xl` | font-normal (400) |
| 카드 제목 | `text-xl` | font-medium (500) |
| 상품명 | `text-base` | font-medium (500) |
| 본문 | `text-base leading-relaxed` | font-normal (400) |
| 레이블/배지 | `text-xs uppercase tracking-[0.2em]` | font-normal (400) |
| 가격 | `text-lg` | font-semibold (600) |

### 2-4. 컬러 규칙

- **절대 금지**: `text-[#XXXXXX]`, `bg-[#XXXXXX]` 등 하드코딩 헥스 색상
- 모든 색상은 `var(--color-xxx)` 형태로 사용
- 예: `text-[var(--color-text-muted)]`, `bg-[var(--color-bg-secondary)]`

### 2-5. 공통 UI 패턴

**버튼 - 솔리드:**
```tsx
className="bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors duration-300"
```

**버튼 - 아웃라인:**
```tsx
className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"
```

**상품 카드 이미지 호버:**
```tsx
className="overflow-hidden aspect-[3/4] bg-[var(--color-bg-secondary)]"
// 내부 img: className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
```

**섹션 헤더 패턴:**
```tsx
<div className="mb-12">
  <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">서브레이블</span>
  <h2 className="text-4xl font-normal mt-2" style={{ fontFamily: 'var(--font-heading)' }}>제목</h2>
</div>
```

**금지:**
- `rounded-*` 클래스 - 이 템플릿은 샤프 에지 디자인
- `italic` 클래스
- `font-light` 클래스

---

## SECTION 3. 와이어프레임

### 3-1. 홈페이지 전체 구조

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
│  [Logo]    [Home] [Shop] [About] [Blog] [Contact]  [🛍] │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  HERO (Split)                                           │
│  ┌─────────────────────┬───────────────────────────┐   │
│  │                     │                           │   │
│  │  Unveil             │   [모델 이미지 - 세로형]   │   │
│  │  Your Fashion       │                           │   │
│  │                     │               COMFORT     │   │
│  │  ...subtext...      │               MODERN      │   │
│  │                     │                           │   │
│  │  [Shop Now] [Explore]│                          │   │
│  │                     │                           │   │
│  └─────────────────────┴───────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CATEGORY GRID (bg: white)                              │
│  ┌──────────┬──────────┬──────────┬──────────┐         │
│  │          │          │          │          │         │
│  │[카테고리1]│[카테고리2]│[카테고리3]│[카테고리4]│         │
│  │Accessories│Footwear │Women's   │Men's     │         │
│  │          │          │          │          │         │
│  └──────────┴──────────┴──────────┴──────────┘         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  NEW ARRIVALS (bg: secondary/cream)                     │
│  New Arrivals                                           │
│                                                         │
│  ┌──────────┬──────────┬──────────┐                    │
│  │          │          │          │                    │
│  │ Product1 │ Product2 │ Product3 │                    │
│  │          │          │          │                    │
│  └──────────┴──────────┴──────────┘                    │
│                                                         │
│       ┌──────────────┬──────────────┐                  │
│       │   Product4   │   Product5   │                  │
│       └──────────────┴──────────────┘                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ABOUT BRAND (bg: white)                                │
│  ┌──────────────────────┬───────────────────────┐      │
│  │                      │                       │      │
│  │  About Our Brand     │   [브랜드 이미지]      │      │
│  │  서브레이블           │                       │      │
│  │                      │                       │      │
│  │  브랜드 스토리 본문    │                       │      │
│  │  2-3 문장            │                       │      │
│  │                      │                       │      │
│  │  [Learn More]        │                       │      │
│  └──────────────────────┴───────────────────────┘      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SERVICES (bg: secondary/cream)                         │
│  ┌─────────────────┬─────────────────┬───────────────┐ │
│  │ 🚚              │ 🔄              │ 🔒            │ │
│  │ Free Shipping   │ Easy Returns    │ Secure Pay    │ │
│  │ Orders over $75 │ 30-day policy   │ Encrypted     │ │
│  └─────────────────┴─────────────────┴───────────────┘ │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  BEST SELLERS (bg: white)                               │
│  Best Sellers                                           │
│                                                         │
│  ┌──────────┬──────────┬──────────┐                    │
│  │          │          │          │                    │
│  │ Product6 │ Product7 │ Product8 │                    │
│  │          │          │          │                    │
│  └──────────┴──────────┴──────────┘                    │
│  ┌──────────┬──────────┬──────────┐                    │
│  │          │          │          │                    │
│  │ Product9 │Product10 │Product11 │                    │
│  │          │          │          │                    │
│  └──────────┴──────────┴──────────┘                    │
│                                                         │
│                  [View All Products]                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TEAM (bg: secondary/cream)                             │
│  Our Team                                               │
│                                                         │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │  [사진]      │  [사진]      │  [사진]      │        │
│  │  Name        │  Name        │  Name        │        │
│  │  Position    │  Position    │  Position    │        │
│  │  [IG] [in]   │  [IG] [in]   │  [IG] [in]  │        │
│  └──────────────┴──────────────┴──────────────┘        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CLIENT REVIEWS (bg: white)                             │
│  What Our Clients Say                                   │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  ★★★★★                                           │ │
│  │  "리뷰 텍스트 내용..."                             │ │
│  │  - 리뷰어 이름, 구매 상품                          │ │
│  └───────────────────────────────────────────────────┘ │
│  ← 캐러셀 네비게이션 →                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  BLOG PREVIEW (bg: secondary/cream)                     │
│  Latest Insights                                        │
│                                                         │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │ [썸네일]     │ [썸네일]     │ [썸네일]     │        │
│  │ Category     │ Category     │ Category     │        │
│  │ 블로그 제목   │ 블로그 제목   │ 블로그 제목  │        │
│  │ Date · 5min  │ Date · 4min  │ Date · 6min  │        │
│  │ Read More →  │ Read More →  │ Read More → │        │
│  └──────────────┴──────────────┴──────────────┘        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  NEWSLETTER (bg: dark/black)                            │
│                                                         │
│              Stay in the Loop                           │
│      Get the latest arrivals and style tips.            │
│                                                         │
│          [이메일 입력              ] [Subscribe]         │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FOOTER (bg: dark/black)                                │
│  [Oh My Template]                                           │
│  브랜드 설명 1-2줄                                       │
│  [IG] [X] [Pinterest] [TikTok]                          │
│                                                         │
│  Shop          Company         Support                  │
│  New Arrivals  About Us        FAQ                      │
│  Best Sellers  Blog            Returns                  │
│  Categories    Contact         Shipping                 │
│                                                         │
│  © 2026 Oh My Template.                                   │
└─────────────────────────────────────────────────────────┘
```

### 3-2. Shop 페이지 와이어프레임

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PAGE HERO (bg: secondary/cream, 높이 200px)             │
│                                                         │
│              Shop                                       │
│     [All] [Accessories] [Footwear] [Women's] [Men's]    │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRODUCT GRID (11개 전체)                                │
│                                                         │
│  ┌──────────┬──────────┬──────────┐                    │
│  │          │          │          │                    │
│  │ Product1 │ Product2 │ Product3 │                    │
│  │          │          │          │                    │
│  └──────────┴──────────┴──────────┘                    │
│  ┌──────────┬──────────┬──────────┐                    │
│  │          │          │          │                    │
│  │ Product4 │ Product5 │ Product6 │                    │
│  │          │          │          │                    │
│  └──────────┴──────────┴──────────┘                    │
│  ... (나머지 상품)                                       │
└─────────────────────────────────────────────────────────┘
```

### 3-3. Product 상세 페이지 와이어프레임

```
┌─────────────────────────────────────────────────────────┐
│  HEADER                                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRODUCT DETAIL                                         │
│  ┌───────────────────────┬─────────────────────────┐   │
│  │                       │  Category               │   │
│  │  [메인 이미지]         │  Product Name           │   │
│  │                       │  $XX.XX                 │   │
│  │                       │                         │   │
│  │                       │  Color: [●] [●] [●]     │   │
│  │                       │  Size:  [S] [M] [L] [XL]│   │
│  │                       │                         │   │
│  │  ┌──┐ ┌──┐ ┌──┐ ┌──┐  │  [Add to Cart]          │   │
│  │  │  │ │  │ │  │ │  │  │                         │   │
│  │  └──┘ └──┘ └──┘ └──┘  │  Description            │   │
│  │  썸네일 갤러리          │  상품 설명 텍스트...      │   │
│  └───────────────────────┴─────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  YOU MAY ALSO LIKE (4개)                                │
│  ┌──────────┬──────────┬──────────┬──────────┐         │
│  │ Product  │ Product  │ Product  │ Product  │         │
│  └──────────┴──────────┴──────────┴──────────┘         │
└─────────────────────────────────────────────────────────┘
```

---

## SECTION 4. 데이터 구조 (data/data.ts)

```typescript
// 카테고리
export const categories = [
  { id: 'accessories', name: 'Accessories', image: '/templates/multi-shop/category-accessories.jpg' },
  { id: 'footwear', name: 'Footwear', image: '/templates/multi-shop/category-footwear.jpg' },
  { id: 'womens', name: "Women's", image: '/templates/multi-shop/category-women.jpg' },
  { id: 'mens', name: "Men's", image: '/templates/multi-shop/category-men.jpg' },
]

// 상품 (11개)
export const products = [
  { id: '1', name: 'Square Sunglasses', price: 29, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-01.jpg', description: '...' },
  { id: '2', name: 'Canvas Tote Bag', price: 45, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-02.jpg', description: '...' },
  { id: '3', name: 'Lila Bow-Accent Skirt', price: 149, category: 'womens', tag: 'New', image: '/templates/multi-shop/product-03.jpg', description: '...' },
  { id: '4', name: 'Minimal Leather Sneaker', price: 89, category: 'footwear', tag: 'New', image: '/templates/multi-shop/product-04.jpg', description: '...' },
  { id: '5', name: 'Classic Linen Shirt', price: 65, category: 'mens', tag: 'New', image: '/templates/multi-shop/product-05.jpg', description: '...' },
  { id: '6', name: 'Ribbed Knit Sweater', price: 95, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-06.jpg', description: '...' },
  { id: '7', name: 'Slim Chino Pants', price: 75, category: 'mens', tag: 'Best', image: '/templates/multi-shop/product-07.jpg', description: '...' },
  { id: '8', name: 'Leather Crossbody', price: 120, category: 'accessories', tag: 'Best', image: '/templates/multi-shop/product-08.jpg', description: '...' },
  { id: '9', name: 'Ankle Boots', price: 135, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-09.jpg', description: '...' },
  { id: '10', name: 'Floral Wrap Dress', price: 110, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-10.jpg', description: '...' },
  { id: '11', name: 'Oxford Loafers', price: 99, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-11.jpg', description: '...' },
]

// 신상품: id 1-5 (tag: 'New')
// 베스트셀러: id 6-11 (tag: 'Best')

// 팀원 (3명)
export const teamMembers = [
  { id: '1', name: 'Sofia Laurent', role: 'Creative Director', image: '/templates/multi-shop/team-01.jpg', instagram: '#', linkedin: '#' },
  { id: '2', name: 'James Avery', role: 'Head of Design', image: '/templates/multi-shop/team-02.jpg', instagram: '#', linkedin: '#' },
  { id: '3', name: 'Mia Chen', role: 'Brand Strategist', image: '/templates/multi-shop/team-03.jpg', instagram: '#', linkedin: '#' },
]

// 리뷰 (4개)
export const reviews = [
  { id: '1', rating: 5, text: 'The quality is outstanding. My Leather Crossbody arrived perfectly packaged and has become my everyday essential.', reviewer: 'Emma W.', product: 'Leather Crossbody' },
  { id: '2', rating: 5, text: 'Finally found a fashion brand that nails both style and comfort. The Ribbed Knit Sweater fits beautifully.', reviewer: 'Lucas M.', product: 'Ribbed Knit Sweater' },
  { id: '3', rating: 5, text: 'Fast shipping, gorgeous packaging, and the Square Sunglasses are even better in person.', reviewer: 'Chloe K.', product: 'Square Sunglasses' },
  { id: '4', rating: 5, text: 'The Ankle Boots are worth every penny. Elegant design, incredibly comfortable.', reviewer: 'Noah R.', product: 'Ankle Boots' },
]

// 블로그 (3개)
export const blogPosts = [
  { id: '1', slug: 'style-minimalist-accessories', title: 'How to Style Minimalist Accessories This Season', category: 'Style Guide', date: 'June 5, 2026', readTime: '5 min', image: '/templates/multi-shop/blog-01.jpg', excerpt: '...' },
  { id: '2', slug: 'sustainable-fashion', title: 'Sustainable Fashion: Our Brand Commitment', category: 'Brand Story', date: 'May 28, 2026', readTime: '4 min', image: '/templates/multi-shop/blog-02.jpg', excerpt: '...' },
  { id: '3', slug: 'mens-wardrobe-checklist', title: "The Essential Men's Wardrobe Checklist", category: 'Men\'s Guide', date: 'May 15, 2026', readTime: '6 min', image: '/templates/multi-shop/blog-03.jpg', excerpt: '...' },
]
```

---

## SECTION 5. 섹션별 구현 지침

### Hero 섹션
- 레이아웃: `grid grid-cols-2` (좌: 텍스트, 우: 이미지)
- 이미지: `h-screen object-cover` (전체 높이)
- 헤드라인: Cormorant Garamond, 72px, font-weight 400
- 우측 세로 레이블: `absolute right-8 top-1/2 -translate-y-1/2 writing-mode-vertical` 또는 `rotate-90`
- 배경: `bg-[var(--color-bg-secondary)]`

### Category Grid
- 4개 카드 동일 너비: `grid grid-cols-4`
- 이미지 높이: `h-[500px]`
- 오버레이: `absolute inset-0 bg-black/20`
- 호버 효과: 이미지 scale-105 + 오버레이 bg-black/30

### 상품 카드 (공통)
- 이미지 비율: `aspect-[3/4]`
- 배경: `bg-[var(--color-bg-secondary)]`
- 카테고리 레이블: `uppercase tracking-[0.2em] text-xs text-[var(--color-text-muted)]`
- 가격: `text-[var(--color-accent)]`
- rounded 없음 (샤프 에지)

### New Arrivals 비대칭 그리드
```tsx
// 상단 3개
<div className="grid grid-cols-3 gap-6">
  {products.slice(0,3).map(...)}
</div>
// 하단 2개 (가운데 정렬)
<div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
  {products.slice(3,5).map(...)}
</div>
```

### Reviews 캐러셀
- 상태 관리: `useState` (current index)
- 단순 슬라이드 전환 (opacity transition)
- 이전/다음 버튼 + 인디케이터 점

### Newsletter (다크 섹션)
```tsx
<section className="bg-[var(--color-bg-dark)] text-white py-24">
```

---

## SECTION 6. 라우팅 및 링크

```
홈: /en/templates/multi-shop
샵: /en/templates/multi-shop/shop
카테고리: /en/templates/multi-shop/shop/[category]
상품: /en/templates/multi-shop/product/[id]
소개: /en/templates/multi-shop/about
블로그: /en/templates/multi-shop/blog
블로그 글: /en/templates/multi-shop/blog/[slug]
문의: /en/templates/multi-shop/contact
```

---

## SECTION 7. 필수 준수 사항 (CLAUDE.md 기반)

- `src/` 중첩 폴더 없음 - `_components/` flat 구조
- translation 시스템 없음 - 텍스트 직접 하드코딩
- 외부 이미지 URL 없음 - `/templates/multi-shop/` 로컬만 사용
- `em-dash (—)` 사용 금지 - 하이픈(-) 또는 중간점(·) 사용
- `italic` 클래스 금지
- `font-light` 클래스 금지
- 모든 색상 CSS 변수로 처리
- ko 템플릿은 이미지 경로 `/templates/multi-shop/` 그대로 사용 (별도 폴더 생성 금지)

---

## SECTION 8. 폰트 시스템 교체 작업 (신규 추가)

레퍼런스 분석으로 기존 Cormorant Garamond(serif) → Jost(sans-serif) 교체 필요.

### 8-1. 수정 파일 목록

**theme.css** - 폰트 변수 교체 (SECTION 2-1 참고)

**layout.tsx** - Google Fonts import 교체
```html
<!-- 기존 -->
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...');

<!-- 교체 -->
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
```

### 8-2. 컴포넌트 수정 - style={{ fontFamily }} 제거

현재 모든 헤딩에 `style={{ fontFamily: 'var(--font-heading)' }}` 인라인 스타일이 붙어있음.
Jost 단일 폰트로 전환하면 이 인라인 스타일이 불필요함.

아래 컴포넌트들에서 `style={{ fontFamily: 'var(--font-heading)' }}` 전부 제거:
- `_components/Hero.tsx`
- `_components/CategoryGrid.tsx`
- `_components/NewArrivals.tsx`
- `_components/AboutBrand.tsx`
- `_components/BestSellers.tsx`
- `_components/TeamSection.tsx`
- `_components/Reviews.tsx`
- `_components/BlogPreview.tsx`
- `_components/Header.tsx`
- `_components/Footer.tsx`
- `shop/page.tsx`, `about/page.tsx`, `contact/page.tsx`, `blog/page.tsx` 등 모든 페이지

### 8-3. layout.tsx body 폰트 적용

```tsx
// layout.tsx의 body 태그에 폰트 클래스 적용
<body className="font-['Jost',sans-serif]">
// 또는 globals 처리 없이 CSS 변수로
```

### 8-4. 본문 색상 수정

`--color-text-muted` 값을 `#888888` → `#515151` 로 교체 (레퍼런스 스타일 가이드 기준)

---

## SECTION 9. 디자인 품질 지시사항 (design-taste-frontend + impeccable 분석 기반)

### 9-1. Eyebrow(소제목 레이블) 규칙 - 이미 일부 수정됨

**규칙**: 전체 섹션 수의 1/3 이하만 eyebrow 허용. 현재 상태:
- ✅ 제거 완료: NewArrivals, BestSellers, TeamSection, Reviews, BlogPreview
- ❌ 아직 남은 것: `Newsletter.tsx`의 `"Stay Connected"` eyebrow → 제거할 것

```tsx
// Newsletter.tsx - 이 줄 제거
<span className="text-xs uppercase tracking-[0.3em] text-white/40">Stay Connected</span>
```

### 9-2. 이미지 렌더링 방식 개선

현재 모든 이미지가 `background-image` CSS div로 처리됨. `<img>` 태그로 교체할 것 (접근성 + SEO).

```tsx
// ❌ 현재 방식
<div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />

// ✅ 교체 방식
<img src={image} alt={name} className="w-full h-full object-cover" />
```

적용 대상:
- `ProductCard.tsx` - 상품 이미지
- `CategoryGrid.tsx` - 카테고리 이미지
- `Hero.tsx` - 히어로 이미지 (우측 패널)
- `AboutBrand.tsx` - 브랜드 이미지
- `TeamSection.tsx` - 팀원 이미지
- `BlogPreview.tsx` - 블로그 썸네일

### 9-3. CategoryGrid 레이아웃 (이미 수정됨 - 유지)

```tsx
// ✅ 현재 올바른 상태 - 유지
<div className="absolute bottom-6 left-6">
  <h3 className="text-white text-2xl font-normal">카테고리명</h3>
  <span className="text-white/60 text-xs uppercase tracking-[0.3em] mt-1 block">Shop Now</span>
</div>
```

### 9-4. 섹션 배경 리듬 (이미 수정됨 - 확인용)

올바른 배경 순서:
```
Hero          → bg-secondary (cream)
CategoryGrid  → bg-white
NewArrivals   → bg-secondary (cream)
AboutBrand    → bg-white
Services      → bg-secondary (cream)
BestSellers   → bg-white
TeamSection   → bg-white  ← (secondary에서 white로 수정 완료)
Reviews       → bg-white
BlogPreview   → bg-secondary (cream)
Newsletter    → bg-dark (black)
Footer        → bg-dark (black)
```

### 9-5. 상품 카드 호버 상태

현재 카드는 이미지 scale만 있음. 가격 표시 및 "View" 오버레이 추가:

```tsx
// ProductCard.tsx - 호버 시 "View Item" 오버레이
<div className="overflow-hidden bg-[var(--color-bg-secondary)] aspect-[3/4] relative">
  <img ... className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
    <span className="text-white text-xs uppercase tracking-[0.2em] bg-black/60 px-4 py-2">View Item</span>
  </div>
</div>
```

### 9-6. 모션 추가 (Overdrive Direction A: Scroll Cinema)

레퍼런스(Nolyta Webflow)의 부드러운 스크롤 감각 구현.

**패키지 설치 필요:**
```bash
npm install lenis motion
```

**Lenis 스무스 스크롤 - layout.tsx 또는 별도 provider:**
```tsx
// _components/SmoothScroll.tsx (use client)
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return null;
}
```

layout.tsx에서 `<SmoothScroll />`을 `{children}` 위에 추가.

**섹션 whileInView 리빌 - 각 섹션 컴포넌트에 적용:**
```tsx
// 예시: NewArrivals.tsx 상품 카드에 적용
import { motion } from "motion/react";

// 카드를 motion.div로 감싸기
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
>
  <ProductCard ... />
</motion.div>
```

**적용 우선순위:**
1. Hero 텍스트 (fade-up, 페이지 로드 시)
2. NewArrivals 상품 카드 (stagger)
3. BestSellers 상품 카드 (stagger)
4. CategoryGrid 카드 (stagger)
5. AboutBrand 텍스트 + 이미지 (fade-up)
6. BlogPreview 카드 (stagger)

**prefers-reduced-motion 필수 처리:**
```tsx
import { useReducedMotion } from "motion/react";
const shouldReduce = useReducedMotion();
// shouldReduce가 true면 initial/animate 모두 {} 처리
```

### 9-7. 버튼 및 인터랙션 규칙

- `:active` 상태: `active:scale-[0.98]` 또는 `active:-translate-y-[1px]` 추가
- 모든 CTA 버튼: 텍스트가 한 줄에 맞아야 함 (줄바꿈 금지)
- `rounded-*` 클래스 사용 금지 - 이 템플릿은 샤프 에지 (이미 적용 중)

### 9-8. 접근성 기본 체크

- 모든 `<img>`에 의미 있는 `alt` 텍스트
- 버튼/링크 명확한 텍스트 (아이콘만 있으면 `aria-label`)
- 본문 텍스트 contrast 4.5:1 이상 (`#515151` on white = ✅ 통과)
- form input에 `label` 또는 `aria-label` 연결 (Newsletter 이메일 input)
