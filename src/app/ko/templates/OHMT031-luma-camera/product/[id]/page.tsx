import { LumaChrome } from "../../_components/LumaChrome";
import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

const productNames: Record<string, string> = {
  "luma-one": "LUMA One",
  "luma-one-pro": "LUMA One Pro",
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const productName = productNames[id] ?? "LUMA Camera";

  return (
    <LumaChrome>
      <TemplatePendingPage
        eyebrow={`${productName} · 상품 상세 페이지`}
        title="상세페이지 준비 중"
        description={[
          `${productName}의 상세 콘텐츠를 준비하고 있습니다.`,
          "본 템플릿의 상품 상세페이지는 비공개이며, 제품 구성과 판매 정보에 따라 달라집니다.",
        ]}
        backHref="/ko/templates/OHMT031-luma-camera"
        backLabel="템플릿으로 돌아가기"
      />
    </LumaChrome>
  );
}
