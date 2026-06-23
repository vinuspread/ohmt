"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { steps } from "../../data/data";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 220, damping: 32, mass: 0.5 });

  // Build scroll-driven keyframes so each slide briefly "holds" before
  // snapping to the next - instead of one continuous linear pan.
  const n = steps.length;
  const holdRatio = 0.6;
  const input: number[] = [0];
  const output: string[] = ["0vw"];
  for (let i = 0; i < n; i++) {
    const segStart = i / n;
    const segHoldEnd = segStart + (1 / n) * holdRatio;
    input.push(segHoldEnd);
    output.push(`-${i * 100}vw`);
    if (i < n - 1) {
      const segEnd = (i + 1) / n;
      input.push(segEnd);
      output.push(`-${(i + 1) * 100}vw`);
    } else {
      input.push(1);
      output.push(`-${i * 100}vw`);
    }
  }
  const x = useTransform(
    scrollYProgress,
    input,
    reduce ? output.map(() => "0vw") : output
  );

  return (
    <>
      {/* Desktop: scroll-pinned horizontal pan. Disabled below lg - scroll-jacking
          combined with mobile vh/dvh address-bar resizing makes the pin point and
          translateX math drift, so phones get a static stack instead. */}
      <section
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ x: reduce ? undefined : x, width: `${steps.length * 100}vw` }}
          >
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative w-screen h-full overflow-hidden"
              >
                {/* Full-bleed image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay - heavier at bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                {/* Top label */}
                <div className="absolute top-10 left-8 lg:left-16 z-10">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
                    The Process
                  </p>
                </div>

                {/* Step number - top right */}
                <div className="absolute top-10 right-8 lg:right-16 z-10">
                  <span
                    className="font-[family-name:var(--font-heading)] font-light text-white/15 leading-none select-none"
                    style={{ fontSize: "clamp(6rem, 15vw, 14rem)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content - bottom left */}
                <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16 lg:pb-24 z-10 max-w-[640px]">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50 mb-5 whitespace-nowrap">
                    {step.number} / 0{steps.length}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[1.05] mb-5"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[0.9rem] text-white/65 leading-[1.8] max-w-[400px] font-[family-name:var(--font-body)]">
                    {step.description}
                  </p>
                </div>

                {/* Progress dots - bottom right */}
                <div className="absolute bottom-16 lg:bottom-24 right-8 lg:right-16 flex gap-2 z-10">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-px transition-all duration-300 ${
                        i === idx
                          ? "w-8 bg-white"
                          : "w-3 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile: plain vertical stack - no scroll-jacking, no sticky/dvh math */}
      <section className="lg:hidden bg-black">
        <div className="px-8 py-10">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
            The Process
          </p>
        </div>
        <div className="flex flex-col">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={reduce ? false : { y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-black"
            >
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              <span
                className="absolute top-6 right-6 font-[family-name:var(--font-heading)] font-light text-white/15 leading-none select-none"
                style={{ fontSize: "clamp(4rem, 18vw, 6rem)" }}
              >
                {step.number}
              </span>

              <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 z-10">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50 mb-3 whitespace-nowrap">
                  {step.number} / 0{steps.length}
                </p>
                <h3
                  className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[1.05] mb-3"
                  style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[0.85rem] text-white/65 leading-[1.7] font-[family-name:var(--font-body)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
