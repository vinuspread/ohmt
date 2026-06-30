"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const base = "/en/templates/resort";

const slides = [
  {
    eyebrow: "THE CONCEPT",
    heading: "OHMT offers quiet beauty and\ndeep stillness",
    body: "Every corner of OHMT is shaped by the coastline it rests on. Local materials, natural light, and the sound of waves define each space.",
    image: "/templates/resort/gallery-1.jpg",
  },
  {
    eyebrow: "THE PHILOSOPHY",
    heading: "Where refined design lives in\nharmony with the sea",
    body: "We believe luxury is not about excess, it is about presence. Each material is chosen for how it ages alongside the tides.",
    image: "/templates/resort/gallery-2.jpg",
  },
  {
    eyebrow: "THE PLACE",
    heading: "A sanctuary with soul,\nhidden from the world",
    body: "Perched above the water, OHMT was built where land meets ocean. The horizon is always visible, always calling.",
    image: "/templates/resort/gallery-3.jpg",
  },
];

export function Concept() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="pb-[130px]">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[520px]">

          {/* Left: Text panel */}
          <div className="flex flex-col justify-between bg-white/8 px-12 py-14">
            <div>
              <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-8 block">
                {slide.eyebrow}
              </span>
              <h2 className="text-[clamp(26px,2.8vw,42px)] font-semibold text-white leading-[1.2] tracking-[-0.02em] mb-6 whitespace-pre-line">
                {slide.heading}
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[400px]">
                {slide.body}
              </p>
            </div>

            <div className="flex items-center justify-between mt-12">
              <Link
                href={`${base}/#`}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-white text-[14px] hover:bg-white/10 transition-colors"
              >
                Find Out More <ArrowRight size={15} />
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="text-[13px] text-white/50 tabular-nums w-12 text-center">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-white w-6" : "bg-white/40 w-1.5"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
