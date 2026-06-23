import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Car Concept - Oh My Template (KO)",
  description: "프리미엄 자동차 컨셉 쇼케이스",
  openGraph: {
    title: "Car Concept - Oh My Template (KO)",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT018-car-kr",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT009-car/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Concept - Oh My Template (KO)",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    images: ["/templates/OHMT009-car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT018-car-kr",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT017-car-en" },
  },
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
