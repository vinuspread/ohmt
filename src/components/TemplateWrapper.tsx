"use client";

import React, { useMemo } from "react";

interface ThemeConfig {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    text: {
      main: string;
      muted: string;
      contrast: string;
    };
    ui: {
      border: string;
      hover: string;
      shadow: string;
    };
  };
  typography: {
    heading: {
      font: string;
      style: string;
    };
    body: {
      font: string;
      style: string;
    };
  };
  spacing: {
    page_pt: string;
    container: string;
    gutter: string;
    card_gap: string;
  };
  interaction: {
    button: string;
    card_hover: string;
  };
}

export function TemplateWrapper({ theme, children }: { theme: any; children: React.ReactNode }) {
  const cssVariables = useMemo(() => {
    const t = theme.theme as ThemeConfig;
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
    } as React.CSSProperties;
  }, [theme]);

  return (
    <div style={cssVariables} className="min-h-screen bg-[var(--theme-primary)] text-[var(--theme-secondary)]">
      {children}
    </div>
  );
}
