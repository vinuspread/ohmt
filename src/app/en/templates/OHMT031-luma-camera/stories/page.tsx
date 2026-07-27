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
        <section className="bg-[var(--luma-dark)] px-4 py-16 text-white md:px-9 md:py-24">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <Smartphone size={30} strokeWidth={1.5} />
              <h1 className="luma-h1 mt-6 max-w-3xl">
                The reason for the frame stays attached.
              </h1>
              <p className="luma-body mt-6 max-w-xl !text-white/70">
                LUMA keeps notes, recipes, and collections close to the image, before it becomes another unnamed file.
              </p>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-[var(--luma-ink)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA companion app and camera collection view" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-9 md:py-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260702f" alt="LUMA recipe view in the companion app" fill className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
            </div>
            <div className="grid content-center gap-4">
              {notes.map((note, index) => (
                <div key={note} className="luma-card">
                  <p className="luma-label text-[var(--luma-muted)]">0{index + 1}</p>
                  <h2 className="luma-h3 mt-4">{note}</h2>
                </div>
              ))}
              <Link href="/en/templates/OHMT031-luma-camera/image-engine" className="inline-flex w-fit items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                See image engine <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {archiveSteps.map((step) => (
              <article key={step.title} className="luma-card">
                <h2 className="luma-h3">{step.title}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="luma-card-dark">
              <h2 className="luma-h2-sm">A companion, not a control room.</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">
                The app holds only the context that makes a photograph useful later.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/app-insight.jpg?v=20260702e" alt="LUMA companion app beside the camera" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
