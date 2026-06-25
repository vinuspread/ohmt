"use client";

import { useState } from "react";

const basePath = "/en/templates/spa";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8 lg:p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto text-white text-xl font-bold">
          ✓
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--color-text)]">
          Thank you
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Your message has been sent. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
            Name
          </label>
          <input
            id="name"
            required
            placeholder="Your name"
            className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="treatment" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
          Treatment interest
        </label>
        <select
          id="treatment"
          className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-text)] focus:outline-none transition-colors"
        >
          <option value="">Select a treatment</option>
          <option value="laser-resurfacing">Laser Skin Resurfacing</option>
          <option value="chemical-peels">Chemical Peels</option>
          <option value="hydrafacial">Hydrafacial Therapy</option>
          <option value="microneedling">Microneedling</option>
          <option value="body-massage">Deep Tissue Massage</option>
          <option value="aromatherapy">Aromatherapy Ritual</option>
          <option value="consultation">General Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your goals or questions..."
          className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-6 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
      >
        Send message
      </button>

      <p className="text-xs text-[var(--color-text-muted)] text-center">
        We&apos;ll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
