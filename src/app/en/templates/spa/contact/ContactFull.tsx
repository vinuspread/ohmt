"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import ContactForm from "../_components/sections/ContactForm";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ContactFull() {
  const reduce = useReducedMotion();
  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[50dvh] overflow-hidden bg-[var(--color-secondary)]">
          <img
            src="/templates/OHMT026-spa/contact-hero.jpg"
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
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Contact</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
                Book your appointment
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                Ready to start your wellness journey? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">Visit us</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">123 Wellness Avenue<br />New York, NY 10001</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">Hours</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Mon–Fri: 9:00 AM – 8:00 PM<br />Sat: 10:00 AM – 6:00 PM<br />Sun: Closed</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] mb-2">Contact</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">+1 (555) 010-2030<br />hello@ohmytemplate.com</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img src="/templates/OHMT026-spa/clinic-interior.jpg" alt="Our clinic interior" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
