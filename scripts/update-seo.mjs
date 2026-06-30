/**
 * 모든 템플릿 layout.tsx의 metadata를 SEO 기준으로 일괄 업데이트하는 스크립트
 * 실행: node scripts/update-seo.mjs
 */
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ──────────────────────────────────────────────
// 템플릿별 SEO 데이터
// ──────────────────────────────────────────────
const SEO = {
  airline: {
    en: {
      title: "Airline Brand Website Template | OHMT",
      desc: "A premium airline and aviation brand website template. Professional design for airlines, charter services, and aviation companies.",
      h1: "Airline Brand Website Template",
    },
    ko: {
      title: "항공사 브랜드 웹사이트 템플릿 | OHMT",
      desc: "항공사, 전세기, 항공 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 브랜드 목적에 맞게 디자인과 기능을 커스터마이징할 수 있습니다.",
      h1: "항공사 브랜드 웹사이트 템플릿",
    },
  },
  architecture: {
    en: {
      title: "Architecture Portfolio Website Template | OHMT",
      desc: "A sophisticated architecture portfolio website template with project galleries, design philosophy, and studio services pages.",
      h1: "Architecture Portfolio Website Template",
    },
    ko: {
      title: "건축 포트폴리오 웹사이트 템플릿 | OHMT",
      desc: "건축 포트폴리오를 위한 세련된 웹사이트 템플릿입니다. 프로젝트 갤러리, 디자인 철학, 스튜디오 서비스 페이지를 포함합니다.",
      h1: "건축 포트폴리오 웹사이트 템플릿",
    },
  },
  burger: {
    en: {
      title: "Burger Restaurant Website Template | OHMT",
      desc: "A bold website template for burger restaurants, fast food chains, and food brands. Includes menu, promotions, and location pages.",
      h1: "Burger Restaurant Website Template",
    },
    ko: {
      title: "버거 레스토랑 웹사이트 템플릿 | OHMT",
      desc: "버거 레스토랑, 패스트푸드 브랜드를 위한 웹사이트 템플릿입니다. 메뉴, 프로모션, 매장 안내 페이지를 포함합니다.",
      h1: "버거 레스토랑 웹사이트 템플릿",
    },
  },
  car: {
    en: {
      title: "Automotive & Car Brand Website Template | OHMT",
      desc: "A sleek automotive website template for car brands, dealerships, and vehicle showcases. Features dynamic layouts and vehicle highlight sections.",
      h1: "Automotive & Car Brand Website Template",
    },
    ko: {
      title: "자동차 브랜드 웹사이트 템플릿 | OHMT",
      desc: "자동차 브랜드, 딜러십, 차량 쇼케이스를 위한 웹사이트 템플릿입니다. 다이나믹한 레이아웃과 차량 하이라이트 섹션이 특징입니다.",
      h1: "자동차 브랜드 웹사이트 템플릿",
    },
  },
  coffee: {
    en: {
      title: "Coffee Shop & Roastery Website Template | OHMT",
      desc: "A warm and elegant website template for coffee shops, cafes, and specialty roasteries. Includes menu, brand story, and shop sections.",
      h1: "Coffee Shop & Roastery Website Template",
    },
    ko: {
      title: "카페·로스터리 웹사이트 템플릿 | OHMT",
      desc: "카페, 커피숍, 스페셜티 로스터리를 위한 웹사이트 템플릿입니다. 메뉴, 브랜드 스토리, 온라인 숍 구성이 가능합니다.",
      h1: "카페·로스터리 웹사이트 템플릿",
    },
  },
  cosmetic: {
    en: {
      title: "Beauty & Cosmetics Brand Website Template | OHMT",
      desc: "A premium beauty and cosmetics brand website template with elegant product showcase, brand story, and e-commerce ready layouts.",
      h1: "Beauty & Cosmetics Brand Website Template",
    },
    ko: {
      title: "뷰티·코스메틱 브랜드 웹사이트 템플릿 | OHMT",
      desc: "프리미엄 뷰티·화장품 브랜드를 위한 웹사이트 템플릿입니다. 제품 소개, 브랜드 스토리, 쇼핑몰 구성을 포함합니다.",
      h1: "뷰티·코스메틱 브랜드 웹사이트 템플릿",
    },
  },
  dashboard: {
    en: {
      title: "Admin Dashboard Website Template | OHMT",
      desc: "A clean and functional admin dashboard template with data charts, tables, and analytics widgets. Ideal for SaaS products and internal tools.",
      h1: "Admin Dashboard Website Template",
    },
    ko: {
      title: "관리자 대시보드 웹사이트 템플릿 | OHMT",
      desc: "SaaS 제품, 내부 관리 도구를 위한 대시보드 웹사이트 템플릿입니다. 차트, 통계, 테이블 위젯을 포함합니다.",
      h1: "관리자 대시보드 웹사이트 템플릿",
    },
  },
  docs: {
    en: {
      title: "Documentation Website Template | OHMT",
      desc: "A Notion-style documentation website template for teams, products, and developer tools. Clean layout with sidebar navigation.",
      h1: "Documentation Website Template",
    },
    ko: {
      title: "문서화 사이트 웹사이트 템플릿 | OHMT",
      desc: "팀, 제품, 개발자 도구를 위한 Notion 스타일 문서화 웹사이트 템플릿입니다. 사이드바 네비게이션과 깔끔한 레이아웃이 특징입니다.",
      h1: "문서화 사이트 웹사이트 템플릿",
    },
  },
  exhibition: {
    en: {
      title: "Exhibition & Art Gallery Website Template | OHMT",
      desc: "A premium website template for exhibitions, art galleries, and cultural events. Features immersive layouts and event information sections.",
      h1: "Exhibition & Art Gallery Website Template",
    },
    ko: {
      title: "전시·갤러리 웹사이트 템플릿 | OHMT",
      desc: "전시회, 아트 갤러리, 문화 이벤트를 위한 프리미엄 웹사이트 템플릿입니다. 몰입감 있는 레이아웃과 이벤트 정보 섹션을 포함합니다.",
      h1: "전시·갤러리 웹사이트 템플릿",
    },
  },
  fashion: {
    en: {
      title: "Fashion Brand Website Template | OHMT",
      desc: "An editorial fashion brand website template with bold typography, lookbook layouts, and seasonal collection showcases.",
      h1: "Fashion Brand Website Template",
    },
    ko: {
      title: "패션 브랜드 웹사이트 템플릿 | OHMT",
      desc: "에디토리얼 패션 브랜드를 위한 웹사이트 템플릿입니다. 룩북, 시즌 컬렉션, 브랜드 스토리 레이아웃을 포함합니다.",
      h1: "패션 브랜드 웹사이트 템플릿",
    },
  },
  furniture: {
    en: {
      title: "Furniture & Interior Design Website Template | OHMT",
      desc: "A premium furniture and interior design website template with product showcases, brand story, and shop-ready layouts.",
      h1: "Furniture & Interior Design Website Template",
    },
    ko: {
      title: "가구·인테리어 웹사이트 템플릿 | OHMT",
      desc: "가구, 인테리어 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 제품 쇼케이스, 브랜드 스토리, 쇼핑몰 구성이 가능합니다.",
      h1: "가구·인테리어 웹사이트 템플릿",
    },
  },
  game: {
    en: {
      title: "Game Studio Website Template | OHMT",
      desc: "A dynamic game studio website template for indie studios, game developers, and esports brands. Includes game showcase and careers sections.",
      h1: "Game Studio Website Template",
    },
    ko: {
      title: "게임 스튜디오 웹사이트 템플릿 | OHMT",
      desc: "인디 게임 스튜디오, 게임 개발사, e스포츠 브랜드를 위한 웹사이트 템플릿입니다. 게임 쇼케이스, 팀, 채용 섹션을 포함합니다.",
      h1: "게임 스튜디오 웹사이트 템플릿",
    },
  },
  hotel: {
    en: {
      title: "Luxury Hotel & Resort Website Template | OHMT",
      desc: "A premium hotel and resort website template with room listings, amenities showcase, and booking call-to-action sections.",
      h1: "Luxury Hotel & Resort Website Template",
    },
    ko: {
      title: "호텔·리조트 웹사이트 템플릿 | OHMT",
      desc: "프리미엄 호텔·리조트를 위한 웹사이트 템플릿입니다. 객실 소개, 어메니티, 예약 유도 섹션을 포함합니다.",
      h1: "호텔·리조트 웹사이트 템플릿",
    },
  },
  ir: {
    en: {
      title: "Investor Relations Website Template | OHMT",
      desc: "A professional investor relations website template for public companies. Includes financial highlights, leadership, and shareholder information.",
      h1: "Investor Relations Website Template",
    },
    ko: {
      title: "기업 IR 웹사이트 템플릿 | OHMT",
      desc: "상장사, 스타트업을 위한 투자자 관계(IR) 웹사이트 템플릿입니다. 재무 정보, 경영진 소개, 주주 정보 섹션을 포함합니다.",
      h1: "기업 IR 웹사이트 템플릿",
    },
  },
  jewelry: {
    en: {
      title: "Jewelry & Luxury Brand Website Template | OHMT",
      desc: "An elegant jewelry and luxury brand website template with curated product collections, brand heritage story, and boutique-style layouts.",
      h1: "Jewelry & Luxury Brand Website Template",
    },
    ko: {
      title: "주얼리·럭셔리 브랜드 웹사이트 템플릿 | OHMT",
      desc: "주얼리, 럭셔리 브랜드를 위한 우아한 웹사이트 템플릿입니다. 컬렉션 소개, 브랜드 헤리티지, 부티크 스타일 레이아웃을 포함합니다.",
      h1: "주얼리·럭셔리 브랜드 웹사이트 템플릿",
    },
  },
  "kids-education": {
    en: {
      title: "Kids Education & Learning Website Template | OHMT",
      desc: "A bright and engaging website template for kids education centers, tutoring services, and learning platforms. Includes class and enrollment sections.",
      h1: "Kids Education & Learning Website Template",
    },
    ko: {
      title: "어린이 교육 웹사이트 템플릿 | OHMT",
      desc: "어린이 교육센터, 학원, 교육 플랫폼을 위한 웹사이트 템플릿입니다. 수업, 일정, 등록 안내 페이지를 포함합니다.",
      h1: "어린이 교육 웹사이트 템플릿",
    },
  },
  magazine: {
    en: {
      title: "Magazine & Editorial Website Template | OHMT",
      desc: "A sophisticated magazine and editorial website template for culture, lifestyle, and digital media brands. Features article layouts and category navigation.",
      h1: "Magazine & Editorial Website Template",
    },
    ko: {
      title: "매거진·에디토리얼 웹사이트 템플릿 | OHMT",
      desc: "문화, 라이프스타일, 디지털 미디어 브랜드를 위한 매거진 스타일 웹사이트 템플릿입니다. 아티클 레이아웃과 카테고리 네비게이션을 포함합니다.",
      h1: "매거진·에디토리얼 웹사이트 템플릿",
    },
  },
  "multi-shop": {
    en: {
      title: "Multi-Brand Shop Website Template | OHMT",
      desc: "A versatile multi-brand e-commerce website template with category browsing, product listings, and curated collections.",
      h1: "Multi-Brand Shop Website Template",
    },
    ko: {
      title: "멀티 브랜드 쇼핑몰 웹사이트 템플릿 | OHMT",
      desc: "다양한 브랜드와 상품을 위한 멀티 쇼핑몰 웹사이트 템플릿입니다. 카테고리 탐색, 상품 목록, 큐레이션 컬렉션 구성이 가능합니다.",
      h1: "멀티 브랜드 쇼핑몰 웹사이트 템플릿",
    },
  },
  museum: {
    en: {
      title: "Museum & Cultural Institution Website Template | OHMT",
      desc: "A premium museum and cultural institution website template with exhibition highlights, visitor information, and collection showcase sections.",
      h1: "Museum & Cultural Institution Website Template",
    },
    ko: {
      title: "박물관·문화기관 웹사이트 템플릿 | OHMT",
      desc: "박물관, 문화기관을 위한 프리미엄 웹사이트 템플릿입니다. 전시 소개, 관람 정보, 컬렉션 쇼케이스를 포함합니다.",
      h1: "박물관·문화기관 웹사이트 템플릿",
    },
  },
  newspaper: {
    en: {
      title: "Newspaper & News Website Template | OHMT",
      desc: "A responsive newspaper and online news website template with article layouts, category sections, and editorial typography.",
      h1: "Newspaper & News Website Template",
    },
    ko: {
      title: "뉴스·신문 웹사이트 템플릿 | OHMT",
      desc: "뉴스 미디어, 온라인 신문을 위한 반응형 웹사이트 템플릿입니다. 기사 레이아웃, 카테고리 섹션, 에디토리얼 타이포그래피를 포함합니다.",
      h1: "뉴스·신문 웹사이트 템플릿",
    },
  },
  portfolio: {
    en: {
      title: "Creative Portfolio Website Template | OHMT",
      desc: "A minimal and elegant personal portfolio website template for designers, photographers, developers, and creative professionals.",
      h1: "Creative Portfolio Website Template",
    },
    ko: {
      title: "크리에이티브 포트폴리오 웹사이트 템플릿 | OHMT",
      desc: "디자이너, 사진작가, 개발자, 크리에이티브 전문가를 위한 미니멀 포트폴리오 웹사이트 템플릿입니다.",
      h1: "크리에이티브 포트폴리오 웹사이트 템플릿",
    },
  },
  sneaker: {
    en: {
      title: "Sneaker & Streetwear Brand Website Template | OHMT",
      desc: "A bold sneaker and streetwear brand website template with product launches, drop schedules, and urban lifestyle layouts.",
      h1: "Sneaker & Streetwear Brand Website Template",
    },
    ko: {
      title: "스니커·스트리트웨어 브랜드 웹사이트 템플릿 | OHMT",
      desc: "스니커, 스트리트웨어 브랜드를 위한 웹사이트 템플릿입니다. 신제품 런칭, 드롭 일정, 어반 라이프스타일 레이아웃을 포함합니다.",
      h1: "스니커·스트리트웨어 브랜드 웹사이트 템플릿",
    },
  },
  spa: {
    en: {
      title: "Spa & Wellness Website Template | OHMT",
      desc: "A calming and elegant spa and wellness website template with service menus, booking sections, and serene visual aesthetics.",
      h1: "Spa & Wellness Website Template",
    },
    ko: {
      title: "스파·웰니스 웹사이트 템플릿 | OHMT",
      desc: "스파, 웰니스 브랜드를 위한 웹사이트 템플릿입니다. 서비스 메뉴, 예약 섹션, 고요한 비주얼 디자인이 특징입니다.",
      h1: "스파·웰니스 웹사이트 템플릿",
    },
  },
  studio: {
    en: {
      title: "Architecture & Design Studio Website Template | OHMT",
      desc: "A sophisticated architecture and design studio website template with portfolio projects, team bios, and inquiry sections.",
      h1: "Architecture & Design Studio Website Template",
    },
    ko: {
      title: "건축·공간디자인 스튜디오 웹사이트 템플릿 | OHMT",
      desc: "건축, 공간디자인 스튜디오를 위한 웹사이트 템플릿입니다. 포트폴리오 프로젝트, 팀 소개, 문의 섹션을 포함합니다.",
      h1: "건축·공간디자인 스튜디오 웹사이트 템플릿",
    },
  },
  technology: {
    en: {
      title: "Tech Startup & AI Company Website Template | OHMT",
      desc: "A dynamic technology and AI startup website template with product showcases, team sections, and modern digital aesthetics.",
      h1: "Tech Startup & AI Company Website Template",
    },
    ko: {
      title: "IT·AI 스타트업 웹사이트 템플릿 | OHMT",
      desc: "기술 스타트업, AI 기업을 위한 웹사이트 템플릿입니다. 제품 소개, 팀, 현대적인 디지털 레이아웃을 포함합니다.",
      h1: "IT·AI 스타트업 웹사이트 템플릿",
    },
  },
  wedding: {
    en: {
      title: "Wedding Photography Website Template | OHMT",
      desc: "An elegant wedding photography and event website template with gallery layouts, pricing packages, and storytelling sections.",
      h1: "Wedding Photography Website Template",
    },
    ko: {
      title: "웨딩 사진·이벤트 웹사이트 템플릿 | OHMT",
      desc: "웨딩 사진작가, 이벤트 업체를 위한 우아한 웹사이트 템플릿입니다. 갤러리, 패키지 요금, 스토리텔링 레이아웃을 포함합니다.",
      h1: "웨딩 사진·이벤트 웹사이트 템플릿",
    },
  },
  yoga: {
    en: {
      title: "Yoga & Wellness Studio Website Template | OHMT",
      desc: "A serene yoga and wellness studio website template with class schedules, membership options, and instructor profiles.",
      h1: "Yoga & Wellness Studio Website Template",
    },
    ko: {
      title: "요가·웰니스 스튜디오 웹사이트 템플릿 | OHMT",
      desc: "요가, 웰니스 스튜디오를 위한 웹사이트 템플릿입니다. 클래스 일정, 멤버십, 강사 소개 페이지를 포함합니다.",
      h1: "요가·웰니스 스튜디오 웹사이트 템플릿",
    },
  },
};

// ──────────────────────────────────────────────
// layout.tsx metadata 블록 생성 함수
// ──────────────────────────────────────────────
function buildMetadataBlock(slug, lang) {
  const s = SEO[slug]?.[lang];
  if (!s) return null;
  const altLang = lang === "en" ? "ko" : "en";
  const locale = lang === "en" ? "en_US" : "ko_KR";
  const altLocale = lang === "en" ? "ko_KR" : "en_US";

  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${s.title}",
  description: "${s.desc}",
  openGraph: {
    title: "${s.title}",
    description: "${s.desc}",
    url: "https://ohmt.site/${lang}/templates/${slug}",
    siteName: "OHMT",
    images: [{ url: "/templates/${slug}/og-image.jpg", width: 1200, height: 630, alt: "${s.h1}" }],
    locale: "${locale}",
    type: "website",
    alternateLocale: ["${altLocale}"],
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.title}",
    description: "${s.desc}",
    images: ["/templates/${slug}/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/${lang}/templates/${slug}",
    languages: { "${altLang}": "https://ohmt.site/${altLang}/templates/${slug}" },
  },
};`;
}

// ──────────────────────────────────────────────
// 각 template layout.tsx 업데이트
// ──────────────────────────────────────────────
let updated = 0;
let skipped = 0;

for (const [slug] of Object.entries(SEO)) {
  for (const lang of ["en", "ko"]) {
    const layoutPath = join(ROOT, `src/app/${lang}/templates/${slug}/layout.tsx`);
    if (!existsSync(layoutPath)) {
      skipped++;
      continue;
    }

    const existing = readFileSync(layoutPath, "utf-8");
    const metaBlock = buildMetadataBlock(slug, lang);
    if (!metaBlock) continue;

    // metadata import + export const metadata 블록 제거 후 새로 삽입
    // theme.css import, font import, default export는 유지
    let content = existing;

    // 기존 import type { Metadata } 줄 제거
    content = content.replace(/^import type \{ Metadata \} from "next";\n?/m, "");
    content = content.replace(/^import type \{ Metadata \} from 'next';\n?/m, "");

    // 기존 export const metadata 블록 제거 (중괄호 깊이 추적)
    const metaStart = content.indexOf("export const metadata");
    if (metaStart !== -1) {
      let depth = 0;
      let i = metaStart;
      let inBlock = false;
      while (i < content.length) {
        if (content[i] === "{") { depth++; inBlock = true; }
        if (content[i] === "}") { depth--; }
        if (inBlock && depth === 0) {
          // 세미콜론 포함 제거
          const end = content[i + 1] === ";" ? i + 2 : i + 1;
          content = content.slice(0, metaStart) + content.slice(end);
          break;
        }
        i++;
      }
    }

    // 앞의 빈 줄 정리
    content = content.replace(/^\n+/, "");

    // 새 metadata 블록을 파일 상단에 삽입
    content = metaBlock + "\n\n" + content;

    writeFileSync(layoutPath, content, "utf-8");
    updated++;
    console.log(`✓ ${lang}/templates/${slug}`);
  }
}

console.log(`\n완료: ${updated}개 업데이트, ${skipped}개 스킵`);
