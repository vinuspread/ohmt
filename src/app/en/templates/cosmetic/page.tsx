// src/app/templates/cosmetic/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { ProductGrid } from "./_components/sections/ProductGrid";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
function CosmeticTemplateContent() {
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
return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <Hero />
        
        <ProductGrid />
        
        <section className="py-16 md:py-32 bg-white border-t border-black/10 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-28 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/templates/cosmetic/cosmetic-face-mask.png" 
                  className="w-full h-[380px] object-cover" 
                  alt="Brand story" 
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[1.6rem] md:text-[2.8rem] font-normal leading-[1.1] mb-8">
                  {t.story.title}
                </h2>
                <p className="text-[0.95rem] text-[var(--color-text-muted)] leading-[1.4] mb-12 max-w-[480px]">
                  {t.story.desc}
                </p>
                <button className="px-10 py-4 bg-black text-white text-[0.85rem] font-bold uppercase tracking-wider hover:opacity-80 transition-all">
                  {t.story.cta}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function CosmeticTemplate() {
  return (
    <React.Suspense fallback={null}>
      <CosmeticTemplateContent />
    </React.Suspense>
  );
}
