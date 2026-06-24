import { Metadata } from "next";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import themeData from "../../theme.json";
import Navbar from "../../_components/layout/Navbar";
import ClassDetailContent from "./ClassDetailContent";
import Footer from "../../_components/layout/Footer";
import { classes } from "../../data/data";

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const classItem = classes.find((c) => c.id === params.id);
  return {
    title: classItem ? `${classItem.title} - 키즈 아카데미` : "클래스 상세 정보 - 키즈 아카데미",
    description: classItem ? classItem.description : "키즈 아카데미 창의 클래스의 상세 정보를 확인해 보세요.",
  };
}

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
