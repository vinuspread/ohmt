# Zip Upload Pipeline 설계

## 개요

관리자가 zip 파일을 업로드하면 템플릿 파일이 GitHub에 자동으로 push되고, Vercel이 자동 배포한다. 동시에 Supabase에 템플릿 메타데이터가 등록된다.

---

## 전체 흐름

```
Admin UI (drag & drop)
  → POST /api/admin/templates/upload (FormData)
    → zip 수신 및 메모리 내 추출
    → 구조 검증 (필수 파일 체크)
    → theme.json 파싱 → slug 추출
    → slug 중복 확인 (Supabase)
    → GitHub API로 파일 push (octokit)
    → Supabase templates 레코드 insert
  → 응답: { slug, name, previewUrl }
→ Vercel 자동 배포 시작
→ Admin UI: 성공 메시지 + 템플릿 목록으로 이동
```

---

## Zip 파일 구조 규약

업로드되는 zip은 아래 두 폴더 중 하나 이상을 포함해야 한다.

```
[slug]/                        → src/app/en/templates/[slug]/ 로 배치
  ├── _components/
  │   └── TemplateWrapper.tsx  (필수)
  ├── layout.tsx               (필수)
  ├── page.tsx                 (필수)
  ├── theme.css                (필수)
  └── theme.json               (필수)

public/                        → public/ 로 배치 (이미지)
  └── templates/
      └── [slug]/
          └── *.jpg, *.png ...
```

### 검증 규칙 (실패 시 400 반환)
- `theme.json` 존재 여부
- `theme.json` 내 `slug` 필드 존재 여부
- `slug` 형식: `/^[a-z][a-z0-9-]*$/`
- `_components/TemplateWrapper.tsx` 존재 여부
- `layout.tsx` 존재 여부
- `page.tsx` 존재 여부
- `theme.css` 존재 여부
- `src/` 중첩 폴더 없음 (금지 패턴)
- `translations/` 폴더 없음 (금지 패턴)

---

## API 설계

### `POST /api/admin/templates/upload`

- Content-Type: `multipart/form-data`
- 필드: `file` (zip), `lang` (en | ko, default: en)

**성공 응답 (201)**
```json
{
  "slug": "furniture",
  "name": "Furniture Modern",
  "githubCommitSha": "abc123",
  "templateUrl": "/en/templates/furniture"
}
```

**실패 응답**
```json
{ "error": "theme.json이 없습니다." }          // 400
{ "error": "이미 존재하는 slug입니다: furniture" } // 409
{ "error": "GitHub push에 실패했습니다." }       // 502
```

---

## 파일 배치 규칙

| zip 내 경로 | 배치 경로 |
|---|---|
| `[slug]/**` | `src/app/en/templates/[slug]/**` |
| `public/templates/[slug]/**` | `public/templates/[slug]/**` |

`lang=ko` 인 경우:
| zip 내 경로 | 배치 경로 |
|---|---|
| `[slug]/**` | `src/app/ko/templates/[slug]/**` |
| `public/**` | 무시 (en 폴더 공유) |

---

## GitHub API 사용 방법

`@octokit/rest` 패키지 사용. 여러 파일을 한 번의 커밋으로 push하는 방법:

```
1. GET /repos/{owner}/{repo}/git/ref/heads/main → 현재 SHA
2. GET /repos/{owner}/{repo}/git/commits/{sha} → tree SHA
3. 각 파일마다 POST /repos/{owner}/{repo}/git/blobs → blob SHA
4. POST /repos/{owner}/{repo}/git/trees → 새 tree SHA
5. POST /repos/{owner}/{repo}/git/commits → 새 commit SHA
6. PATCH /repos/{owner}/{repo}/git/refs/heads/main → ref 업데이트
```

---

## 필요한 환경변수

```
GITHUB_TOKEN=ghp_...         # repo scope Personal Access Token
GITHUB_OWNER=vinuspread
GITHUB_REPO=ohmt
```

---

## 필요한 npm 패키지

```
adm-zip          # zip 추출 (서버 사이드)
@octokit/rest    # GitHub API
```

---

## 구현 파일 목록

| 파일 | 역할 |
|---|---|
| `src/lib/github.ts` | GitHub API 클라이언트 + 파일 push 함수 |
| `src/lib/zip.ts` | zip 추출 + 구조 검증 함수 |
| `src/app/api/admin/templates/upload/route.ts` | upload API 핸들러 |
| `src/app/admin/templates/upload/page.tsx` | 업로드 UI 페이지 |
| `src/app/admin/_components/templates/UploadForm.tsx` | drag & drop 업로드 컴포넌트 |

---

## UI 설계

### 업로드 페이지 (`/admin/templates/upload`)

```
┌─────────────────────────────────────────┐
│  템플릿 업로드                            │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │                                     ││
│  │   📦 zip 파일을 드래그하거나 클릭     ││
│  │                                     ││
│  │   .zip 파일만 지원 / 최대 50MB      ││
│  │                                     ││
│  └─────────────────────────────────────┘│
│                                         │
│  언어: [EN ▼]                           │
│                                         │
│  [업로드]                               │
└─────────────────────────────────────────┘
```

### 상태 표시
- idle: 드래그 영역 기본
- dragover: 영역 강조 (border-blue-400)
- uploading: 스피너 + "업로드 중..."
- validating: "검증 중..."
- pushing: "GitHub에 배포 중..."
- success: 초록 체크 + slug + 목록 이동 버튼
- error: 빨간 오류 메시지

### Sidebar에 업로드 메뉴 추가
- Templates 하위에 "업로드" 항목 추가

---

## 주의사항

1. **파일 크기 제한**: Next.js App Router 기본 body 크기 제한(4MB)을 넘기지 않도록 `next.config` 설정 필요
2. **바이너리 파일**: 이미지 파일은 base64 인코딩으로 blob 생성
3. **텍스트 파일**: UTF-8 인코딩으로 blob 생성
4. **race condition**: 동시 업로드는 지원하지 않음 (UI에서 업로드 중 버튼 비활성화)
5. **롤백**: GitHub push 성공 후 Supabase insert 실패 시, GitHub 커밋은 유지되고 메타데이터만 재시도 필요 (허용 가능한 수준)
