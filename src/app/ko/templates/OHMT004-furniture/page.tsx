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
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
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
