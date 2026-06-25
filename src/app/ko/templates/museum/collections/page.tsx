"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { collections } from "../data/collections";
import { Plus } from "lucide-react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const LIMIT_PER_PAGE = 10;

function CollectionsPageContent() {

  const CATEGORIES = ["All", "Sculpture", "Fresco", "Marble"] as const;
  const categoryLabels: Record<string, string> = { All: "전체", Sculpture: "조각", Fresco: "벽화", Marble: "대리석" };

  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);

  // Filter items based on active category
  const filteredItems = collections.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  // Reset count whenever category changes
  useEffect(() => {
    setVisibleCount(LIMIT_PER_PAGE);
  }, [activeCategory]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + LIMIT_PER_PAGE);
  };

  return (

    <TemplateWrapper theme={theme}>

      <>
      <Header />
      <main className="antialiased min-h-screen bg-[var(--color-primary)] text-[var(--color-accent)] pt-16 md:pt-28 pb-20">
      
      {/* Intro & Stats Section */}
      <div className="px-6 md:px-16 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 items-end"
        >
          <div>
            <span className="text-[13px] uppercase font-bold tracking-[0.5em] text-white/40 block mb-6 px-1">{"아카이브"}</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.5] tracking-tighter break-keep">{"바티칸의 명작들"}</h1>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-12 md:border-l md:border-white/10 md:pl-16 pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
            <p className="text-sm md:text-base text-white/50 font-normal leading-relaxed max-w-sm flex-1 break-keep">
              {"엄선된 소장품들의 디지털 큐레이션을 경험해 보세요. 각각의 작품은 인류의 기술적 도약과 영적인 헌신의 이정표를 담고 있습니다."}
            </p>
            <div className="flex gap-8 md:gap-12 shrink-0">
              <div className="flex flex-col">
                <span className="text-5xl md:text-8xl font-serif leading-none">{collections.length}</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30 mt-2">{"총 소장품 수"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-8xl font-serif leading-none">54</span>
                <span className="text-[8px] uppercase tracking-widest text-white/30 mt-2">{"전시실 수"}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 md:px-16 mb-10">
        <div className="flex items-center gap-2 pb-4 overflow-x-auto">
          <div className="flex gap-2 shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[13px] uppercase font-medium tracking-normal transition-colors border whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-[var(--color-accent)] text-[var(--color-primary)] border-[var(--color-accent)]" 
                  : "text-white/40 border-white/10 hover:border-white/40"
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
        <div className="border-b border-white/10 pb-3">
          <span className="text-[13px] uppercase tracking-widest text-white/30 font-medium break-keep">
            {"총 {total}점 중 {count}점의 작품 전시 중".replace('{count}', displayedItems.length.toString()).replace('{total}', filteredItems.length.toString())}
          </span>
        </div>
      </div>

      {/* Optimized Asymmetric Grid (Preventing Flickers) */}
      <div className="px-6 md:px-16 min-h-[500px]">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence initial={false}>
            {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative group overflow-hidden bg-[var(--color-primary)] aspect-[3/4]"
                >
                  <Link href={`/ko/templates/museum/collections/${item.slug}`} className="block w-full h-full cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-[filter,transform] duration-[2s] ease-out grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                         <span className="text-[12px] uppercase tracking-[0.4em] text-white/50 mb-3 block">{item.tag}</span>
                         <h3 className="text-2xl md:text-4xl font-serif break-keep">
                            {item.title}
                         </h3>
                    </div>

                    <div className="absolute top-8 left-8 mix-blend-difference overflow-hidden">
                       <span className="text-[13px] opacity-50 block group-hover:-translate-y-full transition-transform duration-500">{"소장품"}</span>
                    </div>
                  </Link>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOAD MORE BUTTON */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-500">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <span className="text-[13px] uppercase font-medium tracking-normal text-white/40 group-hover:text-white transition-colors break-keep">
                {"소장품 더 보기"}
              </span>
            </button>
          </motion.div>
        )}

        {filteredItems.length === 0 && (
          <div className="py-40 text-center w-full">
            <p className="text-xl font-serif text-white/30 break-keep">{"이 카테고리에는 등록된 소장품이 없습니다."}</p>
          </div>
        )}
      </div>

      </main>
      <Footer />
    </>

    </TemplateWrapper>
);
}


export default function CollectionsPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CollectionsPageContent {...props} />
    </React.Suspense>
  );
}
