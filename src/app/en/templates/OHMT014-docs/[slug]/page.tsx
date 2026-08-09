import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocDetailShell from "../_components/DocDetailShell";
import { docPages } from "../data/pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return docPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = docPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} - Docs`,
    description: page.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = docPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const siblings = docPages
    .filter((item) => item.parent === page.parent)
    .sort((a, b) => a.order - b.order);
  const currentIndex = siblings.findIndex((item) => item.slug === page.slug);
  const parent = page.parent
    ? docPages.find((item) => item.slug === page.parent)
    : undefined;

  return (
    <DocDetailShell
      page={page}
      parent={parent}
      prev={siblings[currentIndex - 1]}
      next={siblings[currentIndex + 1]}
    />
  );
}
