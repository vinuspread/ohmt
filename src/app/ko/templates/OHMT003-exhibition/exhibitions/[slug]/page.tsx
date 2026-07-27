'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { exhibitions } from '../../constants';
import { Navbar } from '../../_components/Navbar';
import { Footer } from '../../_components/Footer';
import { TemplateWrapper } from '../../_components/TemplateWrapper';
import theme from '../../theme.json';

export default function ExhibitionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const exhibition = exhibitions.find((ex) => ex.slug === slug);

  if (!exhibition) {
    return (
      <TemplateWrapper theme={theme}>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/50 mb-4">404</p>
            <h1 className="font-heading text-[length:var(--text-h1)] uppercase tracking-[-0.04em] mb-6">요청하신 전시를 찾을 수 없습니다</h1>
            <Link href="/ko/templates/OHMT003-exhibition/exhibitions" className="text-xs font-semibold uppercase tracking-[0.12em] underline underline-offset-4">전시 목록으로</Link>
          </div>
        </main>
        <Footer />
      </TemplateWrapper>
    );
  }

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[85vh] overflow-hidden">
          <img
            src={exhibition.heroImage}
            alt={exhibition.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {exhibition.tags.genre} <span className="mx-1.5">·</span> {exhibition.tags.theme}
            </p>
            <h1
              className="font-heading font-semibold uppercase text-white leading-[var(--leading-display)] max-w-[12ch]"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.04em' }}
            >
              {exhibition.name}
            </h1>
          </div>
        </section>

        {/* Info Grid */}
        <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-4 gap-12 md:gap-16">
              {[
                { label: '작가', value: exhibition.artist },
                { label: '전시 기간', value: `${exhibition.dateFrom} – ${exhibition.dateTo}` },
                { label: '장소', value: exhibition.showroom },
                { label: '관람 연령', value: exhibition.tags.ageRating },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/35 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-black leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
            <div className="max-w-[720px]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/35 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                전시 소개
              </p>
              <p
                className="text-sm font-body text-black/65 leading-loose word-break-keep"
                style={{ fontFamily: 'var(--font-body)', wordBreak: 'keep-all' }}
              >
                {exhibition.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <div className="w-full">
            <img
              src={exhibition.image}
              alt={exhibition.name}
              className="w-full h-auto object-cover max-h-[80vh]"
            />
          </div>
        </section>

        {/* Back */}
        <section className="bg-[var(--color-bg)] py-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <Link
              href="/ko/templates/OHMT003-exhibition/exhibitions"
              className="relative overflow-hidden group inline-flex px-8 py-4 border border-black active:scale-[0.97] transition-transform duration-100"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative text-black group-hover:text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
                전시 목록으로
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
