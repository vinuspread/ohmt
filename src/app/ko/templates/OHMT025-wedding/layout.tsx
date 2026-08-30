import "./theme.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 웨딩 포토그래피 템플릿",
  description: "현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록합니다. OHMT의 프리미엄 템플릿입니다.",
  openGraph: {
    title: "OHMT - 프리미엄 웨딩 포토그래피 템플릿",
    description: "현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록합니다. OHMT의 프리미엄 템플릿입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT025-wedding",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 웨딩 포토그래피 템플릿",
    description: "현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록합니다. OHMT의 프리미엄 템플릿입니다.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
};

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div lang="ko" className="ohmt025-wedding">{children}</div>
    </>
  );
}
