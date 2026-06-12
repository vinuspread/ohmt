# Technology 템플릿 서브페이지 디자인 통일 작업 지시서

**작업 대상**: `src/app/en/templates/technology/` 서브페이지 3개  
**작업 범위**: 서브페이지의 세부 스타일을 메인 페이지 디자인 시스템에 맞게 통일  
**절대 금지**: `ko/templates/technology` 폴더 일체 수정 금지

---

## 현재 디자인 시스템 기준 (메인 페이지 기준)

`src/app/en/templates/technology/theme.css` CSS 변수:

```css
--color-bg: #ffffff
--color-bg-secondary: #f8fafc
--color-accent: #3b82f6
--color-text: #0f172a
--color-text-muted: #64748b
--color-border: #e2e8f0
--color-success: #22c55e
--font-heading: 'Space Grotesk', sans-serif
--font-body: 'Inter', sans-serif
```

### 핵심 디자인 규칙

- **카드에 border 없음**: 카드/리스트 아이템에 `border` 클래스 없음. section 구분선(`border-b border-[var(--color-border)]`)만 허용.
- **카드에 배경색 없음**: 카드 영역에 `bg-[var(--color-bg-secondary)]` 같은 배경색 없음. (section 배경은 ok)
- **원형 레이블**: 번호/인덱스 표시는 `w-10 h-10 rounded-full bg-[var(--color-accent)] text-white` 패턴 사용
- **버튼 rounded**: 모든 CTA 버튼은 `rounded-md`
- **h2 크기**: `text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.2] tracking-[-0.02em]`
- **이미지 rounded**: 카드 이미지는 최소 `rounded-xl`, 섹션 메인 이미지는 `rounded-2xl` 이상

---

## 수정 작업 상세

### 1. `about/page.tsx`

**수정 1 — 타임라인 step 원형 레이블**

현재:
```tsx
<div className="flex h-10 w-10 items-center justify-center border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)] font-mono text-sm font-bold">
```

변경:
```tsx
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-mono text-sm font-bold">
```

**수정 2 — 팀 멤버 아바타 placeholder**

현재:
```tsx
<div className="mb-4 flex h-16 w-16 items-center justify-center bg-[var(--color-bg)] text-[var(--color-accent)] font-mono text-lg font-bold">
```

변경:
```tsx
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-mono text-lg font-bold">
```

---

### 2. `products/page.tsx`

**수정 1 — 기술 스펙 카드 번호 레이블**

현재:
```tsx
<div className="mb-4 flex h-10 w-10 items-center justify-center bg-[var(--color-bg)] text-[var(--color-accent)] font-mono text-sm font-bold">
```

변경:
```tsx
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-mono text-sm font-bold">
```

---

### 3. `contact/page.tsx`

**수정 1 — Submit 버튼 rounded 통일**

현재:
```tsx
className="... rounded-none"
```

변경:
```tsx
className="... rounded-md"
```

**수정 2 — 제출 완료 체크마크 박스**

현재:
```tsx
<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)] text-xl font-bold">
```

변경:
```tsx
<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xl font-bold">
```

**수정 3 — 제출 완료 확인 박스 wrapper**

현재:
```tsx
<div className="border border-[var(--color-accent)] bg-[var(--color-bg)] p-8 text-center">
```

변경:
```tsx
<div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 text-center">
```

---

## 검수 체크리스트

- [ ] about: 타임라인 step 원형이 파란 배경 + 흰 텍스트
- [ ] about: 팀 멤버 아바타가 연한 파란 원형 (`rounded-full bg-accent/10`)
- [ ] products: 스펙 카드 번호가 연한 파란 원형
- [ ] contact: Submit 버튼 `rounded-md`
- [ ] contact: 제출 완료 체크마크가 연한 파란 원형
- [ ] contact: 제출 완료 wrapper에 border 없음
- [ ] ko 폴더 미수정 확인

---

## 참고 — 이미 올바른 항목 (수정 불필요)

- 섹션 `border-b border-[var(--color-border)]` → 유지 (메인 페이지와 동일)
- 폼 인풋의 `border border-[var(--color-border)]` → 폼 UX상 필요, 유지
- 비교 테이블 셀 border → 데이터 테이블 UX상 필요, 유지
- h2 크기/leading → 이미 `clamp(2.5rem,5vw,4rem) leading-[1.2]` 적용됨
