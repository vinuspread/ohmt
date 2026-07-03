"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { ArrowLeft } from "lucide-react";
import theme from "../theme.json";

const SEASONS = [
  {
    id: "ss26",
    label: "Spring / Summer 26",
    title: "The First Light",
    image: "/templates/OHMT001-fashion/exclusive-custom.jpg",
    description:
      "A debut collection born from the tension between structure and fluidity. Tailored silhouettes meet draped organza — a study in controlled softness.",
    year: "2026",
  },
  {
    id: "aw25",
    label: "Autumn / Winter 25",
    title: "Concrete Garden",
    image: "/templates/OHMT001-fashion/branding-custom.jpg",
    description:
      "Brutalist forms softened by human touch. Wool, leather, and raw-edged seams define a season that walks the line between shelter and exposure.",
    year: "2025",
  },
  {
    id: "core",
    label: "Core Series",
    title: "Permanent Objects",
    image: "/templates/OHMT001-fashion/hero-custom.jpg",
    description:
      "The foundation. Garments designed not for a single season but for a lifetime. Every stitch, seam, and silhouette refined to its essential form.",
    year: "2025",
  },
  {
    id: "limited",
    label: "Limited Drop",
    title: "Monument",
    image: "/templates/OHMT001-fashion/exclusive-lifestyle.png",
    description:
      "An experimental capsule exploring the boundary between garment and sculpture. Produced in an edition of 50 pieces worldwide.",
    year: "2024",
  },
];

function PageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-black antialiased selection:bg-white selection:text-black">
        <Navbar />

        <SubpageHero
          eyebrow="Archive"
          title="The Archive"
          description="Every collection is a document of its moment. Here, they remain as references for the next silhouette."
          image="/templates/OHMT001-fashion/archive-hero.jpg"
          imageAlt="Archive editorial fashion campaign"
        />

        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-12 md:pt-16">
          <Link
            href="/en/templates/OHMT001-fashion"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Season entries */}
        {SEASONS.map((season, i) => (
          <section key={season.id} className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 === 1 ? "md:col-start-2" : ""}
              >
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={season.image}
                    alt={season.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                  {season.label}
                </span>
                <h2
                  className="text-[34px] font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-[4vw]"
                  style={{ fontFamily: "var(--font-bodoni)" }}
                >
                  {season.title}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed max-w-md">
                  {season.description}
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-[40px] sm:text-[4vw] font-bold tracking-tighter text-white/10 leading-none">
                    {season.year}
                  </span>
                  <div className="w-12 h-px bg-white/20" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
            <p className="text-[14px] sm:text-[16px] text-white/40 max-w-lg mx-auto leading-relaxed mb-8">
              Past collections inform what comes next. Explore the current season.
            </p>
            <Link
              href="/en/templates/OHMT001-fashion/collection"
              className="inline-block bg-white text-black px-10 py-4 text-[12px] font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-all"
            >
              View Current Collection
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function Page() {
  return (
    <React.Suspense fallback={null}>
      <PageContent />
    </React.Suspense>
  );
}
