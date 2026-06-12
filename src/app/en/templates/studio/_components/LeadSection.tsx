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
        <section className="bg-black text-white py-[80px] px-[64px]">
            <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
                {/* Left: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="lg:pr-[64px]"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[13px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] mb-[48px]"
                    >
                        Get in touch.
                    </motion.h2>

                    <form className="flex flex-col gap-[32px]">
                        {['Full Name', 'Email Address', 'Message'].map((label, idx) => (
                            <motion.div
                                key={label}
                                custom={idx}
                                variants={formFieldVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                className="flex flex-col gap-[12px] border-b border-white/20 pb-[12px]"
                            >
                                <label className="text-[13px] font-normal tracking-[3px] uppercase opacity-40">{label}</label>
                                <motion.input
                                    type="text"
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                                    className="bg-transparent text-[18px] font-medium tracking-[-0.5px] outline-none placeholder:opacity-20 w-full"
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
                            className="h-[48px] px-[32px] bg-white text-black rounded-none text-[13px] font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors w-fit mt-[24px]"
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
                    className="flex flex-col justify-between pt-[16px]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                        <div>
                            <span className="text-[13px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Office</span>
                            <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px]">
                                213 West 5th Street<br />
                                Austin, Texas 78701
                            </p>
                        </div>
                        <div>
                            <span className="text-[13px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Direct</span>
                            <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px]">
                                512 827 2100<br />
                                hello@ohmytemplate.design
                            </p>
                        </div>
                    </div>

                    <div className="mt-[64px]">
                        <span className="text-[13px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Social</span>
                        <div className="flex gap-[32px]">
                            {['Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                                <a key={social} href="#" className="text-[13px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
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
