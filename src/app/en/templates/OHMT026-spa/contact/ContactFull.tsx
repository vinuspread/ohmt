"use client";

import { motion, useReducedMotion } from "motion/react";
import { TrainFront, Car, MapPin, MessageCircle, AtSign, Phone } from "lucide-react";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";
import ContactForm from "../_components/sections/ContactForm";
import { contactFaqs } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const transitInfo = [
  { icon: TrainFront, label: "Subway", detail: "5-minute walk from Exit 3, Gangnam Station (Line 2)" },
  { icon: Car, label: "Parking", detail: "2 hours free in the building's basement garage (valet available)" },
];

const otherChannels = [
  { icon: MessageCircle, label: "KakaoTalk Channel", detail: "@serenity-spa" },
  { icon: AtSign, label: "Instagram DM", detail: "@serenity.spa" },
  { icon: Phone, label: "Call us", detail: "+1 (555) 010-2030" },
];

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
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex h-full min-h-[50dvh] flex-col justify-end pb-16 lg:pb-20">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Contact</span>
              <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
                Book your appointment
              </h1>
              <p className="mt-4 text-[0.95rem] text-white/60 leading-relaxed max-w-lg">
                Ready to start your wellness journey? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-[1440px] px-6">
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

        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Location</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Getting here</h2>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2">
              <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: EASE_OUT }} className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">Address</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">123 Wellness Avenue, New York, NY 10001</p>
                </div>
              </motion.div>
              {transitInfo.map((item, i) => (
                <motion.div key={item.label} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i + 1) * 0.08, ease: EASE_OUT }} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{item.label}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-3xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="mb-12">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Before you visit</span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Booking FAQs</h2>
            </motion.div>
            <div className="space-y-8">
              {contactFaqs.map((faq, i) => (
                <motion.div key={faq.question} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }} className="flex gap-4">
                  <span className="font-[family-name:var(--font-heading)] text-sm text-[var(--color-text-muted)] w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)]">{faq.question}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
              {otherChannels.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.75} />
                  <div className="text-left">
                    <p className="text-sm font-medium text-[var(--color-text)]">{item.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{item.detail}</p>
                  </div>
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
