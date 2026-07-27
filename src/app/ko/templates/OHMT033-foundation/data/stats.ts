export type Stat = {
  id: string
  prefix?: string
  value: number
  decimals?: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { id: 'volunteer-hours', value: 92, suffix: 'K+', label: '2025년 누적 봉사 시간' },
  { id: 'people-reached', value: 48, suffix: 'K+', label: '12개국 프로그램 참여자' },
  { id: 'trees-planted', value: 1.2, decimals: 1, suffix: 'M', label: '2019년 이후 식재한 나무' },
  { id: 'grants-distributed', prefix: '$', value: 14.6, decimals: 1, suffix: 'M', label: '지원금·장학금 누적 집행액' },
]
