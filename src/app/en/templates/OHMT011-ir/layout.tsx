import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Investor Relations Website Template",
  description: "Corporate strategy and financial performance",
  openGraph: {
    title: "OHMT - Investor Relations Website Template",
    description: "Corporate strategy and financial performance",
    url: "https://ohmytemplate.com/en/templates/OHMT011-ir",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT011-ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Investor Relations Website Template",
    description: "Corporate strategy and financial performance",
    images: ["/templates/OHMT011-ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT011-ir",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT011-ir" },
  },
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OBERON Global Holdings",
            url: "https://ohmytemplate.com/en/templates/OHMT011-ir",
            description: "Investor Relations - Corporate strategy and financial performance",
            foundingDate: "2020",
          }),
        }}
      />
      {children}
    </>
  );
}
