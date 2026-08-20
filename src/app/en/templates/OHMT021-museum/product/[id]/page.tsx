import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import Header from "../../_components/layout/Header";
import Footer from "../../_components/layout/Footer";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { products } from "../../data/products";
import theme from "../../theme.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));
  return {
    title: product ? `${product.name} - CURA Museum` : "Product - CURA Museum",
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id)) ?? products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <TemplateWrapper theme={theme}>
      <>
        <Header />
        <main className="min-h-screen bg-white text-[var(--color-primary)] pt-20 md:pt-32 pb-16 md:pb-28">
          <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20">
            <div className="overflow-hidden bg-[var(--color-secondary)]">
              <img src={product.img} alt={product.name} className="h-full min-h-[520px] w-full object-cover" />
            </div>

            <div className="flex flex-col justify-between gap-12">
              <div>
                <Link
                  href="/en/templates/OHMT021-museum/shop"
                  className="mb-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-black/45 transition-colors hover:text-black"
                >
                  <ArrowLeft size={15} />
                  Souvenir Shop
                </Link>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-black/35">{product.category}</p>
                <h1 className="font-serif text-5xl leading-[var(--leading-display)] tracking-tighter md:text-7xl">{product.name}</h1>
                <p className="mt-8 text-3xl font-serif tracking-tight">{product.price}</p>
                <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">{product.description}</p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 text-xs uppercase tracking-[0.24em] text-black/45 sm:grid-cols-2">
                  <div className="bg-white p-5">
                    <span className="mb-3 block text-black/30">Material</span>
                    <strong className="font-sans text-sm normal-case tracking-normal text-black">{product.material}</strong>
                  </div>
                  <div className="bg-white p-5">
                    <span className="mb-3 block text-black/30">Edition</span>
                    <strong className="font-sans text-sm normal-case tracking-normal text-black">{product.edition}</strong>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 bg-[var(--color-primary)] px-6 text-xs font-bold uppercase tracking-[0.32em] text-white transition-opacity hover:opacity-85">
                    <ShoppingBag size={16} />
                    Add to Bag
                  </button>
                  <button className="inline-flex min-h-14 items-center justify-center gap-3 border border-black/15 px-6 text-xs font-bold uppercase tracking-[0.32em] transition-colors hover:bg-black hover:text-white">
                    <Heart size={16} />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-20 max-w-[1440px] px-6 md:mt-28 md:px-12 lg:px-20">
            <div className="mb-8 flex items-end justify-between border-t border-black/10 pt-8">
              <h2 className="font-serif text-3xl tracking-tight md:text-5xl">You May Also Like</h2>
              <Link href="/en/templates/OHMT021-museum/shop" className="text-xs font-bold uppercase tracking-[0.28em] text-black/45 hover:text-black">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} href={`/en/templates/OHMT021-museum/product/${item.id}`} className="group">
                  <div className="mb-5 aspect-[4/5] overflow-hidden bg-[var(--color-secondary)]">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.24em] text-black/35">{item.category}</p>
                  <h3 className="mt-2 font-serif text-2xl tracking-tight">{item.name}</h3>
                  <p className="mt-2 text-sm font-bold">{item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </>
    </TemplateWrapper>
  );
}
