"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import { services, stats, pricingPlans } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

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
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Services</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
                Our treatments
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                From advanced laser therapy to soothing massage rituals - every treatment is designed with your goals in mind.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
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
                  <div className="h-64 overflow-hidden">
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
                    <div className="mt-5 flex items-center gap-4">
                      <a
                        href={`/en/templates/OHMT026-spa/service/${services[0].id}`}
                        className="text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline"
                      >
                        Learn more →
                      </a>
                      <a
                        href="/en/templates/OHMT026-spa/contact"
                        className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
                      >
                        Book this treatment →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="text-center"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our approach</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Every treatment starts with you
              </h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
                We begin with a thorough consultation and skin analysis. Using diagnostic tools to assess your condition, we
                build a personalized protocol that combines multiple modalities for optimal results. Follow-up care and progress
                tracking ensure your treatment evolves with your skin.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-text)]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 lg:py-32 bg-[var(--color-bg)] scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="text-center mb-16"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Pricing</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Pricing plans
              </h2>
              <p className="mt-4 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto">
                Choose the membership that fits your lifestyle. Upgrade, downgrade, or cancel anytime - no long-term contracts.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3 items-start max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                  className={`rounded-2xl border p-8 lg:p-10 ${
                    plan.featured
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 relative"
                      : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold uppercase tracking-[0.2em] bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-4 py-1.5 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-text)]">{plan.price}</span>
                    <span className="text-sm text-[var(--color-text-muted)]">{plan.period}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/en/templates/OHMT026-spa/contact"
                    className={`mt-8 block w-full text-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 ${
                      plan.featured
                        ? "bg-[var(--color-primary)] text-[var(--color-text-contrast)] hover:brightness-110"
                        : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)]"
                    }`}
                  >
                    {plan.featured ? "Get started" : "Learn more"}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Why membership</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Consistent care, predictable cost
              </h2>
              <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
                Every plan includes priority booking and a dedicated therapist who tracks your progress session to session.
                There are no hidden fees - what you see is what you pay, and you can change or cancel your plan anytime
                from your account.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { title: "No hidden fees", desc: "The price on the card is the price you pay, every month." },
                { title: "Cancel anytime", desc: "No long-term contracts - pause or cancel with no penalty." },
                { title: "Licensed therapists", desc: "Every session is led by a certified, experienced professional." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-left">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
