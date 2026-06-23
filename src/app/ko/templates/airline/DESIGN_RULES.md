# Airline 템플릿 디자인 룰 (Vinus Air)

## 브랜드 무드
프리미엄 럭셔리 항공. 골드 액센트 + 네이비 다크 배경. 신뢰감과 고급감 동시 표현.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (라이트) | `#FFFFFF` |
| 배경 (다크) | `#05152E` |
| 텍스트 (기본) | `#0D0D0D` |
| 텍스트 (보조) | `#7A7A7A` |
| 액센트 | `#C9A84C` (골드) |
| 액센트 호버 | `#E8D49A` |
| 구분선 | `#E8E6E0` |
| selection | `selection:bg-[#C9A84C] selection:text-[#05152E]` |

---

## 레이아웃

```
컨테이너:  max-w-[1320px] mx-auto px-10
섹션 간격: py-24
```

---

## 타이포그래피

### 섹션 라벨
```
text-[0.6rem] uppercase font-bold tracking-[0.35em] text-[#C9A84C]
```

### 히어로 타이틀 (h1)
```
font-serif text-[clamp(2.4rem,4.8vw,4.5rem)] font-bold tracking-tight leading-[1.1]
```

### 섹션 제목 (h2)
```
font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight leading-[1.15]
```

### 본문
```
text-[0.95rem] font-light leading-[1.82] text-[#7A7A7A]
```

---

## 버튼

### Primary (골드)
```
bg-[#C9A84C] text-[#05152E] px-9 py-3.5
text-[0.72rem] uppercase font-bold tracking-[0.14em]
hover:bg-[#E8D49A] transition-all duration-300
```

### Secondary (아웃라인)
```
border border-white/30 text-white px-9 py-3.5
text-[0.72rem] uppercase font-semibold tracking-[0.14em]
hover:bg-white/5
```

### 텍스트 링크
```
text-[0.72rem] uppercase font-semibold tracking-[0.14em] text-[#05152E]
hover:translate-x-1.5 transition-all duration-300
```

---

## 이미지

```
비율:      w-full h-[400px] object-cover
그리드:    2열, gap-[4px]
호버:      없음 (정적 이미지)
```

---

## 구분선

```
다크 섹션: border-t border-white/10
라이트 섹션: border-b border-[#eee]
```

---

## 폰트

- Heading: `Playfair Display` (serif)
- Body: `Inter` (sans-serif)

---

## 수정 필요 사항

### 디자인
- [ ] 버튼 호버 효과 혼용 (translate vs opacity) → `hover:opacity-85` 또는 `hover:brightness-110`으로 통일
- [ ] SearchWidget의 비활성 필드 `italic` 제거 → `text-[#05152E]/30`으로만 처리
- [ ] Hero 탭 버튼 `rounded-full` → `rounded-none`으로 브랜드 톤 통일
- [ ] 섹션 라벨 폰트 크기 `0.6rem` → `0.65rem` 가독성 개선

### 빠진 메뉴
- [ ] Contact Us 페이지
- [ ] FAQ / Help Center
- [ ] Check-in 페이지
- [ ] Flight Status 조회

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음 (md 미만에서 GNB 완전 숨겨짐)
- [ ] SearchWidget z-index 조정 필요 (`mt-[-2.5rem]` 겹침)
- [ ] 폼 필드 클릭 가능 여부 시각적으로 불명확
- [ ] 버튼 폰트 크기 `0.68~0.72rem` → 접근성 기준 `0.75rem` 이상 권장
- [ ] 날짜 선택 UI 없음 (텍스트 필드만 존재)
