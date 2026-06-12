import type { Metadata } from "next";
import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";

export const metadata: Metadata = {
  title: "멀티샵 - Oh My Template",
};

export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <SmoothScroll />
      {/* Fixed Frame Borders to prevent scroll bleed-through */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[#FCDF00] h-[20px] md:h-[48px]" />
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#FCDF00] h-[20px] md:h-[48px]" />
      <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[#FCDF00] w-[20px] md:w-[48px]" />
      <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[#FCDF00] w-[20px] md:w-[48px]" />
      <div className="ko-multi-shop p-[20px] md:p-[48px]" style={{ backgroundColor: "#FCDF00" }}>
        {children}
      </div>
    </>
  );
}

