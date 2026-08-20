"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { ArrowLeft, ShoppingBag, Calendar, Sparkles, Shield, Heart } from "lucide-react";

const PRODUCTS_KO = [
  { 
    id: 1, 
    name: "다이아몬드 솔리테어 반지", 
    price: "₩4,250,000", 
    img: "/templates/OHMT002-jewelry/jewelry-ring.png", 
    category: "engagement",
    desc: "라운드 다이아몬드를 여섯 개의 프롱으로 안정감 있게 세팅한 클래식 솔리테어 반지입니다. 플래티넘 밴드가 원석의 맑은 빛을 담백하게 담아냅니다.",
    specs: { carat: "1.5ct", gemstone: "Round Brilliant Diamond", metal: "Platinum 950", clarity: "VVS1" }
  },
  { 
    id: 2, 
    name: "로즈 골드 인피니티 밴드", 
    price: "₩3,400,000", 
    img: "/templates/OHMT002-jewelry/infinity-band.png", 
    category: "engagement",
    desc: "18K 로즈 골드 밴드에 작은 다이아몬드를 촘촘하게 세팅했습니다. 단독으로 착용하거나 다른 반지와 함께 겹쳐 끼기 좋습니다.",
    specs: { carat: "0.8ct", gemstone: "Full-Cut Diamonds", metal: "18K Rose Gold", clarity: "VS2" }
  },
  { 
    id: 3, 
    name: "에메랄드 컷 헤일로 반지", 
    price: "₩6,800,000", 
    img: "/templates/OHMT002-jewelry/emerald-cut-ring.png", 
    category: "engagement",
    desc: "에메랄드 컷 다이아몬드 둘레에 라운드 다이아몬드를 세팅한 헤일로 반지입니다. 직선적인 중심 원석과 섬세한 테두리가 또렷한 인상을 만듭니다.",
    specs: { carat: "2.0ct", gemstone: "Emerald-Cut Diamond", metal: "Platinum 950", clarity: "VVS2" }
  },
  { 
    id: 4, 
    name: "남양 진주 펜던트", 
    price: "₩1,850,000", 
    img: "/templates/OHMT002-jewelry/jewelry-pendant.png", 
    category: "collections",
    desc: "은은한 광택의 남양 진주에 작은 다이아몬드 장식을 더한 펜던트입니다. 체인 아래로 자연스럽게 떨어져 단정하고 우아한 분위기를 연출합니다.",
    specs: { gemstone: "South Sea Pearl & Diamonds", metal: "18K Yellow Gold", clarity: "Natural High Lustre" }
  },
  { 
    id: 5, 
    name: "클래식 테니스 다이아몬드 목걸이", 
    price: "₩15,500,000", 
    img: "/templates/OHMT002-jewelry/tennis-necklace.png", 
    category: "high-jewelry",
    desc: "크기와 빛이 고르게 이어지도록 다이아몬드를 한 줄로 세팅한 테니스 목걸이입니다. 목선을 따라 부드럽게 놓이도록 연결 구조와 착용감을 세심하게 조정했습니다.",
    specs: { carat: "3.5ct Total", gemstone: "Round Cut Diamonds", metal: "18K White Gold", clarity: "VVS1" }
  },
  { 
    id: 6, 
    name: "아쿠아 블루 사파이어 뱅글", 
    price: "₩12,200,000", 
    img: "/templates/OHMT002-jewelry/bangle-item.png", 
    category: "high-jewelry",
    desc: "플래티넘 밴드에 밝은 아쿠아 블루 사파이어와 마키즈 컷 다이아몬드를 세팅한 뱅글입니다. 차분한 색감과 선명한 형태가 조화를 이룹니다.",
    specs: { gemstone: "Blue Sapphires & Diamonds", metal: "Platinum 950", clarity: "Eye-Clean" }
  },
  { 
    id: 7, 
    name: "골드 링크 체인 팔찌", 
    price: "₩2,950,000", 
    img: "/templates/OHMT002-jewelry/gold-link-bracelet.png", 
    category: "high-jewelry",
    desc: "18K 옐로 골드 링크를 하나씩 연결하고 표면을 손으로 다듬어 완성한 체인 팔찌입니다. 단독으로 착용해도 존재감이 있으며, 시간이 지나며 자연스러운 광택이 더해집니다.",
    specs: { gemstone: "Pure Yellow Gold Links", metal: "18K Yellow Gold", clarity: "Polished Satin Finish" }
  },
  { 
    id: 8, 
    name: "다이아몬드 스터드 귀걸이", 
    price: "₩1,250,000", 
    img: "/templates/OHMT002-jewelry/diamond-studs.png", 
    category: "collections",
    desc: "라운드 다이아몬드를 네 개의 프롱으로 세팅한 기본형 스터드 귀걸이입니다. 원석의 비율과 좌우 균형을 맞춰 일상에서 부담 없이 착용할 수 있습니다.",
    specs: { carat: "0.5ct Each", gemstone: "Round Diamonds", metal: "18K White Gold", clarity: "VS1" }
  },
  { 
    id: 9, 
    name: "아코야 진주 드롭 귀걸이", 
    price: "₩980,000", 
    img: "/templates/OHMT002-jewelry/pearl-drop-earrings.png", 
    category: "collections",
    desc: "광택과 형태를 맞춘 아코야 진주를 가는 골드 체인 아래에 연결한 드롭 귀걸이입니다. 움직일 때마다 진주가 자연스럽게 흔들리며 은은한 빛을 냅니다.",
    specs: { gemstone: "Akoya Sea Pearls", metal: "18K Yellow Gold", clarity: "AAAA Mirror Lustre" }
  },
  { 
    id: 10, 
    name: "에메랄드 샹들리에 귀걸이", 
    price: "₩18,900,000", 
    img: "/templates/OHMT002-jewelry/emerald-chandelier.png", 
    category: "high-jewelry",
    desc: "에메랄드와 작은 다이아몬드를 층층이 연결한 드롭 귀걸이입니다. 길게 떨어지는 구조가 얼굴선을 또렷하게 보여주며 특별한 자리에도 잘 어울립니다.",
    specs: { carat: "4.2ct Total", gemstone: "Deep Forest Emeralds", metal: "18K White Gold", clarity: "VVS2" }
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id || "1");
  const product = PRODUCTS_KO.find(p => p.id === id) || PRODUCTS_KO[0];

  const [bookingModal, setBookingModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${formData.name}님, ${formData.date} 부티크 방문 상담 예약이 접수되었습니다.`);
    setBookingModal(false);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="min-h-screen bg-[#FAF8F5] text-[#1E352F] font-sans selection:bg-[#C5A880] selection:text-white pb-20">
        <Navbar />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-36">
          {/* Back button */}
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.2em] mb-8 hover:opacity-75 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Lineup
          </button>

          {/* Sticky Split Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* Left: Sticky Image Gallery */}
            <div className="md:sticky md:top-28 w-full aspect-[4/5] bg-white border border-[#1E352F]/10 overflow-hidden relative shadow-sm">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-6 left-6 text-[0.62rem] font-bold uppercase tracking-[0.3em] bg-[#1E352F] text-white px-3 py-1.5">
                {product.category}
              </span>
            </div>

            {/* Right: Scrolling Detail Panel */}
            <div className="flex flex-col">
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] leading-[var(--leading-heading)] mb-4 font-bold tracking-tight">
                {product.name}
              </h1>
              
              <div className="text-[1.3rem] font-medium tracking-tight mb-8 text-[#C5A880]">
                {product.price}
              </div>

              <div className="border-t border-b border-[#1E352F]/10 py-6 mb-8">
                <p className="text-[0.98rem] leading-relaxed text-[#1E352F]/80 mb-6 font-normal break-keep">
                  {product.desc}
                </p>
                <div className="flex items-center gap-2 text-[0.8rem] text-[#C5A880] uppercase tracking-[0.15em] font-bold">
                  <Sparkles className="w-4 h-4" /> Conflict-Free Ethical Sourcing Guarantee
                </div>
              </div>

              {/* Gemstone Specifications */}
              <div className="mb-8">
                <h3 className="text-[0.8rem] uppercase tracking-[0.2em] font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[0.9rem] border border-[#1E352F]/10 p-5 bg-white">
                  <div>
                    <span className="text-[#1E352F]/50 block text-[0.75rem] uppercase tracking-[0.1em] mb-1">Gemstone</span>
                    <span className="font-medium">{product.specs.gemstone}</span>
                  </div>
                  <div>
                    <span className="text-[#1E352F]/50 block text-[0.75rem] uppercase tracking-[0.1em] mb-1">Metal Type</span>
                    <span className="font-medium">{product.specs.metal}</span>
                  </div>
                  {product.specs.carat && (
                    <div>
                      <span className="text-[#1E352F]/50 block text-[0.75rem] uppercase tracking-[0.1em] mb-1">Carat Weight</span>
                      <span className="font-medium">{product.specs.carat}</span>
                    </div>
                  )}
                  {product.specs.clarity && (
                    <div>
                      <span className="text-[#1E352F]/50 block text-[0.75rem] uppercase tracking-[0.1em] mb-1">Clarity Grade</span>
                      <span className="font-medium">{product.specs.clarity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <button 
                    onClick={() => alert("장바구니에 담았습니다.")}
                    className="flex-1 bg-[#1E352F] text-[#FAF8F5] py-4 text-[0.85rem] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-14 border border-[#1E352F]/20 flex items-center justify-center transition-colors ${isLiked ? "bg-red-50/50 border-red-200 text-red-500" : "hover:bg-[#1E352F]/5"}`}
                  >
                    <svg className="w-5 h-5 text-red-500" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <button 
                  onClick={() => setBookingModal(true)}
                  className="w-full border border-[#1E352F] py-4 text-[0.85rem] uppercase tracking-[0.2em] font-bold text-[#1E352F] hover:bg-[#1E352F] hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  <Calendar className="w-4 h-4" /> Book Salon Appointment
                </button>
              </div>

              {/* Premium Guarantee Badges */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#1E352F]/10 pt-8">
                <div className="flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-1">Lifetime Warranty</h4>
                    <p className="text-[0.72rem] text-[#1E352F]/60 leading-relaxed">제품과 함께 정품 인증서와 품질 보증 안내서를 제공합니다.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Sparkles className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-1">Maison Packaging</h4>
                    <p className="text-[0.72rem] text-[#1E352F]/60 leading-relaxed">AVELINE 전용 케이스와 보호용 파우치에 담아 안전하게 배송합니다.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Private Salon Appointment Booking Modal */}
        {bookingModal && (
          <div className="fixed inset-0 z-50 bg-[#1E352F]/40 backdrop-blur-md flex items-center justify-center p-6">
            <div className="bg-[#FAF8F5] border border-[#1E352F]/20 max-w-[480px] w-full p-8 shadow-2xl relative">
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-bold mb-4 tracking-tight">Private Salon Booking</h2>
              <p className="text-[0.85rem] text-[#1E352F]/70 mb-6 leading-relaxed">
                가까운 AVELINE 부티크에서 주얼리 전문가와 1:1로 상담하고, 제품을 직접 착용해 보세요.
              </p>
              
              <form onSubmit={handleBooking} className="flex flex-col gap-4">
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">성함</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#1E352F]/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[#C5A880]" 
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">연락처</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#1E352F]/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[#C5A880]" 
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] uppercase tracking-[0.15em] font-bold block mb-1">희망 방문일</label>
                  <input 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#1E352F]/15 px-4 py-2.5 text-[0.9rem] focus:outline-none focus:border-[#C5A880]" 
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button 
                    type="button"
                    onClick={() => setBookingModal(false)}
                    className="flex-1 border border-[#1E352F]/20 py-3 text-[0.8rem] uppercase tracking-[0.15em] font-bold hover:bg-[#1E352F]/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-[#1E352F] text-white py-3 text-[0.8rem] uppercase tracking-[0.15em] font-bold hover:opacity-90 transition-opacity"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </main>
    </TemplateWrapper>
  );
}