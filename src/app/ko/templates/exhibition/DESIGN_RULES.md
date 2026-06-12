# Exhibition 디자인 룰

## 색상

배경색은 페이지 성격에 따라 자유롭게 사용. 단, 텍스트·불투명도는 아래 기준을 따른다.

| 구분 | 텍스트 불투명도 기준 |
|------|---------------------|
| 다크 배경 위 | 섹션 라벨 `white/40` · 본문 `white/60` · 구분선 `white/10` |
| 라이트 배경 위 | 섹션 라벨 `black/40` · 본문 `black/60` · 구분선 `black/10` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16
히어로 섹션: 패딩 없음 (fixed 헤더가 위에 오버레이)
일반 섹션 간격: py-24 / py-32 / py-40
```

---

## 타이포그래피

### 섹션 라벨 (소제목)
```
text-[10px] uppercase font-bold tracking-[0.5em]
다크: text-white/40   라이트: text-black/40
```

### 히어로 타이틀 (h1)
```
text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter
```

### 섹션 제목 (h2)
```
text-4xl md:text-6xl font-serif tracking-tighter leading-[0.9]
```

### 서브 제목 (h3)
```
text-3xl md:text-5xl font-serif tracking-tighter
```

### 본문
```
text-base md:text-lg font-light leading-relaxed
다크: text-white/60   라이트: text-black/60
```

### 작은 본문
```
text-sm font-light leading-relaxed
다크: text-white/50   라이트: text-black/50
```

> **이탤릭 금지** — `font-serif` 자체로 충분한 격식을 갖춤

---

## 버튼

### 기본 (아웃라인)
```
border border-white/20 px-10 py-5
text-xs uppercase tracking-[0.5em] font-bold
hover:bg-[#F9F6F0] hover:text-[#0F0F0F] transition-all duration-500
```

### 링크형
```
inline-flex items-center gap-4
text-xs uppercase tracking-[0.5em] font-bold
border-b border-current pb-1
```

### 카테고리 필터
```
px-6 py-2 rounded-full
text-[10px] uppercase font-bold tracking-[0.3em]
border border-white/10 → 활성: bg-[#F9F6F0] text-[#0F0F0F]
```

---

## 이미지

```
기본 상태:  grayscale opacity-70
호버 상태:  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105
트랜지션:   transition-all duration-[2s] ease-out
```

---

## 구분선

```
다크: border-t border-white/10
라이트: border-t border-black/10
옅은 구분: border-white/5 / border-black/5
```

---

## 애니메이션

### 기본 등장
```js
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```

### 스크롤 등장
```js
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.8 }}
```

### Stagger (목록)
```js
// 부모
variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
// 자식 딜레이
transition={{ delay: i * 0.1, duration: 0.8 }}
```

---

## 수정 필요 사항

### 디자인
- [ ] exhibitions/page.tsx 배경 `#0A0A0A` → `#0F0F0F`로 통일
- [ ] our-story 타임라인 연도 텍스트 너무 옅음 (`text-white/15`) → `text-white/25`
- [ ] souvenir 페이지 섹션 라벨 tracking 일부 `0.6em` → `0.5em` 통일
- [ ] curator-note 페이지 컨테이너 `max-w-4xl` 유지 (의도적 narrow) — 변경 금지
- [ ] collections 그리드 갭 모바일/데스크톱 통일 필요 (`gap-4 md:gap-6`)

### 빠진 메뉴
- [ ] Tickets / 예약 전용 페이지 없음 (현재 Drawer만 존재)
- [ ] 전시 지도(Map) / 관람 안내 페이지 없음
- [ ] 오디오 가이드 전용 페이지 없음
- [ ] FAQ / 관람 정보 페이지 없음
- [ ] 이벤트 / 교육 프로그램 페이지 없음

### UX 개선
- [ ] 모바일에서 GNB 메뉴 항목 숨겨짐 — 모바일 전용 하단 탭바 필요
- [ ] collections 페이지 — 작품 클릭 시 상세로 이동 전 로딩 상태 없음
- [ ] collections/[slug] 상세 — 관련 작품 추천 섹션 없음
- [ ] souvenir 페이지 — 장바구니 기능 없이 Inquire만 존재
- [ ] 예약(Drawer) — 날짜/인원 선택 후 확인 이메일 발송 없음
- [ ] 전체 사이트 — 검색 기능 없음
- [ ] Footer — SNS 링크 실제 연결 안 됨 (href="#")
