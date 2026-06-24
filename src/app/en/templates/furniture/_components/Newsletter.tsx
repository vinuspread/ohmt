"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="bg-white py-12 md:py-24 md:py-40 lg:py-48 border-t border-black/5 selection:bg-black selection:text-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-8 block"
          >
            Stay in the Loop
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[clamp(2rem,7vw,5rem)] md:text-[clamp(3rem,8vw,6rem)] font-bold text-[var(--color-text)] leading-[1.05] mb-12 uppercase"
          >
            Curated Insights. <br /> In Your Inbox.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-[var(--color-secondary)] font-medium leading-[1.4] mb-16 max-w-lg mx-auto uppercase"
          >
            Subscribe to receive our latest collections, stories, and exclusive event invitations.
          </motion.p>

          <motion.form
            className="relative max-w-md mx-auto group"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[var(--color-light-bg)] border-none px-10 py-6 pr-20 rounded-full text-[15px] font-bold text-[var(--color-text)] placeholder:text-black/30 focus:ring-2 focus:ring-black outline-none transition-all"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.1)" }}
            />
            <motion.button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12"
          >
            <p className="text-[13px] font-bold text-[var(--color-secondary)] uppercase">Privacy First. Unsubscribe Anytime.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
