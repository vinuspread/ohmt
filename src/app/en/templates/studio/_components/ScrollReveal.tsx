'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { MOTION_CONSTANTS } from './motion-constants';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
}

export function ScrollReveal({
    children,
    delay = 0,
    direction = 'up',
    duration = MOTION_CONSTANTS.durations.max
}: ScrollRevealProps) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
    }, []);

    const variants: any = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: prefersReducedMotion ? 0.01 : duration,
                delay: prefersReducedMotion ? 0 : delay,
                ease: MOTION_CONSTANTS.easings.easeOut
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: `-${MOTION_CONSTANTS.thresholds.reveal}px` }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
