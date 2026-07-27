"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "../_data/products";

export const ProductGrid = () => {
  // Display top 8 collection products in New Arrivals
  const newArrivals = PRODUCTS.filter((p) => p.category === "collection").slice(0, 8);
  const rememberScrollPosition = () => {
    window.sessionStorage.setItem("ohmt001-fashion-home-scroll", String(window.scrollY));
  };

  return (
    <section className="py-12 md:py-24 lg:py-36 bg-white selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 md:mb-24 gap-4">
          <div>
            <h2 className="text-2xl sm:text-[3vw] font-bold tracking-[-0.04em] uppercase leading-[var(--leading-heading)]">신상품</h2>
          </div>
          <Link href="/ko/templates/OHMT001-fashion/collection" className="group flex items-center gap-2 text-xs sm:text-xs font-medium uppercase tracking-[-0.03em] border-b border-black/10 pb-1 hover:border-black transition-colors whitespace-nowrap">
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-16 sm:gap-y-24">
          {newArrivals.map((p, index) => {
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-[var(--color-bg-secondary)] overflow-hidden mb-4 sm:mb-6 relative">
                  <Link href={`/ko/templates/OHMT001-fashion/product/${p.id}`} onClick={rememberScrollPosition} className="block w-full h-full">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    />
                  </Link>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-6 border border-white/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                </div>
                <div className="space-y-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <Link href={`/ko/templates/OHMT001-fashion/product/${p.id}`} onClick={rememberScrollPosition}>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-normal line-clamp-1">{p.name}</h3>
                  </Link>
                  <p className="text-xs text-black/50 font-medium">{p.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
