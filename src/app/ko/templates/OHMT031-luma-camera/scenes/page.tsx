import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const scenes = [
  {
    title: "아침 거리",
    text: "코트 곁에 두고 나가도 어색하지 않은, 하루가 굳기 전의 카메라.",
    image: "/templates/luma-camera/scene-travel-morning.jpg?v=20260702f",
  },
  {
    title: "키친 카운터",
    text: "음식, 세라믹, 포장, 메모가 같은 작업대 위에 놓인 순간.",
    image: "/templates/luma-camera/scene-kitchen-counter.jpg?v=20260702f",
  },
  {
    title: "작업실",
    text: "소재 샘플, 스케치, 작은 오브젝트를 큰 세팅 없이 기록합니다.",
    image: "/templates/luma-camera/scene-workshop.jpg?v=20260702f",
  },
  {
    title: "조용한 저녁",
    text: "장비가 커지는 순간 분위기가 달라지는 방을 위한 작은 카메라.",
    image: "/templates/luma-camera/quiet-dinner.jpg?v=20260702e",
  },
];

const fieldRules = [
  {
    title: "빠르게 준비됨",
    text: "피사체가 카메라를 의식하기 전에 켜집니다.",
  },
  {
    title: "작게 머무름",
    text: "방이 스스로의 분위기를 유지할 만큼만 존재합니다.",
  },
  {
    title: "톤을 지킴",
    text: "아침의 온기, 저녁의 푸른빛, 촛불의 색을 각각 남깁니다.",
  },
];

export default function ScenesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1380px]">
            <h1 className="max-w-4xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              장면이 포즈를 취하기 전에.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--luma-muted)]">
              LUMA는 평범한 방, 테이블, 산책에 가까이 머물며 순간을 억지로 연출하지 않습니다.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {scenes.map((scene) => (
              <article key={scene.title} className="group relative aspect-[7/5] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src={scene.image} alt={`${scene.title} 속 LUMA 카메라`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-6 text-white md:p-8">
                  <h2 className="text-2xl font-bold tracking-[-0.035em] md:text-3xl">{scene.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/72">{scene.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-8 bg-white/55 p-7 md:flex-row md:items-center md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-0.035em]">쓸모 있는 카메라는 가까이에 있을 때 더 자주 쓰입니다.</h2>
            <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
              LUMA 예약하기 <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                카메라가 방을 연출하게 만들지 않도록.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--luma-muted)]">
                좋은 장면은 평범하게 있다가, 큰 카메라가 들어오는 순간 자기 자신을 의식합니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {fieldRules.map((rule) => (
                <article key={rule.title} className="bg-white/55 p-7">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">{rule.title}</h3>
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
