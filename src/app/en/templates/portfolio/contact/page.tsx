"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { designerInfo, faqs } from "@/lib/portfolio-data";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[0.92rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-text-muted)] transition-colors pr-6">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} className="text-[var(--color-text-muted)] shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[0.88rem] text-[var(--color-text-muted)] leading-[1.4] pb-6 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-[var(--color-text)] font-[family-name:var(--font-inter)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />

        {/* Hero */}
        <section className="pt-40 pb-20 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <div>
                <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-6">Get in touch</span>
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter leading-[1.1] max-w-[700px]">
                  Got a project in mind? Let's chat and bring it to life.
                </h1>
                <a
                  href={`mailto:${designerInfo.contact.email}`}
                  className="inline-block mt-8 text-[1.1rem] font-medium text-[var(--color-text)] border-b border-[var(--color-primary)] pb-0.5 hover:opacity-50 transition-opacity"
                >
                  {designerInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-6 md:pb-2">
                {[
                  { label: 'BE', href: designerInfo.social.behance },
                  { label: 'DR', href: designerInfo.social.dribbble },
                  { label: 'X', href: designerInfo.social.twitter },
                ].map(s => (
                  <a key={s.label} href={s.href}
                    className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 md:py-24 border-b border-[var(--color-border)]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="max-w-[680px]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16"
                >
                  <h2 className="text-[2rem] font-black uppercase tracking-tighter mb-3">Message Received</h2>
                  <p className="text-[var(--color-text-muted)] text-[0.9rem]">We'll get back to you within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                  ].map(field => (
                    <div key={field.label} className="border-b border-[var(--color-border)] py-6">
                      <label className="block text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{field.label}</label>
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent py-1 text-[0.95rem] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none"
                      />
                    </div>
                  ))}
                  <div className="border-b border-[var(--color-border)] py-6">
                    <label className="block text-[13px] font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent py-1 text-[0.95rem] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none resize-none"
                    />
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="bg-[var(--color-primary)] text-white text-[0.78rem] font-bold uppercase tracking-widest px-10 py-4 hover:bg-black transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-24">
          <div className="max-w-[1440px] mx-auto px-8 md:px-10">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <span className="text-[13px] font-medium tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-6">FAQ</span>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tighter leading-tight">Frequently Asked Questions</h2>
              </div>
              <div className="border-t border-[var(--color-border)]">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function ContactPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ContactPageContent {...props} />
    </React.Suspense>
  );
}
