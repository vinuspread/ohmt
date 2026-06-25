"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { teachers } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const basePath = "/en/templates/kids-education";

const stats = [
  { value: "8+", label: "Years of Excellence" },
  { value: "2,000+", label: "Happy Students" },
  { value: "50+", label: "Creative Classes" },
  { value: "12:1", label: "Student-Teacher Ratio" },
];

const values = [
  {
    emoji: "\u{1F31F}",
    title: "Curiosity First",
    description: "We believe every question leads to a new discovery. Our curriculum is built around nurturing natural curiosity.",
  },
  {
    emoji: "\u{1F91D}",
    title: "Learn Together",
    description: "Collaboration is at the heart of everything we do. Kids learn better when they learn together.",
  },
  {
    emoji: "\u{1F3AA}",
    title: "Play with Purpose",
    description: "Every game, every activity, every moment is designed to spark growth and confidence.",
  },
];

export default function AboutContent() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="pt-[var(--space-giant)]">
      {/* Hero section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              About Us
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              Where Every Child
              <br />
              <span className="text-[var(--color-accent)]">Discovers Their Spark</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1, ease: EASE_OUT }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-4 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Our Mission
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                At Oh My Template Creative Academy, we believe that every child is born with a natural sense of wonder. Our mission is to nurture that wonder through hands-on, play-based learning experiences that spark creativity, build confidence, and foster a lifelong love of learning.
              </p>
            </motion.div>
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.12, ease: EASE_OUT }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-4 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Our Facility
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                Our bright and welcoming space features dedicated classrooms for each discipline, a cozy reading nook, an outdoor play area, and a gallery wall where young artists can showcase their masterpieces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-[var(--space-section)] bg-[var(--color-primary)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="text-center"
              >
                <p
                  className="text-4xl sm:text-5xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider opacity-60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              Our Values
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="bg-white rounded-2xl border border-black/8 p-6 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl block mb-3">{v.emoji}</span>
                <h3 className="text-lg font-bold tracking-tight leading-none mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              Our Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              Meet Our Experts
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teachers.map((teacher, idx) => (
              <motion.div
                key={teacher.id}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="text-center"
              >
                <div
                  className="w-[200px] h-[200px] rounded-full mx-auto mb-5 bg-cover bg-center border border-black/8 shadow-sm"
                  style={{ backgroundImage: `url(${teacher.image})`, backgroundColor: teacher.color }}
                />
                <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {teacher.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                  {teacher.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-[var(--space-section)] bg-[var(--color-secondary)]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <p className="text-white/80 text-xs font-bold tracking-wider mb-3">Ready to start?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              Join Our Learning Community
            </h2>
            <p className="mt-4 text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
              Discover the joy of learning through play. Give your child the best start in life.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href={`${basePath}/classes`}
                className="bg-[var(--color-text-main)] text-white rounded-full px-8 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
              >
                Explore Classes
              </Link>
              <Link
                href={`${basePath}/contact`}
                className="bg-white text-[var(--color-text-main)] rounded-full px-8 py-3.5 text-sm font-bold hover:brightness-95 active:scale-[0.97] transition-all duration-150"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
