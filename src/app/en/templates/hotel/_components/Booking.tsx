"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export const Booking = () => {
  return (
    <section id="booking" className="py-20 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.15]">
            Book Your Stay
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Begin your journey with us. Fill in your details and we will curate the perfect experience for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto bg-[var(--color-bg)] border border-[var(--color-border)] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Check-In</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Check-Out</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Room Type</label>
              <select className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option>Deluxe Room</option>
                <option>Executive Suite</option>
                <option>Pool Villa</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Guests</label>
              <select className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-[11px] font-medium text-[var(--color-text-muted)] uppercase tracking-[0.1em] block mb-2">Special Requests</label>
            <textarea rows={3} placeholder="Any special requests or preferences..." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" />
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" className="text-[12px] tracking-[0.2em] uppercase rounded-sm px-12">Send Reservation</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
