import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT | 요가·필라테스 스튜디오",
  description: "빈야사와 하타 요가, 명상, 필라테스 클래스와 주간 일정을 확인하고 예약할 수 있습니다.",
  openGraph: {
    title: "OHMT | 요가·필라테스 스튜디오",
    description: "빈야사와 하타 요가, 명상, 필라테스 클래스와 주간 일정을 확인하고 예약할 수 있습니다.",
    url: "https://ohmt.site/ko/templates/OHMT022-yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT022-yoga/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 요가·필라테스 스튜디오",
    description: "빈야사와 하타 요가, 명상, 필라테스 클래스와 주간 일정을 확인하고 예약할 수 있습니다.",
    images: ["/templates/OHMT022-yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT022-yoga",
    languages: { "en": "https://ohmt.site/en/templates/OHMT022-yoga" },
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
      <div lang="ko" className="ohmt022-yoga">{children}</div>
    </div>
  );
}
