// src/app/templates/fashion/category/[id]/page.tsx
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
    italicTitle: "COLLECTION",
    subtitle: "SERIES 01 / NEW SILHOUETTES",
    description: "Structure meets fluidity. A detailed exploration of sculptural tailoring, high-density merino wool, and modern proportions designed for the progressive silhouette.",
    type: "products",
    items: [
      { id: "1", name: "SCULPTURAL BLAZER V.01", price: "$890.00", img: "/templates/fashion/product-blazer.jpg", tag: "NEW ARRIVAL" },
      { id: "2", name: "OVERSIZED TRENCH COAT", price: "$1,240.00", img: "/templates/fashion/trench-coat.png", tag: "LIMITED EDITION" },
      { id: "3", name: "MONOLITHIC TROUSERS", price: "$420.00", img: "/templates/fashion/product-trousers.jpg", tag: "ESSENTIAL" },
      { id: "4", name: "ARCHIVAL MERINO KNIT", price: "$380.00", img: "/templates/fashion/product-knit.jpg", tag: "NEW ARRIVAL" },
      { id: "101", name: "MINIMAL WRAP COAT", price: "$1,450.00", img: "/templates/fashion/apollo-belvedere.png", tag: "EXCLUSIVE" },
      { id: "102", name: "TEXTURED SILK BLOUSE", price: "$320.00", img: "/templates/fashion/silk-dress.png", tag: "NEW SEASON" },
      { id: "103", name: "RAW SEAM TROUSERS", price: "$390.00", img: "/templates/fashion/product-trousers.jpg", tag: "ESSENTIAL" },
      { id: "104", name: "CLASSIC OVERCOAT", price: "$1,890.00", img: "/templates/fashion/hero-custom.jpg", tag: "LIMITED" },
      { id: "105", name: "DRAPED MAXI DRESS", price: "$650.00", img: "/templates/fashion/silk-dress.png", tag: "NEW ARRIVAL" },
      { id: "106", name: "UTILITY CARGO JACKET", price: "$780.00", img: "/templates/fashion/exclusive-custom.jpg", tag: "NEW SEASON" },
      { id: "107", name: "TAILORED SUIT VEST", price: "$310.00", img: "/templates/fashion/product-blazer.jpg", tag: "ESSENTIAL" },
      { id: "108", name: "HIGH-COLLAR MERINO SWEATER", price: "$450.00", img: "/templates/fashion/product-knit.jpg", tag: "RESTOCKED" }
    ]
  },
  archive: {
    title: "THE CLASSIC",
    italicTitle: "ARCHIVES",
    subtitle: "SERIES 02 / REVISITED MASTERPIECES",
    description: "Timeless silhouettes curated from our past catalogs. Re-engineered with modern craftsmanship and premium materials for contemporary longevity.",
    type: "products",
    items: [
      { id: "5", name: "CLASSIC LEATHER JACKET", price: "$1,650.00", img: "/templates/fashion/trench-coat.png", tag: "ARCHIVE" },
      { id: "6", name: "MILITARY WOOL PARKA", price: "$980.00", img: "/templates/fashion/product-blazer.jpg", tag: "RESTOCKED" },
      { id: "7", name: "LUXURY CASHMERE KNIT", price: "$450.00", img: "/templates/fashion/product-knit.jpg", tag: "LIMITED" },
      { id: "8", name: "PREMIUM LEATHER BOOTS", price: "$480.00", img: "/templates/fashion/boots.png", tag: "ARCHIVE" },
      { id: "201", name: "ARCHIVE SUEDE BOMBER", price: "$1,280.00", img: "/templates/fashion/exclusive-custom.jpg", tag: "ARCHIVE" },
      { id: "202", name: "WOOL OVERSIZED SCARF", price: "$220.00", img: "/templates/fashion/accessories-2.png", tag: "LIMITED" },
      { id: "203", name: "DOUBLE-BREASTED PEACOAT", price: "$1,150.00", img: "/templates/fashion/exclusive-lifestyle.png", tag: "ARCHIVE" },
      { id: "204", name: "RIGID SELVEDGE DENIM", price: "$290.00", img: "/templates/fashion/product-trousers.jpg", tag: "ESSENTIAL" },
      { id: "205", name: "ATELIER CHELSEA BOOTS", price: "$590.00", img: "/templates/fashion/leather-jacket-2.png", tag: "RESTOCKED" },
      { id: "206", name: "CORDUROY ATELIER JACKET", price: "$680.00", img: "/templates/fashion/silk-dress.png", tag: "ARCHIVE" },
      { id: "207", name: "BELTED WAISTCOAT", price: "$340.00", img: "/templates/fashion/basic-tee.png", tag: "ESSENTIAL" },
      { id: "208", name: "CLASSIC SILK SHIRT", price: "$380.00", img: "/templates/fashion/womenswear-banner.png", tag: "LIMITED" }
    ]
  },
  journal: {
    title: "EDITORIAL",
    italicTitle: "JOURNAL",
    subtitle: "SERIES 03 / ATELIER EXPLORATIONS",
    description: "Essays, critical reflections, and diary entries documenting our continuous research in textile geometry, circular craft, and the poetry of silent sophisticated living.",
    type: "journal",
    articles: [
      {
        id: "j1",
        title: "The Silent Volumes of Sculptural Minimalism",
        category: "DESIGN DIALOGUE",
        date: "MAY 2026",
        summary: "Exploring the dynamic interplay between active silhouettes, anatomical curves, and the void lines that carve out architectural comfort.",
        img: "/templates/fashion/branding-custom.jpg"
      },
      {
        id: "j2",
        title: "Zero Waste Craft: The Tailoring Restructure",
        category: "ATELIER DIARY",
        date: "APRIL 2026",
        summary: "A technical walkthrough detailing our latest zero-waste cutting algorithms and hand-finished seam architecture at our local studio.",
        img: "/templates/fashion/exclusive-custom.jpg"
      },
      {
        id: "j3",
        title: "Atelier Diaries: Sculpting Worsted Monoliths",
        category: "MATERIAL FOCUS",
        date: "MARCH 2026",
        summary: "How double-twist worsted yarn and special dry finishes enable high crease-retention and permanent geometric rigidness in movement.",
        img: "/templates/fashion/hero-custom.jpg"
      }
    ]
  },
  about: {
    title: "THE BRAND",
    italicTitle: "PHILOSOPHY",
    subtitle: "ATELIER ESTABLISHED IN 2026",
    description: "Vinuspread is a progressive, lab-driven fashion laboratory committed to structural perfection, material purity, and the radical longevity of high-end tailoring.",
    type: "about"
  }
};

const CATEGORY_IMAGES: Record<string, string> = {
  collection: "/templates/fashion/hero-custom.jpg",
  archive: "/templates/fashion/exclusive-custom.jpg",
  journal: "/templates/fashion/branding-custom.jpg",
  about: "/templates/fashion/hero-custom.jpg"
};

function FashionCategoryPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = CATEGORY_DATA[id] || CATEGORY_DATA.collection;
  const [visibleCount, setVisibleCount] = React.useState(8);

  const displayedItems = (category.items || []).slice(0, visibleCount);

  return (

    <TemplateWrapper theme={theme}>

      <main className="antialiased bg-white min-h-screen selection:bg-black selection:text-white transition-all">
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
            className="text-[11px] md:text-[11px] font-medium tracking-[0.3em] mr-[-0.3em] text-white/70"
          >
            {category.subtitle}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-[3.5vw] lg:text-[3vw] font-normal tracking-[-0.02em] leading-[1.15] max-w-4xl" style={{ fontFamily: "'Bodoni Moda', 'Didot', serif" }}
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
          className="max-w-5xl mx-auto text-center text-[16px] sm:text-[18px] md:text-[20px] font-normal tracking-[-0.01em] leading-[1.4] text-black/70 normal-case whitespace-pre-line" style={{ fontFamily: "'Bodoni Moda', 'Didot', serif" }}
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
                <SlidersHorizontal size={16} className="group-hover:rotate-90 transition-transform duration-500 shrink-0" /> FILTER
              </button>
              <span className="opacity-45 font-medium leading-none">{displayedItems.length}/{category.items.length}</span>
            </div>

            {/* Curated Grid - 100% matched with Main Page aesthetics */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-32">
              {displayedItems.map((product) => (
                <Link key={product.id} href={`/en/templates/fashion/product/${product.id}`} className="group block">
                  {/* Image Frame with in-frame zoom and minimal tag */}
                  <div className="aspect-square bg-[#F5F5F7] overflow-hidden mb-4 sm:mb-8 relative">
                    <span className="absolute top-3 left-3 z-20 text-[8px] font-bold tracking-[0.2em] bg-white text-black px-2.5 py-1 border border-black/5">
                      {product.tag}
                    </span>
                    
                    <img 
                      src={product.img} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                      alt={product.name} 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 pointer-events-none" />
                    {/* Minimal Border overlay */}
                    <div className="absolute inset-6 border border-white/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
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
                  className="w-full py-4 border border-black/10 text-[13px] font-bold uppercase tracking-[0.4em] text-black hover:bg-black hover:text-white hover:border-black transition-all duration-700 ease-out"
                >
                  LOAD MORE
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 bg-[#FAF9FC] border border-black/5 px-6 md:px-10 group cursor-pointer hover:border-black/15 transition-all duration-700"
              >
                {/* Asymmetric Alternating Image Frame */}
                <div className={`lg:col-span-6 overflow-hidden aspect-[16/10] bg-neutral-100 relative ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <img 
                    src={article.img} 
                    alt={article.title}
                    className="w-full h-full object-cover brightness-95 group-hover:scale-103 transition-all duration-[1.8s] ease-out-quint"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
                </div>
                {/* Article typography */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:px-10 normal-case">
                  <span className="text-[14px] font-bold tracking-[0.3em] text-black/40">{article.category} - {article.date}</span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-snug">{article.title}</h2>
                  <p className="text-[14px] text-black/60 leading-[1.4] font-normal tracking-[0.01em]">{article.summary}</p>
                  <Link href="/en/templates/fashion" className="inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.3em] mr-[-0.3em] pt-4 group border-b border-black/10 w-fit pb-1 hover:border-black hover:tracking-[0.35em] hover:mr-[-0.35em] transition-all duration-700">
                    READ ARTICLE <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-500" />
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
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">01 / LAB DRIVEN</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">MATERIAL LAB</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-[1.4] font-normal">We thoroughly explore only the finest luxury merino wool and high-density dry twist canvas engineered in our custom yarn lab.</p>
              </div>
              <div className="space-y-3 px-6 border-r border-black/5 last:border-0">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">02 / GEOMETRIC</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">SILHOUETTE</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-[1.4] font-normal">Transcending physical anatomy, every piece is sculpted to support a singular and architectural bodily proportion.</p>
              </div>
              <div className="space-y-3 px-6">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/35">03 / RADICAL</span>
                <h4 className="text-[15px] font-bold uppercase tracking-tight">LONGEVITY</h4>
                <p className="text-[14px] text-black/75 max-w-xs mx-auto leading-[1.4] font-normal">Never aligning with transient trends, we commit to premium tailoring built to endure across multiple generations.</p>
              </div>
            </div>
 
            {/* Asymmetric Manifesto Wall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
              {/* Left: 3 Columns - Border Grid */}
              <div className="lg:col-span-3 pr-8 h-full hidden lg:flex flex-col justify-between py-2 min-h-[380px]">
                <span className="text-[14px] font-bold tracking-[0.4em] text-black/45 rotate-90 origin-left translate-x-6 translate-y-6 block">CRAFT MANIFESTO</span>
                <div className="text-[14px] font-bold tracking-[0.2em] text-black/20 uppercase">
                  ESTABLISHED 2026 <br />
                  SEOUL ATELIER LAB
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
                    src="/templates/fashion/branding-custom.jpg" 
                    alt="Atelier Philosophy" 
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
                  <span className="text-[11px] font-medium tracking-[0.8em] text-black/40">SILENT LUXURY</span>
                  <h3 className="text-xl md:text-[2vw] lg:text-[1.7vw] font-bold font-serif text-black/90 leading-[1.1] uppercase tracking-tight">
                    WE BELIEVE IN <br />
                    SILENT SOPHISTICATION.
                  </h3>
                  <p className="text-[15px] text-black/60 leading-[1.4] font-medium tracking-[0.01em]">
                    Vinuspread rejects loud embellishments. We focus on precise tailoring cuts, the tactile density of yarn, and a silent silhouette that flows in movement. This is the **Silent Sophistication** we observe.
                  </p>
                  <p className="text-[15px] text-black/60 leading-[1.4] font-medium tracking-[0.01em]">
                    Our work inherits the geometric spirit of Bauhaus, bringing architectural space and quiet margins to the wearer's daily life.
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
