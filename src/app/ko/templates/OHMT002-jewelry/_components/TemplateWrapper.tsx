"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
export function TemplateWrapper({ theme, children }: { theme: any; children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);
  const cssVariables = useMemo(() => {
    const t = theme.theme;
    return {
      "--theme-primary": t.palette.primary,
      "--theme-secondary": t.palette.secondary,
      "--theme-accent": t.palette.accent,
      "--theme-text": t.palette.text.main,
      "--theme-text-muted": t.palette.text.muted,
      "--theme-text-contrast": t.palette.text.contrast,
      "--theme-border": t.palette.ui.border,
      "--theme-font-heading": t.typography.heading.font,
      "--theme-font-body": t.typography.body.font,
      "--theme-page-pt": t.spacing.page_pt,
      "--theme-container": t.spacing.container,
      "--theme-gutter": t.spacing.gutter,
    } as React.CSSProperties;
  }, [theme]);
  return (
    <div style={cssVariables} className="min-h-screen bg-[var(--theme-primary)] text-[var(--theme-secondary)]">
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.2, ease:"easeInOut"}}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none", filter: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
