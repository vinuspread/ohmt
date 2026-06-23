import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "전시 - Oh My Template",
  description: "프리미엄 전시 및 이벤트 경험",
  openGraph: {
    title: "전시 - Oh My Template",
    description: "프리미엄 전시 및 이벤트 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT006-exhibition-kr",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT003-exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "전시 - Oh My Template",
    description: "프리미엄 전시 및 이벤트 경험",
    images: ["/templates/OHMT003-exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT006-exhibition-kr",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT005-exhibition-en" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-ko">{children}</div>;
}
