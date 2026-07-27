'use client'

import { motion } from 'motion/react'

const specs = [
  {
    title: '듀얼 보일러',
    desc: '추출용과 스팀용 보일러를 분리해 스티밍 중에도 다음 샷의 설정 온도를 유지합니다.',
    target: '2',
    unit: '보일러',
    size: 'compact',
  },
  {
    title: 'PID 온도 제어',
    desc: '설정 온도 기준 ±0.5°C 범위에서 추출 온도를 계속 보정합니다.',
    target: '0.5',
    unit: '°C',
    size: 'compact',
  },
  {
    title: '58mm 상업용 그룹 헤드',
    desc: '열을 오래 유지하는 58mm 그룹 헤드로 포터필터 주변의 온도 변화를 줄입니다.',
    target: '58',
    unit: 'mm',
    size: 'compact',
  },
  {
    title: '프로그래머블 프리인퓨전',
    desc: '본 추출 전 저압으로 커피 퍽을 적셔 채널링을 줄입니다.',
    target: '10',
    unit: '초',
    size: 'wide',
  },
  {
    title: '정밀 가공과 수작업 마감',
    desc: '브러시드 스테인리스 바디, 노출 피팅, 정밀 가공 다이얼을 손으로 마감합니다.',
    target: '20+',
    unit: '시간',
    size: 'wide',
  },
  {
    title: '연속 추출 온도 제어',
    desc: '연속 추출에서도 설정 온도와 압력 조건을 유지하도록 설계했습니다.',
    target: '100',
    unit: '샷',
    size: 'compact',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function SpecValue({ target, unit }: { target: string; unit: string }) {
  return (
    <span className="font-mono text-[length:var(--text-h1)] font-semibold leading-none tracking-tight text-white">
      {target}
      <span className="ml-2 align-baseline text-xs font-normal text-white/58 md:text-sm">{unit}</span>
    </span>
  )
}

export function PrecisionEngineering() {
  return (
    <section className="nova-gradient-precision px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 md:sticky md:top-28 md:self-start"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/52">
            정밀 설계</p>
          <h2 className="mt-5 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-white">
            온도와 압력을 일정하게.</h2>
          <p className="mt-8 max-w-[400px] text-sm leading-relaxed text-white/68 md:text-sm">
            에스프레소 추출 결과는 온도와 압력 변화에 민감합니다.
            <br className="hidden md:block" />
            NOVA는 두 값을 사용자가 직접 확인하고 조정할 수 있도록 설계했습니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid border-l border-t border-white/18 md:col-span-8 md:grid-cols-3"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              variants={itemVariants}
              className={`grid min-h-[190px] border-b border-r border-white/18 p-5 md:min-h-[260px] md:p-7 ${
                spec.size === 'wide' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <SpecValue target={spec.target} unit={spec.unit} />
                <p className="font-mono text-xs text-white/38">0{index + 1}</p>
              </div>
              <div className="mt-8 self-end">
                <h3 className="font-display text-base font-bold leading-tight text-white md:text-lg">{spec.title}</h3>
                <p className={`mt-3 text-xs leading-relaxed text-white/72 md:text-sm ${
                  spec.size === 'wide' ? 'max-w-[520px]' : 'max-w-[330px]'
                }`}>{spec.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
