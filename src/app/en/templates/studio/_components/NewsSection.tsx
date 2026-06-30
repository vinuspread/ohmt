'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const news = [
    { date: 'jan 24, 2026', title: 're-thinking the open office floor plan', image: '/templates/OHMT006-studio/blog-1.jpg' },
    { date: 'dec 12, 2025', title: 'minimalism in the corporate landscape', image: '/templates/OHMT006-studio/blog-2.jpg' },
    { date: 'nov 08, 2025', title: 'sustainable furniture sourcing for 2026', image: '/templates/OHMT006-studio/blog-3.jpg' },
    { date: 'oct 21, 2025', title: 'the impact of light on productivity', image: '/templates/OHMT006-studio/blog-4.jpg' },
];

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

const rowVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1] as any
        }
    },
};

export function NewsSection() {
    return (
        <section className="bg-white py-[120px] px-[64px]">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px]">
                {/* Left Column: Header & Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="lg:col-span-4 flex flex-col items-start h-full"
                >
                    <div className="flex flex-col gap-[32px] mb-[64px]">
                        <span className="text-[13px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Journal</span>
                        <h2 className="text-[26px] md:text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                            What's new?
                        </h2>
                    </div>
                    <a href="#" className="h-[54px] px-[40px] border border-[#090B19] rounded-[100px] flex items-center justify-center text-[13px] font-bold tracking-[3px] uppercase text-[#090B19] hover:bg-[#090B19] hover:text-white transition-colors">
                        Read Journal
                    </a>
                </motion.div>

                {/* Right Column: List */}
                <motion.div
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="lg:col-span-8 flex flex-col"
                >
                    {news.map((item) => (
                        <motion.a
                            key={item.title}
                            variants={rowVariants}
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                            href="#"
                            className="group flex flex-col md:flex-row gap-[32px] justify-between items-start md:items-center py-[48px] border-b border-[#F3F6FC] first:border-t hover:bg-neutral-50 transition-colors duration-200"
                        >
                            <div className="flex-1 flex flex-col gap-[16px]">
                                <motion.h3
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                    className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] group-hover:opacity-60 transition-opacity"
                                >
                                    {item.title}
                                </motion.h3>
                                <span className="text-[13px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-40">
                                    {item.date}
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-[32px]">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                    className="w-[200px] h-[120px] bg-gray-200 overflow-hidden flex-shrink-0 relative"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                    className="text-[24px] flex-shrink-0"
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
