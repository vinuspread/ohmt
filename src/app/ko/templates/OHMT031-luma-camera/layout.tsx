import "./theme.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmt.site"),
  title: "OHMT | LUMA 컴팩트 카메라",
  description: "45MP 센서와 28mm 고정식 렌즈, 자연스러운 색 표현과 촬영 노트 기능을 갖춘 LUMA 컴팩트 카메라입니다.",
  openGraph: {
    title: "OHMT | LUMA 컴팩트 카메라",
    description: "45MP 센서와 28mm 고정식 렌즈, 자연스러운 색 표현과 촬영 노트 기능을 갖춘 LUMA 컴팩트 카메라입니다.",
    url: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT031-luma-camera/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | LUMA 컴팩트 카메라",
    description: "45MP 센서와 28mm 고정식 렌즈, 자연스러운 색 표현과 촬영 노트 기능을 갖춘 LUMA 컴팩트 카메라입니다.",
    images: ["/templates/OHMT031-luma-camera/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
    languages: {
      en: "https://ohmt.site/en/templates/OHMT031-luma-camera",
      ko: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT | LUMA 컴팩트 카메라",
  description: "45MP 센서와 28mm 고정식 렌즈, 자연스러운 색 표현과 촬영 노트 기능을 갖춘 LUMA 컴팩트 카메라입니다.",
  url: "https://ohmt.site/ko/templates/OHMT031-luma-camera",
};

export default function LumaCameraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
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
