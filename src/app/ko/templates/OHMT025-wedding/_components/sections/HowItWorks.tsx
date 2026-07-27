"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { steps } from "../../data/data";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(0);
  const snapAnimationRef = useRef<ReturnType<typeof animate> | null>(null);
  const reduce = useReducedMotion();
  const n = steps.length;
  const finalSlideHoldRatio = 0.25;
  const movementEnd = 1 - finalSlideHoldRatio;
  const x = useMotionValue("0%");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reduce) return;

    const movementProgress = Math.min(Math.max(latest / movementEnd, 0), 1);
    const nextStep = Math.round(movementProgress * (n - 1));

    if (nextStep === activeStepRef.current) return;

    activeStepRef.current = nextStep;
    snapAnimationRef.current?.stop();
    snapAnimationRef.current = animate(
      x,
      `-${(nextStep / n) * 100}%`,
      {
        type: "tween",
        duration: 0.95,
        ease: [0.22, 0.8, 0.3, 1],
      }
    );
  });

  useEffect(() => {
    return () => snapAnimationRef.current?.stop();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${(steps.length + 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          <motion.div
            className="flex h-full will-change-transform"
            style={{ x: reduce ? undefined : x, width: `${steps.length * 100}vw` }}
          >
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative w-screen h-full overflow-hidden"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                <div className="absolute top-10 left-8 lg:left-16 z-10">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
                    촬영 진행 과정</p>
                </div>
                <div className="absolute top-10 right-8 lg:right-16 z-10">
                  <span
                    className="font-[family-name:var(--font-heading)] font-light text-white/15 leading-none select-none"
                    style={{ fontSize: "clamp(6rem, 15vw, 14rem)" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16 lg:pb-24 z-10 max-w-[640px]">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50 mb-5 whitespace-nowrap">
                    {step.number} / 0{steps.length}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[var(--leading-heading)] mb-5"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[0.9rem] text-white/65 leading-loose max-w-[400px] font-[family-name:var(--font-body)]">
                    {step.description}
                  </p>
                </div>
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

      <section className="lg:hidden bg-black">
        <div className="px-8 py-10">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-white/50">
            촬영 진행 과정</p>
        </div>
        <div className="flex flex-col">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative h-[100dvh] overflow-hidden bg-black"
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
                  className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[var(--leading-heading)] mb-3"
                  style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[0.85rem] text-white/65 leading-[var(--leading-body)] font-[family-name:var(--font-body)]">
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
