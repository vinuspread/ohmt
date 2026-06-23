import Link from 'next/link';
import { notFound } from 'next/navigation';
import { exhibitions } from '../../constants';
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";
import { Navbar } from '../../_components/Navbar';
import { Footer } from '../../_components/Footer';

const galleryImages = [
  '/templates/OHMT003-exhibition/mosaic-01.jpg',
  '/templates/OHMT003-exhibition/mosaic-02.jpg',
  '/templates/OHMT003-exhibition/mosaic-03.jpg',
  '/templates/OHMT003-exhibition/mosaic-04.jpg',
  '/templates/OHMT003-exhibition/mosaic-05.jpg',
  '/templates/OHMT003-exhibition/mosaic-06.jpg',
];

export default async function ExhibitionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exhibition = exhibitions.find((ex) => ex.slug === slug);

  if (!exhibition) notFound();

  const related = exhibitions.filter((ex) => ex.slug !== slug).slice(0, 3);

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <img
              src={exhibition.heroImage}
              alt={exhibition.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="absolute bottom-16 left-0 right-0 z-10 max-w-[1400px] mx-auto px-6">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-white/60 mb-4">
              {exhibition.tags.genre} <span className="mx-1.5 opacity-50">·</span> {exhibition.tags.theme}
            </p>
            <h1
              className="font-heading font-semibold uppercase text-white leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.04em' }}
            >
              {exhibition.name}
            </h1>
          </div>
        </section>

        {/* Meta + Description */}
        <section className="bg-[var(--color-bg)] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left: description */}
              <div>
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/40 mb-6">
                  About the Exhibition
                </p>
                <p className="text-[18px] leading-[1.75] text-black/80" style={{ fontFamily: 'var(--font-body)' }}>
                  {exhibition.description}
                </p>
              </div>

              {/* Right: meta */}
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] px-2 py-0.5 bg-black text-white">
                    {exhibition.tags.ageRating}
                  </span>
                  <span className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/40">
                    {exhibition.status === 'on-show' ? 'On Show' : exhibition.status === 'opening-soon' ? 'Opening Soon' : 'Permanent'}
                  </span>
                </div>

                <div className="flex flex-col gap-8 border-t border-[var(--color-border)] pt-10">
                  {[
                    { label: 'Artist', value: exhibition.artist },
                    { label: 'Date', value: `${exhibition.dateFrom} – ${exhibition.dateTo}` },
                    { label: 'Showroom', value: exhibition.showroom },
                  ].map((meta) => (
                    <div key={meta.label} className="flex justify-between items-baseline border-b border-[var(--color-border)] pb-6">
                      <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/40">{meta.label}</p>
                      <p className="text-[14px] font-heading font-semibold text-black">{meta.value}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/en/templates/OHMT005-exhibition-en/contact"
                  className="relative overflow-hidden group inline-flex px-8 py-4 border border-black mt-12"
                >
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">
                    Buy Tickets
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Images */}
        <section className="bg-[var(--color-bg)] pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-baseline justify-between mb-10 border-t border-[var(--color-border)] pt-12">
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-black/40">
                Exhibition Views
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden"
                  style={{ aspectRatio: i % 3 === 1 ? '3/4' : '4/3' }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Exhibitions */}
        <section className="bg-[var(--color-bg)] pb-32 border-t border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 pt-16">
            <div className="flex items-baseline justify-between mb-12">
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-black/40">
                More Exhibitions
              </p>
              <Link
                href="/en/templates/OHMT005-exhibition-en/exhibitions"
                className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((ex) => (
                <Link key={ex.slug} href={`/en/templates/OHMT005-exhibition-en/exhibitions/${ex.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img src={ex.image} alt={ex.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] text-black/40 mb-2">
                    {ex.tags.genre} <span className="mx-1 opacity-40">·</span> {ex.tags.theme}
                  </p>
                  <p className="text-[14px] font-heading font-semibold uppercase tracking-[-0.01em] text-black">
                    {ex.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
