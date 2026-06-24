import { TemplateWrapper } from "../../_components/TemplateWrapper";
import themeData from "../../theme.json";
import Navbar from "../../_components/layout/Navbar";
import ClassDetailContent from "./ClassDetailContent";
import Footer from "../../_components/layout/Footer";

export function generateStaticParams() {
  return [{ id: "coding" }, { id: "art" }, { id: "science" }, { id: "math" }];
}

export default function ClassDetailPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <Navbar />
      <main>
        <ClassDetailContent />
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
