"use client";

import React, { useState } from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const technologies = [
  {
    num: "01",
    title: "AI-Pilot 2.0",
    desc: "Neural network driving assistance that learns your habits and anticipates road conditions in real-time.",
    detail: "Processes 4,000 data points per second from 12 sensors. Reacts in 0.02 seconds - 10× faster than human reflex.",
    img: "/templates/car/car-1.jpg",
  },
  {
    num: "02",
    title: "Quantum Battery",
    desc: "Solid-state architecture delivering 530km range with 350kW ultra-fast charging capability.",
    detail: "10% to 80% charge in 22 minutes. 100km of range added in under 5 minutes at high-speed stations.",
    img: "/templates/car/hero-1.jpg",
  },
  {
    num: "03",
    title: "Adaptive Suspension",
    desc: "Active damping system that reads road surfaces 1,000 times per second for unparalleled comfort.",
    detail: "Each wheel adjusts independently in 2ms. The result: zero compromise between sport and comfort.",
    img: "/templates/car/hero-3.jpg",
  },
  {
    num: "04",
    title: "Panoramic OS",
    desc: "A 30-inch floating display with haptic feedback and voice-native AI interface.",
    detail: "Learns your preferences within 3 drives. The interface disappears - only what you need, when you need it.",
    img: "/templates/car/car-5.jpg",
  },
];

function CarTechnologyPageContent() {
  const [active, setActive] = useState(0);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <img
            src="/templates/car/car-3.jpg"
            alt="VINUS Technology"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="relative max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-20 w-full">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">Technology</span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2.8rem,6vw,5.5rem)] tracking-tight leading-[1.1]">
              Innovation at<br />every level.
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)] py-10 md:py-16 border-b border-[var(--theme-border)]">
          <p className="text-[1rem] text-[var(--theme-text-muted)] font-normal leading-[1.4] max-w-[640px]">
            Our engineering philosophy is simple: question everything. The result is a suite of technologies that redefine what a vehicle can do.
          </p>
        </section>

        {/* Tech selector */}
        <section className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-4 md:gap-16 items-start">

            {/* Left: list */}
            <div className="space-y-0 border-t border-[var(--theme-border)]">
              {technologies.map((tech, i) => (
                <button
                  key={tech.num}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-6 border-b border-[var(--theme-border)] transition-all duration-300 group ${active === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-[0.72rem] mt-0.5 transition-colors ${active === i ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)]'}`}>
                      {tech.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.15rem] font-bold tracking-tight mb-2">{tech.title}</h3>
                      <p className="text-[0.82rem] text-[var(--theme-text-muted)] leading-[1.4] font-normal">{tech.desc}</p>
                      {active === i && (
                        <p className="text-[0.78rem] text-[var(--theme-accent)]/70 mt-3 leading-[1.4]">{tech.detail}</p>
                      )}
                    </div>
                    <span className={`text-lg transition-transform duration-300 ${active === i ? 'rotate-90 text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)]'}`}>→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: image */}
            <div className="md:sticky md:top-24">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-primary)] relative">
                {technologies.map((tech, i) => (
                  <img
                    key={tech.num}
                    src={tech.img}
                    alt={tech.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[3rem] font-bold text-white/10 leading-none select-none">
                    {technologies[active].num}
                  </span>
                </div>
              </div>
               <div className="flex gap-2 mt-3">
                 {technologies.map((tech) => (
                   <button
                     key={tech.num}
                     onClick={() => setActive(technologies.indexOf(tech))}
                     className={`h-[2px] transition-all duration-300 ${active === technologies.indexOf(tech) ? 'w-8 bg-[var(--theme-accent)]' : 'w-4 bg-[var(--theme-border)]'}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Full-bleed strip */}
        <div className="relative h-[50vh] overflow-hidden">
          <img loading="lazy" src="/templates/car/hero-2.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight text-center max-w-[600px] px-6">
              Every detail engineered to move you forward.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarTechnologyPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarTechnologyPageContent {...props} />
    </React.Suspense>
  );
}
