import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Newspaper - Oh My Template",
  description: "News and publishing archive",
  openGraph: {
    title: "Newspaper - Oh My Template",
    description: "News and publishing archive",
    url: "https://ohmytemplate.com/ko/templates/OHMT013-newspaper-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT013-newspaper/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newspaper - Oh My Template",
    description: "News and publishing archive",
    images: ["/templates/OHMT013-newspaper/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT013-newspaper-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT013-newspaper-EN" },
  },
};

export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Serif+KR:wght@400;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
