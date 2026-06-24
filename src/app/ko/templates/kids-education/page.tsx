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
  "name": "키즈 아카데미 - Oh My Template",
  "description": "놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.",
  "url": "https://ohmytemplate.com/ko/templates/OHMT024-kids-education-KO",
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
