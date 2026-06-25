// src/app/en/templates/architecture/_components/sections/About.tsx
"use client";
import React from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function About() {
  const stats = [
    { value: "15+", label: "YEARS OF EXPERIENCE" },
    { value: "120+", label: "COMPLETED PROJECTS" },
    { value: "24", label: "INTERNATIONAL AWARDS" },
  ];

  const brandLogos = [
    "Architectural Record",
    "Dezeen",
    "Wallpaper*",
    "Frame Magazine",
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-b border-[#E0E0E0]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            {/* Left: Stats */}
            <div className="flex flex-col gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col border-b border-[#E0E0E0] pb-6 last:border-b-0 last:pb-0">
                  <span className="font-heading font-normal text-[64px] lg:text-[80px] leading-none text-[#1A1A1A]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#888888] mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Brand Philosophy */}
            <div className="lg:col-span-2 space-y-8 lg:pt-4">
              <h2 className="font-heading font-normal text-[26px] md:text-[32px] lg:text-[36px] leading-[1.4] text-[#1A1A1A]">
                We believe that space has the power to transform the way people live. Our work converges precision craftsmanship with organic spatial dialogue.
              </h2>
              <p className="font-sans text-[16px] leading-[1.8] text-[#888888] max-w-xl">
                Founded in Seoul, our practice operates globally to curate bespoke residences, commercial workspaces, and public structures that honor materiality and structural elegance. Every project is a testament to silent authority and tactile integrity.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Logos Strip */}
        <div className="border-t border-[#E0E0E0] mt-20 pt-10">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
              <span className="font-sans text-[12px] tracking-[0.1em] text-[#888888] uppercase">
                Featured In:
              </span>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {brandLogos.map((logo, index) => (
                  <span
                    key={index}
                    className="font-heading italic text-[20px] md:text-[24px] text-[#1A1A1A] tracking-wide"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
