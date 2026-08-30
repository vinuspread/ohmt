import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { INSTRUCTORS } from "../constants";
import theme from "../theme.json";

export const metadata: Metadata = { title: "About - PRANA" };

const PRINCIPLES = [
  ["Begin with today's body", "We check breath, joints, and energy before deciding how far or how fast to move."],
  ["Explain what matters", "Teachers name the reason for an adjustment, then give you time to feel the difference."],
  ["Keep rest in the practice", "Props, pauses, and smaller ranges are normal choices, not exceptions."],
] as const;

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero eyebrow="ABOUT PRANA" title="A quiet room for careful practice." description="Natural light, living plants, and clear teaching leave enough space to notice what your body needs." image="/templates/OHMT022-yoga/subpage-about-wide-v4.webp" imageAlt="PRANA teacher standing in a wide modern studio with living plants" imagePosition="object-[70%_center] md:object-center" />

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4"><p className="prana-sub-label uppercase tracking-[0.18em] text-[var(--color-text-muted)]">OUR APPROACH</p><h2 className="prana-sub-section mt-5 max-w-[11ch] text-[var(--color-text)]">Listen first. Move second.</h2></div>
            <div className="max-w-2xl space-y-7 lg:col-span-8"><p className="prana-sub-body leading-8 text-[var(--color-text-muted)]">PRANA began as a small class for people who wanted precise guidance without pressure to keep up. That question still shapes every session: what would make this movement useful today?</p><p className="prana-sub-body leading-8 text-[var(--color-text-muted)]">Teachers explain why an adjustment matters, then leave time to notice the change. Progress here means paying closer attention and making a clearer choice.</p></div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-14 md:pb-28 lg:px-20 lg:pb-32">
          <div className="mx-auto max-w-[1180px]"><div className="relative aspect-[16/8] min-h-[340px] overflow-hidden bg-[var(--color-bg-alt)]"><Image src="/templates/OHMT022-yoga/subpage-schedule-v3.webp" alt="PRANA practice room prepared with mats and plants" fill sizes="1180px" className="object-cover" /></div><div className="mt-7 grid gap-6 md:grid-cols-3"><p className="prana-sub-label uppercase tracking-[0.16em] text-[var(--color-text-muted)]">THE SPACE</p><p className="prana-sub-small max-w-2xl leading-7 text-[var(--color-text-muted)] md:col-span-2">Cool stone, pale mineral surfaces, and contained planting keep the room visually quiet. Class size stays at twelve, with mats and props ready when they are needed.</p></div></div>
        </section>

        <section className="bg-[var(--color-bg-alt)] px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20">
            <h2 className="prana-sub-section max-w-[11ch] text-[var(--color-text)] lg:col-span-4">What stays consistent.</h2>
            <div className="border-t border-[var(--color-text)] lg:col-span-8">{PRINCIPLES.map(([title, description], index) => <article key={title} className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-8"><span className="prana-sub-label pt-1 text-[var(--color-text-muted)]">0{index + 1}</span><h3 className="prana-sub-title text-[var(--color-text)]">{title}</h3><p className="prana-sub-small leading-7 text-[var(--color-text-muted)]">{description}</p></article>)}</div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-20"><h2 className="prana-sub-section text-[var(--color-text)] lg:col-span-4">Your teachers.</h2><p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)] lg:col-span-8">Three disciplines, one shared approach: explain clearly, observe carefully, and leave room for choice.</p></div>
            <div className="mt-12 border-t border-[var(--color-text)]">{INSTRUCTORS.map((instructor, index) => <article key={instructor.id} className="grid gap-5 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_5rem_0.8fr_1.2fr] sm:items-center sm:gap-7"><span className="prana-sub-label text-[var(--color-text-muted)]">0{index + 1}</span><div className="relative aspect-square overflow-hidden rounded-full bg-[var(--color-bg-alt)]"><Image src={instructor.image} alt={instructor.name} fill sizes="80px" className="object-cover" /></div><div><h3 className="prana-sub-title text-[var(--color-text)]">{instructor.name}</h3><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{instructor.role}</p></div><p className="prana-sub-small leading-7 text-[var(--color-text-muted)]">{instructor.bio}</p></article>)}</div>
            <Link href="/en/templates/OHMT022-yoga/schedule" className="prana-sub-small mt-10 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">See the schedule</Link>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
