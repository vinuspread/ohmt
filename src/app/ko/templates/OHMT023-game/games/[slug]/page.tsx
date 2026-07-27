import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["slug"]].filter(Boolean).join(' / ');

  return (
    <TemplatePendingPage
      eyebrow="게임 상세 페이지"
      title={current}
      description={[
        "게임 정보를 준비하고 있습니다.",
        "곧 세계관과 플레이 정보를 자세히 확인할 수 있습니다.",
      ]}
      backHref="/ko/templates/OHMT023-game/games"
      backLabel="게임 목록으로 돌아가기"
    />
  );
}
