# Furniture 템플릿 디자인 룰 (Vinuspread)

## 브랜드 무드
모던 에센셜 홈퍼니싱. 애플 스타일 미니멀, 대문자 타이포, 여백으로 고급감 표현.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (메인) | `#FFFFFF` |
| 배경 (섹션) | `#F5F5F7` |
| 텍스트 (기본) | `#1D1D1F` |
| 텍스트 (보조) | `#6E6E73` |
| 구분선 | `black/5`, `black/10` |
| selection | `selection:bg-black selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6 md:px-12
섹션 간격: py-24 (소) / py-32 (대)
```

---

## 타이포그래피

> **uppercase 통일** — 모든 제목에 대문자 적용

### 섹션 라벨
```
text-[12px] uppercase font-bold text-[#6E6E73]
```

### 히어로 (h1)
```
text-[clamp(2rem,5vw,6rem)] md:text-[clamp(3rem,6vw,7rem)]
font-bold uppercase leading-[1.05]
```

### 섹션 제목 (h2)
```
text-[clamp(1.75rem,5vw,4rem)] font-bold uppercase leading-[1.05]
```

### 제품명 (h3)
```
text-[17px] font-bold uppercase
```

### 카테고리 (h4)
```
text-[11px] font-bold uppercase
```

### 본문
```
text-xl font-medium leading-relaxed text-[#6E6E73]
```

### 제품 설명
```
text-[13px] font-medium leading-relaxed text-zinc-500
```

### 가격
```
text-[14px] font-bold text-[#1D1D1F]
```

---

## 버튼

### Primary (라운드)
```
bg-[#1A1A1A] text-white px-12 py-5 rounded-full
text-[15px] font-bold
hover:bg-black transition-all
```

### 링크형
```
text-[14px] font-bold uppercase text-[#1D1D1F]
border-b-2 border-black pb-2
hover:opacity-50 transition-all
```

### 아이콘 원형
```
w-12 h-12 rounded-full border border-black/10
flex items-center justify-center
group-hover:bg-[#1A1A1A] group-hover:text-white transition-all
```

---

## 이미지

```
상품 단독:  object-contain (흰 배경)
배너/스토리: object-cover group-hover:scale-105 duration-[4s]
카테고리:   group-hover:scale-110 duration-700
```

---

## 구분선

```
border-b border-black/5
border-t border-black/5
h-[2px] w-16 bg-black (강조선)
```

---

## 폰트

- Heading: `Outfit` (sans-serif)
- Body: `Inter` (sans-serif)

---

## 수정 필요 사항

### 디자인
- [ ] 섹션 라벨 4가지 스타일 혼용 → `text-[12px] uppercase font-bold text-[#6E6E73]` 통일
- [ ] Stats 섹션 배경 `#F5F5F7`이 theme.json 미정의 → 변수화
- [ ] Newsletter input 배경 `#F5F5F7` → theme 변수 통일
- [ ] 헤더 스크롤 후 배경색 전환 hardcoded → CSS 변수화

### 빠진 메뉴
- [ ] 모바일 햄버거 메뉴 미구현
- [ ] 상품 상세 페이지 확인 필요
- [ ] 카테고리 필터 페이지
- [ ] 장바구니 / 위시리스트
- [ ] 검색 페이지

### UX 개선
- [ ] 히어로 슬라이더 자동재생 없음 → 자동재생 + 정지 버튼 추가
- [ ] "See All Items" → 실제 페이지 연결 필요
- [ ] 장바구니 기능 연동 필요
- [ ] 검색 버튼 기능 미구현
- [ ] 뉴스레터 폼 submit 처리 없음
- [ ] 카테고리 필터링 기능 없음
