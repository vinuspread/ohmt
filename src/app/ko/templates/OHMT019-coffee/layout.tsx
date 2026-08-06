import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - 스페셜티 카페 템플릿",
  description: "프리미엄 커피숍 & 로스터리 경험",
  openGraph: {
    title: "OHMT - 스페셜티 카페 템플릿",
    description: "프리미엄 커피숍 & 로스터리 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT019-coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT019-coffee/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 스페셜티 카페 템플릿",
    description: "프리미엄 커피숍 & 로스터리 경험",
    images: ["/templates/OHMT019-coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT019-coffee",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT019-coffee" },
  },
};

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "OHMT Coffee",
    description: "프리미엄 커피숍 & 로스터리 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT019-coffee",
    servesCuisine: "Coffee",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <div lang="ko" className="ohmt019-coffee">{children}</div>
    </>
  );
}
