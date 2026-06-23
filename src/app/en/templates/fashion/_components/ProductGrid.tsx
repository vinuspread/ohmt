"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const NEW_ARRIVALS = [
  { id: 1, price: '$120.00', image: '/templates/OHMT001-fashion/wool-hat.png' },
  { id: 2, price: '$850.00', image: '/templates/OHMT001-fashion/trench-coat.png' },
  { id: 3, price: '$350.00', image: '/templates/OHMT001-fashion/backpack.png' },
  { id: 4, price: '$480.00', image: '/templates/OHMT001-fashion/boots.png' },
  { id: 5, price: '$1,200.00', image: '/templates/OHMT001-fashion/silk-dress.png' },
  { id: 6, price: '$65.00', image: '/templates/OHMT001-fashion/basic-tee.png' }
];

const PRODUCT_NAMES: Record<number, string> = {
  1: "WOOL BUCKET HAT",
  2: "CLASSIC TRENCH COAT",
  3: "MINIMALIST BACKPACK",
  4: "PREMIUM LEATHER BOOTS",
  5: "SILK EVENING DRESS",
  6: "COTTON BASICS TEE"
};

export const ProductGrid = () => {
return (
    <section className="py-12 md:py-24 lg:py-36 bg-white selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 md:mb-24 gap-4">
          <div>
            <h2 className="text-2xl sm:text-[3vw] font-bold tracking-tighter uppercase leading-none">NEW ARRIVALS</h2>
          </div>
          <Link href="/en/templates/OHMT001-fashion-en-en/category/collection" className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black/70 transition-all duration-300 whitespace-nowrap">
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-16 sm:gap-y-32">
          {NEW_ARRIVALS.map((p, index) => {
            const productName = PRODUCT_NAMES[p.id];
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
                  <Link href={`/en/templates/OHMT001-fashion-en-en/product/${p.id}`} className="block w-full h-full">
                    <img 
                      src={p.image} 
                      alt={productName} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                    />
                  </Link>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-6 border border-white/30 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10" />
                </div>
                <div className="space-y-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <Link href={`/en/templates/OHMT001-fashion-en-en/product/${p.id}`}>
                    <h3 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-normal line-clamp-1">{productName}</h3>
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
