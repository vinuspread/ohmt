"use client";
import React from "react";
import { motion } from "motion/react";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div style={{ background: "var(--color-frame-bg)", minHeight: "100vh" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ background: "var(--color-bg)", maxWidth: "1440px", margin: "0 auto", minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
