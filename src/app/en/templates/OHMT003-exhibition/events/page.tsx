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
            <h1
              className="font-heading font-semibold uppercase text-black leading-none"
              style={{ fontSize: 'clamp(4rem, 7vw, 7rem)', letterSpacing: '-0.04em' }}
            >
              Programs &<br />Events
            </h1>
            <p className="text-[14px] font-body text-black/50 leading-relaxed max-w-[32ch] md:text-right">
              Talks, workshops, performances, and guided tours - designed to deepen your connection with contemporary art.
            </p>
          </div>
        </section>

        <section className="bg-[var(--color-bg)] pb-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {events.map((evt) => (
                <div key={evt.id} className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex gap-6 mt-6">
                    <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--color-border)] bg-[var(--color-card-bg)]">
                      {evt.date}
                    </span>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--color-border)] bg-[var(--color-card-bg)]">
                      {evt.time}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1.25rem] font-heading font-semibold uppercase tracking-[-0.02em] text-black">
                    {evt.title}
                  </h3>
                  <div className="flex gap-3 mt-3">
                    <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--color-border)] bg-[var(--color-card-bg)]">
                      {evt.type}
                    </span>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--color-border)] bg-[var(--color-card-bg)]">
                      {evt.ageRating}
                    </span>
                  </div>
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
