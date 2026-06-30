"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitHeading } from "../ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const details = [
  { label: "사이드 프로필", image: "detail-side.jpg", span: "col-span-12 md:col-span-4" },
  { label: "라운드 LED 헤드라이트", image: "detail-headlight.jpg", span: "col-span-12 md:col-span-4" },
  { label: "파노라마 루프", image: "detail-roof.jpg", span: "col-span-12 md:col-span-4" },
  { label: "급속 충전 포트", image: "detail-charge.jpg", span: "col-span-12 md:col-span-4" },
  { label: "인테리어", image: "detail-interior.jpg", span: "col-span-12 md:col-span-4" },
  { label: "스마트 주차", image: "detail-parking.jpg", span: "col-span-12 md:col-span-4" },
];

export function DesignDetail() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = sectionRef.current?.querySelectorAll(".detail-item");
    if (!items?.length) return;
    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="specs" className="bg-[var(--bg)] py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16">
          <SplitHeading
            text="디테일에 담긴 설계"
            className="font-michroma text-[clamp(26px,3vw,44px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em]"
          />
          <p className="font-inter text-[15px] text-[var(--text-muted)] mt-4 max-w-[500px]">
            모든 곡선과 라인에는 이유가 있습니다.<br />형태는 언제나 기능을 따릅니다.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {details.map((d) => (
            <div
              key={d.label}
              className={`detail-item group relative rounded-2xl overflow-hidden cursor-pointer ${d.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('/templates/OHMT028-ev/${d.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 font-inter text-[11px] font-medium tracking-[0.12em] text-white/90 uppercase transition-colors duration-300 group-hover:text-[var(--accent)]">
                {d.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
