import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const pages: Record<string, { title: string; description: string[] }> = {
  privacy: {
    title: "개인정보처리방침 준비 중",
    description: [
      "개인정보 수집과 이용, 보관에 관한 안내를 준비하고 있습니다.",
      "실제 서비스에서는 운영 정책에 맞는 내용을 구성해 제공할 수 있습니다.",
    ],
  },
  terms: {
    title: "이용약관 준비 중",
    description: [
      "서비스 이용 조건과 절차에 관한 안내를 준비하고 있습니다.",
      "실제 서비스에서는 운영 정책에 맞는 내용을 구성해 제공할 수 있습니다.",
    ],
  },
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug] ?? {
    title: "안내 페이지 준비 중",
    description: [
      "해당 페이지의 콘텐츠를 준비하고 있습니다.",
      "실제 서비스에 필요한 안내 내용을 구성해 제공할 수 있습니다.",
    ],
  };

  return (
    <TemplatePendingPage
      eyebrow="NUBI 안내"
      title={page.title}
      description={page.description}
      backHref="/ko/templates/OHMT028-ev"
      backLabel="NUBI 홈으로 돌아가기"
    />
  );
}
