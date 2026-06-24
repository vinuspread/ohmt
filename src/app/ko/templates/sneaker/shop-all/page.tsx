"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, ChevronDown } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { products } from "../_components/sections/ProductGrid";

const categories = [
  { id: "all", label: "전체", img: null },
  { id: "sneakers", label: "스니커즈", img: "/templates/OHMT005-sneaker/cat-sneakers.jpg" },
  { id: "running", label: "러닝", img: "/templates/OHMT005-sneaker/category-running.jpg" },
  { id: "formal", label: "포멀", img: "/templates/OHMT005-sneaker/category-formal.jpg" },
  { id: "boots", label: "부츠", img: "/templates/OHMT005-sneaker/cat-boots.jpg" },
  { id: "oxford", label: "옥스포드", img: "/templates/OHMT005-sneaker/cat-oxford.jpg" },
  { id: "sports", label: "스포츠", img: "/templates/OHMT005-sneaker/cat-sports.jpg" },
  { id: "highneck", label: "하이넥", img: "/templates/OHMT005-sneaker/cat-highneck.jpg" },
  { id: "loafers", label: "로퍼", img: "/templates/OHMT005-sneaker/cat-loafers.jpg" },
];

// Map products to categories (mock assignment for demo)
const categoryMap: Record<string, string[]> = {
  sneakers: ["sn-001", "sn-002", "sn-005", "sn-008", "sn-012", "sn-016"],
  running:  ["sn-003", "sn-004", "sn-011", "sn-015"],
  formal:   ["sn-010", "sn-014"],
  boots:    ["sn-006", "sn-009"],
  oxford:   ["sn-010", "sn-014"],
  sports:   ["sn-004", "sn-007", "sn-013"],
  highneck: ["sn-007", "sn-009"],
  loafers:  ["sn-014", "sn-016"],
};

const sortOptions = ["추천순", "낮은 가격순", "높은 가격순", "평점순"];

function getBadgeStyle(badge: string) {
  const normalized = badge.toLowerCase();
  if (normalized.includes("best") || normalized.includes("베스트")) {
    return "bg-orange-50 text-orange-600 border border-orange-200/40";
  }
  if (normalized.includes("new") || normalized.includes("신상")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-200/40";
  }
  if (normalized.includes("off") || normalized.includes("%") || normalized.includes("할인")) {
    return "bg-red-50 text-red-600 border border-red-200/40";
  }
  return "bg-zinc-50 text-zinc-600 border border-zinc-200/40";
}

function ShopAllPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("Featured");

  const filtered = products
    .filter(p => activeCategory === "all" || (categoryMap[activeCategory] ?? []).includes(p.id))
    .sort((a, b) => {
      if (sortBy === "낮은 가격순") return a.price - b.price;
      if (sortBy === "높은 가격순") return b.price - a.price;
      if (sortBy === "평점순") return b.rating - a.rating;
      return 0;
    });

  const activeCat = categories.find(c => c.id === activeCategory)!;

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black selection:bg-black selection:text-white font-sans">
        <Header />
        <main className="antialiased pt-16">

          {/* Category Hero Banner */}
          <div className={`relative ${activeCategory !== "all" && activeCat.img ? "h-[220px]" : "h-[120px] bg-white border-b border-black/10"} overflow-hidden transition-[height] duration-500`}>
            {activeCategory !== "all" && activeCat.img ? (
              <>
                <img loading="lazy" src={activeCat.img} alt={activeCat.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center">
                  <div className="max-w-[1440px] mx-auto px-6 w-full">
                    <h1 className="text-[2rem] font-black uppercase tracking-[-0.03em] text-white">
                      {activeCat.label}
                    </h1>
                    <p className="text-[0.78rem] text-white/60">{filtered.length}개 상품</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center bg-white">
                <div className="max-w-[1440px] mx-auto px-6 w-full">
                  <h1 className="text-[2rem] font-black uppercase tracking-[-0.03em] text-black">
                    전체 상품
                  </h1>
                  <p className="text-[0.78rem] text-black/40">{filtered.length}개 상품</p>
                </div>
              </div>
            )}
          </div>

          {/* Category Nav */}
          <div className="border-b border-black/10 sticky top-16 bg-white z-30">
            <div className="max-w-[1440px] mx-auto px-6">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.08em] border-b-2 transition-colors ${activeCategory === cat.id ? "border-black text-black" : "border-transparent text-black/40 hover:text-black"}`}>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 py-10">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-[0.78rem] text-black/40">{filtered.length}개 결과</p>
              <div className="flex items-center gap-2 border border-black/20 px-4 py-2">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.06em] text-black/50">정렬:</span>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="text-[0.78rem] font-bold bg-transparent focus:outline-none appearance-none">
                  {sortOptions.map(o => <option key={o}>{o}</option>)}
                </select>
                <ChevronDown size={14} className="text-black/40" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-12 md:py-24 text-black/40">
                <p className="text-[1rem]">이 카테고리에 아직 상품이 없습니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filtered.map(p => (
                  <Link key={p.id} href={`/ko/templates/OHMT005-sneaker-KO/product/${p.id}`} className="group block border border-black/10 hover:border-black transition-colors duration-200">
                    <div className="relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
                      <img loading="lazy" src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {p.badge && (
                        <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] backdrop-blur-sm ${getBadgeStyle(p.badge)}`}>{p.badge}</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-[0.88rem] font-bold mb-1.5 tracking-[-0.03em]">{p.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={11} className={i <= Math.round(p.rating) ? "fill-black text-black" : "fill-black/20 text-black/20"} />
                        ))}
                        <span className="text-[0.68rem] text-black/40 ml-1">{p.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[0.95rem] font-black">${p.price}</span>
                        {p.originalPrice && <span className="text-[0.78rem] text-black/30 line-through">${p.originalPrice}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function ShopAllPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ShopAllPageContent {...props} />
    </React.Suspense>
  );
}
