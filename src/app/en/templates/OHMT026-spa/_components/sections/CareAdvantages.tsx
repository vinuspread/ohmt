"use client";

import { motion, useReducedMotion } from "motion/react";
import { advantages } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const imageMap: Record<string, string> = {
  "Certified therapists": "/templates/OHMT026-spa/instagram-03.jpg",
  "Personalized plans": "/templates/OHMT026-spa/instagram-04.jpg",
  "Premium products": "/templates/OHMT026-spa/instagram-02.jpg",
  "Calm environment": "/templates/OHMT026-spa/instagram-01.jpg",
  "Flexible booking": "/templates/OHMT026-spa/instagram-05.jpg",
  "Results guaranteed": "/templates/OHMT026-spa/instagram-06.jpg",
};

export default function CareAdvantages() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE_OUT }} className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Care advantages
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
              Why our clients<br />stay with us
            </h2>
            <div className="mt-8 overflow-hidden rounded-sm">
              <img src="/templates/OHMT026-spa/clinic-interior.jpg" alt="A calm treatment space in warm wood tones with plants" className="w-full h-72 lg:h-96 object-cover" />
            </div>
          </motion.div>
          <div>
            {advantages.map((item, i) => (
              <motion.div key={item.title} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_OUT }} className="flex items-start gap-5 py-7 border-b border-white/10 first:pt-0">
                <span className="font-[family-name:var(--font-heading)] text-sm text-white/30 pt-1 shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
                <img src={imageMap[item.title]} alt="" aria-hidden="true" className="w-14 h-14 rounded-sm object-cover shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
