import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";
import { ResponsiveText } from "../_components/ResponsiveText";

const scenes = [
  {
    title: "아침 거리",
    text: "외출할 때 부담 없이 챙겨 아침 거리의 순간을 빠르게 기록합니다.",
    image: "/templates/OHMT031-luma-camera/morning-street.jpg?v=20260810a",
  },
  {
    title: "주방 작업대",
    text: "음식과 세라믹, 포장재와 메모가 놓인 작업대의 색과 질감을 담습니다.",
    image: "/templates/OHMT031-luma-camera/scene-kitchen-counter.jpg?v=20260702f",
  },
  {
    title: "작업실",
    text: "큰 촬영 장비 없이 소재 샘플과 스케치, 작은 오브젝트를 기록합니다.",
    image: "/templates/OHMT031-luma-camera/scene-workshop.jpg?v=20260702f",
  },
  {
    title: "조용한 저녁",
    text: "작은 바디와 조용한 셔터로 실내 분위기를 방해하지 않고 촬영합니다.",
    image: "/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e",
  },
];

const fieldRules = [
  {
    title: "빠른 시작",
    text: "빠른 전원 시작으로 자연스러운 순간을 놓치지 않습니다.",
  },
  {
    title: "작고 조용한 바디",
    text: "작은 크기와 조용한 동작으로 촬영 환경에 자연스럽게 어울립니다.",
  },
  {
    title: "빛의 색 유지",
    text: "아침의 따뜻함과 저녁의 푸른빛, 촛불의 색을 자연스럽게 구분해 담습니다.",
  },
];

export default function ScenesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-9 md:py-24">
          <div className="mx-auto max-w-[1380px]">
            <h1 className="luma-h1 max-w-4xl">
              연출하기 전의 자연스러운 순간.</h1>
            <p className="luma-body mt-6 max-w-2xl">
              <ResponsiveText>
                {"LUMA는 일상의 방과 테이블, 산책길에서\n과한 연출 없이 자연스러운 순간을 기록합니다."}
              </ResponsiveText>
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {scenes.map((scene) => (
              <article key={scene.title} className="group relative aspect-[7/5] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src={scene.image} alt={`${scene.title} 속 LUMA 카메라`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-6 text-white md:p-9">
                  <h2 className="text-2xl font-bold tracking-[-0.035em] md:text-3xl break-keep">{scene.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">{scene.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-9 luma-card md:flex-row md:items-center">
            <h2 className="luma-h2-sm max-w-2xl">가까이 두고 자주 사용할 수 있는 카메라.</h2>
            <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
              LUMA 구매하기<ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="luma-h2">
                촬영 때문에 공간의 분위기가 달라지지 않도록.</h2>
              <p className="luma-body mt-6 max-w-xl">
                <ResponsiveText>
                  {"작고 조용한 카메라는 피사체가 촬영을 의식하기 전에\n자연스러운 모습을 담을 수 있습니다."}
                </ResponsiveText>
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {fieldRules.map((rule) => (
                <article key={rule.title} className="luma-card">
                  <h3 className="luma-h3">{rule.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{rule.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
