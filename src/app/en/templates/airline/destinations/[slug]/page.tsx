// src/app/templates/OHMT008-airline/destinations/[slug]/page.tsx
"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { destinations } from "./destinationData";
import { ArrowLeft, Clock, DollarSign, Globe, Shield, Plane } from "lucide-react";

const ALL_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const RELATED_IMGS: Record<string, string> = {
  paris: "/templates/OHMT008-airline/destination-main.jpg",
  tokyo: "/templates/OHMT008-airline/destination-2.jpg",
  "new-york": "/templates/OHMT008-airline/destination-3.jpg",
  dubai: "/templates/OHMT008-airline/destination-3.jpg",
  sydney: "/templates/OHMT008-airline/destination-2.jpg",
  bali: "/templates/OHMT008-airline/destination-main.jpg",
};

const CLASS_COLORS: Record<string, string> = {
  Economy: "text-white/60",
  Business: "text-[var(--color-accent)]",
  First: "text-[var(--color-accent-light)]",
};

export default function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const dest = destinations[slug];
  const [activeHighlight, setActiveHighlight] = useState(0);

  if (!dest) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#7A7A7A] mb-4">Destination not found.</p>
            <Link href="/en/templates/OHMT015-airline-en/destinations" className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm">
              ??Back to Destinations
            </Link>
          </div>
        </main>
      </TemplateWrapper>
    );
  }

  // Robust local images replacements inside dest mappings
  const localHeroImg = RELATED_IMGS[slug] || "/templates/OHMT008-airline/destination-main.jpg";
  const localHighlightsImgs = [
    "/templates/OHMT008-airline/destination-main.jpg",
    "/templates/OHMT008-airline/destination-2.jpg",
    "/templates/OHMT008-airline/destination-3.jpg",
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
        <Header />

        {/*  HERO  */}
        <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-[var(--color-primary)]">
          <img
            src={localHeroImg}
            alt={dest.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-95"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,21,46,0.3)_0%,rgba(5,21,46,0.1)_40%,rgba(5,21,46,0.85)_80%,rgba(5,21,46,1)_100%)]" />

          {/* Back */}
          <div className="absolute top-[88px] left-0 right-0 z-10">
            <div className="max-w-[1320px] mx-auto px-6 md:px-10">
              <Link
                href="/en/templates/OHMT015-airline-en/destinations"
                className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft size={14} /> All Destinations
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-[1320px] mx-auto px-6 md:px-10 pb-14">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">
                {dest.country} · {dest.iataCode}
              </span>
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[1.1] text-white mb-4">
                {dest.name}
              </h1>
              <p className="text-[1rem] font-normal text-white/60 max-w-[520px] leading-[1.4] mb-10 normal-case">
                {dest.tagline}
              </p>

              {/* Flight quick info */}
              <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
                <div className="flex items-center gap-2.5">
                  <Plane size={14} className="text-[var(--color-accent)]" />
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/40">ICN ??{dest.iataCode}</p>
                    <p className="text-[0.88rem] font-bold text-white">{dest.flightDuration}</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/40">From</p>
                  <p className="text-[0.88rem] font-bold text-white">{dest.priceFrom}</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/40">Best Time</p>
                  <p className="text-[0.88rem] font-bold text-white">{dest.bestMonths.slice(0, 2).join(" ??")}</p>
                </div>
                
                <Link
                  href="/en/templates/OHMT015-airline-en/book"
                  className="ml-auto text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-85 transition-opacity duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*  QUICK FACTS  */}
        <section className="bg-[var(--color-primary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
              {dest.facts.map((f, i) => {
                const icons = [Globe, DollarSign, Clock, Shield];
                const Icon = icons[i];
                return (
                  <div key={f.label} className="flex items-center gap-4 px-8 first:pl-0 last:pr-0">
                    <Icon size={18} className="text-[var(--color-accent)] shrink-0" />
                    <div>
                      <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/35 mb-0.5">{f.label}</p>
                      <p className="text-[0.88rem] font-semibold text-white">{f.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/*  ABOUT  */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-20 items-center">
            <div className="normal-case">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-5">About</span>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-6">
                Discover {dest.name}
              </h2>
              <p className="text-[0.95rem] text-[#7A7A7A] leading-[1.82] font-normal">
                {dest.desc}
              </p>
            </div>

            {/* Best Season */}
            <div className="bg-[#F7F6F3] p-10">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-6">Best Time to Visit</p>
              <div className="grid grid-cols-6 gap-2">
                {ALL_MONTHS.map((m) => {
                  const active = dest.bestMonths.includes(m);
                  return (
                    <div
                      key={m}
                      className={`py-3 text-center text-[0.65rem] font-bold tracking-wide transition-colors ${
                        active
                          ? "bg-[var(--color-primary)] text-[var(--color-accent)]"
                          : "bg-white text-[#7A7A7A] border border-[var(--color-border)]"
                      }`}
                    >
                      {m}
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-[0.78rem] text-[#7A7A7A] font-normal leading-[1.4] normal-case">
                Highlighted months offer the best combination of weather, fewer crowds, and local events.
              </p>
            </div>
          </div>
        </section>

        {/*  HIGHLIGHTS  */}
        <section className="py-12 md:py-24 bg-[#F7F6F3]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">Must See</span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-12">
              Top Highlights
            </h2>

            <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--color-border)]">
              {dest.highlights.map((h, i) => (
                <div
                  key={h.name}
                  className="group relative h-[400px] overflow-hidden cursor-pointer bg-white"
                  onMouseEnter={() => setActiveHighlight(i)}
                >
                  <img
                    src={localHighlightsImgs[i % localHighlightsImgs.length]}
                    alt={h.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-left normal-case">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2">
                      0{i + 1}
                    </p>
                    <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold text-white mb-2 uppercase">
                      {h.name}
                    </h3>
                    <p className="text-[0.8rem] text-white/65 leading-[1.4] max-h-0 overflow-hidden group-hover:max-h-20 transition-[max-height] duration-300 font-normal">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  FLIGHTS  */}
        <section className="py-12 md:py-24 bg-[var(--color-primary)]">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">
                  ICN ??{dest.iataCode}
                </span>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight text-white leading-[1.1]">
                  Available Flights
                </h2>
              </div>
              <Link href="/en/templates/OHMT015-airline-en/book" className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors inline-flex items-center gap-2">
                View all flights ??
              </Link>
            </div>

            <div className="flex flex-col gap-[1px] bg-white/[0.06]">
               {dest.flights.map((f, i) => (
                 <div
                   key={`${f.departure}-${f.arrival}-${i}`}
                   className="flex flex-col md:flex-row md:items-center gap-8 bg-[var(--color-primary)] px-8 py-6 hover:bg-[#0d2040] transition-colors group"
                 >
                  <div className="shrink-0 text-left">
                    <p className={`text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-1 ${CLASS_COLORS[f.class]}`}>
                      {f.class}
                    </p>
                  </div>

                  <div className="w-px h-8 bg-white/10 shrink-0 hidden md:block" />

                  <div className="flex items-center gap-6 flex-1 text-left">
                    <div>
                      <p className="text-[1.4rem] font-black text-white tracking-tighter leading-none">{f.departure}</p>
                      <p className="text-[0.62rem] text-white/40 uppercase tracking-wide mt-0.5">ICN Seoul</p>
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="flex-1 h-[1px] bg-white/15" />
                      <div className="flex flex-col items-center gap-1">
                        <Plane size={12} className="text-[var(--color-accent)]" />
                        <span className="text-[0.6rem] text-white/40 tracking-wide whitespace-nowrap">{f.duration}</span>
                      </div>
                      <div className="flex-1 h-[1px] bg-white/15" />
                    </div>
                    <div>
                      <p className="text-[1.4rem] font-black text-white tracking-tighter leading-none">{f.arrival}</p>
                      <p className="text-[0.62rem] text-white/40 uppercase tracking-wide mt-0.5">{dest.iataCode} {dest.name}</p>
                    </div>
                  </div>

                  <div className="w-px h-8 bg-white/10 shrink-0 hidden md:block" />

                  <div className="text-left md:text-right shrink-0">
                    <p className="text-[1.1rem] font-black text-white">{f.price}</p>
                    <p className="text-[0.6rem] text-white/40 uppercase tracking-wide">per person</p>
                  </div>

                  <Link 
                    href="/en/templates/OHMT015-airline-en/book"
                    className="shrink-0 text-center px-6 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] bg-transparent border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-colors duration-300"
                  >
                    Select
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  RELATED DESTINATIONS  */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-6 md:px-10">
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">Explore More</span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.8rem,3vw,2.8rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.1] mb-12">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dest.related.map((slug) => {
                const rel = destinations[slug];
                if (!rel) return null;
                return (
                  <Link
                    href={`/en/templates/OHMT015-airline-en/destinations/${slug}`}
                    key={slug}
                    className="group relative h-[260px] overflow-hidden border border-[var(--color-border)]"
                  >
                    <img
                      src={RELATED_IMGS[slug]}
                      alt={rel.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-1">{rel.country}</p>
                      <h3 className="font-[family-name:var(--theme-font-heading)] text-xl font-bold text-white uppercase">{rel.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
