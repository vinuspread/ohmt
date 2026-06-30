"use client";

import { useState } from "react";
import { Star } from "@phosphor-icons/react";

const tabs = [
  {
    label: "Restaurant",
    heading: "A table shaped by the coast",
    body: "The Michelin-starred OHMT restaurant unites ancient architecture with coastal light. Floor-to-ceiling windows frame the sea; every plate tells the landscape.",
    image: "/templates/resort/dining.jpg",
  },
  {
    label: "Bar",
    heading: "After dark, the bar becomes the shore",
    body: "Handcrafted cocktails meet the rhythm of the tide. An intimate space built around stone, timber, and the slow pulse of evening by the ocean.",
    image: "/templates/resort/gallery-4.jpg",
  },
  {
    label: "Terrace",
    heading: "Open air, open horizon",
    body: "Dine under stars with nothing between you and the sea. The terrace hosts sunset suppers and private events in the most elemental setting we know.",
    image: "/templates/resort/gallery-5.jpg",
  },
  {
    label: "Beach Cafe",
    heading: "Morning light over the water",
    body: "Barefoot breakfasts, cold-pressed juices, and slow mornings. The Beach Cafe is where days begin, gently, with salt air and the first warmth of sun.",
    image: "/templates/resort/gallery-6.jpg",
  },
];

export function Dining() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-3 block">
              DINING
            </span>
            <h2 className="text-[clamp(36px,4vw,56px)] font-semibold text-white leading-[1.05] tracking-[-0.02em]">
              Taste the Coast
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <Star size={16} color="#FFC392" weight="fill" />
            <span className="text-white text-[14px] font-medium">Michelin Star 2025</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((t, i) => (
            <button key={t.label} onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-[14px] transition-all duration-200 ${
                i === active
                  ? "bg-[var(--bg-dark)] text-white"
                  : "border border-white/40 text-white/70 hover:text-white hover:border-white/70"
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden min-h-[440px]">

          {/* Image */}
          <div className="relative overflow-hidden">
            {tabs.map((t, i) => (
              <img key={i} src={t.image} alt={t.label}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center bg-[var(--bg-dark)] px-12 py-14">
            <h3 className="text-[clamp(24px,2.4vw,36px)] font-semibold text-white leading-[1.2] tracking-[-0.02em] mb-5">
              {tab.heading}
            </h3>
            <p className="text-[15px] text-white/65 leading-relaxed mb-10">
              {tab.body}
            </p>
            <a href="#"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--text-dark)] text-[14px] font-medium hover:opacity-85 transition-opacity">
              Book a Table &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
