export type Stat = {
  id: string
  prefix?: string
  value: number
  decimals?: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { id: 'volunteer-hours', value: 92, suffix: 'K+', label: 'Volunteer hours logged in 2025' },
  { id: 'people-reached', value: 48, suffix: 'K+', label: 'People reached across 12 countries' },
  { id: 'trees-planted', value: 1.2, decimals: 1, suffix: 'M', label: 'Trees planted since 2019' },
  { id: 'grants-distributed', prefix: '$', value: 14.6, decimals: 1, suffix: 'M', label: 'Distributed in grants and scholarships' },
]
