import "./theme.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmytemplate.com"),
  title: "LUMA - 루마 카메라",
  description: "작은 바디와 자연스러운 색, 촬영 노트까지 함께 남기는 컴팩트 카메라 랜딩 페이지.",
  openGraph: {
    title: "LUMA - 루마 카메라",
    description: "작은 바디와 자연스러운 색, 촬영 노트까지 함께 남기는 컴팩트 카메라 랜딩 페이지.",
    url: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    siteName: "LUMA",
    images: [{ url: "/templates/OHMT031-luma-camera/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMA - 루마 카메라",
    description: "작은 바디와 자연스러운 색, 촬영 노트까지 함께 남기는 컴팩트 카메라 랜딩 페이지.",
    images: ["/templates/OHMT031-luma-camera/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    languages: {
      en: "https://ohmytemplate.com/en/templates/OHMT031-luma-camera",
      ko: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LUMA - 루마 카메라",
  description: "작은 바디와 자연스러운 색, 촬영 노트까지 함께 남기는 컴팩트 카메라 랜딩 페이지.",
  url: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
};

export default function LumaCameraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`luma-camera-template luma-camera-template-ko ${geist.variable}`} style={{ fontFamily: "'Pretendard Variable', Pretendard, var(--font-geist), Arial, sans-serif" }}>
      <div lang="ko" className="ohmt031-luma-camera">{children}</div>
    </div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
