import type { Metadata } from "next";
import TemplatePendingPage from "../../_components/TemplatePendingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug.replace(/-/g, " ")} - OHMT Game Studio` };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["slug"]].filter(Boolean).join(' / ');

  return (
    <TemplatePendingPage
      eyebrow="Game detail page"
      title={current}
      description={[
        "We are preparing this game’s detailed content.",
        "Its world, systems, and release information will be available soon.",
      ]}
      backHref="/en/templates/OHMT023-game/games"
      backLabel="Back to all games"
    />
  );
}
