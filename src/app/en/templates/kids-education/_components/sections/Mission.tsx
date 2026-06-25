"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const categories = [
  {
    number: "01",
    title: "Creative Arts",
    description: "Art, music, dance, and crafts to nurture self-expression and imagination in every child.",
    color: "var(--color-accent)",
    href: "/en/templates/kids-education/classes",
  },
  {
    number: "02",
    title: "STEM Learning",
    description: "Coding, science, and math adventures that help kids think critically and love learning.",
    color: "var(--color-secondary)",
    href: "/en/templates/kids-education/classes",
  },
  {
    number: "03",
    title: "Social & Play",
    description: "Group activities and teamwork games that help children make friends and grow together.",
    color: "var(--color-primary)",
    href: "/en/templates/kids-education/classes",
  },
];

function CategoryCard({ cat }: { cat: typeof categories[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={cat.href}
      className="flex gap-4 py-5 px-5 rounded-2xl border border-black/8 bg-white/60 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-3.5 h-3.5 rounded-full shrink-0 mt-1.5"
        style={{ backgroundColor: cat.color }}
      />
      <div className="flex-1">
        <h3
          className="text-lg font-bold tracking-tight transition-colors duration-150"
          style={{ fontFamily: "var(--font-heading)", color: hovered ? cat.color : "var(--color-text-main)" }}
        >
          {cat.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">
          {cat.description}
        </p>
      </div>
      <span
        className="transition-all duration-150 self-center shrink-0"
        style={{
          color: hovered ? cat.color : "var(--color-text-muted)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </Link>
  );
}

export default function Mission() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Mission */}
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-6">
              Our Mission
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We believe every child is born curious.
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-muted)] leading-relaxed">
              Kids Academy helps children discover amazing creative classes and share experiences with the people who matter most. Every class creates moments of connection, growth, and unforgettable fun.
            </p>
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              Our mission is to spark curiosity through play-based learning - because the best learning happens when children don't realize they're learning at all.
            </p>
            <Link
              href="/en/templates/kids-education/classes"
              className="inline-block mt-8 bg-[var(--color-text-main)] text-white rounded-full px-7 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
            >
              View All Classes
            </Link>
          </motion.div>

          {/* Right: Categories */}
          <div className="mt-16 lg:mt-0">
            <motion.p
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-6"
            >
              Class Categories
            </motion.p>

            <div className="flex flex-col gap-3">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.number}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.18, delay: idx * 0.05, ease: EASE_OUT }}
                >
                  <CategoryCard cat={cat} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
