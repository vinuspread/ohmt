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
    desc: "삶과 죽음의 경계에 있는 세계를 배경으로 한 오픈월드 다크 판타지 RPG. 고대 룬이 현실을 재구성하는 힘을 지닌 파괴된 대지를 넘어 운명을 개척하세요.",
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
    desc: "네온으로 물든 대도시에서 부패한 메가코퍼레이션을 무너뜨리기 위해 증강된 군인이 되어 싸우는 하이옥탄 사이버펑크 FPS.",
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
    desc: "생물발광 자연이 되찾은 종말 이후의 세계에서 생존하세요. 제작하고, 건설하고, 대붕괴의 비밀을 밝혀내세요.",
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
    desc: "홀로그램 전장과 고급 AI 기반 적 전술을 특징으로 하는 차세대 전술 전략 게임. 놀라운 SF 전쟁에서 부대를 지휘하세요.",
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
    desc: "고대 생명체가 깨어나는 어둠의 심연으로 빠져드는 서사호러 액션 게임. 제한된 자원으로 생존을 위해 싸우고 우주적 악몽을 풀어내세요.",
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
    title: "OHMT, 새로운 게임 엔진 기술 공개",
    category: "기술",
    date: "2026년 6월 12일",
    image: "/templates/OHMT023-game/news-01.jpg",
    excerpt: "자체 엔진이 차세대 콘솔에서 실시간 레이 트레이싱을 120fps로 구현하며 시각적 충실도의 새로운 기준을 세웠습니다.",
  },
  {
    id: "award-nom",
    title: "섀도우 렐름, 올해의 게임 후보 지명",
    category: "수상",
    date: "2026년 5월 28일",
    image: "/templates/OHMT023-game/news-02.jpg",
    excerpt: "섀도우 렐름이 글로벌 게이밍 어워드에서 최고의 RPG, 최고의 아트 디렉션, 올해의 게임 등 5개 부문 후보에 올랐습니다.",
  },
  {
    id: "studio-expansion",
    title: "OHMT, 신규 개발 허브 오픈",
    category: "스튜디오",
    date: "2026년 4월 15일",
    image: "/templates/OHMT023-game/news-03.jpg",
    excerpt: "몬트리올에 최첨단 개발 센터를 설립하여 지역에 200개의 새로운 일자리를 창출합니다.",
  },
];

export const careers: Career[] = [
  {
    id: "sr-engineer",
    title: "시니어 그래픽스 엔지니어",
    department: "엔지니어링",
    type: "정규직",
    location: "리모트 / 오스틴, TX",
  },
  {
    id: "lead-designer",
    title: "리드 게임 디자이너",
    department: "디자인",
    type: "정규직",
    location: "오스틴, TX",
  },
  {
    id: "concept-artist",
    title: "시니어 컨셉 아티스트",
    department: "아트",
    type: "정규직",
    location: "리모트",
  },
  {
    id: "producer",
    title: "어소시에이트 프로듀서",
    department: "프로덕션",
    type: "정규직",
    location: "오스틴, TX",
  },
];

export const genres: Genre[] = [
  { name: "RPG", icon: "Sword", desc: "깊이 있는 스토리 기반 롤플레잉 경험" },
  { name: "FPS", icon: "Crosshair", desc: "빠른 템포의 1인칭 액션" },
  { name: "전략", icon: "ChevronsUp", desc: "전술적 깊이와 자원 관리" },
  { name: "오픈월드", icon: "Globe", desc: "광활한 탐험형 환경" },
  { name: "서바이벌", icon: "Heart", desc: "자원 scarcity와 지속형 세계" },
  { name: "호러", icon: "Skull", desc: "분위기 있는 긴장감과 심리적 공포" },
];

export const awards: Award[] = [
  { name: "글로벌 게이밍 어워드", year: 2025, category: "최고의 아트 디렉션 - 섀도우 렐름" },
  { name: "인디 엑설런스 어워드", year: 2025, category: "최고의 RPG - 섀도우 렐름" },
  { name: "게임 디벨로퍼스 초이스", year: 2024, category: "최고의 데뷔 스튜디오" },
  { name: "골든 컨트롤러 어워드", year: 2026, category: "가장 기대되는 게임 - 어비스 위딘" },
];
