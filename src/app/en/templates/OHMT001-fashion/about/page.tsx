"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <section className="relative h-[70vh] overflow-hidden">
          <img src="/templates/OHMT001-fashion/exclusive-custom.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] uppercase tracking-widest text-white/60">EST. 2026</span>
            <h1 className="font-[family-name:var(--font-bodoni)] text-[48px] md:text-[72px] text-white font-bold tracking-tight mt-4">The Brand</h1>
          </div>
        </section>

        <section className="bg-black py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-bodoni)] italic text-[28px] md:text-[40px] text-white leading-[1.3]">
              &ldquo;We don&rsquo;t follow seasons. We build things that outlast them.&rdquo;
            </p>
            <div className="border-t border-white/20 w-16 mx-auto mt-12" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-black/40">Our Story</span>
                <p className="text-[16px] text-black/70 leading-relaxed mt-6">
                  Founded in 2026 with a single conviction: that clothing should outlast the moment it was made for. We work with a small circle of mills and artisans who share our obsession with material integrity. Every garment is pattern-cut by hand, sewn slowly, and finished without shortcuts.
                </p>
                <p className="text-[16px] text-black/70 leading-relaxed mt-6">
                  We are not interested in trend. We are interested in permanence.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/templates/OHMT001-fashion/hero-custom.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#F9F9F9]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              {[
                { num: "01", title: "Quality", desc: "Every material is chosen for longevity, not cost." },
                { num: "02", title: "Craft", desc: "Hand-finished details that machines cannot replicate." },
                { num: "03", title: "Timelessness", desc: "Designed to be worn decades from now." },
              ].map((item, i) => (
                <div key={item.num} className={i < 2 ? "md:border-r border-black/10 md:pr-12 lg:pr-20" : "md:pl-12 lg:pl-20"}>
                  <span className="text-[11px] font-mono text-black/20">{item.num}</span>
                  <h3 className="font-[family-name:var(--font-bodoni)] text-[20px] font-bold tracking-tight mt-2">{item.title}</h3>
                  <p className="text-[14px] text-black/60 leading-relaxed mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <p className="text-[20px] text-black/50">Ready to wear something that lasts?</p>
          <Link
            href="/en/templates/OHMT001-fashion/category/collection"
            className="inline-block bg-black text-white px-10 py-4 mt-8 text-[12px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
          >
            Explore Collection
          </Link>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function AboutPage() {
  return (
    <React.Suspense fallback={null}>
      <AboutContent />
    </React.Suspense>
  );
}
