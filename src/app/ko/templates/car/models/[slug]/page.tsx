"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../_components/layout/Header";
import { Footer } from "../../_components/layout/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";

const models: Record<string, {
  name: string; type: string; tagline: string;
  range: string; power: string; acceleration: string; topSpeed: string;
  price: string; heroImg: string; sideImg: string; interiorImg: string;
  color: string;
  highlights: { label: string; value: string }[];
  features: { title: string; desc: string }[];
}> = {
  ev9: {
    name: "EV9", type: "All-Electric SUV",
    tagline: "Seven seats. 530km. The family car reimagined.",
    range: "530km", power: "402hp", acceleration: "5.3s", topSpeed: "210km/h",
    price: "$79,900", heroImg: "/templates/OHMT009-car/hero-1.jpg",
    sideImg: "/templates/OHMT009-car/car-1.jpg", interiorImg: "/templates/OHMT009-car/car-4.jpg",
    color: "#1a3a5c",
    highlights: [
      { label: "Range (WLTP)", value: "530 km" },
      { label: "Power", value: "402 hp" },
      { label: "0–100 km/h", value: "5.3 s" },
      { label: "Charging (10–80%)", value: "22 min" },
      { label: "Seating", value: "7" },
      { label: "Cargo (max)", value: "2,318 L" },
    ],
    features: [
      { title: "800V Architecture", desc: "Ultra-fast 350kW DC charging. 100km of range in under 5 minutes at supported stations." },
      { title: "AI-Pilot 2.0", desc: "Neural network assistance that reads road conditions 4,000 times per second across 12 sensors." },
      { title: "Panoramic Cabin", desc: "30-inch floating display, tri-zone climate, and a signature scent diffuser as standard." },
    ],
  },
  gt7: {
    name: "GT7", type: "Performance Sedan",
    tagline: "615hp. Four doors. Zero compromise.",
    range: "480km", power: "615hp", acceleration: "3.8s", topSpeed: "260km/h",
    price: "$89,400", heroImg: "/templates/OHMT009-car/hero-2.jpg",
    sideImg: "/templates/OHMT009-car/car-5.jpg", interiorImg: "/templates/OHMT009-car/car-3.jpg",
    color: "var(--color-bg-secondary)",
    highlights: [
      { label: "Range (WLTP)", value: "480 km" },
      { label: "Power", value: "615 hp" },
      { label: "0–100 km/h", value: "3.8 s" },
      { label: "Top Speed", value: "260 km/h" },
      { label: "Drive", value: "AWD" },
      { label: "Torque", value: "740 Nm" },
    ],
    features: [
      { title: "Dual Motor AWD", desc: "Independently controlled front and rear motors deliver instant torque vectoring on every corner." },
      { title: "Adaptive Track Mode", desc: "Recalibrates suspension, steering weight, and regen in real time based on driving inputs." },
      { title: "Carbon Ceramic Brakes", desc: "Fade-free stopping power from 260km/h, weighing 40% less than conventional brakes." },
    ],
  },
  x5: {
    name: "X5", type: "Luxury SUV",
    tagline: "Presence without compromise.",
    range: "510km", power: "355hp", acceleration: "5.9s", topSpeed: "220km/h",
    price: "$95,200", heroImg: "/templates/OHMT009-car/hero-3.jpg",
    sideImg: "/templates/OHMT009-car/car-2.jpg", interiorImg: "/templates/OHMT009-car/car-4.jpg",
    color: "#2a1a0a",
    highlights: [
      { label: "Range (WLTP)", value: "510 km" },
      { label: "Power", value: "355 hp" },
      { label: "0–100 km/h", value: "5.9 s" },
      { label: "Ride Height", value: "Adjustable" },
      { label: "Towing Capacity", value: "2,500 kg" },
      { label: "Air Suspension", value: "Standard" },
    ],
    features: [
      { title: "Executive Rear Suite", desc: "Massaging seats, 12-inch rear displays, and a refrigerated centre console as standard." },
      { title: "Terrain Command", desc: "Six drive modes including Off-Road, Snow, and Sand with auto-levelling air suspension." },
      { title: "Burmester® Audio", desc: "24-speaker, 1,500W immersive sound system tuned specifically for the X5 cabin." },
    ],
  },
  s3: {
    name: "S3", type: "Compact Executive",
    tagline: "Precision engineering in a sharper package.",
    range: "460km", power: "295hp", acceleration: "5.1s", topSpeed: "230km/h",
    price: "$64,900", heroImg: "/templates/OHMT009-car/car-1.jpg",
    sideImg: "/templates/OHMT009-car/hero-1.jpg", interiorImg: "/templates/OHMT009-car/car-3.jpg",
    color: "#0a1a0a",
    highlights: [
      { label: "Range (WLTP)", value: "460 km" },
      { label: "Power", value: "295 hp" },
      { label: "0–100 km/h", value: "5.1 s" },
      { label: "Wheelbase", value: "2,875 mm" },
      { label: "Weight", value: "1,820 kg" },
      { label: "Drag Coefficient", value: "0.21 Cd" },
    ],
    features: [
      { title: "Ultra-Low Drag", desc: "Flush door handles, active grille shutters, and an underbody diffuser achieve a Cd of 0.21." },
      { title: "Driver Focus HUD", desc: "Full-colour augmented reality heads-up display projects speed, nav, and hazard data at eye level." },
      { title: "Sport Chassis", desc: "Bespoke spring and damper tuning for a ride that's sharp without ever becoming fatiguing." },
    ],
  },
};

export default function CarModelDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const model = models[slug];

  if (!model) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased bg-black text-white min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center flex-col gap-6 pt-12 md:pt-24">
            <h1 className="text-2xl font-bold">Model not found</h1>
            <Link href="/ko/templates/OHMT018-car-kr/models" className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--theme-accent)] border-b border-[var(--theme-accent)] pb-0.5">← All Models</Link>
          </div>
        </main>
      </TemplateWrapper>
    );
  }

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />

        {/* Hero */}
        <section className="relative h-[90vh] min-h-[560px] overflow-hidden flex items-end">
          <img loading="lazy" src={model.heroImg} alt={model.name} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
          <div className="relative w-full max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-16 md:pb-24">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-3 block">{model.type}</span>
            <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(4rem,10vw,9rem)] tracking-[-0.03em] leading-[1.5] mb-4 text-white">
              {model.name}
            </h1>
            <p className="text-[0.95rem] text-white/60 font-normal max-w-[480px] mb-8">{model.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ko/templates/OHMT018-car-kr/configure" className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-3 bg-[var(--theme-accent)] text-black hover:opacity-85 transition-opacity w-fit">
                Configure Your {model.name}
              </Link>
              <Link href="/ko/templates/OHMT018-car-kr/models" className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-3 border border-white/25 text-white hover:border-white transition-colors w-fit">
                ← All Models
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="grid grid-cols-3 md:grid-cols-6 border-b border-[var(--theme-border)] bg-[var(--color-primary)]">
          {model.highlights.map((h) => (
            <div key={h.label} className="py-6 md:py-8 px-4 text-center border-r border-[var(--theme-border)] last:border-r-0">
              <div className="text-[clamp(1.1rem,2.5vw,1.8rem)] font-bold text-white tracking-tight leading-none mb-1">{h.value}</div>
              <div className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--theme-text-muted)]">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Side image + Features */}
        <section className="grid md:grid-cols-2 min-h-[560px]">
          <div className="overflow-hidden group min-h-[300px] md:min-h-auto">
            <img loading="lazy" src={model.sideImg} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
          </div>
          <div className="bg-[var(--color-primary)] flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 gap-10">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">{model.name} Technology</span>
             {model.features.map((f) => (
               <div key={f.title} className="flex gap-6">
                 <div className="w-px bg-[var(--theme-accent)]/40 shrink-0 mt-1" />
                 <div>
                   <h3 className="text-[0.95rem] font-bold text-white mb-1.5 tracking-[-0.03em]">{f.title}</h3>
                   <p className="text-[0.82rem] text-[var(--theme-text-muted)] leading-relaxed font-normal">{f.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Interior full-bleed */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img loading="lazy" src={model.interiorImg} alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-[var(--theme-gutter)] py-10 md:py-16 max-w-[var(--theme-container)] mx-auto">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-3 block">Interior</span>
            <p className="text-[clamp(1.1rem,2.5vw,1.8rem)] font-normal text-white max-w-[560px] leading-snug">
              Every surface designed for those who demand more from every journey.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-primary)] border-t border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] py-14 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-2">Starting from</p>
              <p className="text-[2.5rem] font-bold text-white tracking-tight leading-none">{model.price}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ko/templates/OHMT018-car-kr/configure" className="text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-3.5 bg-[var(--theme-accent)] text-black hover:opacity-85 transition-opacity">
                Build & Price
              </Link>
              <Link href="/ko/templates/OHMT018-car-kr" className="text-[0.68rem] font-bold uppercase tracking-[0.16em] px-8 py-3.5 border border-white/25 text-white hover:border-white transition-colors">
                Book Test Drive
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
