'use client';

import { motion } from 'framer-motion';

const formFieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.15 + idx * 0.1,
            ease: [0.23, 1, 0.32, 1] as any,
        },
    }),
};

export function LeadSection() {
    return (
        <section className="bg-black text-white py-20 px-16">
            <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="lg:pr-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xs font-normal tracking-[3px] uppercase opacity-60 block mb-6"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        className="text-5xl leading-[var(--leading-heading)] font-semibold tracking-[-1.44px] mb-12"
                    >
                        Get in touch.
                    </motion.h2>

                    <form className="flex flex-col gap-8">
                        {['Full Name', 'Email Address', 'Message'].map((label, idx) => (
                            <motion.div
                                key={label}
                                custom={idx}
                                variants={formFieldVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                className="flex flex-col gap-3 border-b border-white/20 pb-3"
                            >
                                <label className="text-xs font-normal tracking-[3px] uppercase opacity-40">{label}</label>
                                <motion.input
                                    type="text"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                                    className="bg-transparent text-lg font-medium tracking-[-0.5px] outline-none placeholder:opacity-20 w-full"
                                />
                            </motion.div>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.6, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true, margin: '-50px' }}
                            className="h-[48px] px-8 bg-white text-black rounded-none text-xs font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors w-fit mt-6"
                        >
                            Send Inquiry
                        </motion.button>
                    </form>
                </motion.div>

                {/* Right: Info */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col justify-between pt-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <span className="text-xs font-normal tracking-[3px] uppercase opacity-60 block mb-6">Office</span>
                            <p className="text-lg leading-[var(--leading-heading)] font-bold tracking-[-0.5px]">
                                213 West 5th Street<br />
                                Austin, Texas 78701
                            </p>
                        </div>
                        <div>
                            <span className="text-xs font-normal tracking-[3px] uppercase opacity-60 block mb-6">Direct</span>
                            <p className="text-lg leading-[var(--leading-heading)] font-bold tracking-[-0.5px]">
                                512 827 2100<br />
                                hello@ohmytemplate.design
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <span className="text-xs font-normal tracking-[3px] uppercase opacity-60 block mb-6">Social</span>
                        <div className="flex gap-8">
                            {['Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                                <a key={social} href="#" className="text-xs font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
