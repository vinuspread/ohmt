"use client";

import { motion } from "motion/react";
import { genres } from "@/app/en/templates/OHMT023-game/data/data";
import { Sword, Crosshair, ChevronsUp, Globe, Heart, Skull } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Sword: <Sword size={28} />,
  Crosshair: <Crosshair size={28} />,
  ChevronsUp: <ChevronsUp size={28} />,
  Globe: <Globe size={28} />,
  Heart: <Heart size={28} />,
  Skull: <Skull size={28} />,
};

export default function GenreGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Our Expertise
          </span>
          <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
            Genres We Master
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((genre, i) => (
            <motion.div
              key={genre.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-300 hover:border-[var(--color-border-bright)] hover:bg-[var(--color-bg-tertiary)]"
            >
              <div className="mb-4 text-[var(--color-primary)]">{iconMap[genre.icon]}</div>
              <h3 className="font-[var(--font-heading)] text-lg font-bold">{genre.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{genre.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
