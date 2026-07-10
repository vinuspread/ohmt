"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { useCart } from "@/lib/cart-context";
import { medusaClient } from "@/lib/medusa-client";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

interface OrderForm {
  // 구매자 정보
  name: string;
  email: string;
  phone: string;
  // 배송지
  address: string;
  addressDetail: string;
  postalCode: string;
  city: string;
  // 주문 메모
  memo: string;
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState<OrderForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressDetail: "",
    postalCode: "",
    city: "서울특별시",
    memo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const items = cart?.items ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cart) return;
    setIsSubmitting(true);
    setError("");

    try {
      // 1. 배송지 업데이트
      await medusaClient.store.cart.update(cart.id, {
        shipping_address: {
          first_name: form.name,
          last_name: "",
          address_1: form.address,
          address_2: form.addressDetail,
          postal_code: form.postalCode,
          city: form.city,
          country_code: "kr",
          phone: form.phone,
        },
        email: form.email,
        ...(form.memo ? { metadata: { order_memo: form.memo } } : {}),
      });

      // 2. 무료 배송 옵션 추가 (shipping option이 있는 경우)
      // 1차 PoC에서는 생략 또는 수동 처리

      // 3. 주문 완료 (결제 없이 테스트 주문)
      const res = await (medusaClient.store.cart as { complete: (id: string) => Promise<{ type: string; order?: { id: string; display_id?: number } }> }).complete(cart.id);
      if (res.type === "order" && res.order) {
        setOrderId(res.order.display_id?.toString() ?? res.order.id);
        clearCart();
      } else {
        setError("주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
      setError("주문 처리 중 오류가 발생했습니다. 관리자에게 문의해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 주문 완료 화면
  if (orderId) {
    return (
      <TemplateWrapper theme={theme}>
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
          <CheckCircle2 size={48} className="text-[var(--color-primary)] mb-6" />
          <h1 className="text-2xl font-bold mb-3">주문이 접수되었습니다</h1>
          <p className="text-[var(--color-text-muted)] mb-2">주문번호: <span className="font-mono font-bold text-[var(--color-text)]">{orderId}</span></p>
          <p className="text-sm text-[var(--color-text-muted)] mb-10 text-center">
            입력하신 이메일로 주문 확인서가 발송됩니다.<br />
            결제는 담당자 확인 후 안내드립니다.
          </p>
          <Link
            href="/ko/templates/OHMT017-multi-shop"
            className="bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em]"
          >
            홈으로 돌아가기
          </Link>
        </main>
      </TemplateWrapper>
    );
  }

  return (
    <>
      <Header />
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-[var(--color-bg-secondary)] text-[var(--color-text)] pt-24 md:pt-28 pb-20">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-8">
              <Link href="/ko/templates/OHMT017-multi-shop/cart" className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                <ChevronLeft size={14} />
                장바구니로
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-10">주문 정보 입력</h1>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10">
              {/* 주문 폼 */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 구매자 정보 */}
                <section className="bg-white p-6 space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-5">구매자 정보</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] mb-1.5">이름 *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] mb-1.5">연락처 *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] mb-1.5">이메일 *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      placeholder="email@example.com"
                    />
                  </div>
                </section>

                {/* 배송지 */}
                <section className="bg-white p-6 space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-5">배송지</h2>
                  <div className="flex gap-3">
                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      required
                      className="w-32 border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                      placeholder="우편번호"
                    />
                    <button
                      type="button"
                      className="border border-[var(--color-border)] px-4 py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-[var(--color-bg-secondary)] transition-colors"
                      onClick={() => alert("우편번호 API 연동 예정 (Daum Postcode)")}
                    >
                      주소 검색
                    </button>
                  </div>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder="기본 주소"
                  />
                  <input
                    name="addressDetail"
                    value={form.addressDetail}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder="상세 주소 (선택)"
                  />
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-white"
                  >
                    {["서울특별시","부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시","세종특별자치시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주특별자치도"].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </section>

                {/* 주문 메모 */}
                <section className="bg-white p-6">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-5">주문 메모</h2>
                  <textarea
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-[var(--color-border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] resize-none"
                    placeholder="배송 시 요청사항을 입력해주세요. (선택)"
                  />
                </section>

                {/* 결제 안내 */}
                <section className="bg-white p-6">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] mb-4">결제 방법</h2>
                  <div className="border border-[var(--color-border)] rounded px-4 py-3 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)]">
                    현재 테스트 모드로 운영 중입니다. 주문 접수 후 담당자가 결제 방법을 개별 안내드립니다.
                    {/* TODO: Toss Payments 또는 PortOne 연동 예정 */}
                  </div>
                </section>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="w-full bg-[var(--color-primary)] text-white py-4 text-sm uppercase tracking-[0.2em] font-medium hover:opacity-85 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "처리 중..." : "주문 완료"}
                </button>
              </form>

              {/* 주문 요약 */}
              <div className="md:sticky md:top-28 h-fit">
                <div className="bg-white border border-[var(--color-border)] p-6">
                  <h2 className="text-sm font-bold mb-5">주문 상품 ({items.length})</h2>
                  <div className="space-y-4 mb-5">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-14 bg-[var(--color-bg-secondary)] flex-shrink-0" style={{ height: "72px" }}>
                          {item.thumbnail && <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium leading-snug truncate">{item.title}</p>
                          <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">수량 {item.quantity}</p>
                        </div>
                        <span className="text-xs font-bold whitespace-nowrap">{item.total.toLocaleString("ko-KR")}원</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-[var(--color-text-muted)]">
                      <span>상품 합계</span>
                      <span>{(cart?.subtotal ?? 0).toLocaleString("ko-KR")}원</span>
                    </div>
                    <div className="flex justify-between text-[var(--color-text-muted)]">
                      <span>배송비</span>
                      <span>무료</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-[var(--color-border)]">
                      <span>총 합계</span>
                      <span className="text-[var(--color-primary)]">{(cart?.total ?? 0).toLocaleString("ko-KR")}원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </TemplateWrapper>
    </>
  );
}
