# Hero 섹션 디자인 가이드

technology 템플릿 Hero 섹션 리디자인 과정에서 정리한 규칙.

---

## 원칙

- **라이트 테마**: `var(--color-bg)` 흰 배경 유지
- **그라데이션 텍스트 금지**: `bg-clip-text bg-gradient-to-r` 사용 불가. 단색 accent로 강조
- **카드 래퍼 없이 이미지**: 로봇/제품 이미지를 `rounded-3xl` + `shadow` 카드에 넣지 않는다. 배경 없이 직접 배치
- **CTA 버튼 `rounded-none`**: 기술/프리미엄 템플릿은 square corner

---

## 구조

```
<section>                   # min-h-screen, bg-[var(--color-bg)]
  dot-grid overlay          # opacity 0.035 — 배경 텍스처
  grid (12 col)
    col-span-6: 텍스트
      eyebrow               # line + 텍스트, rounded-full 금지
      h1                    # clamp(2.8rem, 5vw, 4.5rem), 단색 accent 강조
      divider (12px line)
      p                     # max-w-[520px]
      CTA row               # primary: bg-text hover:bg-accent rounded-none
    col-span-6: 이미지
      accent glow (blur)    # 발 아래 soft glow
      <img>                 # 카드 없이 직접
```

---

## 금지 패턴

| 패턴 | 이유 |
|------|------|
| `rounded-3xl` + `shadow` 이미지 카드 | SaaS 클리셰, 값싸 보임 |
| `bg-clip-text bg-gradient-to-r` 헤딩 | PRODUCT.md anti-reference 명시 금지 |
| `rounded-full` 아이콘/배지 | generic SaaS eyebrow 느낌 |
| `hover:shadow-lg` CTA 버튼 | 그림자 남발 금지 |
| `rounded-md` CTA 버튼 | 반드시 `rounded-none` |

---

## 이미지 생성 프롬프트

### 히어로 로봇 이미지 (PNG 투명 배경)
```
A sleek white humanoid robot standing upright in a power stance, full body shot,
pure transparent background, studio lighting with subtle blue rim light on edges,
ultra high detail surface finish, product photography style, no floor shadow,
PNG transparent background, front-facing, centered
```

### 히어로 배경 이미지 (1600×900, 라이트 버전)
```
Minimalist white robotics laboratory interior, extremely clean and bright,
subtle light gray floor reflections, soft natural lighting from large windows,
no people, architectural product photography, editorial quality,
warm-white and cool-white tones, ultra sharp
```
