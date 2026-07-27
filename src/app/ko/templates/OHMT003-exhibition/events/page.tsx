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
            <h1 className="max-w-[12ch] font-heading font-semibold text-black" style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.03em', lineHeight: '1.1', textWrap: 'pretty' }}>
              전시 연계 프로그램
            </h1>
            <p className="text-sm font-body text-black/50 leading-relaxed max-w-[32ch] md:text-right">
              작가와 큐레이터의 토크, 워크숍, 퍼포먼스, 전시 해설을 통해 작품을 한층 더 깊이 살펴보세요.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pt-16 pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {events.slice(0, 2).map((evt) => (
                <div key={evt.id} className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <p className="text-xs font-body text-black/50 tracking-[0.06em]">{evt.date} <span className="mx-1.5 opacity-40">·</span> {evt.time}</p>
                    <div className="flex gap-2">
                      <span className="text-xs font-body font-semibold uppercase tracking-[0.1em] px-2.5 py-1 border border-black">{evt.type}</span>
                      <span className="text-xs font-body font-semibold uppercase tracking-[0.1em] text-white bg-black px-2.5 py-1">{evt.ageRating}</span>
                    </div>
                  </div>
                  <h3 className="mt-3 text-[1.25rem] font-heading font-semibold tracking-[-0.02em] text-black leading-[var(--leading-heading)]">{evt.title}</h3>
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
