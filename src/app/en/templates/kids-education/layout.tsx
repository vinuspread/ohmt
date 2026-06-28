import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Education & Learning Website Template | OHMT",
  description: "A bright and engaging website template for kids education centers, tutoring services, and learning platforms. Includes class and enrollment sections.",
  openGraph: {
    title: "Kids Education & Learning Website Template | OHMT",
    description: "A bright and engaging website template for kids education centers, tutoring services, and learning platforms. Includes class and enrollment sections.",
    url: "https://ohmt.site/en/templates/kids-education",
    siteName: "OHMT",
    images: [{ url: "/templates/kids-education/og-image.jpg", width: 1200, height: 630, alt: "Kids Education & Learning Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Education & Learning Website Template | OHMT",
    description: "A bright and engaging website template for kids education centers, tutoring services, and learning platforms. Includes class and enrollment sections.",
    images: ["/templates/kids-education/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/kids-education",
    languages: { "ko": "https://ohmt.site/ko/templates/kids-education" },
  },
};

import "./theme.css";



export default function KidsEducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
