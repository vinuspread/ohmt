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
    title: "Shadow Realm",
    genre: ["RPG", "Open World"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2024,
    status: "released",
    cover: "/templates/OHMT023-game/game-cover-01.jpg",
    rating: 9.2,
    desc: "An open-world dark fantasy RPG set in a realm between life and death. Forge your destiny across a shattered landscape where ancient runes hold the power to reshape reality.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-01.jpg",
      "/templates/OHMT023-game/screenshot-03.jpg",
      "/templates/OHMT023-game/screenshot-05.jpg",
    ],
  },
  {
    id: "neon-vengeance",
    title: "Neon Vengeance",
    genre: ["FPS", "Cyberpunk"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2025,
    status: "released",
    cover: "/templates/OHMT023-game/game-cover-02.jpg",
    rating: 8.7,
    desc: "A high-octane cyberpunk FPS where you play as an augmented soldier taking down a corrupt megacorporation in a neon-drenched metropolis.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-02.jpg",
      "/templates/OHMT023-game/screenshot-04.jpg",
      "/templates/OHMT023-game/screenshot-06.jpg",
    ],
  },
  {
    id: "verdant-fall",
    title: "Verdant Fall",
    genre: ["Survival", "Open World"],
    platform: ["PC", "PS5"],
    releaseYear: 2025,
    status: "early-access",
    cover: "/templates/OHMT023-game/game-cover-03.jpg",
    rating: 8.9,
    desc: "Survive in a post-apocalyptic world reclaimed by bioluminescent nature. Craft, build, and uncover the mystery of the great collapse.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-04.jpg",
      "/templates/OHMT023-game/screenshot-01.jpg",
      "/templates/OHMT023-game/screenshot-03.jpg",
    ],
  },
  {
    id: "command-nexus",
    title: "Command Nexus",
    genre: ["Strategy", "Tactical"],
    platform: ["PC"],
    releaseYear: 2026,
    status: "upcoming",
    cover: "/templates/OHMT023-game/game-cover-04.jpg",
    rating: 0,
    desc: "A next-gen tactical strategy game featuring holographic battlefields and deep AI-driven enemy tactics. Command your forces in stunning sci-fi warfare.",
    screenshots: [
      "/templates/OHMT023-game/screenshot-05.jpg",
      "/templates/OHMT023-game/screenshot-02.jpg",
      "/templates/OHMT023-game/screenshot-06.jpg",
    ],
  },
  {
    id: "abyss-within",
    title: "Abyss Within",
    genre: ["Horror", "Action"],
    platform: ["PC", "PS5", "Xbox"],
    releaseYear: 2026,
    status: "upcoming",
    cover: "/templates/OHMT023-game/game-cover-05.jpg",
    rating: 0,
    desc: "A visceral horror-action game that plunges you into a dark abyss where ancient creatures awaken. Fight for survival with limited resources and unravel a cosmic nightmare.",
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
    title: "Oh My Template Unveils New Game Engine Technology",
    category: "Technology",
    date: "June 12, 2026",
    image: "/templates/OHMT023-game/news-01.jpg",
    excerpt: "Our proprietary engine achieves real-time ray tracing at 120fps on next-gen consoles, setting a new benchmark for visual fidelity.",
  },
  {
    id: "award-nom",
    title: "Shadow Realm Nominated for Game of the Year",
    category: "Awards",
    date: "May 28, 2026",
    image: "/templates/OHMT023-game/news-02.jpg",
    excerpt: "Shadow Realm receives five nominations at the Global Gaming Awards including Best RPG, Best Art Direction, and Game of the Year.",
  },
  {
    id: "studio-expansion",
    title: "Oh My Template Opens New Development Hub",
    category: "Studio",
    date: "April 15, 2026",
    image: "/templates/OHMT023-game/news-03.jpg",
    excerpt: "We are expanding with a new state-of-the-art development center in Montreal, bringing 200 new jobs to the region.",
  },
];

export const careers: Career[] = [
  {
    id: "sr-engineer",
    title: "Senior Graphics Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Austin, TX",
  },
  {
    id: "lead-designer",
    title: "Lead Game Designer",
    department: "Design",
    type: "Full-time",
    location: "Austin, TX",
  },
  {
    id: "concept-artist",
    title: "Senior Concept Artist",
    department: "Art",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: "producer",
    title: "Associate Producer",
    department: "Production",
    type: "Full-time",
    location: "Austin, TX",
  },
];

export const genres: Genre[] = [
  { name: "RPG", icon: "Sword", desc: "Deep narrative-driven role-playing experiences" },
  { name: "FPS", icon: "Crosshair", desc: "Fast-paced first-person action" },
  { name: "Strategy", icon: "ChevronsUp", desc: "Tactical depth and resource management" },
  { name: "Open World", icon: "Globe", desc: "Vast explorable environments" },
  { name: "Survival", icon: "Heart", desc: "Resource scarcity and persistent worlds" },
  { name: "Horror", icon: "Skull", desc: "Atmospheric tension and psychological fear" },
];

export const awards: Award[] = [
  { name: "Global Gaming Awards", year: 2025, category: "Best Art Direction - Shadow Realm" },
  { name: "Indie Excellence Awards", year: 2025, category: "Best RPG - Shadow Realm" },
  { name: "Game Developers Choice", year: 2024, category: "Best Debut Studio" },
  { name: "Golden Controller Awards", year: 2026, category: "Most Anticipated Game - Abyss Within" },
];
