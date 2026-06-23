import type { Metadata } from 'next';
import { Geist, Cormorant_Garamond, Inter, Playfair_Display, Outfit, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ohmt.site"),
  title: {
    default: "Oh My Template — Premium Next.js Web Templates",
    template: "%s | Oh My Template",
  },
  description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
  keywords: ["Next.js template", "web template", "premium template", "website template", "brand website"],
  authors: [{ name: "Oh My Template", url: "https://www.ohmt.site" }],
  creator: "Oh My Template",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ohmt.site",
    siteName: "Oh My Template",
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators. Fully customized by our team in 2 days.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Oh My Template" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oh My Template — Premium Next.js Web Templates",
    description: "Premium Next.js web templates for brands, agencies, and creators.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://www.ohmt.site/en",
    languages: {
      en: "https://www.ohmt.site/en",
      ko: "https://www.ohmt.site/ko",
      "x-default": "https://www.ohmt.site/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorant.variable} ${inter.variable} ${playfair.variable} ${outfit.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="25403a14-7d25-4ca1-ba45-abbdad12cd10"
        strategy="afterInteractive"
      />
      {/* GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TN2XSY9H59"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TN2XSY9H59');
      `}</Script>
    </html>
  );
}
