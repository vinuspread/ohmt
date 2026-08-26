// src/app/en/templates/OHMT027-architecture/page.tsx
import type { Metadata } from "next";
import React from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "OHMT Architecture - Home",
};
import { Hero } from "./_components/sections/Hero";
import { About } from "./_components/sections/About";
import { Services } from "./_components/sections/Services";
import { Projects } from "./_components/sections/Projects";
import { CtaBanner } from "./_components/sections/CtaBanner";
import { Testimonials } from "./_components/sections/Testimonials";
import { CustomCursor } from "./_components/ui/CustomCursor";

export default function ArchitectureHome() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "OHMT - Architecture Portfolio",
    "url": "https://ohmt.site/en/templates/OHMT027-architecture",
    "image": "https://ohmt.site/templates/OHMT027-architecture/og-image.jpg",
    "description": "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seoul",
      "addressCountry": "KR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateWrapper>
        <div className="relative min-h-screen bg-white text-[var(--color-text)] font-sans antialiased overflow-hidden selection:bg-[var(--color-text)] selection:text-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <CtaBanner />
            <Testimonials />
          </main>
          <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
          <Footer />
          <CustomCursor />
        </div>
      </TemplateWrapper>
    </>
  );
}
