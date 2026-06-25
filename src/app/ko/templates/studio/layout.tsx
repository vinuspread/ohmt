import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Studio - Oh My Template",
  description: "Architecture and spatial design studio",
  openGraph: {
    title: "Studio - Oh My Template",
    description: "Architecture and spatial design studio",
    url: "https://ohmytemplate.com/ko/templates/OHMT006-studio-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/studio/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio - Oh My Template",
    description: "Architecture and spatial design studio",
    images: ["/templates/studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT006-studio-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT006-studio-EN" },
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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
