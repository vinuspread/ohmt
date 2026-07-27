"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitHeading } from "../ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const details = [
  { label: "측면 디자인", image: "detail-side.jpg", span: "col-span-12 md:col-span-4" },
  { label: "원형 LED 헤드램프", image: "detail-headlight.jpg", span: "col-span-12 md:col-span-4" },
  { label: "파노라마 루프", image: "detail-roof.jpg", span: "col-span-12 md:col-span-4" },
  { label: "급속 충전 포트", image: "detail-charge.jpg", span: "col-span-12 md:col-span-4" },
  { label: "실내", image: "detail-interior.jpg", span: "col-span-12 md:col-span-4" },
  { label: "주차 보조", image: "detail-parking.jpg", span: "col-span-12 md:col-span-4" },
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
            text="기능을 중심으로 다듬은 디자인"
            className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
          />
          <p className="font-inter text-sm text-[var(--text-muted)] mt-4 max-w-[500px]">
            차체의 곡선과 선은 공기 흐름과 실내 공간을 함께 고려해 설계했습니다.<br />보이는 디자인에도 분명한 역할이 있습니다.</p>
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
              <div className="absolute bottom-5 left-5 font-inter text-xs font-medium tracking-[0.12em] text-white/90 uppercase transition-colors duration-300 group-hover:text-[var(--accent)]">
                {d.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
