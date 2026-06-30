"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { about } from "../data/data";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export default function AboutFull() {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0px", "0px"] : ["-40px", "40px"]);

  return (
    <>
      <Navbar solid />
      <NavSpacer />
      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden bg-[var(--color-bg)] py-16 lg:py-24">
          <div className="w-full max-w-[1440px] mx-auto lg:grid lg:grid-cols-[55fr_45fr] items-center">
            <div ref={imgRef} className="relative overflow-hidden aspect-[4/5] max-h-[80vh]">
              <motion.img
                src="/templates/OHMT025-wedding/about-clara.jpg"
                alt="Clara, wedding photographer"
                className="h-full w-full object-cover object-center"
                style={{ y: imgY }}
              />
            </div>
            <div className="px-8 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 20, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-6">
                  Meet {about.name}
                </span>
                <h1
                  className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05] mb-8"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                >
                  Hi,<br />I'm {about.name}.
                </h1>
                <div className="space-y-5 text-[0.9rem] text-[var(--color-text-muted)] leading-[1.75] max-w-[420px] font-[family-name:var(--font-body)]">
                  {about.bio.slice(0, 2).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="flex gap-10 mt-10 pt-10 border-t border-[var(--color-border)]">
                  {about.stats.map(({ num, label }) => (
                    <div key={label}>
                      <p className="font-[family-name:var(--font-heading)] text-3xl font-light text-[var(--color-text)]">{num}</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy section */}
        <section className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-6"
              >
                {about.philosophy.title}
              </motion.span>
              {about.philosophy.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                  className="font-[family-name:var(--font-heading)] font-light text-[var(--color-text)] leading-[1.2] mb-6"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Approach section */}
        <section className="bg-[var(--color-bg)] py-24 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-4">
                {about.approach.title}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {about.approach.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                  className="text-center"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-light uppercase tracking-[0.12em] text-[var(--color-text)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed font-[family-name:var(--font-body)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2C241E] py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] font-light text-4xl lg:text-6xl capitalize text-white leading-[1.1] mb-6">
              Let's Tell Your Story
            </h2>
            <Link
              href="/en/templates/OHMT025-wedding/contact"
              className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Book Your Date
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NavSpacer() {
  return <div className="h-[72px]" />;
}
