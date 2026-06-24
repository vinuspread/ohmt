export function formatAxis(v: number): string {
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`
  if (v >= 1000) return `${(v / 1000).toFixed(0)}K`
  return String(v)
}

export const chartDefaults = {
  cartesianGrid: { stroke: 'var(--chart-grid)', strokeDasharray: '3 3' },
  tooltip: {
    contentStyle: {
      background: 'var(--chart-tooltip-bg)',
      border: '1px solid var(--chart-tooltip-border)',
      borderRadius: '8px',
      color: 'var(--color-text)',
      fontSize: '13px',
    },
  },
  legend: {
    wrapperStyle: { fontSize: '12px', color: 'var(--color-text-muted)' },
  },
}
