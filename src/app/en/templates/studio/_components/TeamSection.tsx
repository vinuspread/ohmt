'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
    { name: 'Jessica Point', role: 'Principle Designer', image: '/templates/studio/team-1.jpg' },
    { name: 'Ryan Baser', role: 'Furniture Expert', image: '/templates/studio/team-2.jpg' },
    { name: 'Carrie Vath', role: 'Design Lead', image: '/templates/studio/team-3.jpg' },
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
                    className="flex flex-col gap-[32px] mb-[120px] border-b border-black/10 pb-[64px]"
                >
                    <span className="text-[13px] font-normal tracking-[3px] uppercase text-black/60">Team</span>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <h2 className="text-[26px] md:text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-black">
                            Behind the design.
                        </h2>
                        <a href="/en/templates/OHMT006-studio-EN/about" className="h-[54px] px-[40px] border border-black rounded-[100px] flex items-center justify-center text-[13px] font-bold tracking-[3px] uppercase text-black hover:bg-black hover:text-white transition-colors">
                            About Us
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
                                <span className="text-[13px] font-normal tracking-[3px] uppercase text-black/60">
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
