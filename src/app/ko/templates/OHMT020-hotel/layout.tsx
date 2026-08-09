import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT | 코사무이 럭셔리 리조트",
  description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
  openGraph: {
    title: "OHMT | 코사무이 럭셔리 리조트",
    description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
    url: "https://ohmt.site/ko/templates/OHMT020-hotel",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT020-hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 코사무이 럭셔리 리조트",
    description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
    images: ["/templates/OHMT020-hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT020-hotel",
    languages: { "en": "https://ohmt.site/en/templates/OHMT020-hotel" },
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hotel-ko">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@400;500;600&family=Noto+Serif+KR:wght@400;600;700&display=swap');
      `}</style>
      <div lang="ko" className="ohmt020-hotel">{children}</div>
    </div>
  );
}
