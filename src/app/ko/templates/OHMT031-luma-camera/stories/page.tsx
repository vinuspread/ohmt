import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const notes = [
  "컬러 레시피를 사진 옆에 둡니다.",
  "초점과 렌즈 메모를 바로 남깁니다.",
  "흩어진 촬영을 쓸 수 있는 묶음으로 정리합니다.",
];

const archiveSteps = [
  {
    title: "세션 노트",
    text: "방의 빛과 온도가 아직 기억날 때 왜 찍었는지 적어둡니다.",
  },
  {
    title: "레시피 기억",
    text: "방, 테이블, 산책에 맞았던 색 조합을 다시 꺼낼 수 있게 둡니다.",
  },
  {
    title: "컬렉션",
    text: "날짜보다 장면과 쓰임을 기준으로 사진을 묶습니다.",
  },
];

export default function StoriesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="bg-[var(--luma-dark)] px-4 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Smartphone size={30} strokeWidth={1.5} />
              <h1 className="mt-6 max-w-3xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                사진을 찍은 이유가 같이 남습니다.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                노트, 레시피, 컬렉션을 사진 가까이에 둡니다. 나중에 파일명만 보고 찾는 일을 줄입니다.
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-ink)]">
              <Image unoptimized src="/templates/luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA 앱 컬렉션 화면과 카메라" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/luma-camera/app-recipe-view.jpg?v=20260702f" alt="LUMA 앱 레시피 화면" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
            </div>
            <div className="grid content-center gap-4">
              {notes.map((note, index) => (
                <div key={note} className="bg-white/55 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">0{index + 1}</p>
                  <h2 className="mt-4 text-2xl font-bold leading-[1.08] tracking-[-0.035em]">{note}</h2>
                </div>
              ))}
              <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex w-fit items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                이미지 엔진 보기 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {archiveSteps.map((step) => (
              <article key={step.title} className="bg-white/55 p-7 md:p-8">
                <h2 className="text-2xl font-bold leading-[1.08] tracking-[-0.035em]">{step.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[var(--luma-dark)] p-8 text-white md:p-10">
              <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.035em]">사진을 관리하기보다, 다시 찾기 쉽게.</h2>
              <p className="mt-5 text-sm leading-6 text-white/64">
                앱은 필요한 메모만 보관합니다. 촬영한 빛, 장소, 이유를 사진 옆에서 확인합니다.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/luma-camera/app-insight.jpg?v=20260702e" alt="카메라 옆 LUMA 앱 화면" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
