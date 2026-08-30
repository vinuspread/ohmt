import Image from "next/image";
import Link from "next/link";
import { SCHEDULE } from "../../constants";
import type { YogaClass } from "../../types";

type ClassesExplorerProps = { classes: YogaClass[] };
const PACE = ["", "차분함", "균형", "활동적"] as const;

function getNextSession(slug: string) {
  for (const day of SCHEDULE) {
    const session = day.classes.find((item) => item.slug === slug);
    if (session) return `${day.day} · ${session.time}`;
  }
  return "일정 준비 중";
}

export default function ClassesExplorer({ classes }: ClassesExplorerProps) {
  return (
    <section className="bg-white px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32 break-keep">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 border-b border-[var(--color-text)] pb-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 className="prana-sub-section max-w-[12ch] text-[var(--color-text)] lg:col-span-5">네 가지 수련, 한눈에 비교하세요.</h2>
          <p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)] lg:col-span-7">오늘의 에너지부터 생각해 보세요. 모든 수업의 속도와 난이도, 가장 가까운 시간을 같은 자리에서 확인할 수 있습니다.</p>
        </div>

        <div>
          {classes.map((yogaClass) => (
            <article key={yogaClass.id} className="grid gap-7 border-b border-[var(--color-border)] py-10 md:grid-cols-12 md:items-center md:gap-10 lg:py-12">
              <Link href={`/ko/templates/OHMT022-yoga/classes/${yogaClass.slug}`} className="group relative aspect-[8/5] overflow-hidden bg-[var(--color-bg-alt)] md:col-span-4">
                <Image src={yogaClass.image} alt={`${yogaClass.name} 수련`} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.015]" />
              </Link>
              <div className="md:col-span-5">
                <p className="prana-sub-label tracking-[0.14em] text-[var(--color-text-muted)]">{yogaClass.subtitle}</p>
                <h3 className="prana-sub-title mt-4 text-[var(--color-text)]">{yogaClass.name}</h3>
                <p className="prana-sub-small mt-4 max-w-xl leading-7 text-[var(--color-text-muted)]">{yogaClass.description}</p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-5 md:col-span-3 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <dl className="space-y-3 prana-sub-small text-[var(--color-text-muted)]">
                  <div className="flex justify-between gap-4"><dt>난이도</dt><dd className="text-[var(--color-text)]">{yogaClass.level}</dd></div>
                  <div className="flex justify-between gap-4"><dt>시간</dt><dd className="text-[var(--color-text)]">{yogaClass.duration}</dd></div>
                  <div className="flex justify-between gap-4"><dt>속도</dt><dd className="text-[var(--color-text)]">{PACE[yogaClass.intensity]}</dd></div>
                </dl>
                <p className="prana-sub-small mt-6 text-[var(--color-text-muted)]">다음 수업: {getNextSession(yogaClass.slug)}</p>
                <Link href={`/ko/templates/OHMT022-yoga/classes/${yogaClass.slug}`} className="prana-sub-small mt-5 inline-flex min-h-11 items-center border-b border-[var(--color-text)] font-medium text-[var(--color-text)]">수업 보기</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-8 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-16">
          <h2 className="prana-sub-section max-w-[12ch] text-[var(--color-text)] lg:col-span-5">첫 방문도 간단하게.</h2>
          <div className="lg:col-span-7">
            <p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)]">움직이기 편한 옷을 입고 10분 먼저 오세요. 매트와 도구는 준비되어 있으며, 수업 전 강사가 몸 상태를 먼저 확인합니다.</p>
            <Link href="/ko/templates/OHMT022-yoga/schedule" className="prana-sub-small mt-7 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">가능한 시간 보기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
