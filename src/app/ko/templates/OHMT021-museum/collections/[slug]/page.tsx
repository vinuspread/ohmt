import type { Metadata } from "next";
import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug} | CURA 미술관` };
}

export default async function Page({ params }: PageProps) {
  await params;

  return (
    <TemplatePendingPage
      eyebrow="소장품 상세 페이지"
      title="상세페이지 준비 중"
      description={[
        "소장품 상세 콘텐츠를 준비하고 있습니다.",
        "본 템플릿의 상세페이지는 비공개이며, 작품의 종류와 정보에 따라 달라집니다.",
      ]}
      backHref="/ko/templates/OHMT021-museum/collections"
      backLabel="소장품 목록으로 돌아가기"
    />
  );
}
