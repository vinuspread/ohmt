import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Focus, Moon, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";
import { ResponsiveText } from "../_components/ResponsiveText";

const samples = [
  {
    label: "컬러",
    title: "서로 다른 소재의 색을 자연스럽게 구분합니다.",
    text: "자연광의 따뜻함을 유지하면서 특정 색조가 과하게 강조되지 않도록 조정합니다.",
    image: "/templates/OHMT031-luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    label: "저조도",
    title: "푸른 창밖과 따뜻한 실내 조명을 함께 담습니다.",
    text: "어두운 영역의 디테일을 유지하고 장면에 어울리는 정도의 노이즈만 남깁니다.",
    image: "/templates/OHMT031-luma-camera/engine-lowlight-room.jpg?v=20260702f",
  },
  {
    label: "디테일",
    title: "질감은 선명하게, 윤곽은 자연스럽게.",
    text: "종이와 천, 금속, 세라믹의 표면 질감을 과도한 선명도 없이 자연스럽게 표현합니다.",
    image: "/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f",
  },
];

const profileNotes = [
  {
    title: "내추럴 프로파일",
    text: "인물과 음식, 돌, 천, 나무의 색을 자연스럽게 표현하는 기본 설정입니다.",
  },
  {
    title: "저조도 프로파일",
    text: "따뜻한 조명과 푸른 그림자의 색 차이를 유지해 실내 분위기를 자연스럽게 담습니다.",
  },
  {
    title: "디테일 프로파일",
    text: "표면의 질감은 유지하면서 윤곽이 지나치게 날카로워지지 않도록 조정합니다.",
  },
];

const workflow = [
  "중립 프로파일이나 저장한 컬러 설정을 선택해 촬영을 시작합니다.",
  "촬영 직후 초점과 렌즈, 시간, 위치 정보를 기록합니다.",
  "비슷한 빛과 장소에서 촬영한 사진을 컬렉션으로 정리합니다.",
];

export default function ImageEnginePage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-9 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <Focus size={28} strokeWidth={1.5} />
              <h1 className="luma-h1 mt-6 max-w-3xl">
                다시 보아도 촬영 당시의 색 그대로.</h1>
              <p className="luma-body mt-6 max-w-xl">
                <ResponsiveText>
                  {"LUMA는 색과 노이즈, 표면 질감을 과도하게 보정하지 않고\n실제 장면에 가까운 결과를 남깁니다."}
                </ResponsiveText>
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e" alt="따뜻한 자연광의 LUMA 컬러 샘플" fill priority className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {samples.map((sample) => (
              <article key={sample.label} className="luma-card !p-0 overflow-hidden">
                <div className="relative aspect-[7/5] overflow-hidden">
                  <Image unoptimized src={sample.image} alt={`LUMA ${sample.label} 샘플`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6 md:p-9">
                  <p className="luma-label text-[var(--luma-muted)]">{sample.label}</p>
                  <h2 className="luma-h3 mt-4">{sample.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{sample.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--luma-dark)] px-4 py-24 text-white md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-3">
            <div>
              <Moon size={26} strokeWidth={1.5} />
              <h2 className="luma-h2-sm mt-6">ISO 12800에서도 조명의 색과 분위기를 유지합니다.</h2>
            </div>
            <div>
              <Smartphone size={26} strokeWidth={1.5} />
              <h2 className="luma-h2-sm mt-6">컬러 설정을 사진과 함께 저장합니다.</h2>
            </div>
            <div className="flex items-end">
              <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)]">
                카메라 비교하기<ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="luma-h2">
                세 가지 프로파일에서 원하는 색감을 선택합니다.</h2>
              <p className="luma-body mt-6 max-w-lg">
                <ResponsiveText>
                  {"단순한 필터가 아니라 촬영 단계에서\n색온도와 대비의 기준을 먼저 설정합니다."}
                </ResponsiveText>
              </p>
            </div>
            <div className="grid gap-4">
              {profileNotes.map((item) => (
                <article key={item.title} className="luma-card">
                  <h3 className="luma-h3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="relative min-h-[460px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260702f" alt="이미지 레시피와 노트를 저장하는 LUMA 앱" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="bg-white/55 p-6 md:p-9">
              <p className="luma-label text-[var(--luma-muted)]">촬영 후</p>
              <h2 className="luma-h2-sm mt-4 break-keep">촬영 정보도 사진과 함께 기록합니다.</h2>
              <div className="mt-9 grid gap-4">
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
