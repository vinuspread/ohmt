"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="Booking" className="py-32 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] font-semibold">
            Availability
          </span>
          <h2 className="mt-4 font-[var(--font-heading)] text-5xl font-light uppercase tracking-[0.05em] text-[var(--color-text)]">
            BOOK YOUR DATE
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--color-text-muted)] leading-relaxed">
            Our calendar fills up quickly. Get in touch to check availability for your special celebration.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--color-bg)] border border-[var(--color-border)] p-8 sm:p-12 rounded-sm"
        >
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="font-[var(--font-heading)] text-3xl font-light uppercase tracking-[0.05em] text-[var(--color-primary)]">
                Proposal Sent!
              </h3>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                Thank you for sharing your story. We will review our schedule and respond within 24–48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-text-muted)] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="partner" className="block text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-text-muted)] mb-2">
                    Partner's Name *
                  </label>
                  <input
                    type="text"
                    id="partner"
                    required
                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-text-muted)] mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    lang="en"
                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="venue" className="block text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-text-muted)] mb-2">
                    Venue & Location *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    required
                    className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.1em] font-semibold text-[var(--color-text-muted)] mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary)]/90 transition-all font-semibold uppercase tracking-[0.2em] py-4 text-xs"
              >
                Submit Proposal
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
