import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - 전시",
  description: "프리미엄 전시 및 이벤트 경험",
  openGraph: {
    title: "OHMT - 전시",
    description: "프리미엄 전시 및 이벤트 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT003-exhibition",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT003-exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 전시",
    description: "프리미엄 전시 및 이벤트 경험",
    images: ["/templates/OHMT003-exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT003-exhibition",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT003-exhibition" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-ko">{children}</div>;
}
