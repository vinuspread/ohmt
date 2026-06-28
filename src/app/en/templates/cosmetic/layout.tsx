import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty & Cosmetics Brand Website Template | OHMT",
  description: "A premium beauty and cosmetics brand website template with elegant product showcase, brand story, and e-commerce ready layouts.",
  openGraph: {
    title: "Beauty & Cosmetics Brand Website Template | OHMT",
    description: "A premium beauty and cosmetics brand website template with elegant product showcase, brand story, and e-commerce ready layouts.",
    url: "https://ohmt.site/en/templates/cosmetic",
    siteName: "OHMT",
    images: [{ url: "/templates/cosmetic/og-image.jpg", width: 1200, height: 630, alt: "Beauty & Cosmetics Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty & Cosmetics Brand Website Template | OHMT",
    description: "A premium beauty and cosmetics brand website template with elegant product showcase, brand story, and e-commerce ready layouts.",
    images: ["/templates/cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/cosmetic",
    languages: { "ko": "https://ohmt.site/ko/templates/cosmetic" },
  },
};

import './theme.css';



export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
