import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "SILO - Editorial Fashion Lookbook",
  description: "Premium fashion brand & editorial showcase",
  openGraph: {
    title: "SILO - Editorial Fashion Lookbook",
    description: "Premium fashion brand & editorial showcase",
    url: "https://ohmt.site/en/templates/OHMT001-fashion",
    siteName: "SILO",
    images: [{ url: "/templates/OHMT001-fashion/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SILO - Editorial Fashion Lookbook",
    description: "Premium fashion brand & editorial showcase",
    images: ["/templates/OHMT001-fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT001-fashion",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT001-fashion" },
  },
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
