"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Emma, Age 7",
    color: "var(--color-primary)",
    text: "The Art Studio class completely transformed my daughter. She comes home every week buzzing with energy. The teachers are patient and truly passionate.",
  },
  {
    name: "James Park",
    role: "Parent of Alex, Age 10",
    color: "var(--color-secondary)",
    text: "Alex built his first game after just four sessions! The way they make coding fun and accessible is remarkable. Highly recommend to any parent.",
  },
  {
    name: "Linda Torres",
    role: "Parent of Sofia & Marco",
    color: "var(--color-accent)",
    text: "We enrolled both kids in different classes. Every session is an adventure. The small class sizes make all the difference - they actually ask to go.",
  },
  {
    name: "David Chen",
    role: "Parent of Lily, Age 8",
    color: "var(--color-red)",
    text: "The Science Lab exceeded all expectations. Lily talks about experiments at the dinner table every week. A safe, encouraging environment.",
  },
  {
    name: "Maria Johnson",
    role: "Parent of Noah, Age 6",
    color: "var(--color-primary)",
    text: "Noah used to dread numbers - now he loves puzzles and games. The play-based approach really works for young learners. Best decision we made.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduce = useReducedMotion();

  const total = reviews.length;

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent((idx + total) % total);
  };
  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  const visible = [0, 1, 2].map((offset) => reviews[(current + offset) % total]);

  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Over 500 parents shared<br />their experiences.
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              98% say every class is worth it.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] active:scale-[0.97] transition-all duration-150"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] active:scale-[0.97] transition-all duration-150"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: shouldReduce ? 0 : direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: shouldReduce ? 0 : -direction * 32 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {visible.map((review, i) => (
              <div
                key={`${current}-${i}`}
                className={`bg-white rounded-2xl border border-black/8 p-6 flex-col gap-4 ${
                  i === 1 ? "hidden sm:flex" : i === 2 ? "hidden md:flex" : "flex"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[var(--color-primary)] text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[var(--color-text-main)] leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-2 border-t border-black/6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{review.name}</p>
                    <p className="text-[0.68rem] text-[var(--color-text-muted)]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-1.5 mt-6 justify-center">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-black/15"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
