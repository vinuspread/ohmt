import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Focus, Moon, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const samples = [
  {
    label: "Color",
    title: "Skin, ceramic, fruit, and metal stay in the same room.",
    text: "The default profile keeps warm daylight believable without pushing the file into a preset look.",
    image: "/templates/OHMT031-luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    label: "Low light",
    title: "Blue window light can sit beside a warm lamp.",
    text: "Shadow detail stays present, with a little grain left where the scene needs it.",
    image: "/templates/OHMT031-luma-camera/engine-lowlight-room.jpg?v=20260702f",
  },
  {
    label: "Detail",
    title: "Texture reads clearly without the brittle edge.",
    text: "Paper, fabric, brushed metal, and glaze keep their surface instead of turning into a sharpening test.",
    image: "/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f",
  },
];

const profileNotes = [
  {
    title: "Default profile",
    text: "A neutral-warm base for the materials people actually photograph: skin, food, stone, fabric, and wood.",
  },
  {
    title: "Low-light profile",
    text: "Warm lamps stay warm. Blue shadows stay blue. The file does not flatten the room into one tone.",
  },
  {
    title: "Detail profile",
    text: "Edges are held back enough for texture to feel tactile, not clinical.",
  },
];

const workflow = [
  "Shoot neutral, or start from a saved color recipe.",
  "Add focus, lens, time, and location while the setting is fresh.",
  "Save the set as a collection before the reason for the frame fades.",
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
                Files worth keeping after the moment passes.
              </h1>
              <p className="luma-body mt-6 max-w-xl">
                LUMA keeps color, grain, and surface detail close to the scene you saw.
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e" alt="LUMA color sample with warm daylight materials" fill priority className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {samples.map((sample) => (
              <article key={sample.label} className="luma-card !p-0 overflow-hidden">
                <div className="relative aspect-[7/5] overflow-hidden">
                  <Image unoptimized src={sample.image} alt={`${sample.label} sample from LUMA`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
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
              <h2 className="luma-h2-sm mt-6">ISO 12800, still quiet.</h2>
            </div>
            <div>
              <Smartphone size={26} strokeWidth={1.5} />
              <h2 className="luma-h2-sm mt-6">The recipe stays attached.</h2>
            </div>
            <div className="flex items-end">
              <Link href="/en/templates/OHMT031-luma-camera/shop" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)]">
                Choose a camera <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="luma-h2">
                Three profiles. One restrained color language.
              </h2>
              <p className="luma-body mt-6 max-w-lg">
                These are not filters. They are starting points that keep the file calm before editing begins.
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
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260702f" alt="LUMA app storing image recipes and notes" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="bg-white/55 p-6 md:p-9">
              <p className="luma-label text-[var(--luma-muted)]">After capture</p>
              <h2 className="luma-h2-sm mt-4">The file remembers how it was made.</h2>
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
