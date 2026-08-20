import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Headphones } from "lucide-react";
import Header from "../../_components/layout/Header";
import Footer from "../../_components/layout/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { collections } from "../../data/collections";
import theme from "../../theme.json";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = collections.find((c) => c.slug === slug);
  return {
    title: item ? `${item.title} - CURA Museum` : "Collection - CURA Museum",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = collections.find((collection) => collection.slug === slug) ?? collections[0];
  const images = item.images?.length ? item.images : [item.img];
  const related = collections.filter((collection) => collection.slug !== item.slug).slice(0, 3);

  return (
    <TemplateWrapper theme={theme}>
      <>
        <Header />
        <main className="min-h-screen bg-[var(--color-primary)] text-[var(--color-accent)] pt-20 md:pt-32 pb-16 md:pb-28">
          <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20">
            <div className="space-y-5 md:order-1">
              <div className="aspect-[4/5] overflow-hidden bg-white/5">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-2 gap-5">
                  {images.slice(1).map((image) => (
                    <div key={image} className="aspect-[4/3] overflow-hidden bg-white/5">
                      <img src={image} alt={`${item.title} detail`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between gap-10 md:order-2">
              <div>
                <Link
                  href="/en/templates/OHMT021-museum/collections"
                  className="mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-white/45 transition-colors hover:text-white"
                >
                  <ArrowLeft size={15} />
                  Archives
                </Link>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.5em] text-white/35">{item.category}</p>
                <h1 className="font-serif text-5xl leading-[var(--leading-display)] tracking-tighter md:text-7xl lg:text-8xl">
                  {item.title}
                </h1>
                <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                  {item.description}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-8">
                {[
                  ["Artist", item.artist],
                  ["Date", item.year],
                  ["Medium", item.tag],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-6 border-b border-white/8 pb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">{label}</span>
                    <strong className="text-right font-sans text-sm tracking-normal text-white">{value}</strong>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-6 pb-1">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Audio</span>
                  <strong className="inline-flex items-center gap-2 text-right font-sans text-sm tracking-normal text-white">
                    <Headphones size={14} />
                    {item.audioDuration}
                  </strong>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 grid max-w-[1440px] grid-cols-1 gap-10 border-t border-white/10 px-6 pt-12 md:mt-24 md:grid-cols-2 md:gap-16 md:px-12 md:pt-16 lg:px-20">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-white/35">Curator Notes</p>
              <h2 className="font-serif text-4xl leading-tight tracking-tighter md:text-6xl">Why This Work Matters</h2>
            </div>
            <div className="grid gap-8 text-white/62 md:grid-cols-2">
              <p className="text-base leading-7">
                This archive page isolates the work from the noise of the gallery floor, letting the silhouette, surface, and historical context become easier to read.
              </p>
              <p className="text-base leading-7">
                Viewed slowly, {item.title} becomes less of a famous object and more of a study in gesture, material, patronage, and the visual language of devotion.
              </p>
            </div>
          </section>

          <section className="mx-auto mt-14 max-w-[1440px] px-6 md:mt-20 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                ["Look For", "Composition, hand movement, and the way the figure directs your eye through the scene."],
                ["Gallery Mood", "Quiet lighting, dark architectural edges, and a restrained presentation around the object."],
                ["Audio Focus", `A concise ${item.audioDuration} guide focused on provenance, technique, and visual details.`],
              ].map(([label, copy]) => (
                <div key={label} className="bg-[var(--color-primary)] p-6 md:p-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/30">{label}</p>
                  <p className="text-sm leading-6 text-white/62">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-[1440px] px-6 md:mt-24 md:px-12 lg:px-20">
            <div className="mb-8 flex items-end justify-between border-t border-white/10 pt-10">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-white/35">Continue Exploring</p>
                <h2 className="font-serif text-4xl tracking-tighter md:text-6xl">Related Masterpieces</h2>
              </div>
              <Link href="/en/templates/OHMT021-museum/collections" className="hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-white md:inline-flex">
                All Archives
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((collection) => (
                <Link key={collection.id} href={`/en/templates/OHMT021-museum/collections/${collection.slug}`} className="group">
                  <div className="mb-5 aspect-[4/5] overflow-hidden bg-white/5">
                    <img src={collection.img} alt={collection.title} className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-white/35">{collection.category}</p>
                  <h3 className="font-serif text-2xl tracking-tight">{collection.title}</h3>
                  <p className="mt-2 text-sm text-white/45">{collection.artist} · {collection.year}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    </TemplateWrapper>
  );
}
