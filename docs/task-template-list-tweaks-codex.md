# 템플릿 목록(/admin/templates) UI 수정 작업 지시서 (Codex)

## 배경

`/admin/templates` 페이지(`TemplateTable.tsx`)는 직전 작업(드래그앤드롭 정렬, 썸네일 라이트박스 등)으로 개편된 상태다. 여기에 아래 4가지를 추가로 수정한다. 작업 시작 전 `CLAUDE.md`를 먼저 읽는다.

## 작업 범위

- 수정 대상: `src/app/admin/_components/templates/TemplateTable.tsx`
- 다른 admin 페이지나 `en`/`ko` 퍼블릭 템플릿 폴더는 건드리지 않는다.

## 요구사항 (4개, 전부 반영)

1. **드래그앤드롭은 맨 앞의 드래그 아이콘(`GripVertical`)에서만 시작되도록 제한.**
   현재는 `Reorder.Item` 전체 행에 `cursor-grab`이 걸려 있어 행 어디를 잡아도 드래그가 시작된다. `Reorder.Item`에 `dragListener={false}`를 주고, `GripVertical` 아이콘에 `useDragControls()`로 받은 `dragControls`를 연결해 `onPointerDown={(e) => dragControls.start(e)}`로 드래그를 시작하도록 변경한다 (framer-motion 공식 패턴). 행 전체의 `cursor-grab active:cursor-grabbing` 클래스는 제거하고, 아이콘 자체에 `cursor-grab active:cursor-grabbing`을 적용한다.

2. **"대표템플릿" 컬럼명을 "대표"로 변경하고 컬럼 폭을 축소.**
   헤더 텍스트와 행의 체크 아이콘 표시는 그대로 두고 라벨만 "대표"로 바꾼다. 현재 grid 컬럼 정의(`grid-cols-[28px_72px_minmax(150px,1.4fr)_64px_minmax(110px,0.9fr)_88px_96px_132px]`, 6번째 칸 `88px`이 이 컬럼)에서 해당 칸의 폭을 줄인다 (예: `88px` → `48px` 정도, 체크 아이콘 하나만 들어가면 충분). 헤더 grid와 행 grid 둘 다 동일하게 맞춘다.

3. **템플릿명 클릭 시 새 창(새 탭)으로 해당 템플릿 페이지를 띄운다.**
   각 템플릿의 실제 서비스 URL은 `/${template.lang}/templates/${template.slug}` 형태다 (참고: `src/app/api/admin/templates/upload/route.ts`의 `templateUrl: \`/${lang}/templates/${slug}\`` 패턴과 동일). 현재 이름은 `<p className="truncate font-medium text-zinc-900">{template.name}</p>`로 단순 텍스트인데, 이를 `<Link>`(`target="_blank"`, `rel="noopener noreferrer"`)로 감싸서 클릭 시 새 탭에서 해당 URL이 열리도록 한다. 슬러그 텍스트(`template.slug`)는 그대로 두고 이름만 링크로 만든다. 링크 클릭이 행 드래그를 트리거하지 않아야 한다 (1번 변경으로 드래그 시작점이 아이콘으로 제한되므로 자연히 충돌 없음).

4. **상단 "+ 새 템플릿" 버튼 삭제.**
   `<Link href="/admin/templates/new"><Button variant="primary" size="sm">+ 새 템플릿</Button></Link>` 블록 전체를 제거한다. 버튼이 있던 영역의 레이아웃(검색창 정렬 등)이 어색해지지 않도록 정리한다.

## 검증

- `npx tsc --noEmit`, `npm run build` 둘 다 통과해야 한다.
- 드래그 아이콘이 아닌 행의 다른 영역(이름, 썸네일 등)을 클릭/드래그했을 때 정렬이 시작되지 않는지 확인.
- 템플릿명 클릭 시 새 탭에서 올바른 URL(`/{lang}/templates/{slug}`)이 열리는지 확인.

## 결과 보고

작업 완료 후 아래를 보고한다:
- 변경된 파일 목록
- 드래그 시작점을 아이콘으로 제한한 구현 방식
- 빌드/타입체크 통과 여부
