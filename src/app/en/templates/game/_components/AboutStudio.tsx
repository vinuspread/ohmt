"use client";

import { motion } from "motion/react";

const stats = [
  { value: "5", label: "Games Released" },
  { value: "12M+", label: "Players Worldwide" },
  { value: "18", label: "Industry Awards" },
  { value: "2018", label: "Founded" },
];

export default function AboutStudio() {
  return (
    <section className="relative py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              About Us
            </span>
            <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
              The Studio
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              Founded in 2018, Oh My Template began as a team of five passionate developers
              in a small Austin office. Today, we are a family of over 200 creators spanning
              three continents, united by a single mission: to build worlds that inspire and
              break the limits of interactive storytelling.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              From dark fantasy realms to neon-drenched cyberpunk cities, every project we
              ship is crafted with uncompromising attention to detail, technical excellence,
              and a deep respect for the art of gaming.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <img
              src="/templates/game/studio-team.jpg"
              alt="Oh My Template team"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-[var(--color-border)] rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
