// src/app/en/templates/architecture/projects/page.tsx
import React from "react";
import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { Projects } from "../_components/sections/Projects";
import { CustomCursor } from "../_components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Projects Portfolio - Architecture Portfolio - OHMT",
  description: "Browse our selected residential, commercial, public, and interior architecture commissions.",
  openGraph: {
    title: "Projects Portfolio - Architecture Portfolio - OHMT",
    description: "Browse our selected residential, commercial, public, and interior architecture commissions.",
    url: "https://ohmt.site/en/templates/architecture/projects",
    images: [{ url: "/templates/architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmt.site/en/templates/architecture/projects",
    languages: {
      "ko": "https://ohmt.site/ko/templates/architecture/projects",
    },
  },
};

export default function ProjectsPage() {
  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[var(--color-text)] font-sans antialiased overflow-hidden selection:bg-[var(--color-text)] selection:text-white">
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
