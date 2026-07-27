import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { LumaChrome } from "../_components/LumaChrome";

const products = [
  {
    name: "LUMA One",
    price: "$1,890",
    note: "Everyday compact body",
    spec: "28mm fixed lens",
    image: "/templates/OHMT031-luma-camera/shop-one-kit.jpg?v=20260702f",
    details: ["Neutral / Warm profile", "Daily carry mode", "Companion notes"],
    bestFor: "Walks, meals, travel, and the camera that makes it into the bag.",
  },
  {
    name: "LUMA One Pro",
    price: "$2,460",
    note: "Creator field kit",
    spec: "28mm lens + grip",
    image: "/templates/OHMT031-luma-camera/shop-pro-kit.jpg?v=20260702f",
    details: ["Grip + notes mode", "Extended recipe memory", "Creator field strap"],
    bestFor: "Editorial sets, product details, low-light interiors, and recipes you reuse.",
  },
];

const guide = [
  {
    title: "Choose One if the camera should stay invisible.",
    text: "The smaller setup is tuned for daily carry, fast frames, and fewer decisions.",
  },
  {
    title: "Choose Pro if the camera joins the work table.",
    text: "The grip, strap, and deeper recipe memory help when you repeat scenes and object setups.",
  },
  {
    title: "Both bodies share the same image language.",
    text: "Color, low-light texture, notes, and collections stay consistent across the system.",
  },
];

const kit = [
  "Compact matte black camera body",
  "USB-C charging cable and travel pouch",
  "Companion app recipe and note library",
  "First-year color profile updates",
];

const questions = [
  {
    q: "Do I need the Pro for image quality?",
    a: "No. The Pro is about handling and workflow. The image profiles are intentionally consistent across both cameras.",
  },
  {
    q: "Can I use LUMA without the app?",
    a: "Yes. The camera works on its own, while the app keeps recipes, notes, locations, and collections attached to the frame.",
  },
  {
    q: "Why only a fixed lens?",
    a: "The fixed setup keeps the camera pocketable and predictable, so the frame happens before the moment turns staged.",
  },
];

export default function ShopPage() {
  return (
    <LumaChrome>
      <main className="overflow-hidden pt-16">
        <section className="px-4 py-16 md:px-9 md:py-24">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <Sparkles size={28} strokeWidth={1.5} />
              <h1 className="luma-h1 mt-6 max-w-4xl">
                Choose the camera that stays out of the way.
              </h1>
            </div>
            <p className="luma-body max-w-sm">
              Two compact bodies, one quiet system. Pick the version that fits the way you move and make.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="luma-card !p-0 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                  <Image unoptimized src={product.image} alt={`${product.name} camera`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6 md:p-9">
                  <p className="luma-label text-[var(--luma-muted)]">{product.spec}</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em]">{product.name}</h2>
                  <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                  <p className="mt-3 text-lg font-bold tracking-[-0.035em]">{product.price}</p>
                  <p className="mt-6 text-sm leading-6 text-[var(--luma-muted)]">{product.bestFor}</p>
                  <div className="mt-9 grid gap-2 text-sm text-[var(--luma-muted)]">
                    {product.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 bg-[var(--luma-soft)] px-4 py-3">
                        <Check size={16} strokeWidth={1.8} className="text-[var(--luma-accent)]" />
                        <span className="font-semibold text-[var(--luma-ink)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-9 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                    Reserve {product.name} <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="luma-h2">A simple choice, based on how often you stage the shot.</h2>
            </div>
            <div className="grid gap-4">
              {guide.map((item) => (
                <article key={item.title} className="luma-card">
                  <h3 className="luma-h3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="relative min-h-[460px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/product-pro.jpg?v=20260702e" alt="LUMA One Pro body detail on a fabric surface" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="luma-card-dark">
              <p className="luma-label text-white/60">Included</p>
              <h2 className="luma-h2-sm mt-4">Enough kit for the first week, nothing extra.</h2>
              <div className="mt-9 grid gap-4">
                {kit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.8} className="mt-1 text-[var(--luma-accent)]" />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-2">
            <div className="luma-card">
              <h2 className="luma-h2-sm">Not sure yet?</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--luma-muted)]">Start with the scenes you actually shoot, then choose the body that fits them.</p>
              <Link href="/en/templates/OHMT031-luma-camera/scenes" className="mt-9 inline-flex items-center gap-2 bg-[var(--luma-dark)] px-6 py-3 text-sm font-bold text-white">
                Compare scenes <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image unoptimized src="/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e" alt="LUMA camera at a quiet dinner" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-9 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {questions.map((item) => (
              <article key={item.q} className="luma-card">
                <h3 className="luma-h3">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </LumaChrome>
  );
}
