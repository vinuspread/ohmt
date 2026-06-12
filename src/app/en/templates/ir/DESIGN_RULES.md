# IR 템플릿 디자인 룰 (Investor Relations)

## 브랜드 무드
기업 IR. 네이비 + 골드로 신뢰·권위 표현. 데이터 중심, 간결하고 전문적.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#FFFFFF` |
| 배경 (섹션) | `#F5F5F3` |
| 배경 (다크) | `#0D1F3C` (네이비) |
| 텍스트 (기본) | `#111111` |
| 텍스트 (보조) | `#6B6B6B` |
| 액센트 | `#B8962E` (골드) |
| 구분선 | `#E2E2E0` |
| 상승 | `#1a8a4a` (초록) |
| 하강 | `#c0392b` (빨강) |
| selection | `selection:bg-[#B8962E] selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1280px] mx-auto px-10
섹션 간격: py-24
```

---

## 타이포그래피

### 섹션 라벨
```
text-[0.62rem] uppercase font-bold tracking-[0.3em] text-[#B8962E]
```

### 히어로 (h1)
```
text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold tracking-tight leading-[1.08]
```

### 섹션 제목 (h2)
```
text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[#0D1F3C] leading-[1.2]
```

### 카드 제목 (h3)
```
text-[1.1rem] font-bold text-[#0D1F3C] leading-snug
```

### 본문
```
text-[0.88rem] font-light leading-[1.82] text-[#6B6B6B]
```

---

## 버튼

### Primary (화이트, 히어로용)
```
border border-white text-white px-8 py-3.5
text-[0.72rem] uppercase font-bold tracking-[0.14em]
hover:bg-white hover:text-[#0D1F3C] transition-all duration-300
```

### Secondary
```
border border-white/25 text-white/75 px-8 py-3.5
text-[0.72rem] uppercase font-semibold tracking-[0.14em]
hover:border-white hover:text-white transition-all duration-300
```

### 아웃라인 (라이트 섹션)
```
border border-[#0D1F3C] text-[#0D1F3C] px-5 py-2
text-[0.68rem] uppercase font-bold tracking-[0.14em]
hover:bg-[#0D1F3C] hover:text-white transition-all duration-300
```

---

## 이미지

```
섹션 이미지: w-full h-[500px] object-cover
히어로 배경: opacity-10 (거의 안 보임)
```

---

## 구분선

```
border border-[#E2E2E0]
border-b border-[#E2E2E0]
KPI 그리드: gap-[1px] bg-[#E2E2E0]
```

---

## 폰트

- 전체: `Inter` (sans-serif)

---

## 수정 필요 사항

### 디자인
- [ ] 섹션 라벨 tracking 혼용 (`0.3em` / `0.2em`) → `0.3em` 통일
- [ ] 뉴스 태그 배경색 hardcoded (Earnings/Dividend/ESG별 다른 색상) → theme 변수화
- [ ] KPI 변동률 색상 hardcoded → CSS 변수 `--color-up` / `--color-down` 으로 분리
- [ ] Footer/Header 링크 hover 상태 불일치 → 통일

### 빠진 메뉴 (모두 `/ir`로만 연결)
- [ ] Overview 상세 페이지
- [ ] Financials 페이지 (실적 데이터)
- [ ] Governance 페이지
- [ ] News 아카이브 페이지
- [ ] Contact IR 팀 페이지
- [ ] Shareholder Portal
- [ ] CEO Letter 페이지
- [ ] 분기 보고서 다운로드

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] KPI 주가 데이터 실시간 연동 없음 (정적 데이터)
- [ ] 상단 배너 닫기 버튼 없음
- [ ] "Read more" / "View All" 링크 미연결
- [ ] 뉴스 아이템 hover 효과 미미함 → 배경색 변경 추가
