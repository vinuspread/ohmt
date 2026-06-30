// src/app/(premium)/ko/templates/OHMT004-furniture/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
import { Navbar } from "./_components/Navbar";
import { Hero, CategoryNav } from "./_components/Hero";
import { ProductGrid } from "./_components/SectionGrid";
import { BrandStory } from "./_components/BrandStory";
import { Features, Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function FurniturePageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen">
        <Navbar />
        <Hero />
        <CategoryNav />
        <ProductGrid />
        <BrandStory />
        <Features />
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function FurniturePage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <FurniturePageContent {...props} />
    </React.Suspense>
  );
}
