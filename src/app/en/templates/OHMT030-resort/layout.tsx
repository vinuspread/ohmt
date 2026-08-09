import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./theme.css";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "OHMT - Seaside Hospitality Booking Template",
  description: "A seaside sanctuary of minimalist luxury.",
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Seaside Hospitality Booking Template",
    description: "A seaside sanctuary of minimalist luxury.",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
  openGraph: {
    title: "OHMT - Seaside Hospitality Booking Template",
    description: "A seaside sanctuary of minimalist luxury.",
    url: "https://ohmt.site/en/templates/OHMT030-resort",
    siteName: "OHMT",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT030-resort",
    languages: { ko: "https://ohmt.site/ko/templates/OHMT030-resort" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT - Coastal Luxury Resort",
  description: "A seaside sanctuary of minimalist luxury.",
  url: "https://ohmt.site/en/templates/OHMT030-resort",
};

export default function ResortLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`resort-template ${instrumentSans.variable}`}
      style={{ fontFamily: "var(--font-body)", backgroundColor: "var(--bg)" }}
    >
      <TemplateWrapper>{children}</TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
