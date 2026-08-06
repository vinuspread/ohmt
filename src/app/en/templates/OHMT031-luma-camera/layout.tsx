import "./theme.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmt.site"),
  title: "OHMT - Camera Product Showcase Template",
  description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
  openGraph: {
    title: "OHMT - Camera Product Showcase Template",
    description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
    url: "https://ohmt.site/en/templates/OHMT031-luma-camera",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT031-luma-camera/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    alternateLocale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Camera Product Showcase Template",
    description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
    images: ["/templates/OHMT031-luma-camera/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT031-luma-camera",
    languages: {
      en: "https://ohmt.site/en/templates/OHMT031-luma-camera",
      ko: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT - LUMA Camera",
  description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
  url: "https://ohmt.site/en/templates/OHMT031-luma-camera",
};

export default function LumaCameraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`luma-camera-template ${geist.variable}`} style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
