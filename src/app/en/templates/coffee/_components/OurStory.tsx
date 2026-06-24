"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const testimonials = [
  {
    quote: "I've been coming here for business lunches for three years. Not once have I had anything but an exceptional experience. The coffee always tastes fresh and precise.",
    name: "HYUN J.",
    source: "Google Reviews",
  },
  {
    quote: "The cold brew here is unlike anything else in Seoul. You can taste the care they put into every batch - it's the kind of place that makes you slow down and breathe.",
    name: "MIN S.",
    source: "Naver Reviews",
  },
];

export const OurStory = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-[var(--color-bg-secondary)]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[520px]">

        {/* Left: image */}
        <motion.div
          className="relative overflow-hidden h-[260px] md:h-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.img
            src="/templates/coffee/story-interior.png"
            alt="Cafe interior"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          />
        </motion.div>

        {/* Right: testimonial */}
        <motion.div
          className="bg-[var(--color-accent)] text-white flex flex-col justify-between px-10 py-10 md:px-14 md:py-12"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          <div>

            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="text-[17px] md:text-[19px] leading-[1.75] text-white/85 max-w-[38ch]"
                style={{ textWrap: "pretty" } as React.CSSProperties}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {testimonials[index].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8">
            <div className="w-10 h-px bg-white/25 mb-5" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[12px] font-semibold tracking-[0.18em] text-white/90">{testimonials[index].name}</p>
                <p className="text-[11px] text-white/45 mt-1">{testimonials[index].source}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="w-9 h-9 border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
