# OpenCode 작업 지시서 (업데이트: 2026-06-01)

## 프로젝트 개요

Next.js 기반 템플릿 쇼케이스. 각 템플릿은 영문(en)과 국문(ko) 독립 구조.

---

## 남은 작업: 템플릿 내부 UI 요소 컴포넌트화 및 일관성 강화

각 템플릿의 디자인 룰(`DESIGN_RULES.md`)에 명시된 버튼, 타이틀 등의 UI 스타일이 개별 파일에 마크업(Tailwind CSS)으로 하드코딩되어 있어 일관성이 깨질 위험이 있습니다. 이를 해결하기 위해 템플릿별로 내부 공통 UI 컴포넌트를 구축합니다.

### 세부 개발 지침
1. **템플릿 간 독립성 유지**
   - 템플릿끼리 소스 코드를 공유하는 것은 금지한다.
2. **다형성(Polymorphism) 보장**
   - `Button` 컴포넌트는 `<button>` 과 `<Link>` 모두 지원. `href` 프로퍼티가 있으면 자동으로 `<Link>` 사용.

---

## 작업 5: theme.json 구조 표준화 (설계 시스템 기초)

**심각도: Critical** — 모든 템플릿의 유지보수 기반. 현재 각 템플릿마다 다른 스키마 → 자동화 불가, 확장 어려움.

### 표준 theme.json 스키마 (모든 템플릿이 따를 구조)

```json
{
  "name": "Template Name",
  "mode": "light",
  "palette": {
    "primary": "#FFFFFF",
    "secondary": "#111111",
    "accent": "#...(색상값)",
    "text": {
      "main": "#1a1a1a",
      "muted": "#666666",
      "contrast": "#ffffff"
    },
    "ui": {
      "border": "rgba(0,0,0,0.08)",
      "hover": "rgba(0,0,0,0.04)",
      "shadow": "0 8px 24px rgba(0,0,0,0.06)"
    }
  },
  "typography": {
    "heading": {
      "font": "Outfit",
      "weight": "700",
      "tracking": "-0.03em"
    },
    "body": {
      "font": "Outfit",
      "weight": "400",
      "leading": "1.6"
    },
    "mono": {
      "font": "JetBrains Mono",
      "weight": "400"
    }
  },
  "spacing": {
    "section_py": "80px",
    "section_py_md": "120px",
    "container_px": "24px",
    "container_px_lg": "48px",
    "card_p": "24px",
    "gap": "24px"
  },
  "motion": {
    "transition_fast": "200ms",
    "transition_normal": "300ms",
    "transition_slow": "500ms",
    "easing": "cubic-bezier(0.16, 1, 0.3, 1)"
  }
}
```

### 작업 목록 (15개 템플릿 × 2 버전 = 30개 파일)
- [ ] studio/theme.json
- [ ] studio-ko/theme.json
- [ ] car/theme.json
- [ ] car-ko/theme.json
- [ ] fashion/theme.json
- [ ] fashion-ko/theme.json
- [ ] (+ 나머지 12개 템플릿 × 2)

---

## 작업 6: Spacing 정규화 (8px 그리드)

**심각도: Critical** — 전체 프로젝트에 영향, 가장 큰 visual impact.

### 규칙
모든 padding/margin/gap은 **8의 배수**만 사용.

#### 변환 매핑 (현재 → 표준)
| 현재 | 표준 | 설명 |
|------|------|------|
| px-4 | px-4 (16px) | keep |
| px-5 | px-6 (24px) | round up |
| px-6 | px-6 (24px) | keep |
| px-7 | px-8 (32px) | round up |
| px-8 | px-8 (32px) | keep |
| px-12 | px-12 (48px) | keep |
| px-16 | px-16 (64px) | keep |
| px-20 | px-20 (80px) | keep |
| gap-4 | gap-4 (16px) | keep |
| gap-5 | gap-6 (24px) | round up |
| gap-6 | gap-6 (24px) | keep |

### 작업 범위
- [ ] 메인 페이지 (`src/app/page.tsx`)
- [ ] 모든 `_components/` 파일들의 padding/margin/gap 정규화
- [ ] section py 값: 64px (md:80px) 또는 96px (md:120px)만 사용
- [ ] card padding: 24px 또는 32px만 사용
- [ ] component gap: 16px, 24px, 32px만 사용

---

## 작업 7: Typography 계층 표준화

**심각도: High** — 가독성 및 시각적 계층 명확화.

### 5-Level 표준 계층

| 레벨 | 클래스 | 사용처 |
|------|--------|--------|
| **H1** | `text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-0.03em] leading-[1.2]` | 페이지 주제목 |
| **H2** | `text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.25]` | 섹션 제목 |
| **H3** | `text-[clamp(1.2rem,3vw,1.5rem)] font-semibold tracking-[-0.01em] leading-[1.3]` | 서브섹션 제목 |
| **Body** | `text-[16px] font-normal leading-[1.6] max-w-[65ch]` | 본문 (max-width 필수) |
| **Label** | `text-[12px] font-medium uppercase tracking-[0.15em]` | 레이블, 링크 |

---

## 작업 8: 색상 팔레트 단일 accent 강제

**심각도: High** — 각 템플릿은 **하나의 accent 색상만** 사용 (saturation <= 75%).

### 위반 템플릿 (수정 필요)
- [ ] **car**: 현재 gold + blue → gold만 사용
- [ ] **studio**: 현재 여러 gray 변형 → 단일 accent로 통일
- [ ] **ir**: 현재 color 혼재 → 단일 accent 정의

---

## 작업 9: 모션 표준화 (transition duration)

**심각도: Medium**

### 표준 duration 3가지만 사용
- `200ms` — fast: micro-interactions, hover states
- `300ms` — normal: button press, card reveal
- `500ms` — slow: full-page transitions, scroll reveals

모든 transition은 `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) 사용.

---

## 작업 10: CTA 버튼 통일

**심각도: Medium**

### 표준 CTA 버튼 클래스
```html
<button class="
  inline-flex items-center gap-2
  px-8 py-3 md:px-10 md:py-4
  bg-[var(--accent)] text-white
  font-bold text-[14px] uppercase tracking-[0.16em]
  rounded-none
  hover:opacity-80 active:scale-95
  transition-all duration-300
">
  Label <ArrowUpRight size={16} />
</button>
```

### 불변식
- Square corners (rounded-none)
- Max 2 words + icon
- Opacity change on hover (color change X)
- Scale feedback on active

---

## 작업 11: Hero 규칙 (뷰포트 안정성)

**심각도: Medium**

### 규칙
- H1 max 2 lines at desktop
- Subtext max 20 words AND max 4 lines
- Top padding <= pt-24 (6rem)
- CTA visible without scroll

### 위반 템플릿
- [ ] **car**: 4-line title → 2-line으로 재구성
- [ ] **airline**: hero 하단 padding 과다 → 조정
- [ ] **cosmetic**: subtext 길이 → max 20 words로 재작성

---

## 작업 12: Footer 표준화

**심각도: Low**

### 표준 footer 높이
- Min: 64px / Max: 120px
- Padding: py-16 md:py-20

---

## 완료 기준 체크리스트 (전체)

### 기존 작업 (작업 1-4)
- [ ] 깨진 CSS 변수 참조 없음 (car, exhibition, fashion)
- [ ] `const lang = 'en'` 코드 전체 제거
- [ ] jewelry `_internal/` → `_components/` 이동 완료
- [ ] airline-ko 코드 동기화 완료

### 설계 시스템 통합 (작업 5-12)
- [ ] **theme.json**: 모든 템플릿이 표준 스키마 사용
- [ ] **Spacing**: 모든 값이 8px 그리드 배수
- [ ] **Typography**: H1-Label 5-level 계층 적용
- [ ] **Color**: 각 템플릿이 단일 accent만 사용
- [ ] **Motion**: duration은 200ms/300ms/500ms만
- [ ] **CTA**: 모든 버튼이 표준 클래스 사용
- [ ] **Hero**: 모든 hero가 규칙 준수 (2-line, 20-word, pt-24)
- [ ] **Footer**: 높이 64-120px 범위, 일관성 확인
- [ ] **빌드**: 모든 템플릿 `npm run build` 성공

---

## KO 타이포그래피 규칙 (EN과 독립적)

**주의**: 다음 규칙은 **KO 템플릿만**에 적용됨. EN은 이 규칙을 따르지 않음.

### 1. 자간 (Letter Spacing)
- ❌ `tracking-normal` (0) 사용 금지
- ❌ `tracking-wider`, `tracking-widest` 금지
- ✅ `tracking-tight` 또는 `tracking-[-0.01em]` 정도 사용

### 2. 행간 (Line Height)
- ❌ EN과 동일한 행간 사용 금지
- ✅ EN보다 +0.2~0.4 더 큰 leading 값 사용
- 예: EN이 `leading-relaxed (1.625)` → KO는 `leading-[1.8]` 이상

### 3. Eyebrow / 섹션 라벨
- ❌ 국문 eyebrow를 영문과 함께 사용 (예: "소개 · ABOUT")
- ✅ 영문만 병기 가능

### 4. 타이포그래피 철학 (문구 형태감)
- ❌ EN처럼 단어 하나만 크게 하는 강조 기법 금지
- ✅ 문장 전체의 균형과 리듬 유지
- ✅ 사이즈 변화는 부드럽고 점진적 (scale ratio 1.2~1.3)

### 5. 큼지막한 타이포의 영단어 활용 (트렌드)
- ✅ 큰 헤딩/타이틀: 영단어 주로 사용 (ABOUT, PROCESS, VISION 등)
- ✅ 영문 헤딩 + 국문 서브텍스트 조합
- ❌ 큰 사이즈의 국문 단독 사용 회피 (덩어리감 무거움)

### 6. 카피 분량 (Copy Length)
- ❌ EN의 짧은 카피를 그대로 번역 (심미성 저하)
- ✅ 타이틀/헤드카피: 형태감 있는 길이로 확장 가능

---

## 작업 13: KO 타이포그래피 스타일 개선

**심각도: Medium** — 작업 범위: furniture-ko, fashion-ko, sneaker-ko, airline-ko

### KO 타이포그래피 개선 체크리스트 (각 템플릿 반복)

- [ ] 모든 텍스트에서 `tracking-normal` (0) 제거
- [ ] `tracking-wider`, `tracking-widest` 제거 → `tracking-tight` 또는 음수값으로
- [ ] 본문/헤딩이 EN보다 행간 넓은지 확인 (최소 `leading-[1.8]` 이상)
- [ ] 타이틀/헤드카피가 너무 짧지 않은지 확인
- [ ] 국문 라벨 + 영문 라벨 혼합 제거
- [ ] 단어 단위 강조 기법 제거

### 작업 방식
1. 브라우저 확인: `http://localhost:3000/templates/[template-ko]/` 방문
2. 시각적 평가: 한글 텍스트 보면서 위 항목 확인
3. 코드 수정: 필요한 Tailwind 클래스 조정
4. 재확인 후 반복

---

## 체크리스트

- [x] 깨진 CSS 변수 참조 없음 (car, exhibition, fashion)
- [x] `const lang = 'en'` 코드 전체 제거
- [x] jewelry `_internal/` → `_components/` 이동 완료
- [x] airline-ko 코드 동기화 완료
- [ ] 템플릿 내부 공통 UI 컴포넌트(`Button.tsx` 등)화 완료 및 적용
- [x] ko 텍스트(한글) 그대로 유지
- [x] ko 라우팅 경로 그대로 유지
- [x] 이미지 경로 변경 없음
