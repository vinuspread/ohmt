import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// .env.local에서 환경변수 수동 로드
const envFile = readFileSync(join(__dirname, "../.env.local"), "utf-8");
const env = Object.fromEntries(
  envFile
    .split("\n")
    .filter((line) => line.includes("=") && !line.startsWith("#"))
    .map((line) => {
      const idx = line.indexOf("=");
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim().replace(/^"(.*)"$/, "$1")];
    })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const templates = [
  // Airline
  { slug: "airline", lang: "en", name: "Airline", category: "hospitality", description: "Premium airline booking and travel experience template", thumbnail_url: "/templates/airline/og-image.jpg", price: 0, status: "published", sort_order: 1, is_featured: false },
  { slug: "airline", lang: "ko", name: "에어라인", category: "hospitality", description: "프리미엄 항공 예약 및 여행 경험 템플릿", thumbnail_url: "/templates/airline/og-image.jpg", price: 0, status: "published", sort_order: 1, is_featured: false },
  // Architecture
  { slug: "architecture", lang: "en", name: "Architecture Portfolio", category: "portfolio", description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.", thumbnail_url: "/templates/architecture/og-image.jpg", price: 0, status: "published", sort_order: 2, is_featured: false },
  { slug: "architecture", lang: "ko", name: "아키텍처 포트폴리오", category: "portfolio", description: "에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링의 건축 포트폴리오 템플릿.", thumbnail_url: "/templates/architecture/og-image.jpg", price: 0, status: "published", sort_order: 2, is_featured: false },
  // Burger
  { slug: "burger", lang: "en", name: "Burger", category: "hospitality", description: "Premium burger restaurant experience template", thumbnail_url: "/templates/burger/og-image.jpg", price: 0, status: "published", sort_order: 3, is_featured: false },
  { slug: "burger", lang: "ko", name: "버거", category: "hospitality", description: "프리미엄 버거 레스토랑 경험 템플릿", thumbnail_url: "/templates/burger/og-image.jpg", price: 0, status: "published", sort_order: 3, is_featured: false },
  // Car
  { slug: "car", lang: "en", name: "Car Showroom", category: "retail", description: "Luxury car showroom and model showcase template", thumbnail_url: "/templates/car/og-image.jpg", price: 0, status: "published", sort_order: 4, is_featured: false },
  { slug: "car", lang: "ko", name: "자동차 쇼룸", category: "retail", description: "럭셔리 자동차 쇼룸 및 모델 소개 템플릿", thumbnail_url: "/templates/car/og-image.jpg", price: 0, status: "published", sort_order: 4, is_featured: false },
  // Coffee
  { slug: "coffee", lang: "en", name: "Coffee", category: "hospitality", description: "Premium coffee shop & roastery experience template", thumbnail_url: "/templates/coffee/og-image.jpg", price: 0, status: "published", sort_order: 5, is_featured: false },
  { slug: "coffee", lang: "ko", name: "커피", category: "hospitality", description: "프리미엄 커피숍 & 로스터리 경험 템플릿", thumbnail_url: "/templates/coffee/og-image.jpg", price: 0, status: "published", sort_order: 5, is_featured: false },
  // Cosmetic
  { slug: "cosmetic", lang: "en", name: "Cosmetic Store", category: "lifestyle", description: "Beauty and cosmetic brand store template", thumbnail_url: "/templates/cosmetic/og-image.jpg", price: 0, status: "published", sort_order: 6, is_featured: false },
  { slug: "cosmetic", lang: "ko", name: "코스메틱 스토어", category: "lifestyle", description: "뷰티 코스메틱 브랜드 스토어 템플릿", thumbnail_url: "/templates/cosmetic/og-image.jpg", price: 0, status: "published", sort_order: 6, is_featured: false },
  // Dashboard
  { slug: "dashboard", lang: "en", name: "Dashboard", category: "service", description: "Analytics and business intelligence dashboard template", thumbnail_url: "/templates/dashboard/og-image.jpg", price: 0, status: "published", sort_order: 7, is_featured: true },
  { slug: "dashboard", lang: "ko", name: "대시보드", category: "service", description: "분석 및 비즈니스 인텔리전스 대시보드 템플릿", thumbnail_url: "/templates/dashboard/og-image.jpg", price: 0, status: "published", sort_order: 7, is_featured: true },
  // Docs
  { slug: "docs", lang: "en", name: "Documentation", category: "service", description: "Documentation workspace and knowledge base template", thumbnail_url: "/templates/docs/og-image.jpg", price: 0, status: "published", sort_order: 8, is_featured: false },
  { slug: "docs", lang: "ko", name: "문서 시스템", category: "service", description: "문서 협업 워크스페이스 및 지식 베이스 템플릿", thumbnail_url: "/templates/docs/og-image.jpg", price: 0, status: "published", sort_order: 8, is_featured: false },
  // Exhibition
  { slug: "exhibition", lang: "en", name: "Exhibition", category: "portfolio", description: "Museum and art exhibition showcase template", thumbnail_url: "/templates/exhibition/og-image.jpg", price: 0, status: "published", sort_order: 9, is_featured: true },
  { slug: "exhibition", lang: "ko", name: "전시관", category: "portfolio", description: "미술관 및 전시 쇼케이스 템플릿", thumbnail_url: "/templates/exhibition/og-image.jpg", price: 0, status: "published", sort_order: 9, is_featured: true },
  // Fashion
  { slug: "fashion", lang: "en", name: "Fashion Store", category: "lifestyle", description: "Elegant fashion brand store and lookbook template", thumbnail_url: "/templates/fashion/og-image.jpg", price: 0, status: "published", sort_order: 10, is_featured: false },
  { slug: "fashion", lang: "ko", name: "패션 스토어", category: "lifestyle", description: "엘레강트한 패션 브랜드 스토어 및 룩북 템플릿", thumbnail_url: "/templates/fashion/og-image.jpg", price: 0, status: "published", sort_order: 10, is_featured: false },
  // Furniture
  { slug: "furniture", lang: "en", name: "Furniture Modern", category: "retail", description: "Clean and modern furniture store template", thumbnail_url: "/templates/furniture/og-image.jpg", price: 0, status: "published", sort_order: 11, is_featured: false },
  { slug: "furniture", lang: "ko", name: "퍼니처 모던", category: "retail", description: "깔끔하고 현대적인 가구 스토어 템플릿", thumbnail_url: "/templates/furniture/og-image.jpg", price: 0, status: "published", sort_order: 11, is_featured: false },
  // Game
  { slug: "game", lang: "en", name: "Game Studio", category: "lifestyle", description: "Premium game studio & development showcase template", thumbnail_url: "/templates/game/og-image.jpg", price: 0, status: "published", sort_order: 12, is_featured: false },
  { slug: "game", lang: "ko", name: "게임 스튜디오", category: "lifestyle", description: "프리미엄 게임 스튜디오 & 개발 쇼케이스 템플릿", thumbnail_url: "/templates/game/og-image.jpg", price: 0, status: "published", sort_order: 12, is_featured: false },
  // Hotel
  { slug: "hotel", lang: "en", name: "Hotel", category: "hospitality", description: "Premium luxury hotel & resort experience template", thumbnail_url: "/templates/hotel/og-image.jpg", price: 0, status: "published", sort_order: 13, is_featured: false },
  { slug: "hotel", lang: "ko", name: "호텔", category: "hospitality", description: "프리미엄 럭셔리 호텔 & 리조트 경험 템플릿", thumbnail_url: "/templates/hotel/og-image.jpg", price: 0, status: "published", sort_order: 13, is_featured: false },
  // IR
  { slug: "ir", lang: "en", name: "IR", category: "corporate", description: "Investor relations and financial reporting template", thumbnail_url: "/templates/ir/og-image.jpg", price: 0, status: "published", sort_order: 14, is_featured: false },
  { slug: "ir", lang: "ko", name: "IR", category: "corporate", description: "투자자 관계 및 재무 보고 템플릿", thumbnail_url: "/templates/ir/og-image.jpg", price: 0, status: "published", sort_order: 14, is_featured: false },
  // Jewelry
  { slug: "jewelry", lang: "en", name: "Jewelry", category: "lifestyle", description: "Luxury jewelry brand store template", thumbnail_url: "/templates/jewelry/og-image.jpg", price: 0, status: "published", sort_order: 15, is_featured: false },
  { slug: "jewelry", lang: "ko", name: "주얼리", category: "lifestyle", description: "럭셔리 주얼리 브랜드 스토어 템플릿", thumbnail_url: "/templates/jewelry/og-image.jpg", price: 0, status: "published", sort_order: 15, is_featured: false },
  // Kids Education
  { slug: "kids-education", lang: "en", name: "Kids Academy", category: "service", description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.", thumbnail_url: "/templates/kids-education/og-image.jpg", price: 0, status: "published", sort_order: 16, is_featured: false },
  { slug: "kids-education", lang: "ko", name: "키즈 아카데미", category: "service", description: "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.", thumbnail_url: "/templates/kids-education/og-image.jpg", price: 0, status: "published", sort_order: 16, is_featured: false },
  // Magazine
  { slug: "magazine", lang: "en", name: "Magazine", category: "media", description: "Editorial magazine and content publishing template", thumbnail_url: "/templates/magazine/og-image.jpg", price: 0, status: "published", sort_order: 17, is_featured: false },
  { slug: "magazine", lang: "ko", name: "매거진", category: "media", description: "에디토리얼 매거진 및 콘텐츠 퍼블리싱 템플릿", thumbnail_url: "/templates/magazine/og-image.jpg", price: 0, status: "published", sort_order: 17, is_featured: false },
  // Multi Shop
  { slug: "multi-shop", lang: "en", name: "Multi Shop", category: "retail", description: "Multi-category shopping mall template", thumbnail_url: "/templates/multi-shop/og-image.jpg", price: 0, status: "published", sort_order: 18, is_featured: false },
  { slug: "multi-shop", lang: "ko", name: "멀티샵", category: "retail", description: "멀티 카테고리 쇼핑몰 템플릿", thumbnail_url: "/templates/multi-shop/og-image.jpg", price: 0, status: "published", sort_order: 18, is_featured: false },
  // Museum
  { slug: "museum", lang: "en", name: "Museum", category: "portfolio", description: "Art museum and cultural institution showcase template", thumbnail_url: "/templates/museum/og-image.jpg", price: 0, status: "published", sort_order: 19, is_featured: false },
  { slug: "museum", lang: "ko", name: "뮤지엄", category: "portfolio", description: "미술관 및 문화 기관 쇼케이스 템플릿", thumbnail_url: "/templates/museum/og-image.jpg", price: 0, status: "published", sort_order: 19, is_featured: false },
  // Newspaper
  { slug: "newspaper", lang: "en", name: "Newspaper", category: "media", description: "Online newspaper and news portal template", thumbnail_url: "/templates/newspaper/og-image.jpg", price: 0, status: "published", sort_order: 20, is_featured: false },
  { slug: "newspaper", lang: "ko", name: "신문", category: "media", description: "온라인 신문 및 뉴스 포털 템플릿", thumbnail_url: "/templates/newspaper/og-image.jpg", price: 0, status: "published", sort_order: 20, is_featured: false },
  // Portfolio
  { slug: "portfolio", lang: "en", name: "Portfolio", category: "portfolio", description: "Creative portfolio and personal branding template", thumbnail_url: "/templates/portfolio/og-image.jpg", price: 0, status: "published", sort_order: 21, is_featured: false },
  { slug: "portfolio", lang: "ko", name: "포트폴리오", category: "portfolio", description: "크리에이티브 포트폴리오 및 퍼스널 브랜딩 템플릿", thumbnail_url: "/templates/portfolio/og-image.jpg", price: 0, status: "published", sort_order: 21, is_featured: false },
  // Sneaker
  { slug: "sneaker", lang: "en", name: "Sneaker Store", category: "retail", description: "Sneaker and streetwear culture store template", thumbnail_url: "/templates/sneaker/og-image.jpg", price: 0, status: "published", sort_order: 22, is_featured: false },
  { slug: "sneaker", lang: "ko", name: "스니커 스토어", category: "retail", description: "스니커 및 스트리트웨어 문화 스토어 템플릿", thumbnail_url: "/templates/sneaker/og-image.jpg", price: 0, status: "published", sort_order: 22, is_featured: false },
  // Spa
  { slug: "spa", lang: "en", name: "Spa Wellness", category: "lifestyle", description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.", thumbnail_url: "/templates/spa/og-image.jpg", price: 0, status: "published", sort_order: 23, is_featured: false },
  { slug: "spa", lang: "ko", name: "스파 웰니스", category: "lifestyle", description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.", thumbnail_url: "/templates/spa/og-image.jpg", price: 0, status: "published", sort_order: 23, is_featured: false },
  // Studio
  { slug: "studio", lang: "en", name: "Studio", category: "portfolio", description: "Creative studio and project showcase template", thumbnail_url: "/templates/studio/og-image.jpg", price: 0, status: "published", sort_order: 24, is_featured: true },
  { slug: "studio", lang: "ko", name: "스튜디오", category: "portfolio", description: "크리에이티브 스튜디오 및 프로젝트 쇼케이스 템플릿", thumbnail_url: "/templates/studio/og-image.jpg", price: 0, status: "published", sort_order: 24, is_featured: true },
  // Technology
  { slug: "technology", lang: "en", name: "Technology - Robotflow", category: "corporate", description: "AI robotics company and technology showcase template", thumbnail_url: "/templates/technology/og-image.jpg", price: 0, status: "published", sort_order: 25, is_featured: false },
  { slug: "technology", lang: "ko", name: "테크놀로지 - 로봇플로우", category: "corporate", description: "AI 로봇 기업 및 기술 쇼케이스 템플릿", thumbnail_url: "/templates/technology/og-image.jpg", price: 0, status: "published", sort_order: 25, is_featured: false },
  // Wedding
  { slug: "wedding", lang: "en", name: "Wedding", category: "lifestyle", description: "Timeless and authentic wedding photography template with documentary style and fine art elegance.", thumbnail_url: "/templates/wedding/og-image.jpg", price: 0, status: "published", sort_order: 26, is_featured: false },
  { slug: "wedding", lang: "ko", name: "루멘 웨딩", category: "lifestyle", description: "현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록하는 웨딩 사진작가 포트폴리오 템플릿.", thumbnail_url: "/templates/wedding/og-image.jpg", price: 0, status: "published", sort_order: 26, is_featured: false },
  // Yoga
  { slug: "yoga", lang: "en", name: "Yoga", category: "lifestyle", description: "Find your inner peace with premium yoga and wellness classes template", thumbnail_url: "/templates/yoga/og-image.jpg", price: 0, status: "published", sort_order: 27, is_featured: false },
  { slug: "yoga", lang: "ko", name: "요가", category: "lifestyle", description: "프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾는 템플릿", thumbnail_url: "/templates/yoga/og-image.jpg", price: 0, status: "published", sort_order: 27, is_featured: false },
];

console.log(`총 ${templates.length}개 행 upsert 시작...`);

const { data, error } = await supabase
  .from("templates")
  .upsert(templates, { onConflict: "slug,lang" });

if (error) {
  console.error("오류:", error.message);
  process.exit(1);
}

console.log("완료! 54개 템플릿 등록 성공");

// 확인
const { data: count } = await supabase
  .from("templates")
  .select("slug, lang, name, status", { count: "exact" })
  .order("sort_order");

console.log(`\nDB 현재 템플릿 수: ${count?.length}개`);
count?.forEach((t) => console.log(`  [${t.lang}] ${t.slug} - ${t.name} (${t.status})`));
