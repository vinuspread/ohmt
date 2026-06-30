"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollTop > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = /^\/(en|ko)?\/?templates\/(OHMT001-)?fashion\/?$/.test(pathname);
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-20 transition-all duration-700 flex items-center ${!isTransparent ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex justify-between items-center transition-all">
          <Link href="/en/templates/OHMT001-fashion" className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${!isTransparent ? "text-black" : "text-white"}`}>
            OHMT
          </Link>

           {/* Desktop Menu */}
           <div className={`hidden md:flex items-center gap-10 text-[14px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${!isTransparent ? "text-black/60" : "text-white/80"}`}>
             {[
                { name: "Collection", id: "collection", href: "/en/templates/OHMT001-fashion/category/collection" },
                { name: "Archive", id: "archive", href: "/en/templates/OHMT001-fashion/category/archive" },
                { name: "Journal", id: "journal", href: "/en/templates/OHMT001-fashion/category/journal" },
                { name: "About", id: "about", href: "/en/templates/OHMT001-fashion/category/about" },
              ].map((item) => {
                const isActive = pathname.includes(`/en/templates/OHMT001-fashion/category/${item.id}`);
               return (
                 <Link
                   key={item.id}
                   href={item.href}
                   className={`relative py-1 transition-colors duration-500 ${
                     isActive
                       ? !isTransparent
                         ? "text-black"
                         : "text-white"
                       : !isTransparent
                       ? "hover:text-black text-black/60"
                       : "hover:text-white text-white/80"
                   } group`}
                 >
                   {item.name}
                   <span
                     className={`absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 transition-transform duration-500 ease-out ${
                       !isTransparent ? "bg-black" : "bg-white"
                     } origin-center ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                   />
                 </Link>
               );
             })}
           </div>


           {/* Icons */}
           <div className={`flex items-center gap-4 sm:gap-6 transition-colors duration-500 ${!isTransparent ? "text-black" : "text-white"}`}>
             <button className="hover:opacity-50 transition-opacity">
               <Search size={20} strokeWidth={1.5} />
             </button>
             <Link href="/en/templates/OHMT001-fashion/cart" className="relative hover:opacity-50 transition-opacity">
               <ShoppingBag size={20} strokeWidth={1.5} />
             </Link>
             <button 
               className="md:hidden p-1"
               onClick={() => setMobileOpen(!mobileOpen)}
               aria-label="Toggle menu"
             >
               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-x-0 z-40 bg-white border-b border-black/5 transition-all duration-500 md:hidden overflow-hidden ${
          mobileOpen ? "top-14 max-h-[550px] opacity-100 py-10" : "top-14 max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-8 text-[13px] font-bold uppercase tracking-[0.25em] text-black/60">
          {/* Categories */}
           <div className="flex flex-col gap-3 border-b border-black/5 pb-6 mb-6">
             <span className="text-[12px] font-bold tracking-[0.2em] text-black/30 mb-3 block">Series</span>
              {[
                { name: "Collection", id: "collection", href: "/en/templates/OHMT001-fashion/category/collection" },
                { name: "Archive", id: "archive", href: "/en/templates/OHMT001-fashion/category/archive" },
                { name: "Journal", id: "journal", href: "/en/templates/OHMT001-fashion/category/journal" },
                { name: "About", id: "about", href: "/en/templates/OHMT001-fashion/category/about" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                 className="hover:text-black py-2.5 transition-colors block"
               >
                 {item.name}
               </Link>
             ))}
           </div>


          {/* Utilities */}
           <div className="flex flex-col gap-3">
             <span className="text-[12px] font-bold tracking-[0.2em] text-black/30 mb-3 block">Services</span>
             <Link
               href="/en/templates/OHMT001-fashion/cart"
               onClick={() => setMobileOpen(false)}
               className="hover:text-black py-2.5 transition-colors block"
             >
               Shopping Bag
             </Link>
              <Link
                href="/en/templates/OHMT001-fashion"
                onClick={() => setMobileOpen(false)}
                className="hover:text-black py-2.5 transition-colors"
              >
                Account / Login
              </Link>
              <Link
                href="/en/templates/OHMT001-fashion"
                onClick={() => setMobileOpen(false)}
                className="hover:text-black py-2.5 transition-colors"
              >
                My Page
              </Link>
           </div>

        </div>
      </div>
    </>
  );
};
