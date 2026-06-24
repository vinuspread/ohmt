import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import ClassesContent from "./ClassesContent";
import Footer from "../_components/layout/Footer";

export default function ClassesPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <Navbar />
      <main>
        <ClassesContent />
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
