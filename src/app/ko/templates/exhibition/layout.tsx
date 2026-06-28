import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "전시 - Oh My Template",
  description: "프리미엄 전시 및 이벤트 경험",
  openGraph: {
    title: "전시 - Oh My Template",
    description: "프리미엄 전시 및 이벤트 경험",
    url: "https://ohmt.site/ko/templates/exhibition",
    siteName: "Oh My Template",
    images: [{ url: "/templates/exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "전시 - Oh My Template",
    description: "프리미엄 전시 및 이벤트 경험",
    images: ["/templates/exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/exhibition",
    languages: { "en": "https://ohmt.site/en/templates/exhibition" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-ko">{children}</div>;
}
