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
  // snapping to the next — instead of one continuous linear pan.
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
    <section
      ref={containerRef}
      className="relative"
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

              {/* Dark overlay — heavier at bottom for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

              {/* Top label */}
              <div className="absolute top-10 left-8 lg:left-16 z-10">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
                  The Process
                </p>
              </div>

              {/* Step number — top right */}
              <div className="absolute top-10 right-8 lg:right-16 z-10">
                <span
                  className="font-[family-name:var(--font-heading)] font-light text-white/15 leading-none select-none"
                  style={{ fontSize: "clamp(6rem, 15vw, 14rem)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16 lg:pb-24 z-10 max-w-[640px]">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50 mb-5">
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

              {/* Progress dots — bottom right */}
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
  );
}
