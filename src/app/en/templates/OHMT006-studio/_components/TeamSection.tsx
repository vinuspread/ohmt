'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
    { name: 'Elena Moreau', role: 'Architecture & Spatial Director', image: '/templates/OHMT006-studio/team-1.jpg' },
    { name: 'Daniel Foster', role: 'Furniture & Object Director', image: '/templates/OHMT006-studio/team-2.jpg' },
    { name: 'Claire Bennett', role: 'Senior Interior Designer', image: '/templates/OHMT006-studio/team-3.jpg' },
    { name: 'Marcus Reed', role: 'Project Director', image: '/templates/OHMT006-studio/team-4.png' },
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
                    className="flex flex-col gap-8 mb-30 border-b border-black/10 pb-16"
                >
                    <span className="text-xs font-normal tracking-[3px] uppercase text-black/60">Team</span>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <h2 className="text-3xl md:text-5xl leading-[var(--leading-heading)] font-semibold tracking-[-1.44px] text-black">
                            Behind the design.
                        </h2>
                        <a href="/en/templates/OHMT006-studio/about" className="h-[54px] px-10 border border-black rounded-[100px] flex items-center justify-center text-xs font-bold tracking-[3px] uppercase text-black hover:bg-black hover:text-white transition-colors">
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
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {team.map((member) => (
                        <motion.div key={member.name} variants={itemVariants} className="group">
                            <motion.div
                                className="relative mb-6 aspect-[4/5] cursor-pointer overflow-hidden bg-gray-300"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
                                <h3 className="mb-2 text-xl font-bold leading-[var(--leading-heading)] tracking-[-0.6px] text-black">
                                    {member.name}
                                </h3>
                                <span className="text-xs font-normal tracking-[3px] uppercase text-black/60">
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
