import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envFile = readFileSync(join(__dirname, "../.env.local"), "utf-8");
const env = Object.fromEntries(
  envFile.split("\n").filter((l) => l.includes("=") && !l.startsWith("#")).map((l) => {
    const idx = l.indexOf("=");
    return [l.slice(0, idx).trim(), l.slice(idx + 1).trim().replace(/^"(.*)"$/, "$1")];
  })
);
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const updates = [
  // EN
  { slug: "fashion",        lang: "en", description: "Elegant fashion brand store with editorial lookbook layout.\nMinimalist design built for high-end apparel brands." },
  { slug: "jewelry",        lang: "en", description: "Luxury jewelry brand store with cinematic product display.\nCrafted for premium collections and fine accessories." },
  { slug: "exhibition",     lang: "en", description: "Art museum and exhibition showcase with immersive layout.\nDesigned for galleries, cultural spaces, and curators." },
  { slug: "furniture",      lang: "en", description: "Clean modern furniture store with refined product browsing.\nBuilt for interior brands and lifestyle retail." },
  { slug: "sneaker",        lang: "en", description: "Sneaker and streetwear store with bold visual identity.\nIdeal for limited drops and collector-focused brands." },
  { slug: "studio",         lang: "en", description: "Creative studio portfolio with project-first layout.\nPerfect for design agencies and visual storytellers." },
  { slug: "portfolio",      lang: "en", description: "Personal portfolio with clean typography and case study focus.\nBuilt for designers, developers, and creative professionals." },
  { slug: "airline",        lang: "en", description: "Premium airline booking and travel experience template.\nDesigned for carriers, charters, and travel services." },
  { slug: "car",            lang: "en", description: "Luxury car showroom with cinematic model showcase.\nBuilt for automotive brands and dealerships." },
  { slug: "cosmetic",       lang: "en", description: "Beauty and cosmetic brand store with elegant editorial design.\nIdeal for skincare, makeup, and wellness brands." },
  { slug: "ir",             lang: "en", description: "Investor relations and financial reporting template.\nBuilt for listed companies and corporate communications." },
  { slug: "magazine",       lang: "en", description: "Editorial magazine with content-first publishing layout.\nDesigned for media brands and digital publications." },
  { slug: "newspaper",      lang: "en", description: "Online newspaper and news portal with editorial structure.\nBuilt for news organizations and media outlets." },
  { slug: "docs",           lang: "en", description: "Documentation workspace and knowledge base template.\nPerfect for SaaS products and developer-facing teams." },
  { slug: "dashboard",      lang: "en", description: "Analytics and business intelligence dashboard template.\nBuilt for data teams and internal reporting tools." },
  { slug: "technology",     lang: "en", description: "AI robotics company and technology showcase template.\nDesigned for deep-tech brands and startup launches." },
  { slug: "multi-shop",     lang: "en", description: "Multi-category shopping mall with full product browsing.\nBuilt for retail platforms and multi-brand stores." },
  { slug: "burger",         lang: "en", description: "Premium burger restaurant with appetite-driven visual design.\nIdeal for QSR brands, food halls, and dining concepts." },
  { slug: "coffee",         lang: "en", description: "Premium coffee shop and roastery experience template.\nBuilt for specialty cafes and artisan beverage brands." },
  { slug: "hotel",          lang: "en", description: "Luxury hotel and resort template with booking-first layout.\nDesigned for boutique hotels and hospitality brands." },
  { slug: "museum",         lang: "en", description: "Art museum and cultural institution showcase template.\nBuilt for permanent collections and traveling exhibitions." },
  { slug: "yoga",           lang: "en", description: "Premium yoga and wellness studio with class booking layout.\nDesigned for instructors, studios, and retreat centers." },
  { slug: "game",           lang: "en", description: "Game studio showcase with dark, immersive visual identity.\nBuilt for indie developers and gaming companies." },
  { slug: "kids-education", lang: "en", description: "Kids academy with playful layout and class discovery focus.\nDesigned for learning centers and educational programs." },
  { slug: "wedding",        lang: "en", description: "Wedding photography portfolio with fine art editorial style.\nBuilt for photographers and wedding creative studios." },
  { slug: "spa",            lang: "en", description: "Premium spa and wellness shop with calm, booking-first design.\nIdeal for treatment centers and holistic lifestyle brands." },
  { slug: "architecture",   lang: "en", description: "Architecture portfolio with editorial typography and project showcase.\nDesigned for firms, studios, and independent architects." },
  { slug: "ev",             lang: "en", description: "Premium electric vehicle brand showcase and order template.\nBuilt for EV manufacturers and automotive launch campaigns." },
  { slug: "fitness",        lang: "en", description: "Premium fitness studio with program browsing and training focus.\nDesigned for gyms, personal trainers, and wellness brands." },
  { slug: "resort",         lang: "en", description: "Coastal luxury resort with immersive visual storytelling.\nBuilt for high-end resorts and destination hospitality brands." },
  // KO
  { slug: "fashion",        lang: "ko", description: "에디토리얼 룩북 기반의 하이엔드 패션 스토어 템플릿.\n고급 어패럴 브랜드에 최적화된 미니멀 레이아웃." },
  { slug: "jewelry",        lang: "ko", description: "시네마틱 제품 연출의 럭셔리 주얼리 스토어 템플릿.\n프리미엄 컬렉션과 파인 액세서리 브랜드에 최적화." },
  { slug: "exhibition",     lang: "ko", description: "몰입형 레이아웃의 미술관 및 전시 쇼케이스 템플릿.\n갤러리, 문화 공간, 큐레이터를 위한 디자인." },
  { slug: "furniture",      lang: "ko", description: "정제된 제품 탐색 구조의 모던 가구 스토어 템플릿.\n인테리어 브랜드와 라이프스타일 리테일에 최적화." },
  { slug: "sneaker",        lang: "ko", description: "스트리트웨어 문화 기반의 스니커 스토어 템플릿.\n한정판 드롭과 컬렉터 중심 브랜드에 최적화." },
  { slug: "studio",         lang: "ko", description: "프로젝트 중심 레이아웃의 크리에이티브 스튜디오 포트폴리오.\n디자인 에이전시와 비주얼 스토리텔러를 위한 템플릿." },
  { slug: "portfolio",      lang: "ko", description: "케이스 스터디 중심의 클린한 퍼스널 포트폴리오 템플릿.\n디자이너, 개발자, 크리에이티브 전문가에 최적화." },
  { slug: "airline",        lang: "ko", description: "프리미엄 항공 예약 및 여행 경험 템플릿.\n항공사, 전세기, 여행 서비스 브랜드에 최적화." },
  { slug: "car",            lang: "ko", description: "시네마틱 모델 쇼케이스의 럭셔리 자동차 쇼룸 템플릿.\n자동차 브랜드와 딜러십에 최적화된 레이아웃." },
  { slug: "cosmetic",       lang: "ko", description: "에디토리얼 디자인의 뷰티 코스메틱 브랜드 스토어 템플릿.\n스킨케어, 메이크업, 웰니스 브랜드에 최적화." },
  { slug: "ir",             lang: "ko", description: "투자자 관계 및 재무 보고를 위한 기업 템플릿.\n상장사와 코퍼릿 커뮤니케이션 팀에 최적화." },
  { slug: "magazine",       lang: "ko", description: "콘텐츠 우선 퍼블리싱 레이아웃의 에디토리얼 매거진 템플릿.\n미디어 브랜드와 디지털 퍼블리케이션에 최적화." },
  { slug: "newspaper",      lang: "ko", description: "에디토리얼 구조의 온라인 신문 및 뉴스 포털 템플릿.\n뉴스 미디어와 언론사 브랜드에 최적화." },
  { slug: "docs",           lang: "ko", description: "문서 협업 워크스페이스 및 지식 베이스 템플릿.\nSaaS 제품과 개발자 대상 팀에 최적화." },
  { slug: "dashboard",      lang: "ko", description: "분석 및 비즈니스 인텔리전스 대시보드 템플릿.\n데이터 팀과 내부 리포팅 도구에 최적화." },
  { slug: "technology",     lang: "ko", description: "AI 로봇 기업 및 기술 쇼케이스 템플릿.\n딥테크 브랜드와 스타트업 런칭에 최적화." },
  { slug: "multi-shop",     lang: "ko", description: "전체 제품 탐색 구조의 멀티 카테고리 쇼핑몰 템플릿.\n리테일 플랫폼과 멀티 브랜드 스토어에 최적화." },
  { slug: "burger",         lang: "ko", description: "식욕을 자극하는 비주얼 디자인의 프리미엄 버거 레스토랑 템플릿.\nQSR 브랜드, 푸드홀, 다이닝 컨셉에 최적화." },
  { slug: "coffee",         lang: "ko", description: "프리미엄 커피숍 & 로스터리 경험 템플릿.\n스페셜티 카페와 아티산 음료 브랜드에 최적화." },
  { slug: "hotel",          lang: "ko", description: "예약 중심 레이아웃의 럭셔리 호텔 & 리조트 템플릿.\n부티크 호텔과 호스피탈리티 브랜드에 최적화." },
  { slug: "museum",         lang: "ko", description: "미술관 및 문화 기관 쇼케이스 템플릿.\n상설 컬렉션과 순회 전시를 위한 디자인." },
  { slug: "yoga",           lang: "ko", description: "클래스 예약 중심의 프리미엄 요가 & 웰니스 스튜디오 템플릿.\n강사, 스튜디오, 리트릿 센터에 최적화." },
  { slug: "game",           lang: "ko", description: "다크하고 몰입감 있는 게임 스튜디오 쇼케이스 템플릿.\n인디 개발사와 게이밍 컴퍼니에 최적화." },
  { slug: "kids-education", lang: "ko", description: "클래스 탐색 중심의 키즈 아카데미 템플릿.\n교육 센터와 어린이 학습 프로그램에 최적화." },
  { slug: "wedding",        lang: "ko", description: "파인 아트 에디토리얼 스타일의 웨딩 사진작가 포트폴리오 템플릿.\n웨딩 사진작가와 크리에이티브 스튜디오에 최적화." },
  { slug: "spa",            lang: "ko", description: "차분하고 예약 중심의 프리미엄 스파 웰니스 템플릿.\n트리트먼트 센터와 홀리스틱 라이프스타일 브랜드에 최적화." },
  { slug: "architecture",   lang: "ko", description: "에디토리얼 타이포그래피와 프로젝트 쇼케이스의 건축 포트폴리오.\n건축 사무소, 스튜디오, 독립 건축가에 최적화." },
  { slug: "ev",             lang: "ko", description: "프리미엄 전기차 브랜드 쇼케이스 및 주문 템플릿.\nEV 제조사와 자동차 런칭 캠페인에 최적화." },
  { slug: "fitness",        lang: "ko", description: "프로그램 탐색 중심의 프리미엄 피트니스 스튜디오 템플릿.\n헬스장, 퍼스널 트레이너, 웰니스 브랜드에 최적화." },
  { slug: "resort",         lang: "ko", description: "몰입감 있는 비주얼의 코스탈 럭셔리 리조트 템플릿.\n고급 리조트와 목적지 호스피탈리티 브랜드에 최적화." },
];

// resort DB 신규 등록 (없을 수 있음)
await sb.from("templates").upsert([
  { slug: "resort", lang: "en", name: "Coastal Luxury Resort", category: "hospitality", description: updates.find(u=>u.slug==="resort"&&u.lang==="en").description, thumbnail_url: "/templates/resort/og-image.jpg", price: 0, status: "published", sort_order: 30, is_featured: false },
  { slug: "resort", lang: "ko", name: "코스탈 럭셔리 리조트", category: "hospitality", description: updates.find(u=>u.slug==="resort"&&u.lang==="ko").description, thumbnail_url: "/templates/resort/og-image.jpg", price: 0, status: "published", sort_order: 30, is_featured: false },
], { onConflict: "slug,lang" });

for (const u of updates) {
  const { error } = await sb.from("templates").update({ description: u.description }).eq("slug", u.slug).eq("lang", u.lang);
  if (error) console.error(u.slug, u.lang, error.message);
}
console.log("완료: 60개 설명 업데이트 + resort 등록");
