export interface DocPage {
  slug: string;
  title: string;
  icon: string;
  description: string;
  content: {
    type: "heading" | "text" | "list" | "code" | "quote" | "callout";
    value: string;
    variant?: "h2" | "h3";
    items?: string[];
    language?: string;
  }[];
  parent?: string;
  order: number;
}

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "시작하기",
    icon: "Rocket",
    description: "몇 분 만에 워크스페이스를 설정하고 협업을 시작하세요.",
    order: 1,
    content: [
      { type: "heading", value: "문서 워크스페이스에 오신 것을 환영합니다", variant: "h2" },
      { type: "text", value: "이 문서 템플릿은 지식을 정리하고 기록할 수 있는 깔끔한 공간을 제공합니다. 팀의 두뇌라고 생각하세요. 체계적이고 검색 가능하며 항상 최신 상태로 유지됩니다." },
      { type: "callout", value: "여기 보이는 모든 것은 페이지입니다. 페이지는 폴더처럼 다른 페이지 안에 중첩될 수 있습니다. 부모 페이지 아래에 하위 페이지를 만들어 보세요." },
      { type: "heading", value: "빠른 시작", variant: "h3" },
      { type: "text", value: "첫 번째 워크스페이스를 만들어 보세요. 워크스페이스는 모든 문서, 위키, 프로젝트를 담는 최상위 컨테이너입니다. 팀이나 클라이언트에 따라 여러 워크스페이스를 운영할 수 있습니다." },
      { type: "list", value: "", items: ["사이드바에서 '새 워크스페이스' 클릭", "이름과 설명 입력", "팀원 이메일로 초대", "워크스페이스 안에서 페이지 만들기 시작"] },
      { type: "heading", value: "시스템 요구사항", variant: "h3" },
      { type: "list", value: "", items: ["최신 웹 브라우저 (Chrome 90+, Firefox 88+, Safari 14+)", "실시간 동기화를 위한 인터넷 연결", "1024px 이상 화면 해상도 권장"] },
    ],
  },
  {
    slug: "creating-pages",
    title: "페이지 만들기",
    icon: "FileText",
    description: "페이지를 만들고, 중첩하고, 체계적으로 정리하는 방법을 알아보세요.",
    order: 2,
    parent: "getting-started",
    content: [
      { type: "heading", value: "페이지 기본", variant: "h2" },
      { type: "text", value: "페이지는 문서화의 기본 구성 요소입니다. 각 페이지에는 서식 있는 텍스트, 코드 블록, 이미지 등을 포함할 수 있습니다. 최대 5단계까지 중첩하여 명확한 계층 구조를 만들 수 있습니다." },
      { type: "quote", value: "잘 정리된 문서는 잘 정리된 책상과 같습니다. 모든 것이 제자리에 있고 아무것도 잃어버리지 않습니다." },
      { type: "heading", value: "새 페이지 만들기", variant: "h3" },
      { type: "text", value: "사이드바에서 페이지 옆의 '+' 아이콘을 클릭하거나 Cmd+P 단축키로 빠른 생성 명령어를 사용하세요. 제목을 입력하고 바로 작성을 시작하면 됩니다." },
      { type: "code", value: "# 페이지 제목 - 짧고 설명적으로 작성\n## 섹션 - 내용을 읽기 쉬운 단위로 나누기\n\n마크다운 단축키로 입력 중 서식 적용:\n- **굵게** 강조\n- `코드` 인라인 참조\n- ``` 코드 블록", language: "markdown" },
      { type: "heading", value: "페이지 속성", variant: "h3" },
      { type: "text", value: "모든 페이지에는 상태, 담당자, 우선순위, 사용자 정의 필드 등의 메타데이터 속성을 설정할 수 있습니다. 속성을 사용하여 진행 상황을 추적하고, 카테고리별로 정리하거나, 문서 트리를 필터링할 수 있습니다." },
      { type: "list", value: "", items: ["상태: 초안, 검토 중, 발행, 보관", "담당자: 페이지를 책임지는 팀원", "태그: 다중 태그로 교차 참조", "생성일/수정일: 자동 기록"] },
    ],
  },
  {
    slug: "editor-guide",
    title: "에디터 가이드",
    icon: "Keyboard",
    description: "단축키, 서식, 슬래시 명령어로 에디터를 마스터하세요.",
    order: 3,
    parent: "getting-started",
    content: [
      { type: "heading", value: "슬래시 명령어", variant: "h2" },
      { type: "text", value: "에디터에서 '/'를 입력하면 명령어 메뉴가 열립니다. 제목, 목록, 코드 블록, 구분선 등 모든 블록 유형을 가장 빠르게 삽입할 수 있는 방법입니다." },
      { type: "code", value: "/heading 1    — 큰 제목\n/heading 2    — 중간 제목\n/heading 3    — 소제목\n/bullet      — 글머리 목록\n/number      — 번호 목록\n/todo        — 체크박스 목록\n/code        — 코드 블록\n/quote       — 인용문\n/callout     — 강조 박스\n/divider     — 구분선\n/image       — 이미지 삽입", language: "markdown" },
      { type: "heading", value: "키보드 단축키", variant: "h3" },
      { type: "text", value: "단축키를 익히면 키보드만으로 모든 작업을 수행할 수 있습니다." },
      { type: "list", value: "", items: ["Cmd+P — 페이지 검색", "Cmd+Shift+N — 새 페이지", "Cmd+B — 굵게", "Cmd+I — 기울임", "Cmd+K — 링크 삽입", "Cmd+E — 인라인 코드", "Cmd+Z — 실행 취소", "Cmd+Shift+Z — 다시 실행"] },
      { type: "heading", value: "마크다운 지원", variant: "h3" },
      { type: "text", value: "에디터는 마크다운 스타일 단축키를 지원합니다. 자연스럽게 입력하면 자동으로 서식이 적용됩니다. #은 제목, **는 굵게, `는 인라인 코드, >는 인용문입니다." },
    ],
  },
  {
    slug: "collaboration",
    title: "협업",
    icon: "Users",
    description: "댓글, 멘션, 권한 설정으로 실시간 협업하세요.",
    order: 4,
    content: [
      { type: "heading", value: "실시간 편집", variant: "h2" },
      { type: "text", value: "여러 팀원이 동시에 같은 페이지를 편집할 수 있습니다. 각 사용자의 커서는 다른 색상으로 표시되며, 변경사항은 모든 연결된 클라이언트에 즉시 동기화됩니다." },
      { type: "callout", value: "팁: @멘션을 사용하여 특정 팀원에게 알리세요. 해당 팀원은 정확한 페이지와 위치 링크가 포함된 알림을 받게 됩니다." },
      { type: "heading", value: "댓글 & 토론", variant: "h3" },
      { type: "text", value: "텍스트를 선택하고 댓글 아이콘을 클릭하여 토론을 시작하세요. 댓글은 스레드 형식으로 관리되며, 서식 있는 텍스트, 멘션, 이모지 반응을 지원합니다." },
      { type: "list", value: "", items: ["특정 텍스트 선택 인라인 댓글", "페이지 수준 댓글", "스레드형 답글", "이모지 반응"] },
      { type: "heading", value: "권한 수준", variant: "h3" },
      { type: "code", value: "관리자    — 전체 접근, 설정, 결제\n편집자    — 페이지 생성, 편집, 삭제\n댓글러   — 읽기 + 댓글만\n뷰어     — 읽기 전용", language: "plaintext" },
    ],
  },
  {
    slug: "databases",
    title: "데이터베이스",
    icon: "Database",
    description: "테이블, 보드, 맞춤 속성으로 정보를 체계적으로 관리하세요.",
    order: 5,
    content: [
      { type: "heading", value: "데이터베이스란?", variant: "h2" },
      { type: "text", value: "데이터베이스는 구조화된 속성을 가진 페이지 모음입니다. 각 행이 페이지인 스프레드시트라고 생각하면 됩니다. 데이터베이스는 테이블, 보드, 갤러리, 리스트 등 다양한 형태로 볼 수 있습니다." },
      { type: "heading", value: "데이터베이스 뷰", variant: "h3" },
      { type: "text", value: "각 데이터베이스는 동일한 데이터를 다른 레이아웃으로 보여주는 여러 뷰를 가질 수 있습니다. 한 뷰에서 변경한 내용은 모든 뷰에 반영됩니다." },
      { type: "list", value: "", items: ["테이블 뷰 — 정렬 가능한 컬럼이 있는 스프레드시트", "보드 뷰 — 상태 또는 담당자별 칸반 보드", "갤러리 뷰 — 커버 이미지가 있는 카드 레이아웃", "리스트 뷰 — 간결한 시간순 목록"] },
      { type: "heading", value: "속성 유형", variant: "h3" },
      { type: "code", value: "텍스트      — 자유 형식 텍스트\n숫자       — 숫자 값\n선택       — 단일 선택\n다중 선택  — 다중 선택\n상태       — 할 일 / 진행 중 / 완료\n날짜       — 날짜 선택\n담당자     — 팀원 참조\n파일       — 파일 업로드\n체크박스   — 예 / 아니오\nURL        — 하이퍼링크\n이메일     — 이메일 주소\n전화번호   — 전화번호", language: "plaintext" },
    ],
  },
  {
    slug: "integrations",
    title: "연동",
    icon: "LinkIcon",
    description: "Slack, GitHub, Figma 등을 문서와 연결하세요.",
    order: 6,
    content: [
      { type: "heading", value: "사용 가능한 연동", variant: "h2" },
      { type: "text", value: "팀에서 이미 사용 중인 도구를 문서 워크스페이스에 연결하세요. 연동 기능은 데이터를 동기화하고, 콘텐츠를 삽입하며, 워크플로우를 자동화합니다." },
      { type: "list", value: "", items: ["Slack — Slack에서 알림 수신 및 문서 검색", "GitHub — PR과 이슈를 문서에 연결", "Figma — 디자인과 프로토타입을 인라인으로 삽입", "Google Drive — 문서, 시트, 슬라이드 첨부", "Jira — 이슈와 프로젝트 상태 동기화", "Zapier — 3000개 이상 앱 연동"] },
      { type: "heading", value: "연동 설정하기", variant: "h3" },
      { type: "text", value: "설정 > 연동으로 이동하여 원하는 서비스의 '연결'을 클릭하세요. OAuth 인증을 거친 후 해당 서비스의 콘텐츠를 /embed 명령어로 삽입할 수 있습니다." },
      { type: "quote", value: "연동은 문서를 정적인 지식 베이스에서 운영 전체를 위한 살아있는 컨트롤 센터로 변화시킵니다." },
    ],
  },
  {
    slug: "templates",
    title: "페이지 템플릿",
    icon: "ClipboardCopy",
    description: "페이지 구조를 템플릿으로 저장하고 재사용하세요.",
    order: 7,
    parent: "creating-pages",
    content: [
      { type: "heading", value: "템플릿 사용하기", variant: "h2" },
      { type: "text", value: "템플릿을 사용하면 재사용 가능한 페이지 구조를 만들 수 있습니다. 팀원이 템플릿에서 새 페이지를 만들면 모든 콘텐츠 블록과 속성이 미리 채워져 시간이 절약되고 일관성이 유지됩니다." },
      { type: "heading", value: "템플릿 만들기", variant: "h3" },
      { type: "text", value: "재사용하고 싶은 구조로 페이지를 만든 후, 페이지 메뉴에서 '템플릿으로 저장'을 선택하세요. 이름을 지정하고 접근 가능한 팀 워크스페이스를 선택할 수 있습니다." },
      { type: "list", value: "", items: ["회의록 — 안건, 참석자, 액션 아이템", "프로젝트 개요 — 목표, 일정, 리소스", "버그 리포트 — 환경, 재현 단계, 예상 결과", "주간 리뷰 — 성과, 과제, 다음 단계"] },
      { type: "callout", value: "프로 팁: 조직 전체에서 템플릿을 관리하고 공유하려면 '템플릿' 데이터베이스를 만드세요." },
    ],
  },
  {
    slug: "search",
    title: "검색 & 탐색",
    icon: "Search",
    description: "강력한 전체 텍스트 검색으로 모든 것을 즉시 찾으세요.",
    order: 8,
    content: [
      { type: "heading", value: "전체 텍스트 검색", variant: "h2" },
      { type: "text", value: "모든 페이지, 데이터베이스, 파일 내용을 하나의 검색창에서 검색할 수 있습니다. 결과는 관련성 순으로 정렬되고 페이지별로 그룹화됩니다. Cmd+P를 누르면 어디서든 빠른 검색을 열 수 있습니다." },
      { type: "heading", value: "검색 필터", variant: "h3" },
      { type: "text", value: "고급 필터로 결과를 좁힐 수 있습니다. 여러 필터를 조합하여 원하는 내용을 정확히 찾아보세요." },
      { type: "list", value: "", items: ["페이지 제목 또는 본문 내용으로 검색", "데이터베이스 속성 값으로 검색", "담당자 또는 작성자별 검색", "날짜 범위 지정 (생성일 또는 수정일)", "태그 또는 상태별 검색"] },
      { type: "code", value: "고급 검색 문법:\n\"정확한 문구\"  — 정확한 표현 일치\n-title:구식  — '구식'이 포함된 페이지 제외\nfrom:@john   — John이 작성한 페이지\nhas:todo     — 완료되지 않은 할 일이 있는 페이지", language: "plaintext" },
    ],
  },
  {
    slug: "shortcuts",
    title: "키보드 단축키",
    icon: "Zap",
    description: "파워 유저를 위한 모든 키보드 단축키 목록입니다.",
    order: 9,
    content: [
      { type: "heading", value: "탐색", variant: "h2" },
      { type: "code", value: "Cmd+P        — 빠른 열기 / 검색\nCmd+Shift+N  — 새 페이지\nCmd+[        — 뒤로 가기\nCmd+]        — 앞으로 가기\nEscape       — 검색 닫기 / 메뉴 닫기", language: "plaintext" },
      { type: "heading", value: "서식", variant: "h3" },
      { type: "code", value: "Cmd+B        — 굵게\nCmd+I        — 기울임\nCmd+U        — 밑줄\nCmd+Shift+S  — 취소선\nCmd+K        — 링크 삽입\nCmd+E        — 인라인 코드\nCmd+Shift+M  — 댓글", language: "plaintext" },
      { type: "heading", value: "블록", variant: "h3" },
      { type: "code", value: "Enter        — 새 블록\nShift+Enter  — 블록 내 새 줄\nBackspace    — 빈 블록 삭제\n드래그 핸들  — 블록 순서 변경", language: "plaintext" },
    ],
  },
  {
    slug: "export",
    title: "내보내기 & 백업",
    icon: "Package",
    description: "문서를 마크다운, PDF, HTML 형식으로 내보내세요.",
    order: 10,
    content: [
      { type: "heading", value: "내보내기 옵션", variant: "h2" },
      { type: "text", value: "개별 페이지 또는 전체 워크스페이스를 내보낼 수 있습니다. 워크플로우에 가장 적합한 형식을 선택하세요." },
      { type: "list", value: "", items: ["마크다운 — 개발자와 버전 관리(Git)에 최적", "PDF — 이해관계자와 클라이언트 공유에 최적", "HTML — 정적 사이트로 발행에 최적"] },
      { type: "heading", value: "자동 백업", variant: "h3" },
      { type: "text", value: "설정 > 데이터에서 자동 일일 백업을 활성화할 수 있습니다. 백업은 30일간 보관되며 언제든지 다운로드할 수 있습니다. 엔터프라이즈 플랜은 90일 보관을 지원합니다." },
      { type: "code", value: "# 내보내기 구조\nworkspace-export/\n├── pages/\n│   ├── getting-started.md\n│   ├── creating-pages.md\n│   └── ...\n├── assets/\n│   ├── images/\n│   └── files/\n└── export-metadata.json", language: "plaintext" },
    ],
  },
];
