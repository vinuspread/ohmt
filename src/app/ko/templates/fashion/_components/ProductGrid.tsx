"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NEW_ARRIVALS = [
  { id: 1, price: '$120.00', image: '/templates/OHMT001-fashion/wool-hat.png', name: "울 버킷 햇" },
  { id: 2, price: '$850.00', image: '/templates/OHMT001-fashion/trench-coat.png', name: "클래식 트렌치 코트" },
  { id: 3, price: '$350.00', image: '/templates/OHMT001-fashion/backpack.png', name: "미니멀리스트 백팩" },
  { id: 4, price: '$480.00', image: '/templates/OHMT001-fashion/boots.png', name: "프리미엄 레더 부츠" },
  { id: 5, price: '$1,200.00', image: '/templates/OHMT001-fashion/silk-dress.png', name: "실크 이브닝 드레스" },
  { id: 6, price: '$65.00', image: '/templates/OHMT001-fashion/basic-tee.png', name: "코튼 베이직 티" }
];

export const ProductGrid = () => {

  return (
    <section className="py-12 md:py-24 lg:py-36 bg-white selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 md:mb-24 gap-4">
          <div>
            <h2 className="text-2xl sm:text-[3vw] font-bold tracking-tighter tracking-[-0.03em] uppercase leading-none">신상품</h2>
          </div>
          <Link href="/ko/templates/OHMT001-fashion-KO/category/collection" className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] border-b border-black/10 pb-1 hover:border-black transition-colors whitespace-nowrap">
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-32">
          {NEW_ARRIVALS.map((p, index) => {
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-[var(--color-bg-secondary)] overflow-hidden mb-4 sm:mb-8 relative">
                  <Link href={`/ko/templates/OHMT001-fashion-KO/product/${p.id}`} className="block w-full h-full">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </Link>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute inset-6 border border-white/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                </div>
                <div className="space-y-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <Link href={`/ko/templates/OHMT001-fashion-KO/product/${p.id}`}>
                    <h3 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-normal line-clamp-1">{p.name}</h3>
                  </Link>
                  <p className="text-[12px] sm:text-[14px] text-black/50 font-bold">{p.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
