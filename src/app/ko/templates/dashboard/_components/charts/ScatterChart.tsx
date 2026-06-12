'use client'

import { motion } from 'framer-motion'
import {
  ScatterChart as RechartsScatter, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ZAxis, Label,
} from 'recharts'
import { chartDefaults } from '../../data/chart-theme'

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const dealerData = Array.from({ length: 120 }, (_, i) => {
  const x = rand(5, 130)
  const base = 30 + x * 0.45
  const y = Math.min(98, Math.max(18, base + rand(-18, 18)))
  const z = Math.round((x * 4.2 + y * 1.8 + rand(0, 80)) * 0.1) * 10
  return { x, y, z }
})

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div style={chartDefaults.tooltip.contentStyle} className="text-xs">
      <p>Test Drives: <span className="text-[var(--color-primary)]">{d.x}</span></p>
      <p>Close Rate: <span className="text-[var(--color-success)]">{d.y}%</span></p>
      <p>Revenue: <span className="text-[var(--color-info)]">₩{d.z}M</span></p>
    </div>
  )
}

export function DealerScatterChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-[var(--color-text)]">Dealer Performance</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Test drives vs. close rate - 120 dealers</p>
        </div>
      </div>
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsScatter>
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis
              dataKey="x"
              type="number"
              name="Test Drives"
              tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 135]}
            >
              <Label value="Test Drives" offset={-2} position="insideBottom" fill="var(--color-text-muted)" fontSize={11} />
            </XAxis>
            <YAxis
              dataKey="y"
              type="number"
              name="Close Rate"
              tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
              domain={[10, 100]}
            />
            <ZAxis dataKey="z" range={[18, 18]} name="Revenue" />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.1)' }} />
            <Scatter
              data={dealerData}
              fill="var(--color-primary)"
              fillOpacity={0.55}
              isAnimationActive={false}
              animationDuration={800}
            />
          </RechartsScatter>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
