import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";
import { ResponsiveText } from "../_components/ResponsiveText";

const notes = [
  "컬러 설정을 사진과 함께 저장합니다.",
  "초점과 렌즈 정보를 촬영 직후 기록합니다.",
  "촬영한 사진을 주제와 용도에 따라 컬렉션으로 정리합니다.",
];

const archiveSteps = [
  {
    title: "촬영 노트",
    text: "촬영 직후 빛과 장소, 촬영 의도를 메모로 남깁니다.",
  },
  {
    title: "컬러 설정 저장",
    text: "실내와 음식, 거리 촬영에 사용한 색 설정을 저장하고 다시 불러올 수 있습니다.",
  },
  {
    title: "컬렉션",
    text: "날짜뿐 아니라 장면과 촬영 목적을 기준으로 사진을 정리합니다.",
  },
];

export default function StoriesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="bg-[var(--luma-dark)] px-4 py-16 text-white md:px-9 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <Smartphone size={30} strokeWidth={1.5} />
              <h1 className="luma-h1 mt-6 max-w-3xl">
                <ResponsiveText>
                  {"촬영 정보와 의도를\n사진과 함께 기록합니다."}
                </ResponsiveText>
              </h1>
              <p className="luma-body mt-6 max-w-xl !text-white/70">
                <ResponsiveText>
                  {"촬영 노트와 컬러 설정, 컬렉션 정보를 사진과 함께 관리해\n원하는 파일을 쉽게 다시 찾을 수 있습니다."}
                </ResponsiveText>
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-ink)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA 앱 컬렉션 화면과 카메라" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260702f" alt="LUMA 앱 레시피 화면" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
            </div>
            <div className="grid content-center gap-4">
              {notes.map((note, index) => (
                <div key={note} className="luma-card">
                  <p className="luma-label text-[var(--luma-muted)]">0{index + 1}</p>
                  <h2 className="luma-h3 mt-4">{note}</h2>
                </div>
              ))}
              <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="inline-flex w-fit items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                이미지 엔진 알아보기<ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {archiveSteps.map((step) => (
              <article key={step.title} className="luma-card">
                <h2 className="luma-h3">{step.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="luma-card-dark">
              <h2 className="luma-h2-sm">복잡한 관리 없이 쉽게 다시 찾도록.</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">
                <ResponsiveText>
                  {"앱에는 필요한 촬영 정보만 저장합니다.\n빛과 장소, 촬영 의도를 사진과 함께 확인할 수 있습니다."}
                </ResponsiveText>
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-insight.jpg?v=20260702e" alt="카메라 옆 LUMA 앱 화면" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
