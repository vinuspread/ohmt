"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { careers } from "@/app/en/templates/OHMT023-game/data/data";
import { ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const careerImages: Record<string, string> = {
  "sr-engineer":    "/templates/OHMT023-game/screenshot-01.jpg",
  "lead-designer":  "/templates/OHMT023-game/screenshot-02.jpg",
  "concept-artist": "/templates/OHMT023-game/screenshot-03.jpg",
  "producer":       "/templates/OHMT023-game/studio-team.jpg",
};

const careerDescs: Record<string, string> = {
  "sr-engineer":    "Build cutting-edge real-time rendering systems and push the limits of visual fidelity on next-gen platforms.",
  "lead-designer":  "Drive the core gameplay vision of our upcoming titles, shaping systems and player experiences from concept to ship.",
  "concept-artist": "Create breathtaking characters, environments, and props that define the visual identity of our game worlds.",
  "producer":       "Keep cross-functional teams aligned and shipping on schedule, balancing scope, quality, and studio culture.",
};

const allDepts = ["All", ...Array.from(new Set(careers.map((c) => c.department)))];

export default function CareersPage() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? careers : careers.filter((c) => c.department === selected);

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-[var(--font-heading)] text-5xl font-bold">Open Positions</h1>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Come build the future of gaming with us.
            </p>
          </div>

          {/* Dept filter pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            {allDepts.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelected(dept)}
                className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                  selected === dept
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* 2×2 Card Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE_OUT }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={careerImages[job.id] ?? "/templates/OHMT023-game/hero-bg.jpg"}
                    alt={job.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content - mirrors NewsCard layout */}
                <div className="p-5">
                  <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                    {job.department}
                  </span>
                  <h3 className="mt-3 font-[var(--font-heading)] text-lg font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                    {job.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">
                    {careerDescs[job.id]}
                  </p>

                  {/* Footer row */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-[var(--color-text-muted)]">
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      Apply Now <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-[var(--color-text-muted)]">
              No open positions in this department.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
