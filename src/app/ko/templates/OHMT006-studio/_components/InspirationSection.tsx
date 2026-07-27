'use client';

import { motion } from 'framer-motion';
import { Layout, Palette, Lightbulb } from 'lucide-react';

const serviceVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: 0.1 + idx * 0.12,
            ease: [0.23, 1, 0.32, 1] as any,
        },
    }),
};

export function InspirationSection() {
    const services = [
        { id: '01', title: '공간 계획', description: '공간의 용도와 사용 인원을 살펴 동선과 수납, 가구 배치를 효율적으로 계획합니다.', icon: Layout },
        { id: '02', title: '가구·마감재 선정', description: '예산과 관리 방법, 원하는 분위기에 맞춰 마감재와 가구, 조명을 함께 제안합니다.', icon: Palette },
        { id: '03', title: '조명과 스타일링', description: '조명의 밝기와 위치를 조정하고 패브릭과 소품을 더해 공간의 분위기를 마무리합니다.', icon: Lightbulb },
    ];

    return (
        <section className="bg-white py-30 px-16">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col gap-8 mb-30 border-b border-[#F3F6FC] pb-16"
                >
                    <span className="text-xs font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">우리의 전문성</span>
                    <h2 className="text-3xl md:text-5xl leading-[var(--leading-heading)] font-semibold tracking-[-1.44px] text-[#090B19] break-keep">
                        계획부터 마감까지 세심하게 확인합니다.
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                custom={idx}
                                variants={serviceVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true, margin: '-50px' }}
                                className="flex flex-col gap-8 border-t border-[#F3F6FC] pt-12"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                    className="flex items-center gap-4"
                                >
                                    <span className="text-xs font-bold tracking-[3px] uppercase text-[#090B19]">{service.id}</span>
                                    <Icon size={24} className="text-[#090B19]" strokeWidth={1.5} />
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl leading-[var(--leading-heading)] font-bold tracking-[-0.72px] text-[#090B19] mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-base leading-[var(--leading-heading)] font-normal text-[var(--color-text-muted)] break-keep">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Feature Image / Secondary Hero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-center text-center text-white bg-black"
                >
                    <img
                        src="/templates/OHMT006-studio/hero-2.jpg"
                        alt="Studio workspace"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="relative z-10 max-w-4xl px-4"
                    >
                        <h2 className="text-3xl md:text-5xl leading-[var(--leading-heading)] font-semibold tracking-[-1.44px] mb-12 break-keep">
                            현재 공간의 장점은 살리고 불편한 부분은 개선해 생활과 업무에 잘 맞는 환경을 만듭니다.
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true, margin: '-50px' }}
                            className="w-[1px] h-[64px] bg-white/40 mx-auto"
                            style={{ originY: 0 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
