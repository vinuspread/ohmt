"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function WhyKidsAcademy() {
  const shouldReduce = useReducedMotion();

  const highlights = [
    { icon: "★", title: "Small Classes", desc: "Maximum 8 students per class for personalized attention.", color: "var(--color-primary)" },
    { icon: "●", title: "Expert Teachers", desc: "Passionate educators with years of experience in child development.", color: "var(--color-secondary)" },
    { icon: "◆", title: "Play-Based Learning", desc: "Every lesson is designed to feel like play, not work.", color: "var(--color-accent)" },
    { icon: "▲", title: "Safe Environment", desc: "Fully secured facility with trained staff and CCTV monitoring.", color: "var(--color-red)" },
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
            Why Kids Academy
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mt-3" style={{ fontFamily: "var(--font-heading)" }}>
            Built for Growing Minds
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
            >
              <div className="bg-white rounded-2xl border border-black/8 p-6 h-full text-center hover:border-black/15 hover:shadow-md transition-all duration-200">
                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
