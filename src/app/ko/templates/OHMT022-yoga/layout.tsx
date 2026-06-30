import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT - 요가",
  description: "프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾으세요",
  openGraph: {
    title: "OHMT - 요가",
    description: "프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾으세요",
    url: "https://ohmytemplate.com/ko/templates/OHMT022-yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT022-yoga/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 요가",
    description: "프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾으세요",
    images: ["/templates/OHMT022-yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT022-yoga",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT022-yoga" },
  },
};

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="yoga-ko">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

        :root {
          --font-pretendard: 'Pretendard', sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}
