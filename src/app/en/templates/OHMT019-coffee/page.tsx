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
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function CoffeePage() {
  return <CoffeePageContent />;
}
