import TemplatePendingPage from "../../_components/TemplatePendingPage";

export default function Page() {
  return (
    <TemplatePendingPage
      eyebrow="웨딩 스토리"
      title="상세 페이지 준비 중"
      description={[
        "웨딩 스토리의 상세 콘텐츠를 준비하고 있습니다.",
        "실제 프로젝트에서는 촬영 장소와 일정, 사진 갤러리를 구성해 소개할 수 있습니다.",
      ]}
      backHref="/ko/templates/OHMT025-wedding/gallery"
      backLabel="갤러리로 돌아가기"
    />
  );
}
