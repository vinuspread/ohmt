import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["slug"]].filter(Boolean).join(' / ');

  return (
    <TemplatePendingPage
      eyebrow="OHMT 스파 / 서비스"
      title={current}
      description={[
        "서비스 상세 정보를 준비하고 있습니다.",
        "실제 프로젝트에서는 관리 과정과 소요 시간, 주의사항을 구성해 안내할 수 있습니다.",
      ]}
      backHref="/ko/templates/OHMT026-spa/service"
      backLabel="서비스 목록으로 돌아가기"
    />
  );
}
