"use client";

import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Droplets, GraduationCap } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { stats, milestones, certifications } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const certIcons = [ShieldCheck, Droplets, GraduationCap];

export default function AboutFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/OHMT026-spa/about-hero.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/70 to-[var(--color-secondary)]/30" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">About</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
                About us
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                We are a team of passionate therapists dedicated to helping you look and feel your best.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Who we are</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Your skin is in expert hands</h2>
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

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center">
              <div className="overflow-hidden rounded-sm">
                <img src="/templates/OHMT026-spa/team-emily-carter.jpg" alt="Dr. Emily Carter" className="w-full h-80 object-cover object-top" />
              </div>
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">A letter from our founder</span>
                <p className="mt-4 font-[family-name:var(--font-heading)] text-xl text-[var(--color-text)] leading-relaxed">
                  "In 2010, I started this clinic with a single private room. My belief was simple: consistent, personalized care beats quick fixes. That belief is still what every treatment here starts with — listening first."
                </p>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">Dr. Emily Carter · Lead Therapist & Founder</p>
                <a href="/en/templates/OHMT026-spa/therapists" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200">Meet the full team →</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12 max-w-2xl">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our space</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">The space is part of the care</h2>
            </motion.div>
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }} className="grid grid-cols-5 gap-4">
              <div className="col-span-3 overflow-hidden rounded-sm"><img src="/templates/OHMT026-spa/mission-02.jpg" alt="A treatment in progress" className="w-full h-full min-h-[22rem] object-cover" /></div>
              <div className="col-span-2 overflow-hidden rounded-sm"><img src="/templates/OHMT026-spa/mission-03.jpg" alt="Aftercare products on a table" className="w-full h-full min-h-[22rem] object-cover" /></div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-16 text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">History</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Our milestones</h2>
            </motion.div>
            <div className="relative space-y-10 before:absolute before:inset-y-0 before:left-[3.25rem] before:w-px before:bg-[var(--color-border)]">
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="relative flex gap-8">
                  <div className="w-[6.5rem] shrink-0 text-right">
                    <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary)]">{m.year}</span>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[-1.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg-secondary)]" />
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{m.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Trust</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Certifications & safety standards</h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-3">
              {certifications.map((c, i) => {
                const Icon = certIcons[i % certIcons.length];
                return (
                  <motion.div key={c.label} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{c.label}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">{c.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
