import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding - Oh My Template",
  description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
  keywords: ["wedding photography", "documentary wedding", "fine art wedding", "photographer portfolio", "Oh My Template"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Wedding - Oh My Template",
    description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
    url: "https://ohmytemplate.com/en/templates/OHMT049-wedding-en",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding - Oh My Template",
    description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT049-wedding-en",
    languages: {
      "ko": "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr",
    },
  },
};

export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Elms+Sans:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>
      {children}
    </>
  );
}
