
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SubpageHero from "../_components/SubpageHero";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

export const metadata: Metadata = { title: "My Page - PRANA" };

type ReservationViewState = "ready" | "empty" | "error";
type PageProps = { searchParams: Promise<{ state?: string | string[] }> };
type Reservation = { id: string; date: string; time: string; name: string; instructor: string; status: string; slug: string };

const UPCOMING: Reservation[] = [
  { id: "1", date: "Monday, June 16", time: "7:00 AM", name: "Vinyasa Flow", instructor: "Sofia Chen", status: "Confirmed", slug: "vinyasa-flow" },
  { id: "2", date: "Wednesday, June 18", time: "6:30 PM", name: "Hatha Yoga", instructor: "Sofia Chen", status: "Confirmed", slug: "hatha-yoga" },
  { id: "3", date: "Friday, June 20", time: "8:00 AM", name: "Meditation", instructor: "Mira Song", status: "Confirmed", slug: "meditation" },
];

function BookingRow({ item }: { item: Reservation }) {
  return (
    <article className="grid gap-5 border-b border-[var(--color-border)] py-7 md:grid-cols-12 md:items-center md:gap-8">
      <div className="md:col-span-3"><p className="prana-sub-small text-[var(--color-text)]">{item.date}</p><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{item.time}</p></div>
      <div className="md:col-span-5"><h3 className="prana-sub-title text-[var(--color-text)]">{item.name}</h3><p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{item.instructor} · {item.status}</p></div>
      <div className="flex gap-6 md:col-span-4 md:justify-end"><Link href={`/en/templates/OHMT022-yoga/classes/${item.slug}`} className="prana-sub-small inline-flex min-h-11 items-center text-[var(--color-text)]">Class details</Link><Link href="/en/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-11 items-center border-b border-[var(--color-text)] font-medium text-[var(--color-text)]">Change</Link></div>
    </article>
  );
}

export default async function MyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.state) ? params.state[0] : params.state;
  const state: ReservationViewState = raw === "empty" || raw === "error" ? raw : "ready";
  const next = UPCOMING[0];

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero eyebrow="MY PRACTICE" title="Your week, held in one calm place." description="See what is next, make a change, and return to the practice that supports you." image="/templates/OHMT022-yoga/subpage-mypage-v4.webp" imageAlt="PRANA member resting in a cool-toned studio with living plants" imagePosition="object-[66%_center] md:object-center" />

        <section className="border-b border-[var(--color-border)] px-6 md:px-14 lg:px-20">
          <dl className="mx-auto grid max-w-[1180px] md:grid-cols-3">
            {[["Member", "Alex Kim"], ["Membership", "8 classes left"], ["Renews", "July 1"]].map(([label, value], index) => <div key={label} className={`py-7 ${index ? "border-t border-[var(--color-border)] md:border-l md:border-t-0 md:pl-8" : ""}`}><dt className="prana-sub-label uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{label}</dt><dd className="prana-sub-small mt-3 text-[var(--color-text)]">{value}</dd></div>)}
          </dl>
        </section>

        <section className="bg-[var(--color-bg-alt)] px-6 py-20 md:px-14 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1180px]">
            {state === "ready" ? (
              <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
                <div>
                  <p className="prana-sub-label uppercase tracking-[0.18em] text-[var(--color-text-muted)]">NEXT CLASS</p>
                  <p className="prana-sub-lead mt-6 text-[var(--color-text)]">{next.date}</p>
                  <p className="prana-sub-small mt-2 text-[var(--color-text-muted)]">{next.time}</p>
                  <h2 className="prana-sub-section mt-10 text-[var(--color-text)]">{next.name}</h2>
                  <p className="prana-sub-small mt-4 text-[var(--color-text-muted)]">with {next.instructor} · {next.status}</p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link href={`/en/templates/OHMT022-yoga/classes/${next.slug}`} className="prana-sub-small inline-flex min-h-12 items-center border border-[var(--color-border)] bg-white px-6 font-medium text-[var(--color-text)]">Class details</Link>
                    <Link href="/en/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-12 items-center bg-[var(--color-accent)] px-6 font-medium text-white">Change time</Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden bg-[var(--color-bg-secondary)] lg:min-h-[420px]">
                  <Image src="/templates/OHMT022-yoga/class-vinyasa-v2.webp" alt="Vinyasa Flow class in the PRANA studio" fill sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover" />
                </div>
              </div>
            ) : <div><p className="prana-sub-label uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{state === "error" ? "RESERVATIONS UNAVAILABLE" : "NO NEXT CLASS"}</p><h2 className="prana-sub-section mt-6 max-w-[15ch] text-[var(--color-text)]">{state === "error" ? "Your bookings are still saved." : "Choose the first class for your week."}</h2><p className="prana-sub-small mt-6 max-w-xl leading-7 text-[var(--color-text-muted)]">{state === "error" ? "Reload this page. For an urgent change, contact the studio directly." : "Pick a day and practice. The confirmed class will appear here."}</p><Link href={state === "error" ? "/en/templates/OHMT022-yoga/mypage" : "/en/templates/OHMT022-yoga/schedule"} className="prana-sub-small mt-7 inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">{state === "error" ? "Load again" : "Find a class"}</Link></div>}
          </div>
        </section>

        <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="prana-sub-label uppercase tracking-[0.18em] text-[var(--color-text-muted)]">UPCOMING</p><h2 className="prana-sub-section mt-5 text-[var(--color-text)]">Classes ahead.</h2></div><div className="lg:col-span-4 lg:text-right"><Link href="/en/templates/OHMT022-yoga/schedule" className="prana-sub-small inline-flex min-h-12 items-center bg-[var(--color-accent)] px-7 font-medium text-white">Add a class</Link></div></div>
            <div className="mt-10 border-t border-[var(--color-text)]">{state === "ready" ? UPCOMING.slice(1).map((item) => <BookingRow key={item.id} item={item} />) : <p className="prana-sub-small py-10 text-[var(--color-text-muted)]">Upcoming bookings will appear here.</p>}</div>
            <div className="mt-16 grid gap-6 border-t border-[var(--color-border)] pt-8 md:grid-cols-12 md:gap-10"><h2 className="prana-sub-title text-[var(--color-text)] md:col-span-4">Need help with a late change?</h2><p className="prana-sub-small max-w-2xl leading-7 text-[var(--color-text-muted)] md:col-span-8">Contact the studio before class begins. We will confirm whether your place can be moved to another session.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
