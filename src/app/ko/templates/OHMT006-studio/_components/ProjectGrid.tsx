'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';

const projects = [
    { name: 'Spotify Satellite Office', location: 'Austin, TX', image: '/templates/OHMT006-studio/project-1.jpg' },
    { name: 'Microsoft Office Lounge', location: 'Seattle, WA', image: '/templates/OHMT006-studio/project-2.jpg' },
    { name: 'Allstate Employee Lounge', location: 'Chicago, IL', image: '/templates/OHMT006-studio/project-3.jpg' },
    { name: 'Exxon Mobile Offices', location: 'Houston, TX', image: '/templates/OHMT006-studio/project-4.jpg' },
    { name: 'Disney Employee Loft', location: 'Burbank, CA', image: '/templates/OHMT006-studio/project-5.jpg' },
    { name: 'Delta Satellite Office', location: 'Atlanta, GA', image: '/templates/OHMT006-studio/project-6.jpg' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.23, 1, 0.32, 1],
        }
    },
};

export function ProjectGrid() {
    return (
        <section className="bg-white py-30 px-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-col gap-8 mb-30 border-b border-[#F3F6FC] pb-16"
            >
                <span className="text-xs font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">포트폴리오</span>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <h2 className="text-3xl md:text-5xl leading-[var(--leading-heading)] font-semibold tracking-[-1.44px] text-[#090B19] break-keep">
                        주거와 상업 공간, 호텔과 맞춤 가구 프로젝트를 확인해 보세요.
                    </h2>
                    <a href="#" className="h-[54px] px-10 border border-[#090B19] rounded-none flex items-center justify-center text-xs font-bold tracking-[3px] uppercase text-[#090B19] hover:bg-[#090B19] hover:text-white transition-colors">
                        전체 프로젝트 보기
                    </a>
                </div>
            </motion.div>

            {/* Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, idx) => {
                    const parallaxY = (idx % 3) * 20 - 20;

                    return (
                    <motion.div
                        key={project.name}
                        variants={itemVariants}
                        whileHover={{ y: -12 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="group relative h-[600px] bg-gray-300 overflow-hidden cursor-pointer"
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{ y: parallaxY }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black/20"
                            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 p-12 flex flex-col justify-between text-white z-10">
                            <motion.span
                                initial={{ opacity: 0.8 }}
                                className="text-xs font-normal tracking-[3px] uppercase opacity-80"
                            >
                                {project.location}
                            </motion.span>
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                className="text-2xl leading-[var(--leading-heading)] font-bold tracking-[-0.72px]"
                            >
                                {project.name}
                            </motion.h3>
                        </div>
                    </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
