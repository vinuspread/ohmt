// src/app/en/templates/OHMT027-architecture/about/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { ScrollReveal } from "../_components/ui/ScrollReveal";
import { CustomCursor } from "../_components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "About Us - Architecture Portfolio - OHMT",
  description: "Learn about our architectural philosophy, our history, and the visionaries behind our award-winning practice.",
  openGraph: {
    title: "About Us - Architecture Portfolio - OHMT",
    description: "Learn about our architectural philosophy, our history, and the visionaries behind our practice.",
    url: "https://ohmytemplate.com/en/templates/OHMT027-architecture/about",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT027-architecture/about",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT027-architecture/about",
    },
  },
};

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "Practice Founded", desc: "Established in Seoul with a focus on high-end residential design." },
    { year: "2016", title: "Expansion to Public Spaces", desc: "Won the national design competition for the Jongno Civic Pavilion." },
    { year: "2020", title: "Global Recognition", desc: "Awarded the Grand Prix of Spatial Architecture for Highland Villa." },
    { year: "2024", title: "Carbon Neutral Practice", desc: "Committed to 100% sustainable construction methodologies." },
  ];

  const team = [
    {
      name: "Jessica Point",
      role: "PRINCIPAL ARCHITECT",
      image: "/templates/OHMT027-architecture/project-1.jpg",
    },
    {
      name: "Ryan Baser",
      role: "LEAD INTERIOR DESIGNER",
      image: "/templates/OHMT027-architecture/project-5.jpg",
    },
    {
      name: "Carrie Vath",
      role: "STRUCTURAL ENGINEER",
      image: "/templates/OHMT027-architecture/project-6.jpg",
    },
  ];

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden selection:bg-[#1A1A1A] selection:text-white">
        <Header />
        
        <main className="pt-32 pb-24">
          {/* Hero Section */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl">
                <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#888888] uppercase block">
                  OUR CONTEXT
                </span>
                <h1 className="font-heading font-normal text-[48px] md:text-[64px] lg:text-[72px] leading-tight text-[#1A1A1A]">
                  About the Practice.
                </h1>
                <p className="font-heading font-normal text-[24px] md:text-[28px] leading-[1.5] text-[#888888] pt-4">
                  We believe that space has the power to transform the way people live. Our designs converge precision craftsmanship with organic spatial dialogue.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Full-Bleed Image Section */}
          <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[350px] mb-24">
            <Image
              src="/templates/OHMT027-architecture/about.jpg"
              alt="Architectural studio workplace"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </section>

          {/* Detailed Philosophy */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mb-24 lg:mb-32">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                    Silent Authority.
                  </h2>
                </div>
                <div className="lg:col-span-8 font-sans text-[16px] leading-[1.8] text-[#888888] space-y-6">
                  <p>
                    Every corner, surface, and void we touch is calculated to evoke deep emotional resonance. Our architectural discipline ensures that massive spatial layouts retain microscopic structural detail and material excellence.
                  </p>
                  <p>
                    We operate at the convergence of architecture, spatial brand experience, and tactile interaction. Our design lab is dedicated to executing systems that evoke silence, celebrate material honesty, and command physical space with ultimate rigor.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Timeline Section */}
          <section className="bg-[#F5F5F5] py-20 lg:py-28 mb-24 lg:mb-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
              <ScrollReveal>
                <div className="border-b border-[#E0E0E0] pb-8 mb-16">
                  <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                    Our History.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {timeline.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="space-y-4">
                      <span className="font-heading font-normal text-[48px] text-[#B07D4F] leading-none block">
                        {item.year}
                      </span>
                      <h3 className="font-sans font-medium text-[16px] text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[14px] text-[#888888] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <ScrollReveal>
              <div className="border-b border-[#E0E0E0] pb-8 mb-16">
                <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                  The Team.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group space-y-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-medium text-[16px] text-[#1A1A1A]">
                        {member.name}
                      </h3>
                      <p className="font-sans text-[12px] font-medium tracking-wider text-[#888888]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
