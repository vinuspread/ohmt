"use client";
import React from "react";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { SignatureMenu } from "./_components/SignatureMenu";
import { MenuGrid } from "./_components/MenuGrid";
import { BrandStory } from "./_components/BrandStory";
import { Locations } from "./_components/Locations";
import { Testimonials } from "./_components/Testimonials";
import { CTABanner } from "./_components/CTABanner";
import { Footer } from "./_components/Footer";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function BurgerPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Hero />
        <SignatureMenu />
        <MenuGrid />
        <BrandStory />
        <Locations />
        <Testimonials />
        <CTABanner />
      </main>
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function BurgerPage() {
  return (
    <BurgerPageContent />
  );
}
