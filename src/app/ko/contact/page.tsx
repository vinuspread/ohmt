import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { createClient } from "@/lib/supabase/server";
import { ContactForm } from "./_components/ContactForm";
import type { PackageOption } from "./_components/ContactForm";

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

  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="bg-white border-b border-zinc-200/60 sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="px-6 md:px-12 lg:px-20 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/ko" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <Link href="/en/contact" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            EN
          </Link>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-[1440px] mx-auto">
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
          <ContactForm packages={packages} requiresConsultation={requiresConsultation} />
        </Suspense>
      </section>

      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="px-6 md:px-12 lg:px-20 py-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/ko" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
              <Link href="/en/contact" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">English</Link>
              <Link href="/ko" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">템플릿 보기</Link>
            </div>
          </div>
          <div className="text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            &copy; 2026 Oh My Template. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
