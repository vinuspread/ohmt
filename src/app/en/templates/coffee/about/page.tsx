"use client";
import React from "react";
import { motion } from "motion/react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ease = [0.23, 1, 0.32, 1] as const;

function AboutPageContent() {
  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

        {/* Hero - dark, full bleed */}
        <section className="bg-[var(--color-bg-dark)] pt-32 pb-0 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h1
              className="font-heading text-[clamp(3rem,6vw,6rem)] font-bold text-white leading-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              Coffee worth<br />slowing down for.
            </motion.h1>
          </div>
          <motion.div
            className="w-full aspect-[16/7] overflow-hidden"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <img
              src="/templates/coffee/story-interior.jpg"
              alt="Cafe interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Story - 2-col split */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center px-10 py-16 md:px-20 lg:px-28 md:py-24"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-4">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-[1.25] mb-8">
              Brewing with purpose,<br />serving with care.
            </h2>
            <p className="text-base leading-[1.8] text-[var(--color-text-muted)]">
              Oh My Template started as a small coffee cart in Seongsu-dong.
              What began as a weekend passion project grew into a neighborhood
              staple. Our founders spent years traveling through coffee regions
              in Ethiopia and Colombia, building relationships with farmers who
              share our commitment to quality.
            </p>
            <p className="text-base leading-[1.8] text-[var(--color-text-muted)] mt-4">
              Today, we roast our own beans in small batches and serve coffee
              that reflects the care put into every step of the process. From
              seed to cup, we believe in doing things the right way.
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden h-[360px] md:h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <img
              src="/templates/coffee/story-brewing.jpg"
              alt="Coffee brewing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Philosophy - dark */}
        <section className="bg-[var(--color-bg-dark)] py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16">
              Our Bean Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {[
                { title: "Single Origin", body: "We source beans from single farms, not blends. Each origin brings a distinct flavor profile worth exploring." },
                { title: "Direct Trade",  body: "We partner directly with farmers, paying above fair trade prices for exceptional quality." },
                { title: "Fresh Roast",   body: "Every batch is roasted within 48 hours of your visit. Freshness is non-negotiable." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-[var(--color-bg-dark)] px-8 py-10"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">0{i + 1}</span>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image pair */}
        <section className="grid grid-cols-2">
          <div className="aspect-square overflow-hidden">
            <img src="/templates/coffee/story-beans.jpg" alt="Coffee beans" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/templates/coffee/hero-drink.jpg" alt="Espresso bar" className="w-full h-full object-cover" />
          </div>
        </section>

      </main>
      <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function AboutPage() {
  return <AboutPageContent />;
}
