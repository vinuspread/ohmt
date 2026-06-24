import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Oh My Template Hotel - Oh My Template",
  description: "프리미엄 럭셔리 호텔 & 리조트 경험",
  openGraph: {
    title: "Oh My Template Hotel - Oh My Template",
    description: "프리미엄 럭셔리 호텔 & 리조트 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT020-hotel-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oh My Template Hotel - Oh My Template",
    description: "프리미엄 럭셔리 호텔 & 리조트 경험",
    images: ["/templates/hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT020-hotel-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT020-hotel-EN" },
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700;900&family=Noto+Serif+KR:wght@400;600;700&display=swap');
      `}</style>
      {children}
    </div>
  );
}
