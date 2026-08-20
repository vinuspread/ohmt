import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OBERON - Investor Relations Website",
  description: "Corporate strategy and financial performance",
  openGraph: {
    title: "OBERON - Investor Relations Website",
    description: "Corporate strategy and financial performance",
    url: "https://ohmt.site/en/templates/OHMT011-ir",
    siteName: "OBERON",
    images: [{ url: "/templates/OHMT011-ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OBERON - Investor Relations Website",
    description: "Corporate strategy and financial performance",
    images: ["/templates/OHMT011-ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT011-ir",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT011-ir" },
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OBERON Global Holdings",
            url: "https://ohmt.site/en/templates/OHMT011-ir",
            description: "Investor Relations - Corporate strategy and financial performance",
            foundingDate: "2020",
          }),
        }}
      />
      {children}
    </>
  );
}
