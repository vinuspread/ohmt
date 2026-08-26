import type { Metadata } from 'next';
import { headers } from "next/headers";
import { Geist, Cormorant_Garamond, Inter, Playfair_Display, Outfit, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import { KakaoChatButton } from "./_components/KakaoChatButton";
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
  metadataBase: new URL("https://ohmt.site"),
  applicationName: "Oh My Template",
  title: {
    default: "Oh My Template | 맞춤형 홈페이지·웹사이트 제작",
    template: "%s | Oh My Template",
  },
  description: "기업과 브랜드에 맞는 프리미엄 템플릿을 바탕으로 반응형 홈페이지를 기획·디자인·개발합니다. 업종별 웹사이트부터 맞춤 기능과 운영 지원까지 제공합니다.",
  keywords: ["홈페이지 제작", "웹사이트 제작", "기업 홈페이지", "브랜드 웹사이트", "반응형 홈페이지", "쇼핑몰 제작", "웹사이트 템플릿", "맞춤형 웹 개발"],
  authors: [{ name: "Oh My Template by Vinus Spread", url: "https://ohmt.site" }],
  creator: "Vinus Spread",
  publisher: "Vinus Spread",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ohmt.site/ko",
    siteName: "Oh My Template",
    title: "Oh My Template | 맞춤형 홈페이지·웹사이트 제작",
    description: "기업과 브랜드에 맞는 프리미엄 템플릿을 바탕으로 반응형 홈페이지를 기획·디자인·개발합니다.",
    images: [{ url: "https://ohmt.site/og-share-v4.png", secureUrl: "https://ohmt.site/og-share-v4.png", width: 1200, height: 630, alt: "Oh My Template 맞춤형 홈페이지 제작", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oh My Template | 맞춤형 홈페이지·웹사이트 제작",
    description: "기업과 브랜드를 위한 프리미엄 템플릿 기반 맞춤형 웹사이트 제작 서비스입니다.",
    images: ["https://ohmt.site/og-share-v4.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = (await headers()).get("x-ohmt-lang") === "en" ? "en" : "ko";

  return (
    <html lang={language} className={`${geistSans.variable} ${cormorant.variable} ${inter.variable} ${playfair.variable} ${outfit.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <KakaoChatButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ohmt.site/#organization",
                  name: "Oh My Template",
                  alternateName: "OHMT",
                  url: "https://ohmt.site",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://ohmt.site/og-site.png",
                    width: 1200,
                    height: 630,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "vinus@vinus.co.kr",
                    contactType: "customer service",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ohmt.site/#website",
                  url: "https://ohmt.site",
                  name: "Oh My Template",
                  alternateName: "OHMT",
                  description: "Template-based custom website design, development, SEO setup, and maintenance for businesses and brands",
                  publisher: { "@id": "https://ohmt.site/#organization" },
                  inLanguage: ["en", "ko"],
                  about: { "@id": "https://ohmt.site/#service" },
                },
                {
                  "@type": "Service",
                  "@id": "https://ohmt.site/#service",
                  name: "템플릿 기반 맞춤형 홈페이지 제작",
                  serviceType: "Website design and development",
                  description: "비즈니스 목적에 맞는 프리미엄 웹사이트 템플릿과 맞춤형 홈페이지 제작 서비스입니다. 템플릿 선택부터 커스터마이징, 기능 개발까지 상담을 통해 진행합니다.",
                  provider: { "@id": "https://ohmt.site/#organization" },
                  areaServed: ["KR", "US"],
                  audience: {
                    "@type": "Audience",
                    audienceType: "Businesses and brands",
                  },
                },
              ],
            }),
          }}
        />
        {/* Meta Pixel Code (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2135721730688446&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
      {/* Meta Pixel Code */}
      <Script id="meta-pixel-init" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2135721730688446');
        fbq('track', 'PageView');
      `}</Script>
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
