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
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">OHMT022-yoga / 상세 페이지</p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">{current}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">콘텐츠를 준비 중입니다. 연결된 페이지가 빈 화면으로 보이지 않도록 기본 상세 화면을 제공합니다.</p>
        <Link href="/ko/templates/OHMT022-yoga/classes" className="mt-10 inline-flex min-h-11 items-center justify-center bg-neutral-950 px-6 text-sm font-bold text-white transition-colors hover:bg-neutral-700">목록으로 돌아가기</Link>
      </div>
    </main>
  );
}
