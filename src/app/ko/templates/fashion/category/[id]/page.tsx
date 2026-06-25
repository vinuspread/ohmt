// src/app/ko/templates/OHMT001-fashion/category/[id]/page.tsx
"use client";

import React, { use } from "react";
import Link from "next/link";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { SlidersHorizontal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

// High-end curated dataset designed to 100% match main page typography and assets
const CATEGORY_DATA: Record<string, {
  title: string;
  italicTitle: string;
  subtitle: string;
  description: string;
  type: "products" | "journal" | "about";
  items?: Array<{ id: string; name: string; price: string; img: string; tag: string }>;
  articles?: Array<{ id: string; title: string; category: string; date: string; summary: string; img: string }>;
}> = {
  collection: {
    title: "THE SS26",
    italicTitle: "컬렉션",
    subtitle: "시리즈 01 / 새로운 실루엣",
    description: "구조와 유동성의 만남. 조각적 테일러링, 고밀도 메리노 울, 프로그레시브 실루엣을 위한 현대적 비율에 대한 상세한 탐구.",
    type: "products",
    items: [
      { id: "1", name: "SCULPTURAL BLAZER V.01", price: "$890.00", img: "/templates/OHMT001-fashion/product-blazer.jpg", tag: "신규 입고" },
      { id: "2", name: "OVERSIZED TRENCH COAT", price: "$1,240.00", img: "/templates/OHMT001-fashion/trench-coat.png", tag: "한정판" },
      { id: "3", name: "MONOLITHIC TROUSERS", price: "$420.00", img: "/templates/OHMT001-fashion/product-trousers.jpg", tag: "에센셜" },
      { id: "4", name: "ARCHIVAL MERINO KNIT", price: "$380.00", img: "/templates/OHMT001-fashion/product-knit.jpg", tag: "신규 입고" },
      { id: "101", name: "MINIMAL WRAP COAT", price: "$1,450.00", img: "/templates/OHMT001-fashion/apollo-belvedere.png", tag: "단독" },
      { id: "102", name: "TEXTURED SILK BLOUSE", price: "$320.00", img: "/templates/OHMT001-fashion/silk-dress.png", tag: "뉴 시즌" },
      { id: "103", name: "RAW SEAM TROUSERS", price: "$390.00", img: "/templates/OHMT001-fashion/product-trousers.jpg", tag: "에센셜" },
      { id: "104", name: "CLASSIC OVERCOAT", price: "$1,890.00", img: "/templates/OHMT001-fashion/hero-custom.jpg", tag: "리미티드" },
      { id: "105", name: "DRAPED MAXI DRESS", price: "$650.00", img: "/templates/OHMT001-fashion/silk-dress.png", tag: "신규 입고" },
      { id: "106", name: "UTILITY CARGO JACKET", price: "$780.00", img: "/templates/OHMT001-fashion/exclusive-custom.jpg", tag: "뉴 시즌" },
      { id: "107", name: "TAILORED SUIT VEST", price: "$310.00", img: "/templates/OHMT001-fashion/product-blazer.jpg", tag: "에센셜" },
      { id: "108", name: "HIGH-COLLAR MERINO SWEATER", price: "$450.00", img: "/templates/OHMT001-fashion/product-knit.jpg", tag: "재입고" }
    ]
  },
  archive: {
    title: "THE CLASSIC",
    italicTitle: "아카이브",
    subtitle: "시리즈 02 / 재해석된 걸작",
    description: "과거 카탈로그에서 엄선한 시대를 초월한 실루엣. 현대적 장인정신과 프리미엄 소재로 재탄생하여 오래도록 사랑받는 컬렉션.",
    type: "products",
    items: [
      { id: "5", name: "CLASSIC LEATHER JACKET", price: "$1,650.00", img: "/templates/OHMT001-fashion/trench-coat.png", tag: "아카이브" },
      { id: "6", name: "MILITARY WOOL PARKA", price: "$980.00", img: "/templates/OHMT001-fashion/product-blazer.jpg", tag: "재입고" },
      { id: "7", name: "LUXURY CASHMERE KNIT", price: "$450.00", img: "/templates/OHMT001-fashion/product-knit.jpg", tag: "리미티드" },
      { id: "8", name: "PREMIUM LEATHER BOOTS", price: "$480.00", img: "/templates/OHMT001-fashion/boots.png", tag: "아카이브" },
      { id: "201", name: "ARCHIVE SUEDE BOMBER", price: "$1,280.00", img: "/templates/OHMT001-fashion/exclusive-custom.jpg", tag: "아카이브" },
      { id: "202", name: "WOOL OVERSIZED SCARF", price: "$220.00", img: "/templates/OHMT001-fashion/accessories-2.png", tag: "리미티드" },
      { id: "203", name: "DOUBLE-BREASTED PEACOAT", price: "$1,150.00", img: "/templates/OHMT001-fashion/exclusive-lifestyle.png", tag: "아카이브" },
      { id: "204", name: "RIGID SELVEDGE DENIM", price: "$290.00", img: "/templates/OHMT001-fashion/product-trousers.jpg", tag: "에센셜" },
      { id: "205", name: "ATELIER CHELSEA BOOTS", price: "$590.00", img: "/templates/OHMT001-fashion/leather-jacket-2.png", tag: "재입고" },
      { id: "206", name: "CORDUROY ATELIER JACKET", price: "$680.00", img: "/templates/OHMT001-fashion/silk-dress.png", tag: "아카이브" },
      { id: "207", name: "BELTED WAISTCOAT", price: "$340.00", img: "/templates/OHMT001-fashion/basic-tee.png", tag: "에센셜" },
      { id: "208", name: "CLASSIC SILK SHIRT", price: "$380.00", img: "/templates/OHMT001-fashion/womenswear-banner.png", tag: "리미티드" }
    ]
  },
  journal: {
    title: "EDITORIAL",
    italicTitle: "저널",
    subtitle: "시리즈 03 / 아틀리에 탐구",
    description: "텍스타일 기하학, 순환적 장인정신, 그리고 침묵의 우아한 삶의 시학에 대한 지속적인 연구를 기록한 에세이, 비평, 다이어리.",
    type: "journal",
    articles: [
      {
        id: "j1",
        title: "조각적 미니멀리즘의 침묵하는 볼륨",
        category: "디자인 대화",
        date: "2026년 5월",
        summary: "활동적인 실루엣, 해부학적 곡선, 그리고 건축적 편안함을 만들어내는 공극의 선 사이의 역동적 상호작용을 탐구합니다.",
        img: "/templates/OHMT001-fashion/branding-custom.jpg"
      },
      {
        id: "j2",
        title: "제로 웨이스트 크래프트: 테일러링 재구성",
        category: "아틀리에 일기",
        date: "2026년 4월",
        summary: "최신 제로 웨이스트 커팅 알고리즘과 로컬 스튜디오에서의 수작업 마감 심 아키텍처를 상세히 소개하는 기술 워크스루.",
        img: "/templates/OHMT001-fashion/exclusive-custom.jpg"
      },
      {
        id: "j3",
        title: "아틀리에 일기: 모노리스 소재 조각하기",
        category: "소재 집중",
        date: "2026년 3월",
        summary: "이중 꼬임 소모사와 특수 드라이 피니시가 어떻게 높은 주름 유지력과 움직임 속 영구적 기하학적 강성을 가능하게 하는지.",
        img: "/templates/OHMT001-fashion/hero-custom.jpg"
      }
    ]
  },
  about: {
    title: "THE BRAND",
    italicTitle: "철학",
    subtitle: "2026년 설립 아틀리에",
    description: "비누스프레드는 구조적 완벽성, 소재의 순수성, 그리고 하이엔드 테일러링의 근본적 장수에 헌신하는 진보적인 랩 기반 패션 연구소입니다.",
    type: "about"
  }
};

const CATEGORY_IMAGES: Record<string, string> = {
  collection: "/templates/OHMT001-fashion/hero-custom.jpg",
  archive: "/templates/OHMT001-fashion/exclusive-custom.jpg",
  journal: "/templates/OHMT001-fashion/branding-custom.jpg",
  about: "/templates/OHMT001-fashion/hero-custom.jpg"
};

function FashionCategoryPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = CATEGORY_DATA[id] || CATEGORY_DATA.collection;
  const [visibleCount, setVisibleCount] = React.useState(8);

  const displayedItems = (category.items || []).slice(0, visibleCount);

  return (

    <TemplateWrapper theme={theme}>

      <main className="antialiased bg-white min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      {/* 1. Curated Editorial Hero Visual Banner */}
      <div className="w-full h-[35vh] md:h-[40vh] relative overflow-hidden bg-neutral-900 group">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={CATEGORY_IMAGES[id] || CATEGORY_IMAGES.collection}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-103"
          alt={category.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/40" />
        
        {/* Overlaid Title and Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 text-center space-y-3 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] md:text-[11px] font-medium tracking-tight text-white/70"
          >
            {category.subtitle}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[3.5vw] lg:text-[3vw] font-normal tracking-[-0.02em] leading-[1.15] max-w-4xl" style={{ fontFamily: "'Nanum Myeongjo', 'Bodoni Moda', serif" }}
          >
            <span className="block text-white/70 text-[0.6em] font-normal tracking-[0.1em]">{category.title}</span>
            <span className="block text-white font-normal">{category.italicTitle}</span>
          </motion.h1>
        </div>
      </div>

      {/* Main Body */}
      <div className="pb-16 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto pt-16 space-y-16">
        
        {/* Category Description text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-[16px] sm:text-[18px] md:text-[20px] font-normal tracking-[-0.01em] leading-[1.8] text-black/70 normal-case whitespace-pre-line" style={{ fontFamily: "'Nanum Myeongjo', 'Bodoni Moda', serif" }}
        >
          {category.description}
        </motion.div>


        {/* DYNAMIC SYSTEM */}

        {/* 1. PRODUCT GRID LAYOUT (Collection & Archive) */}
        {category.type === "products" && category.items && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Minimal Toolbar */}
            <div className="border-y border-black/20 py-4 text-[13px] font-bold tracking-[0.3em] flex justify-between items-center mb-8">
              <button className="flex items-center gap-2 hover:text-black/40 transition-colors cursor-pointer group whitespace-nowrap leading-none">
                <SlidersHorizontal size={16} className="group-hover:rotate-90 transition-transform duration-500 shrink-0" /> 필터
              </button>
              <span className="opacity-45 font-medium leading-none">{displayedItems.length}/{category.items.length}</span>
            </div>

            {/* Curated Grid - 100% matched with Main Page aesthetics */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-32">
              {displayedItems.map((product) => (
                <Link key={product.id} href={`/ko/templates/OHMT001-fashion/product/${product.id}`} className="group block">
                  {/* Image Frame with in-frame zoom and minimal tag */}
                  <div className="aspect-square bg-[var(--color-bg-secondary)] overflow-hidden mb-4 sm:mb-8 relative">
                    <span className="absolute top-3 left-3 z-20 text-[8px] font-bold tracking-[0.2em] bg-white text-black px-2.5 py-1 border border-black/10 rounded-[2px]">
                      {product.tag}
                    </span>
                    
                    <img 
                      src={product.img} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt={product.name} 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                    {/* Minimal Border overlay */}
                    <div className="absolute inset-6 border border-white/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                  </div>
                  
                  {/* Info Box - 100% matched text sizing with main page */}
                  <div className="space-y-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <h3 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-normal line-clamp-1">{product.name}</h3>
                    <p className="text-[12px] sm:text-[14px] text-black/50 font-bold">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Premium Load More Button */}
            {category.items.length > visibleCount && (
              <div className="pt-12 md:pt-24">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="w-full py-4 border border-black/10 text-[13px] font-bold uppercase tracking-[0.4em] text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-700 ease-out"
                >
                  더 보기
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* 2. JOURNAL EDITORIAL LAYOUT */}
        {category.type === "journal" && category.articles && (
          <div className="space-y-28">
            <div className="border-t border-black/5 mb-12" />
            {category.articles.map((article, idx) => (
              <motion.div 
                key={article.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 bg-[#FAF9FC] border border-black/5 px-6 md:px-10 group cursor-pointer hover:border-black/15 transition-colors duration-700"
              >
                {/* Asymmetric Alternating Image Frame */}
                <div className={`lg:col-span-6 overflow-hidden aspect-[16/10] bg-neutral-100 relative ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <img 
                    src={article.img} 
                    alt={article.title}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-103 transition-transform duration-[1.8s] ease-out-quint"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
                </div>
                {/* Article typography */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:px-10 normal-case">
                  <span className="text-[14px] font-bold tracking-tight text-black/40">{article.category} - {article.date}</span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-snug">{article.title}</h2>
                  <p className="text-[14px] text-black/60 leading-relaxed font-normal tracking-[0.01em]">{article.summary}</p>
                  <Link href={`/ko/templates/OHMT001-fashion/journal/${article.id}`} className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.3em] mr-[-0.3em] pt-4 group border-b border-black/10 w-fit pb-1 hover:border-black hover:tracking-[0.35em] hover:mr-[-0.35em] transition-[color,letter-spacing,margin] duration-700">
                    기사 읽기 <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
 
        {/* 3. ABOUT EDITORIAL LAYOUT */}
        {category.type === "about" && (
          <div className="space-y-36">
            {/* Minimal Infostrip */}
            <div className="border-y border-black/5 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center normal-case bg-[#FCFCFD]">
              <div className="space-y-3 px-6 border-r border-black/5 last:border-0">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">01 / 랩 기반</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">소재 연구소</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-relaxed font-normal">커스텀 원사 연구소에서 엔지니어링된 최고급 메리노 울과 고밀도 드라이 트위스트 캔버스만을 엄격하게 탐구합니다.</p>
              </div>
              <div className="space-y-3 px-6 border-r border-black/5 last:border-0">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">02 / 기하학</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">실루엣</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-relaxed font-normal">물리적 해부학을 초월하여, 모든 작품은 독특하고 건축적인 신체 비율을 지지하도록 조각됩니다.</p>
              </div>
              <div className="space-y-3 px-6">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">03 / 근본적</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">장수</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-relaxed font-normal">일시적 트렌드를 따르지 않으며, 여러 세대에 걸쳐 지속되도록 제작된 프리미엄 테일러링에 헌신합니다.</p>
              </div>
            </div>
 
            {/* Asymmetric Manifesto Wall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
              {/* Left: 3 Columns - Border Grid */}
              <div className="lg:col-span-3 pr-8 h-full hidden lg:flex flex-col justify-between py-2 min-h-[380px]">
                <span className="text-[14px] font-bold tracking-[0.4em] text-black/45 rotate-90 origin-left translate-x-6 translate-y-6 block">크래프트 선언</span>
                <div className="text-[14px] font-bold tracking-[0.2em] text-black/20 uppercase">
                  설립 2026 <br />
                  서울 아틀리에 연구소
                </div>
              </div>
              
              {/* Right: 9 Columns - Manifesto */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 1.03 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="aspect-[4/5] bg-neutral-100 overflow-hidden relative group cursor-pointer"
                >
                  <img 
                    src="/templates/OHMT001-fashion/branding-custom.jpg" 
                    alt="아틀리에 철학" 
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="space-y-6 normal-case"
                >
                  <span className="text-[11px] font-medium tracking-[0.8em] text-black/40">침묵의 럭셔리</span>
                  <h3 className="text-xl md:text-[2vw] lg:text-[1.7vw] font-bold font-serif text-black/90 leading-[1.5] uppercase tracking-tight">
                    우리는 <br />
                    침묵의 우아함을 믿습니다.
                  </h3>
                  <p className="text-[15px] text-black/60 leading-[1.8] font-medium tracking-[0.01em]">
                    비누스프레드는 과장된 장식을 거부합니다. 정밀한 테일러링 컷, 원사의 촉각적 밀도, 움직임 속에서 흐르는 조용한 실루엣에 집중합니다. 이것이 우리가 추구하는 **침묵의 우아함**입니다.
                  </p>
                  <p className="text-[15px] text-black/60 leading-[1.8] font-medium tracking-[0.01em]">
                    우리의 작업은 바우하우스의 기하학적 정신을 계승하여 건축적 공간과 여백을 착용자의 일상에 가져옵니다.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </main>

    </TemplateWrapper>
);
}


export default function FashionCategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <FashionCategoryPageContent {...props} />
    </React.Suspense>
  );
}
