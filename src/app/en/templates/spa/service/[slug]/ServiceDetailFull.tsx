"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../_components/layout/Navbar";
import Footer from "../../_components/layout/Footer";
import { services, team } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// Sample detail page - content is intentionally fixed to the first service
// rather than resolved per-slug (see service/[slug]/page.tsx).
const service = services.find((s) => s.id === "aromatherapy")!;
const specialist = team[2];

const steps = [
  { title: "Consultation", desc: "We assess your skin and map out the right intensity and number of sessions for your goals." },
  { title: "Treatment", desc: "The procedure itself takes 30 to 45 minutes, with cooling and comfort measures throughout." },
  { title: "Aftercare", desc: "You'll leave with a simple home-care routine and a follow-up plan to track your results." },
];

export default function ServiceDetailFull() {
  const reduce = useReducedMotion();

  return (
    <>
      <Navbar />
      <main>
        <article>
          <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
            <img
              src={service.image}
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
                  {service.title}
                </h1>
                <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE_OUT }}
                >
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">What to expect</span>
                  <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                    A treatment built around your skin
                  </h2>
                  <div className="mt-8 space-y-6">
                    {steps.map((step, i) => (
                      <div key={step.title} className="flex gap-4">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)] mt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-text)]">{step.title}</h3>
                          <p className="mt-1 text-sm text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
            <div className="mx-auto max-w-7xl px-6">
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="mb-12 max-w-2xl"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Our space</span>
                <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                  Inside the treatment room
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden"
                >
                  <img src="/templates/OHMT026-spa/mission-03.jpg" alt="A calm relaxation lounge with soft ambient lighting" className="h-full w-full object-cover" />
                </motion.div>
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src="/templates/OHMT026-spa/difference-03.jpg" alt="Essential oils and botanicals arranged for the ritual" className="h-full w-full object-cover" />
                </motion.div>
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src="/templates/OHMT026-spa/who-we-are.jpg" alt="A therapist preparing the room before a session" className="h-full w-full object-cover" />
                </motion.div>
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src="/templates/OHMT026-spa/mission-01.jpg" alt="Consultation before treatment" className="h-full w-full object-cover" />
                </motion.div>
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.25, ease: EASE_OUT }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src="/templates/OHMT026-spa/difference-01.jpg" alt="A calm corner of the treatment space" className="h-full w-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
            <div className="mx-auto max-w-7xl px-6">
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="inline-flex items-center gap-5 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 text-left">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <img src={specialist.image} alt={specialist.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Performed by</p>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text)]">{specialist.name}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{specialist.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Curious how a full ritual unfolds in practice? Browse real client journeys in our case studies, or
                  book a consultation to design one around your goals.
                </p>
              </motion.div>

              <div className="mt-16 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/en/templates/OHMT026-spa/contact"
                  className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
                >
                  Book this treatment
                </a>
                <Link href="/en/templates/OHMT026-spa/service" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                  ← Back to services
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
