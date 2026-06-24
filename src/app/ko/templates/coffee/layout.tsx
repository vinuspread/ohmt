import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "커피 - Oh My Template",
  description: "프리미엄 커피숍 & 로스터리 경험",
  openGraph: {
    title: "커피 - Oh My Template",
    description: "프리미엄 커피숍 & 로스터리 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT019-coffee-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT019-coffee/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "커피 - Oh My Template",
    description: "프리미엄 커피숍 & 로스터리 경험",
    images: ["/templates/OHMT019-coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT019-coffee-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT019-coffee-EN" },
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
      <div className="ko-coffee">{children}</div>
    </>
  );
}
