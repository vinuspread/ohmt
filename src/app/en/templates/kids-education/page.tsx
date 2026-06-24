import { TemplateWrapper } from "./_components/TemplateWrapper";
import themeData from "./theme.json";
import Navbar from "./_components/layout/Navbar";
import Hero from "./_components/sections/Hero";
import Classes from "./_components/sections/Classes";
import Mission from "./_components/sections/Mission";
import PhotoSection from "./_components/sections/PhotoSection";
import Schedule from "./_components/sections/Schedule";
import Testimonials from "./_components/sections/Testimonials";
import Footer from "./_components/layout/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Oh My Template - Creative Academy",
  "description": "Playful and colorful children education platform with creative classes",
  "url": "https://ohmytemplate.com/en/templates/OHMT024-kids-education-EN",
};

export default function KidsEducationPage() {
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
          <Classes />
          <Mission />
          <PhotoSection />
          <Schedule />
          <Testimonials />
        </main>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
