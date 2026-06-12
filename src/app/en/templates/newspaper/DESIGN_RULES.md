# Newspaper 템플릿 디자인 룰 (Vinus Times)

## 브랜드 무드
고전 저널리즘 감성의 미니멀리스트 신문. 신뢰감과 진중함, 타이포그래피 중심.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#FFFFFF` |
| 텍스트 (기본) | `#111111` |
| 텍스트 (보조) | `#555555` |
| 액센트 | `#C41E3A` (레드) |
| 액센트 다크 | `#9B1528` |
| 구분선 | `#DDDDDD` |
| selection | `selection:bg-[#C41E3A] selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1280px] mx-auto px-8
섹션 간격: py-8 (소) / py-12 (중)
```

---

## 타이포그래피

### 섹션 라벨
```
text-[0.7rem] uppercase font-bold tracking-[0.14em] text-[#C41E3A]
```

### 마스트헤드 (신문 제호)
```
text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tighter font-serif
```

### 기사 제목 (h1)
```
font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] font-bold leading-[1.15]
```

### 섹션 제목 (h2)
```
font-serif text-2xl font-bold
```

### 카드 제목 (h3)
```
font-serif text-[1.1rem] font-bold leading-tight
```

### 본문
```
text-[1.05rem] font-sans leading-[1.6] text-[#555]
```

### 캡션/메타
```
text-[0.78rem] uppercase font-medium text-[#555]
```

---

## 버튼

```
bg-[#C41E3A] text-white px-4 py-1.5
text-[0.75rem] uppercase font-bold tracking-wide
hover:bg-[#9B1528] transition-all
```

---

## 이미지

```
히어로:    w-full h-[420px] object-cover
썸네일:    w-24 h-20 object-cover
중간:      h-48 object-cover
필터:      없음 (컬러 유지)
```

---

## 구분선

```
굵은 선:  border-b-2 border-black
일반 선:  border-b border-[#DDD]
헤더:     border-y border-[#DDD]
```

---

## 폰트

- Heading: `Playfair Display` (serif) — 기사/섹션 제목
- Body: `Georgia` / `sans-serif` — 본문

---

## 수정 필요 사항

### 디자인
- [ ] 링크 호버 색상 혼용 → `hover:text-[#C41E3A]` 통일
- [ ] 네비 텍스트 크기 `0.75rem` / `0.78rem` 혼용 → `0.75rem` 통일
- [ ] 마스트헤드 크기 `clamp` vs 고정값 혼용 → clamp 통일
- [ ] `font-sans` 클래스가 실제 Georgia(serif) 렌더링 → 클래스명 정정 필요

### 빠진 메뉴
- [ ] 카테고리별 아카이브 페이지
- [ ] 기사 상세 페이지 (싱글 아티클)
- [ ] 작성자 프로필 페이지
- [ ] 검색 결과 페이지
- [ ] 뉴스레터 구독 섹션

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] 검색 UI 없음 (기능 미구현)
- [ ] 기사 더보기 / 페이지네이션 없음
- [ ] 브레이킹 뉴스 티커 속도 하드코딩 (30s) → 변수화
- [ ] 이미지 스켈레톤 로더 없음
