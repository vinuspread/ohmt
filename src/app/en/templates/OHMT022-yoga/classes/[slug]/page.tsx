import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../_components/Footer";
import Navbar from "../../_components/Navbar";
import SubpageHero from "../../_components/SubpageHero";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { CLASSES, INSTRUCTORS, SCHEDULE } from "../../constants";
import theme from "../../theme.json";

type PageProps = { params: Promise<{ slug: string }> };
const PACE = ["", "Quiet", "Measured", "Active"] as const;

export function generateStaticParams() {
  return CLASSES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const yogaClass = CLASSES.find((item) => item.slug === slug);
  return yogaClass ? { title: `${yogaClass.name} - PRANA`, description: yogaClass.description } : { title: "Class not found - PRANA" };
}

export default async function ClassDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const yogaClass = CLASSES.find((item) => item.slug === slug);
  if (!yogaClass) notFound();

  const instructor = INSTRUCTORS.find((item) => item.id === yogaClass.instructorId);
  const nextSessions = SCHEDULE.flatMap((day) => day.classes.filter((item) => item.slug === slug).map((item) => ({ ...item, day: day.day }))).slice(0, 3);
  const scheduleHref = `/en/templates/OHMT022-yoga/schedule?class=${encodeURIComponent(slug)}`;

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero eyebrow={`CLASSES / ${yogaClass.name}`} title={yogaClass.name} description={yogaClass.longDescription} image={yogaClass.image} imageAlt={`${yogaClass.name} practice at PRANA`} />

        <section className="border-b border-[var(--color-border)] px-6 md:px-14 lg:px-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
            {[["Level", yogaClass.level], ["Time", yogaClass.duration], ["Pace", PACE[yogaClass.intensity]], ["Teacher", instructor?.name ?? "PRANA team"]].map(([label, value], index) => (
              <div key={label} className={`py-7 ${index % 2 ? "border-l border-[var(--color-border)] pl-6" : "pr-6"} md:border-l md:pl-7 md:pr-4 ${index === 0 ? "md:border-l-0 md:pl-0" : ""}`}>
                <p className="prana-sub-label uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{label}</p>
                <p className="prana-sub-small mt-3 text-[var(--color-text)]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="prana-sub-label uppercase tracking-[0.18em] text-[var(--color-text-muted)]">THE PRACTICE</p>
              <h2 className="prana-sub-section mt-5 max-w-[11ch] text-[var(--color-text)]">Know what to expect.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="prana-sub-title text-[var(--color-text)]">A good fit when</h3>
                  <ul className="mt-6 border-t border-[var(--color-text)]">
                    {yogaClass.recommendedFor.map((item) => <li key={item} className="prana-sub-small border-b border-[var(--color-border)] py-5 leading-7 text-[var(--color-text-muted)]">{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="prana-sub-title text-[var(--color-text)]">You will practise</h3>
                  <ul className="mt-6 border-t border-[var(--color-text)]">
                    {yogaClass.benefits.map((item) => <li key={item} className="prana-sub-small border-b border-[var(--color-border)] py-5 leading-7 text-[var(--color-text-muted)]">{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg-alt)] px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20">
            <h2 className="prana-sub-section max-w-[10ch] text-[var(--color-text)] lg:col-span-4">How the class unfolds.</h2>
            <ol className="border-t border-[var(--color-text)] lg:col-span-8">
              {yogaClass.curriculum.map((item, index) => (
                <li key={item.title} className="grid gap-3 border-b border-[var(--color-border)] py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-8">
                  <span className="prana-sub-label pt-1 text-[var(--color-text-muted)]">0{index + 1}</span>
                  <h3 className="prana-sub-title text-[var(--color-text)]">{item.title}</h3>
                  <p className="prana-sub-small leading-7 text-[var(--color-text-muted)]">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-12 lg:gap-20">
            {instructor ? <div className="grid gap-7 sm:grid-cols-[11rem_1fr] lg:col-span-7"><div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-alt)]"><Image src={instructor.image} alt={instructor.name} fill sizes="176px" className="object-cover" /></div><div className="self-end"><p className="prana-sub-label uppercase tracking-[0.16em] text-[var(--color-text-muted)]">YOUR TEACHER</p><h2 className="prana-sub-section mt-4 text-[var(--color-text)]">{instructor.name}</h2><p className="prana-sub-small mt-3 text-[var(--color-text-muted)]">{instructor.role}</p><p className="prana-sub-small mt-5 max-w-md leading-7 text-[var(--color-text-muted)]">{instructor.bio}</p></div></div> : null}
            <div className="border-t border-[var(--color-text)] pt-7 lg:col-span-5 lg:self-end">
              <h2 className="prana-sub-title text-[var(--color-text)]">Before class</h2>
              <p className="prana-sub-small mt-5 leading-7 text-[var(--color-text-muted)]">{yogaClass.preparation}</p>
              <div className="mt-7 border-t border-[var(--color-border)]">
                {nextSessions.map((session) => <Link key={`${session.day}-${session.time}`} href={`${scheduleHref}&day=${encodeURIComponent(session.day)}&time=${encodeURIComponent(session.time)}`} className="prana-sub-small flex min-h-14 items-center justify-between border-b border-[var(--color-border)] text-[var(--color-text)]"><span>{session.day}</span><span>{session.time}</span></Link>)}
              </div>
              <Link href={scheduleHref} className="prana-sub-small mt-7 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">Choose a time</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
