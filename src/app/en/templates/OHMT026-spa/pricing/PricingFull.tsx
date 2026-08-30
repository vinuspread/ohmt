"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, X, Stethoscope, PackageCheck, FileClock } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { pricingPlans, pricingComparison, pricingFaqs } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const inclusions = [
  { icon: Stethoscope, label: "Free initial consultation" },
  { icon: PackageCheck, label: "Patch test included" },
  { icon: FileClock, label: "Aftercare guide" },
];

export default function PricingFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img src="/templates/OHMT026-spa/instagram-07.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end items-center pb-16 lg:pb-20 text-center">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE_OUT }}>
              <h1 className="font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">Pricing Plans</h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-md mx-auto">Choose a membership that fits your lifestyle. Upgrade or cancel anytime.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <motion.div key={plan.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }} className={`rounded-2xl border p-8 lg:p-10 ${plan.featured ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 relative" : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]"}`}>
                  {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold uppercase tracking-[0.2em] bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-4 py-1.5 rounded-full">Most Popular</span>}
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)]">{plan.name}</h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-text)]">{plan.price}</span>
                    <span className="text-sm text-[var(--color-text-muted)]">{plan.period}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]"><span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />{f}</li>))}
                  </ul>
                  <a href="/en/templates/OHMT026-spa/contact" className={`mt-8 block w-full text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 ${plan.featured ? "bg-[var(--color-primary)] text-[var(--color-text-contrast)] hover:brightness-110" : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)]"}`}>{plan.featured ? "Get Started" : "Learn More"}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Compare</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Plan comparison</h2>
            </motion.div>
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left font-medium text-[var(--color-text-muted)] py-4 pr-4"></th>
                    <th className="text-center font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] py-4 px-4">Basic</th>
                    <th className="text-center font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] py-4 px-4">Advanced</th>
                    <th className="text-center font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] py-4 px-4">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((row) => (
                    <tr key={row.feature} className="border-b border-[var(--color-border)]">
                      <td className="py-4 pr-4 text-[var(--color-text-muted)]">{row.feature}</td>
                      {[row.basic, row.advanced, row.premium].map((cell, i) => (
                        <td key={i} className="text-center py-4 px-4">
                          {typeof cell === "boolean" ? (
                            cell ? <Check className="inline w-4 h-4 text-[var(--color-primary)]" strokeWidth={2} /> : <X className="inline w-4 h-4 text-[var(--color-text-muted)]/40" strokeWidth={2} />
                          ) : (
                            <span className="text-[var(--color-text)]">{cell}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Billing</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Billing & cancellation policy</h2>
            </motion.div>
            <div className="space-y-8">
              {pricingFaqs.map((faq, i) => (
                <motion.div key={faq.question} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{faq.question}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
              {inclusions.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-[var(--color-text)]">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
