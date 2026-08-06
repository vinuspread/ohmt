'use client'

import { motion } from 'motion/react'

const specs = [
  {
    title: '듀얼 보일러',
    desc: '브루와 스팀 보일러를 분리해 스티밍 중에도 다음 샷의 온도를 지킵니다.',
    target: '2',
    unit: '보일러',
    size: 'compact',
  },
  {
    title: 'PID 온도 제어',
    desc: '목표 온도 ±0.5°C 범위에서 브루 온도를 계속 보정합니다.',
    target: '0.5',
    unit: '°C',
    size: 'compact',
  },
  {
    title: '상업용 규격 그룹헤드',
    desc: '카페 장비에 가까운 열 보존 구조로 포터필터 주변 온도를 안정적으로 유지합니다.',
    target: '58',
    unit: 'mm',
    size: 'compact',
  },
  {
    title: '프로그래머블 프리인퓨전',
    desc: '본 추출 전 저압으로 퍽을 적셔 채널링을 줄입니다.',
    target: '10',
    unit: 's',
    size: 'wide',
  },
  {
    title: '반복 추출 안정성',
    desc: '열 번째 샷도 첫 샷과 같은 조건에서 시작하도록 설계했습니다.',
    target: '100',
    unit: '샷',
    size: 'compact',
  },
  {
    title: '손으로 마감한 소재',
    desc: '브러시드 스테인리스, 노출 피팅, 정밀 가공 다이얼을 손끝에서 느낄 수 있게 마감합니다.',
    target: '20+',
    unit: '시간',
    size: 'wide',
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
            Precision block
          </p>
          <h2 className="mt-5 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-white">
            열과 압력을 반복 가능한 기준으로.
          </h2>
          <p className="mt-8 max-w-[400px] text-sm leading-relaxed text-white/68 md:text-sm">
            홈 에스프레소를 흔드는 변수는 대개 눈에 잘 보이지 않습니다. NOVA는 온도와 압력을 사용자가 바로 읽고 조정할 수 있게 설계했습니다.
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
