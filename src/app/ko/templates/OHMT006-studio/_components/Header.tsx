'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { X } from 'lucide-react';


export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isProjectDetail = pathname.includes('/projects/') && !pathname.endsWith('/projects');
    const textColor = isProjectDetail && !scrolled ? 'text-white' : 'text-black';
    const borderColor = isProjectDetail && !scrolled ? 'border-white/10' : 'border-black/10';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navItems = [
        { name: '서비스', href: '/ko/templates/OHMT006-studio/services' },
        { name: '프로젝트', href: '/ko/templates/OHMT006-studio/projects' },
        { name: '문의하기', href: '/ko/templates/OHMT006-studio/contact' },
        { name: '어바웃', href: '/ko/templates/OHMT006-studio/about' },
    ];

    const isMainPage = /^\/(en|ko)?\/?templates\/studio\/?$/.test(pathname);
    const isLight = scrolled || !isMainPage || (isProjectDetail && scrolled);

    return (
        <>
             <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[64px] transition-all duration-500 flex justify-between items-center ${
                 scrolled ? 'bg-white/95 backdrop-blur-xl py-3 md:py-6 border-b border-black/5' : 'bg-transparent py-4 md:py-10'
             }`}>
                {/* Logo */}
                <Link
                    href="/ko/templates/OHMT006-studio"
                    className={`text-[18px] md:text-[20px] font-black tracking-[-0.5px] uppercase transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}
                >
                    OHMT<span className="font-normal">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-[64px]">
                    <div className="flex gap-[48px]">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[13px] font-bold tracking-[3px] uppercase transition-colors duration-500 ${isLight ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/ko/templates/OHMT006-studio/contact"
                        className={`h-[40px] px-8 rounded-full border text-[13px] font-bold tracking-[2.5px] uppercase transition-all duration-500 flex items-center justify-center ${
                            isLight ? 'border-black/15 text-black hover:bg-black hover:text-white' : 'border-white/30 text-white bg-white/10 hover:bg-white hover:text-black'
                        }`}
                    >
                        프로젝트 시작하기
                    </Link>
                </nav>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2 -mr-2"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X size={20} className={isLight ? 'text-black' : 'text-white'} />
                    ) : (
                        <>
                            <div className={`w-[22px] h-[1.5px] transition-colors duration-500 ${isLight ? 'bg-black' : 'bg-white'}`} />
                            <div className={`w-[22px] h-[1.5px] transition-colors duration-500 ${isLight ? 'bg-black' : 'bg-white'}`} />
                        </>
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-[#111111] flex flex-col transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex-1 flex flex-col justify-center px-8 gap-8">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[clamp(2rem,8vw,3.5rem)] font-bold text-white hover:text-white/60 transition-colors border-b border-white/10 pb-6"
                            style={{ transitionDelay: menuOpen ? `${idx * 60}ms` : '0ms' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="px-8 pb-12">
                    <Link
                        href="/ko/templates/OHMT006-studio/contact"
                        onClick={() => setMenuOpen(false)}
                        className="inline-flex items-center justify-center w-full h-[52px] rounded-full border border-white/30 text-white text-[13px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-black transition-all duration-500"
                    >
                        프로젝트 시작하기
                    </Link>
                </div>
            </div>
        </>
    );
}
