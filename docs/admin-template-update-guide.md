# Admin Template ZIP Update Guide

이 문서는 관리자 화면에서 기존 템플릿을 새 ZIP 파일로 업데이트할 때 따르는 운영 지침이다. Claude/Codex가 템플릿 ZIP 업데이트 작업을 맡을 경우 이 문서를 먼저 확인한다.

## 목적

기존 등록 템플릿의 코드와 이미지 파일을 새 ZIP으로 교체하고, 관리자 DB 메타데이터를 필요한 범위에서 갱신한다.

업데이트는 신규 등록과 다르다. 이미 같은 `slug + lang` 레코드가 있는 상태에서 `overwrite=1` 옵션으로 업로드 API를 호출해 GitHub 파일을 덮어쓰고 Supabase 메타데이터를 업데이트한다.

## 관련 구현

| 기능 | 파일 |
|---|---|
| 관리자 수정 화면의 ZIP 업데이트 버튼 | `src/app/admin/_components/templates/TemplateForm.tsx` |
| ZIP 업데이트 모달 | `src/app/admin/_components/templates/ZipUpdateModal.tsx` |
| ZIP 업로드 및 덮어쓰기 API | `src/app/api/admin/templates/upload/route.ts` |
| ZIP 구조 검증 | `src/lib/zip.ts` |
| GitHub 파일 push | `src/lib/github.ts` |
| R2 임시 업로드/삭제 | `src/lib/r2.ts` |

## 관리자 화면 절차

1. 관리자 계정으로 로그인한다.
2. `/admin/templates`로 이동한다.
3. 업데이트할 템플릿 행에서 `수정`을 클릭한다.
4. 수정 화면 하단의 `ZIP 파일 업데이트` 버튼을 클릭한다.
5. 새 ZIP 파일을 선택하거나 드래그 앤 드롭한다.
6. `업로드`를 클릭한다.
7. 성공 메시지와 GitHub commit SHA가 표시되는지 확인한다.
8. Vercel 자동 재배포가 완료된 뒤 공개 페이지를 확인한다.
9. 이름, 카테고리, 설명, 썸네일, 공개 여부 같은 메타데이터 조정이 필요하면 같은 수정 화면에서 저장한다.

## 업데이트 ZIP 준비 규칙

ZIP 구조 규칙은 `docs/template-dev-guide.md`가 기준이다. 관리자 업데이트도 신규 업로드와 같은 검증을 통과해야 한다.

### EN ZIP

```
[slug]/
├── _components/
│   └── TemplateWrapper.tsx
├── layout.tsx
├── page.tsx
├── theme.css
└── theme.json

public/
└── templates/
    └── [slug]/
        └── og-image.jpg
```

EN ZIP에는 템플릿 코드와 `public/templates/[slug]/` 이미지 폴더를 포함한다. 현재 업로드 API는 메타데이터의 `thumbnail_url`을 `/templates/[slug]/og-image.jpg`로 저장하므로 `og-image.jpg`가 있어야 한다.

### KO ZIP

```
[slug]/
├── _components/
│   └── TemplateWrapper.tsx
├── layout.tsx
├── page.tsx
├── theme.css
└── theme.json
```

KO ZIP에는 보통 `public/` 폴더를 포함하지 않는다. 이미지는 EN과 같은 `/templates/[slug]/...` 경로를 공유한다.

## 파일명 규칙

권장 파일명:

```
OHMT031-luma-camera-EN.zip
OHMT031-luma-camera-KO.zip
```

업로드 API는 파일명에서 `-EN`, `_EN`, `EN.zip`, `-KO`, `_KO`, `KO.zip` 패턴을 보고 언어를 자동 감지한다. 파일명 언어 표기와 실제 ZIP 내용의 언어가 일치해야 한다.

## 덮어쓰기 동작

업데이트 모달은 `/api/admin/templates/upload?overwrite=1`로 요청한다.

기존 `slug + lang` 레코드가 있으면:

- GitHub에 ZIP 내부 파일을 push한다.
- Supabase `templates` 레코드의 `name`, `category`, `description`, `thumbnail_url`, `tags`, `template_key`를 업데이트한다.
- `status`, `sort_order`, `is_featured`, 가격 관련 설정 등은 유지된다.

기존 레코드가 없으면:

- 신규 업로드처럼 `status: uploaded`, `sort_order: 999`로 insert된다.
- 이 경우 `/admin/uploads` 또는 수정 화면에서 검수 후 공개 상태로 조정한다.

## 업데이트 전 체크리스트

- [ ] 대상 템플릿의 `slug`와 `lang`이 관리자 수정 화면과 ZIP 내용에서 일치한다.
- [ ] ZIP 루트에 `src/app/...` 경로가 들어가지 않았다.
- [ ] ZIP 루트의 템플릿 폴더는 `[slug]/` 하나만 있다. 단, EN ZIP의 `public/`은 허용한다.
- [ ] `_components/TemplateWrapper.tsx`, `layout.tsx`, `page.tsx`, `theme.css`, `theme.json`이 있다.
- [ ] `theme.json`의 `slug`, `name`, `name_ko`, `category`, `description`, `description_ko`가 최신이다.
- [ ] EN ZIP에는 `public/templates/[slug]/og-image.jpg`가 있다.
- [ ] KO ZIP은 `public/templates/[slug]-ko/` 같은 별도 이미지 폴더를 만들지 않는다.
- [ ] `.mp4`, `.mov`, `.webm` 같은 대용량 영상은 ZIP에 넣지 않는다. 필요하면 R2 영상 URL을 코드에서 참조한다.
- [ ] 외부 이미지 URL 대신 `/templates/[slug]/...` 로컬 경로를 사용한다.

## 업데이트 후 확인

- [ ] 관리자 모달에 `업데이트 완료`가 표시된다.
- [ ] GitHub commit SHA가 표시된다.
- [ ] Vercel 배포가 성공한다.
- [ ] `/en/templates/[slug]` 또는 `/ko/templates/[slug]` 페이지가 정상 표시된다.
- [ ] 하위 페이지 링크가 깨지지 않는다.
- [ ] 이미지 경로가 404를 내지 않는다.
- [ ] 관리자 목록에서 썸네일과 메타데이터가 의도대로 표시된다.
- [ ] 공개 템플릿인 경우 랜딩 페이지 카드에서도 정상 표시된다.

## 자주 나는 오류

| 오류 | 의미 | 처리 |
|---|---|---|
| `이미 존재하는 템플릿입니다... 덮어쓰기 옵션을 활성화하세요.` | 일반 업로드 경로로 기존 slug/lang을 올림 | 관리자 수정 화면의 `ZIP 파일 업데이트` 버튼을 사용한다. |
| `zip 검증 실패` | 필수 파일 누락 또는 금지 경로 포함 | `docs/template-dev-guide.md`의 ZIP 구조 기준으로 다시 압축한다. |
| `GitHub push에 실패했습니다.` | GitHub API 또는 토큰 문제 | `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` 설정과 권한을 확인한다. |
| `메타데이터 업데이트에 실패했습니다. GitHub push는 성공했습니다.` | 파일 push는 됐지만 Supabase update 실패 | 관리자 DB 레코드를 확인하고 메타데이터만 다시 저장한다. |
| 썸네일이 깨짐 | `thumbnail_url`이 가리키는 이미지 없음 | EN 이미지 폴더에 `/templates/[slug]/og-image.jpg`를 포함해 다시 업데이트하거나 관리자에서 썸네일을 수동 지정한다. |

## Claude 작업 지침

관리자 ZIP 업데이트를 도와달라는 요청을 받으면:

1. `CLAUDE.md`, `TEMPLATE_AUDIT.md`, 이 문서, `docs/template-dev-guide.md`를 먼저 읽는다.
2. 사용자가 지정한 템플릿과 언어만 대상으로 한다.
3. ZIP 파일을 새로 만들거나 검증할 때 기존 사용자 변경을 되돌리지 않는다.
4. 업데이트 ZIP이 이미 있다면 `E:\Work\ohmytemplate\zips` 같은 사용자가 지정한 위치에서 파일명, 크기, 수정 시각을 확인한다.
5. 가능하면 ZIP 내부 구조를 로컬에서 검사하고, 문제를 업로드 전에 보고한다.
6. 관리자 화면에서 직접 업로드가 필요한 경우 사용자가 접근할 URL과 클릭 순서를 안내한다.
7. 코드 수정이 필요한 경우 관련 템플릿 폴더와 필요한 이미지 폴더만 수정한다.

## 참고 문서

- `docs/template-dev-guide.md` - ZIP 구조 및 템플릿 제작 규칙
- `docs/plan-zip-upload.md` - ZIP 업로드 파이프라인 설계
- `docs/task-two-stage-upload-opencode.md` - 업로드 목록/검수 흐름 작업 지시서
- `CLAUDE.md` - 프로젝트 전체 규칙
- `TEMPLATE_AUDIT.md` - 템플릿 현황 및 알려진 이슈
