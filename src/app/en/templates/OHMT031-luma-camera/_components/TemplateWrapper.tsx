"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}
      className="min-h-[100dvh] bg-[var(--luma-bg)] text-[var(--luma-ink)]"
    >
      {children}
    </motion.div>
  );
}
