import { TemplateWrapper } from "./_components/TemplateWrapper";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Solutions } from "./_components/sections/Solutions";
import { Partners } from "./_components/sections/Partners";
import { Expertise } from "./_components/sections/Expertise";
import { Consulting } from "./_components/sections/Consulting";
import { Cta } from "./_components/sections/Cta";
import { Footer } from "./_components/sections/Footer";

export default function HomePage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <Hero />
      <Solutions />
      <Partners />
      <Expertise />
      <Consulting />
      <Cta />
      <Footer />
    </TemplateWrapper>
  );
}
