"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { classes } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const basePath = "/en/templates/kids-education";

export default function Classes() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="classes" className="py-24 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              Classes of the Month
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Top Picks
            </h2>
          </div>
          <Link
            href={`${basePath}/classes`}
            className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150 shrink-0"
          >
            Explore All Classes →
          </Link>
        </motion.div>

        {/* Numbered list */}
        <div className="border-t border-black/10">
          {classes.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.18, delay: idx * 0.04, ease: EASE_OUT }}
            >
              <Link
                href={`${basePath}/classes/${item.id}`}
                className="group flex items-center gap-5 border-b border-black/10 py-5 rounded-lg px-4 -mx-4 hover:bg-[var(--color-bg-secondary)] transition-colors duration-150"
              >
                {/* Number */}
                <span
                  className="text-3xl font-bold text-black/15 w-10 shrink-0 leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300 ease-out"
                    style={{ backgroundImage: `url(${item.image})`, backgroundColor: "#E8E3D9" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {item.category}
                  </span>
                  <h3
                    className="text-2xl font-bold tracking-tight truncate group-hover:text-[var(--color-primary)] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1 line-clamp-1 hidden sm:block">
                    {item.description}
                  </p>
                </div>

                {/* Age + Price */}
                <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                  <span className="text-sm font-semibold text-[var(--color-text-muted)]">{item.age}</span>
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.price}
                  </span>
                </div>

                <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all duration-150 shrink-0">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
