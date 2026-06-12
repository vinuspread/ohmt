"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft, Shield, Truck, RefreshCw } from "lucide-react";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import theme from "../../theme.json";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import { Button } from "../../_components/ui/Button";
import Link from "next/link";

const FASHION_PRODUCTS = [
  { id: 1, name: '울 버킷 햇', price: '$120.00', image: '/templates/fashion/wool-hat.png', category: '액세서리', desc: '정교하게 제작된 구조적인 울 버킷 햇입니다. 깔끔한 기하학적 솔기와 우아하고 미니멀한 실루엣이 특징입니다. 하이 패션 레이어링에 완벽합니다.' },
  { id: 2, name: '클래식 트렌치 코트', price: '$850.00', image: '/templates/fashion/trench-coat.png', category: '아우터웨어', desc: '내구성이 뛰어난 코튼 가바딘 소재로 제작된 오버사이즈 더블 브레스티드 트렌치 코트입니다. 절제된 실루엣을 위한 구조적인 스톰 플랩과 미니멀한 벨트 클로저가 특징입니다.' },
  { id: 3, name: '미니멀리스트 백팩', price: '$350.00', image: '/templates/fashion/backpack.png', category: '가방', desc: '프리미엄 매트 블랙 가죽으로 제작되었습니다. 깔끔한 숨겨진 지퍼 구조의 싱글 플랩 수납공간이 특징입니다. 활동적인 현대 생활을 위한 궁극의 필수 아이템입니다.' },
  { id: 4, name: '프리미엄 가죽 부츠', price: '$480.00', image: '/templates/fashion/boots.png', category: '신발', desc: '스퀘어 토 하이탑 부츠입니다. 프리미엄 브러시드 카프스킨 가죽과 스택드 레더 힐, 사이드 지퍼 클로저가 특징입니다. 순수한 조형미를 선사합니다.' },
  { id: 5, name: '실크 이브닝 드레스', price: '$1,200.00', image: '/templates/fashion/silk-dress.png', category: '드레스', desc: '순수 헤비웨이트 실크 샤르무즈 소재로 제작된 흐르는 듯한 바닥 길이의 드레스입니다. 섬세하고 유연한 네크라인과 오픈 백 구조가 특징입니다. 절제된 우아함을 보여줍니다.' },
  { id: 6, name: '코튼 베이직 티셔츠', price: '$65.00', image: '/templates/fashion/basic-tee.png', category: '상의', desc: '박시한 헤비웨이트 코튼 저지 티셔츠입니다. 사이드 슬릿 헴 구조와 깔끔한 바운드 크루넥이 특징입니다. 편안하고 오래 지속되는 럭셔리 베이직 아이템으로 제작되었습니다.' }
];

function ProductDetailPageContent() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const product = FASHION_PRODUCTS.find((p) => String(p.id) === String(params.id));

  if (!mounted) return null;
  if (!product) return <div className="pt-40 text-center uppercase font-bold tracking-widest text-[13px]">제품을 찾을 수 없습니다</div>;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white min-h-screen pt-20 md:pt-28 pb-12 selection:bg-black selection:text-white">
        <Navbar />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10"
          >
            <ArrowLeft size={12} /> 컬렉션으로 돌아가기
          </Button>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 md:mb-24">
            {/* Left: Product Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 lg:sticky lg:top-32 h-fit"
            >
              <div className="relative aspect-square bg-[#F5F5F7] overflow-hidden w-full flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right: Product Details Stack */}
            <div className="flex flex-col lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Heading Block */}
                <div className="border-b border-black/10 pb-6">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-normal tracking-[-0.02em] uppercase leading-[1.5] text-[#000] mb-4">
                    {product.name}
                  </h1>
                  <p className="text-[16px] font-bold text-black/70">
                    {product.price}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-black/60 leading-relaxed font-normal normal-case">
                  {product.desc}
                </p>

                {/* Size Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.3em] block">사이즈 선택</span>
                  <div className="flex gap-3">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 text-[13px] font-bold uppercase tracking-wider transition-colors border flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-black border-black text-white"
                            : "border-black/15 text-black hover:border-black/55"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-black/15 px-6 py-4 sm:w-36">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50 transition-opacity">
                      <Minus size={14} />
                    </button>
                    <span className="text-[12px] font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50 transition-opacity">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add Bag Button */}
                  <Button
                    variant="primary"
                    onClick={() => router.push('/ko/templates/fashion/cart')}
                    className="flex-1 text-[13px] font-bold uppercase tracking-[0.3em] py-6"
                  >
                    장바구니 담기
                  </Button>
                </div>

                {/* Service Pointers */}
                <div className="border-t border-black/10 pt-6 space-y-4 text-[13px] font-bold uppercase tracking-[0.25em] text-black/40">
                  <div className="flex items-center gap-3">
                    <Truck size={14} />
                    <span>전 세계 무료 배송</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw size={14} />
                    <span>45일 무료 반품</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={14} />
                    <span>안전한 결제 보장</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Visual Story section */}
          <section className="mt-16 md:mt-24 pb-12 border-t border-black/10">
            <div className="pt-12 md:pt-16 mb-10 md:mb-16">
              <span className="text-[11px] font-medium text-black/40 uppercase tracking-[0.4em] mb-2 block">분위기</span>
              <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tighter leading-none text-black">절제된 침묵.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-[#F5F5F7] overflow-hidden"
              >
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
                  alt="제품 에디토리얼 이미지"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-normal uppercase leading-[1.5] text-black">
                  침묵으로 말하는<br/>테일러드 볼륨.
                </h3>
                <div className="w-12 h-px bg-black/20" />
                <p className="text-[13px] md:text-[14px] text-black/60 leading-relaxed font-normal normal-case max-w-md">
                  침묵을 통해 깊이를 전하는 실루엣. 각 의상은 전 세계에서 엄선된 최고급 소재로 정교하게 제작됩니다. 큐레이티드 모던 워드로브에 완벽히 통합되도록 디자인되었습니다. {product.desc}
                </p>
                <div className="pt-4">
                  <Link href="/ko/templates/fashion" className="text-[13px] font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    컬렉션으로 돌아가기
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function ProductDetailPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <ProductDetailPageContent {...props} />
    </React.Suspense>
  );
}
