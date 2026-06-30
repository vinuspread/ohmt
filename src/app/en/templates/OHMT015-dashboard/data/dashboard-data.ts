// VINUSPREAD Motors - Internal Operations Dashboard Data

export const monthlyRevenue = [
  { month: 'Jan', netProfit: 1840000, revenue: 5120000, cashflow: 980000 },
  { month: 'Feb', netProfit: 1620000, revenue: 4780000, cashflow: 870000 },
  { month: 'Mar', netProfit: 2110000, revenue: 6340000, cashflow: 1240000 },
  { month: 'Apr', netProfit: 1980000, revenue: 5960000, cashflow: 1100000 },
  { month: 'May', netProfit: 2350000, revenue: 7020000, cashflow: 1380000 },
  { month: 'Jun', netProfit: 2180000, revenue: 6580000, cashflow: 1250000 },
  { month: 'Jul', netProfit: 2520000, revenue: 7410000, cashflow: 1490000 },
  { month: 'Aug', netProfit: 2740000, revenue: 7890000, cashflow: 1620000 },
  { month: 'Sep', netProfit: 2460000, revenue: 7350000, cashflow: 1440000 },
  { month: 'Oct', netProfit: 2810000, revenue: 8120000, cashflow: 1680000 },
  { month: 'Nov', netProfit: 3060000, revenue: 8740000, cashflow: 1820000 },
  { month: 'Dec', netProfit: 3340000, revenue: 9280000, cashflow: 1950000 },
]

export type Todo = {
  id: number
  text: string
  done: boolean
  priority: 'urgent' | 'important' | 'normal'
}

export const todos: Todo[] = [
  { id: 1, text: 'Finalize EV9 Q3 delivery allocation', done: false, priority: 'urgent' },
  { id: 2, text: 'Send GT7 press kit to media partners', done: true, priority: 'normal' },
  { id: 3, text: 'Review dealer margin report - June', done: false, priority: 'important' },
  { id: 4, text: 'Approve X5 configurator update', done: false, priority: 'urgent' },
  { id: 5, text: 'Schedule S3 test drive events', done: true, priority: 'normal' },
]

export const saleReports: Record<string, { month: string; revenue: number; profit: number }[]> = {
  '2026': [
    { month: 'Jan', revenue: 5120000, profit: 1840000 },
    { month: 'Feb', revenue: 4780000, profit: 1620000 },
    { month: 'Mar', revenue: 6340000, profit: 2110000 },
    { month: 'Apr', revenue: 5960000, profit: 1980000 },
    { month: 'May', revenue: 7020000, profit: 2350000 },
    { month: 'Jun', revenue: 6580000, profit: 2180000 },
    { month: 'Jul', revenue: 7410000, profit: 2520000 },
    { month: 'Aug', revenue: 7890000, profit: 2740000 },
    { month: 'Sep', revenue: 7350000, profit: 2460000 },
    { month: 'Oct', revenue: 8120000, profit: 2810000 },
    { month: 'Nov', revenue: 8740000, profit: 3060000 },
    { month: 'Dec', revenue: 9280000, profit: 3340000 },
  ],
  '2025': [
    { month: 'Jan', revenue: 3980000, profit: 1340000 },
    { month: 'Feb', revenue: 4120000, profit: 1410000 },
    { month: 'Mar', revenue: 4870000, profit: 1650000 },
    { month: 'Apr', revenue: 4590000, profit: 1520000 },
    { month: 'May', revenue: 5340000, profit: 1820000 },
    { month: 'Jun', revenue: 5010000, profit: 1690000 },
    { month: 'Jul', revenue: 5760000, profit: 1940000 },
    { month: 'Aug', revenue: 6120000, profit: 2080000 },
    { month: 'Sep', revenue: 5680000, profit: 1900000 },
    { month: 'Oct', revenue: 6340000, profit: 2150000 },
    { month: 'Nov', revenue: 6890000, profit: 2340000 },
    { month: 'Dec', revenue: 7420000, profit: 2580000 },
  ],
  '2024': [
    { month: 'Jan', revenue: 3120000, profit: 1020000 },
    { month: 'Feb', revenue: 3340000, profit: 1090000 },
    { month: 'Mar', revenue: 3890000, profit: 1280000 },
    { month: 'Apr', revenue: 3650000, profit: 1180000 },
    { month: 'May', revenue: 4210000, profit: 1390000 },
    { month: 'Jun', revenue: 3980000, profit: 1310000 },
    { month: 'Jul', revenue: 4560000, profit: 1510000 },
    { month: 'Aug', revenue: 4830000, profit: 1620000 },
    { month: 'Sep', revenue: 4490000, profit: 1480000 },
    { month: 'Oct', revenue: 5020000, profit: 1670000 },
    { month: 'Nov', revenue: 5380000, profit: 1810000 },
    { month: 'Dec', revenue: 5870000, profit: 1980000 },
  ],
  '2023': [
    { month: 'Jan', revenue: 2480000, profit: 780000 },
    { month: 'Feb', revenue: 2690000, profit: 850000 },
    { month: 'Mar', revenue: 3110000, profit: 990000 },
    { month: 'Apr', revenue: 2940000, profit: 930000 },
    { month: 'May', revenue: 3380000, profit: 1080000 },
    { month: 'Jun', revenue: 3180000, profit: 1010000 },
    { month: 'Jul', revenue: 3640000, profit: 1170000 },
    { month: 'Aug', revenue: 3860000, profit: 1250000 },
    { month: 'Sep', revenue: 3580000, profit: 1140000 },
    { month: 'Oct', revenue: 4010000, profit: 1300000 },
    { month: 'Nov', revenue: 4280000, profit: 1400000 },
    { month: 'Dec', revenue: 4650000, profit: 1540000 },
  ],
  '2022': [
    { month: 'Jan', revenue: 1920000, profit: 580000 },
    { month: 'Feb', revenue: 2080000, profit: 640000 },
    { month: 'Mar', revenue: 2430000, profit: 750000 },
    { month: 'Apr', revenue: 2280000, profit: 700000 },
    { month: 'May', revenue: 2620000, profit: 810000 },
    { month: 'Jun', revenue: 2460000, profit: 760000 },
    { month: 'Jul', revenue: 2840000, profit: 890000 },
    { month: 'Aug', revenue: 3010000, profit: 950000 },
    { month: 'Sep', revenue: 2780000, profit: 870000 },
    { month: 'Oct', revenue: 3120000, profit: 990000 },
    { month: 'Nov', revenue: 3350000, profit: 1060000 },
    { month: 'Dec', revenue: 3640000, profit: 1170000 },
  ],
}

export const radarData = [
  { axis: 'EV9', '2022': 55, '2023': 65, '2024': 72, '2025': 82, '2026': 90 },
  { axis: 'GT7', '2022': 42, '2023': 54, '2024': 63, '2025': 74, '2026': 84 },
  { axis: 'X5', '2022': 68, '2023': 71, '2024': 75, '2025': 79, '2026': 83 },
  { axis: 'S3', '2022': 38, '2023': 46, '2024': 58, '2025': 68, '2026': 77 },
  { axis: 'Service', '2022': 72, '2023': 78, '2024': 82, '2025': 87, '2026': 91 },
  { axis: 'Digital', '2022': 28, '2023': 41, '2024': 56, '2025': 71, '2026': 86 },
]

export const companyGrowthData = [
  { month: 'Jan', value: 4200 },
  { month: 'Feb', value: 5800 },
  { month: 'Mar', value: 7400 },
  { month: 'Apr', value: 9100 },
  { month: 'May', value: 11300 },
  { month: 'Jun', value: 13800 },
  { month: 'Jul', value: 16200 },
  { month: 'Aug', value: 18900 },
  { month: 'Sep', value: 20800 },
  { month: 'Oct', value: 23400 },
  { month: 'Nov', value: 26100 },
  { month: 'Dec', value: 29200 },
]
