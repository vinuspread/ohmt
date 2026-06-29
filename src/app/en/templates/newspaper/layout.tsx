import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Newspaper",
  description: "News and publishing archive",
  openGraph: {
    title: "OHMT - Newspaper",
    description: "News and publishing archive",
    url: "https://ohmytemplate.com/en/templates/newspaper",
    siteName: "OHMT",
    images: [{ url: "/templates/newspaper/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Newspaper",
    description: "News and publishing archive",
    images: ["/templates/newspaper/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/newspaper",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/newspaper" },
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Georgia&display=swap');
      `}</style>
      {children}
    </>
  );
}
