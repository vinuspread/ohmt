# 기존 템플릿 17종 — zip 패키징 및 재등록 작업 지시서 (Codex)

## 배경

`airline`, `car`, `cosmetic`, `dashboard`, `docs`, `exhibition`, `fashion`, `furniture`, `ir`, `jewelry`, `magazine`, `multi-shop`, `newspaper`, `portfolio`, `sneaker`, `studio`, `technology` — 17개 템플릿(EN/KO 합쳐 34개)은 현재 저장소 코드와 `supabase/seed.sql` 직접 insert로 등록되어 있고, 실제 zip 업로드 시스템(`/admin/uploads`)을 통과한 적이 없다. 그래서 `theme.json`에 슬러그/카테고리/설명 같은 메타데이터 필드가 없고, `thumbnail.jpg`도 없는 템플릿이 대부분이다.

이번 작업은 **이 17개 템플릿의 코드를 건드리지 않고(레이아웃/로직/텍스트 변경 금지)**, 현재 zip 업로드 시스템이 요구하는 형식에 맞춰 **EN/KO 각각 별도의 zip 파일로 패키징**하는 것이다. `wedding` 템플릿은 이미 새 시스템으로 정상 등록되어 있으므로 이번 작업 대상이 아니다.

작업 시작 전 `CLAUDE.md`와 `docs/template-dev-guide.md`를 반드시 먼저 읽는다. zip 구조 규칙은 `docs/template-dev-guide.md`의 "2-1. zip 압축 방법" 섹션이 기준이다.

## 작업 범위 제한

- 위 17개 슬러그 외에 다른 템플릿(`wedding` 포함) 폴더는 절대 건드리지 않는다.
- 각 템플릿의 페이지/컴포넌트/로직/텍스트는 수정하지 않는다. 오직 **메타데이터(theme.json) 추가**와 **thumbnail.jpg 준비**, **zip 패키징**만 한다.
- `globals.css`, `tailwind.config.ts` 등 공통 파일은 건드리지 않는다.

## 1. theme.json 메타데이터 보강

현재 각 템플릿의 `theme.json`은 런타임 디자인 토큰(`theme` 객체)만 있고, 업로드 시스템이 요구하는 평면 필드(`slug`, `name`, `name_ko`, `category`, `description`, `description_ko`, `tags`)가 없다. 기존 `theme` 객체는 그대로 두고, 최상위에 아래 필드를 **추가**한다.

`en/templates/[slug]/theme.json`과 `ko/templates/[slug]/theme.json`은 이제 각각 별도 zip의 입력이 되므로, **두 파일 모두 동일한 평면 필드 세트**를 가지면 된다 (zip 패키징 스크립트가 `lang`에 따라 `name`/`name_ko` 중 알맞은 값을 선택하므로, 두 언어 zip 모두에 `name`과 `name_ko`를 둘 다 채워둬도 무방하다. 단, en zip 업로드 시에는 `name`이 쓰이고 ko zip 업로드 시에는 `name_ko`가 쓰인다).

각 슬러그별로 채울 값은 아래 표를 그대로 사용한다 (기존 `supabase/seed.sql`에 있던 값과 동일, 새로 짓지 않는다):

| slug | category | name (en) | name_ko | description (en) | description_ko |
|---|---|---|---|---|---|
| airline | hospitality | Airline | 에어라인 | Premium airline booking and travel experience template | 프리미엄 항공 예약 및 여행 경험 템플릿 |
| car | retail | Car Showroom | 자동차 쇼룸 | Luxury car showroom and model showcase template | 럭셔리 자동차 쇼룸 및 모델 소개 템플릿 |
| cosmetic | lifestyle | Cosmetic Store | 코스메틱 스토어 | Beauty and cosmetic brand store template | 뷰티 코스메틱 브랜드 스토어 템플릿 |
| dashboard | service | Dashboard | 대시보드 | Analytics and business intelligence dashboard template | 분석 및 비즈니스 인텔리전스 대시보드 템플릿 |
| docs | service | Documentation | 문서 시스템 | Documentation workspace and knowledge base template | 문서 협업 워크스페이스 및 지식 베이스 템플릿 |
| exhibition | portfolio | Exhibition | 전시관 | Museum and art exhibition showcase template | 미술관 및 전시 쇼케이스 템플릿 |
| fashion | lifestyle | Fashion Store | 패션 스토어 | Elegant fashion brand store and lookbook template | 엘레강트한 패션 브랜드 스토어 및 룩북 템플릿 |
| furniture | retail | Furniture Modern | 퍼니처 모던 | Clean and modern furniture store template | 깔끔하고 현대적인 가구 스토어 템플릿 |
| ir | corporate | IR | IR | Investor relations and financial reporting template | 투자자 관계 및 재무 보고 템플릿 |
| jewelry | lifestyle | Jewelry | 주얼리 | Luxury jewelry brand store template | 럭셔리 주얼리 브랜드 스토어 템플릿 |
| magazine | media | Magazine | 매거진 | Editorial magazine and content publishing template | 에디토리얼 매거진 및 콘텐츠 퍼블리싱 템플릿 |
| multi-shop | retail | Multi Shop | 멀티샵 | Multi-category shopping mall template | 멀티 카테고리 쇼핑몰 템플릿 |
| newspaper | media | Newspaper | 신문 | Online newspaper and news portal template | 온라인 신문 및 뉴스 포털 템플릿 |
| portfolio | portfolio | Portfolio | 포트폴리오 | Creative portfolio and personal branding template | 크리에이티브 포트폴리오 및 퍼스널 브랜딩 템플릿 |
| sneaker | retail | Sneaker Store | 스니커 스토어 | Sneaker and streetwear culture store template | 스니커 및 스트리트웨어 문화 스토어 템플릿 |
| studio | portfolio | Studio | 스튜디오 | Creative studio and project showcase template | 크리에이티브 스튜디오 및 프로젝트 쇼케이스 템플릿 |
| technology | corporate | Technology - Robotflow | 테크놀로지 - 로봇플로우 | AI robotics company and technology showcase template | AI 로봇 기업 및 기술 쇼케이스 템플릿 |

각 `theme.json`에 추가할 형식 (기존 `theme` 객체 옆에 형제 필드로 추가):

```json
{
  "slug": "airline",
  "name": "Airline",
  "name_ko": "에어라인",
  "category": "hospitality",
  "description": "Premium airline booking and travel experience template",
  "description_ko": "프리미엄 항공 예약 및 여행 경험 템플릿",
  "tags": [],
  "mode": "light",
  "theme": { ... 기존 내용 그대로 ... }
}
```

`category` 값은 반드시 아래 허용값 중 하나여야 한다 (위 표는 이미 허용값 안에서 골랐음):
`retail`, `corporate`, `portfolio`, `media`, `service`, `hospitality`, `lifestyle`, `uncategorized`

## 2. thumbnail.jpg 준비

업로드 시스템은 **en zip에만** `public/templates/[slug]/thumbnail.jpg`가 정확히 그 파일명으로 존재할 것을 요구한다 (`.jpg` 고정, `.png`/`.svg` 불가).

| slug | 현재 상태 | 처리 방법 |
|---|---|---|
| dashboard | `thumbnail.png` 있음 | `thumbnail.jpg`로 변환(리네임이 아니라 jpg 인코딩 변환) |
| docs | `thumbnail.png`, `thumbnail.svg` 있음 | `thumbnail.png`를 `thumbnail.jpg`로 변환 |
| 나머지 15개 | thumbnail 없음 | 템플릿의 메인 히어로 이미지를 복사해 `thumbnail.jpg`로 변환 (예: airline → `airline-main-hero.png`, jewelry → `jewelry-hero-main.png` 등 각 폴더에서 "메인/히어로"로 보이는 첫 이미지를 선택) |

확실한 히어로 이미지를 찾기 애매한 템플릿(예: magazine, newspaper, sneaker처럼 파일명이 `1,2,3...`으로만 되어 있는 경우)은 임의로 정하지 말고, 후보 2~3개를 결과 리포트에 적어서 사용자가 선택하게 한다.

변환 시 원본 파일은 그대로 두고, `thumbnail.jpg`는 **zip에 포함될 사본으로만** 생성한다 (저장소의 `public/templates/[slug]/`에 실제로 추가해도 되고, 임시 빌드 폴더에서만 만들어도 된다 — 단, 저장소에 추가한다면 기존 파일 삭제/이름 변경은 하지 말 것).

## 3. zip 패키징 규칙

`docs/template-dev-guide.md` 2-1 섹션 기준, zip 루트 구조는 아래와 같아야 한다 (en 예시):

```
airline-en.zip
└── airline/                          ← src/app/en/templates/airline/ 내용 그대로 (theme.json은 1번에서 보강한 버전)
│   ├── _components/
│   ├── theme.css
│   ├── theme.json                    ← 보강된 버전
│   ├── layout.tsx
│   ├── page.tsx
│   └── (하위 폴더 전부)
└── public/
    └── templates/
        └── airline/
            ├── thumbnail.jpg          ← 2번에서 준비한 파일
            └── (기존 이미지 전부, .mp4/.mov/.webm 제외)
```

ko 예시 (`airline-ko.zip`)는 `src/app/ko/templates/airline/` 내용을 동일하게 슬러그 폴더로 넣고, **public 폴더는 포함하지 않는다** (ko는 이미지 공유, en zip의 이미지를 그대로 참조).

**금지 사항 (zip.ts 검증에 의해 거부됨, 미리 제외할 것)**:
- `.mp4`, `.mov`, `.webm` 파일 (car, ir 템플릿의 `*-hero-bg.mp4`는 이미 R2 URL로 코드에서 참조 중이므로 zip에서 완전히 제외)
- `src/`, `translations/` 로 시작하는 경로
- 템플릿 폴더 안의 `DESIGN_RULES.md` 같은 부가 문서 파일도 굳이 포함할 필요 없음 (zip 용량만 늘어남, 제외 권장)

각 슬러그마다 `[slug]-en.zip`, `[slug]-ko.zip` 두 개, 총 34개의 zip 파일을 만든다. 저장 위치는 저장소 루트에 새로 만드는 `dist/template-zips/` 폴더 (이 폴더는 `.gitignore`에 추가해서 커밋되지 않게 할 것).

## 4. 결과 리포트

작업이 끝나면 아래 내용을 정리해서 보고한다:
- 생성된 34개 zip 목록과 각 zip 크기
- thumbnail을 자동으로 못 정한 템플릿과 후보 이미지 목록
- theme.json에 이미 `slug`/`category` 등 필드가 있었는데 표와 다른 값이 들어있던 경우 (덮어썼는지 여부)
- zip 검증 규칙(`src/lib/zip.ts`)을 실제로 통과하는지 직접 시뮬레이션했는지 여부 (가능하면 `extractAndValidateZip`을 로컬에서 돌려보고 통과 확인)

## 5. 이후 단계 (Codex 작업 범위 아님, 참고용)

zip이 만들어지면 사용자가 직접 `/admin/uploads`에서 업로드한다. 단, Supabase `templates` 테이블에는 이미 이 17개 슬러그의 (slug, lang) 행이 `seed.sql`로 들어가 있으므로, 업로드 API가 "이미 존재하는 템플릿입니다" 오류를 낼 것이다. 이 부분은 Codex 작업이 아니라 별도로 처리한다 (기존 행을 지우고 업로드하거나, 관리자 화면에서 직접 대체하는 방식 — 사용자와 협의 후 진행).
