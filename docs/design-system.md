---
name: ohmytemplate Design System
description: Premium Multi-Template Showcase & Design Framework
colors:
  primary: "#000000"
  accent: "#FF3B30"
  neutral-bg: "#FFFFFF"
  neutral-bg-sec: "#F5F5F5"
  neutral-text: "#000000"
  neutral-muted: "#707070"
  border: "#000000"
typography:
  display:
    fontFamily: "var(--font-heading), sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "var(--font-body), sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: ohmytemplate

## 1. Overview

**Creative North Star: "The Premium Editorial Canvas"**

본 디자인 시스템은 비주얼 중심의 프리미엄 쇼케이스 및 독립형 템플릿 환경을 위해 구축되었습니다. 각 템플릿이 독자적인 브랜드 미감과 고유의 비주얼 정체성을 지니면서도, 코드 규칙과 품질 면에서는 완벽한 통일성을 유지할 수 있도록 돕는 캔버스 역할을 수행합니다.

시각적 요소를 강제하는 대신 개별 템플릿의 맥락적 최적화를 최우선으로 고려하며, 흔한 SaaS 클리셰나 정형화된 AI 스타일을 거부하고 인쇄 매체와 같은 타이포그래피 정밀함과 여백의 미를 추구합니다.

**Key Characteristics:**
- **장르적 독립성**: 공통 라이브러리 의존성 없이, 각 템플릿 폴더가 `theme.css`를 통해 자체 토큰을 오버라이딩함.
- **구조적 평면 미학**: 과도한 드롭 섀도우나 둥근 모서리를 피하고, 1px 테두리와 서체 대비만을 활용하여 프리미엄한 깊이감을 형성.
- **한국어 타이포그래피 자간 최적화**: 국문 템플릿의 가독성을 높이기 위해 엄격한 음수 자간 규칙과 행간 설정을 적용.

## 2. Colors

모든 템플릿은 독립된 `theme.css` 내에서 고유의 컬러 팔레트를 정의합니다. 공통 프레임워크는 컬러 토큰의 명칭(Semantic Role)만을 표준화하여 사용합니다.

### Primary
- **Primary Ink** (`var(--color-primary)`): 기본 브랜드 시그니처 색상이자 핵심 레이아웃 경계를 정의합니다.
- **Accent Highlight** (`var(--color-accent)`): 상호작용, 중요 포커스, 또는 즉각적인 시선 유도가 필요한 곳에 제한적으로 사용합니다.

### Neutral
- **Canvas Base** (`var(--color-bg)`): 메인 컨텐츠 영역의 기본 배경색입니다.
- **Canvas Secondary** (`var(--color-bg-secondary)`): 섹션 구분이나 폼 영역 등의 보조 배경색입니다.
- **Text Ink** (`var(--color-text)`): 메인 본문 및 타이틀 서체 색상으로, 웹 접근성을 위해 배경과의 대비가 4.5:1 이상을 엄격히 만족해야 합니다.
- **Text Muted** (`var(--color-text-muted)`): 설명글, 플레이스홀더, 비활성 요소에 사용하며, 가독성 한계를 준수합니다.

### Named Rules
**The Overwrite Rule.** 템플릿별로 독자적인 컬러 정체성을 부여하기 위해 컴포넌트 내부에서 하드코딩된 `#HEX` 색상은 완전히 배제하며, 반드시 `theme.css`에 정의된 CSS Custom Properties 변수만을 사용해야 합니다.

## 3. Typography

**Display Font:** `var(--font-heading)` (Fallback: 템플릿별 결정)
**Body Font:** `var(--font-body)` (Fallback: Pretendard, Inter, sans-serif)

**Character:** 
제목 서체와 본문 서체의 극적인 대비를 사용합니다. 국문 템플릿은 Pretendard와 Noto Serif KR을 주로 사용하여, 자간을 최적화하고 가독성을 극한으로 끌어올립니다.

### Hierarchy
- **Display** (Bold, `clamp(2.4rem, 5vw, 4rem)`, `line-height: 1.2`): 대형 히어로 헤딩 및 시각적 소구점.
- **Headline** (Bold, `clamp(1.8rem, 3.5vw, 3rem)`, `line-height: 1.25`): 섹션 주요 타이틀.
- **Title** (Semibold, `clamp(1.2rem, 2.5vw, 1.8rem)`, `line-height: 1.3`): 카드 제목 및 서브 타이틀.
- **Body** (Normal, `0.95rem`, `line-height: 1.6`): 가독성 중심의 본문 텍스트. 최적의 리딩을 위해 최대 한 줄 길이는 65–75ch로 제한합니다.
- **Label** (Medium, `0.75rem` ~ `0.85rem`, `tracking-widest`): 카테고리 태그, 버튼 레이블 등 메타 정보.

### Named Rules
**The Korean Kerning Rule.** 국문 템플릿(`-ko`)의 경우, 한글 가독성 향상을 위해 전체 기본 자간을 `-0.025em`, 헤더 GNB 자간을 `-0.03em`, 대형 헤딩 자간을 `-0.04em`으로 고정하며, 단어가 어색하게 쪼개지지 않도록 `word-break: keep-all`과 `[overflow-wrap:normal]`을 적절히 결합해 사용합니다.

## 4. Elevation

본 시스템은 그림자를 활용한 깊이 표현을 극도로 제한합니다. 대신 **Flat & Structured** 원칙에 따라 요소 간 경계선(Border)과 배경 색조 차이(Tonal Layering)를 통해 입체감과 구조적 위계를 전달합니다.

### Named Rules
**The Border-First Rule.** 입체감을 주기 위해 섀도우를 주는 행위는 금지됩니다. 카드나 컨테이너의 경계는 `var(--color-border)` 1px 선 또는 보조 배경색(`var(--color-bg-secondary)`)을 활용하여 구분합니다. 섀도우는 포커스 상태나 드롭다운 메뉴처럼 화면에서 튀어나와 부유하는 요소에 한해 예외적으로 `box-shadow: 0 4px 20px rgba(0,0,0,0.08)` 수준의 투명하고 부드러운 형태만 허용합니다.

## 5. Components

### Buttons
- **Shape:** 각 템플릿의 개성에 맞춰 `theme.css`에서 결정하되, 일반적으로 미니멀한 직각(0px) 또는 둥글기(4px)를 사용하며 Pill 형태는 태그에만 제한 적용합니다.
- **Primary:** `var(--color-primary)` 배경과 반전된 텍스트 색상을 가지며, 내부 패딩은 균형 잡힌 비례(`12px 24px`)를 준수합니다.
- **Hover / Focus:** 호버 시 `var(--color-accent)` 또는 미세한 투명도 변화(`opacity: 0.9`)와 함께 부드러운 트랜지션(`200ms ease-out`)을 적용합니다. 포커스 시 브라우저 기본 아웃라인 대신 명확한 커스텀 아웃라인(`outline: 2px solid`)을 부여합니다.

### Cards / Containers
- **Corner Style:** 최대 `8px` ~ `12px` 반경의 둥글기를 초과하지 않으며, SaaS 클리셰인 과도한 둥글기(24px 이상)는 철저히 배제합니다.
- **Background:** `var(--color-bg)` 또는 `var(--color-bg-secondary)`
- **Border:** `1px solid var(--color-border)`

### Navigation
- **Style:** 간결하고 가독성 높은 텍스트 링크 위주로 구성하며, 국문 템플릿은 모바일/데스크톱 가독성을 위해 폰트 크기를 영문 대비 15% 키운 `16px`을 강제합니다.

## 6. Do's and Don'ts

### Do:
- **Do** 한글 대형 헤딩에는 반드시 `leading-[1.25]` 이상의 넉넉한 행간을 적용하십시오.
- **Do** 모든 상호작용 요소(버튼, 링크, 인풋)에 명확한 `:focus-visible` 커스텀 스타일을 부여하십시오.
- **Do** 템플릿 루트에 위치한 `theme.css` 파일에서 모든 컬러와 타이포그래피 변수를 제어하십시오.

### Don't:
- **Don't** 디자인 일관성을 해치는 `italic` 스타일이나 `font-light` (Thin) 가중치를 임의로 사용하지 마십시오.
- **Don't** 본문에 3가지 이상의 서로 다른 폰트 패밀리를 혼용하지 마십시오.
- **Don't** 카드의 테두리(1px border)와 큰 그림자(16px 이상)를 동시에 한 요소에 중첩하여 적용하지 마십시오. (고스트 카드 패턴 금지)
- **Don't** 임의의 사이드 스트라이프 테두리(`border-left: 4px solid ...`)를 정보 강조용으로 남발하지 마십시오.
