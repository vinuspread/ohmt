// src/app/en/templates/OHMT027-architecture/_components/sections/About.tsx
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
    <section className="bg-white py-24 lg:py-32 border-b border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
            {/* Left: Stats — col 1–4 */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col border-b border-[var(--color-border)] pb-6 last:border-b-0 last:pb-0">
                  <span className="font-heading font-normal text-6xl lg:text-8xl leading-none text-[var(--color-text)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs font-medium tracking-[0.15em] text-[var(--color-text-secondary)] mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Brand Philosophy — col 5–12 */}
            <div className="col-span-1 lg:col-span-8 space-y-8 lg:pt-4">
              <h2 className="font-heading font-normal text-3xl md:text-4xl lg:text-4xl leading-[var(--leading-body)] text-[var(--color-text)]">
                We believe that space has the power to transform the way people live. Our work converges precision craftsmanship with organic spatial dialogue.
              </h2>
              <p className="font-sans text-base leading-loose text-[var(--color-text-secondary)] max-w-xl">
                Founded in Seoul, our practice operates globally to curate bespoke residences, commercial workspaces, and public structures that honor materiality and structural elegance. Every project is a testament to silent authority and tactile integrity.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Logos Strip */}
        <div className="border-t border-[var(--color-border)] mt-20 pt-10">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
              <span className="font-sans text-xs tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">
                Featured In:
              </span>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {brandLogos.map((logo, index) => (
                  <span
                    key={index}
                    className="font-heading text-xl md:text-2xl text-[var(--color-text)] tracking-wide"
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
