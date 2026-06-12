"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
      onAnimationComplete={() => setAnimationComplete(true)}
      style={animationComplete ? { transform: "none" } : {}}
    >
      {children}
    </motion.div>
  );
}
