import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Portfolio Website Template | OHMT",
  description: "A sophisticated architecture portfolio website template with project galleries, design philosophy, and studio services pages.",
  openGraph: {
    title: "Architecture Portfolio Website Template | OHMT",
    description: "A sophisticated architecture portfolio website template with project galleries, design philosophy, and studio services pages.",
    url: "https://ohmt.site/en/templates/architecture",
    siteName: "OHMT",
    images: [{ url: "/templates/architecture/og-image.jpg", width: 1200, height: 630, alt: "Architecture Portfolio Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture Portfolio Website Template | OHMT",
    description: "A sophisticated architecture portfolio website template with project galleries, design philosophy, and studio services pages.",
    images: ["/templates/architecture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/architecture",
    languages: { "ko": "https://ohmt.site/ko/templates/architecture" },
  },
};

// src/app/en/templates/architecture/layout.tsx
import "./theme.css";



export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
