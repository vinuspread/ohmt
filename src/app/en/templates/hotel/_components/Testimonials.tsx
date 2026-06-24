"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/data";

const slideVariants = {
  enter: (d: number) => ({ opacity: 0, x: d * 40, filter: "blur(6px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (d: number) => ({ opacity: 0, x: d * -40, filter: "blur(6px)" }),
};

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = testimonials[index];

  const next = () => { setDirection(1); setIndex((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };
  const goTo = (i: number) => { setDirection(i > index ? 1 : -1); setIndex(i); };

  useEffect(() => {
    const timer = setInterval(() => { setDirection(1); setIndex((prev) => (prev + 1) % testimonials.length); }, 5500);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-primary)] text-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-[var(--font-heading)] font-bold leading-[1.15]">
            Words from Our Guests
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[var(--color-accent)]" fill="var(--color-accent)" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-[var(--font-heading)] leading-relaxed mb-8">
                &ldquo;{current.text}&rdquo;
              </blockquote>
              <div className="w-12 h-[2px] bg-[var(--color-accent)] mx-auto mb-6" />
              <p className="text-sm font-semibold text-[var(--color-bg)]">{current.name}</p>
              <p className="text-xs text-[var(--color-bg)]/60 mt-1">{current.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 flex items-center justify-center border border-[var(--color-bg)]/20 hover:border-[var(--color-accent)] transition-colors">
              <ChevronLeft size={18} strokeWidth={1.2} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-500 rounded-full ${index === i ? "w-8 h-[2px] bg-[var(--color-accent)]" : "w-1.5 h-1.5 bg-[var(--color-bg)]/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 flex items-center justify-center border border-[var(--color-bg)]/20 hover:border-[var(--color-accent)] transition-colors">
              <ChevronRight size={18} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
