import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT | 스페셜티 커피와 로스터리",
  description: "신선하게 로스팅한 원두와 시그니처 음료, 서울 매장 정보를 소개하는 스페셜티 커피 브랜드입니다.",
  openGraph: {
    title: "OHMT | 스페셜티 커피와 로스터리",
    description: "신선하게 로스팅한 원두와 시그니처 음료, 서울 매장 정보를 소개하는 스페셜티 커피 브랜드입니다.",
    url: "https://ohmt.site/ko/templates/OHMT019-coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT019-coffee/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 스페셜티 커피와 로스터리",
    description: "신선하게 로스팅한 원두와 시그니처 음료, 서울 매장 정보를 소개하는 스페셜티 커피 브랜드입니다.",
    images: ["/templates/OHMT019-coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT019-coffee",
    languages: { "en": "https://ohmt.site/en/templates/OHMT019-coffee" },
  },
};

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
      `}</style>
      <div className="ko-coffee">
        <div lang="ko" className="ohmt019-coffee">{children}</div>
      </div>
    </>
  );
}
