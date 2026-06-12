# Fashion 템플릿 디자인 룰

## 브랜드 무드
미니멀 하이엔드 패션. 흑백 대비, 굵은 타이포그래피, 기하학적 구조. 불필요한 장식 없음.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (다크) | `#050505` |
| 배경 (라이트) | `#FFFFFF`, `#F5F5F7`, `#F9F9FB` |
| 텍스트 (기본) | `#000000`, `#0E0D0B` |
| 텍스트 (보조) | `#888888` |
| 액센트 | 없음 (모노톤 유지) |
| selection | `selection:bg-black selection:text-white` |

불투명도 기준:
- 섹션 라벨: `black/30` ~ `black/45`
- 본문 보조: `black/60`
- 구분선: `black/10`

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6 md:px-12
섹션 간격: py-24 (소) / py-40 (중) / py-44 (대)
```

---

## 타이포그래피

> **이탤릭 금지** — 모든 제목은 upright 유지

### 섹션 라벨
```
text-[10px] uppercase font-bold tracking-[0.5em] text-black/40
```

### 히어로 타이틀 (h1)
```
text-[8vw] md:text-[5vw] font-light uppercase tracking-[-0.02em]
```

### 섹션 제목 (h2)
```
text-[5vw] md:text-[3vw] font-bold uppercase tracking-tighter
```

### 카드 제목 (h3)
```
text-[17px] font-bold uppercase
```

### 본문
```
text-[14px] md:text-[16px] font-normal leading-[1.7]
color: text-black/60 또는 text-[#888888]
```

### 가격
```
text-[14px] font-bold text-black/70
```

---

## 버튼

### 기본 (다크)
```
bg-black text-white px-16 py-6
text-[11px] uppercase font-bold tracking-[0.4em]
hover:bg-white hover:text-black border border-black transition-all duration-700
```

### 기본 (라이트)
```
bg-white text-black px-16 py-6
text-[11px] uppercase font-bold tracking-[0.4em]
hover:bg-black hover:text-white border border-black transition-all duration-700
```

### 아웃라인
```
border border-black/20 px-10 py-4
text-[11px] uppercase font-bold tracking-[0.4em]
hover:border-black transition-colors duration-300
```

---

## 이미지

```
비율:      aspect-[3/4] (상품) / aspect-[4/3] (배너)
배경:      bg-[#F5F5F7] 또는 bg-neutral-100
기본 상태: grayscale
호버 상태: group-hover:grayscale-0 group-hover:scale-105
트랜지션:  transition-all duration-[2s] ease-out
```

---

## 구분선

```
수평: w-16 h-px bg-black/10
섹션: border-t border-black/10
```

---

## 애니메이션

```js
// 기본 등장
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}

// 스크롤 등장
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}

// Stagger
delay: i * 0.08
```

---

## 폰트

- Heading: Geist (sans-serif, variable)
- Body: Inter (sans-serif, variable)
- Serif 포인트: 일부 섹션 설명에만 제한 사용

---

## 수정 필요 사항

### 디자인
- [ ] Navbar 배경: 스크롤 전 투명 → 스크롤 후 `bg-white/90 backdrop-blur` 적용 통일
- [ ] Hero 텍스트 크기 vw 단위 → `clamp()` 또는 고정값으로 모바일 대응 개선
- [ ] 카드 hover 시 그림자 없음 → 통일된 hover 효과 필요 (`shadow-sm` 또는 scale만)
- [ ] 카테고리 배너 이미지 비율 페이지마다 다름 → `aspect-[4/3]`으로 통일

### 빠진 메뉴
- [ ] About / Brand Story 페이지 없음
- [ ] Lookbook 페이지 없음
- [ ] Cart / Wishlist 페이지 없음
- [ ] Search 기능 없음

### UX 개선
- [ ] 상품 카드에 Quick Add 기능 없음
- [ ] 카테고리 필터 후 스크롤 위치 유지 안 됨
- [ ] 모바일 햄버거 메뉴 없음 (GNB 항목 모바일에서 숨겨짐)
- [ ] 빈 카테고리 상태(empty state) UI 없음
- [ ] Footer에 Newsletter 구독 폼 없음
