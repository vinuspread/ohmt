import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["slug"]].filter(Boolean).join(' / ');

  return (
    <TemplatePendingPage
      eyebrow="SERENITY 스파 / 블로그"
      title={current}
      description={[
        "블로그 상세 콘텐츠를 준비하고 있습니다.",
        "실제 프로젝트에서는 관리 방법과 주의사항, 전문가의 안내를 구성해 소개할 수 있습니다.",
      ]}
      backHref="/ko/templates/OHMT026-spa/blog"
      backLabel="블로그 목록으로 돌아가기"
    />
  );
}
