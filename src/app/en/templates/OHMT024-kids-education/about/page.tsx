import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import AboutContent from "./AboutContent";
import Footer from "../_components/layout/Footer";

export default function AboutPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
