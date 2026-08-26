import type { Metadata } from "next";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";

import Navbar from "./_components/layout/Navbar";
import Hero from "./_components/sections/Hero";
import BrandStory from "./_components/sections/BrandStory";
import Featured from "./_components/sections/Featured";
import HowItWorks from "./_components/sections/HowItWorks";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "OHMT Wedding - Home",
};

export default function TemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "OHMT - Wedding Photography",
    "description": "Elegant dark portfolio template for wedding photography and cinematic capture",
    "url": "https://ohmt.site/en/templates/OHMT025-wedding",
    "telephone": "+1-512-555-0199",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Congress Ave",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateWrapper theme={themeData}>
        <Navbar />
        <main>
          <Hero />
          <BrandStory />
          <HowItWorks />
          <Featured />
        </main>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
