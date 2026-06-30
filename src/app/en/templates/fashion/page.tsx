// src/app/templates/OHMT001-fashion/page.tsx
"use client";

import React from "react";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { BrandSection } from "./_components/BrandSection";
import { ProductGrid } from "./_components/ProductGrid";
import { CollectionShowcase } from "./_components/CollectionShowcase";
import { CategoryBanners } from "./_components/CategoryBanners";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function FashionPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen">
        <Navbar />
        <Hero />
        <ProductGrid />
        <BrandSection />
        <CollectionShowcase />
        <CategoryBanners />
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function FashionPage() {
  return (
    <React.Suspense fallback={null}>
      <FashionPageContent />
    </React.Suspense>
  );
}
