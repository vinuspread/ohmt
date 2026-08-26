"use client";
import React from "react";
import { Header } from "./_components/Header";
import { SmoothScroll } from "./_components/SmoothScroll";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { MenuPreview } from "./_components/MenuPreview";
import { OurStory } from "./_components/OurStory";
import { Reserve } from "./_components/Reserve";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function CoffeePageContent() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Hero />
        <Features />
        <MenuPreview />
        <OurStory />
        <Reserve />
      </main>
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function CoffeePage() {
  return <CoffeePageContent />;
}
