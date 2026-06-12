"use client";
import { Suspense } from "react";
import React from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { FeatureRow } from "./_components/sections/FeatureRow";
import { CategoryBanners } from "./_components/sections/CategoryBanners";
import { ProductGrid, products } from "./_components/sections/ProductGrid";
import { PromoBanner } from "./_components/sections/PromoBanner";
import { Reviews } from "./_components/sections/Reviews";
import { BlogSection } from "./_components/sections/BlogSection";

function SneakerPageContent() {

  const bestSellers = products.filter(p => p.badge === "베스트셀러" || p.rating >= 4.5).slice(0, 8);
  const newArrivals = products.filter(p => p.badge === "신상품" || !p.originalPrice).slice(0, 8);

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black selection:bg-black selection:text-white font-sans">
        <Header />
        <main>
          <Hero />
          <FeatureRow />
          <CategoryBanners />
          <ProductGrid title="베스트셀러" items={bestSellers} limit={8} />
          <PromoBanner />
          <ProductGrid title="신상품" items={newArrivals} limit={8} />
          <Reviews />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function SneakerPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <SneakerPageContent {...props} />
    </React.Suspense>
  );
}
