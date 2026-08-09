// src/app/ko/templates/OHMT027-architecture/projects/page.tsx
import React from "react";
import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { Projects } from "../_components/sections/Projects";
import { CustomCursor } from "../_components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "프로젝트 | OHMT 건축 스튜디오",
  description: "주거, 상업, 공공, 인테리어 분야에서 진행한 주요 프로젝트를 살펴보세요.",
  openGraph: {
    title: "프로젝트 | OHMT 건축 스튜디오",
    description: "주거, 상업, 공공, 인테리어 분야에서 진행한 주요 프로젝트를 살펴보세요.",
    url: "https://ohmt.site/ko/templates/OHMT027-architecture/projects",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT027-architecture/projects",
    languages: {
      "en": "https://ohmt.site/en/templates/OHMT027-architecture/projects",
      "ko": "https://ohmt.site/ko/templates/OHMT027-architecture/projects",
    },
  },
};

export default function ProjectsPage() {
  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden selection:bg-[#1A1A1A] selection:text-white">
        <Header />
        
        <main className="pt-32 pb-16">
          {/* Reuse the Projects section with built-in filter and magazine grid */}
          <Projects />
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
