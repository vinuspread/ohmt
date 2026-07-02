import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const notes = [
  "Color recipes stay with the set.",
  "Focus and lens notes stay beside the frame.",
  "Collections turn scattered captures into a useful archive.",
];

const archiveSteps = [
  {
    title: "Session notes",
    text: "Write why the frame mattered while the room is still in your head.",
  },
  {
    title: "Recipe memory",
    text: "Keep the color approach that worked for a room, a table, or a walk.",
  },
  {
    title: "Collections",
    text: "Group images by the reason they were made, not only by date.",
  },
];

export default function StoriesPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="bg-[var(--luma-dark)] px-4 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Smartphone size={30} strokeWidth={1.5} />
              <h1 className="mt-6 max-w-3xl text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                The reason for the frame stays attached.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                LUMA keeps notes, recipes, and collections close to the image, before it becomes another unnamed file.
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-ink)]">
              <Image unoptimized src="/templates/luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA companion app and camera collection view" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/luma-camera/app-recipe-view.jpg?v=20260702f" alt="LUMA recipe view in the companion app" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
            </div>
            <div className="grid content-center gap-4">
              {notes.map((note, index) => (
                <div key={note} className="bg-white/55 p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">0{index + 1}</p>
                  <h2 className="mt-4 text-2xl font-bold leading-[1.08] tracking-[-0.035em]">{note}</h2>
                </div>
              ))}
              <Link href="/en/templates/luma-camera/image-engine" className="inline-flex w-fit items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                See image engine <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {archiveSteps.map((step) => (
              <article key={step.title} className="bg-white/55 p-7 md:p-8">
                <h2 className="text-2xl font-bold leading-[1.08] tracking-[-0.035em]">{step.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[var(--luma-dark)] p-8 text-white md:p-10">
              <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.035em]">A companion, not a control room.</h2>
              <p className="mt-5 text-sm leading-6 text-white/64">
                The app holds only the context that makes a photograph useful later.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/luma-camera/app-insight.jpg?v=20260702e" alt="LUMA companion app beside the camera" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
