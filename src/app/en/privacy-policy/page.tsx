import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy | Oh My Template",
  description: "Read the privacy policy for Oh My Template, operated by Vinus Spread Inc.",
  alternates: {
    canonical: "https://ohmt.site/en/privacy-policy",
    languages: {
      en: "https://ohmt.site/en/privacy-policy",
      ko: "https://ohmt.site/ko/privacy-policy",
      "x-default": "https://ohmt.site/en/privacy-policy",
    },
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: (
      <>
        <p>Oh My Template collects the following information when you submit an inquiry or use our services.</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Required: name, email, phone number, inquiry details</li>
          <li>Optional: company name, job title, budget range, file attachments</li>
          <li>Collected automatically: IP address, cookies, visit timestamps, usage logs</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Purpose of Collection and Use",
    body: (
      <ul className="space-y-1.5 list-disc pl-5">
        <li>Responding to consultation requests and providing quotes</li>
        <li>Delivering services, fulfilling contracts, and processing payments</li>
        <li>Communicating notices and handling complaints</li>
        <li>Analyzing usage to improve our service</li>
      </ul>
    ),
  },
  {
    title: "3. Retention Period",
    body: (
      <>
        <p>
          We destroy personal information without delay once its purpose has been fulfilled, except where retention
          is required by applicable law, in which case we retain it for the periods below.
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Records of contracts or withdrawal of subscription: 5 years</li>
          <li>Records of payment and supply of goods/services: 5 years</li>
          <li>Records of consumer complaints or dispute resolution: 3 years</li>
          <li>Website visit logs: 3 months</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Sharing with Third Parties",
    body: (
      <p>
        Oh My Template does not share personal information with third parties except with your prior consent or
        where required by law.
      </p>
    ),
  },
  {
    title: "5. Outsourced Processing",
    body: (
      <>
        <p>We outsource the following processing to operate our service, and require these providers to safeguard your information.</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Cloud infrastructure: Vercel Inc., Supabase Inc.</li>
          <li>Email delivery: Resend</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Your Rights",
    body: (
      <p>
        You may request to view, correct, delete, or restrict processing of your personal information at any time.
        Contact us by email below and we will respond promptly in accordance with applicable law.
      </p>
    ),
  },
  {
    title: "7. Cookies",
    body: (
      <p>
        Our website may use cookies to provide a more personalized experience. You can disable cookies in your
        browser settings, though this may limit some features of the service.
      </p>
    ),
  },
  {
    title: "8. Security Measures",
    body: (
      <ul className="space-y-1.5 list-disc pl-5">
        <li>Encryption and access control for personal information</li>
        <li>Technical safeguards against hacking and unauthorized access</li>
        <li>Limiting and training staff who handle personal information</li>
      </ul>
    ),
  },
  {
    title: "9. Privacy Officer",
    body: (
      <>
        <p>Direct any questions about how we handle personal information to our privacy officer below.</p>
        <ul className="mt-3 space-y-1.5">
          <li>Company: Vinus Spread Inc.</li>
          <li>CEO: Sungyoung Han</li>
          <li>
            Phone:{" "}
            <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">
              02-3661-1907
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:vinus@vinus.co.kr" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">
              vinus@vinus.co.kr
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "10. Changes to This Policy",
    body: (
      <p>
        This privacy policy may be updated to reflect changes in law, policy, or our services. We will post any
        changes on our website.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="bg-white border-b border-zinc-200/60 sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="px-6 md:px-12 lg:px-20 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <Link href="/ko" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            KR
          </Link>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[900px] mx-auto">
        <Link href="/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-12 dark:text-zinc-500 dark:hover:text-zinc-100">
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="space-y-3 mb-12">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Privacy Policy</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">Effective January 1, 2026</p>
        </div>

        <div className="space-y-10">
          {sections.map((sectionItem) => (
            <div key={sectionItem.title} className="space-y-3">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{sectionItem.title}</h2>
              <div className="text-sm leading-relaxed font-normal text-zinc-500 dark:text-zinc-400">{sectionItem.body}</div>
            </div>
          ))}
        </div>
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
              <Link href="/en/contact" className="text-[#F1B100] transition-colors hover:text-[#d99e00]">Get Started</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/en" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">View Templates</Link>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">|</span>
              <Link href="/ko/privacy-policy" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100">Korean</Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-zinc-200/80 pt-8 text-[0.75rem] font-normal leading-[1.8] text-zinc-600 sm:text-[0.8125rem] dark:border-zinc-800 dark:text-zinc-400">
            <div className="hidden space-y-0.5 md:block">
              <p>Vinus Spread Inc. <span aria-hidden="true">|</span> CEO Sungyoung Han <span aria-hidden="true">|</span> Business Reg. No. 305-86-09778</p>
              <p>12F 1202, 227 Gonghang-daero, Gangseo-gu, Seoul, South Korea (Magok-dong, Magok Central Tower 1)</p>
              <p>
                Tel <a href="tel:02-3661-1907" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">02-3661-1907</a>
                <span aria-hidden="true"> | </span>
                Site <a href="https://www.vinus.co.kr" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-100">https://www.vinus.co.kr</a>
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
