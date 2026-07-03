// src/app/ko/templates/OHMT027-architecture/page.tsx
import React from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
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
    "name": "OHMT - 건축 포트폴리오",
    "url": "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    "image": "https://ohmytemplate.com/templates/OHMT027-architecture/og-image.jpg",
    "description": "에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링을 갖춘 건축 포트폴리오 템플릿입니다.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "서울",
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
        <div className="relative min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden selection:bg-[#1A1A1A] selection:text-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <CtaBanner />
            <Testimonials />
          </main>
          <Footer />
          <CustomCursor />
        </div>
      </TemplateWrapper>
    </>
  );
}
