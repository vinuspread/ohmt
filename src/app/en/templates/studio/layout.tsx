import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Design Studio Website Template | OHMT",
  description: "A sophisticated architecture and design studio website template with portfolio projects, team bios, and inquiry sections.",
  openGraph: {
    title: "Architecture & Design Studio Website Template | OHMT",
    description: "A sophisticated architecture and design studio website template with portfolio projects, team bios, and inquiry sections.",
    url: "https://ohmt.site/en/templates/studio",
    siteName: "OHMT",
    images: [{ url: "/templates/studio/og-image.jpg", width: 1200, height: 630, alt: "Architecture & Design Studio Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture & Design Studio Website Template | OHMT",
    description: "A sophisticated architecture and design studio website template with portfolio projects, team bios, and inquiry sections.",
    images: ["/templates/studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/studio",
    languages: { "ko": "https://ohmt.site/ko/templates/studio" },
  },
};

import './theme.css';



export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
