import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Wellness Website Template | OHMT",
  description: "A calming and elegant spa and wellness website template with service menus, booking sections, and serene visual aesthetics.",
  openGraph: {
    title: "Spa & Wellness Website Template | OHMT",
    description: "A calming and elegant spa and wellness website template with service menus, booking sections, and serene visual aesthetics.",
    url: "https://ohmt.site/en/templates/spa",
    siteName: "OHMT",
    images: [{ url: "/templates/spa/og-image.jpg", width: 1200, height: 630, alt: "Spa & Wellness Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa & Wellness Website Template | OHMT",
    description: "A calming and elegant spa and wellness website template with service menus, booking sections, and serene visual aesthetics.",
    images: ["/templates/spa/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/spa",
    languages: { "ko": "https://ohmt.site/ko/templates/spa" },
  },
};

import "./theme.css";



export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
