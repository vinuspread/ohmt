# Cosmetic 템플릿 디자인 룰 (Vinuspread)

## 브랜드 무드
천연 미니멀 스킨케어. 크림 베이지 + 라이트 폰트 웨이트. 여백과 순수함으로 신뢰 표현.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (메인) | `#F9F6F2` |
| 배경 (화이트) | `#FFFFFF` |
| 배경 (카드) | `#EFECE6` |
| 배경 (다크) | `#000000` |
| 텍스트 (기본) | `#000000` |
| 텍스트 (보조) | `#666666` |
| 구분선 | `rgba(0,0,0,0.08)` |
| selection | `selection:bg-black selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-10
상단 여백: pt-48 (배너 38px + 네비 80px 고려)
섹션 간격: py-24 (소) / py-32 (대)
```

---

## 타이포그래피

> **Light 웨이트** 유지 — `font-bold`는 라벨/버튼에만

### 섹션 라벨
```
text-[0.75rem] uppercase font-bold tracking-[0.15em] text-[#666]
```

### 히어로 타이틀 (h1)
```
text-[36px] md:text-[56px] font-light leading-[1.15]
```

### 섹션 제목 (h2)
```
text-[2.8rem] font-light leading-[1.15]
```

### 카드 제목 (h3)
```
text-[1rem] font-light
```

### 본문
```
text-[0.95rem] leading-[1.9] text-[#666] font-normal
```

### 가격
```
text-[0.9rem] font-normal text-black/70
```

---

## 버튼

### Primary (다크)
```
bg-black text-white px-10 py-4
text-[0.85rem] uppercase font-bold tracking-wider
hover:opacity-80 transition-opacity
```

### Secondary (아웃라인)
```
border border-black text-black px-10 py-4
text-[0.85rem] uppercase font-bold tracking-wider
hover:bg-black hover:text-white transition-all
```

### 카드 호버 버튼
```
w-full py-3.5 border border-black text-black
text-[0.82rem] uppercase font-bold tracking-widest
opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
transition-all duration-300
```

---

## 이미지

```
비율:      aspect-[3/4] (상품)
높이:      h-[480px] (그리드)
배경:      bg-[#EFECE6]
호버:      group-hover:scale-105 duration-700
필터:      없음 (컬러 유지)
```

---

## 구분선

```
border border-black/10
border-t border-black/10
```

---

## 폰트

- 전체: `Inter` (sans-serif)
- Light(300): 제목, 본문
- Bold(700): 라벨, 버튼

---

## 수정 필요 사항

### 디자인
- [ ] 상단 배너 + 네비 = 118px → 모든 페이지 `pt-[118px]` 통일 (현재 일부만 `mt-20`)
- [ ] 상품 가격 `text-black/40` → `text-black/70`으로 가독성 개선
- [ ] Footer 링크 `opacity-50` → `opacity-70`으로 가독성 개선
- [ ] 마퀴 애니메이션 duration `40s` → `25s`로 속도 개선
- [ ] Hero 상품 카드 이미지 `180px` vs ProductGrid `480px` 불일치

### 빠진 메뉴
- [ ] Ingredients / 성분 상세 페이지
- [ ] Routine Guide / 사용법
- [ ] Reviews / 후기
- [ ] Subscription / 정기구독
- [ ] Live Chat / 실시간 상담

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] 장바구니/찜하기 기능 UI만 존재 (동작 안 함)
- [ ] 상품 클릭 → 상세 페이지 연결 없음
- [ ] 검색 기능 없음
- [ ] 이메일 구독 폼 미구현
- [ ] 상품 필터(피부타입, 성분, 가격대) 없음
