import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";
import { ContactForm } from "./_components/ContactForm";
import type { PackageOption } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Custom Web Design Inquiry | OHMT",
  description: "Get in touch with OHMT for custom website design, template-based builds, or general inquiries. We respond within 1 business day.",
  alternates: {
    canonical: "https://ohmt.site/en/contact",
    languages: { ko: "https://ohmt.site/ko/contact" },
  },
  openGraph: {
    title: "Contact & Custom Web Design Inquiry | OHMT",
    description: "Get in touch with OHMT for custom website design, template-based builds, or general inquiries.",
    url: "https://ohmt.site/en/contact",
    siteName: "OHMT",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

interface TemplatePricingPolicy {
  applicable_packages: string[] | null;
  requires_consultation: boolean | null;
}

function toPackageOptions(packages: { slug: string; name: string; price: string }[] | null) {
  return (packages ?? []).map((p) => ({ id: p.slug, name: `${p.name} - ${p.price}` }));
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ template_slug?: string; [key: string]: string | undefined }>;
}) {
  const { template_slug } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase
    .from("pricing_packages")
    .select("slug, name, price")
    .eq("lang", "en")
    .eq("is_active", true)
    .order("sort_order");

  let requiresConsultation = false;
  let visiblePackageRows = data ?? [];

  if (template_slug) {
    const { data: templateData, error: templateError } = await supabase
      .from("templates")
      .select("applicable_packages, requires_consultation")
      .eq("slug", template_slug)
      .eq("lang", "en")
      .maybeSingle<TemplatePricingPolicy>();

    if (!templateError && templateData) {
      const applicablePackages = templateData.applicable_packages ?? [];
      requiresConsultation = Boolean(templateData.requires_consultation);

      if (requiresConsultation) {
        visiblePackageRows = [];
      } else if (applicablePackages.length > 0) {
        visiblePackageRows = (data ?? []).filter((p) => applicablePackages.includes(p.slug));
      }
    }
  }

  const packages: PackageOption[] = requiresConsultation
    ? []
    : [...toPackageOptions(visiblePackageRows), { id: "undecided", name: "To be decided" }];

  const { data: templateRows } = await supabase
    .from("templates")
    .select("name, slug, thumbnail_url, applicable_industries, description")
    .eq("lang", "en")
    .eq("status", "published")
    .order("sort_order");
  const templateList = (templateRows ?? []).map((t) => ({
    name: t.name as string,
    slug: t.slug as string,
    thumbnail_url: t.thumbnail_url as string | null,
    applicable_industries: (t.applicable_industries as string[]) ?? [],
    description: t.description as string | null,
  }));

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="bg-white border-b border-zinc-200/60 sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="px-6 md:px-12 lg:px-20 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <Link href="/ko/contact" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            KR
          </Link>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-[1440px] mx-auto">
        <Link href="/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-12 dark:text-zinc-500 dark:hover:text-zinc-100">
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="space-y-3 mb-10">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Get in Touch</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Your brand deserves<br />a website that works.</h1>
          <p className="text-base text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">
            Tell us what you need. We&apos;ll handle everything - design, development, and launch - so you can focus on your business.
          </p>
        </div>

        <Suspense>
          <ContactForm packages={packages} requiresConsultation={requiresConsultation} templateList={templateList} />
        </Suspense>
      </section>

      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] px-5 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start justify-between gap-9 md:flex-row md:gap-12">
            <div>
              <Link href="/en" className="flex h-6 w-fit items-center" aria-label="OH! MY TEMPLATES Home">
                <Logo className="block h-6 w-auto" />
              </Link>
              <p className="mt-5 text-sm font-normal leading-[1.7] text-zinc-600 dark:text-zinc-400">
                We build brand-fit websites on proven templates.
              </p>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-row flex-wrap items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/en" className="text-[#F1B100] transition-colors hover:text-[#d99e00]">View Templates</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/en/privacy-policy" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Privacy Policy</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/ko/contact" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Korean</Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-zinc-200/80 pt-8 text-[0.75rem] font-normal leading-[1.8] text-zinc-600 sm:text-[0.8125rem] dark:border-zinc-800 dark:text-zinc-400">
            <div className="hidden space-y-0.5 md:block">
              <p>Vinus Spread Inc. <span aria-hidden="true">|</span> CEO Sungyoung Han <span aria-hidden="true">|</span> Business Reg. No. 305-86-09778</p>
              <p>12F 1202, 227 Gonghang-daero, Gangseo-gu, Seoul, South Korea (Magok-dong, Magok Central Tower 1)</p>
              <p>
                Tel <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <span aria-hidden="true"> | </span>
                Email <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </p>
            </div>

            <div className="space-y-5 md:hidden">
              <div>
                <p>Vinus Spread Inc. · CEO Sungyoung Han</p>
                <p>Business Reg. No. 305-86-09778</p>
              </div>
              <address className="not-italic">
                12F 1202, 227 Gonghang-daero,<br />
                Gangseo-gu, Seoul, South Korea
              </address>
              <div className="flex flex-col items-start">
                <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[0.6875rem] font-normal leading-relaxed text-zinc-500 dark:text-zinc-500">
            &copy; 2026 Oh My Template by Vinus Spread. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
