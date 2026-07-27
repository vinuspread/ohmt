"use client";

import { motion } from "motion/react";
import { Filter, ChevronDown, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";
import { products } from "../data/products";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function ShopPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <>
      <Header />
      <main className="antialiased pt-16 md:pt-32 pb-12 md:pb-24 bg-white text-[var(--color-primary)] min-h-screen">
      {/* Header Space */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-black/40">Museum Store</p>
        <h1 className="text-5xl md:text-7xl font-serif mb-5 tracking-tighter">Souvenir Shop</h1>
        <p className="max-w-2xl text-base md:text-lg leading-7 text-black/55 mb-10">
          Take home art prints, small replicas, stationery, and keepsakes inspired by the museum galleries.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-luxury-black/10 pb-8">
          <div className="flex gap-8 text-xs font-bold tracking-widest text-luxury-gray overflow-x-auto scrollbar-none whitespace-nowrap w-full md:w-auto pb-4 md:pb-0">
            <span className="text-[var(--color-primary)] cursor-pointer">All ({products.length})</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Replicas</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Prints</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Stationery</span>
            <span className="cursor-pointer hover:text-luxury-black transition-colors">Lifestyle</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest">
              Filter <Filter size={14} />
            </button>
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest">
              Sort by <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square bg-luxury-cream mb-5 overflow-hidden">
                <Link href={`/en/templates/OHMT021-museum/product/${product.id}`} className="block h-full">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1s]"
                  />
                </Link>
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-[calc(100%+1rem)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="w-full py-3 bg-white text-xs font-bold tracking-[0.3em] flex items-center justify-center gap-2">
                    Quick Add <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-luxury-gray mb-1">{product.category}</p>
                  <Link href={`/en/templates/OHMT021-museum/product/${product.id}`} className="hover:text-luxury-gray transition-colors">
                    <h4 className="text-xl font-serif tracking-tight leading-tight transition-all">{product.name}</h4>
                  </Link>
                </div>
                <span className="shrink-0 font-serif text-lg tracking-tighter">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
    </TemplateWrapper>
);
}


export default function ShopPage() {
  return (
    <React.Suspense fallback={null}>
      <ShopPageContent />
    </React.Suspense>
  );
}

