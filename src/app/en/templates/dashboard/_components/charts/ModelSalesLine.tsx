'use client'

import { motion } from 'framer-motion'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts'
import { chartDefaults, formatAxis } from '../../data/chart-theme'

const modelData = [
  { month: 'Jan', EV9: 312, GT7: 148, X5: 524, S3: 687 },
  { month: 'Feb', EV9: 290, GT7: 132, X5: 498, S3: 641 },
  { month: 'Mar', EV9: 378, GT7: 171, X5: 563, S3: 742 },
  { month: 'Apr', EV9: 354, GT7: 158, X5: 541, S3: 718 },
  { month: 'May', EV9: 421, GT7: 189, X5: 612, S3: 803 },
  { month: 'Jun', EV9: 398, GT7: 176, X5: 587, S3: 771 },
  { month: 'Jul', EV9: 445, GT7: 203, X5: 634, S3: 829 },
  { month: 'Aug', EV9: 472, GT7: 218, X5: 658, S3: 862 },
  { month: 'Sep', EV9: 431, GT7: 197, X5: 619, S3: 814 },
  { month: 'Oct', EV9: 489, GT7: 224, X5: 673, S3: 891 },
  { month: 'Nov', EV9: 518, GT7: 241, X5: 701, S3: 934 },
  { month: 'Dec', EV9: 554, GT7: 259, X5: 738, S3: 978 },
]

export function ModelSalesLine() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[var(--color-text)]">Units Sold by Model</h3>
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Monthly unit sales - EV9 · GT7 · X5 · S3</p>
      </div>
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={modelData}>
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip {...chartDefaults.tooltip} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
            <Legend {...chartDefaults.legend} />
            <Line type="linear" dataKey="EV9" stroke="var(--color-primary)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={900} animationEasing="ease-in-out" />
            <Line type="linear" dataKey="GT7" stroke="var(--color-danger)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={900} animationEasing="ease-in-out" />
            <Line type="linear" dataKey="X5" stroke="var(--color-success)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={900} animationEasing="ease-in-out" />
            <Line type="linear" dataKey="S3" stroke="var(--color-info)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={900} animationEasing="ease-in-out" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
