"use client";

import { motion } from "motion/react";
import { awards } from "@/app/en/templates/OHMT023-game/data/data";
import { Quote } from "lucide-react";

export default function PressAwards() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/templates/OHMT023-game/award-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[var(--color-bg)]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Recognition
          </span>
          <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
            Press & Awards
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, i) => (
            <motion.div
              key={`${award.name}-${award.year}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <Quote size={20} />
              </div>
              <h3 className="font-[var(--font-heading)] text-base font-bold">{award.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{award.category}</p>
              <span className="mt-2 block text-xs text-[var(--color-accent)]">{award.year}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/60 backdrop-blur-sm p-8 text-center"
        >
          <Quote size={32} className="mx-auto mb-4 text-[var(--color-primary)]" />
          <blockquote className="text-lg leading-relaxed text-[var(--color-text)] md:text-xl">
            "OHMT has redefined what a indie studio can achieve. <span className="text-[var(--color-accent)]">Shadow Realm</span> is a masterclass in world-building and technical ambition."
          </blockquote>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            - Game Informer, Editor's Choice
          </p>
        </motion.div>
      </div>
    </section>
  );
}
