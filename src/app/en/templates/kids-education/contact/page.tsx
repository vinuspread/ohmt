"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import EnrollmentForm from "../_components/sections/EnrollmentForm";
import Footer from "../_components/layout/Footer";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const contactInfo = [
  { icon: "\u{1F4E7}", label: "Email", value: "hello@ohmytemplate.com" },
  { icon: "\u{1F4DE}", label: "Phone", value: "+82 2-1234-5678" },
  { icon: "\u{1F4CD}", label: "Location", value: "Seoul, South Korea" },
];

function ContactPageContent() {
  const shouldReduce = useReducedMotion();

  return (
    <main>
      <div className="pt-24">
        <section className="py-16 md:py-24 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
                Get in Touch
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Let&apos;s Start This
                <br />
                <span className="text-[var(--color-primary)]">Learning Adventure</span>
              </h1>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + idx * 0.05, ease: EASE_OUT }}
                  className="bg-white rounded-2xl border border-black/8 p-5 flex items-center gap-4"
                >
                  <span className="text-2xl shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{info.label}</p>
                    <p className="text-sm font-semibold mt-0.5">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <EnrollmentForm />
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </TemplateWrapper>
  );
}
