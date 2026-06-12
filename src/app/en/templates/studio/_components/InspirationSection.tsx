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
        { id: '01', title: 'Space Planning', description: 'Optimizing environments for peak productivity and employee wellbeing through strategic flow.', icon: Layout },
        { id: '02', title: 'Furniture Layouts', description: 'Curating unique pieces that define your corporate identity and brand values.', icon: Palette },
        { id: '03', title: 'Curated Styling', description: 'Strategic arrangement for seamless workflow and high-end aesthetic interaction.', icon: Lightbulb },
    ];

    return (
        <section className="bg-white py-[120px] px-[64px]">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col gap-[32px] mb-[120px] border-b border-[#F3F6FC] pb-[64px]"
                >
                    <span className="text-[13px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Services</span>
                    <h2 className="text-[26px] md:text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                        We do it best.
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mb-[160px]">
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
                                className="flex flex-col gap-[32px] border-t border-[#F3F6FC] pt-[48px]"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                                    className="flex items-center gap-[16px]"
                                >
                                    <span className="text-[13px] font-bold tracking-[3px] uppercase text-[#090B19]">{service.id}</span>
                                    <Icon size={24} className="text-[#090B19]" strokeWidth={1.5} />
                                </motion.div>
                                <div>
                                    <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] mb-[16px]">
                                        {service.title}
                                    </h3>
                                    <p className="text-[16px] leading-[26px] font-normal text-[var(--color-text-muted)]">
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
                        src="/templates/studio/hero-2.jpg"
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
                        <h2 className="text-[26px] md:text-[48px] leading-[55px] font-semibold tracking-[-1.44px] mb-[48px]">
                            We are innovating the way companies reinvent their office spaces.
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
