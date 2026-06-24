// src/app/ko/templates/OHMT024-kids-education-KO/contact/page.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import EnrollmentForm from "../_components/sections/EnrollmentForm";
import Footer from "../_components/layout/Footer";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const contactInfo = [
  { icon: "✉️", label: "이메일", value: "hello@ohmytemplate.com" },
  { icon: "📞", label: "전화번호", value: "02-1234-5678" },
  { icon: "📍", label: "위치", value: "서울특별시 강남구" },
];

function ContactPageContent() {
  const shouldReduce = useReducedMotion();

  return (
    <main>
      <div className="pt-[var(--space-giant)]">
        {/* Hero section */}
        <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-text-main)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
                문의하기
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                즐거운 배움의 모험을
                <br />
                <span className="text-[var(--color-primary)]">지금 시작해 보세요</span>
              </h1>
            </motion.div>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-3 gap-[var(--space-md)] mt-[var(--space-xl)]">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + idx * 0.05, ease: EASE_OUT }}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-5 flex items-center gap-4 shadow-[3px_3px_0px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--color-border)] transition-all duration-150"
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
