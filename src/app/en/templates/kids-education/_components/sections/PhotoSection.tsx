"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// rotate / rough position matching Figma design
const leftPhotos = [
  { src: "/templates/kids-education/photo-01.jpg", style: { top: "8%",  left: "22%", width: "210px", zIndex: 2 } },
  { src: "/templates/kids-education/photo-03.jpg", style: { top: "38%", left: "29%", width: "180px", zIndex: 3 } },
  { src: "/templates/kids-education/photo-05.jpg", style: { top: "62%", left: "21%", width: "195px", zIndex: 2 } },
];
const rightPhotos = [
  { src: "/templates/kids-education/photo-02.jpg", style: { top: "6%",  right: "22%", width: "185px", zIndex: 2 } },
  { src: "/templates/kids-education/photo-04.jpg", style: { top: "36%", right: "27%", width: "210px", zIndex: 3 } },
  { src: "/templates/kids-education/photo-06.jpg", style: { top: "62%", right: "21%", width: "190px", zIndex: 2 } },
];

export default function PhotoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const shouldReduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-bg)]">

      {/* Left photos */}
      {!shouldReduce && leftPhotos.map((photo, idx) => (
        <motion.div
          key={`l${idx}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: idx * 0.1, ease: EASE_OUT }}
          className="absolute hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          style={photo.style}
        >
          <img src={photo.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Right photos */}
      {!shouldReduce && rightPhotos.map((photo, idx) => (
        <motion.div
          key={`r${idx}`}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: idx * 0.1, ease: EASE_OUT }}
          className="absolute hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          style={photo.style}
        >
          <img src={photo.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-6">
            Stay in the Loop
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join Our Academy and<br />Never Miss a New Class
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            Get updates on new classes, seasonal camps, and special events -<br />delivered to your inbox.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, delay: 0.08, ease: EASE_OUT }}
          className="mt-8"
        >
          {submitted ? (
            <div className="bg-[var(--color-primary)] rounded-2xl px-8 py-6">
              <p className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>You're in!</p>
              <p className="text-sm mt-1">We'll keep you posted on everything at Kids Academy.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-1.5 bg-white rounded-full shadow-lg p-1.5 border border-black/8 w-full max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@example.com"
                className="flex-1 min-w-0 px-4 py-2 text-sm bg-transparent focus:outline-none text-left"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] rounded-full px-5 py-2 text-sm font-bold active:scale-[0.97] transition-transform duration-100 whitespace-nowrap shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <a
            href="/en/templates/kids-education/contact"
            className="inline-block mt-5 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150"
          >
            Enroll Directly →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
