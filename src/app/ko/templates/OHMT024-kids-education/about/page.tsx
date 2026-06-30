import { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import Navbar from "../_components/layout/Navbar";
import AboutContent from "./AboutContent";
import Footer from "../_components/layout/Footer";

export const metadata: Metadata = {
  title: "아카데미 소개 - 키즈 아카데미",
  description: "아이들의 잠재력을 깨우고 미래를 열어가는 키즈 아카데미의 교육 철학 및 선생님들을 소개합니다.",
};

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
