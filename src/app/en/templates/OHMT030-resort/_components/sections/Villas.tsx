import Link from "next/link";
import { VillaRow } from "../cards/VillaRow";
import { BodyText, SectionHeading } from "../ui/Typography";

const base = "/en/templates/OHMT030-resort";

const villas = [
  { name: "Villa Solaya", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Miraia", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Azari", desc: "A place where time stands still. Among herbs and the wind's whisper, find peace hidden from the world." },
  { name: "Villa Veluna", desc: "Made for lovers and dreamers, where the moon winks through the palms, and the night breathes lavender." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">

          {/* Left: Text Area (Vertical layout) */}
          <div className="flex flex-col items-start max-w-[580px]">
            <SectionHeading size="large" className="mb-6 tracking-[-0.02em] md:mb-12">
              Life Along<br />The Coast
            </SectionHeading>
            <BodyText className="mb-9 text-white/60 md:mb-12">
              Each villa is a private world carved into the coastal landscape.
              Designed for rest, connection, and the quiet rhythm of the sea.
            </BodyText>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-base hover:bg-white/10 transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              Contact Us
            </Link>
          </div>

          {/* Right: List Area (Width 1/2 of container) */}
          <div className="flex flex-col w-full">
            {villas.map((v) => (
              <VillaRow
                key={v.name}
                name={v.name}
                description={v.desc}
                href={`${base}/#`}
              />
            ))}
            <div className="border-b border-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
