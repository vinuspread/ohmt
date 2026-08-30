import type { Metadata } from "next";
import "./theme.css";
export const metadata: Metadata = {
  title: "OHMT - Yoga Wellness Studio Template",
  description: "Compare Vinyasa, Hatha, meditation, and Pilates classes, then book a time this week.",
  openGraph: {
    title: "OHMT - Yoga Wellness Studio Template",
    description: "Compare Vinyasa, Hatha, meditation, and Pilates classes, then book a time this week.",
    url: "https://ohmytemplate.com/en/templates/OHMT022-yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT022-yoga/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Yoga Wellness Studio Template",
    description: "Compare Vinyasa, Hatha, meditation, and Pilates classes, then book a time this week.",
    images: ["/templates/OHMT022-yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT022-yoga",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT022-yoga" },
  },
};

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: "OHMT Yoga & Wellness",
    description: "Compare Vinyasa, Hatha, meditation, and Pilates classes, then book a time this week.",
    url: "https://ohmytemplate.com/en/templates/OHMT022-yoga",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="yoga-en">
        <div lang="en" className="ohmt022-yoga">{children}</div>
      </div>
    </>
  );
}
