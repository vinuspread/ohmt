import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - Premium Fitness Studio",
  description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
  openGraph: {
    title: "OHMT - Premium Fitness Studio",
    description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
    url: "https://ohmytemplate.com/en/templates/fitness",
    siteName: "OHMT",
    images: [{ url: "/templates/fitness/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/fitness",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/fitness",
      "ko": "https://ohmytemplate.com/ko/templates/fitness",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
