import type { Metadata } from "next";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import SubpageHero from "../_components/SubpageHero";
import { ScheduleBooking } from "./ScheduleBooking";

export const metadata: Metadata = {
  title: "Schedule - OHMT Yoga",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type BookingParams = {
  preferredSlug?: string;
  preferredDay?: string;
  preferredTime?: string;
  demoState?: string;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function ScheduleContent(bookingParams: BookingParams) {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="prana-subpage bg-white pt-16 md:pt-[76px]">
        <SubpageHero eyebrow="BOOK A CLASS" title="Choose one clear hour for yourself." description="Pick a day, compare the available sessions, and confirm only after every detail feels right." image="/templates/OHMT022-yoga/subpage-schedule-v3.webp" imageAlt="PRANA studio prepared for the next class" />
        <ScheduleBooking {...bookingParams} />
      </main>
      <section className="prana-subpage bg-[var(--color-bg-alt)] px-6 py-16 md:px-14 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <h2 className="prana-sub-section max-w-[12ch] text-[var(--color-text)]">Arrive ten minutes early.</h2>
          <div className="border-t border-[var(--color-text)] pt-7">
            <p className="prana-sub-body max-w-2xl leading-8 text-[var(--color-text-muted)]">Mats and props are ready in the room. Bring water, wear clothes you can move in, and tell your teacher if anything needs extra support.</p>
            <Link href="/en/templates/OHMT022-yoga/mypage" className="prana-sub-small mt-6 inline-flex min-h-11 items-center border-b border-[var(--color-text)] font-medium text-[var(--color-text)]">Manage an existing booking</Link>
          </div>
        </div>
      </section>
      <Footer />
    </TemplateWrapper>
  );
}

export default async function SchedulePage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <ScheduleContent
      preferredSlug={firstValue(params.class)}
      preferredDay={firstValue(params.day)}
      preferredTime={firstValue(params.time)}
      demoState={firstValue(params.state)}
    />
  );
}
