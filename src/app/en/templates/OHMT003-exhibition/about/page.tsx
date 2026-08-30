import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Navbar } from '../_components/Navbar';
import { Footer } from '../_components/Footer';

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        <section className="bg-[var(--color-bg)] pt-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <h1
              className="font-heading font-semibold uppercase text-black leading-none"
              style={{
                fontSize: 'clamp(4rem, 7vw, 7rem)',
                letterSpacing: '-0.02em',
              }}
            >
              VANTA
            </h1>
          </div>
          <div className="mt-12 relative min-h-[55vh] overflow-hidden">
            <img
              src="/templates/OHMT003-exhibition/about-hero.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{ minHeight: '55vh' }}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute top-24 left-0 right-0 max-w-[1400px] mx-auto px-6">
              <p
                className="font-heading font-semibold uppercase text-white leading-[var(--leading-display)]"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 9rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Art That<br />Moves the World
              </p>
              <p className="mt-8 text-2xl font-body text-white/65 leading-relaxed max-w-[40ch]">
                Founded to bridge the gap between artists and audiences - we believe every work of art holds a conversation waiting to begin.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="lg:grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-black/60 mb-4">
                  About
                </p>
                <h2
                  className="font-heading font-semibold uppercase text-black"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: '0.96',
                  }}
                >
                  Shaping the<br />Future of Art
                </h2>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="text-base leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  VANTA Gallery was founded in 2018 with a singular mission: to create a space where
                  contemporary art challenges, inspires, and transforms. Housed in a converted
                  industrial building in Chelsea, VANTA has quickly established itself as a
                  destination for groundbreaking exhibitions that push the boundaries of artistic
                  practice.
                </p>
                <p className="text-base leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Our program spans painting, sculpture, installation, photography, and new media,
                  with a focus on artists who engage critically with the social and material
                  conditions of our time. We believe in the power of art to provoke dialogue,
                  challenge assumptions, and open new ways of seeing the world.
                </p>
                <p className="text-base leading-relaxed text-black/80 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  Beyond our exhibition program, VANTA is committed to education and community
                  engagement through artist talks, workshops, and collaborative projects that make
                  contemporary art accessible to diverse audiences.
                </p>
                <Link
                  href="/en/templates/OHMT003-exhibition/contact"
                  className="inline-flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
