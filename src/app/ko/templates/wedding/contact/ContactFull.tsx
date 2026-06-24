"use client";

import { motion } from "framer-motion";
import ContactForm from "../_components/sections/ContactForm";
import Navbar from "../_components/layout/Navbar";
import Footer from "../_components/layout/Footer";

export default function ContactFull() {
  return (
    <>
      <Navbar solid />
      <NavSpacer />
      <main>
        <section className="bg-[var(--color-bg)] min-h-[100dvh] flex">
          <div className="w-full lg:grid lg:grid-cols-2">
            <div className="hidden lg:block relative overflow-hidden">
              <div className="sticky top-0 h-screen">
                <img
                  src="/templates/wedding/wedding-story-01.jpg"
                  alt="웨딩 ceremony"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1A1816]/30" />
                <div className="absolute bottom-12 left-12 right-12">
                  <p className="font-[family-name:var(--font-heading)] text-4xl font-light normal-case text-white leading-[1.1]">
                    모든 사랑 이야기는 아름답게 기록될 자격이 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 lg:px-16 xl:px-20 py-24 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)] block mb-4">
                  문의하기
                </span>
              </motion.div>
              <ContactForm />
        </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

function NavSpacer() {
  return <div className="h-[72px]" />;
}
