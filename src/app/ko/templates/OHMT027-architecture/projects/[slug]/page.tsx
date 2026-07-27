import TemplatePendingPage from "../../_components/TemplatePendingPage";
import { projects } from "../../data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((item) => item.slug === resolvedParams.slug);

  return (
    <TemplatePendingPage
      eyebrow="OHMT 건축 스튜디오 / 프로젝트"
      title={project?.title ?? "프로젝트 상세"}
      description={[
        "프로젝트 상세 콘텐츠를 준비 중입니다.",
        "실제 적용 시 프로젝트 개요와 도면, 사진, 재료 정보를 구성해 소개할 수 있습니다.",
      ]}
      backHref="/ko/templates/OHMT027-architecture/projects"
      backLabel="프로젝트 목록으로 돌아가기"
    />
  );
}
