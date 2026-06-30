"use client";
import React, { useState } from "react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function StudioContactPageContent() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (

      <TemplateWrapper theme={theme}>

        <main className="antialiased min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
            <Header />

            <PageHeader
                category={"문의하기"}
                title={<>{"새로운 공간을"} <br /><span className="font-normal">{"향한 여정."}</span></>}
                breadcrumb={["Studio", "문의하기"]}
            />

            <section className="py-12 md:py-36 bg-white">
                <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-stretch">

                        {/* Left Side */}
                        <div className="lg:col-span-6 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="space-y-8 md:space-y-16">
                                <div className="space-y-4 md:space-y-6">
                                    <span className="text-[12px] md:text-[13px] text-black/40 font-bold block uppercase">
                                        {"연락하기"}
                                    </span>
                                    <h2 className="text-[clamp(1.8rem,4.5vw,4.5rem)] font-bold leading-[1.5] text-black break-keep">
                                        {"프로젝트 문의"}
                                    </h2>
                                    <p className="text-[14px] text-black/50 leading-relaxed font-normal break-keep max-w-[480px]">
                                        {"프로젝트의 비전과 일정, 구체적인 목표를 공유해 주세요. 빛과 그림자, 질감과 형태를 조율하여 오직 당신만을 위한 차원 높은 공간을 함께 빚어가겠습니다."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-black/5 pt-8 md:pt-12">
                                    <div className="space-y-2 group cursor-pointer">
                                        <span className="text-[12px] md:text-[13px] font-bold text-black/50 flex items-center gap-2 uppercase">
                                            <Mail size={12} /> {"직접 연락처"}
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-black hover:opacity-60 transition-opacity duration-300">
                                            hello@ohmytemplate.com
                                        </h3>
                                    </div>

                                    <div className="space-y-2 group">
                                        <span className="text-[12px] md:text-[13px] font-bold text-black/50 flex items-center gap-2 uppercase">
                                            <MapPin size={12} /> {"루미나 스튜디오"}
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-black leading-tight">
                                            Austin, Texas // 308 Congress Ave.
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full flex-grow min-h-[260px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden mt-4 md:mt-12">
                                <img
                                    src="/templates/OHMT006-studio/hero-1.jpg"
                                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                                    alt="Visual representation of tactile casing"
                                />
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:col-span-6 bg-[var(--color-bg-dark)] text-white p-8 md:p-16 flex flex-col justify-center relative">
                            {submitted ? (
                                <div className="text-center py-16 space-y-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto">
                                        <span className="text-white text-2xl">✓</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold tracking-tight text-white break-keep">
                                            {"메시지가 성공적으로 전달되었습니다."}
                                        </h3>
                                        <p className="text-[14px] text-white/50 font-normal break-keep">
                                            {"보내주신 문의 사항을 확인한 후 빠른 시일 내에 기재해주신 연락처로 상담 안내를 드리겠습니다."}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-[12px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                                    >
                                        {"닫기"}
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-8 md:space-y-12 w-full" onSubmit={handleSubmit}>
                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-500">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {"성함"}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent outline-none text-[15px] font-bold text-white placeholder-white/25 placeholder:text-white/20"
                                            placeholder={"성함 또는 기업명을 입력해 주세요"}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-500">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {"이메일 주소"}
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent outline-none text-[15px] font-bold text-white placeholder-white/25 placeholder:text-white/20"
                                            placeholder={"your@email.com"}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3 border-b border-white/5 pb-4 focus-within:border-white transition-colors duration-500">
                                        <label className="text-[12px] md:text-[13px] font-bold text-white/40 block uppercase">
                                            {"프로젝트 상세 내용"}
                                        </label>
                                        <textarea
                                            className="w-full bg-transparent outline-none text-[14.5px] font-bold text-white placeholder-white/25 placeholder:text-white/20 min-h-[100px] resize-none"
                                            placeholder={"구상 중이신 공간의 성격과 디자인 비전을 자유롭게 적어주세요..."}
                                            required
                                        />
                                    </div>

                                    <div className="pt-2 md:pt-4">
                                        <button
                                            type="submit"
                                            className="w-full h-[56px] md:h-[64px] bg-white hover:bg-neutral-200 text-black font-bold text-[13px] transition-all duration-500 flex items-center justify-center gap-4 group/btn"
                                        >
                                            <span className="font-bold uppercase tracking-widest text-[13px]">
                                                {"메시지 전송"}
                                            </span>
                                            <ArrowUpRight size={14} className="text-black transition-colors duration-500" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>

      </TemplateWrapper>
);
}


export default function StudioContactPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <StudioContactPageContent {...props} />
    </React.Suspense>
  );
}
