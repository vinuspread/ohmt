'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type ParallaxImageProps = {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  // 'top': section starts in view (hero). 'default': section enters on scroll.
  anchor?: 'top' | 'default'
}

export function ParallaxImage({ src, alt, sizes, priority = false, anchor = 'default' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: anchor === 'top' ? ['start start', 'end start'] : ['start end', 'end start'],
  })
  const range = anchor === 'top' ? ['0%', '10%'] : ['-8%', '8%']
  const y = useTransform(scrollYProgress, [0, 1], range)

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={reduced ? undefined : { y }} className="absolute inset-x-0 inset-y-[-10%]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" unoptimized />
      </motion.div>
    </div>
  )
}
