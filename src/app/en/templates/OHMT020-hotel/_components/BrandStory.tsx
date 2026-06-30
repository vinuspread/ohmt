"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

const accentLine = {
  hidden: { opacity: 0, scaleX: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: EASE } },
};

export const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:w-1/2 overflow-hidden"
        >
          <img src="/templates/OHMT020-hotel/story-01.jpg" alt="OHMT Story" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
        </motion.div>

        <div className="lg:w-1/2">
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={textItem} className="text-[11px] md:text-[12px] font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-6 md:mb-8">
              Our Story
            </motion.span>
            <motion.h2 variants={textItem} className="text-[clamp(1.8rem,4vw,3.5rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.15] mb-6 md:mb-8">
              A Sanctuary <br />Carved by Nature.
            </motion.h2>
            <motion.div
              variants={accentLine}
              style={{ originX: 0 }}
              className="h-[2px] w-12 md:w-16 bg-[var(--color-accent)] mb-6 md:mb-8"
            />
            <motion.p variants={textItem} className="text-base md:text-lg text-[var(--color-text)] font-medium leading-relaxed mb-4">
              Founded on the belief that true luxury lies in harmony with nature, OHMT was born from a vision to create a retreat where time slows and the soul breathes.
            </motion.p>
            <motion.p variants={textItem} className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
              Every suite and villa is thoughtfully positioned to frame the natural beauty of the coastline. From the locally sourced stone used in construction to the organic produce in our kitchens, sustainability and craftsmanship define every aspect of your stay.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
