"use client";

import { motion, useReducedMotion } from "motion/react";
import { ClipboardList, ScanFace, Sparkles, FileCheck2, Sun, Ban } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import CaseStudy from "../_components/sections/CaseStudy";
import { services, preCare, postCare } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const processSteps = [
  { icon: ClipboardList, title: "Book a consultation", detail: "Free 15-minute phone consult" },
  { icon: ScanFace, title: "Skin analysis", detail: "45-minute precision diagnosis" },
  { icon: Sparkles, title: "Personalized treatment", detail: "Your chosen protocol, delivered" },
  { icon: FileCheck2, title: "Aftercare report", detail: "Home care guide provided" },
];

export default function ServiceFull() {
  const reduce = useReducedMotion();

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/OHMT026-spa/service-hero.jpg"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Services</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
                Our treatments
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                From advanced laser therapy to soothing massage rituals - every treatment is designed with your goals in mind.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
                  className="group rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] overflow-hidden scroll-mt-28 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {service.description}
                    </p>
                    <p className="mt-3 text-xs font-medium text-[var(--color-primary)]">{service.duration} · {service.priceFrom} · {service.idealFor}</p>
                    <a
                      href="/en/templates/OHMT026-spa/contact"
                      className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      Book this treatment →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our approach</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">
                Every treatment starts with you
              </h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
                We begin with a thorough consultation and skin analysis. Using diagnostic tools to assess your condition, we
                build a personalized protocol that combines multiple modalities for optimal results. Follow-up care and progress
                tracking ensure your treatment evolves with your skin.
              </p>
            </motion.div>
          </div>
        </section>

        <CaseStudy />

        <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="overflow-hidden rounded-sm">
                <img src="/templates/OHMT026-spa/promo-02.jpg" alt="A therapist leading a consultation" className="w-full h-80 object-cover" />
              </motion.div>
              <div>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Before you book</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)] mb-8">From booking to aftercare</h2>
                <div className="space-y-6">
                  {processSteps.map((step, i) => (
                    <motion.div key={step.title} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex items-center gap-5">
                      <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-text-muted)] w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <step.icon className="w-5 h-5 text-[var(--color-primary)] shrink-0" strokeWidth={1.75} />
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{step.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{step.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12 text-center">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Before & after care</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">For better results</h2>
            </motion.div>
            <div className="grid gap-10 sm:grid-cols-2">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE_OUT }}>
                <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]"><Sun className="w-4 h-4 text-[var(--color-primary)]" strokeWidth={1.75} />Before treatment</h3>
                <ul className="mt-4 space-y-3">
                  {preCare.map((item) => (<li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{item}</li>))}
                </ul>
              </motion.div>
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}>
                <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]"><Ban className="w-4 h-4 text-[var(--color-primary)]" strokeWidth={1.75} />After treatment</h3>
                <ul className="mt-4 space-y-3">
                  {postCare.map((item) => (<li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{item}</li>))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
