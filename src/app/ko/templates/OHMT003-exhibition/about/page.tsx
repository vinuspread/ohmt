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
            <h1 className="font-heading font-semibold uppercase text-black leading-[var(--leading-heading)]" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}>
              OHMT
            </h1>
          </div>
          <div className="mt-12 relative min-h-[55vh] overflow-hidden">
            <img src="/templates/OHMT003-exhibition/about-hero.jpg" alt="" className="w-full h-full object-cover" style={{ minHeight: '55vh' }} />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute top-24 left-0 right-0 max-w-[1400px] mx-auto px-6">
              <p className="max-w-[12ch] font-heading font-semibold text-white" style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', letterSpacing: '-0.03em', lineHeight: '1.1', textWrap: 'pretty' }}>
                동시대 미술을 가까이 만나는 곳
              </p>
              <p className="mt-8 max-w-[820px] text-2xl font-body text-white/65 leading-relaxed">
                OHMT는 작가의 질문과 관객의 경험이 만나는 전시를 기획합니다.<br />
                작품을 천천히 바라보고 각자의 언어로 이야기할 수 있는 자리를 만듭니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="lg:grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-black/60 mb-4">소개</p>
                <h2 className="max-w-[12ch] font-heading font-semibold text-black" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: '1.2', textWrap: 'pretty' }}>
                  작가의 시선, 관객의 경험
                </h2>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="text-base leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  OHMT 갤러리는 2018년 뉴욕 첼시의 옛 산업 건물을 개조해 문을 열었습니다. 동시대 작가의 작업을 온전히 보여주는 전시 공간을 만들고, 작품이 놓이는 방식과 관람의 흐름을 세심하게 설계해 왔습니다.
                </p>
                <p className="text-base leading-relaxed text-black/80 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  회화, 조각, 설치, 사진, 뉴미디어를 아우르며 오늘의 사회와 환경, 물질을 새로운 관점으로 바라보는 작가를 소개합니다. 익숙한 전제를 다시 살펴보고 서로 다른 해석이 오갈 수 있는 전시를 지향합니다.
                </p>
                <p className="text-base leading-relaxed text-black/80 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  전시와 함께 작가·큐레이터 토크, 워크숍, 공동 기획 프로그램을 운영해 작품의 배경과 제작 과정을 더 깊이 이해할 수 있도록 돕습니다.
                </p>
                <Link href="/ko/templates/OHMT003-exhibition/contact" className="inline-flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                  <span>문의하기</span>
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
