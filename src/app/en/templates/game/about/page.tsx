"use client";

import { motion } from "motion/react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { awards } from "@/app/en/templates/OHMT023-game/data/data";
import { Quote } from "lucide-react";

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const timeline = [
  { year: "2018", event: "OHMT founded in Austin, TX with a team of 5" },
  { year: "2019", event: "Secured seed funding and began development of first title" },
  { year: "2020", event: "Grew to 40 team members, announced Shadow Realm" },
  { year: "2021", event: "Opened second studio in Montreal, Canada" },
  { year: "2022", event: "Shadow Realm enters early access to critical acclaim" },
  { year: "2023", event: "Expanded to 150+ employees across three studios" },
  { year: "2024", event: "Shadow Realm full release, 5 million copies sold in first month" },
  { year: "2025", event: "Three new titles announced, multiple GOTY nominations" },
  { year: "2026", event: "Launched third studio, expanding into new genres" },
];

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16 max-w-3xl"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              About
            </span>
            <h1 className="mt-2 font-[var(--font-heading)] text-5xl font-bold md:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              What started as a dream among five friends in a cramped Austin garage has grown into
              a global game development studio with over 200 employees across three continents.
              Our mission remains the same: to create unforgettable gaming experiences that push
              the boundaries of what is possible.
            </p>
          </motion.div>

          <section className="mb-24">
            <h2 className="mb-10 font-[var(--font-heading)] text-3xl font-bold">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-border)]" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)]" />
                    <span className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-primary)]">
                      {item.year}
                    </span>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-10 font-[var(--font-heading)] text-3xl font-bold">Awards</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {awards.map((award, i) => (
                <motion.div
                  key={`${award.name}-${award.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Quote size={18} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold">{award.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{award.category}</p>
                  <span className="mt-2 block text-xs text-[var(--color-accent)]">{award.year}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
