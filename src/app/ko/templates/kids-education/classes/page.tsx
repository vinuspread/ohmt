import { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import ClassesContent from "./ClassesContent";
import Footer from "../_components/layout/Footer";

export const metadata: Metadata = {
  title: "창의 클래스 - 키즈 아카데미",
  description: "꼬마 과학자의 날, 코딩 축제, 수학 모험 캠프 등 아이들을 위한 다채롭고 창의적인 클래스 목록을 확인해 보세요.",
};

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
