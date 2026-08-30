import type { CSSProperties, ReactNode } from "react";

interface YogaTheme {
  theme: {
    palette: {
      primary: string;
      secondary: string;
      accent: string;
      text: { main: string; muted: string; contrast: string };
      ui: { border: string };
    };
    typography: { heading: { font: string }; body: { font: string } };
    spacing: { page_pt: string; container: string; gutter: string };
  };
}

export function TemplateWrapper({ theme, children }: { theme: YogaTheme; children: ReactNode }) {
  const t = theme.theme;
  const cssVariables = {
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
  } as CSSProperties;

  return (
    <div style={cssVariables} className="min-h-screen bg-[var(--theme-primary)] text-[var(--theme-secondary)]">
      {children}
    </div>
  );
}
