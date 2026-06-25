"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const products = [
  { name: "Daily Radiance Serum", price: "$78", tag: "Best Seller", image: "/templates/cosmetic/cosmetic-1.jpg" },
  { name: "Vitamin C Brightening Cream", price: "$64", tag: "New", image: "/templates/cosmetic/cosmetic-2.png" },
  { name: "Hydra-Glow Moisturizer", price: "$52", tag: "", image: "/templates/cosmetic/cosmetic-3.jpg" },
  { name: "Retinol Renewal Oil", price: "$89", tag: "Premium", image: "/templates/cosmetic/cosmetic-4.jpg" },
  { name: "Gentle Cleansing Balm", price: "$38", tag: "", image: "/templates/cosmetic/cosmetic-5.jpg" },
  { name: "Overnight Recovery Mask", price: "$72", tag: "Popular", image: "/templates/cosmetic/cosmetic-1.jpg" }
];

function CosmeticShopPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />
        
        <section className="pt-48 pb-16 md:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40 mb-4 block">Shop All</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-tight leading-[1.1]">
                Clean formulations.<br />Visible results.
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className="group">
                  <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] mb-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[1.1rem] font-medium tracking-tight mb-1">{product.name}</h3>
                      <span className="text-[0.9rem] text-black/40 font-medium">{product.price}</span>
                    </div>
                    {product.tag && (
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] bg-black text-white px-3 py-1">{product.tag}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticShopPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CosmeticShopPageContent {...props} />
    </React.Suspense>
  );
}
