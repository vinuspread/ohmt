import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 항공 경험",
  description: "프리미엄 항공 경험",
  openGraph: {
    title: "OHMT - 프리미엄 항공 경험",
    description: "프리미엄 항공 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT008-airline",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT008-airline/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 항공 경험",
    description: "프리미엄 항공 경험",
    images: ["/templates/OHMT008-airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT008-airline",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT008-airline" },
  },
};

export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt008-airline">{children}</div>
    </>
  );
}
