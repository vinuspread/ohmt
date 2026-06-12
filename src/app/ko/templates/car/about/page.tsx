"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const stats = [
  { value: "12,000+", label: "Employees worldwide" },
  { value: "200+", label: "Showrooms globally" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "2018", label: "Founded" },
];

const values = [
  { num: "01", title: "Relentless Precision", desc: "Every component is engineered to tolerances most manufacturers consider impossible. We consider them standard." },
  { num: "02", title: "Honest Design", desc: "We don't add lines for visual noise. Every curve has aerodynamic purpose. Every surface earns its place." },
  { num: "03", title: "Sustainable by Default", desc: "Not a feature. Not a checkbox. Sustainability is embedded in every material decision, every supply chain choice." },
  { num: "04", title: "Driver First", desc: "Autonomous capability, but never autonomous by default. The driver remains the most important system in the vehicle." },
];

function CarAboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="relative h-[85vh] min-h-[560px] overflow-hidden flex items-end">
          <img
            src="/templates/car/hero-1.jpg"
            alt="VINUS Motors"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] pb-12 md:pb-24 w-full">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">About VINUS</span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.8rem,6vw,5.5rem)] tracking-[-0.03em] leading-[1.5] max-w-[680px]">
              Born from a belief<br />that driving should be<br />extraordinary.
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-white font-normal leading-[1.7]">
              Founded in 2018, VINUS Motors set out to build vehicles that inspire. Not just modes of transport, but objects of desire - where cutting-edge technology meets uncompromising design.
            </p>
            <p className="text-[0.9rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">
              Today, we employ over 12,000 people across three continents, with a network of 200+ showrooms worldwide. Our commitment to sustainable luxury drives every decision we make. We don't just build cars. We build the future of personal movement.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--theme-border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-10 md:py-16 px-4 md:px-8 text-center">
                  <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-[0.72rem] text-[var(--theme-text-muted)] uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-bleed */}
        <div className="relative h-[55vh] overflow-hidden">
          <img loading="lazy" src="/templates/car/car-1.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[clamp(1.2rem,3vw,2.2rem)] font-bold tracking-tight text-white text-center max-w-[560px] px-6 leading-tight">
              "We build for drivers who refuse to accept that performance and responsibility are opposites."
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] py-12 md:py-20">
          <div className="flex items-end justify-between mb-10 border-b border-[var(--theme-border)] pb-6">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.03em]">Our Principles</h2>
            <span className="text-[0.72rem] text-[var(--theme-text-muted)] uppercase tracking-widest hidden md:block">What drives us</span>
          </div>
          <div className="grid md:grid-cols-2 gap-[1px] bg-[var(--theme-border)]">
            {values.map((v) => (
              <div key={v.num} className="bg-black p-6 md:p-12 group hover:bg-[#0d0d0d] transition-colors">
                <span className="text-[0.7rem] text-[var(--theme-accent)]/50 block mb-6">{v.num}</span>
                <h3 className="text-[1.2rem] font-bold tracking-[-0.03em] mb-4 group-hover:text-[var(--theme-accent)] transition-colors">{v.title}</h3>
                <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img loading="lazy" src="/templates/car/hero-2.jpg" alt="" className="w-full h-[420px] object-cover object-center" />
          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">Ready?</span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] mb-8">Experience it yourself.</h2>
            <Link
              href="/ko/templates/car"
              className="text-[0.72rem] font-bold uppercase tracking-[0.16em] px-8 py-3.5 bg-[var(--theme-accent)] text-black hover:opacity-85 transition-opacity"
            >
              Book a Test Drive
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarAboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarAboutPageContent {...props} />
    </React.Suspense>
  );
}
