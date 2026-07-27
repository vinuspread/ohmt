export interface Game {
  id: string;
  title: string;
  genre: string[];
  platform: string[];
  releaseYear: number;
  status: "released" | "upcoming" | "early-access";
  cover: string;
  rating: number;
  desc: string;
  screenshots: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
}

export interface Genre {
  name: string;
  icon: string;
  desc: string;
}

export interface Award {
  name: string;
  year: number;
  category: string;
}

export const games: Game[] = [
  {
    id: "shadow-realm",
    title: "섀도우 렐름",
    genre: ["RPG", "오픈월드"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2024,
    status: "released",
    cover: "/templates/OHMT023-game/game-cover-01.jpg",
    rating: 9.2,
    desc: "삶과 죽음의 경계가 무너진 세계를 탐험하는 오픈월드 다크 판타지 RPG. 고대 룬의 힘으로 뒤틀린 대지에서 자신의 운명을 선택하세요.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-01.jpg",
      "/templates/OHMT023-game/screenshot-03.jpg",
      "/templates/OHMT023-game/screenshot-05.jpg",
    ],
  },
  {
    id: "neon-vengeance",
    title: "네온 벤전스",
    genre: ["FPS", "사이버펑크"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2025,
    status: "released",
    cover: "/templates/OHMT023-game/game-cover-02.jpg",
    rating: 8.7,
    desc: "네온빛 대도시에서 증강 병사가 되어 거대 기업에 맞서는 빠르고 강렬한 사이버펑크 FPS.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-02.jpg",
      "/templates/OHMT023-game/screenshot-04.jpg",
      "/templates/OHMT023-game/screenshot-06.jpg",
    ],
  },
  {
    id: "verdant-fall",
    title: "버던트 폴",
    genre: ["서바이벌", "오픈월드"],
    platform: ["PC", "PS5"],
    releaseYear: 2025,
    status: "early-access",
    cover: "/templates/OHMT023-game/game-cover-03.jpg",
    rating: 8.9,
    desc: "생물 발광 숲이 뒤덮은 종말 이후의 세계에서 살아남으세요. 자원을 모아 거점을 만들고 대붕괴의 비밀을 추적합니다.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-04.jpg",
      "/templates/OHMT023-game/screenshot-01.jpg",
      "/templates/OHMT023-game/screenshot-03.jpg",
    ],
  },
  {
    id: "command-nexus",
    title: "커맨드 넥서스",
    genre: ["전략", "전술"],
    platform: ["PC"],
    releaseYear: 2026,
    status: "upcoming",
    cover: "/templates/OHMT023-game/game-cover-04.jpg",
    rating: 0,
    desc: "홀로그램 전장과 진화하는 AI를 상대하는 전술 전략 게임. 부대를 지휘하고 전장의 흐름을 바꾸세요.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-05.jpg",
      "/templates/OHMT023-game/screenshot-02.jpg",
      "/templates/OHMT023-game/screenshot-06.jpg",
    ],
  },
  {
    id: "abyss-within",
    title: "어비스 위딘",
    genre: ["호러", "액션"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2026,
    status: "upcoming",
    cover: "/templates/OHMT023-game/game-cover-05.jpg",
    rating: 0,
    desc: "고대 존재가 깨어난 심연을 탐험하는 서사 중심의 호러 액션 게임. 한정된 자원으로 살아남으며 우주적 공포의 정체를 밝혀내세요.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-06.jpg",
      "/templates/OHMT023-game/screenshot-03.jpg",
      "/templates/OHMT023-game/screenshot-01.jpg",
    ],
  },
];

export const news: NewsItem[] = [
  {
    id: "tech-announcement",
    title: "차세대 게임 엔진 기술 공개",
    category: "기술",
    date: "2026년 6월 12일",
    image: "/templates/OHMT023-game/news-01.jpg",
    excerpt: "자체 개발 엔진이 차세대 콘솔에서 실시간 레이 트레이싱과 120fps를 지원합니다.",
  },
  {
    id: "award-nom",
    title: "‘섀도우 렐름’, 올해의 게임 후보 선정",
    category: "수상",
    date: "2026년 5월 28일",
    image: "/templates/OHMT023-game/news-02.jpg",
    excerpt: "‘섀도우 렐름’이 글로벌 게이밍 어워드의 올해의 게임, RPG, 아트 디렉션 등 5개 부문 후보에 올랐습니다.",
  },
  {
    id: "studio-expansion",
    title: "몬트리올 개발 스튜디오 개소",
    category: "스튜디오",
    date: "2026년 4월 15일",
    image: "/templates/OHMT023-game/news-03.jpg",
    excerpt: "몬트리올에 새로운 개발 스튜디오를 열고 현지에서 200명을 채용할 예정입니다.",
  },
];

export const careers: Career[] = [
  {
    id: "sr-engineer",
    title: "시니어 그래픽 엔지니어",
    department: "엔지니어링",
    type: "정규직",
    location: "원격 근무 / 미국 오스틴",
  },
  {
    id: "lead-designer",
    title: "리드 게임 디자이너",
    department: "디자인",
    type: "정규직",
    location: "미국 오스틴",
  },
  {
    id: "concept-artist",
    title: "시니어 콘셉트 아티스트",
    department: "아트",
    type: "정규직",
    location: "원격 근무",
  },
  {
    id: "producer",
    title: "프로듀서",
    department: "프로덕션",
    type: "정규직",
    location: "미국 오스틴",
  },
];

export const genres: Genre[] = [
  { name: "RPG", icon: "Sword", desc: "선택과 서사가 깊게 얽힌 롤플레잉" },
  { name: "FPS", icon: "Crosshair", desc: "빠르고 강렬한 1인칭 전투" },
  { name: "전략", icon: "ChevronsUp", desc: "전술과 자원 운용의 깊이" },
  { name: "오픈월드", icon: "Globe", desc: "자유롭게 탐험하는 넓은 세계" },
  { name: "서바이벌", icon: "Heart", desc: "한정된 자원으로 이어가는 생존" },
  { name: "호러", icon: "Skull", desc: "분위기와 심리를 파고드는 공포" },
];

export const awards: Award[] = [
  { name: "글로벌 게이밍 어워드", year: 2025, category: "최우수 아트 디렉션 · 섀도우 렐름" },
  { name: "인디 엑설런스 어워드", year: 2025, category: "최우수 RPG · 섀도우 렐름" },
  { name: "게임 디벨로퍼스 초이스", year: 2024, category: "최우수 신인 스튜디오" },
  { name: "골든 컨트롤러 어워드", year: 2026, category: "최고 기대작 · 어비스 위딘" },
];
