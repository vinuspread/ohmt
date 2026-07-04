# 작업지시서: 템플릿 그리드 '더보기' 페이지네이션

## 목적

템플릿 수가 늘어남에 따라 스크롤이 과도하게 길어지는 문제를 해결한다.
그리드 영역에 9개씩 끊어서 보여주고 '더보기' 버튼으로 추가 로드하는 방식을 구현한다.

---

## 수정 파일

아래 두 파일을 **동일한 방식**으로 수정한다.

- `src/app/en/LandingPageClient.tsx`
- `src/app/ko/LandingPageClient.tsx`

---

## 현재 구조 이해

두 파일 모두 아래 state/memo 구조를 가진다.

```tsx
// state
const [heroIndex, setHeroIndex] = useState(0);
// ... 기타 state

// memo
const filteredTemplates = useMemo(() => { ... }, [...]);  // 검색/카테고리 필터 적용된 전체 목록
const featuredItem = useMemo(() => { ... }, [...]);       // 상단 단독 노출 Featured 카드 (1개)
const gridItems = useMemo(() => { ... }, [...]);          // Featured 제외한 나머지 그리드 목록
```

렌더링:
```tsx
{/* Featured 카드 - 항상 전체 노출 (변경 없음) */}
{featuredItem && ( <FeatureCard /> )}

{/* 일반 그리드 - 여기에 페이지네이션 적용 */}
<motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {gridItems.map((template) => ( <TemplateCard /> ))}
</motion.div>
```

---

## 구현 명세

### 1. state 추가

기존 state 선언부에 아래를 추가한다.

```tsx
const PAGE_SIZE = 9;
const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
```

### 2. 필터/카테고리/검색 변경 시 visibleCount 리셋

기존에 `activeCategory`, `searchTerm` 이 변경될 때 카운트를 초기화한다.
`filteredTemplates`를 의존성으로 가진 `useEffect`를 추가한다.

```tsx
useEffect(() => {
  setVisibleCount(PAGE_SIZE);
}, [filteredTemplates]);
```

### 3. 실제 노출 아이템 계산

`gridItems` memo 아래에 아래를 추가한다.

```tsx
const visibleGridItems = useMemo(
  () => gridItems.slice(0, visibleCount),
  [gridItems, visibleCount]
);
```

### 4. 그리드 렌더링 변경

`gridItems.map(...)` → `visibleGridItems.map(...)` 으로 교체한다.

```tsx
// 변경 전
{gridItems.map((template) => ( <TemplateCard /> ))}

// 변경 후
{visibleGridItems.map((template) => ( <TemplateCard /> ))}
```

### 5. '더보기' 버튼 추가

그리드 `</motion.div>` 바로 다음에 추가한다.
`visibleCount < gridItems.length` 일 때만 렌더한다.

```tsx
{visibleCount < gridItems.length && (
  <div className="flex justify-center pt-4">
    <button
      onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
      className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 hover:border-zinc-900 text-sm font-bold text-zinc-600 hover:text-zinc-900 rounded-lg transition-all duration-200 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-400 dark:hover:text-zinc-200"
    >
      더보기 ({gridItems.length - visibleCount}개 남음)
    </button>
  </div>
)}
```

**en 파일**의 버튼 텍스트는 영문으로:
```tsx
Load More ({gridItems.length - visibleCount} remaining)
```

---

## 동작 조건 정리

| 상황 | 동작 |
|------|------|
| 최초 진입 | gridItems 중 9개만 표시 |
| '더보기' 클릭 | 9개씩 추가 표시 (9 → 18 → 27 ...) |
| 전부 표시됨 | 버튼 사라짐 |
| 카테고리 탭 변경 | visibleCount 9로 리셋 |
| 검색어 입력 | visibleCount 9로 리셋 |
| Featured 카드 | 페이지네이션 대상에서 제외 (항상 전체 표시) |

---

## 금지 사항

- `featuredItem` 렌더링 영역은 건드리지 않는다.
- `filteredTemplates`, `gridItems` memo 로직 자체는 변경하지 않는다.
- URL 파라미터나 라우팅 기반 페이지네이션을 사용하지 않는다 (클라이언트 state만 사용).
- 새 컴포넌트 파일을 만들지 않는다 (두 파일 내에서만 수정).
- `motion.div layout` 속성은 유지한다 (애니메이션 보존).

---

## 검증 항목 (Codex 작업 완료 후 내가 검증)

- [ ] `npx tsc --noEmit` 에러 없음
- [ ] en/ko 두 파일 모두 수정됨
- [ ] 초기 로드 시 9개만 표시되는지 확인
- [ ] '더보기' 클릭 시 9개씩 추가되는지 확인
- [ ] 전체 표시 후 버튼 사라지는지 확인
- [ ] 카테고리/검색 변경 시 9개로 리셋되는지 확인
- [ ] Featured 카드는 항상 노출되는지 확인
