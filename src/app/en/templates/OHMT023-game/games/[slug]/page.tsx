import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["slug"]].filter(Boolean).join(' / ');

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-950 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">OHMT023-game / Detail page</p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">{current}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">Content is being prepared. This fallback detail view keeps linked pages from rendering blank.</p>
        <Link href="/en/templates/OHMT023-game/games" className="mt-10 inline-flex min-h-11 items-center justify-center bg-neutral-950 px-6 text-sm font-bold text-white transition-colors hover:bg-neutral-700">Back to listing</Link>
      </div>
    </main>
  );
}
