import "./theme.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import DevicePreviewShell from "@/components/DevicePreviewShell";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmytemplate.com"),
  title: "OHMT - LUMA Camera",
  description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
  openGraph: {
    title: "OHMT - LUMA Camera",
    description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
    url: "https://ohmytemplate.com/en/templates/OHMT031-luma-camera",
    siteName: "OHMT",
    images: [{ url: "/templates/luma-camera/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    alternateLocale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - LUMA Camera",
    description: "A premium compact camera landing page for creators who want quiet hardware and serious image quality.",
    images: ["/templates/luma-camera/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT031-luma-camera",
    languages: {
      en: "https://ohmytemplate.com/en/templates/OHMT031-luma-camera",
      ko: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
    },
  },
};

export default function LumaCameraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`luma-camera-template ${geist.variable}`} style={{ fontFamily: "var(--font-geist), Arial, sans-serif" }}>
      <DevicePreviewShell>{children}</DevicePreviewShell>
    </div>
  );
}
