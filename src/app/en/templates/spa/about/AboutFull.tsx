"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { stats, team } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function AboutFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/spa/about-hero.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/70 to-[var(--color-secondary)]/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">About</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
                About us
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                We are a team of passionate therapists dedicated to helping you look and feel your best.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Who we are</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">Your skin is in expert hands</h2>
                <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
                  Founded in 2010, our clinic has grown from a single treatment room into a trusted wellness destination. We combine
                  clinical expertise with genuine care - every treatment is personalized, every therapist is certified, and every
                  client is treated like family.
                </p>
                <p className="mt-4 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed">
                  Our approach is simple: listen first, treat second. We take time to understand your skin concerns, goals, and
                  lifestyle before recommending any treatment. This philosophy has earned us the trust of thousands of clients.
                </p>
              </motion.div>
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
                className="grid grid-cols-3 gap-8"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)] leading-none">
                      {stat.value}{stat.suffix}
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="text-center mb-12"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our space</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Inside our clinic
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {["/templates/spa/clinic-interior.jpg", "/templates/spa/difference-01.jpg", "/templates/spa/difference-03.jpg"].map((src, i) => (
                <motion.div
                  key={src}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <img src={src} alt="Inside our spa" className="h-full w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Why our team</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Trained, certified, and genuinely invested in your results
              </h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
                Every specialist completes ongoing training in the latest techniques and equipment, and works with you
                across multiple visits to track progress and adjust your plan as your skin and goals evolve.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="text-center mb-16"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our team</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">Meet your therapists</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.id}
                  id={member.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                  className="group rounded-2xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] scroll-mt-28"
                >
                  <div className="h-72 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{member.role}</p>
                    <a
                      href="/en/templates/OHMT026-spa-EN/contact"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      Book with {member.name.split(" ")[0]}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
