# Portfolio 템플릿 디자인 룰

## 브랜드 무드
미니멀 브루탈리즘. 블랙-화이트 강한 대비, `font-black` 타이포, 핫핑크 액센트.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 | `#FFFFFF`, `#000000` |
| 텍스트 | `#000000`, `#FFFFFF` |
| 액센트 | `#ED008C` (핫핑크) |
| 보조 텍스트 | `#707070` |
| 구분선 | `rgba(0,0,0,0.1)` |
| selection | `selection:bg-[#ED008C] selection:text-white` |

---

## 레이아웃

```
컨테이너:  max-w-[1440px] mx-auto px-6
섹션 간격: py-48 (대) / py-32 (중) / py-24 (소)
```

---

## 타이포그래피

> **font-black** 기본 — 모든 제목에 통일

### 섹션 라벨
```
text-[13px] font-black uppercase tracking-tight text-[#ED008C]
```

### 히어로 (h1)
```
text-[7vw] font-black uppercase leading-none tracking-tighter text-white
```

### 섹션 제목 (h2)
```
text-3xl md:text-5xl font-black tracking-tighter leading-none
```

### 카드 제목 (h3)
```
text-2xl font-black tracking-tighter
```

### 본문
```
text-[16px] font-medium leading-relaxed text-[#707070]
```

### 메타
```
text-[12px] font-black tracking-tight text-[#707070]
```

---

## 버튼

```
border border-[#ED008C] text-[#ED008C] px-20 py-8
text-[11px] font-black uppercase tracking-tight
hover:bg-[#ED008C] hover:text-black transition-all
```

---

## 이미지

```
비율:      aspect-[4/5]
필터:      grayscale brightness-90 contrast-105
호버:      group-hover:scale-105 duration-1000
```

---

## 구분선

```
border-b border-black/10
border-b-2 border-black (강조)
border-b border-white/10 (다크 섹션)
```

---

## 폰트

- 전체: `Inter` (sans-serif)
- 두께: `font-black` 위주

---

## 수정 필요 사항

### 디자인
- [ ] 섹션 라벨 투명도 혼용 (`#ED008C` / `#ED008C/50` / `#ED008C/40`) → 불투명 통일
- [ ] h2 크기 `text-3xl` vs `text-[3.5vw]` 혼용 → `text-3xl md:text-5xl` 통일
- [ ] Footer 링크 `text-sm` vs `text-[12px]` 혼용 → `text-[12px]` 통일

### 빠진 메뉴
- [ ] 프로젝트 상세 페이지
- [ ] 서비스 페이지
- [ ] 팀 프로필 페이지
- [ ] 블로그/저널 페이지
- [ ] Contact 폼 페이지

### UX 개선
- [ ] 모바일 햄버거 메뉴 없음
- [ ] 프로젝트 카드 → 상세 페이지 링크 미연결
- [ ] 카테고리 필터 없음 (All / Branding / Web / Product)
- [ ] 이미지 라이트박스 없음
- [ ] WCAG AA 대비 확인 필요 (`#707070` on white)
