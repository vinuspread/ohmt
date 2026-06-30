"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { menuItems } from "../data/data";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, ArrowLeft, ShoppingBag, CreditCard, ChevronRight } from "lucide-react";

// 주문 프로세스 단계 정의
type OrderStep = "burger" | "options" | "drinks" | "payment" | "success";

interface OrderState {
  burger: typeof menuItems[0] | null;
  options: {
    patty: "single" | "double" | "triple";
    sauce: "default" | "extra" | "none";
    onion: boolean;
    bacon: boolean;
  };
  drink: typeof menuItems[0] | null;
}

const steps: { key: OrderStep; label: string }[] = [
  { key: "burger", label: "버거 선택" },
  { key: "options", label: "옵션 선택" },
  { key: "drinks", label: "음료 선택" },
  { key: "payment", label: "주문 및 결제" },
  { key: "success", label: "완료" },
];

function OrderPageContent() {
  const [step, setStep] = useState<OrderStep>("burger");
  const [order, setOrder] = useState<OrderState>({
    burger: null,
    options: {
      patty: "double",
      sauce: "default",
      onion: true,
      bacon: false,
    },
    drink: null,
  });

  // 메뉴 리스트 분류
  const burgers = menuItems.filter(item => item.category === "burger" || item.category === "chicken");
  const drinks = menuItems.filter(item => item.category === "drinks");

  // 가격 계산기
  const calculateTotal = () => {
    if (!order.burger) return 0;
    let total = order.burger.price;
    
    // 패티 옵션 추가 금액
    if (order.options.patty === "double") total += 2.0;
    if (order.options.patty === "triple") total += 4.0;
    
    // 베이컨 추가 금액
    if (order.options.bacon) total += 1.5;
    
    // 음료 금액
    if (order.drink) total += order.drink.price;
    
    return parseFloat(total.toFixed(2));
  };

  const selectBurger = (burger: typeof menuItems[0]) => {
    setOrder(prev => ({ ...prev, burger }));
    setStep("options");
  };

  const saveOptions = () => {
    setStep("drinks");
  };

  const selectDrink = (drink: typeof menuItems[0]) => {
    setOrder(prev => ({ ...prev, drink }));
    setStep("payment");
  };

  const processPayment = () => {
    setStep("success");
  };

  const handleBack = () => {
    if (step === "options") setStep("burger");
    else if (step === "drinks") setStep("options");
    else if (step === "payment") setStep("drinks");
  };

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen pt-20 md:pt-24 bg-white text-[var(--color-text)]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
            
            {/* Step Progress Indicator (Only visible if not success) */}
            {step !== "success" && (
              <div className="flex items-center justify-between overflow-x-auto pb-6 border-b border-[var(--color-border)] mb-10 gap-2 scrollbar-none">
                {steps.slice(0, 4).map((s, idx) => {
                  const isActive = step === s.key;
                  const isCompleted = 
                    steps.findIndex(x => x.key === step) > steps.findIndex(x => x.key === s.key);
                  return (
                    <div key={s.key} className="flex items-center gap-3 shrink-0">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[var(--color-accent-sub)] text-white ring-4 ring-[var(--color-bg-secondary)]"
                            : isCompleted
                            ? "bg-[var(--color-primary)] text-white"
                            : "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]"
                        }`}
                      >
                        {isCompleted ? <Check size={18} /> : idx + 1}
                      </div>
                      <span
                        className={`text-base font-bold transition-colors duration-300 ${
                          isActive ? "text-[var(--color-accent-sub)] font-extrabold" : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        {s.label}
                      </span>
                      {idx < 3 && <ChevronRight size={18} className="text-[var(--color-text-muted)] opacity-40 mx-2" />}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Layout Grid (4 columns, content occupies 3 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Main Interaction Area */}
              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  
                  {/* Step 1: Burger Selection */}
                  {step === "burger" && (
                    <motion.div
                      key="burger-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold font-heading mb-6">수제 버거를 선택해주세요</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {burgers.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => selectBurger(item)}
                            className="group bg-[var(--color-bg-secondary)] rounded-none overflow-hidden cursor-pointer transition-transform duration-300 active:scale-[0.98]"
                          >
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4 md:p-5">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-base md:text-lg font-bold leading-tight">{item.name}</h3>
                                <span className="text-base md:text-lg font-bold text-[var(--color-accent)] shrink-0">${item.price}</span>
                              </div>
                              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">{item.description}</p>
                              {item.calories && (
                                <span className="text-xs text-[var(--color-text-muted)] mt-2 block">{item.calories} cal</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Options Selection */}
                  {step === "options" && order.burger && (
                    <motion.div
                      key="options-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleBack}
                          className="p-2 border border-[var(--color-border)] rounded-full hover:bg-[var(--color-bg-secondary)]"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <h2 className="text-2xl font-bold font-heading">버거 커스텀 옵션</h2>
                      </div>

                      {/* Option: Patty Stack */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold tracking-wide uppercase text-[var(--color-text-muted)]">패티 장수 선택</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { key: "single", label: "싱글 패티", price: "기본" },
                            { key: "double", label: "더블 패티", price: "+$2.00" },
                            { key: "triple", label: "트리플 패티", price: "+$4.00" },
                          ].map(opt => (
                            <button
                              key={opt.key}
                              onClick={() => setOrder(prev => ({
                                ...prev,
                                options: { ...prev.options, patty: opt.key as any }
                              }))}
                              className={`border px-4 py-3 text-center transition-all rounded-full ${
                                order.options.patty === opt.key
                                  ? "border-[var(--color-accent-sub)] bg-[var(--color-bg-secondary)] font-bold text-[var(--color-accent-sub)]"
                                  : "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
                              }`}
                            >
                              <div className="text-sm">{opt.label}</div>
                              <div className="text-xs text-[var(--color-text-muted)] mt-1">{opt.price}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Option: Sauce preference */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold tracking-wide uppercase text-[var(--color-text-muted)]">소스 양 선택</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { key: "none", label: "소스 없이" },
                            { key: "default", label: "보통" },
                            { key: "extra", label: "소스 많이" },
                          ].map(opt => (
                            <button
                              key={opt.key}
                              onClick={() => setOrder(prev => ({
                                ...prev,
                                options: { ...prev.options, sauce: opt.key as any }
                              }))}
                              className={`border px-4 py-3 text-center transition-all rounded-full ${
                                order.options.sauce === opt.key
                                  ? "border-[var(--color-accent-sub)] bg-[var(--color-bg-secondary)] font-bold text-[var(--color-accent-sub)]"
                                  : "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
                              }`}
                            >
                              <div className="text-sm">{opt.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Option: Add-ons & Ingredients */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold tracking-wide uppercase text-[var(--color-text-muted)]">재료 추가/제외</h3>
                        <div className="space-y-2">
                          <label className="flex items-center justify-between border border-[var(--color-border)] p-4 rounded-xl cursor-pointer hover:bg-[var(--color-bg-secondary)]">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold">스모크 베이컨 추가</span>
                              <span className="text-xs text-[var(--color-text-muted)]">바삭한 훈제 베이컨 슬라이스 2장</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-[var(--color-accent-sub)]">+$1.50</span>
                              <input
                                type="checkbox"
                                checked={order.options.bacon}
                                onChange={(e) => setOrder(prev => ({
                                  ...prev,
                                  options: { ...prev.options, bacon: e.target.checked }
                                }))}
                                className="w-5 h-5 accent-[var(--color-accent-sub)]"
                              />
                            </div>
                          </label>

                          <label className="flex items-center justify-between border border-[var(--color-border)] p-4 rounded-xl cursor-pointer hover:bg-[var(--color-bg-secondary)]">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold">양파 포함</span>
                              <span className="text-xs text-[var(--color-text-muted)]">신선한 적양파 슬라이스</span>
                            </div>
                            <input
                              type="checkbox"
                              checked={order.options.onion}
                              onChange={(e) => setOrder(prev => ({
                                ...prev,
                                options: { ...prev.options, onion: e.target.checked }
                              }))}
                              className="w-5 h-5 accent-[var(--color-accent-sub)]"
                            />
                          </label>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={saveOptions}
                        className="w-full bg-[var(--color-accent-sub)] text-white py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[var(--color-accent-sub-hover)] rounded-full active:scale-[0.98] transition-all"
                      >
                        음료 선택하기 <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 3: Drinks Selection */}
                  {step === "drinks" && (
                    <motion.div
                      key="drinks-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <button
                          onClick={handleBack}
                          className="p-2 border border-[var(--color-border)] rounded-full hover:bg-[var(--color-bg-secondary)]"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <h2 className="text-2xl font-bold font-heading">시원한 음료 선택</h2>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                        {drinks.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => selectDrink(item)}
                            className={`group bg-[var(--color-bg-secondary)] rounded-none overflow-hidden cursor-pointer transition-all duration-300 ${
                              order.drink?.id === item.id ? "ring-2 ring-[var(--color-primary)] font-bold text-[var(--color-primary)]" : ""
                            }`}
                          >
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4 md:p-5">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-base md:text-lg font-bold leading-tight">{item.name}</h3>
                                <span className="text-base md:text-lg font-bold text-[var(--color-accent)] shrink-0">${item.price}</span>
                              </div>
                              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">{item.description}</p>
                              {item.calories && (
                                <span className="text-xs text-[var(--color-text-muted)] mt-2 block">{item.calories} cal</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setStep("payment")}
                        className="w-full border-2 border-[var(--color-accent-sub)] text-[var(--color-accent-sub)] py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[var(--color-accent-sub)]/5 rounded-full active:scale-[0.98] transition-all"
                      >
                        음료 없이 결제하기 <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 4: Payment */}
                  {step === "payment" && (
                    <motion.div
                      key="payment-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleBack}
                          className="p-2 border border-[var(--color-border)] rounded-full hover:bg-[var(--color-bg-secondary)]"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <h2 className="text-2xl font-bold font-heading">최종 결제 및 주문</h2>
                      </div>

                      {/* Payment Form Mockup */}
                      <div className="border border-[var(--color-border)] p-6 space-y-4">
                        <h3 className="text-base font-bold flex items-center gap-2">
                          <CreditCard size={18} /> 결제 정보 입력
                        </h3>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs text-[var(--color-text-muted)] block mb-1">카드 소유주 명</label>
                            <input
                              type="text"
                              defaultValue="KIM CHUL SOO"
                              className="w-full border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-[var(--color-text-muted)] block mb-1">카드 번호</label>
                            <input
                              type="text"
                              defaultValue="1234 - 5678 - 1234 - 5678"
                              className="w-full border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-xs text-[var(--color-text-muted)] block mb-1">만료일 (MM/YY)</label>
                              <input
                                type="text"
                                defaultValue="12 / 29"
                                className="w-full border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                              />
                            </div>
                            <div>
                              <label className="text-xs text-[var(--color-text-muted)] block mb-1">CVC</label>
                              <input
                                type="text"
                                defaultValue="123"
                                className="w-full border border-[var(--color-border)] p-3 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={processPayment}
                        className="w-full bg-[var(--color-accent-sub)] text-white py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[var(--color-accent-sub-hover)] rounded-full active:scale-[0.98] transition-all"
                      >
                        결제 승인 및 주문완료 (${calculateTotal()}) <Check size={16} />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 5: Success Screen */}
                  {step === "success" && (
                    <motion.div
                      key="success-step"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-16 space-y-6"
                    >
                      <div className="w-20 h-20 bg-[var(--color-accent-sub)] text-white flex items-center justify-center rounded-full mx-auto">
                        <Check size={40} />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold font-heading">주문이 성공적으로 접수되었습니다!</h2>
                        <p className="text-[var(--color-text-muted)] text-sm max-w-md mx-auto leading-relaxed">
                          주문이 매장 주방으로 바로 전송되어 조리가 시작되었습니다. 준비가 완료되면 등록하신 번호로 알림톡이 전송됩니다.
                        </p>
                      </div>

                      {/* Mockup Invoice */}
                      <div className="border border-[var(--color-border)] p-6 max-w-md mx-auto text-left space-y-4">
                        <div className="flex justify-between border-b pb-3 text-xs text-[var(--color-text-muted)]">
                          <span>주문 번호: #OMT-98745</span>
                          <span>시간: 방금 전</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-bold">
                            <span>{order.burger?.name}</span>
                            <span>${order.burger?.price}</span>
                          </div>
                          <div className="pl-4 text-xs text-[var(--color-text-muted)] space-y-1">
                            <div>· 패티: {order.options.patty === "single" ? "싱글" : order.options.patty === "double" ? "더블" : "트리플"}</div>
                            <div>· 소스: {order.options.sauce === "none" ? "없음" : order.options.sauce === "default" ? "보통" : "많이"}</div>
                            <div>· 양파: {order.options.onion ? "포함" : "제외"}</div>
                            {order.options.bacon && <div>· 추가 베이컨: (+ $1.50)</div>}
                          </div>
                          {order.drink && (
                            <div className="flex justify-between text-sm font-bold">
                              <span>{order.drink.name}</span>
                              <span>${order.drink.price}</span>
                            </div>
                          )}
                        </div>
                        <div className="border-t pt-3 flex justify-between font-bold text-base text-[var(--color-accent-sub)]">
                          <span>총 결제금액</span>
                          <span>${calculateTotal()}</span>
                        </div>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => {
                            setOrder({
                              burger: null,
                              options: { patty: "double", sauce: "default", onion: true, bacon: false },
                              drink: null
                            });
                            setStep("burger");
                          }}
                          className="bg-[var(--color-accent-sub)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[var(--color-accent-sub-hover)] transition-all"
                        >
                          새로 주문하기
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Sidebar: Order Summary Card */}
              {step !== "success" && (
                <div className="lg:col-span-1">
                  <div className="border border-[var(--color-border)] p-6 bg-[var(--color-bg-secondary)] sticky top-24 space-y-6">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <ShoppingBag size={18} /> 주문 명세서
                    </h3>
                    
                    {order.burger ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-bold">
                            <span>{order.burger.name}</span>
                            <span>${order.burger.price}</span>
                          </div>
                          
                          {/* Options display */}
                          <div className="text-xs text-[var(--color-text-muted)] space-y-1 pl-3 border-l-2 border-[var(--color-border)]">
                            <div>· 패티: {order.options.patty === "single" ? "싱글" : order.options.patty === "double" ? "더블 (+ $2.00)" : "트리플 (+ $4.00)"}</div>
                            <div>· 소스: {order.options.sauce === "none" ? "없음" : order.options.sauce === "default" ? "보통" : "많이"}</div>
                            <div>· 양파: {order.options.onion ? "포함" : "제외"}</div>
                            {order.options.bacon && <div>· 베이컨 추가 (+ $1.50)</div>}
                          </div>
                        </div>

                        {order.drink && (
                          <div className="flex justify-between text-sm font-bold border-t border-[var(--color-border)] pt-3">
                            <span>{order.drink.name}</span>
                            <span>${order.drink.price}</span>
                          </div>
                        )}

                        <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                          <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
                            <span>소계</span>
                            <span>${calculateTotal()}</span>
                          </div>
                          <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
                            <span>세금 (VAT 10%)</span>
                            <span>포함</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg text-[var(--color-accent-sub)] pt-1">
                            <span>총금액</span>
                            <span>${calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-[var(--color-text-muted)]">버거를 먼저 선택해주세요.</p>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </main>
        <Footer />
      </TemplateWrapper>
    </>
  );
}

export default function OrderPage() {
  return <OrderPageContent />;
}
