// src/app/ko/templates/OHMT012-magazine/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { FeaturedGrid } from "./_components/sections/FeaturedGrid";
import { EditorsPicks } from "./_components/sections/EditorsPicks";
import { LatestStories, NewsletterStrip } from "./_components/sections/LatestStories";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function MagazineTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header />

        <Hero />

        <FeaturedGrid />

        <EditorsPicks />

        <LatestStories />

        <NewsletterStrip />

        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function MagazineTemplate(props: any) {
  return (
    <React.Suspense fallback={null}>
      <MagazineTemplateContent {...props} />
    </React.Suspense>
  );
}
