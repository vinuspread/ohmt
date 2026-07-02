import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const scenes = [
  {
    title: "Morning street",
    text: "A camera small enough to leave near the coat, ready before the day turns deliberate.",
    image: "/templates/luma-camera/scene-travel-morning.jpg?v=20260702f",
  },
  {
    title: "Studio table",
    text: "Food, ceramics, packaging, and notes can stay on the same working surface.",
    image: "/templates/luma-camera/scene-kitchen-counter.jpg?v=20260702f",
  },
  {
    title: "Workshop",
    text: "Material samples, sketches, and small objects can be archived without building a full setup.",
    image: "/templates/luma-camera/scene-workshop.jpg?v=20260702f",
  },
  {
    title: "Quiet dinner",
    text: "A small camera for rooms where the mood changes when the gear gets too loud.",
    image: "/templates/luma-camera/quiet-dinner.jpg?v=20260702e",
  },
];

const fieldRules = [
  {
    title: "Wake fast",
    text: "The camera is ready before the subject starts reacting to it.",
  },
  {
    title: "Stay small",
    text: "The body stays small enough for the room to remain itself.",
  },
  {
    title: "Keep the tone",
    text: "Morning warmth, blue dusk, and candle light keep their own color.",
  },
];

export default function ScenesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1380px]">
            <h1 className="max-w-4xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              Ready before the scene starts posing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--luma-muted)]">
              LUMA stays close to ordinary rooms, tables, and walks without making the moment perform.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {scenes.map((scene) => (
              <article key={scene.title} className="group relative aspect-[7/5] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src={scene.image} alt={`LUMA in a ${scene.title.toLowerCase()} scene`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-6 text-white md:p-8">
                  <h2 className="text-2xl font-bold tracking-[-0.035em] md:text-3xl">{scene.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/72">{scene.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-8 bg-white/55 p-7 md:flex-row md:items-center md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-[-0.035em]">The useful camera is the one already nearby.</h2>
            <Link href="/en/templates/luma-camera/shop" className="inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
              Reserve LUMA <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                The camera should not make the room perform.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--luma-muted)]">
                The best LUMA scenes are ordinary until a bigger camera makes them aware of themselves.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {fieldRules.map((rule) => (
                <article key={rule.title} className="bg-white/55 p-7">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">{rule.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{rule.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
