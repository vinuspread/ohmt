// src/app/templates/jewelry/category/[id]/page.tsx
"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Heart, ShoppingBag, Filter, ArrowRight, Grid, List, Play, Award, Gem, ShieldCheck } from "lucide-react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import type { Route } from "next";

import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import Button from "../../_components/ui/Button";

// Curated high-end boutique dataset split by linked GNB category ids
const CATEGORY_DATA: Record<string, {
  title: string;
  serifTitle: string;
  subtitle: string;
  description: string;
  type: "collections" | "engagement" | "high" | "about";
  items: Array<{ id: string; name: string; price: string; img: string; tag: string; detail: string }>;
}> = {
  collections: {
    title: "FINE JEWELRY",
    serifTitle: "Collections",
    subtitle: "SERIES 01 / BOUTIQUE CURATION",
    description: "From the eternal brilliance of hand-selected diamonds to the serene flow of natural pearls,\nexplore a curated selection of Oh My Template's finest contemporary masterpieces.",
    type: "collections",
    items: [
      { id: "1", name: "Diamond Solitaire Ring", price: "$2,250.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Engagement", detail: "0.85ct round brilliant cut diamond on a clean platinum band." },
      { id: "2", name: "Radiant Pearl Pendant", price: "$1,850.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Seasonal", detail: "Rare South Sea golden pearl with a 18k yellow gold lock." },
      { id: "3", name: "Sapphire Bangle Set", price: "$1,200.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Luxury", detail: "Curated blue sapphire bangle with micro-pave diamond borders." },
      { id: "4", name: "Rose Gold Infinity Band", price: "$950.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Essential", detail: "Interlocking rose gold infinity band with elegant hand finish." },
      { id: "301", name: "Emerald Drop Pendant", price: "$2,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Exclusive", detail: "Vibrant Colombian emerald drop beneath a brilliant marquise diamond." },
      { id: "302", name: "Marquise Diamond Band", price: "$1,650.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Boutique", detail: "Full eternity band featuring matching marquise diamonds in platinum." },
      { id: "303", name: "Golden Pearl Earrings", price: "$1,420.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Signature", detail: "Prismatic South Sea golden pearls swinging on a diamond stud." },
      { id: "304", name: "Ruby Eternity Ring", price: "$3,100.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Bridal", detail: "Alternate round rubies and baguettes set in classic 18k yellow gold." },
      { id: "305", name: "Platinum Solitaire Pendant", price: "$1,950.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Minimal", detail: "0.70ct ideal cut diamond set simply in a delicate platinum basket." },
      { id: "306", name: "Oval Cut Engagement", price: "$3,450.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Engagement", detail: "Elegant oval cut center stone mounted on a micro-pave split shank." },
      { id: "307", name: "Diamond Hoop Earrings", price: "$1,250.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Essential", detail: "Inside-out diamond hoops perfect for elevated daily sophisticaion." },
      { id: "308", name: "Pearl Choker Set", price: "$2,100.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Seasonal", detail: "Double-strand akoya pearl choker with a vintage white gold sapphire clasp." }
    ]
  },
  engagement: {
    title: "THE ROMANTIC",
    serifTitle: "Engagement",
    subtitle: "SERIES 02 / ETERNAL SYMBOLS",
    description: "Celebrate the ultimate promise with our iconic bridal rings.\nRe-engineered with geometric precision and raw gemstone purity to symbolize uncompromised devotion.",
    type: "engagement",
    items: [
      { id: "5", name: "Classic Round Brilliant", price: "$3,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Engagement", detail: "1.20ct excellent cut brilliant diamond on a shared-prong band." },
      { id: "6", name: "Cushion Cut Diamond Ring", price: "$2,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Luxury", detail: "Cushion modified brilliant diamond framed by a brilliant pave halo." },
      { id: "7", name: "Emerald Cut Solitaire", price: "$3,200.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Signature", detail: "Slim emerald cut diamond highlighting pristine geometric lines." },
      { id: "8", name: "Three-Stone Engagement", price: "$2,950.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Classic", detail: "Center diamond flanked by two tapered baguette side diamonds." },
      { id: "401", name: "Princess Cut Halo", price: "$3,800.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Bridal", detail: "High contrast princess cut diamond surrounded by dual pave tiers." },
      { id: "402", name: "Oval Diamond Platinum", price: "$4,100.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Engagement", detail: "Stunning 1.50ct oval diamond on an ultra-slim high polish band." },
      { id: "403", name: "Rose Gold Twined Band", price: "$1,650.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Modern", detail: "Interlocking strands of micro-pave and warm 18k rose gold." },
      { id: "404", name: "Pear Cut Solitaire", price: "$3,300.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Exclusive", detail: "Tear-drop pear cut diamond elegantly set on a platinum V-prong." },
      { id: "405", name: "Marquise Trilogy Ring", price: "$3,650.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Bridal", detail: "Marquise cut center flanked by two small matched shield-cut diamonds." },
      { id: "406", name: "Vintage Diamond Band", price: "$1,850.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Heritage", detail: "Hand-engraved milgrain border detailing with brilliant bead-set diamonds." },
      { id: "407", name: "Hand-Carved Bridal Band", price: "$1,450.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Bridal", detail: "Slightly asymmetric hand-burnished ring in raw platinum architecture." },
      { id: "408", name: "Pave Cushion Ring", price: "$4,200.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Engagement", detail: "Pristine cushion diamond floating inside a three-sided pave gallery." }
    ]
  },
  "high-jewelry": {
    title: "HAUTE",
    serifTitle: "Joaillerie",
    subtitle: "SERIES 03 / ATELIER MASTERPIECES",
    description: "Rare and exceptional museum-grade masterpieces.\nUnifying high sculptural complexity, natural raw stones, and the pinnacle of classical atelier heritage.",
    type: "high",
    items: [
      { id: "9", name: "Ruby & Diamond Tiara", price: "$12,500.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Exclusive", detail: "Historical ruby and custom marquise-cut diamond scroll tiara." },
      { id: "10", name: "Sapphire Rivière Necklace", price: "$18,900.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Haute", detail: "Continuous rivière necklace holding 48 matched emerald-cut sapphires." },
      { id: "11", name: "Emerald Statement Earrings", price: "$15,600.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Exceptional", detail: "Colombian emerald teardrops hanging from micro-set diamonds." },
      { id: "12", name: "Diamond & Pearl Brooch", price: "$22,000.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Masterpiece", detail: "Baroque natural pearl mounted on a sculpted white gold feather brooch." },
      { id: "501", name: "Empress Ruby Necklace", price: "$26,500.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Museum", detail: "15 matched oval Burmese rubies suspended on dual diamond cascades." },
      { id: "502", name: "Imperial Emerald Ring", price: "$19,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Haute", detail: "Glow-intensive Colombian emerald mounted with large baguette shoulders." },
      { id: "503", name: "Sapphire Chandelier Set", price: "$17,800.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Haute", detail: "Articulated chandelier earrings holding 24 pear-cut Ceylon sapphires." },
      { id: "504", name: "Blue Diamond Brooch", price: "$34,000.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Masterpiece", detail: "Extremely rare fancy blue diamond set in raw hammered white gold." },
      { id: "505", name: "Cascade Pearl Tiara", price: "$21,500.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Exclusive", detail: "Pristine natural teardrop pearls arranged in a graduated arch tiara." },
      { id: "506", name: "Art Deco Diamond Bangle", price: "$16,900.00", img: "/templates/jewelry/jewelry-hero-main.png", tag: "Haute", detail: "Geometrically structured platinum bangle set with baguettes and onyx." },
      { id: "507", name: "Rare Pink Diamond Ring", price: "$42,000.00", img: "/templates/jewelry/jewelry-ring.png", tag: "Museum", detail: "Fancy vivid purplish pink diamond encircled by pink micro-pave." },
      { id: "508", name: "Baroque Pearl Pendant", price: "$15,400.00", img: "/templates/jewelry/jewelry-pendant.png", tag: "Masterpiece", detail: "Sculptured golden dragon holding a unique massive baroque pearl specimen." }
    ]
  },
  about: {
    title: "THE HERITAGE",
    serifTitle: "Maison Story",
    subtitle: "SERIES 04 / ATELIER MANIFESTO",
    description: "At Oh My Template, fine jewelry is a poetic dialogue between geology and geometry.\nSince our founding, we have married high-end sculptural asymmetry with uncompromised stone purity.",
    type: "about",
    items: []
  }
};

const CATEGORY_IMAGES: Record<string, string> = {
  collections: "/templates/jewelry/jewelry-hero-main.png",
  engagement: "/templates/jewelry/jewelry-ring.png",
  "high-jewelry": "/templates/jewelry/jewelry-craft.png",
  about: "/templates/jewelry/jewelry-hero-main.png"
};

function JewelryCategoryPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = CATEGORY_DATA[id] || CATEGORY_DATA.collections;
  const [visibleCount, setVisibleCount] = React.useState(8);
  const products = category.items;
  const displayedProducts = products.slice(0, visibleCount);

  return (

    <TemplateWrapper theme={theme}>

      <main className="antialiased bg-[var(--color-bg-secondary)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900 min-h-screen transition-all">
      {/* Shared Reusable Premium Navbar */}
      <Navbar />

      {/* 1. Curated Editorial Hero Visual Banner */}
      <div className="w-full h-[35vh] md:h-[40vh] relative overflow-hidden bg-neutral-900 group">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={CATEGORY_IMAGES[id] || CATEGORY_IMAGES.collections}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-103"
          alt={category.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/40" />
        
        {/* Overlaid Title and Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 text-center space-y-4 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            className="text-[14px] uppercase font-bold tracking-[0.3em] -mr-[0.3em] text-[var(--color-primary)]"
          >
            {category.subtitle}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-4xl md:text-5xl lg:text-[3.5vw] font-bold tracking-[-0.01em] uppercase leading-[1.0] drop-shadow-sm text-center"
          >
            <span className="block text-white text-center font-bold tracking-wider">{category.title}</span>
            <span className="block font-serif text-white/80 tracking-[0.02em] text-center font-bold mt-2">{category.serifTitle}</span>
          </motion.h1>
        </div>
      </div>

      {/* Main Body */}
      <div className="pb-16 md:pb-32 px-6 max-w-[1440px] mx-auto pt-16 space-y-16">
        
        {/* Category Description text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-[16px] sm:text-[20px] md:text-[26px] font-serif font-medium tracking-[0.01em] leading-[1.5] text-neutral-800 normal-case whitespace-pre-line"
        >
          {category.description}
        </motion.p>

        <div className="w-16 h-[1px] bg-neutral-200/60 mx-auto" />

        {/* 1. COLLECTIONS SPECIFIC ASYMMETRIC LOOKBOOK */}
        {category.type === "collections" && (
          <div className="space-y-32">
            {/* Minimal Toolbar */}
            <div className="border-y border-neutral-200/50 py-6 mb-20 flex justify-between items-center text-[13px] uppercase font-bold tracking-[0.3em]">
               <Button variant="ghost" className="flex items-center gap-3 cursor-pointer">
                  <Filter size={13} /> Filter & Sort
                </Button>
               <span className="opacity-45 uppercase font-medium">CURATION 04 PIECES FOUND</span>
            </div>             {/* Asymmetric Emerald Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-24">
              {displayedProducts.map((item, i) => (
                <Link key={item.id} href={`/en/templates/jewelry/product/${item.id}`} className="group block space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="cursor-pointer"
                  >
                    {/* Image Box with thin border expand on hover */}
                    <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-100/50">
                      <span className="absolute top-3 left-3 z-20 text-[12px] font-bold tracking-[0.15em] bg-white text-[var(--color-primary)] px-2 py-0.5 border border-neutral-100">
                        {item.tag}
                      </span>
                      
                      <img 
                        src={item.img} 
                        className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-103" 
                        alt={item.name} 
                      />
                      
                      {/* Thin overlay border */}
                      <div className="absolute inset-5 border border-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none z-10" />
                    </div>
                    
                    {/* Info */}
                    <div className="space-y-2 text-center transition-transform duration-300 ease-out group-hover:-translate-y-1">
                      <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                      <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
             {/* Premium Load More Button */}
            {products.length > visibleCount && (
              <div className="flex justify-center pt-12 md:pt-24">
                <Button
                  variant="bordered"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                >
                  LOAD MORE MASTERPIECES
                </Button>
              </div>
            )}
          </div>
        )}

        {/* 2. ENGAGEMENT ROMANTIC WEDDING PORTFOLIO */}
        {category.type === "engagement" && (
          <div className="space-y-36">
            {/* Wedding banner manifesto */}
            <div className="border-t border-b border-neutral-200/50 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[var(--color-bg-secondary)] px-8 md:px-14 rounded-none normal-case">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[14px] font-bold tracking-[0.4em] text-neutral-400">SACRED STATEMENT</span>
                <h3 className="text-2xl font-serif font-bold uppercase tracking-wide text-neutral-800 leading-snug">Elegance is the only beauty that never fades.</h3>
                <p className="text-[16px] font-normal text-neutral-700 max-w-xl leading-[1.4]">
                  Every single wedding ring undergoes a rigorous and precise setting process by seasoned master artisans. The brilliant transparency of the raw diamond specimen yields countless mesmerizing refractions in reaction to the ambient light source, beautifully sustaining the sacred purity of eternal devotion.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button variant="bordered" className="px-12 py-6 text-[14px] font-bold uppercase tracking-[0.3em]">
                  BOOK CONSULTATION
                </Button>
              </div>
            </div>

            {/* Engagement Grid with in-frame rotation zoom */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-12">
              {displayedProducts.map((item, i) => (
                <Link key={item.id} href={`/en/templates/jewelry/product/${item.id}`} className="group block space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="cursor-pointer"
                  >
                    <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-100/50">
                      <img 
                        src={item.img} 
                        className="w-full h-full object-cover transition-all duration-[2.2s] group-hover:scale-105 group-hover:rotate-2" 
                        alt={item.name} 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-primary)]/5 transition-all duration-300" />
                    </div>
                    
                    <div className="space-y-2 text-center transition-transform duration-300 group-hover:-translate-y-1">
                      <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                      <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Premium Load More Button */}
                {products.length > visibleCount && (
                  <div className="col-span-1 md:col-span-2 flex justify-center pt-16">
                    <Button
                      variant="bordered"
                      onClick={() => setVisibleCount((prev) => prev + 4)}
                      className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                    >
                      LOAD MORE MASTERPIECES
                    </Button>
                  </div>
                )}
          </div>
        )}

        {/* 3. HIGH JEWELRY MUSEUM CURATION */}
        {category.type === "high" && (
          <div className="space-y-36">
            {/* Museum grid border wall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Museum Tag - 3 Columns */}
              <div className="lg:col-span-3 border-r border-neutral-200/50 pr-8 h-full hidden lg:flex flex-col justify-between py-2 min-h-[380px]">
                <span className="text-[14px] font-bold tracking-[0.6em] text-neutral-400 rotate-90 origin-left translate-x-6 translate-y-6 block">HAUTE GALLERY</span>
                <div className="text-[14px] font-bold tracking-[0.4em] text-neutral-400 uppercase">
                  EXCLUSIVE WORKS <br />
                  CURATOR SPECIFIED
                </div>
              </div>
              
              {/* Right Curated List - 9 Columns */}
              <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-12">
                {displayedProducts.map((item, i) => (
                  <Link key={item.id} href={`/en/templates/jewelry/product/${item.id}`} className="group block space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 1 }}
                      className="cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] mb-5 sm:mb-6 overflow-hidden bg-white border border-neutral-200/30">
                        {/* High Contrast Filter */}
                        <img 
                          src={item.img} 
                          className="w-full h-full object-cover brightness-95 group-hover:scale-103 transition-transform duration-[2s]" 
                          alt={item.name} 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                        <div className="absolute inset-5 border border-neutral-300/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none z-10" />
                      </div>
                      
                      <div className="space-y-2 text-center normal-case transition-transform duration-300 group-hover:-translate-y-1">
                        <h4 className="text-[15px] sm:text-[18px] font-serif font-bold text-neutral-900 tracking-wide uppercase group-hover:text-[var(--color-primary)] transition-colors leading-tight">{item.name}</h4>
                        <p className="text-[12px] sm:text-[14px] tracking-[0.05em] text-[var(--color-primary)] font-semibold leading-tight">{item.price}</p>
                        <p className="text-[12px] sm:text-[13px] text-neutral-500 font-normal pt-2 max-w-xs mx-auto leading-normal">{item.detail}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}

                {/* Premium Load More Button inside high-jewelry 9-col container */}
                {products.length > visibleCount && (
                  <div className="col-span-1 md:col-span-2 flex justify-center pt-16">
                <Button
                  variant="bordered"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  className="px-16 py-6 text-[14px] font-bold uppercase tracking-[0.4em]"
                >
                  LOAD MORE MASTERPIECES
                </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 4. BRAND PHILOSOPHY ABOUT PAGE (Inspired by Jewelix Webflow) */}
        {category.type === "about" && (
          <div className="space-y-40">
            {/* The Pillars Section */}
            <div className="space-y-16">
              <div className="text-center">
                <span className="text-[14px] font-bold tracking-[0.4em] text-[var(--color-primary)] uppercase block mb-4">MAISON STANDARDS</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-neutral-800">The Pillars of Oh My Template</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Gem className="w-8 h-8 text-[var(--color-primary)] strokeWidth={1}" />,
                    title: "Uncompromising Purity",
                    desc: "Every diamond exceeds classic GIA thresholds. Hand-selected for exceptional refraction and intense crystal fire."
                  },
                  {
                    icon: <Award className="w-8 h-8 text-[var(--color-primary)] strokeWidth={1}" />,
                    title: "Architectural Geometry",
                    desc: "Sculpted with mathematical asymmetry. A dynamic interplay of raw facets, sleek platinum, and pure structural voids."
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary)] strokeWidth={1}" />,
                    title: "Atelier Preservation",
                    desc: "Preserving traditional French hand-set pavé. Every micro-claw is shaped with custom tools to avoid micro-fractures."
                  }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="p-10 bg-white border border-neutral-100/60 relative group cursor-default transition-all duration-300 hover:border-[var(--color-primary)]/20"
                  >
                    <div className="mb-8">{pillar.icon}</div>
                    <h3 className="text-lg font-serif font-bold tracking-wide mb-4 text-neutral-800">{pillar.title}</h3>
                    <p className="text-sm font-normal text-neutral-500 leading-[1.4] normal-case">{pillar.desc}</p>
                    <div className="absolute inset-4 border border-[var(--color-primary)]/10 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Showcase Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
            >
              <img 
                src="/templates/jewelry/jewelry-craft.png" 
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                alt="Atelier Cinematic Film"
              />
              <div className="absolute inset-0 bg-neutral-900/10" />
              
              <div className="relative z-10 text-center px-6 max-w-2xl space-y-8">
                <span className="text-[14px] font-bold tracking-[0.6em] text-white/80 uppercase block">CINEMATIC EXPERIENCE</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Maison Heritage Film</h3>
                <p className="text-[14px] font-normal text-white/75 leading-[1.4] max-w-md mx-auto normal-case">
                  Step inside our boutique studio and observe the sacred, meticulous hours poured into every micro-setting.
                </p>
                <div className="flex justify-center pt-4">
                  <div className="group flex items-center justify-center w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 cursor-pointer">
                    <Play size={22} fill="currentColor" className="ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Slider */}
            <TestimonialSlider />
          </div>
        )}

      </div>
      <Footer />
    </main>

    </TemplateWrapper>
);
}

// Client Testimonials Slider Data
const TESTIMONIALS = [
  {
    quote: "Oh My Template's engagement band is a stunning feat of geometry. The stone catches light from angles I didn't think were mathematically possible.",
    author: "ELENA ROSTOVA",
    role: "Collector / Vogue Contributor"
  },
  {
    quote: "The Emerald statement earrings are museum-grade masterpieces. The absolute purity of the stones and precision setting are entirely breathtaking.",
    author: "MARCUS CHEN",
    role: "Fine Art Curator"
  },
  {
    quote: "A rare case where structural minimalism actually elevates the brilliance. Custom tailoring fine jewelry has found its modern pinnacle.",
    author: "SOPHIE LARSSON",
    role: "Founder, Atelier Nord"
  }
];

function TestimonialSlider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-neutral-100 py-12 md:py-24 px-8 md:px-16 text-center max-w-4xl mx-auto space-y-10 relative overflow-hidden">
      <span className="text-[14px] font-bold tracking-[0.4em] text-neutral-400 block">CLIENT TESTIMONIALS</span>
      <div className="min-h-[120px] flex items-center justify-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="space-y-6"
        >
          <p className="text-[18px] md:text-[20px] font-serif font-bold text-neutral-800 leading-[1.4] normal-case">
            "{TESTIMONIALS[index].quote}"
          </p>
          <div className="space-y-1">
            <h5 className="text-[14px] font-bold tracking-[0.3em] text-neutral-900">{TESTIMONIALS[index].author}</h5>
            <p className="text-[14px] text-neutral-400 font-medium tracking-[0.2em]">{TESTIMONIALS[index].role}</p>
          </div>
        </motion.div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 pt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === i ? "bg-[var(--color-primary)] w-6" : "bg-neutral-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


export default function JewelryCategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <JewelryCategoryPageContent {...props} />
    </React.Suspense>
  );
}
