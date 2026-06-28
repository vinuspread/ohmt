import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "키즈 아카데미 - Oh My Template",
  description: "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.",
  keywords: ["어린이 교육", "어린이 클래스", "창의 아카데미", "학습 플랫폼", "Oh My Template"],
  openGraph: {
    title: "키즈 아카데미 - Oh My Template",
    description: "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.",
    url: "https://ohmt.site/ko/templates/kids-education",
    siteName: "Oh My Template",
    images: [{ url: "/templates/kids-education/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "키즈 아카데미 - Oh My Template",
    description: "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.",
    images: ["/templates/kids-education/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/kids-education",
    languages: { "en": "https://ohmt.site/en/templates/kids-education" },
  },
};

export default function KidsEducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kids-education-ko">
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
