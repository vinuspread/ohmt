// src/app/en/templates/architecture/services/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { ScrollReveal } from "../_components/ui/ScrollReveal";
import { CustomCursor } from "../_components/ui/CustomCursor";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Services - Architecture Portfolio - OHMT",
  description: "Explore our professional disciplines, from high-end residential design and commercial architecture to interior planning.",
  openGraph: {
    title: "Services - Architecture Portfolio - OHMT",
    description: "Explore our professional disciplines, from high-end residential design and commercial architecture to interior planning.",
    url: "https://ohmt.site/en/templates/architecture/services",
    images: [{ url: "/templates/architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmt.site/en/templates/architecture/services",
    languages: {
      "ko": "https://ohmt.site/ko/templates/architecture/services",
    },
  },
};

export default function ServicesPage() {
  const baseRoute = "/en/templates/architecture";

  const processes = [
    { step: "01", name: "Consultation", desc: "We sit down to understand your aesthetic desires, space needs, and lifestyle aspirations." },
    { step: "02", name: "Schematic Concept", desc: "Our team drafts initial layout options and raw material alignments for spatial mapping." },
    { step: "03", name: "Detail Design", desc: "Micro-curating details, lighting plans, bespoke furniture curation, and documentation." },
    { step: "04", name: "Execution", desc: "Rigorous oversight on site to ensure final construction perfectly matches the technical spec." },
  ];

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[var(--color-text)] font-sans antialiased overflow-hidden selection:bg-[var(--color-text)] selection:text-white">
        <Header />
        
        <main className="pt-32 pb-24">
          {/* Header */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl">
                <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase block">
                  CAPABILITIES
                </span>
                <h1 className="font-heading font-normal text-[48px] md:text-[64px] lg:text-[72px] leading-tight text-[var(--color-text)]">
                  Our Services.
                </h1>
                <p className="font-heading font-normal text-[24px] md:text-[28px] leading-[1.5] text-[var(--color-text-secondary)] pt-4">
                  We offer a complete suite of architectural services, shaped around structural excellence and premium materiality.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Services Detailed List */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mb-24 lg:mb-32">
            <div className="space-y-24">
              {services.map((service, idx) => (
                <ScrollReveal key={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[var(--color-border)] pb-16 last:border-0 last:pb-0">
                    {/* Left: Image (col 5) */}
                    <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    {/* Right: Copy & Features (col 7) */}
                    <div className="lg:col-span-7 space-y-6 lg:pl-8">
                      <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-accent)] uppercase block">
                        {service.label}
                      </span>
                      <h2 className="font-heading font-normal text-[32px] md:text-[36px] text-[var(--color-text)] leading-tight">
                        {service.name}
                      </h2>
                      <p className="font-sans text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="pt-4">
                        <h4 className="font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase mb-4">
                          Core Features:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-[var(--color-text-secondary)] font-sans">
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-[var(--color-bg-secondary)] py-20 lg:py-28 mb-24 lg:mb-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
              <ScrollReveal>
                <div className="border-b border-[var(--color-border)] pb-8 mb-16">
                  <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[var(--color-text)]">
                    Working Process.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {processes.map((p, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="space-y-4 bg-white p-8 border border-black/5 shadow-sm">
                      <span className="font-heading font-normal text-[36px] text-[var(--color-accent)] leading-none block">
                        {p.step}
                      </span>
                      <h3 className="font-sans font-medium text-[16px] text-[var(--color-text)]">
                        {p.name}
                      </h3>
                      <p className="font-sans text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 text-center">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-heading font-normal text-[32px] md:text-[38px] text-[var(--color-text)] leading-tight">
                  Ready to collaborate on your next space?
                </h2>
                <p className="font-sans text-[15px] text-[var(--color-text-secondary)] leading-relaxed max-w-md mx-auto">
                  Let's discuss how we can bring your architectural visions into reality.
                </p>
                <div className="pt-4">
                  <Link
                    href={`${baseRoute}/contact`}
                    className="inline-block bg-[var(--color-text)] text-white px-8 py-3.5 text-[14px] font-sans tracking-[0.08em] hover:bg-zinc-800 transition-colors"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
