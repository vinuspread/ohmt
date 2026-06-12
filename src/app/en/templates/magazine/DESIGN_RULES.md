# Magazine 템플릿 디자인 룰

## 브랜드 무드
세련된 라이프스타일 에디토리얼. DM Serif 헤딩 + 테라코타 액센트. 여백과 글이 중심.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#FAFAF8` |
| 텍스트 (기본) | `#0D0D0D` |
| 텍스트 (보조) | `#6B6B6B` |
| 액센트 | `#8C6D3F` (테라코타/브론즈) |
| 구분선 | `#E2DDD8` |
| selection | `selection:bg-[#8C6D3F] selection:text-white` |

CSS 변수 사용:
```css
--theme-text: #0D0D0D
--theme-text-muted: #6B6B6B
--theme-accent: #8C6D3F
--theme-border: #E2DDD8
```

---

## 레이아웃

```
컨테이너:  max-w-[1320px] mx-auto px-[2.5rem]
섹션 간격: py-12 (소) / py-16 (중)
```

---

## 타이포그래피

> **font-normal** 기본 — serif 제목에 굵기 없음이 특징

### 섹션 라벨
```
text-[0.7rem] uppercase font-bold tracking-[0.2em] text-[var(--theme-text-muted)]
border-b-2 border-[var(--theme-text)] pb-4 (주요 섹션)
액센트 라벨: text-[0.68rem] font-bold tracking-[0.18em] text-[var(--theme-accent)]
```

### 히어로 (h1)
```
font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1.1]
```

### 기사 제목 (h2)
```
font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-tight
```

### 카드 제목 (h3)
```
font-serif text-[1.15rem] md:text-[1.3rem] font-normal leading-snug
```

### 본문
```
text-[0.9rem] font-light leading-[1.7] text-[var(--theme-text-muted)]
```

---

## 버튼

### Subscribe (라이트)
```
border border-[var(--theme-text)] text-[var(--theme-text)] px-[1.2rem] py-[0.5rem]
text-[0.72rem] uppercase font-bold tracking-[0.1em]
hover:bg-[var(--theme-text)] hover:text-white
```

### Subscribe (다크 위)
```
border border-white/50 text-white
hover:bg-white hover:text-[var(--theme-text)]
```

### Newsletter CTA
```
bg-[var(--theme-accent)] text-white px-8 py-4
text-[0.75rem] uppercase font-bold tracking-widest
hover:brightness-110
```

---

## 이미지

```
히어로:       w-full h-full object-cover + gradient 오버레이
Featured 메인: h-[480px] object-cover group-hover:scale-103
서브 카드:    h-[160px] object-cover group-hover:scale-104
```

---

## 구분선

```
border-t-2 border-[var(--theme-text)] (주요 섹션)
border border-[var(--theme-border)]
border-r border-[var(--theme-border)] (컬럼)
```

---

## 폰트

- Heading: `DM Serif Display` (serif)
- Body: `Inter` (sans-serif)

---

## 수정 필요 사항

### 디자인
- [ ] MostRead 번호 hardcoded (`01`, `02`, `03`) → 동적 처리
- [ ] LatestStories 서브 컬럼 `grid-cols-[1fr_300px]` 고정 → 반응형 수정
- [ ] Featured 메인 이미지 `h-[480px]` 고정 → 반응형 처리
- [ ] `scale-103` / `scale-104` 유효하지 않은 클래스 → `scale-105` 통일

### 빠진 메뉴 (모두 `#` 링크)
- [ ] Stories 카테고리 페이지
- [ ] Archive 페이지
- [ ] Issues 페이지
- [ ] About 편집부 페이지
- [ ] 기사 상세 페이지 (slug 라우트 내용 확인 필요)

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] 기사 검색 없음
- [ ] 카테고리/태그 필터 없음
- [ ] 뉴스레터 폼 submit 처리 없음
- [ ] 기사 읽기 예상 시간 표시 없음
- [ ] 소셜 공유 버튼 없음
