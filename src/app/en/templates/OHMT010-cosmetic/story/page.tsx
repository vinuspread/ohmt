import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

export const metadata: Metadata = {
  title: "Our Story - VELURE Cosmetic",
  description: "Discover the story behind VELURE — premium skincare rooted in nature, refined by science.",
  openGraph: {
    title: "Our Story - VELURE Cosmetic",
    description: "Discover the story behind VELURE.",
    url: "https://ohmt.site/en/templates/OHMT010-cosmetic/story",
    siteName: "VELURE",
    images: [{ url: "/templates/OHMT010-cosmetic/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const principles = [
  {
    title: "Only what skin needs",
    description: "We design around essential skin functions and leave unnecessary fillers out.",
  },
  {
    title: "Performance, verified",
    description: "We repeatedly test each ingredient for purity, stability, and proven skin benefits.",
  },
  {
    title: "Formulas made for comfort",
    description: "Without synthetic fragrance or harsh preservatives, every formula is made for daily use.",
  },
];

const process = [
  { number: "01", title: "Ingredient selection", description: "We choose ingredients with traceable origins and responsible sourcing." },
  { number: "02", title: "Formula development", description: "Our laboratory balances visible performance with a refined skin feel." },
  { number: "03", title: "Safety testing", description: "We carefully assess purity, stability, and the potential for skin irritation." },
  { number: "04", title: "Responsible finish", description: "Recyclable packaging helps every product leave a lighter footprint." },
];

export default function CosmeticStoryPage() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />

        <section className="px-6 pb-16 pt-48 md:px-10 md:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 max-w-[1120px]">
              <span className="mb-4 block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">
                Our Story
              </span>
              <h1 className="text-balance text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] tracking-tight">
                Only what skin needs.
                <br />
                Made with responsibility.
              </h1>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/templates/OHMT010-cosmetic/cosmetic-1.jpg"
                alt="Clear skincare oil with botanical shadows"
                className="h-[58vh] min-h-[460px] w-full object-cover md:h-[70vh]"
              />
              <p className="absolute bottom-0 right-0 max-w-[560px] bg-[var(--color-bg)] px-6 py-7 text-[0.95rem] leading-loose text-[var(--color-text-muted)] md:px-10 md:py-9">
                We believe effective skincare and transparent standards belong together.
                Our formulas feel comfortable every day, and every choice behind them is clearly explained.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-32">
            <h2 className="text-balance text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
              Can performance and
              <br />
              transparency coexist?
            </h2>
            <div className="max-w-[680px] space-y-5 text-[0.95rem] leading-loose text-[var(--color-text-muted)]">
              <p>
                VELURE began with this question. We believe good skincare should be measured by what skin
                actually feels and by the care taken at every stage of production.
              </p>
              <p>
                Every formula is developed in our own laboratory using responsibly sourced ingredients.
                We repeatedly refine the balance between visible performance and a comfortable skin feel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-accent-light)] px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 md:mb-16">
              <h2 className="text-balance text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
                Three principles
                <br />
                behind every formula
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-24">
              <img
                loading="lazy"
                src="/templates/OHMT010-cosmetic/cosmetic-4.jpg"
                alt="Fresh oranges selected as a botanical ingredient"
                className="h-full max-h-[760px] min-h-[480px] w-full object-cover"
              />
              <div className="flex flex-col justify-center">
                {principles.map((principle, index) => (
                  <article
                    key={principle.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-black/15 py-8 first:border-t-0 md:py-10"
                  >
                    <span className="pt-1 text-[0.72rem] font-semibold text-black/40">0{index + 1}</span>
                    <div>
                      <h3 className="mb-3 text-[1.1rem] font-medium tracking-tight">{principle.title}</h3>
                      <p className="max-w-[470px] text-[0.95rem] leading-loose text-[var(--color-text-muted)]">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-12 text-balance text-[1.6rem] font-normal leading-[var(--leading-heading)] md:mb-16 md:text-[2.8rem]">
              From ingredient to product,
              <br />
              our standards stay constant
            </h2>
            <div className="grid border-y border-black/15 md:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-black/15 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="mb-12 block text-[0.72rem] font-semibold text-black/35 md:mb-20">
                    {item.number}
                  </span>
                  <h3 className="mb-3 text-[1.1rem] font-medium tracking-tight">{item.title}</h3>
                  <p className="text-[0.95rem] leading-loose text-[var(--color-text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid bg-black text-white lg:grid-cols-2">
          <img
            loading="lazy"
            src="/templates/OHMT010-cosmetic/cosmetic-face-mask.png"
            alt="A botanical face mask being applied during a skincare treatment"
            className="h-[520px] w-full object-cover lg:h-full lg:min-h-[760px]"
          />
          <div className="flex flex-col justify-between px-6 py-16 md:px-12 md:py-24 lg:px-[clamp(3rem,7vw,8rem)]">
            <div>
              <h2 className="mb-8 text-balance text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
                Better for skin.
                <br />
                Lighter on the planet.
              </h2>
              <p className="max-w-[560px] text-[0.95rem] leading-loose text-white/70">
                Our responsibility extends beyond the bottle. Recyclable packaging, responsibly sourced
                ingredients, and carbon-neutral shipping help reduce the footprint of every product.
              </p>
            </div>
            <dl className="mt-16 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-3 lg:mt-24">
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">5+ years</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">Dedicated formula research</dd>
              </div>
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">50,000</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">Customers who chose VELURE</dd>
              </div>
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">100%</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">Committed to cruelty-free care</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="px-6 py-16 text-center md:px-10 md:py-32">
          <div className="mx-auto max-w-[1000px]">
            <p className="mb-10 text-balance text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
              Effective formulas for skin.
              <br />
              A lighter footprint for the planet.
            </p>
            <Link
              href="/en/templates/OHMT010-cosmetic/shop"
              className="inline-flex min-h-12 items-center justify-center bg-black px-10 py-4 text-[0.85rem] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Shop the collection
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
