'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
    const navItems = [
        { name: '서비스', href: '/ko/templates/studio/services' },
        { name: '프로젝트', href: '/ko/templates/studio/projects' },
        { name: '어바웃', href: '/ko/templates/studio/about' },
        { name: '문의하기', href: '/ko/templates/studio/contact' },
    ];

    const connectItems = [
        { name: 'Instagram', href: '/ko/templates/studio' },
        { name: 'LinkedIn', href: '/ko/templates/studio' },
        { name: 'Dribbble', href: '/ko/templates/studio' },
    ];

    return (
        <footer className="bg-[var(--color-bg-dark)] text-white px-6 md:px-16 lg:px-24 py-10 md:py-12 border-t border-white/10 relative z-30 font-sans">
            <div className="max-w-[1720px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
                    <Link href="/ko/templates/studio" className="text-[20px] font-black tracking-[-1px] uppercase text-white">
                        Oh My Template<span className="font-normal">.</span>
                    </Link>

                    <nav className="flex flex-wrap gap-6 md:gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[12px] font-bold uppercase text-white/50 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex gap-6">
                        {connectItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-[12px] font-bold uppercase text-white/50 hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                    <span className="text-[11px] uppercase text-white/30 font-bold">
                        &copy; 2026 Oh My Template Studio. 모든 권리 보유.
                    </span>
                    <span className="text-[11px] uppercase text-white/30 font-bold">
                        텍사스, 오스틴 &middot; hello@ohmytemplate.com
                    </span>
                </div>
            </div>
        </footer>
    );
}
