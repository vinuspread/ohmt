import type { Metadata } from "next";
import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} - OHMT Yoga` };
}

export default async function Page({ params }: PageProps) {
  await params;

  return (
    <TemplatePendingPage
      eyebrow="Class detail page"
      title="Detail page coming soon"
      description={[
        "We are preparing the class details.",
        "This template keeps detail pages private because their content varies by class type and information.",
      ]}
      backHref="/en/templates/OHMT022-yoga/classes"
      backLabel="Back to classes"
    />
  );
}
