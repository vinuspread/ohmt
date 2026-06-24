import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "버거 - Oh My Template",
  description: "프리미엄 버거 레스토랑 경험",
  openGraph: {
    title: "버거 - Oh My Template",
    description: "프리미엄 버거 레스토랑 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT018-burger-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/burger/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "버거 - Oh My Template",
    description: "프리미엄 버거 레스토랑 경험",
    images: ["/templates/burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT018-burger-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT018-burger-EN" },
  },
};

export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <div className="ko-burger">{children}</div>
    </>
  );
}
