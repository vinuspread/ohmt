"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { IconButton } from "../ui/IconButton";
import { SectionEyebrow, SectionHeading } from "../ui/Typography";

const base = "/en/templates/OHMT030-resort";

const slides = [
  {
    image: "/templates/OHMT030-resort/gallery-4.jpg",
    label: "Meditation & Wellness",
    location: "Clifftop Pavilion",
    time: "7.00 Am – 9.00 Am",
  },
  {
    image: "/templates/OHMT030-resort/gallery-5.jpg",
    label: "Coastal Exploration",
    location: "Hidden Cove Trail",
    time: "9.00 Am – 12.00 Pm",
  },
  {
    image: "/templates/OHMT030-resort/gallery-6.jpg",
    label: "Sunset Sailing",
    location: "Private Marina",
    time: "5.00 Pm – 7.30 Pm",
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section className="py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Left: Text */}
        <div className="flex flex-col justify-between">
          <div>
            <SectionEyebrow>
              EXPERIENCE
            </SectionEyebrow>
            <SectionHeading size="large" className="mb-12 whitespace-pre-line">
              {`Where Time\nBecomes\nMemory`}
            </SectionHeading>
            <Link href={`${base}/#`}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-white text-base hover:bg-white/20 transition-all">
              Discover All <ArrowRight size={15} />
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-16">
            <IconButton onClick={prev} aria-label="Previous">
              <ArrowLeft size={17} />
            </IconButton>
            <span className="text-sm text-white/50 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <IconButton onClick={next} tone="solid" aria-label="Next">
              <ArrowRight size={17} />
            </IconButton>
          </div>
        </div>

        {/* Right: Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          {slides.map((s, i) => (
            <div key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <img src={s.image} alt={s.label}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-9 left-9 right-9">
                <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-2">{s.location} · {s.time}</p>
                <p className="text-2xl font-semibold text-white leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
          {/* Static sizing div */}
          <div className="relative w-full aspect-[4/3] invisible" />
        </div>

      </div>
    </section>
  );
}
