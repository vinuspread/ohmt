# Jewelry 템플릿 디자인 룰

## 브랜드 무드
클래식 하이엔드 주얼리. 따뜻한 베이지 톤, 에메랄드 그린 액센트, 세리프 타이포그래피. 여백이 곧 고급감.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (메인) | `#F9F6F0`, `#FCFAF6`, `#FBF9F6` |
| 배경 (화이트) | `#FFFFFF` |
| 텍스트 (기본) | `#171717`, `#2C2925` |
| 텍스트 (보조) | `#737373` |
| 액센트 | `#70C5BB` (에메랄드 그린) |
| selection | `selection:bg-[#70C5BB] selection:text-white` |

불투명도 기준:
- 섹션 라벨: `neutral-400` ~ `neutral-500`
- 본문 보조: `neutral-500` ~ `neutral-600`
- 구분선: `neutral-200`
- 액센트 보더: `[#70C5BB]/30`

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6 md:px-12
섹션 간격: py-24 (소) / py-48 (중) / py-60 (대) — 여백을 넓게
```

---

## 타이포그래피

### 섹션 라벨
```
text-[11px] uppercase font-bold tracking-[0.4em] text-neutral-400
액센트 강조 시: text-[#70C5BB]
```

### 히어로 타이틀 (h1)
```
text-5xl md:text-8xl font-serif font-bold tracking-tight
```

### 섹션 제목 (h2)
```
text-4xl md:text-6xl font-serif tracking-tight
```

### 서브 제목 (h3)
```
text-2xl md:text-4xl font-serif font-light
```

### 본문
```
text-[14px] md:text-[16px] font-normal leading-relaxed
color: text-neutral-500 또는 text-neutral-600
```

### 가격
```
text-[14px] font-semibold text-[#70C5BB]
```

---

## 버튼

### Primary
```
bg-[#70C5BB] text-white px-16 py-6
text-[11px] uppercase font-bold tracking-[0.4em]
hover:bg-neutral-900 transition-all duration-500
shadow-xl
```

### 아웃라인
```
border border-[#70C5BB]/40 px-10 py-5
text-[11px] uppercase font-bold tracking-[0.4em] text-neutral-700
hover:bg-[#70C5BB] hover:text-white transition-all duration-500
```

### 다크
```
bg-neutral-900 text-white px-16 py-6
text-[11px] uppercase font-bold tracking-[0.4em]
hover:bg-[#70C5BB] transition-all duration-500
```

---

## 이미지

```
비율:      aspect-[3/4] (상품) / aspect-[4/5] (룩북)
배경:      bg-white 또는 bg-[#FDFBF9]
기본 상태: grayscale-[0.2] brightness-95
호버 상태: group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105
트랜지션:  transition-all duration-[2s] ease-out
보더:      border border-neutral-100
그림자:    shadow-xl (제품 카드)
```

---

## 구분선

```
수평: border-t border-neutral-200
섹션: border-neutral-200/60
수직: border-r border-neutral-200/30
```

---

## 애니메이션

```js
// 기본 등장
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}

// 스크롤 등장
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 1 }}

// Stagger
delay: i * 0.1
```

---

## 폰트

- Display: `Lora` (serif) — 제목, 브랜드명
- Body: `Jost` (sans-serif) — 본문, 라벨
- 한글: `Pretendard Variable`

---

## 수정 필요 사항

### 디자인
- [ ] Footer 배경색이 페이지마다 다름 → `bg-[#171717] text-white`로 통일
- [ ] 상품 카드 hover 그림자 강도 일관성 없음 → `shadow-xl` 통일
- [ ] 섹션 라벨 tracking 혼용 (`0.2em` ~ `0.6em`) → `0.4em` 통일
- [ ] 히어로 오버레이 그라데이션 방향 페이지마다 다름 → `from-black/40 via-transparent to-transparent` 통일
- [ ] 가격 표기 통화 단위 혼용 (₩, $, €) → 일관성 필요

### 빠진 메뉴
- [ ] Brand Story / Atelier 소개 페이지 없음
- [ ] Ring Sizer / 사이즈 가이드 없음
- [ ] Custom Order / 맞춤 제작 문의 페이지 없음
- [ ] Care Guide (주얼리 관리법) 없음
- [ ] Cart / 장바구니 기능 없음

### UX 개선
- [ ] 상품 상세 이미지 줌 기능 없음 (주얼리는 디테일이 중요)
- [ ] 재질/소재 정보 표시 없음
- [ ] 모바일 GNB 없음
- [ ] 제품 필터(소재, 가격대, 컬렉션) 없음
- [ ] Wishlist / 찜 기능 없음
- [ ] 재입고 알림 기능 없음
- [ ] SNS 공유 버튼 없음
