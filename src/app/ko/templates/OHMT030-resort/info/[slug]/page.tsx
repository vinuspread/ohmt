import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const pages: Record<string, { title: string; description: string[] }> = {
  privacy: {
    title: "개인정보처리방침 준비 중",
    description: [
      "개인정보 수집과 이용, 보관에 관한 안내를 준비하고 있습니다.",
      "실제 운영 시 리조트의 예약 및 고객 관리 정책에 맞는 내용을 제공할 수 있습니다.",
    ],
  },
  terms: {
    title: "이용약관 준비 중",
    description: [
      "예약과 숙박, 부대시설 이용 조건에 관한 안내를 준비하고 있습니다.",
      "실제 운영 시 취소 및 환불 정책을 포함한 상세 약관을 제공할 수 있습니다.",
    ],
  },
};

export default async function InfoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug] ?? {
    title: "안내 페이지 준비 중",
    description: [
      "요청하신 페이지의 콘텐츠를 준비하고 있습니다.",
      "리조트 운영에 필요한 안내를 구성해 제공할 수 있습니다.",
    ],
  };

  return (
    <TemplatePendingPage
      eyebrow="OHMT RESORT · INFORMATION"
      title={page.title}
      description={page.description}
      backHref="/ko/templates/OHMT030-resort"
      backLabel="리조트 홈으로 돌아가기"
    />
  );
}
