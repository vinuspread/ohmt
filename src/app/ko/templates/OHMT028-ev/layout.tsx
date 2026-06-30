import { Michroma, Inter } from "next/font/google";
import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - NUBI 전기차",
  description: "미니멀한 어반 EV 브랜드 NUBI — 작은 차, 큰 재미. 제로 배출, 올 캐릭터.",
  keywords: ["전기차 템플릿", "EV 랜딩페이지", "NUBI", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT - NUBI 전기차",
    description: "미니멀한 어반 EV 브랜드 NUBI — 작은 차, 큰 재미. 제로 배출, 올 캐릭터.",
    url: "https://ohmytemplate.com/ko/templates/OHMT028-ev",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT028-ev/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - NUBI 전기차",
    description: "미니멀한 어반 EV 브랜드 NUBI — 작은 차, 큰 재미. 제로 배출, 올 캐릭터.",
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
    <div className={`${michroma.variable} ${inter.variable}`}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');`}</style>
      {children}
    </div>
  );
}
