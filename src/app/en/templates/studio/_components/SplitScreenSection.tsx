"use client";
import React from "react";
import { motion } from "framer-motion";

interface SplitScreenSectionProps {
    bgClass: string;
    textColorClass: string;
    borderColorClass: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition: "left" | "right";
    children: React.ReactNode;
}

export function SplitScreenSection({
    bgClass,
    textColorClass,
    borderColorClass,
    imageSrc,
    imageAlt,
    imagePosition,
    children
}: SplitScreenSectionProps) {
    const isImageLeft = imagePosition === "left";

    return (
        <section className={`w-full ${bgClass} ${borderColorClass} overflow-hidden relative`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] lg:h-[650px] items-stretch">

                {/* Image Panel (Left or Right based on imagePosition) */}
                <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className={`relative min-h-[350px] lg:min-h-full w-full overflow-hidden ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute inset-0 w-full h-full object-cover opacity-100"
                    />
                </motion.div>

                {/* Content Panel (Left or Right based on imagePosition) */}
                <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: '-50px' }}
                    className={`${bgClass} ${textColorClass} p-12 md:p-20 lg:p-24 xl:p-32 flex flex-col justify-center space-y-8 relative z-10 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                    {children}
                </motion.div>

            </div>
        </section>
    );
}
