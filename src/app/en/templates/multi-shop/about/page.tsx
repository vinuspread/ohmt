"use client";
import React from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { TeamSection } from "../_components/TeamSection";
import { Services } from "../_components/Services";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function AboutPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white text-[var(--color-text)]">

        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/templates/OHMT017-multi-shop/about-brand.jpg"
            alt="About OHMT"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">About Us</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Our Story
            </h1>
            <p className="text-base text-white/70 mt-5 max-w-lg mx-auto leading-relaxed tracking-wide">
              Every piece is built with intention.<br />Every look is worn with quiet confidence.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-8">
                  Clothes That Don't<br />Try Too Hard.
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  We started OHMT because we wanted clothes that didn't try so hard.
                  Pieces that felt considered without being precious. Sharp without being cold.
                  The kind of wardrobe you reach for without thinking, because everything in it
                  just works.
                </p>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                  Our studio is in Seoul, but our approach travels. We work with small factories
                  that take their time, using fabrics we'd actually want to wear ourselves.
                  Nothing is made in bulk. Every drop is intentional, and when it's gone,
                  it's gone. That's the point.
                </p>
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/templates/OHMT017-multi-shop/category-women.jpg"
                  alt="OHMT collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Services />

        <section className="bg-white py-20 md:py-32 hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-5xl font-bold tracking-tight">2020</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">Founded</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold tracking-tight">50+</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">Collections</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold tracking-tight">10K+</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-2">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <Footer />
      </main>
      </TemplateWrapper>
    </>
  );
}

export default function AboutPage() {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent />
    </React.Suspense>
  );
}
