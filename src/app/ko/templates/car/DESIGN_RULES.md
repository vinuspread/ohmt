# Car 템플릿 디자인 룰 (VINUS Motors)

## 브랜드 무드
전기차 미래 기술. 풀블랙 배경 + 골드 액센트. 타이트한 타이포, 압도적 스케일.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#000000`, `#0A0A0A` |
| 텍스트 (기본) | `#FFFFFF` |
| 텍스트 (보조) | `rgba(255,255,255,0.4)` |
| 액센트 | `#C9A84C` (골드) |
| 구분선 | `rgba(255,255,255,0.08)` |
| selection | `selection:bg-[#C9A84C] selection:text-black` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-[60px]
섹션 간격: p-12 md:p-20
```

---

## 타이포그래피

### 섹션 라벨
```
text-[0.65rem] uppercase font-bold tracking-[0.3em] text-[#C9A84C]
```

### 히어로 타이틀 (h1)
```
text-[clamp(3.5rem,6.5vw,7rem)] font-bold tracking-[-0.03em] leading-[0.95]
```

### 섹션 제목 (h2)
```
text-[clamp(2rem,3.5vw,3.2rem)] font-extrabold tracking-tight leading-[1.1]
```

### 본문
```
text-[0.9rem] font-light leading-[1.7] text-white/40
```

---

## 버튼

### Primary (골드)
```
bg-[#C9A84C] text-black px-7 py-[0.65rem]
text-[0.68rem] uppercase font-bold tracking-[0.16em]
hover:opacity-85 transition-opacity
```

### Secondary (아웃라인)
```
border border-white/25 text-white px-5 py-2
text-[0.68rem] uppercase font-bold tracking-[0.14em]
hover:border-white transition-colors
```

### 텍스트 링크
```
text-[0.72rem] uppercase font-semibold tracking-[0.16em] text-white
hover:translate-x-1.5 transition-all duration-500
```

---

## 이미지

```
Hero:    w-full h-full object-cover object-[center_40%]
섹션:    w-full h-full object-cover group-hover:scale-105 duration-[1s]
그림자:  drop-shadow-[0_50px_100px_rgba(0,0,0,0.85)]
```

---

## 구분선

```
border-t border-white/[0.08]
갭 분리: gap-[1px] bg-white/[0.08]
```

---

## 폰트

- Heading: `Inter` (sans-serif, 700~900)
- Body: `Inter` (sans-serif, 300)

> serif italic 혼합 사용 금지 — theme.json 미정의

---

## 수정 필요 사항

### 디자인
- [ ] Testimonials와 News 섹션 레이아웃 구조 불일치 → 카드 컴포넌트 통일
- [ ] Stats 수치 단위 폰트 크기 `0.5em` → `0.6em` 가독성 개선
- [ ] Hero 이탤릭 텍스트 혼합 제거 → 전체 upright 유지
- [ ] 섹션별 패딩 `p-12 md:p-20` 혼용 → `py-24 md:py-32` 통일

### 빠진 메뉴
- [ ] Gallery / 미디어 페이지
- [ ] Specs / 상세 제원 페이지
- [ ] Reviews / 시승 후기
- [ ] Support / 고객지원
- [ ] Test Drive 예약

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] 고정 네비 아래 콘텐츠 겹침 방지 `pt` 값 없음
- [ ] Testimonials 가로 스크롤 스냅 없음
- [ ] Configure CTA 버튼 → 실제 컨피규레이터 페이지 없음
- [ ] 통계 수치 카운트업 애니메이션 없음
