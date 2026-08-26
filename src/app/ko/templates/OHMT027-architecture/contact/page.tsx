import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "프로젝트 문의 | OHMT 건축 스튜디오",
  description: "준비 중인 공간의 위치와 용도, 규모, 예산, 일정을 알려주세요.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT027-architecture/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
