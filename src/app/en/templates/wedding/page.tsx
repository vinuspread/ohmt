import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";

import Navbar from "./_components/layout/Navbar";
import Hero from "./_components/sections/Hero";
import BrandStory from "./_components/sections/BrandStory";
import Featured from "./_components/sections/Featured";
import HowItWorks from "./_components/sections/HowItWorks";
import Footer from "./_components/layout/Footer";

export default function TemplatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Oh My Template - Wedding Photography",
    "description": "Elegant dark portfolio template for wedding photography and cinematic capture",
    "url": "https://ohmytemplate.com/en/templates/OHMT049-wedding-en",
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
        <Footer />
      </TemplateWrapper>
    </>
  );
}
