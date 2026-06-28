import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Brand Website Template | OHMT",
  description: "An editorial fashion brand website template with bold typography, lookbook layouts, and seasonal collection showcases.",
  openGraph: {
    title: "Fashion Brand Website Template | OHMT",
    description: "An editorial fashion brand website template with bold typography, lookbook layouts, and seasonal collection showcases.",
    url: "https://ohmt.site/en/templates/fashion",
    siteName: "OHMT",
    images: [{ url: "/templates/fashion/og-image.jpg", width: 1200, height: 630, alt: "Fashion Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Brand Website Template | OHMT",
    description: "An editorial fashion brand website template with bold typography, lookbook layouts, and seasonal collection showcases.",
    images: ["/templates/fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/fashion",
    languages: { "ko": "https://ohmt.site/ko/templates/fashion" },
  },
};

import './theme.css';



export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
