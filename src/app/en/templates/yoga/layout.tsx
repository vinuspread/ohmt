import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga & Wellness Studio Website Template | OHMT",
  description: "A serene yoga and wellness studio website template with class schedules, membership options, and instructor profiles.",
  openGraph: {
    title: "Yoga & Wellness Studio Website Template | OHMT",
    description: "A serene yoga and wellness studio website template with class schedules, membership options, and instructor profiles.",
    url: "https://ohmt.site/en/templates/yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/yoga/og-image.jpg", width: 1200, height: 630, alt: "Yoga & Wellness Studio Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga & Wellness Studio Website Template | OHMT",
    description: "A serene yoga and wellness studio website template with class schedules, membership options, and instructor profiles.",
    images: ["/templates/yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/yoga",
    languages: { "ko": "https://ohmt.site/ko/templates/yoga" },
  },
};

import "./theme.css";



export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500&display=swap');

        :root {
          --font-inter: 'Outfit', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
