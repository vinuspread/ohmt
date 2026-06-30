"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Play } from "lucide-react";
import React, { useRef } from "react";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
function JewelryPageContent() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = React.useState("All");

  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "collections": `Collections`,
    "engagement": `Engagement`,
    "highJewelry": `High Jewelry`,
    "about": `About`
  },
  "hero": {
    "badge": `OHMT Fine Jewelry`,
    "title1": `The Radiance`,
    "title2": `of Forever`,
    "cta1": `Explore The Edition`,
    "cta2": `Our Heritage`
  },
  "products": {
    "badge": `The Boutique`,
    "title": `The Modern Classics`,
    "tabs": {
      "all": `All`,
      "rings": `Rings`,
      "necklaces": `Necklaces`,
      "earrings": `Earrings`
    },
    "action": `Request Appointment`,
    "items": {
      "item1": `Diamond Solitaire Ring`,
      "item2": `Radiant Pearl Pendant`,
      "item3": `Tiffany-Blue Sapphire Bangle`,
      "item4": `Rose Gold Infinity Band`
    },
    "tags": {
      "engagement": `Engagement`,
      "seasonal": `Seasonal`,
      "luxury": `Luxury`,
      "essential": `Essential`
    }
  },
  "craftsmanship": {
    "badge": `Artisan Technique`,
    "quote": `Every facet is a dialogue between light and stone, hand-polished to achieve OHMT's signature brilliance.`,
    "heritage": `The Heritage`,
    "title1": `Hand-Set`,
    "title2": `With Soul`,
    "desc": `At OHMT, we believe a jewel is more than a material; it is a silent observer of life's most precious moments. Our artisans spend hundreds of hours perfecting a single setting.`,
    "process": `Discover The Process`
  }
};
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const products = [
    { name: t.products.items.item1, price: "$4,250", img: "/templates/OHMT002-jewelry/jewelry-ring.png", tag: t.products.tags.engagement },
    { name: t.products.items.item2, price: "$1,850", img: "/templates/OHMT002-jewelry/jewelry-pendant.png", tag: t.products.tags.seasonal },
    { name: t.products.items.item3, price: "$12,200", img: "/templates/OHMT002-jewelry/jewelry-hero-main.png", tag: t.products.tags.luxury },
    { name: t.products.items.item4, price: "$3,400", img: "/templates/OHMT002-jewelry/jewelry-ring.png", tag: t.products.tags.essential },
  ];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Rings") return product.name.toLowerCase().includes("ring") || product.name.toLowerCase().includes("band") || product.name.toLowerCase().includes("반지");
    if (activeTab === "Necklaces") return product.name.toLowerCase().includes("pendant") || product.name.toLowerCase().includes("bangle") || product.name.toLowerCase().includes("목걸이") || product.name.toLowerCase().includes("뱅글");
    if (activeTab === "Earrings") return product.name.toLowerCase().includes("earring") || product.name.toLowerCase().includes("귀걸이");
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <main ref={containerRef} className="bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white font-sans text-neutral-900">
        <Navbar />

        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/templates/OHMT002-jewelry/jewelry-hero-main.png"
              className="w-full h-full object-cover grayscale-[0.2]"
              alt="OHMT Fine Jewelry Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </motion.div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[13px] uppercase text-white mb-6 block tracking-[0.3em] font-bold opacity-80">
                {t.hero.badge}
              </span>
              <h2 className="text-[11vw] md:text-[6vw] font-serif text-white mb-12 leading-[1.2] flex flex-col items-center">
                <span className="whitespace-nowrap">{t.hero.title1}</span>
                <span className="whitespace-nowrap font-bold text-white">{t.hero.title2}</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-10 py-4 bg-white text-neutral-900 text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                  {t.hero.cta1}
                </button>
                <button className="group flex items-center gap-4 text-white hover:text-[var(--color-primary)] transition-all text-[13px] uppercase tracking-[0.3em] font-bold">
                  {t.hero.cta2} <div className="w-10 h-px bg-white group-hover:bg-[var(--color-primary)] group-hover:w-16 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
              <div>
                <span className="text-[13px] text-[var(--color-primary)] mb-3 block tracking-[0.3em] font-bold uppercase">{t.products.badge}</span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">{t.products.title}</h3>
              </div>
              <div className="flex items-center gap-6 md:gap-10 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {[
                  { id: "All", label: t.products.tabs.all },
                  { id: "Rings", label: t.products.tabs.rings },
                  { id: "Necklaces", label: t.products.tabs.necklaces },
                  { id: "Earrings", label: t.products.tabs.earrings }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 text-[13px] uppercase tracking-[0.3em] font-bold transition-all duration-300 cursor-pointer whitespace-nowrap border-b-[1.5px] shrink-0 hover:opacity-70 ${
                      activeTab === tab.id
                        ? "text-neutral-900 border-[var(--color-primary)]"
                        : "text-neutral-400 border-transparent hover:text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-bg-secondary)] border border-neutral-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <button className="p-2 rounded-full bg-white/60 backdrop-blur-md text-neutral-400 hover:text-[var(--color-primary)] transition-colors">
                        <Heart size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[13px] bg-neutral-900 text-white px-2 py-0.5 uppercase font-bold tracking-[0.1em]">{item.tag}</span>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
                      <button className="w-full py-3 bg-[var(--color-primary)] text-white text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-neutral-900">
                        {t.products.action}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 text-center">
                    <h4 className="text-sm md:text-base font-serif font-bold text-neutral-800 group-hover:text-[var(--color-primary)] transition-colors leading-tight truncate">{item.name}</h4>
                    <p className="text-sm text-neutral-500 font-bold">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="py-10 md:py-20 md:py-32 px-6 md:px-12 bg-[var(--color-bg)]">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img loading="lazy" src="/templates/OHMT002-jewelry/jewelry-craft.png" alt="Jewelry Craftsmanship" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-10 -right-6 lg:-bottom-14 lg:-right-14 w-72 bg-white p-8 hidden md:block border border-neutral-100">
                <span className="text-[var(--color-primary)] text-[13px] font-bold uppercase tracking-[0.3em] block mb-3">{t.craftsmanship.badge}</span>
                <p className="text-sm text-neutral-800 leading-[1.4] font-bold font-serif">
                  "{t.craftsmanship.quote}"
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-[13px] uppercase tracking-[0.3em] text-neutral-400 font-bold">{t.craftsmanship.heritage}</span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold leading-[1.1] tracking-tight">{t.craftsmanship.title1} <span className="text-[var(--color-primary)]">{t.craftsmanship.title2}</span></h3>
              <p className="text-sm md:text-base text-neutral-600 leading-[1.4] max-w-md">
                {t.craftsmanship.desc}
              </p>
              <div className="flex items-center gap-4 group cursor-pointer pt-2">
                <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Play size={12} fill="currentColor" className="translate-x-[1px]" />
                </div>
                <span className="text-[13px] uppercase tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-300">{t.craftsmanship.process}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JewelryPage() {
  return (
    <React.Suspense fallback={null}>
      <JewelryPageContent />
    </React.Suspense>
  );
}
