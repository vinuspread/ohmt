import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { events } from '../constants';
import { Navbar } from '../_components/Navbar';
import { Footer } from '../_components/Footer';

export default function EventsPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main>
        <section className="bg-[var(--color-bg)] pt-40 pb-16 border-b border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-heading font-semibold uppercase text-black leading-none" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}>
              프로그램 &<br />이벤트
            </h1>
            <p className="text-[14px] font-body text-black/50 leading-relaxed max-w-[32ch] md:text-right">
              토크, 워크숍, 퍼포먼스, 가이드 투어 - 현대미술과의 깊은 연결을 위해 설계된 프로그램입니다.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pt-16 pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {events.map((evt) => (
                <div key={evt.id} className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <p className="text-[11px] font-body text-black/50 tracking-[0.06em]">{evt.date} <span className="mx-1.5 opacity-40">·</span> {evt.time}</p>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-[0.1em] text-white bg-black px-2.5 py-1">{evt.ageRating}</span>
                  </div>
                  <h3 className="mt-3 text-[1.25rem] font-heading font-semibold tracking-[-0.02em] text-black leading-tight">{evt.title}</h3>
                  <p className="mt-2 text-[11px] font-body text-black/40 tracking-[0.08em]">{evt.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
