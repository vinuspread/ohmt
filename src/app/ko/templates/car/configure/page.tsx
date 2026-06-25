"use client";

import React, { useState } from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const colors = [
  { name: "Obsidian Black", hex: "var(--color-bg-secondary)", price: 0 },
  { name: "Arctic White",   hex: "#e8e8e8", price: 1200 },
  { name: "Racing Red",     hex: "#8B0000", price: 1800 },
  { name: "Silver Storm",   hex: "#708090", price: 900 },
  { name: "Midnight Blue",  hex: "#1a2744", price: 1500 },
];

const wheels = [
  { name: '20" Aero',        desc: "Optimised for range & efficiency", price: 0 },
  { name: '21" Sport',       desc: "Wider stance, sharper cornering",  price: 2400 },
  { name: '22" Performance', desc: "Track-tuned, zero compromise",     price: 4800 },
];

const interiors = [
  { name: "Charcoal Suede", desc: "Modern & understated", price: 0 },
  { name: "Ivory Leather",  desc: "Classic luxury finish", price: 1600 },
  { name: "Saddle Brown",   desc: "Warm, rich character",  price: 1600 },
];

const views = ["Exterior", "Side", "Rear"];
const viewImgs = [
  "/templates/OHMT009-car/car-3.jpg",
  "/templates/OHMT009-car/car-1.jpg",
  "/templates/OHMT009-car/car-5.jpg",
];

const BASE_PRICE = 89400;
function fmt(n: number) {
  return n === 0 ? "Included" : `+$${n.toLocaleString()}`;
}

function CarConfigurePageContent() {
  const [color,    setColor]    = useState(0);
  const [wheel,    setWheel]    = useState(0);
  const [interior, setInterior] = useState(0);
  const [view,     setView]     = useState(0);

  const total = BASE_PRICE + colors[color].price + wheels[wheel].price + interiors[interior].price;

  /* multiply overlay intensity: white needs no tint, black is strong */
  const overlayOpacity =
    colors[color].hex === "#e8e8e8" ? 0 :
    colors[color].hex === "var(--color-bg-secondary)" ? 0.55 : 0.45;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black min-h-screen">
        <Header />

        <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 68px)" }}>

          {/* ── Left: interactive preview ── */}
          <div className="lg:flex-1 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] flex flex-col bg-[var(--color-primary)] pt-16">

            {/* View tabs */}
            <div className="flex gap-1 px-8 pt-6 pb-4">
              {views.map((v, i) => (
                <button
                  key={v}
                  onClick={() => setView(i)}
                  className={`px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-all border ${
                    i === view
                      ? "border-[var(--theme-accent)] text-[var(--theme-accent)]"
                      : "border-transparent text-[var(--theme-text-muted)] hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Car render area - grayscale base + color overlay */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center px-4">
              {viewImgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === view ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ filter: "grayscale(0.9) contrast(1.05) brightness(0.85)" }}
                />
              ))}

              {/* Color tint overlay via multiply */}
              <div
                className="absolute inset-0 transition-all duration-500 pointer-events-none"
                style={{
                  backgroundColor: colors[color].hex,
                  mixBlendMode: "multiply",
                  opacity: overlayOpacity,
                }}
              />

              {/* Gradient mask bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-[var(--color-primary)]/30 pointer-events-none" />

              {/* 360 hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-widest text-white/30">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12 7A5 5 0 112 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M12 7l-1.5-1.5M12 7l1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Drag to rotate
              </div>
            </div>

            {/* Color swatches bottom bar */}
            <div className="px-8 py-6 border-t border-white/5 flex items-center gap-4">
              <span className="text-[0.65rem] uppercase tracking-widest text-[var(--theme-text-muted)] mr-2">Color</span>
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setColor(i)}
                  title={c.name}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                    i === color ? "border-white scale-125" : "border-white/20 hover:border-white/60"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              <span className="ml-auto text-[0.78rem] font-medium text-white/70">{colors[color].name}</span>
            </div>
          </div>

          {/* ── Right: config panel ── */}
          <div className="lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col bg-[var(--color-primary)] overflow-y-auto pt-16">

            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-2">Configure</p>
              <h1 className="text-[1.6rem] font-bold tracking-[-0.03em] leading-tight">VINUS GT7</h1>
              <p className="text-[0.78rem] text-[var(--theme-text-muted)] mt-1">Performance Sedan · From $89,400</p>
            </div>

            {/* Wheels */}
            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-4">Wheels</p>
              <div className="space-y-2">
                {wheels.map((w, i) => (
                  <button
                    key={w.name}
                    onClick={() => setWheel(i)}
                    className={`w-full flex items-center gap-3 p-3.5 border transition-all text-left ${
                      i === wheel
                        ? "border-[var(--theme-accent)]/60 bg-white/4"
                        : "border-white/8 hover:border-white/20"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors ${
                      i === wheel ? "border-[var(--theme-accent)] bg-[var(--theme-accent)]" : "border-white/30"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.82rem] font-medium">{w.name}</p>
                      <p className="text-[0.7rem] text-[var(--theme-text-muted)]">{w.desc}</p>
                    </div>
                    <span className="text-[0.72rem] text-[var(--theme-text-muted)] shrink-0">{fmt(w.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interior */}
            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-4">Interior</p>
              <div className="space-y-2">
                {interiors.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setInterior(i)}
                    className={`w-full flex items-center gap-3 p-3.5 border transition-all text-left ${
                      i === interior
                        ? "border-[var(--theme-accent)]/60 bg-white/4"
                        : "border-white/8 hover:border-white/20"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors ${
                      i === interior ? "border-[var(--theme-accent)] bg-[var(--theme-accent)]" : "border-white/30"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.82rem] font-medium">{item.name}</p>
                      <p className="text-[0.7rem] text-[var(--theme-text-muted)]">{item.desc}</p>
                    </div>
                    <span className="text-[0.72rem] text-[var(--theme-text-muted)] shrink-0">{fmt(item.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price summary */}
            <div className="px-8 py-8 mt-auto">
              <div className="space-y-2.5 mb-6">
                {[
                  { k: "Base price", v: `$${BASE_PRICE.toLocaleString()}` },
                  { k: colors[color].name, v: fmt(colors[color].price) },
                  { k: wheels[wheel].name, v: fmt(wheels[wheel].price) },
                  { k: interiors[interior].name, v: fmt(interiors[interior].price) },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between text-[0.78rem]">
                    <span className="text-[var(--theme-text-muted)]">{k}</span>
                    <span className="text-white/80">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-white/10 pt-5 mb-6">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[var(--theme-text-muted)]">Est. Total</p>
                  <p className="text-[1.8rem] font-bold tracking-tight">${total.toLocaleString()}</p>
                </div>
                <span className="text-[0.65rem] text-[var(--theme-text-muted)] text-right leading-relaxed max-w-[120px]">
                  Before taxes & destination
                </span>
              </div>

              <button className="w-full py-4 bg-[var(--theme-accent)] text-black font-bold text-[0.7rem] uppercase tracking-[0.18em] hover:brightness-110 transition-all mb-3">
                Save Configuration
              </button>
              <button className="w-full py-3.5 border border-white/15 text-white/70 text-[0.7rem] uppercase tracking-[0.15em] font-medium hover:border-white/40 hover:text-white transition-all">
                Book a Test Drive
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarConfigurePage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarConfigurePageContent {...props} />
    </React.Suspense>
  );
}
