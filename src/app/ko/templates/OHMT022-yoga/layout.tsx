import type { Metadata } from "next";
import "./theme.css";
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 요가 웰니스 스튜디오",
  description: "빈야사·하타 요가·명상·필라테스 수업을 비교하고 이번 주 일정을 예약하세요.",
  openGraph: {
    title: "OHMT - 프리미엄 요가 웰니스 스튜디오",
    description: "빈야사·하타 요가·명상·필라테스 수업을 비교하고 이번 주 일정을 예약하세요.",
    url: "https://ohmytemplate.com/ko/templates/OHMT022-yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT022-yoga/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 요가 웰니스 스튜디오",
    description: "빈야사·하타 요가·명상·필라테스 수업을 비교하고 이번 주 일정을 예약하세요.",
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
      <div lang="ko" className="ohmt022-yoga">{children}</div>
    </div>
  );
}
