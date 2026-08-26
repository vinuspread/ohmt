// src/app/ko/templates/OHMT001-fashion/page.tsx
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
  React.useEffect(() => {
    const savedPosition = window.sessionStorage.getItem("ohmt001-fashion-home-scroll");
    if (savedPosition === null) return;

    const scrollPosition = Number(savedPosition);
    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: scrollPosition, left: 0 });
      window.sessionStorage.removeItem("ohmt001-fashion-home-scroll");
    }, 150);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen">
        <Navbar />
        <Hero />
        <ProductGrid />
        <BrandSection />
        <CollectionShowcase />
        <CategoryBanners />
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
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
