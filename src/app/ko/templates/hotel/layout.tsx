import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "호텔·리조트 웹사이트 템플릿 | OHMT",
  description: "프리미엄 호텔·리조트를 위한 웹사이트 템플릿입니다. 객실 소개, 어메니티, 예약 유도 섹션을 포함합니다.",
  openGraph: {
    title: "호텔·리조트 웹사이트 템플릿 | OHMT",
    description: "프리미엄 호텔·리조트를 위한 웹사이트 템플릿입니다. 객실 소개, 어메니티, 예약 유도 섹션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/hotel",
    siteName: "OHMT",
    images: [{ url: "/templates/hotel/og-image.jpg", width: 1200, height: 630, alt: "호텔·리조트 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "호텔·리조트 웹사이트 템플릿 | OHMT",
    description: "프리미엄 호텔·리조트를 위한 웹사이트 템플릿입니다. 객실 소개, 어메니티, 예약 유도 섹션을 포함합니다.",
    images: ["/templates/hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/hotel",
    languages: { "en": "https://ohmt.site/en/templates/hotel" },
  },
};

import './theme.css';



export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hotel-ko">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700;900&family=Noto+Serif+KR:wght@400;600;700&display=swap');
      `}</style>
      {children}
    </div>
  );
}
