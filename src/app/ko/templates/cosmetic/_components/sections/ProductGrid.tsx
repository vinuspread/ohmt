// src/app/ko/templates/cosmetic/-components/sections/ProductGrid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "보태니컬 젠틀 딥 클렌저", price: "$42.00", img: "/templates/cosmetic/cosmetic-2.png", tag: "essential", tagLabel: "기본" },
  { id: 2, name: "인텐시브 하이드레이팅 미스트", price: "$38.00", img: "/templates/cosmetic/cosmetic-botanical-dropper.png", tag: "new", tagLabel: "신상품" },
  { id: 3, name: "에센셜 나이트 리페어 크림", price: "$95.00", img: "/templates/cosmetic/cosmetic-collection-marble.png", tag: "bestseller", tagLabel: "베스트셀러" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

function getBadgeStyle(tag: string) {
  const normalized = tag.toLowerCase();
  if (normalized.includes("best") || normalized.includes("bestseller") || normalized.includes("베스트")) {
    return "bg-orange-50/80 text-orange-600 border border-orange-200/40";
  }
  if (normalized.includes("new") || normalized.includes("신상") || normalized.includes("신상품")) {
    return "bg-emerald-50/80 text-emerald-600 border border-emerald-200/40";
  }
  return "bg-zinc-50/80 text-zinc-600 border border-zinc-200/40";
}

export const ProductGrid = () => {
  return (
    <section className="py-12 md:py-24 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-[0.75rem] uppercase tracking-[0.15em] font-bold text-[#666] mb-4 block">에센셜 라인</span>
          <h2 className="text-[1.7rem] md:text-[3rem] font-normal mt-2 leading-[1.5]">스킨케어 에디션</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((p, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="bg-white border border-black/10 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-[480px]">
                <img loading="lazy" src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1s] ease-out" alt={p.name} />
                <span className={`absolute top-6 left-6 text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-[2px] backdrop-blur-sm ${getBadgeStyle(p.tag)}`}>
                  {p.tagLabel}
                </span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-[1rem] font-normal mb-2">{p.name}</h3>
                <div className="text-[0.9rem] font-normal text-black/70 mb-6">{p.price}</div>
                <button className="w-full py-3.5 border border-black text-black text-[0.82rem] font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-black hover:text-white">
                  담기
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
