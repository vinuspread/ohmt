# 작업지시서: 모바일 햄버거 메뉴 전면 개편 (Circular Reveal)

## 목적

현재 모바일 헤더의 햄버거 메뉴는 화면 상단에 작은 드롭다운으로 붙어 있어 존재감이 약하다.
햄버거 버튼 중심에서 시작되는 Circular Reveal(원형 확장) 애니메이션과 함께,
메뉴 항목이 화면 전체를 채우는 풀스크린 오버레이 메뉴로 개편한다.

**중요**: 새로운 외부 라이브러리를 설치하지 않는다. 이미 설치된 `framer-motion`, `lucide-react`만 사용한다.

---

## 수정 파일

아래 두 파일을 **동일한 방식**으로 수정한다. 두 파일은 구조가 완전히 동일하며(en/ko 텍스트만 다름), 한쪽에서 검증한 로직을 그대로 다른 쪽에 반영하면 된다.

- `src/app/ko/LandingPageClient.tsx`
- `src/app/en/LandingPageClient.tsx`

두 파일 모두 이 프로젝트에서 `src/components/`의 공용 컴포넌트를 쓰지 않고 완전히 독립적으로 존재한다(`CLAUDE.md`의 템플릿 독립 구조 규칙). 새 컴포넌트를 만들 경우 두 파일에 각각 동일한 로직을 인라인으로 넣거나, 각 파일 내부에 로컬 함수 컴포넌트를 선언하는 방식을 쓴다. `src/components/`에 새 파일을 추가하지 말 것.

---

## 1. 현재 구조 분석

### 1-1. 상태값 (두 파일 공통, 약 117번째 줄)

```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### 1-2. 헤더 마크업 (약 281~315번째 줄, `ko` 기준)

```tsx
{/* Header */}
<header className={`bg-white border-b border-zinc-200/60 px-5 sm:px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40 transition-transform duration-300 dark:bg-zinc-900 dark:border-zinc-800 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}>
  <div className="flex items-center gap-8">
    <Link href="/ko" className="flex items-center gap-3 h-6">
      <Logo className="h-6 w-auto block" />
    </Link>
    <nav className="hidden md:flex items-center gap-6 text-[0.82rem] font-bold text-zinc-500 tracking-wider dark:text-zinc-400">
      <a href="#directions" ...>서비스소개</a>
      <a href="#templates" ...>템플릿</a>
      <a href="#pricing" ...>가격</a>
      <a href="#process" ...>프로세스</a>
      <a href="#faq" ...>FAQ</a>
    </nav>
  </div>
  <div className="flex items-center gap-3 sm:gap-6">
    <Link href="/en" className="hidden sm:inline-flex ...">EN</Link>
    <Link href="/ko/contact" className="inline-flex items-center justify-center bg-[#F1B100] hover:bg-[#d99e00] text-zinc-900 text-[0.7rem] sm:text-xs font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 transition-colors duration-200 rounded-md whitespace-nowrap">
      제작 상담 신청
    </Link>
    <button
      type="button"
      onClick={() => setMobileMenuOpen((prev) => !prev)}
      aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={mobileMenuOpen}
      className="md:hidden flex items-center justify-center w-8 h-8 text-zinc-700 hover:text-zinc-900 transition-colors dark:text-zinc-300 dark:hover:text-zinc-100"
    >
      {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>
</header>
```

이 헤더 안의 `<Logo>`, `EN` 링크, `제작 상담 신청` 버튼, 햄버거 버튼은 **그대로 유지**한다(레이아웃/사이즈 미세 조정은 7번 항목 참고).

### 1-3. 현재 모바일 메뉴 드롭다운 (약 317~336번째 줄)

```tsx
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="md:hidden fixed top-[64px] left-0 right-0 z-30 bg-white border-b border-zinc-200/60 px-5 py-4 flex flex-col gap-4 text-sm font-bold text-zinc-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
    >
      <a href="#directions" onClick={() => setMobileMenuOpen(false)} ...>서비스소개</a>
      <a href="#templates" onClick={() => setMobileMenuOpen(false)} ...>템플릿</a>
      <a href="#pricing" onClick={() => setMobileMenuOpen(false)} ...>가격</a>
      <a href="#process" onClick={() => setMobileMenuOpen(false)} ...>프로세스</a>
      <a href="#faq" onClick={() => setMobileMenuOpen(false)} ...>FAQ</a>
      <Link href="/en" onClick={() => setMobileMenuOpen(false)} className="sm:hidden ...">EN</Link>
    </motion.nav>
  )}
</AnimatePresence>
```

이 블록 전체(`<AnimatePresence>` ~ `</AnimatePresence>`)를 이번 작업 대상으로 삼아 **완전히 새로운 풀스크린 오버레이 메뉴**로 교체한다.

en 파일의 동일 블록은 텍스트만 다음과 같이 다르다: `Services`, `Templates`, `Pricing`, `Process`, `FAQ`, `Get Started`(헤더 버튼), `KR`(언어 전환 링크). aria-label도 `"Close menu"` / `"Open menu"`.

### 1-4. 데스크톱 영향 범위

`md:hidden` / `hidden md:flex` 클래스로 이미 데스크톱과 완전히 분리되어 있다. 이번 작업은 **`md:hidden` 조건 안에서만** 동작하도록 만들어 데스크톱 헤더/네비게이션에는 어떤 영향도 주지 않는다. 작업 후 1440px 데스크톱 화면에서 기존과 동일하게 보여야 한다.

---

## 2. Circular Reveal 구현 방식

### 2-1. 기본 원리

- `clip-path: circle(<반지름> at <x> <y>)`를 이용해 오버레이 `div`를 원형으로 마스킹한다.
- 열 때: 반지름을 `0px`에서 "화면 전체를 덮는 값"까지 애니메이션.
- 닫을 때: 반대로 "화면 전체를 덮는 값"에서 `0px`로 애니메이션.
- 원의 중심(`at x y`)은 **햄버거 버튼의 실제 중심 좌표**를 사용한다(4번 항목 참고).

### 2-2. framer-motion으로 구현

`clip-path`는 `motion.div`의 `animate`/`initial`/`exit` prop에 문자열로 직접 넣을 수 있다(framer-motion이 임의 CSS 속성 애니메이션을 지원). 예:

```tsx
<motion.div
  initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
  animate={{ clipPath: `circle(${radius}px at ${origin.x}px ${origin.y}px)` }}
  exit={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
  transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
  style={{ position: "fixed", inset: 0 }}
  className="z-50 bg-zinc-950"
>
  {/* 메뉴 콘텐츠 */}
</motion.div>
```

- `duration`: 0.5~0.65초 (요구사항 500~650ms)
- `ease`: 과도한 bounce 없는 부드러운 커스텀 큐빅베지어 사용. 예시로 `[0.65, 0, 0.35, 1]`(easeInOutCubic 계열) 또는 framer-motion 기본 `"easeInOut"` 사용 가능. `type: "spring"`은 사용하지 않는다(바운스 방지 요구사항).
- 닫힘 애니메이션은 `AnimatePresence`의 `exit`로 자동 처리되며, 같은 좌표로 축소되도록 `exit`의 `clipPath` 중심도 동일한 `origin` 좌표를 사용해야 한다(닫는 시점에 버튼이 스크롤 등으로 위치가 바뀌었을 수 있으므로, 열 때 캡처한 좌표를 state로 유지해 열림→닫힘 내내 동일 좌표를 쓴다. 자세한 내용은 4번 항목).

### 2-3. 메뉴 콘텐츠의 별도 페이드/슬라이드

`clip-path` 애니메이션은 오버레이 배경(원)에만 적용하고, 메뉴 항목 리스트는 **별도의 `motion` 자식 요소**로 오버레이 위에 얹어 opacity/translateY로 순차 등장시킨다(4번 항목의 stagger 참고). 즉 구조는:

```tsx
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div /* 원형 확장 오버레이, 배경만 담당 */ ... >
      <MobileMenuContent /* 헤더 + 메뉴 리스트, 별도 opacity 애니메이션 */ />
    </motion.div>
  )}
</AnimatePresence>
```

---

## 3. 햄버거 버튼 중심 좌표 계산

### 3-1. ref 추가

햄버거 버튼에 `ref`를 달아 실제 DOM 위치를 읽는다.

```tsx
const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);
const [menuOrigin, setMenuOrigin] = useState({ x: 0, y: 0 });
```

### 3-2. 좌표 계산 함수

메뉴를 열 때(`onClick` 핸들러 내부) 버튼의 `getBoundingClientRect()`로 중심 좌표를 구해 state에 저장한다. **이 좌표는 메뉴가 열려 있는 동안 갱신하지 않고 고정**한다(리사이즈/스크롤 중에도 최초 클릭 시점 좌표 유지 → 닫을 때도 같은 지점으로 축소).

```tsx
const handleOpenMenu = () => {
  const rect = hamburgerBtnRef.current?.getBoundingClientRect();
  if (rect) {
    setMenuOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  }
  setMobileMenuOpen(true);
};

const handleCloseMenu = () => {
  setMobileMenuOpen(false); // origin은 그대로 두고 exit 애니메이션에 재사용
};
```

기존 `onClick={() => setMobileMenuOpen((prev) => !prev)}` 토글 방식 대신, 열기/닫기를 각각 명시적 함수로 분리한다(좌표 캡처 타이밍 때문). 헤더의 햄버거 버튼 `onClick`은:

```tsx
onClick={() => (mobileMenuOpen ? handleCloseMenu() : handleOpenMenu())}
```

### 3-3. 화면을 완전히 덮는 반지름 계산

원이 뷰포트의 가장 먼 모서리까지 덮어야 하므로, 4개 모서리까지의 거리 중 최댓값을 반지름으로 쓴다.

```tsx
const getCoverRadius = (origin: { x: number; y: number }) => {
  const { innerWidth, innerHeight } = window;
  const corners = [
    { x: 0, y: 0 },
    { x: innerWidth, y: 0 },
    { x: 0, y: innerHeight },
    { x: innerWidth, y: innerHeight },
  ];
  return Math.max(
    ...corners.map((corner) => Math.hypot(corner.x - origin.x, corner.y - origin.y))
  );
};
```

`handleOpenMenu` 안에서 `origin`을 구한 직후 `getCoverRadius(origin)`도 함께 계산해 state(`menuRadius`)에 저장하거나, 렌더링 시점에 `menuOrigin`으로부터 매번 계산해도 된다(값이 리렌더 중 바뀌지 않으므로 `useMemo`로 감싸도 무방).

SSR 안전성: `window`는 클라이언트에서만 접근 가능하므로 이 계산은 반드시 이벤트 핸들러(`onClick`) 내부 또는 `useEffect` 안에서만 실행한다. 컴포넌트 최상단에서 직접 `window.innerWidth`를 참조하지 않는다(이미 파일 최상단에 `"use client"` 선언이 있으나, 안전하게 이벤트 핸들러 내부 실행 원칙을 지킨다).

---

## 4. 메뉴 항목 등장 애니메이션 (stagger)

### 4-1. 타이밍 구조

1. 오버레이 원이 확장을 시작한다 (0ms).
2. 원이 화면의 약 60~70%까지 확장된 시점부터 메뉴 항목이 순차적으로 나타나기 시작한다. 원의 `duration`이 0.6초라면, 메뉴 항목 등장 시작 지연(`delay`)은 대략 `0.6 * 0.6 ≈ 0.36`초 전후로 설정한다(정확히 60~70%인 0.36~0.42초 사이 값 사용).
3. 각 메뉴 항목은 50~80ms 간격으로 순차 등장(`staggerChildren`).
4. 첫 항목(서비스소개/Services)부터 마지막 항목(FAQ) 순서로 나타난다.

### 4-2. framer-motion variants로 구현

```tsx
const menuListVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.38, staggerChildren: 0.065 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};
```

```tsx
<motion.ul variants={menuListVariants} initial="hidden" animate="visible" exit="hidden">
  {mobileNavItemsKo.map((item) => (
    <motion.li key={item.href} variants={menuItemVariants}>
      <a href={item.href} onClick={handleCloseMenu}>{item.label}</a>
    </motion.li>
  ))}
</motion.ul>
```

닫을 때는 `exit="hidden"`으로 메뉴 항목이 짧게 페이드아웃된 뒤(요구사항 5-1 "닫을 때" 순서), 부모 오버레이의 `exit` clip-path 축소가 이어지도록 `AnimatePresence`의 `mode`를 기본값(동시 진행)으로 두거나, 항목 페이드아웃이 매우 짧으므로(0.15~0.2초) 전체 체감상 자연스럽게 겹쳐도 무방하다. 메뉴 항목 배열은 다음과 같이 상수로 분리해두면 en/ko 각각 관리가 쉽다(파일 상단, `POPULAR_TAGS` 근처에 추가):

```tsx
// ko 파일
const mobileNavItemsKo = [
  { href: "#directions", label: "서비스소개" },
  { href: "#templates", label: "템플릿" },
  { href: "#pricing", label: "가격" },
  { href: "#process", label: "프로세스" },
  { href: "#faq", label: "FAQ" },
];
```

```tsx
// en 파일
const mobileNavItemsEn = [
  { href: "#directions", label: "Services" },
  { href: "#templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];
```

---

## 5. 최종 레이아웃 / 타이포그래피

### 5-1. 오버레이 구조

```
<motion.div (fixed inset-0, z-50, bg-zinc-950, clip-path 애니메이션)>
  <div (헤더 자리, 상단 고정, 기존 헤더와 동일한 padding)>
    로고 | 제작 상담 신청 버튼 | X 버튼
  </div>
  <div (flex-1, flex, flex-col, justify-center) -- 헤더 아래 남은 공간을 모두 차지, 세로 중앙 정렬>
    <motion.ul (메뉴 리스트, 왼쪽 정렬)>
      메뉴 항목 5개
    </motion.ul>
    <div (언어 전환, 메뉴 리스트와 간격을 두고 아래 배치)>
      EN / KR
    </div>
  </div>
</motion.div>
```

### 5-2. 상단 헤더 영역 (오버레이 내부 상단)

- 오버레이가 열려도 실제 페이지 상단의 `<header>`가 보이거나, 오버레이 내부에 동일한 구성을 다시 그린다. **권장: 기존 `<header>` 위에 오버레이를 `z-50`으로 덮고, 오버레이 자체 상단에 로고/상담버튼/X버튼을 다시 배치**한다(기존 `<header>`는 `z-40`이라 오버레이가 자연스럽게 위를 덮는다).
- 좌: `<Logo>` (기존과 동일 컴포넌트, 다크 배경이므로 `dark:` 대신 항상 흰색 로고가 보이도록 `Logo` 컴포넌트의 `dark:block`/`dark:hidden` variant 확인 필요 — `src/components/Logo.tsx` 참고, 필요 시 오버레이 안에서는 항상 흰색 로고(`/logo_white.svg`)만 노출하는 방식으로 처리)
- 중간 또는 우측: `제작 상담 신청` 버튼, 기존과 동일한 노란색(`bg-[#F1B100]`) 스타일 유지, 크기만 좁은 화면 대응으로 약간 축소 가능(7번 항목)
- 우측 끝: `X` 버튼 (`lucide-react`의 `X` 아이콘, 기존 햄버거 버튼과 동일한 탭 영역 크기 이상으로)

### 5-3. 메뉴 항목 타이포그래피

```tsx
className="text-[clamp(2.5rem,11vw,3.25rem)] font-bold leading-[1.05] text-white"
```

- `font-bold`(700) 또는 사이트에서 쓰는 강한 헤딩 굵기(`font-extrabold`, 900)와 통일감 있게 선택. 현재 히어로 타이틀이 `font-bold`이므로 `font-bold` 권장.
- 항목 간 간격: `gap-4`~`gap-6` (16~24px) → `<motion.ul className="flex flex-col gap-5">`
- 좌우 여백: `px-5`(20px, 사이트 다른 모바일 섹션과 통일) 또는 `px-6`(24px)
- 각 `<li>` 내부 `<a>`를 `block w-full py-3`(터치 영역 확보, 최소 높이 56px 이상 되도록 `min-h-[56px] flex items-center`)로 감싸 전체 클릭 가능하게 만든다.
- 작은 화면(360px) 대응: `clamp()`의 최소값(2.5rem=40px)이 5개 항목 + 언어 전환까지 세로로 다 들어가는지 실제로 확인한다. 만약 세로 공간이 부족하면(`iPhone SE` 375×667 등) `gap`을 살짝 줄이거나(`gap-4`), 헤더 높이를 줄이는 방식으로 대응하고, **메뉴 항목 자체를 스크롤 가능하게 만들지 않는다**(요구사항: 화면 밖으로 넘치지 않게, 즉 내부 스크롤보다 크기/간격 조정으로 해결 우선. 정말 안 들어가면 오버레이 내부에만 `overflow-y-auto`를 최후 수단으로 허용).

### 5-4. 언어 전환 (EN/KR)

- 메뉴 리스트 아래 충분한 간격(`mt-10`~`mt-12`)을 두고 배치
- 글자 크기: `text-xl`~`text-2xl`(18~22px 요구사항에 맞춰 `text-[1.375rem]` 정도)
- ko 파일: `EN` 텍스트, `/en`로 이동
- en 파일: `KR` 텍스트(또는 요구사항대로 `English`는 반대 방향이므로 en 파일에서는 `한국어` 또는 기존처럼 `KR` 유지), `/ko`로 이동
- 얇은 구분선(`border-t border-zinc-800`) 위에 배치하거나 화면 하단 여백에 고정 배치 중 택1. **권장: 메뉴 리스트 컨테이너(`flex-1 flex flex-col justify-center`) 안에서 메뉴 리스트 바로 아래, 구분선과 함께 배치**(화면 최하단 고정보다 좌표 계산이 단순하고 다양한 화면 높이에 안전).

---

## 6. 인터랙션 (active/tap 상태)

- 각 메뉴 링크의 기본 색상: `text-white`
- active/tap 상태: `active:text-[#F1B100]` (Tailwind `active:` 유사변형은 모바일 탭 시 짧게 적용됨). 터치 디바이스에서 `:hover`가 걸린 채로 남는 문제를 피하기 위해 `hover:` 스타일은 넣지 않거나 `md:hover:` 정도로 제한하고, `active:` 위주로 처리한다.
- 선택적으로 약한 `translate-x-1`(4px) 이동 효과를 `active:translate-x-1 transition-transform`으로 추가 가능(과하지 않게, 요구사항 "약한 좌우 이동 또는 밑줄 효과 적용 가능").
- 현재 페이지에 해당하는 메뉴 활성 표시: 이 사이트는 단일 페이지 앵커 스크롤(`#directions`, `#templates` 등) 구조라 "현재 페이지" 개념이 명확하지 않다. **최소 구현으로 충분**: 이 항목은 필수 구현 대상에서 제외하고, 만약 여유가 있다면 `IntersectionObserver` 없이 상태만 추가해두는 수준으로 마무리한다(과도한 스크롤 감지 로직 신규 추가는 지양). 이 부분은 선택 사항으로 처리하고 필수 항목(1~8)을 먼저 완성한다.

---

## 7. 제작 상담 신청 버튼 (오버레이 내부)

- 링크(`/ko/contact` 또는 `/en/contact`)와 노란색 스타일(`bg-[#F1B100] hover:bg-[#d99e00] text-zinc-900`)은 기존과 동일하게 유지.
- 오버레이 상단에서 로고·버튼·X가 한 줄에 겹치지 않아야 한다. 360px 폭 기준 예산:
  - 로고: 약 100~110px
  - 상담 버튼: 텍스트 축소 없이는 좁을 수 있으므로, 오버레이 내부 헤더에서는 버튼 좌우 패딩을 `px-3`(기존 `px-3.5 sm:px-5`보다 살짝 축소)로, 폰트는 `text-[0.65rem]`(기존 `text-[0.7rem]`)까지만 축소 허용(요구사항: "필요하면 모바일에서 버튼 글자와 좌우 패딩만 조금 줄인다")
  - X 버튼: 최소 32×32px 탭 영역 유지
  - 3개 요소 사이 `gap-2`(8px) 이상 확보
- 실제 360px 뷰포트에서 한 줄 안에 들어가는지 반드시 실측 확인(10번 항목 검수 기준).

---

## 8. 스크롤 잠금 & 접근성

### 8-1. 스크롤 잠금/복원

```tsx
useEffect(() => {
  if (mobileMenuOpen) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }
}, [mobileMenuOpen]);
```

(단순 `overflow: hidden`만으로는 iOS Safari에서 배경 스크롤이 완전히 막히지 않는 경우가 많아 위와 같은 `position: fixed` 방식을 권장하되, 프로젝트 기존 관례상 더 단순한 방식을 쓰고 싶다면 `document.body.style.overflow = "hidden"`으로 최소 구현도 허용. 단, 닫을 때 반드시 원래 스크롤 위치로 복원되는지 확인.)

### 8-2. ARIA 속성

- 햄버거 버튼: 이미 `aria-expanded={mobileMenuOpen}` 있음. `aria-controls="mobile-menu"` 추가.
- 오버레이 `motion.div`에 `id="mobile-menu"`, `role="dialog"`, `aria-modal="true"`, `aria-label="모바일 메뉴"`(en: `"Mobile menu"`) 추가.
- X 버튼: `aria-label="메뉴 닫기"`(en: `"Close menu"`).

### 8-3. 포커스 이동 & 포커스 트랩

```tsx
const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
const overlayRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (mobileMenuOpen) {
    firstMenuItemRef.current?.focus();
  }
}, [mobileMenuOpen]);

useEffect(() => {
  if (!mobileMenuOpen) return;
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCloseMenu();
      return;
    }
    if (e.key !== "Tab" || !overlayRef.current) return;
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [mobileMenuOpen]);
```

첫 번째 메뉴 항목(`서비스소개`/`Services`)의 `<a>`에 `ref={firstMenuItemRef}`를 연결한다.

### 8-4. `prefers-reduced-motion`

```tsx
const prefersReducedMotion = useRef(false);
useEffect(() => {
  prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}, []);
```

이 값을 참조해 `clip-path` 애니메이션 대신 단순 `opacity` 페이드(0.2초)로 대체하는 분기를 추가한다. 예:

```tsx
const overlayVariants = prefersReducedMotion.current
  ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
  : { initial: { clipPath: `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)` }, ... };
```

(정확한 구현 방식은 Codex 재량, 요구사항은 "reduced motion에서 원형 확장 대신 짧은 페이드"임을 지키면 된다.)

### 8-5. 빠른 연속 클릭 방지

- `handleOpenMenu`/`handleCloseMenu`는 `mobileMenuOpen` 현재 값을 기준으로 분기하므로, 버튼 `onClick`에서 매 클릭 시 최신 상태를 참조하도록 함수형 업데이트 또는 상태 직접 참조를 사용한다(위 3-2 예시처럼 삼항 분기 사용 시 문제 없음).
- `AnimatePresence`가 exit 애니메이션 도중에 다시 열기(`mobileMenuOpen: false → true`)로 빠르게 바뀌어도 framer-motion이 자체적으로 애니메이션을 이어받아 처리하므로 별도의 debounce 로직은 필요 없다. 다만 좌표(`menuOrigin`)를 여는 시점마다 다시 계산하므로, 연속 클릭 시에도 항상 "그 시점의 버튼 위치"를 기준으로 정확히 확장되는지 확인한다.

---

## 9. 유지해야 할 사항 (회귀 방지 체크리스트)

- [ ] 메뉴 링크의 `href`(`#directions`, `#templates`, `#pricing`, `#process`, `#faq`)와 이동 동작 변경 없음
- [ ] `<Logo>` 컴포넌트 그대로 사용 (`src/components/Logo.tsx` 변경 금지)
- [ ] `제작 상담 신청`/`Get Started` 버튼의 `href`(`/ko/contact`, `/en/contact`)와 색상(`#F1B100`) 유지
- [ ] `EN`/`KR` 언어 전환 링크의 `href`(`/en`, `/ko`) 유지
- [ ] 기존 검정(`zinc-950`/`zinc-900`) · 노랑(`#F1B100`) 톤 유지, 새로운 색상 팔레트 도입 금지
- [ ] 데스크톱 헤더(`hidden md:flex` 네비게이션)와 데스크톱 레이아웃은 일절 수정하지 않음
- [ ] `src/app/ko/templates/`, `src/app/en/templates/` 등 다른 템플릿 폴더는 건드리지 않음 (`CLAUDE.md` 작업 범위 제한 규칙)
- [ ] `src/components/`에 새 파일 추가 금지, 새 라이브러리 설치 금지 (`package.json` 변경 없음)

---

## 10. 모바일 검수 기준

Codex는 구현 완료 후 아래 4개 뷰포트 너비에서 직접 확인하고 결과를 보고한다(Playwright 또는 브라우저 개발자도구 반응형 모드 사용 가능).

- 360px
- 375px
- 390px
- 430px

각 너비에서 확인할 항목:

1. 메뉴 글자가 요구된 크기(`clamp(2.5rem, 11vw, 3.25rem)`)로 렌더링되고 화면 중앙에 안정적으로 배치되는가
2. 메뉴 5개 항목 + 언어 전환 링크가 세로 화면 밖으로 잘리지 않는가(내부 스크롤 없이)
3. 오버레이 상단의 로고, 상담 버튼, X 버튼이 겹치지 않고 한 줄에 들어가는가
4. 원형 확장 애니메이션이 실제 햄버거 버튼 위치에서 시작되는가(개발자도구로 버튼 좌표와 원 시작점 비교)
5. 닫을 때도 같은 위치로 자연스럽게 축소되는가
6. 메뉴 링크 클릭 후 해당 앵커(`#pricing` 등)로 정상 스크롤 이동하고 메뉴가 닫히는가
7. 햄버거 버튼을 빠르게 연속 클릭해도(5회 이상 빠르게) 상태가 꼬이거나 애니메이션이 깨지지 않는가
8. 데스크톱(1440px, 1280px)에서 기존과 동일하게 보이고 이번 변경의 영향이 전혀 없는가
9. `prefers-reduced-motion: reduce` 환경에서 원형 확장 대신 페이드로 대체되는가
10. 키보드만으로 Tab/Shift+Tab 이동 시 포커스가 오버레이 내부에서만 순환하고, Escape로 닫히는가

`npm run build` 프로덕션 빌드 성공 및 ESLint 신규 오류 없음도 함께 확인한다.

---

## 11. Codex 완료 보고 시 포함해야 할 내용

1. 수정한 정확한 파일 목록과 각 파일 내 수정 라인 범위
2. 새로 추가한 state/ref/함수 목록과 역할 요약
3. Circular Reveal 구현에 실제 사용한 `clip-path` 값과 애니메이션 `duration`/`ease` 값
4. 햄버거 버튼 좌표 계산 로직이 실제로 어떻게 동작하는지(코드 스니펫 또는 설명)
5. 10번 항목의 4개 뷰포트별 검수 결과 (스크린샷 또는 텍스트 설명)
6. 접근성 체크리스트(8번 항목) 각 항목 통과 여부
7. 9번 항목 회귀 방지 체크리스트 각 항목 통과 여부
8. 빌드 결과 및 ESLint 결과

---

## Claude Code 검증 항목 (Codex 작업 완료 후 Claude Code가 직접 확인)

Codex 작업이 끝나면 Claude Code가 아래를 재검증한다.

1. `git diff`로 실제 수정된 파일이 위 "수정 파일" 목록과 일치하는지, 의도치 않은 다른 파일 변경이 없는지 확인
2. `npm run build` 재실행하여 빌드 성공 확인
3. `npx eslint src/app/ko/LandingPageClient.tsx src/app/en/LandingPageClient.tsx` 실행하여 신규 오류 없는지 확인
4. 로컬 dev 서버 기동 후 Playwright로 360/375/390/430px 뷰포트에서 메뉴 열기/닫기 스크린샷 비교
5. 데스크톱 뷰포트(1280/1440px)에서 헤더가 기존과 동일한지 스크린샷 비교
6. 실제 폰(또는 원격 디버깅)으로 최종 육안 확인 후 사용자에게 결과 보고
7. 사용자 승인 후 커밋 & `vercel --prod` 배포, `ohmt.site` 도메인 alias 갱신
