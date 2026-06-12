"use client";
import React from "react";

interface PageHeaderProps {
    category: string;
    title: React.ReactNode;
    breadcrumb?: string[];
    isBadgeCategory?: boolean;
}

export function PageHeader({ category, title, breadcrumb, isBadgeCategory = false }: PageHeaderProps) {
    return (
        <section className="relative pt-14 md:pt-28 md:pt-48 pb-12 md:pb-24 bg-white border-b border-black/5 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    
                    {/* Left title and category */}
                    <div className="lg:col-span-8 space-y-6">
                        {isBadgeCategory ? (
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5">
                                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                <span className="text-[12px] md:text-[13px] font-bold text-black uppercase">{category}</span>
                            </div>
                        ) : (
                            <span className="text-[12px] md:text-[13px] font-bold text-black/40 block uppercase">
                                {category}
                            </span>
                        )}
                        <h1 className="text-[clamp(1.8rem,7vw,6.5rem)] font-bold leading-[1.5] text-black">
                            {title}
                        </h1>
                    </div>

                    {/* Right breadcrumb */}
                    {breadcrumb && breadcrumb.length > 0 && (
                        <div className="lg:col-span-4 lg:text-right">
                            <div className="flex lg:justify-end items-center gap-3 text-[12px] md:text-[13px] text-black/40 font-bold uppercase">
                                {breadcrumb.map((crumb, index) => (
                                    <React.Fragment key={crumb}>
                                        <span className={index === breadcrumb.length - 1 ? "text-black" : "text-black/40"}>
                                            {crumb}
                                        </span>
                                        {index < breadcrumb.length - 1 && <span className="text-black/10">/</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
