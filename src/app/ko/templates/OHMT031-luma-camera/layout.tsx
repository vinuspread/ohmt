import "./theme.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmytemplate.com"),
  title: "OHMT - 루마 카메라",
  description: "작은 바디, 자연스러운 색, 촬영 노트를 함께 보여주는 컴팩트 카메라 랜딩 페이지.",
  openGraph: {
    title: "OHMT - 루마 카메라",
    description: "작은 바디, 자연스러운 색, 촬영 노트를 함께 보여주는 컴팩트 카메라 랜딩 페이지.",
    url: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    siteName: "OHMT",
    images: [{ url: "/templates/luma-camera/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 루마 카메라",
    description: "작은 바디, 자연스러운 색, 촬영 노트를 함께 보여주는 컴팩트 카메라 랜딩 페이지.",
    images: ["/templates/luma-camera/og-image.jpg"],
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

export default function LumaCameraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`luma-camera-template ${geist.variable}`} style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}>
      {children}
    </div>
  );
}
