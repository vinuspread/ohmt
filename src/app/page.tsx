import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://ohmt.site"),
  title: "오마이템플릿 | 프리미엄 웹·앱 템플릿",
  description: "웹사이트·앱·서비스 제작을 위한 프리미엄 템플릿과 맞춤 개발 서비스를 제공합니다.",
  openGraph: {
    title: "오마이템플릿 | 프리미엄 웹·앱 템플릿",
    description: "웹사이트·앱·서비스 제작을 위한 프리미엄 템플릿과 맞춤 개발 서비스를 제공합니다.",
    url: "https://ohmt.site",
    siteName: "Oh My Template",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://ohmt.site/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "오마이템플릿 - 프리미엄 웹·앱 템플릿",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오마이템플릿 | 프리미엄 웹·앱 템플릿",
    description: "웹사이트·앱·서비스 제작을 위한 프리미엄 템플릿과 맞춤 개발 서비스를 제공합니다.",
    images: ["https://ohmt.site/og-image-v2.png"],
  },
};

export default async function RootPage() {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";
  const isCrawler = /bot|crawl|spider|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram|slack|discord|kakaotalk|Iframely|Threads/i.test(ua);

  if (!isCrawler) {
    redirect("/ko");
  }

  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>오마이템플릿</h1>
      <p>웹사이트·앱·서비스 제작을 위한 프리미엄 템플릿과 맞춤 개발 서비스를 제공합니다.</p>
      <a href="/ko">한국어</a> · <a href="/en">English</a>
    </main>
  );
}
