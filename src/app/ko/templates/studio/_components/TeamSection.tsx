'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
    { name: '제시카 포인트', role: '대표 건축 디렉터', image: '/templates/studio/team-1.jpg' },
    { name: '라이언 베이저', role: '오브제 & 가구 큐레이터', image: '/templates/studio/team-2.jpg' },
    { name: '캐리 배스', role: '수석 인테리어 디자이너', image: '/templates/studio/team-3.jpg' },
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

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.23, 1, 0.32, 1] as any
        }
    },
};

export function TeamSection() {
    return (
        <section className="bg-white py-14 md:py-32 border-t border-black/10">
            <div className="max-w-[1720px] mx-auto px-6 md:px-16 lg:px-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col gap-[20px] mb-[64px] border-b border-black/10 pb-[40px]"
                >
                    <span className="text-[13px] font-normal tracking-[3px] uppercase text-black/60">Team</span>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <h2 className="text-[30px] md:text-[48px] leading-[1.5] font-semibold tracking-[-1.44px] text-black break-keep [overflow-wrap:normal]">
                            디자인 너머의 주역들.
                        </h2>
                        <a href="/ko/templates/OHMT006-studio-KO/about" className="h-[40px] px-[24px] border border-black rounded-[100px] flex items-center justify-center text-[12px] font-bold tracking-[2px] uppercase text-black hover:bg-black hover:text-white transition-colors shrink-0">
                            소개 더보기
                        </a>
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[64px]"
                >
                    {team.map((member) => (
                        <motion.div key={member.name} variants={itemVariants} className="group">
                            <motion.div
                                whileHover={{ y: -16, transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } }}
                                className="aspect-[3/4] bg-gray-300 mb-[32px] overflow-hidden relative cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.12 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover scale-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, margin: '-50px' }}
                                className="flex flex-col items-center text-center"
                            >
                                <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-black mb-[8px]">
                                    {member.name}
                                </h3>
                                <span className="text-[13px] font-normal tracking-0 uppercase text-black/60">
                                    {member.role}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
