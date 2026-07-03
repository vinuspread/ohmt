import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Focus, Moon, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const samples = [
  {
    label: "컬러",
    title: "피부, 세라믹, 과일, 금속이 같은 빛 안에 머뭅니다.",
    text: "따뜻한 자연광은 살리고, 색을 프리셋처럼 한쪽으로 밀지 않습니다.",
    image: "/templates/luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    label: "저조도",
    title: "창밖의 푸른빛과 램프의 온도를 함께 둡니다.",
    text: "그림자는 보이게 두고, 장면에 어울리는 만큼의 입자만 남깁니다.",
    image: "/templates/luma-camera/engine-lowlight-room.jpg?v=20260702f",
  },
  {
    label: "디테일",
    title: "질감은 읽히고, 가장자리는 거칠지 않습니다.",
    text: "종이, 천, 브러시드 메탈, 세라믹 유약을 샤프닝 테스트처럼 만들지 않습니다.",
    image: "/templates/luma-camera/engine-texture-close.jpg?v=20260702f",
  },
];

const profileNotes = [
  {
    title: "기본 프로파일",
    text: "피부, 음식, 돌, 천, 나무를 자주 찍는 사람을 위한 따뜻한 출발점입니다.",
  },
  {
    title: "저조도 프로파일",
    text: "램프는 따뜻하게, 그림자는 푸르게 남깁니다. 방 전체를 한 색으로 밀지 않습니다.",
  },
  {
    title: "디테일 프로파일",
    text: "질감은 남기고, 가장자리는 지나치게 딱딱하게 세우지 않습니다.",
  },
];

const workflow = [
  "중립 프로파일로 찍거나 저장해둔 컬러 레시피에서 시작합니다.",
  "초점, 렌즈, 시간, 위치를 기억이 선명할 때 남깁니다.",
  "비슷한 빛과 장소를 나중에 다시 찾을 수 있게 컬렉션으로 묶습니다.",
];

export default function ImageEnginePage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Focus size={28} strokeWidth={1.5} />
              <h1 className="mt-6 max-w-3xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                다시 열어도 낯설지 않은 파일.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--luma-muted)]">
                LUMA는 색, 입자, 표면 질감을 과하게 정리하지 않습니다. 눈으로 본 장면에 가까운 쪽을 고릅니다.
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/luma-camera/sample-color.jpg?v=20260702e" alt="따뜻한 자연광의 LUMA 컬러 샘플" fill priority className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {samples.map((sample) => (
              <article key={sample.label} className="bg-white/50">
                <div className="relative aspect-[7/5] overflow-hidden">
                  <Image unoptimized src={sample.image} alt={`LUMA ${sample.label} 샘플`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{sample.label}</p>
                  <h2 className="mt-4 text-2xl font-bold leading-[1.05] tracking-[-0.04em]">{sample.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{sample.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--luma-dark)] px-4 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-3">
            <div>
              <Moon size={26} strokeWidth={1.5} />
              <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.035em]">ISO 12800에서도 빛의 온도를 남깁니다.</h2>
            </div>
            <div>
              <Smartphone size={26} strokeWidth={1.5} />
              <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.035em]">레시피는 사진 곁에 둡니다.</h2>
            </div>
            <div className="flex items-end">
              <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)]">
                카메라 선택하기 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                세 가지 프로파일로 출발점을 정합니다.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--luma-muted)]">
                필터처럼 덮는 방식이 아닙니다. 보정 전에 파일의 온도와 대비를 먼저 맞춥니다.
              </p>
            </div>
            <div className="grid gap-4">
              {profileNotes.map((item) => (
                <article key={item.title} className="bg-white/55 p-7 md:p-8">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[460px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/luma-camera/app-recipe-view.jpg?v=20260702f" alt="이미지 레시피와 노트를 저장하는 LUMA 앱" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="bg-white/55 p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">촬영 후</p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.035em]">파일은 찍힌 조건까지 함께 남깁니다.</h2>
              <div className="mt-8 grid gap-4">
                {workflow.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="text-sm font-bold text-[var(--luma-muted)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--luma-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
