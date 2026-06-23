import Link from 'next/link';
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
            <h1 className="font-heading font-semibold uppercase text-black leading-none" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}>
              Oh My Template
            </h1>
          </div>
          <div className="mt-12 relative min-h-[55vh] overflow-hidden">
            <img src="/templates/OHMT003-exhibition/about-hero.jpg" alt="" className="w-full h-full object-cover" style={{ minHeight: '55vh' }} />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute top-24 left-0 right-0 max-w-[1400px] mx-auto px-6">
              <p className="font-heading font-semibold uppercase text-white leading-[0.95]" style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', letterSpacing: '-0.04em' }}>
                세상을<br />움직이는 예술
              </p>
              <p className="mt-8 text-[22px] font-body text-white/65 leading-relaxed max-w-[40ch]">
                작가와 관객 사이의 간극을 좁히기 위해 설립되었습니다. 모든 작품은 시작을 기다리는 대화를 담고 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="lg:grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/60 mb-4">소개</p>
                <h2 className="font-heading font-semibold uppercase text-black" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '0.96' }}>
                  예술의 미래를<br />만들다
                </h2>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="text-[16px] leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Oh My Template 갤러리는 2018년 단 하나의 사명으로 설립되었습니다. 현대미술이 도전하고, 영감을 주고, 변화를 이끄는 공간을 만드는 것입니다. 첼시의 개조된 산업 건물에 자리한 갤러리는 예술적 실천의 경계를 넓히는 획기적인 전시를 통해 빠르게 목적지로 자리매김했습니다.
                </p>
                <p className="text-[16px] leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  프로그램은 회화, 조각, 설치, 사진, 뉴미디어를 아우르며, 우리 시대의 사회적·물질적 조건을 비판적으로 다루는 작가에 집중합니다. 우리는 예술이 대화를 유발하고, 가정에 도전하며, 세상을 바라보는 새로운 방식을 여는 힘을 가지고 있다고 믿습니다.
                </p>
                <p className="text-[16px] leading-relaxed text-black/80 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  전시 프로그램 외에도 작가 토크, 워크숍, 협력 프로젝트를 통해 다양한 관객이 현대미술에 접근할 수 있도록 교육과 커뮤니티 참여에 힘쓰고 있습니다.
                </p>
                <Link href="/ko/templates/OHMT006-exhibition-kr/contact" className="text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                  문의하기 &rarr;
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
