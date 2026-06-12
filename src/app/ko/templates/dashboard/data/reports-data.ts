export type ReportType = 'revenue' | 'traffic' | 'sales'

export type Report = {
  id: number
  title: string
  type: ReportType
  trend: number
  date: string
}

export const reports: Report[] = [
  { id: 1, title: 'Q2 2026 Revenue Report', type: 'revenue', trend: 12.4, date: 'Jun 1' },
  { id: 2, title: 'Q1 2026 Traffic Analysis', type: 'traffic', trend: -2.1, date: 'Apr 2' },
  { id: 3, title: 'Dec 2025 Sales Summary', type: 'sales', trend: 8.7, date: 'Jan 5' },
  { id: 4, title: 'Nov 2025 Revenue Report', type: 'revenue', trend: 5.3, date: 'Dec 3' },
  { id: 5, title: 'Oct 2025 Traffic Overview', type: 'traffic', trend: 3.8, date: 'Nov 4' },
  { id: 6, title: 'Sep 2025 Sales Report', type: 'sales', trend: -1.5, date: 'Oct 2' },
  { id: 7, title: 'Q3 2025 Revenue Summary', type: 'revenue', trend: 9.2, date: 'Oct 1' },
  { id: 8, title: 'Aug 2025 Traffic Report', type: 'traffic', trend: 6.7, date: 'Sep 5' },
  { id: 9, title: 'Jul 2025 Sales Analysis', type: 'sales', trend: 4.1, date: 'Aug 4' },
]

export const reportTypeMeta: Record<ReportType, { label: string; color: string }> = {
  revenue: { label: 'Revenue', color: 'var(--color-primary)' },
  traffic: { label: 'Traffic', color: 'var(--color-info)' },
  sales: { label: 'Sales', color: 'var(--color-success)' },
}
