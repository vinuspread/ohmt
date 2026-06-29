import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT - Yoga",
  description: "Find your inner peace with premium yoga and wellness classes",
  openGraph: {
    title: "OHMT - Yoga",
    description: "Find your inner peace with premium yoga and wellness classes",
    url: "https://ohmytemplate.com/en/templates/yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/yoga/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Yoga",
    description: "Find your inner peace with premium yoga and wellness classes",
    images: ["/templates/yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/yoga",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/yoga" },
  },
};

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
