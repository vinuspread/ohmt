"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[480px]">
      <h1
        className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05] mb-4"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Book Your Date
      </h1>
      <p className="text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed mb-12 font-[family-name:var(--font-body)]">
        Our calendar fills up quickly. Reach out to check availability for your celebration.
      </p>

      {submitted ? (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="py-12 border-t border-[var(--color-border)]"
        >
          <p className="font-[family-name:var(--font-heading)] text-3xl font-light capitalize text-[var(--color-text)] mb-4">
            Message Received
          </p>
          <p className="text-sm text-[var(--color-text-muted)] font-[family-name:var(--font-body)]">
            Thank you for reaching out. We will review our schedule and respond within 24 to 48 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid gap-7 sm:grid-cols-2">
            <Field id="name" label="Your Name" type="text" required />
            <Field id="partner" label="Partner's Name" type="text" required />
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <Field id="date" label="Wedding Date" type="date" required />
            <Field id="venue" label="Venue" type="text" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)] mb-2">
              Your Vision
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none font-[family-name:var(--font-body)]"
              placeholder="Tell us about your day..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--color-text)] text-white hover:bg-[var(--color-primary)] transition-colors duration-300 font-medium uppercase tracking-[0.2em] py-4 text-[0.72rem] font-[family-name:var(--font-body)]"
          >
            Submit Inquiry
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ id, label, type, required }: { id: string; label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.65rem] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)] mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors font-[family-name:var(--font-body)]"
      />
    </div>
  );
}
