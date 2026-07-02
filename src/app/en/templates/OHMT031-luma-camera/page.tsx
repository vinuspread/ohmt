"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Focus, Moon, Smartphone, Sparkles } from "lucide-react";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const moments = [
  { label: "Morning street", value: "1/500", detail: "Fast wake capture with silent shutter feedback." },
  { label: "Studio table", value: "45 MP", detail: "High-detail product files for catalog and editorial crops." },
  { label: "Blue hour", value: "ISO 12800", detail: "Noise texture shaped for mood instead of plastic smoothness." },
];

const products = [
  {
    name: "LUMA One",
    price: "$1,890",
    note: "Everyday compact body",
    spec: "28mm fixed lens",
    image: "/templates/luma-camera/product-one.jpg?v=20260702e",
  },
  {
    name: "LUMA One Pro",
    price: "$2,460",
    note: "Creator field kit",
    spec: "28mm lens + grip",
    image: "/templates/luma-camera/product-pro.jpg?v=20260702e",
  },
];

const scenes = [
  {
    title: "Morning street",
    text: "Fast wake capture for quiet walks, window light, and the frame that disappears first.",
    image: "/templates/luma-camera/morning-street.jpg?v=20260702e",
    mode: "image",
  },
  {
    title: "Studio table",
    text: "High-detail files for makers shooting objects, packaging, and small editorial sets.",
    image: "/templates/luma-camera/studio-table.jpg?v=20260702e",
    mode: "image",
  },
  {
    title: "Blue hour",
    text: "Low-light color that keeps dusk blue, street lamps warm, and shadows believable.",
    image: "/templates/luma-camera/blue-hour.jpg?v=20260702e",
    mode: "text",
  },
  {
    title: "Quiet dinner",
    text: "A small camera for social rooms where the moment matters more than the gear.",
    image: "/templates/luma-camera/quiet-dinner.jpg?v=20260702e",
    mode: "text",
  },
];

const imageQuality = [
  {
    label: "Color",
    title: "Neutral color that survives editing",
    text: "The default profile holds skin, stone, food, and fabric in a soft contrast curve, so the file does not collapse when you crop or grade it.",
    image: "/templates/luma-camera/sample-color.jpg?v=20260702e",
  },
  {
    label: "Low light",
    title: "Texture instead of plastic smoothness",
    text: "Blue-hour and indoor scenes keep a little grain, warm practical light, and believable shadow detail.",
    image: "/templates/luma-camera/sample-lowlight.jpg?v=20260702e",
  },
  {
    label: "Detail",
    title: "Crisp texture without the brittle edge",
    text: "Fabric, ceramic, paper, and brushed metal keep their surface detail without turning into an over-sharpened technical demo.",
    image: "/templates/luma-camera/sample-detail.jpg?v=20260702e",
  },
];

const EASE = [0.23, 1, 0.32, 1] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function LumaCameraPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "LUMA Camera",
    description: "Premium compact camera system with quiet hardware, honest color, creator notes, and reservation options.",
    url: "https://ohmytemplate.com/en/templates/OHMT031-luma-camera",
    image: "https://ohmytemplate.com/templates/luma-camera/og-image.jpg?v=20260702e",
    brand: {
      "@type": "Brand",
      name: "OHMT",
    },
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      name: product.name,
      price: product.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: `${product.note}. ${product.spec}.`,
        image: "https://ohmytemplate.com/templates/luma-camera/hero-camera.jpg?v=20260702e",
      },
    })),
  };

  return (
    <TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed left-0 right-0 top-0 z-40 bg-[#222222] px-4 md:px-8">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between text-white">
          <Link href="/en/templates/OHMT031-luma-camera" className="inline-flex min-h-11 items-center text-sm font-black tracking-[0.14em] text-white">
            OHMT
          </Link>
          <div className="hidden items-center gap-3 text-xs font-semibold text-white/70 md:flex lg:gap-7">
            <Link href="/en/templates/OHMT031-luma-camera/image-engine" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">Image</Link>
            <Link href="/en/templates/OHMT031-luma-camera/scenes" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">Scenes</Link>
            <Link href="/en/templates/OHMT031-luma-camera/stories" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">Stories</Link>
            <Link href="/en/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">Shop</Link>
          </div>
          <Link href="/en/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 items-center justify-center bg-white/10 px-4 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#222222]">
            Reserve
          </Link>
        </nav>
      </header>

      <main className="overflow-hidden">
        <section className="luma-grain px-4 pb-16 pt-24 md:px-8 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative mx-auto min-h-[76dvh] max-w-[1380px] overflow-hidden bg-[var(--luma-dark)] shadow-2xl shadow-black/12"
          >
            <Image unoptimized src="/templates/luma-camera/hero-camera.jpg?v=20260702e" alt="LUMA compact camera product shot" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/76 via-black/30 to-black/5" />
            <div className="absolute left-0 top-0 p-6 text-white md:p-10 lg:p-14">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/62">Compact image system</p>
              <h1 className="max-w-[720px] text-[clamp(2.6rem,5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                Small camera. Serious image.
              </h1>
              <p className="mt-6 max-w-[560px] text-base leading-7 text-white/72 md:text-lg">
                A premium compact camera for makers who want tactile hardware, honest color, and a calmer way to capture every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/templates/OHMT031-luma-camera/shop" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-[var(--luma-ink)] transition-transform duration-200 ease-out active:scale-[0.97]">
                  Explore camera <ArrowRight size={16} />
                </Link>
                <Link href="/en/templates/OHMT031-luma-camera/image-engine" className="inline-flex items-center justify-center bg-white/12 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20">
                  See image engine
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-2">
            {products.map((product) => (
              <Reveal key={product.name}>
                <div className="group overflow-hidden bg-white/60 shadow-xl shadow-black/[0.04]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--luma-soft)]">
                    <Image unoptimized src={product.image} alt={`${product.name} compact camera on a tactile surface`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{product.spec}</p>
                      <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{product.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-[var(--luma-muted)]">{product.note}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href="/en/templates/OHMT031-luma-camera/image-engine" className="inline-flex min-h-11 min-w-11 items-center text-sm font-bold text-[var(--luma-ink)]">Explore</Link>
                      <Link href="/en/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 items-center bg-[var(--luma-dark)] px-5 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]">
                        Reserve
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="image-engine" className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal>
              <div className="max-w-2xl">
                <Focus size={25} strokeWidth={1.5} />
                <h2 className="mt-6 text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  Image quality without the big-camera ritual.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[var(--luma-muted)]">
                  LUMA is built around the files people actually keep: color that needs less fixing, low-light texture that still feels alive, and notes that explain why the frame mattered.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-8">
                <div className="grid gap-5 md:grid-cols-3">
                  {imageQuality.map((item) => (
                    <article key={item.label} className="overflow-hidden bg-white/45 shadow-lg shadow-black/[0.025]">
                      <div className="relative aspect-[7/5] overflow-hidden">
                        <Image unoptimized src={item.image} alt={`LUMA sample image for ${item.label.toLowerCase()}`} fill className="object-cover" sizes="(min-width: 768px) 28vw, 100vw" />
                      </div>
                      <div className="px-5 py-6">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--luma-muted)]">{item.label}</p>
                        <h3 className="mt-4 text-xl font-bold leading-[1.08] tracking-[-0.04em]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--luma-muted)]">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="bg-[var(--luma-dark)] p-6 text-white md:p-8">
                    <Smartphone size={22} strokeWidth={1.5} />
                    <h3 className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.04em]">Every frame keeps its context.</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/68">
                      The companion app stores lens notes, recipes, locations, and collections so the reason behind a shot is not lost later.
                    </p>
                  </div>
                  <div className="grid bg-[var(--luma-bg)] sm:grid-cols-3 lg:grid-cols-1">
                    {moments.map((item) => (
                      <div key={item.label} className="bg-white/55 p-5">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--luma-muted)]">{item.label}</p>
                        <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--luma-muted)]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="scenes" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  Designed for scenes that happen before you are ready.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--luma-muted)]">
                  LUMA wakes quickly, keeps color believable, and stays small enough to bring into the room instead of planning around it.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {scenes.map((scene, index) => (
                <Reveal key={scene.title} delay={index * 0.05}>
                  <article className="group relative aspect-[7/5] overflow-hidden bg-[var(--luma-dark)] shadow-xl shadow-black/[0.06]">
                    <div className="absolute inset-0">
                      <Image unoptimized src={scene.image} alt={`LUMA camera in a ${scene.title.toLowerCase()} scene`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
                    <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white md:p-8">
                      <h3 className="text-2xl font-bold tracking-[-0.04em]">{scene.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/72">{scene.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stories" className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-[1380px] gap-4 lg:grid-cols-[1fr_0.78fr]">
            <Reveal>
              <div className="group relative min-h-[620px] overflow-hidden bg-[var(--luma-dark)]">
                <Image unoptimized src="/templates/luma-camera/engine-lowlight-room.jpg?v=20260702f" alt="LUMA low-light sample with warm indoor light" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 max-w-xl p-7 text-white md:p-10">
                  <Moon size={24} strokeWidth={1.5} />
                  <h2 className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.035em] md:text-4xl">Night color without the noise drama.</h2>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/luma-camera/body-detail.jpg?v=20260702e" alt="LUMA camera body and lens detail" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="relative min-h-[300px] overflow-hidden bg-white">
                  <Image unoptimized src="/templates/luma-camera/app-insight.jpg?v=20260702e" alt="LUMA companion app beside the camera" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--luma-dark)] px-4 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <Smartphone size={26} strokeWidth={1.5} />
                <h2 className="mt-6 text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                  The app keeps the story attached to the frame.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                  Pair each image with lens notes, color recipes, locations, and personal collections, so the reason for the frame stays with the frame.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image unoptimized src="/templates/luma-camera/app-collection-view.jpg?v=20260702f" alt="LUMA companion app collection view and camera" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="shop" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1380px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <Sparkles size={24} strokeWidth={1.5} />
                  <h2 className="mt-5 max-w-3xl text-[clamp(1.8rem,3vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em]">
                    Choose the camera that stays out of the way.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[var(--luma-muted)]">
                  Two compact bodies, one quiet system. Pick the camera that fits the way you move.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <Reveal key={product.name}>
                  <div className="bg-white/55 p-7 shadow-xl shadow-black/[0.035]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-[-0.04em]">{product.name}</h3>
                        <p className="mt-2 text-sm text-[var(--luma-muted)]">{product.note}</p>
                      </div>
                      <p className="text-lg font-bold tracking-[-0.035em]">{product.price}</p>
                    </div>
                    <div className="mt-10 grid gap-3 text-sm text-[var(--luma-muted)]">
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>Color profile</span>
                        <span className="font-bold text-[var(--luma-ink)]">Neutral / Warm</span>
                      </div>
                      <div className="flex items-center justify-between bg-[var(--luma-soft)] px-4 py-3">
                        <span>Field mode</span>
                        <span className="font-bold text-[var(--luma-ink)]">{product.name.includes("Pro") ? "Grip + notes" : "Daily carry"}</span>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--luma-muted)]">{product.spec}</span>
                      <button className="bg-[var(--luma-dark)] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 ease-out active:scale-[0.97]">
                        Reserve
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 text-sm text-[var(--luma-muted)] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--luma-ink)]">LUMA by OHMT</p>
          <p>© 2026 OHMT. Compact camera concept.</p>
        </div>
      </footer>
    </TemplateWrapper>
  );
}
