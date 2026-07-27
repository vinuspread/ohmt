"use client";

import { useState } from "react";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { BodyText, SectionHeading } from "../ui/Typography";
import { TabButton } from "../ui/TabButton";

const tabs = [
  {
    label: "Restaurant",
    heading: "A table shaped by the coast",
    body: "The Michelin-starred OHMT restaurant unites ancient architecture with coastal light. Floor-to-ceiling windows frame the sea; every plate tells the landscape.",
    image: "/templates/OHMT030-resort/dining.png",
  },
  {
    label: "Bar",
    heading: "After dark, the bar becomes the shore",
    body: "Handcrafted cocktails meet the rhythm of the tide. An intimate space built around stone, timber, and the slow pulse of evening by the ocean.",
    image: "/templates/OHMT030-resort/gallery-4.jpg",
  },
  {
    label: "Terrace",
    heading: "Open air, open horizon",
    body: "Dine under stars with nothing between you and the sea. The terrace hosts sunset suppers and private events in the most elemental setting we know.",
    image: "/templates/OHMT030-resort/gallery-5.jpg",
  },
  {
    label: "Beach Cafe",
    heading: "Morning light over the water",
    body: "Barefoot breakfasts, cold-pressed juices, and slow mornings. The Beach Cafe is where days begin, gently, with salt air and the first warmth of sun.",
    image: "/templates/OHMT030-resort/gallery-6.jpg",
  },
];

export function Dining() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionHeading>
              Taste the Coast
            </SectionHeading>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <Star size={16} color="var(--accent)" weight="fill" />
            <span className="text-white text-sm font-medium">Michelin Star 2025</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {tabs.map((t, i) => (
            <TabButton key={t.label} active={i === active} onClick={() => setActive(i)}>
              {t.label}
            </TabButton>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 md:rounded-3xl md:min-h-[440px]">

          {/* Image */}
          <div className="relative aspect-square overflow-hidden md:aspect-auto md:min-h-[440px]">
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
          <div className="flex flex-col justify-center bg-[var(--bg-dark)] px-6 py-16 md:px-12 md:py-16">
            <h3 className="text-[length:var(--text-h3)] font-semibold text-white leading-[var(--leading-heading)] tracking-[-0.02em] mb-6">
              {tab.heading}
            </h3>
            <BodyText className="mb-12 text-white/65">
              {tab.body}
            </BodyText>
            <a href="#"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--text-dark)] text-sm font-medium hover:opacity-85 transition-opacity">
              <span>Book a Table</span>
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
