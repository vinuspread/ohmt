"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 280, damping: 38, mass: 0.4 });

  const imgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], reduce ? [1, 1] : [1, 0.35]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "15%"]);

  const titleLines = [["Every", "Love,"], ["Captured", "Forever."]];

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[#12110F]">
      {/* Full-bleed image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imgScale, opacity: imgOpacity }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.08, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <img
          src="/templates/wedding/hero-bg-01.jpg"
          alt="Lumen Wedding fine art photography"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100F0D] via-[#100F0D]/20 to-transparent pointer-events-none" />

      {/* Editorial bottom strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-12 lg:pb-16"
        style={{ y: textY }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 max-w-[1440px] mx-auto">
          <div>
            <div className="overflow-hidden mb-3">
              <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/60"
              >
                Fine Art Wedding Photography
              </motion.p>
            </div>
            
            <h1
              className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[1.05]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
            >
              {titleLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap gap-x-4">
                  {line.map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden pb-2">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.3 + (lineIndex * line.length + index) * 0.1,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </div>
              ))}
            </h1>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-5 lg:pb-2">
            <p className="text-sm text-white/70 max-w-[220px] lg:text-right leading-relaxed font-[family-name:var(--font-body)]">
              Timeless. Authentic. Documentary.
            </p>
            <a
              href="/en/templates/OHMT025-wedding-EN/contact"
              className="relative overflow-hidden border border-white/40 hover:border-white px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white group"
            >
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:-translate-y-[150%]">
                Begin Your Story
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] translate-y-[150%] group-hover:translate-y-0 text-white bg-white/10">
                Begin Your Story
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
