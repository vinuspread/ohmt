# Studio 템플릿 디자인 룰

## 브랜드 무드
건축·공간 디자인 스튜디오. 다크 미니멀, 정밀한 타이포, 패럴렉스 스크롤.

---

## 색상

| 구분 | 값 |
|------|-----|
| 배경 (다크) | `#18181b`, `#111111`, `#000000` |
| 배경 (라이트) | `#FFFFFF` |
| 텍스트 (다크 위) | `#FFFFFF` |
| 텍스트 (라이트 위) | `#1A1A1A` |
| 보조 텍스트 | `white/60`, `black/40` |
| 구분선 | `white/10`, `black/10` |
| selection | `selection:bg-white selection:text-black` |

---

## 레이아웃

```
컨테이너:  max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24
섹션 간격: py-24 (소) / py-32 (중) / py-40 (대)
```

---

## 타이포그래피

### 섹션 라벨
```
text-[10px] uppercase font-bold tracking-widest
다크 위: text-white/40   라이트 위: text-black/40
font-mono 사용 (메타 정보)
```

### 히어로 (h1)
```
text-[clamp(3.5rem,8.5vw,7.5rem)] font-bold leading-[0.85]
```

### 섹션 제목 (h2)
```
text-4xl lg:text-6xl font-bold leading-[0.95]
```

### 서브 제목 (h3)
```
text-lg md:text-2xl font-bold
```

### 본문
```
text-[14px] md:text-[16px] font-light leading-[1.7]
다크 위: text-white/60   라이트 위: text-black/50
```

---

## 버튼

```
h-[40px] px-8 rounded-full border
text-[10px] uppercase font-bold tracking-[2.5px]
다크: border-white/30 text-white bg-white/10 hover:bg-white hover:text-black
라이트: border-black/15 text-black hover:bg-black hover:text-white
transition-all duration-500
```

---

## 이미지

```
비율:      aspect 자유 (건축 사진)
필터:      brightness-[0.60] (히어로)
호버:      group-hover:scale-105 duration-[1.5s]
패럴렉스:  useTransform(scrollY) 활용
```

> `scale-102` 유효하지 않은 클래스 → `scale-105`로 교체

---

## 구분선

```
다크: border-t border-white/10
라이트: border-t border-black/10
```

---

## 폰트

- Heading: `Outfit` (sans-serif)
- Body: `Inter` (sans-serif)
- Meta: `font-mono`

---

## 수정 필요 사항

### 디자인
- [ ] `scale-102` (유효하지 않은 Tailwind) → `scale-105`로 전체 교체
- [ ] white 불투명도 단계 과다 (`/10`, `/20`, `/25`, `/40`, `/60`, `/70`, `/80`) → 3단계로 축소
- [ ] h1 정의 2가지 (`clamp` vs 고정 px) → `clamp` 통일
- [ ] 패딩 `px-[64px]` vs `px-8 md:px-16 lg:px-24` 혼용 → CSS 변수 통일
- [ ] 버튼 스타일 페이지 상태마다 3가지 → 2가지로 단순화
- [ ] `font-bold` / `font-semibold` / `font-light` 혼용 → 계층 명확화

### 빠진 메뉴 (뼈대만 있음)
- [ ] About 페이지 내용
- [ ] Services 페이지 내용
- [ ] Contact 페이지 내용
- [ ] 프로젝트 상세 페이지
- [ ] Blog/Journal 페이지 (컴포넌트는 존재)

### UX 개선
- [ ] 미사용 컴포넌트 6개 정리 (NewsSection, TeamSection, InspirationSection 등)
- [ ] 모바일 햄버거 메뉴 기능 미구현
- [ ] 프로젝트 클릭 → 상세 페이지 미연결
- [ ] 캐러셀 자동재생 5초 → 사용자 제어 추가
- [ ] CustomCursor.tsx 미사용 → 적용 또는 삭제
- [ ] Next Image 미사용 구간 → `next/image` 통일
