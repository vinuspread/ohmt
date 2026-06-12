'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: 120, unit: '+' },
  { icon: Users, label: 'Happy Clients', value: 45, unit: '+' },
  { icon: Zap, label: 'Years of Experience', value: 8, unit: '' },
];

function Counter({ value, unit }: { value: number; unit: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 2;
    const frames = 60;
    const increment = value / frames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      setCount(Math.floor(increment * frame));
      if (frame >= frames) {
        setCount(value);
        clearInterval(timer);
      }
    }, (duration * 1000) / frames);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-[64px] font-bold tracking-[-1.92px]">
      {count}
      {unit}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-[120px] px-[64px]">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-[32px] mb-[120px] text-center"
        >
          <h2 className="text-[26px] md:text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19] max-w-2xl mx-auto">
            By the numbers
          </h2>
          <p className="text-[16px] leading-[26px] text-[var(--color-text-muted)] max-w-xl mx-auto">
            Our track record speaks for itself. We deliver measurable results for every client.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="mb-[32px]"
                >
                  <Icon size={48} className="text-[#1e3a8a] group-hover:text-[#1f5a3a] transition-colors duration-300" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15 + 0.2,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="mb-[16px]"
                >
                  <Counter value={stat.value} unit={stat.unit} />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.3
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="text-[16px] leading-[26px] text-[var(--color-text-muted)] font-normal"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
