# Sneaker 템플릿 디자인 룰

## 브랜드 무드
프리미엄 스포츠웨어 이커머스. 검은색 강한 타이포, 레드 포인트, 역동적 레이아웃.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#FFFFFF`, `#D2B48C` (히어로) |
| 텍스트 | `#000000`, `#FFFFFF` |
| 액센트 | `#FF3B30` (레드) |
| 보조 텍스트 | `#707070` |
| 구분선 | `#E5E5E5` |
| selection | `selection:bg-black selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6 md:px-12
섹션 간격: py-24
```

---

## 타이포그래피

> **font-black** 기본 — 이탤릭 금지

### 섹션 라벨
```
text-[11px] uppercase font-bold tracking-[0.5em] text-black/30
```

### 히어로 (h1)
```
text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-white
```

### 섹션 제목 (h2)
```
text-5xl font-black tracking-tighter text-[#1A1A1A]
```

### 카드 제목 (h3)
```
text-lg font-black tracking-tight
```

### 본문
```
text-[16px] md:text-xl font-medium leading-relaxed
```

### 가격
```
text-[14px] font-bold
```

---

## 버튼

### Primary
```
bg-black text-white px-10 py-4 rounded-md
text-[15px] font-bold tracking-tight
hover:bg-[#FF3B30] transition-all
```

### Secondary
```
bg-white text-black px-10 py-4 rounded-md
text-[15px] font-bold tracking-tight
hover:bg-black hover:text-white transition-all
```

> **rounded-md 통일** — rounded-full / rounded-3xl / rounded-2xl 혼용 금지

---

## 이미지

```
비율:      aspect-square (상품)
배경:      bg-neutral-100
호버:      group-hover:scale-110 duration-700
필터:      grayscale brightness-75 → group-hover:grayscale-0
```

---

## 구분선

```
border-t border-[#E5E5E5]
border-l border-[#E5E5E5]
```

---

## 폰트

- 전체: `Inter` (sans-serif)
- 로고: `font-black tracking-[-0.08em]`

---

## 수정 필요 사항

### 디자인
- [ ] 버튼 배경 `bg-white` / `bg-black` / `bg-brand-secondary` 3종 혼용 → 2종으로 통일
- [ ] rounded 값 `full` / `md` / `3xl` / `2xl` 혼용 → `rounded-md` 통일
- [ ] 섹션 라벨 `text-[14px]` / `text-[11px]` 혼용 → `text-[11px]` 통일
- [ ] `size-18` (유효하지 않은 Tailwind 클래스) → `w-18 h-18` 또는 다른 값으로 수정

### 빠진 메뉴
- [ ] 상품 상세 페이지 내용 없음 (`product/[id]` 뼈대만)
- [ ] 장바구니 페이지 내용 없음 (`cart` 뼈대만)
- [ ] 위시리스트
- [ ] 사이즈 가이드 페이지
- [ ] 리뷰/별점 시스템
- [ ] 배송 추적

### UX 개선
- [ ] 모바일 메뉴 팝업 미구현
- [ ] 상품 카드 → 상세 링크 미연결
- [ ] 장바구니 카운터만 있고 실제 동작 없음
- [ ] 검색 아이콘 있으나 기능 없음
- [ ] Next Image 미사용 (`img` 태그 혼용) → `next/image` 통일
- [ ] 상품 추천 섹션 없음
- [ ] 페이지네이션 UI 불완전
