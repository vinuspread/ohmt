import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { CLASSES } from "../constants";
import theme from "../theme.json";
import ClassesExplorer from "./_components/ClassesExplorer";

export default function ClassesPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero
          eyebrow="CLASSES"
          title="오늘 움직이고 싶은 방식으로 고르세요"
          description="속도와 난이도, 시간을 먼저 비교하세요. 모든 수업은 오늘의 몸 상태에 맞게 조절할 수 있습니다."
          image="/templates/OHMT022-yoga/subpage-classes-v3.webp"
          imageAlt="식물이 있는 밝은 스튜디오에서 함께 요가를 수련하는 세 사람"
        />
        <ClassesExplorer classes={CLASSES} />
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
