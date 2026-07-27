import { Michroma, Inter } from "next/font/google";
import "./theme.css";
import type { Metadata } from "next";
import { TemplateWrapper } from "./_components/TemplateWrapper";

export const metadata: Metadata = {
  title: "OHMT | NUBI 도심형 전기차",
  description: "도심 주행에 알맞은 크기와 민첩한 움직임, 실용적인 주행거리를 갖춘 전기차 NUBI를 소개합니다.",
  keywords: ["전기차 템플릿", "EV 랜딩페이지", "NUBI", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT | NUBI 도심형 전기차",
    description: "도심 주행에 알맞은 크기와 민첩한 움직임, 실용적인 주행거리를 갖춘 전기차 NUBI를 소개합니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT028-ev",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT028-ev/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | NUBI 도심형 전기차",
    description: "도심 주행에 알맞은 크기와 민첩한 움직임, 실용적인 주행거리를 갖춘 전기차 NUBI를 소개합니다.",
    images: ["/templates/OHMT028-ev/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT028-ev",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT028-ev",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT028-ev",
    },
  },
};

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${michroma.variable} ${inter.variable}`} style={{ fontFamily: "'Pretendard Variable', Pretendard, var(--font-inter), sans-serif" }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <TemplateWrapper>
          <div lang="ko" className="ohmt028-ev">{children}</div>
        </TemplateWrapper>
    </div>
  );
}
