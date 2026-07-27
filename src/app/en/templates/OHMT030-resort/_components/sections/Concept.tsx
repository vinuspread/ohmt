"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { BodyText, SectionEyebrow, SectionHeading } from "../ui/Typography";
import { IconButton } from "../ui/IconButton";

const base = "/en/templates/OHMT030-resort";

const slides = [
  {
    eyebrow: "THE CONCEPT",
    heading: "OHMT offers quiet beauty and\ndeep stillness",
    body: "Every corner of OHMT is shaped by the coastline it rests on. Local materials, natural light, and the sound of waves define each space.",
    image: "/templates/OHMT030-resort/gallery-1.jpg",
  },
  {
    eyebrow: "THE PHILOSOPHY",
    heading: "Where refined design lives in\nharmony with the sea",
    body: "We believe luxury is not about excess, it is about presence. Each material is chosen for how it ages alongside the tides.",
    image: "/templates/OHMT030-resort/gallery-2.jpg",
  },
  {
    eyebrow: "THE PLACE",
    heading: "A sanctuary with soul,\nhidden from the world",
    body: "Perched above the water, OHMT was built where land meets ocean. The horizon is always visible, always calling.",
    image: "/templates/OHMT030-resort/gallery-3.jpg",
  },
];

export function Concept() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="pb-16 md:pb-32">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[520px]">

          {/* Left: Text panel */}
          <div className="flex flex-col justify-between bg-white/8 px-12 py-16">
            <div>
              <SectionEyebrow className="mb-8">
                {slide.eyebrow}
              </SectionEyebrow>
              <SectionHeading size="compact" className="mb-6 whitespace-pre-line">
                {slide.heading}
              </SectionHeading>
              <BodyText className="max-w-[400px]">
                {slide.body}
              </BodyText>
            </div>

            <div className="flex items-center justify-between mt-12">
              <Link
                href={`${base}/#`}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-white text-sm hover:bg-white/10 transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]"
              >
                Find Out More <ArrowRight size={15} />
              </Link>

              <div className="flex items-center gap-3">
                <IconButton
                  onClick={prev}
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </IconButton>
                <span className="text-sm text-white/50 tabular-nums w-12 text-center">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <IconButton
                  onClick={next}
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </IconButton>
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
