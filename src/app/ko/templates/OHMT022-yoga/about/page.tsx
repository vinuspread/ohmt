import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { INSTRUCTORS } from "../constants";
import theme from "../theme.json";

export const metadata: Metadata = { title: "소개 - PRANA" };

const PRINCIPLES = [
  ["오늘의 몸에서 시작하기", "호흡과 관절, 에너지 상태를 먼저 확인한 뒤 움직임의 범위와 속도를 정합니다."],
  ["필요한 만큼 설명하기", "조절이 필요한 이유를 간결하게 설명하고, 차이를 느낄 시간을 충분히 둡니다."],
  ["휴식도 수련으로 보기", "도구와 대체 동작, 잠시 쉬는 선택은 예외가 아니라 수련의 일부입니다."],
] as const;

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px] break-keep">
        <SubpageHero eyebrow="ABOUT PRANA" title="천천히 살피며 수련하는 조용한 공간" description="자연광과 살아 있는 식물, 명확한 안내가 오늘의 몸을 알아차릴 여백을 만듭니다." image="/templates/OHMT022-yoga/subpage-about-wide-v4-ko.webp" imageAlt="식물이 놓인 넓은 모던 스튜디오에 서 있는 PRANA 강사" imagePosition="object-[70%_center] md:object-center" />

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-4"><p className="prana-sub-label tracking-[0.16em] text-[var(--color-text-muted)]">OUR APPROACH</p><h2 className="prana-sub-section mt-5 max-w-[11ch] text-[var(--color-text)]">먼저 듣고, 그다음 움직입니다.</h2></div><div className="max-w-2xl space-y-7 lg:col-span-8"><p className="prana-sub-body leading-8 text-[var(--color-text-muted)]">PRANA는 빠르게 따라가야 한다는 부담 없이 정확한 안내를 받고 싶은 사람들을 위한 작은 수업에서 시작했습니다. 오늘 이 움직임이 몸에 도움이 되려면 무엇이 필요한지 묻는 태도는 지금도 모든 수업의 기준입니다.</p><p className="prana-sub-body leading-8 text-[var(--color-text-muted)]">강사는 조절이 필요한 이유를 설명하고, 학생이 차이를 알아차릴 시간을 둡니다. 여기서의 진전은 더 잘 보여주는 일이 아니라 더 세심하게 살피고 분명하게 선택하는 일입니다.</p></div></div></section>

        <section className="px-6 pb-20 md:px-14 md:pb-28 lg:px-20 lg:pb-32"><div className="mx-auto max-w-[1180px]"><div className="relative aspect-[16/8] min-h-[340px] overflow-hidden bg-[var(--color-bg-alt)]"><Image src="/templates/OHMT022-yoga/subpage-schedule-v3.webp" alt="매트와 식물이 준비된 PRANA 수련 공간" fill sizes="1180px" className="object-cover" /></div><div className="mt-7 grid gap-6 md:grid-cols-3"><p className="prana-sub-label tracking-[0.14em] text-[var(--color-text-muted)]">THE SPACE</p><p className="prana-sub-small max-w-2xl leading-7 text-[var(--color-text-muted)] md:col-span-2">쿨그레이 자연석과 밝은 미네랄 표면, 정돈된 식물이 시각적으로 조용한 공간을 만듭니다. 수업 정원은 12명이며 매트와 도구는 필요한 순간에 바로 사용할 수 있습니다.</p></div></div></section>

        <section className="bg-[var(--color-bg-alt)] px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20"><h2 className="prana-sub-section max-w-[11ch] text-[var(--color-text)] lg:col-span-4">모든 수업에서 지키는 기준.</h2><div className="border-t border-[var(--color-text)] lg:col-span-8">{PRINCIPLES.map(([title, description], index) => <article key={title} className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-8"><span className="prana-sub-label pt-1 text-[var(--color-text-muted)]">0{index + 1}</span><h3 className="prana-sub-title text-[var(--color-text)]">{title}</h3><p className="prana-sub-small leading-7 text-[var(--color-text-muted)]">{description}</p></article>)}</div></div></section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32"><div className="mx-auto max-w-[1180px]"><div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-20"><h2 className="prana-sub-section text-[var(--color-text)] lg:col-span-4">함께 수련하는 강사진.</h2><p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)] lg:col-span-8">서로 다른 세 분야의 강사가 같은 원칙으로 수업합니다. 명확하게 설명하고 세심하게 관찰하며 선택할 여백을 남깁니다.</p></div><div className="mt-12 border-t border-[var(--color-text)]">{INSTRUCTORS.map((instructor, index) => <article key={instructor.id} className="grid gap-5 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_5rem_0.8fr_1.2fr] sm:items-center sm:gap-7"><span className="prana-sub-label text-[var(--color-text-muted)]">0{index + 1}</span><div className="relative aspect-square overflow-hidden rounded-full bg-[var(--color-bg-alt)]"><Image src={instructor.image} alt={instructor.name} fill sizes="80px" className="object-cover" /></div><div><h3 className="prana-sub-title text-[var(--color-text)]">{instructor.name}</h3><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{instructor.role}</p></div><p className="prana-sub-small leading-7 text-[var(--color-text-muted)]">{instructor.bio}</p></article>)}</div><Link href="/ko/templates/OHMT022-yoga/schedule" className="prana-sub-small mt-10 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">시간표 보기</Link></div></section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
