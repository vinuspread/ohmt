"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0px", "0px"] : ["-40px", "40px"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[var(--color-bg)] py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto lg:grid lg:grid-cols-[55fr_45fr] items-center">

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] max-h-[80vh]">
          <motion.img
            src="/templates/OHMT025-wedding/about-clara.jpg"
            alt="Clara, wedding photographer"
            className="h-full w-full object-cover object-center"
            style={{ y: imgY }}
          />
          {/* Right edge vignette - removed: creates unnatural cut on clean layouts */}
        </div>

        {/* Text column */}
        <div className="px-8 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col justify-center relative z-10">
          {/* Overlapping display name - positioned to bridge image and text */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-6">
              Meet Clara
            </span>

            <h2
              className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
            >
              Hi,<br />I'm Clara.
            </h2>

            <div className="space-y-5 text-[0.9rem] text-[var(--color-text-muted)] leading-[1.75] max-w-[420px] font-[family-name:var(--font-body)]">
              <p>
                For over 8 years, I've been capturing weddings filled with laughter, intimacy, and timeless beauty. My goal is to create images that feel like your memories - warm, authentic, and everlasting.
              </p>
              <p>
                I blend into the crowd so you can stay completely present. The frames I return to you will feel lived-in, not posed.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 pt-10 border-t border-[var(--color-border)]">
              {[
                { num: "8+", label: "Years" },
                { num: "200+", label: "Weddings" },
                { num: "12", label: "Countries" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-light text-[var(--color-text)]">{num}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mt-1">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="/en/templates/OHMT025-wedding/contact"
              className="inline-flex items-center gap-3 mt-10 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-200"
            >
              Plan Your Day
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
