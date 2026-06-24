"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const shouldReduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
            Enrollment
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mt-3" style={{ fontFamily: "var(--font-heading)" }}>
            Join the Fun
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-md mx-auto">
            Fill out the form below and we will help you find the perfect class for your child.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, delay: 0.05, ease: EASE_OUT }}
          className="mt-12 bg-white rounded-2xl border border-black/8 p-8 sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: EASE_OUT }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-white">
                ✓
              </div>
              <h3 className="text-3xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Welcome to the Family!
              </h3>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-sm mx-auto">
                We received your enrollment request. Our team will reach out within 24 hours to help you get started.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="child-name" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Child Name *
                  </label>
                  <input
                    id="child-name"
                    type="text"
                    required
                    className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150"
                    placeholder="Your child name"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Age *
                  </label>
                  <select
                    id="age"
                    required
                    defaultValue=""
                    className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23555%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                  >
                    <option value="" disabled>Select age</option>
                    <option value="3-4">3 - 4 years</option>
                    <option value="5-6">5 - 6 years</option>
                    <option value="7-8">7 - 8 years</option>
                    <option value="9-10">9 - 10 years</option>
                    <option value="11-12">11 - 12 years</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parent-name" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Parent Name *
                  </label>
                  <input
                    id="parent-name"
                    type="text"
                    required
                    className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Interested Class *
                </label>
                <select
                  id="interest"
                  required
                  defaultValue=""
                  className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23555%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                >
                  <option value="" disabled>Select a class</option>
                  <option value="coding">Creative Coding</option>
                  <option value="art">Art Studio</option>
                  <option value="science">Science Lab</option>
                  <option value="math">Math Adventures</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Questions or Notes
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full border border-black/8 rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-150"
                  placeholder="Any special requests or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] rounded-full py-4 text-sm font-bold hover:brightness-95 active:scale-[0.97] transition-all duration-150"
              >
                Enroll Now
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
