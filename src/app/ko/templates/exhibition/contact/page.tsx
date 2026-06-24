import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Navbar } from '../_components/Navbar';
import { Footer } from '../_components/Footer';

const infoBlocks = [
  { label: '주소', value: '123 West 25th Street\nNew York, NY 10001' },
  { label: '운영 시간', value: '화-금 오전 10시-오후 6시\n토-일 오전 10시-오후 8시\n월요일 휴관' },
  { label: '전화', value: '+1 (212) 555-0147' },
  { label: '이메일', value: 'info@formagallery.com' },
];

export default function ContactPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        <section className="bg-[var(--color-bg)] pt-40 pb-16 border-b border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-heading font-semibold uppercase text-black leading-none" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}>
              문의하기
            </h1>
            <p className="text-[14px] font-body text-black/50 leading-relaxed max-w-[32ch] md:text-right">
              전시 관련 질문, 예약 문의, 또는 그냥 안녕이라고 하고 싶으실 때 언제든지 연락해 주세요.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] py-16">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap gap-6">
            <a href="tel:+12125550147" className="relative overflow-hidden group px-8 py-4 border border-black">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">전화: +1 (212) 555-0147</span>
            </a>
            <a href="mailto:info@formagallery.com" className="relative overflow-hidden group px-8 py-4 border border-black">
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">이메일 보내기</span>
            </a>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pb-16">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
              {infoBlocks.map((info) => (
                <div key={info.label} className="bg-[var(--color-bg)] p-8 md:p-10">
                  <p className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/50 mb-2">{info.label}</p>
                  <p className="text-[1.5rem] font-heading font-semibold text-black whitespace-pre-line" style={{ letterSpacing: '-0.02em' }}>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <form className="max-w-[640px]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/50 block mb-2">이름</label>
                  <input type="text" className="w-full border border-[var(--color-border)] px-4 py-3 text-[14px] font-body text-black bg-transparent outline-none focus:border-black transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/50 block mb-2">이메일</label>
                  <input type="email" className="w-full border border-[var(--color-border)] px-4 py-3 text-[14px] font-body text-black bg-transparent outline-none focus:border-black transition-colors" />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/50 block mb-2">전화번호</label>
                <input type="tel" className="w-full border border-[var(--color-border)] px-4 py-3 text-[14px] font-body text-black bg-transparent outline-none focus:border-black transition-colors" />
              </div>
              <div className="mt-6">
                <label className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-black/50 block mb-2">메시지</label>
                <textarea rows={5} className="w-full border border-[var(--color-border)] px-4 py-3 text-[14px] font-body text-black bg-transparent outline-none focus:border-black transition-colors resize-none" />
              </div>
              <button type="submit" className="relative overflow-hidden group mt-8 px-8 py-4 border border-black">
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative text-black group-hover:text-white text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300">보내기</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
