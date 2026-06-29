import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Studio",
  description: "Architecture and spatial design studio",
  openGraph: {
    title: "OHMT - Studio",
    description: "Architecture and spatial design studio",
    url: "https://ohmytemplate.com/en/templates/studio",
    siteName: "OHMT",
    images: [{ url: "/templates/studio/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Studio",
    description: "Architecture and spatial design studio",
    images: ["/templates/studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/studio",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/studio" },
  },
};

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
