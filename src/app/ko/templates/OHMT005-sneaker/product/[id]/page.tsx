import TemplatePendingPage from "../../_components/TemplatePendingPage";

export default function Page() {
  return (
    <TemplatePendingPage
      eyebrow="상품 상세 페이지"
      title="상세페이지 준비중."
      description={[
        "상세페이지 콘텐츠를 준비 중입니다.",
        "본 템플릿의 상세페이지는 비공개이며, 제품의 종류와 정보에 따라 달라집니다.",
      ]}
      backHref="/ko/templates/OHMT005-sneaker"
      backLabel="템플릿으로 돌아가기"
    />
  );
}
