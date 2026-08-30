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
