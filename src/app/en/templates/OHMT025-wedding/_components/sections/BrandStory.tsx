"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";

const phrases = [
  "Your wedding is not a photoshoot.",
  "It's a once-in-a-lifetime celebration.",
];

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 280, damping: 38, mass: 0.4 });

  // Image parallax transforms
  const x1 = useTransform(scrollYProgress, [0, 0.5], reduce ? ["0px", "0px"] : ["-40px", "0px"]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], reduce ? ["0px", "0px"] : ["40px", "0px"]);
  const x3 = useTransform(scrollYProgress, [0, 0.6], reduce ? ["0px", "0px"] : ["-30px", "0px"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Text phase opacities
  const p0 = useTransform(scrollYProgress, [0.1, 0.32, 0.55, 0.7], [0, 1, 1, 0.3]);
  const p1 = useTransform(scrollYProgress, [0.68, 0.85, 1, 1], [0, 1, 1, 1]);

  const phaseOpacities = [p0, p1];

  return (
    <>
      {/* Desktop: scroll-scrubbed pinned text + flying images */}
      <section
        ref={containerRef}
        className="relative hidden lg:block bg-[var(--color-bg-secondary)]"
        style={{ height: "280vh" }}
      >
        <div className="sticky top-0 min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Flying images */}
          <motion.div
            className="absolute left-[14vw] top-[12%] w-[32vw] max-w-[380px] aspect-[3/4] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x1, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-01.jpg"
              alt="Wedding detail"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          <motion.div
            className="absolute right-[14vw] top-[8%] w-[30vw] max-w-[360px] aspect-[4/5] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x2, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-02.jpg"
              alt="Wedding moment"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          <motion.div
            className="absolute left-[18vw] bottom-[8%] w-[34vw] max-w-[400px] aspect-[16/10] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x3, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-03.jpg"
              alt="Wedding ceremony"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          {/* Centered text */}
          <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
            <div
              className="font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text)] leading-[1.15] text-balance"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
            >
              {phrases.map((phrase, idx) => (
                <motion.div
                  key={idx}
                  style={{ opacity: reduce ? 1 : phaseOpacities[idx] }}
                >
                  {phrase}
                </motion.div>
              ))}
            </div>
            <motion.p
              style={{ opacity: reduce ? 1 : p1 }}
              className="mt-8 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto font-[family-name:var(--font-body)]"
            >
              Documentary storytelling meets fine art composition. Every frame feels lived-in, not posed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mobile: no scroll-scrubbing - the scrub timing and forced line breaks
          (e.g. "once-in-a-" wrapping onto its own line) read as broken on
          narrow screens. Plain static layout, one gentle fade-in on view. */}
      <section className="lg:hidden bg-[var(--color-bg-secondary)] py-20 px-8">
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-12">
          <img
            src="/templates/OHMT025-wedding/wedding-story-01.jpg"
            alt="Wedding detail"
            className="w-full aspect-[3/4] object-cover contrast-110 saturate-110 ring-1 ring-black/10"
          />
          <img
            src="/templates/OHMT025-wedding/wedding-story-02.jpg"
            alt="Wedding moment"
            className="w-full aspect-[3/4] object-cover contrast-110 saturate-110 ring-1 ring-black/10 mt-10"
          />
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-md mx-auto"
        >
          <p
            className="font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text-muted)] leading-[1.2] text-balance"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)" }}
          >
            Your wedding is not a photoshoot.
          </p>
          <p
            className="mt-2 font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text)] leading-[1.2] text-balance"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)" }}
          >
            It's a <span className="whitespace-nowrap">once-in-a-lifetime</span> celebration.
          </p>
          <p className="mt-6 text-sm text-[var(--color-text-muted)] leading-relaxed font-[family-name:var(--font-body)]">
            Documentary storytelling meets fine art composition. Every frame feels lived-in, not posed.
          </p>
        </motion.div>

        <img
          src="/templates/OHMT025-wedding/wedding-story-03.jpg"
          alt="Wedding ceremony"
          className="w-full max-w-xs mx-auto mt-12 aspect-[16/10] object-cover contrast-110 saturate-110 ring-1 ring-black/10"
        />
      </section>
    </>
  );
}
