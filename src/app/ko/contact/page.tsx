import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";
import { ContactForm } from "./_components/ContactForm";
import type { PackageOption } from "./_components/ContactForm";
import { SiteHeader } from "./_components/SiteHeader";

export const metadata: Metadata = {
  title: "문의 & 맞춤형 홈페이지 제작 상담 | OHMT",
  description: "OHMT에 웹사이트 제작, 템플릿 기반 홈페이지, 맞춤형 개발 등을 문의해주세요. 영업일 기준 1일 이내 답변 드립니다.",
  alternates: {
    canonical: "https://ohmt.site/ko/contact",
    languages: { en: "https://ohmt.site/en/contact" },
  },
  openGraph: {
    title: "문의 & 맞춤형 홈페이지 제작 상담 | OHMT",
    description: "OHMT에 웹사이트 제작, 템플릿 기반 홈페이지, 맞춤형 개발 등을 문의해주세요.",
    url: "https://ohmt.site/ko/contact",
    siteName: "OHMT",
    locale: "ko_KR",
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
    .eq("lang", "ko")
    .eq("is_active", true)
    .order("sort_order");

  let requiresConsultation = false;
  let visiblePackageRows = data ?? [];

  if (template_slug) {
    const { data: templateData, error: templateError } = await supabase
      .from("templates")
      .select("applicable_packages, requires_consultation")
      .eq("slug", template_slug)
      .eq("lang", "ko")
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
    : [...toPackageOptions(visiblePackageRows), { id: "undecided", name: "협의 후 결정" }];

  const { data: templateRows } = await supabase
    .from("templates")
    .select("name, slug, thumbnail_url, applicable_industries, description")
    .eq("lang", "ko")
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
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100 pt-[64px]">
      <SiteHeader />

      <section className="px-5 sm:px-6 md:px-12 lg:px-20 py-20 max-w-[1440px] mx-auto">
        <Link href="/ko" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-12 dark:text-zinc-500 dark:hover:text-zinc-100">
          <ArrowLeft size={14} />
          뒤로
        </Link>

        <div className="space-y-3 mb-10">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">상담 신청</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">브랜드에 어울리는<br />웹사이트, 함께 만들어요.</h1>
          <p className="text-base text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">
            디자인부터 개발, 런칭까지 - 모든 과정을 함께합니다.<br />비즈니스에 집중하세요. 나머지는 저희가 맡겠습니다.
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
              <Link href="/ko" className="flex h-6 w-fit items-center" aria-label="OH! MY TEMPLATES 홈">
                <Logo className="block h-6 w-auto" />
              </Link>
              <p className="mt-5 text-sm font-normal leading-[1.7] text-zinc-600 dark:text-zinc-400">
                템플릿을 기반으로 브랜드에 맞는 웹사이트를 제작합니다.
              </p>
            </div>

            <nav aria-label="푸터 메뉴" className="flex flex-row flex-wrap items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/ko" className="text-[#F1B100] transition-colors hover:text-[#d99e00]">템플릿 보기</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/ko/privacy-policy" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">개인정보처리방침</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/en/contact" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">English</Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-zinc-200/80 pt-8 text-[0.75rem] font-normal leading-[1.8] text-zinc-600 sm:text-[0.8125rem] dark:border-zinc-800 dark:text-zinc-400">
            <div className="hidden space-y-0.5 md:block">
              <p>㈜바이너스프레드 <span aria-hidden="true">|</span> 대표 한성영 <span aria-hidden="true">|</span> 사업자등록번호 305-86-09778</p>
              <p>서울특별시 강서구 공항대로 227, 12층 1202호 (마곡동, 마곡센트럴타워1차)</p>
              <p>
                대표전화 <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <span aria-hidden="true"> | </span>
                사이트 <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
                <span aria-hidden="true"> | </span>
                이메일 <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">vinus@vinus.co.kr</a>
              </p>
            </div>

            <div className="space-y-5 md:hidden">
              <div>
                <p>㈜바이너스프레드 · 대표 한성영</p>
                <p>사업자등록번호 305-86-09778</p>
              </div>
              <address className="not-italic">
                서울특별시 강서구 공항대로 227,<br />
                12층 1202호 (마곡동, 마곡센트럴타워1차)
              </address>
              <div className="flex flex-col items-start">
                <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
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
