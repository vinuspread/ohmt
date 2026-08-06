import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import "./theme.css";
import { TemplateWrapper } from "./_components/TemplateWrapper";

export const metadata: Metadata = {
  title: "OHMT - Electric Vehicle Concept Template",
  description: "Premium electric vehicle showcase template",
  openGraph: {
    title: "OHMT - Electric Vehicle Concept Template",
    description: "Premium electric vehicle showcase template",
    url: "https://ohmt.site/en/templates/OHMT028-ev",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT028-ev/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Electric Vehicle Concept Template",
    description: "Premium electric vehicle showcase template",
    images: ["/templates/OHMT028-ev/og-image.jpg"],
  },
};

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "OHMT EV",
    description: "Premium electric vehicle showcase template",
    url: "https://ohmt.site/en/templates/OHMT028-ev",
  };
  return (
    <div className={`${michroma.variable} ${inter.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TemplateWrapper>{children}</TemplateWrapper>
    </div>
  );
}
