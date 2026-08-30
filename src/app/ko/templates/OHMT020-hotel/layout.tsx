import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 호텔 & 리조트 템플릿",
  description: "프리미엄 럭셔리 호텔 & 리조트 경험",
  openGraph: {
    title: "OHMT - 프리미엄 호텔 & 리조트 템플릿",
    description: "프리미엄 럭셔리 호텔 & 리조트 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT020-hotel",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT020-hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 호텔 & 리조트 템플릿",
    description: "프리미엄 럭셔리 호텔 & 리조트 경험",
    images: ["/templates/OHMT020-hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT020-hotel",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT020-hotel" },
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hotel-ko">
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt020-hotel">{children}</div>
    </div>
  );
}
