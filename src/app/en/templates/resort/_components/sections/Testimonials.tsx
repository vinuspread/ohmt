"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const testimonials = [
  { name: "The Lee Family", role: "Guests, Villa Solaya", quote: "Staying at OHMT was like stepping into another world. Each villa tells its own story, and the location by the sea is beyond breathtaking.", rating: "9.3" },
  { name: "Amelia & James Parker", role: "Guests, Villa Miraia", quote: "Waking up to the sound of waves, with nothing but sea and sky in front of you, is an experience we will carry forever.", rating: "9.1" },
  { name: "James Williams", role: "Solo Traveller", quote: "The architecture, the silence, the staff, the food. Everything was designed with quiet purpose. OHMT isn't just a resort, it's a philosophy.", rating: "9.4" },
  { name: "Nina Davis", role: "Guests, Villa Azari", quote: "We came for the villas and stayed for the soul. OHMT gave us space to breathe, to be still, and to remember what rest actually feels like.", rating: "9.0" },
];

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visible = 4;
  const max = testimonials.length - visible;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  return (
    <section className="pb-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-3 block">
              GUEST STORIES
            </span>
            <h2 className="text-[clamp(32px,3.5vw,52px)] font-semibold text-white leading-[1.05] tracking-[-0.02em]">
              What Our Guests Say
            </h2>
          </div>
          <div className="hidden">
            <button onClick={prev} disabled={offset === 0} aria-label="prev">
              <ArrowLeft size={17} />
            </button>
            <button onClick={next} disabled={offset >= max} aria-label="next">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Cards track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${offset} * (25% + 12px)))` }}
          >
            {testimonials.map((t, i) => (
              <div key={i}
                className="min-w-[calc(25%-9px)] rounded-2xl bg-[var(--accent)] p-7 flex flex-col justify-between min-h-[280px]">
                <div>
                  <p className="text-[36px] font-semibold text-[var(--text-dark)] leading-none mb-4">&ldquo;</p>
                  <p className="text-[14px] text-[var(--text-dark)] leading-[1.6]">{t.quote}</p>
                </div>
                <div className="flex items-end justify-between mt-6 pt-5 border-t border-black/10">
                  <div>
                    <p className="text-[13px] font-semibold text-[var(--text-dark)]">{t.name}</p>
                    <p className="text-[12px] text-[var(--text-dark)]/60 mt-0.5">{t.role}</p>
                  </div>
                  <p className="text-[22px] font-semibold text-[var(--text-dark)] leading-none">
                    {t.rating}<span className="text-[12px] font-normal text-[var(--text-dark)]/50">/10</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
