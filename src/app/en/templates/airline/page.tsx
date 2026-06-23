// src/app/templates/OHMT008-airline/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { SearchWidget } from "./_components/SearchWidget";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { ArrowRight, Utensils, BedDouble, Wifi, ShieldCheck } from "lucide-react";

function AirlineTemplateContent() {
  const services = [
    {
      icon: BedDouble,
      title: "Private First Class Suites",
      desc: "Fully enclosed cabins with 180° flatbed, sliding privacy doors, and a personal wardrobe - your own sanctuary at 40,000 feet."
    },
    {
      icon: Utensils,
      title: "Michelin-Star Dining",
      desc: "Pre-select from chef-curated seasonal menus, paired with vintage champagne and fine wines from our cellared collection."
    },
    {
      icon: Wifi,
      title: "Ultra-HD Entertainment",
      desc: "32-inch 4K screens with 1,500+ hours of on-demand content, live global news, and high-speed inflight Wi-Fi connectivity."
    },
    {
      icon: ShieldCheck,
      title: "Priority Concierge Service",
      desc: "Dedicated personal concierge from pre-departure lounge access through seamless arrivals at every Vinus Air destination."
    }
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        <Header />

        <Hero />

        <SearchWidget />

        {/* Section 1: The Experience */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                  The Experience
                </span>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-6">
                  Uncompromising luxury in every detail.
                </h2>
                <p className="text-[0.95rem] text-[var(--color-text-muted)] leading-[1.82] mb-8 md:mb-10 font-normal">
                  From our signature caviar service to the quietest cabins in the sky, we redefine what it means to travel. Our fleet is equipped with the latest technology to ensure your journey is as smooth as it is memorable.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">Private Suites</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">Full-flat beds with sliding doors for ultimate privacy.</p>
                  </div>
                  <div>
                    <strong className="block text-[var(--color-primary)] font-bold mb-1">Global Dining</strong>
                    <p className="text-[0.85rem] text-[var(--color-text-muted)]">Menus curated by Michelin-starred chefs.</p>
                  </div>
                </div>
                <Link href="/en/templates/OHMT015-airline-en/experience" className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] hover:translate-x-1.5 transition-transform duration-300">
                  Explore First Class <span className="text-[1.2em]">→</span>
                </Link>
              </div>
              <div className="relative h-[320px] md:h-[480px] overflow-hidden">
                <img
                  src="/templates/OHMT008-airline/destination-3.jpg"
                  className="w-full h-full object-cover"
                  alt="In-flight service"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Crew / Service image + stats */}
        <section className="bg-[var(--color-primary)] py-16 md:py-24">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative h-[320px] md:h-[560px] overflow-hidden order-2 md:order-1">
                <img
                  src="/templates/OHMT008-airline/airline-experience-hero.png"
                  className="w-full h-full object-cover opacity-80"
                  alt="Vinus Air cabin crew"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent" />
              </div>
              <div className="order-1 md:order-2 space-y-8 md:space-y-10">
                <div>
                  <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                    White Glove Service
                  </span>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight text-white leading-[1.1]">
                    Every moment attended, <br />
                    <span className="font-normal text-[var(--color-accent)]">with precision.</span>
                  </h2>
                </div>
                <p className="text-[0.95rem] text-white/60 leading-[1.82] font-normal">
                  Our cabin crew are trained at the world's premier hospitality institutes. From the moment you board to your final destination, every request is met with grace, discretion, and expertise.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 md:pt-10">
                  {[
                    { value: "200+", label: "Destinations" },
                    { value: "98%", label: "On-Time Rate" },
                    { value: "15yr", label: "Avg. Crew Exp." },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-black text-[var(--color-accent)]">{stat.value}</div>
                      <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Service Cards */}
        <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="mb-10 md:mb-14">
              <span className="block text-[14px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                Our Services
              </span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.1]">
                Crafted for those who <br className="hidden md:block" />expect the extraordinary.
              </h2>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
               {services.map((s) => (
                 <div key={s.title} className="bg-white border border-[var(--color-border)] p-8 md:p-8 space-y-6 group hover:border-[var(--color-accent)] transition-colors duration-300">
                   <div className="w-10 h-10 bg-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                     <s.icon size={18} className="text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
                   </div>
                   <h3 className="text-[0.92rem] font-bold text-[var(--color-primary)] leading-tight uppercase tracking-wide">
                     {s.title}
                   </h3>
                   <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-[1.4] font-normal">
                     {s.desc}
                   </p>
                 </div>
               ))}
             </div>

            <div className="mt-10 md:mt-14 text-center">
              <Link
                href="/en/templates/OHMT015-airline-en/experience"
                className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] px-10 py-3.5 bg-[var(--color-primary)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                View Full Experience <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function AirlineTemplate() {
  return (
    <React.Suspense fallback={null}>
      <AirlineTemplateContent />
    </React.Suspense>
  );
}
