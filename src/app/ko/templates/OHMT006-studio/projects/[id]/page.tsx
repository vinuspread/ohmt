import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const current = [resolvedParams["id"]].filter(Boolean).join(' / ');

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-950 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">프로젝트 상세</p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">{current}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">프로젝트 상세 내용을 준비하고 있습니다. 다른 프로젝트는 포트폴리오 목록에서 확인해 주세요.</p>
        <Link href="/ko/templates/OHMT006-studio/projects" className="mt-10 inline-flex min-h-11 items-center justify-center bg-neutral-950 px-6 text-sm font-bold text-white transition-colors hover:bg-neutral-700">목록으로 돌아가기</Link>
      </div>
    </main>
  );
}
