// src/app/en/templates/architecture/contact/page.tsx
"use client";
import React, { useState } from "react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { ScrollReveal } from "../_components/ui/ScrollReveal";
import { CustomCursor } from "../_components/ui/CustomCursor";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", details: "" });
  };

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[var(--color-text)] font-sans antialiased overflow-hidden selection:bg-[var(--color-text)] selection:text-white">
        <Header />
        
        <main className="pt-32 pb-24">
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl mb-16">
                <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase block">
                  GET IN TOUCH
                </span>
                <h1 className="font-heading font-normal text-[48px] md:text-[64px] lg:text-[72px] leading-tight text-[var(--color-text)]">
                  Initiate Project.
                </h1>
                <p className="font-heading font-normal text-[24px] md:text-[28px] leading-[1.5] text-[var(--color-text-secondary)] pt-4">
                  Have an upcoming architectural project? Tell us about your scale, budget, and aesthetic aspirations.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column: Form (col 7) */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.1}>
                  {isSubmitted ? (
                    <div className="space-y-4 bg-[var(--color-bg-secondary)] p-8 md:p-10 border border-[var(--color-border)]">
                      <h3 className="font-heading font-normal text-[28px] text-[var(--color-text)]">
                        Proposal Submitted.
                      </h3>
                      <p className="font-sans text-[15px] text-[var(--color-text-secondary)]">
                        Thank you for reaching out. Our design curator has received your submission and will contact you within 48 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[var(--color-text)] text-white px-6 py-2.5 text-[13px] font-sans tracking-[0.08em] mt-4"
                      >
                        SUBMIT ANOTHER
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                          NAME
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[15px] font-sans focus:outline-none focus:border-[var(--color-text)] transition-colors placeholder:text-[var(--color-text-secondary)]/40"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[15px] font-sans focus:outline-none focus:border-[var(--color-text)] transition-colors placeholder:text-[var(--color-text-secondary)]/40"
                        />
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        <label htmlFor="details" className="block font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                          PROJECT DETAILS
                        </label>
                        <textarea
                          id="details"
                          required
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Please tell us about your project location, scale, and aspirations..."
                          rows={5}
                          className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[15px] font-sans focus:outline-none focus:border-[var(--color-text)] transition-colors resize-none placeholder:text-[var(--color-text-secondary)]/40"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-[var(--color-text)] text-white px-8 py-3.5 text-[13px] font-sans tracking-[0.08em] hover:bg-zinc-800 transition-colors duration-300"
                      >
                        SUBMIT PROPOSAL
                      </button>
                    </form>
                  )}
                </ScrollReveal>
              </div>

              {/* Right Column: Contact info (col 5) */}
              <div className="lg:col-span-5 space-y-12 lg:pl-12">
                <ScrollReveal delay={0.2}>
                  <div className="space-y-4">
                    <h3 className="font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                      DIRECT CHANNELS
                    </h3>
                    <div className="font-sans text-[15px] text-[var(--color-text-secondary)] space-y-2 leading-relaxed">
                      <p>General Inquiries: info@ohmytemplate.com</p>
                      <p>Media & PR: press@ohmytemplate.com</p>
                      <p>Careers: careers@ohmytemplate.com</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="space-y-4">
                    <h3 className="font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                      SEOUL OFFICE
                    </h3>
                    <div className="font-sans text-[15px] text-[var(--color-text-secondary)] space-y-2 leading-relaxed">
                      <p>123 Architectural Blvd, Seongbuk-gu, Seoul, Republic of Korea</p>
                      <p>T. +82 (0)2 1234 5678</p>
                      <p>F. +82 (0)2 1234 5679</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="space-y-4">
                    <h3 className="font-sans text-[12px] font-semibold text-[var(--color-text)] tracking-wider uppercase">
                      BUSINESS HOURS
                    </h3>
                    <div className="font-sans text-[15px] text-[var(--color-text-secondary)] space-y-2 leading-relaxed">
                      <p>Monday - Friday: 09:00 - 18:00 KST</p>
                      <p>Saturday, Sunday: Closed</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
