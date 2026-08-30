"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />

        <SubpageHero
          eyebrow="EST. 2026"
          title="The Brand"
          description="A fashion laboratory built around restraint, material discipline, and pieces designed to outlast the season that introduced them."
          image="/templates/OHMT001-fashion/about-hero-v2.png"
          imageAlt="Fashion atelier brand story"
        />

        <section className="bg-black py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-bodoni)] italic text-3xl md:text-4xl text-white leading-[var(--leading-body)]">
              &ldquo;We don&rsquo;t follow seasons. We build things that outlast them.&rdquo;
            </p>
            <div className="border-t border-white/20 w-16 mx-auto mt-12" />
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Our Story</span>
                <p className="text-base text-black/70 leading-relaxed mt-6">
                  Founded in 2026 with a single conviction: that clothing should outlast the moment it was made for. We work with a small circle of mills and artisans who share our obsession with material integrity. Every garment is pattern-cut by hand, sewn slowly, and finished without shortcuts.
                </p>
                <p className="text-base text-black/70 leading-relaxed mt-6">
                  We are not interested in trend. We are interested in permanence.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/templates/OHMT001-fashion/hero-custom.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
              {[
                { num: "01", title: "Quality", desc: "Every material is chosen for longevity, not cost." },
                { num: "02", title: "Craft", desc: "Hand-finished details that machines cannot replicate." },
                { num: "03", title: "Timelessness", desc: "Designed to be worn decades from now." },
              ].map((item, i) => (
                <div key={item.num} className={`py-12 md:py-0 ${i === 0 ? "md:pr-16 lg:pr-24" : i === 1 ? "md:px-16 lg:px-24" : "md:pl-16 lg:pl-24"}`}>
                  <span className="block text-xs font-mono tracking-[0.25em] text-black/30 mb-7">· {item.num}</span>
                  <h3 className="font-[family-name:var(--font-bodoni)] text-3xl md:text-4xl font-normal tracking-tight leading-[1.05]">{item.title}</h3>
                  <div className="w-6 h-px bg-black/20 my-5" />
                  <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <p
            className="text-3xl text-black/58 md:text-4xl"
            style={{ fontFamily: "var(--font-bodoni)" }}
          >
            Ready to wear something that lasts?
          </p>
          <Link
            href="/en/templates/OHMT001-fashion/collection"
            className="inline-block bg-black text-white px-10 py-4 mt-8 text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
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
