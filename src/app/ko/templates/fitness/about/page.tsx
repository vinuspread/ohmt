import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Navbar } from "../_components/Navbar";
import { AboutHero } from "../_components/about/AboutHero";
import { StudioTimeline } from "../_components/about/StudioTimeline";
import { Values } from "../_components/about/Values";
import { Consulting } from "../_components/sections/Consulting";
import { Footer } from "../_components/sections/Footer";

export default function AboutPage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <AboutHero />
      <StudioTimeline />
      <Values />
      <Consulting variant="about" />
      <Footer />
    </TemplateWrapper>
  );
}
