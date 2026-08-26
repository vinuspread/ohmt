"use client";
import React from "react";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { CategoryGrid } from "./_components/CategoryGrid";
import { NewArrivals } from "./_components/NewArrivals";
import { AboutBrand } from "./_components/AboutBrand";
import { Services } from "./_components/Services";
import { BestSellers } from "./_components/BestSellers";
import { TeamSection } from "./_components/TeamSection";
import { Reviews } from "./_components/Reviews";
import { BlogPreview } from "./_components/BlogPreview";
import { Newsletter } from "./_components/Newsletter";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function MultiShopPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen text-[var(--color-text)]">
        <Hero />
        <CategoryGrid />
        <NewArrivals />
        <AboutBrand />
        <Services />
        <BestSellers />
        <TeamSection />
        <Reviews />
        <BlogPreview />
        <Newsletter />
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
        <Footer />
      </main>
    </TemplateWrapper>
    </>
  );
}

export default function MultiShopPage() {
  return (
    <React.Suspense fallback={null}>
      <MultiShopPageContent />
    </React.Suspense>
  );
}

