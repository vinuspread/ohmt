# 템플릿 목록(/admin/templates) UI 개편 작업 지시서 (Codex)

## 배경

`/admin/templates` 페이지의 템플릿 테이블을 아래 요구사항대로 개편한다. 작업 시작 전 `CLAUDE.md`를 먼저 읽는다.

## 작업 범위

- 수정 대상: `src/app/admin/_components/templates/TemplateTable.tsx`, `src/app/admin/templates/page.tsx`, 필요 시 `src/app/admin/_components/ui/Badge.tsx`, `src/app/api/admin/templates/route.ts` (정렬 일괄 저장용 API가 필요하면 신규 라우트 추가).
- 다른 admin 페이지(`/admin/uploads`, `/admin/orders` 등)나 `en`/`ko` 퍼블릭 템플릿 폴더는 건드리지 않는다.
- 새 패키지 설치가 필요한 드래그앤드롭은 **추가 의존성 설치 없이 framer-motion(이미 설치돼 있음, `package.json` 확인)의 `Reorder.Group` / `Reorder.Item`**으로 구현한다. `@dnd-kit` 등 새 라이브러리를 추가하지 않는다.

## 요구사항 (10개, 전부 반영)

1. **`#`(sort_order 숫자) 컬럼 삭제.** 노출 순서는 화면에 보이는 리스트 순서 그 자체로 결정한다. 즉 사용자가 보는 줄 순서가 곧 `sort_order` 값이 된다 (위에서부터 0, 1, 2...).
2. **드래그 앤 드롭으로 행 순서 변경 가능.** 드래그 중 / 드롭 후 모션이 직관적이어야 한다 — 잡은 행이 들리는 느낌(약간의 확대/그림자), 다른 행들이 비켜나는 자리이동이 애니메이션으로 보여야 한다. framer-motion `Reorder.Group`(`as="div"` 또는 테이블 대신 div 기반 리스트로 구조 변경 필요 — `<table>`은 framer-motion Reorder와 호환이 어려우므로, 테이블처럼 보이는 grid/flex 레이아웃으로 바꿔도 된다. 단 컬럼 헤더와 셀 정렬은 시각적으로 기존 테이블과 동일하게 유지) 사용.
   - 드롭이 끝나면(`onReorder` 콜백) 새로운 순서를 기준으로 각 행의 `sort_order`를 0부터 다시 매겨서 서버에 저장한다.
   - 저장 방식: 기존 `PATCH /api/admin/templates/[id]` (body에 `sort_order` 숫자)를 각 변경된 행에 대해 호출하면 된다. 행이 많지 않으므로(현재 수십 개 수준) `Promise.all`로 병렬 호출해도 무방. 별도 bulk reorder API를 새로 만들 필요는 없다.
   - 필터(공개/비공개 탭, 검색)가 걸려 있는 상태에서 드래그하면, 필터링된 부분집합 안에서의 순서가 전체 목록 순서에 어떻게 반영되는지 명확히 처리한다 (예: 필터링된 행들끼리 순서를 바꾸면, 전체 목록에서 그 행들이 차지하던 위치 구간 안에서만 순서가 바뀌고 나머지 행은 그대로 유지되도록 구현 — 즉 필터된 부분집합의 상대 순서만 변경하고, 그 결과를 전체 배열에 다시 합쳐서 0부터 sort_order를 재계산).
3. **맨 앞 컬럼에 썸네일 이미지 노출.** `thumbnail_url`을 작은 썸네일(예: 48x32 정도, rounded)로 표시. 이미지가 없으면 placeholder(회색 박스 등) 표시. **썸네일 클릭 시 레이어 팝업으로 가로 500px 기준 큰 이미지를 보여준다** (참고: `src/app/admin/_components/ui/ThumbnailField.tsx`에 이미 동일한 클릭→라이트박스 패턴이 구현돼 있으니 그 코드를 참고/재사용해서 일관된 UX로 구현. 필요하면 라이트박스 부분을 별도 작은 컴포넌트로 분리해서 `TemplateTable`과 `ThumbnailField`가 같이 써도 됨).
4. **상태값 한글 표기.** 테이블의 상태 컬럼은 "공개"/"비공개" 두 가지로만 보여준다 (참고: `TemplateForm.tsx`/`RegisterForm.tsx`가 이미 `published`만 "공개"로, 그 외(`draft`/`archived`/`uploaded`)는 전부 "비공개"로 취급하는 방식으로 단순화돼 있음 — 동일한 원칙을 테이블에도 적용. `Badge` 컴포넌트를 그대로 쓰거나, 공개=초록 점, 비공개=회색 점 형태로 단순화해도 됨).
5. **가격 컬럼 숨김.** `price` 컬럼 자체를 테이블에서 제거한다 (데이터 자체는 유지, 화면에만 안 보이게).
6. **"Featured" → "대표템플릿"으로 컬럼명 변경.**
7. **"액션" → "옵션"으로 컬럼명 변경.**
8. **상단 필터 탭을 "전체/published/draft/archived" → "전체/공개/비공개" 2단계로 변경.** "비공개" 탭을 누르면 `draft`/`archived`/`uploaded` 등 `published`가 아닌 모든 행을 보여준다.
9. **리스트 상단에 개수 표시.** "공개 : N개, 비공개 : N개" 형식으로, 필터와 무관하게 전체 데이터 기준 개수를 항상 보여준다 (필터를 바꿔도 이 숫자는 전체 기준으로 고정).
10. **검색 기능 추가.** 템플릿명(`name`)과 상태(공개/비공개 텍스트로 매칭, 예: "공개"라고 검색하면 공개 템플릿만 나옴)로 필터링되는 검색창을 탭 영역 옆에 추가. 검색어와 탭 필터는 함께 적용된다(AND 조건).

## 참고 코드

- 현재 테이블: `src/app/admin/_components/templates/TemplateTable.tsx`
- 데이터 로딩: `src/app/admin/templates/page.tsx` (`status != 'uploaded'`인 행을 `sort_order` 오름차순으로 가져옴 — 이 부분은 그대로 유지)
- 행 수정/삭제 API: `src/app/api/admin/templates/[id]/route.ts` (PATCH로 `sort_order` 등 갱신 가능, 이미 구현돼 있음)
- 라이트박스 참고 패턴: `src/app/admin/_components/ui/ThumbnailField.tsx`
- 공개/비공개 단순화 패턴 참고: `src/app/admin/_components/templates/TemplateForm.tsx`, `src/app/admin/_components/uploads/RegisterForm.tsx`

## 검증

- `npx tsc --noEmit`, `npm run build` 둘 다 통과해야 한다.
- 드래그앤드롭으로 순서를 바꾼 뒤 새로고침해도 순서가 유지되는지 (즉 서버에 정상 저장됐는지) 확인.
- 필터/검색 상태에서 드래그했을 때 전체 목록의 순서가 의도대로(부분집합 내 상대 순서만 변경) 갱신되는지 확인.

## 결과 보고

작업 완료 후 아래를 보고한다:
- 변경된 파일 목록
- 드래그앤드롭 구현에 사용한 방식(framer-motion Reorder 외 다른 방식을 썼다면 이유)
- 빌드/타입체크 통과 여부
- 필터+드래그 조합 동작을 어떻게 처리했는지 설명
