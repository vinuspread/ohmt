// src/app/templates/OHMT010-cosmetic/-components/sections/ProductGrid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
const products = [
  { id: 1, name: "Gentle Cleanser", price: "$42.00", img: "/templates/OHMT010-cosmetic/cosmetic-2.png", tag: "essential" },
  { id: 2, name: "Hydrating Mist", price: "$38.00", img: "/templates/OHMT010-cosmetic/cosmetic-botanical-dropper.png", tag: "new" },
  { id: 3, name: "Night Cream", price: "$95.00", img: "/templates/OHMT010-cosmetic/cosmetic-collection-marble.png", tag: "bestseller" }
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

export const ProductGrid = () => {
  const searchParams = useSearchParams();
  const t = {
  "nav": {
    "shop": `Shop`,
    "story": `Story`,
    "journal": `Journal`,
    "account": `Account`,
    "banner": `Free shipping on orders over lang50 · Sustainable packaging · Dermatologist tested`
  },
  "hero": {
    "title1": `Advanced skincare`,
    "title2": `rooted in nature,`,
    "title3": `refined by science.`,
    "shop": `Shop Collection`,
    "ritual": `The Ritual`,
    "quickAdd": `Quick Add`,
    "featured": `Restorative Serum`
  },
  "grid": {
    "badge": `The Essentials`,
    "title": `Shop Skincare`,
    "addToCart": `Add to Cart`,
    "tags": {
      "essential": `Essential`,
      "new": `New`,
      "bestseller": `Best Seller`
    },
    "items": {
      "item1": `Gentle Cleanser`,
      "item2": `Hydrating Mist`,
      "item3": `Night Cream`
    }
  },
  "footer": {
    "brandDesc": `We believe in conscious beauty. Formulated without compromise, designed for results. All products are cruelty-free and vegan.`,
    "shopTitle": `Shop`,
    "aboutTitle": `About`,
    "supportTitle": `Support`,
    "links": {
      "allProducts": `All Products`,
      "newArrivals": `New Arrivals`,
      "bestSellers": `Best Sellers`,
      "skinQuiz": `Skin Quiz`,
      "ourStory": `Our Story`,
      "ingredients": `Ingredients`,
      "sustainability": `Sustainability`,
      "careers": `Careers`,
      "contactUs": `Contact Us`,
      "shipping": `Shipping`,
      "returns": `Returns`,
      "faq": `FAQ`
    },
    "copyright": `© 2026 Vinuspread Beauty. All Rights Reserved. Made in France.`
  },
  "story": {
    "title": `Conscious beauty for the modern age.`,
    "desc": `Our journey started with a simple question: why choose between performance and purity? We've spent five years perfecting formulas that deliver transformative results while honoring the planet.`,
    "cta": `Our Story`
  }
};
const localProducts = products.map((p) => {
    const key = `item${p.id}` as keyof typeof t.grid.items;
    const tagKey = p.tag as keyof typeof t.grid.tags;
    return {
      ...p,
      name: t.grid.items[key] || p.name,
      tag: t.grid.tags[tagKey] || p.tag
    };
  });

  return (
    <section className="py-12 md:py-24 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-[0.75rem] uppercase tracking-[0.15em] font-bold text-[var(--color-text-muted)] mb-4 block">{t.grid.badge}</span>
          <h2 className="text-[1.7rem] md:text-[3rem] font-normal mt-2 leading-[1.1]">{t.grid.title}</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {localProducts.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white border border-black/10 group cursor-pointer hover:border-black/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-[480px]">
                <img loading="lazy" src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1s] ease-out" alt={p.name} />
                <span className="absolute top-6 left-6 bg-black text-white px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider">
                  {p.tag}
                </span>
              </div>
              <div className="p-8 text-center border-t border-black/8">
                <h3 className="text-[1rem] font-medium mb-2">{p.name}</h3>
                <div className="text-[0.9rem] font-normal text-black/60 mb-6">{p.price}</div>
                <button className="w-full py-3.5 border border-black text-black text-[0.82rem] font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-[0.98]">
                  {t.grid.addToCart}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
