"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ThemeConfig {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    text: { main: string; muted: string; contrast: string };
    ui: { border: string; hover: string; shadow: string };
  };
  typography: {
    heading: { font: string; style: string };
    body: { font: string; style: string };
  };
  spacing: { page_pt: string; container: string; gutter: string; card_gap?: string };
  interaction?: { button: string; card_hover: string };
}

interface TemplateTheme {
  theme: ThemeConfig;
}


export function TemplateWrapper({ theme, children }: { theme: TemplateTheme; children: React.ReactNode }) {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("history" in window && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
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
      "--theme-ui-hover": t.palette.ui.hover,
      "--theme-ui-shadow": t.palette.ui.shadow,
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { transform: "none", filter: "none" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
}
