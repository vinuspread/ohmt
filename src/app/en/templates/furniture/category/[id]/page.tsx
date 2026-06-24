"use client";
import { Suspense } from "react";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, SlidersHorizontal, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { products } from "../../data/data";
import themeJson from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

const theme = themeJson.theme;

function CategoryPageContent() {
  const { id } = useParams();
  
  // Map parameters to exact menu names
  const categoryMap: Record<string, string> = {
    living: "LIVING ROOM",
    bedroom: "BEDROOM",
    dining: "DINING",
    workspace: "WORKSPACE"
  };

  const categoryName = typeof id === 'string' ? (categoryMap[id.toLowerCase()] || id.toUpperCase()) : "COLLECTION";

  // In a real app, we'd filter products by category. For now, we'll show a curated mix.
  const displayProducts = products.slice(0, 12);

  return (

    <TemplateWrapper theme={themeJson}>

      <main className="antialiased bg-white min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Category Header */}
      <section className="pt-20 md:pt-32 lg:pt-48 pb-12 md:pb-20 lg:pb-24 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <Link href="/en/templates/OHMT004-furniture-EN" className="group flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[var(--color-secondary)] hover:text-black transition-colors mb-6 md:mb-12">
            <ArrowLeft size={14} className="md:w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Showroom
          </Link>
          
          <div className="flex flex-row justify-between items-end gap-6 md:gap-10">
            <div>
              <span className="text-[13px] md:text-[12px] font-bold text-[var(--color-primary)] uppercase mb-2 md:mb-4 block">Curated Series</span>
              <h1 className="text-[28px] sm:text-[clamp(1.75rem,5vw,4rem)] font-bold text-[var(--color-text)] leading-none uppercase">
                {categoryName}.
              </h1>
            </div>
            <div className="flex items-center gap-2 md:gap-3 border-b-2 border-black pb-1 md:pb-2 text-[12px] md:text-[14px] font-bold cursor-pointer hover:opacity-60 transition-opacity whitespace-nowrap mb-0.5">
              <SlidersHorizontal size={14} className="md:w-[16px]" />
              <span>Filter & Sort</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
            {displayProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <Link href={`/en/templates/OHMT004-furniture-EN/product/${p.id}`}>
                  <div className="relative aspect-square sm:aspect-[4/3] bg-white overflow-hidden mb-3 md:mb-6 flex items-center justify-center">
                    <motion.img
                      src={p.image}
                      className={`max-w-full max-h-full object-contain ${theme.interaction.card_hover}`}
                      alt={p.name}
                    />
                    {/* Hover Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <ShoppingBag size={16} className="md:w-[18px]" />
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-1 mt-3 flex flex-col gap-1">
                  <Link href={`/en/templates/OHMT004-furniture-EN/product/${p.id}`} className="min-w-0">
                    <h3 className="text-[14px] md:text-[17px] font-bold text-[var(--color-text)] group-hover:text-black transition-colors uppercase line-clamp-1">{p.name}</h3>
                  </Link>
                  <p className="text-[13px] md:text-[13px] text-[var(--color-secondary)] font-medium leading-[1.4] w-full line-clamp-2">
                    Materialized in {p.tag} Series.
                  </p>
                  <span className="text-[13px] md:text-[16px] font-bold text-[var(--color-text)] mt-1">{p.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>

    </TemplateWrapper>
);
}


export default function CategoryPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CategoryPageContent {...props} />
    </React.Suspense>
  );
}
