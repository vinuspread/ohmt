# Dashboard Template - OpenCode 작업 지시문

## 브랜드: Oh My Template
## 참고 디자인: Dashmin (themelooks.net/demo/dashmin/html/dark/)
## 작업 경로: `src/app/en/templates/dashboard/`

---

## 0. 작업 시작 전 필수

```
/design-taste-frontend
```

위 스킬 실행 후 아래 지시에 따라 작업한다.
작업 완료 후 반드시:

```
/impeccable
```

위 스킬로 전체 UI 품질 검수 후 마무리한다.

---

## 1. 디자인 방향 (Design Read)

- **테마**: Dark mode 전용 (라이트 모드 없음)
- **색상 체계**:
  - Background: `#0F1117` (메인), `#1A1D27` (사이드바/카드)
  - Surface elevated: `#212435`
  - Accent: `#7B68EE` (미디엄 퍼플 - 브랜드 컬러)
  - Success: `#22C55E`, Warning: `#F59E0B`, Danger: `#EF4444`
  - Text primary: `#E2E8F0`, Text muted: `#64748B`
  - Border: `#2D3148`
- **폰트**: Geist (heading) + Geist Mono (숫자/데이터)
- **스타일**: Dense data dashboard, dark tech, minimal decoration

**Dial 설정** (design-taste-frontend 기준):
- DESIGN_VARIANCE: 5
- MOTION_INTENSITY: 6
- VISUAL_DENSITY: 8

---

## 2. 파일 구조

```
src/app/en/templates/dashboard/
├── layout.tsx
├── page.tsx                    ← 메인 대시보드
├── theme.css
├── _components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── DashboardLayout.tsx
│   ├── widgets/
│   │   ├── StatsCard.tsx
│   │   ├── WelcomeCard.tsx
│   │   ├── TodoList.tsx
│   │   └── ClockWidget.tsx
│   └── charts/
│       ├── RevenueBarChart.tsx
│       ├── LineSparkChart.tsx
│       ├── DonutChart.tsx
│       ├── RadarChart.tsx
│       └── SaleReportChart.tsx
├── data/
│   └── dashboard-data.ts
└── README.md
```

---

## 3. 레이아웃 구조

### 3.1 전체 레이아웃
```
┌──────────────────────────────────────────────────┐
│  SIDEBAR (260px fixed)  │  HEADER (64px fixed)   │
│                         │──────────────────────  │
│  Logo: Oh My Template       │  CONTENT AREA          │
│                         │  (scrollable)          │
│  Main                   │                        │
│  ├─ Dashboard (active)  │                        │
│  ├─ Analytics           │                        │
│  ├─ Reports             │                        │
│  └─ Calendar            │                        │
│                         │                        │
│  Products               │                        │
│  ├─ Inventory           │                        │
│  ├─ Orders              │                        │
│  └─ Customers           │                        │
│                         │                        │
│  Settings               │                        │
│  ├─ Profile             │                        │
│  └─ Preferences         │                        │
└──────────────────────────────────────────────────┘
```

### 3.2 사이드바 (Sidebar.tsx)
- 너비: 260px (고정, `fixed left-0 top-0 h-full`)
- 배경: `#1A1D27`
- 상단: Oh My Template 로고 (텍스트 마크, 퍼플 어센트)
- 메뉴 아이템: `@phosphor-icons/react` 아이콘 + 레이블
- Active state: 퍼플 배경 pill, `bg-[#7B68EE]/20 text-[#7B68EE]`
- Hover: `bg-white/5`
- 하단: 유저 아바타 + 이름 + 이메일

**메뉴 구조:**
```
Main
  Dashboard (ChartLine)
  Analytics (TrendUp)
  Reports (FileText)
  Calendar (CalendarBlank)

Products
  Inventory (Package)
  Orders (ShoppingCart)
  Customers (Users)

System
  Settings (Gear)
  Profile (User)
```

### 3.3 헤더 (Header.tsx)
- 높이: 64px
- 배경: `#0F1117` + `border-b border-[#2D3148]`
- 왼쪽: 현재 페이지 타이틀 "Dashboard"
- 오른쪽: 검색 버튼 / 알림 벨 (배지) / 메시지 / 유저 아바타 드롭다운
- 실시간 시계: `HH:MM` 형식, `font-mono` 텍스트

---

## 4. 메인 대시보드 페이지 (page.tsx)

### 4.1 Row 1 - Welcome + Stats (4 cards)

**WelcomeCard** (2 col span):
```
┌─────────────────────────────┐
│  Good morning, Alex.        │
│  Oh My Template Dashboard       │
│                             │
│  86% tasks completed        │
│  [▓▓▓▓▓▓▓▓░░] this week    │
└─────────────────────────────┘
```
- 배경: 그라디언트 `from-[#7B68EE]/30 to-[#1A1D27]`
- 진행 바: animated width with Motion

**StatsCard** (각 1 col, 총 4개):

| 카드 | 메트릭 | 색상 |
|------|--------|------|
| Total Revenue | $284,500 (+12.5%) | 그린 |
| Active Orders | 1,284 (-3.2%) | 레드 |
| New Customers | 847 (+8.7%) | 블루 |
| Conversion | 4.2% (+0.8%) | 퍼플 |

각 카드:
- 오른쪽 상단: sparkline 미니 차트 (5개 데이터 포인트)
- 하단: 전월 대비 퍼센트 + 화살표 아이콘
- Hover: `scale(1.02)` + 미묘한 border glow

### 4.2 Row 2 - Revenue Chart + Todo List

**RevenueBarChart** (8 col span):
- 제목: "Website Analytics"
- 부제: "Monthly revenue breakdown"
- 범례: Net Profit / Revenue / Cashflow
- 바 차트: 12개월, 3가지 컬러 grouped bar
- 높이: 300px
- **차트 라이브러리: Recharts**
- **Emil Kowalski 애니메이션 적용** (아래 섹션 6 참조)

**TodoList** (4 col span):
```
Today's Tasks
Saturday, 9 June 2026
[+] Add Task

○ Deploy new dashboard version
  Urgent · Important    ⋯

● Update API documentation
  Not Urgent            ⋯

○ Review Q2 reports
  Urgent · Not Important ⋯
```
- 완료된 항목: `line-through opacity-50`
- 체크박스: 커스텀 animated checkbox (Motion)
- 우선순위 배지: 컬러 코딩

### 4.3 Row 3 - Line Charts (2 col) + Donut Charts (3 × 1 col)

**WebsiteAnalyticsLine** (4 col):
- Recharts LineChart
- 3개 선 (Net Profit, Revenue, Cashflow)
- Smooth curves, dot on hover

**CompanyGrowth** (4 col):
- 단일 선 차트
- Area fill with gradient
- "+20% avg growth" 주석

**DonutChart × 3** (각 4 col):

| | 수치 | 레이블 |
|--|------|--------|
| Registrations | 75% | Increase |
| Sales | 35% | Increase |
| Employee Growth | 70% | Increase |

각 도넛:
- 중앙 대형 퍼센트 텍스트 (`font-mono text-4xl`)
- 하단: 2개 지표 (Users / Disabled 등)
- **Emil Kowalski 애니메이션**: 진입 시 stroke-dashoffset 애니메이션

### 4.4 Row 4 - Radar + Activity + Analytics Bar

**CloudStorageRadar** (4 col):
- Recharts RadarChart
- 6축 다각형
- 연도별 데이터 (2014-2019)
- 하단: "Upgrade Storage" 버튼 (퍼플 그라디언트)

**ActivityCards** (4 col):
```
Registration
[미니 바 차트]
Pellentesque tincidunt tristique...

Activity
[미니 바 차트]
...

Completed Task
[미니 바 차트]
...
```
각 카드에 미니 sparkbar (Recharts BarChart 축소)

**메트릭 2개** (2 col):
- 67% Bounce Rate (Donut)
- 48k Conversion (Ring)

**AnalyticsBar** (6 col):
- 가로 바 차트
- 연도별 (2003-2007) 2개 시리즈 비교
- Recharts HorizontalBar

### 4.5 Row 5 - Sale Reports (Full Width)

**SaleReportChart**:
- 제목: "Sale Reports" + 연도 탭 (2015 | 2016 | 2017 | 2018 | 2019)
- Recharts LineChart, dot + area
- 점선 스타일 (strokeDasharray)
- 활성 탭: 퍼플 배경 pill
- 높이: 280px
- **Emil Kowalski 애니메이션**: 탭 전환 시 차트 데이터 부드럽게 전환

---

## 5. 차트 라이브러리 설정

### 설치
```bash
npm install recharts
```

### 공통 차트 테마 설정 (`data/chart-theme.ts`)
```typescript
export const chartColors = {
  primary: '#7B68EE',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#38BDF8',
  muted: '#334155',
  grid: '#1E2235',
  text: '#64748B',
}

export const chartDefaults = {
  cartesianGrid: { stroke: '#1E2235', strokeDasharray: '3 3' },
  tooltip: {
    contentStyle: {
      background: '#212435',
      border: '1px solid #2D3148',
      borderRadius: '8px',
      color: '#E2E8F0',
    }
  }
}
```

---

## 6. Emil Kowalski 애니메이션 적용

차트 컴포넌트에 아래 원칙 적용:

### 6.1 진입 애니메이션
```tsx
// 모든 차트 컴포넌트에 적용
import { motion } from 'motion/react'

// 차트 컨테이너 래핑
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1]  // expo out - Emil 권장 easing
  }}
>
  <RechartsComponent />
</motion.div>
```

### 6.2 Recharts 자체 애니메이션
```tsx
// Bar Chart
<Bar
  isAnimationActive={true}
  animationDuration={800}
  animationEasing="ease-out"
/>

// Line Chart
<Line
  isAnimationActive={true}
  animationDuration={1000}
  animationEasing="ease-in-out"
/>
```

### 6.3 Donut Stroke 애니메이션
```tsx
// SVG stroke-dashoffset 방식
const DonutChart = ({ percentage }: { percentage: number }) => {
  const circumference = 2 * Math.PI * 45  // r=45
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.circle
      r={45} cx={50} cy={50}
      fill="none"
      stroke="#7B68EE"
      strokeWidth={8}
      strokeDasharray={circumference}
      initial={{ strokeDashoffset: circumference }}
      animate={{ strokeDashoffset: offset }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    />
  )
}
```

### 6.4 StatsCard 카운트업 애니메이션
```tsx
// useSpring으로 숫자 애니메이션
import { useSpring, motion, useInView } from 'motion/react'

const CountUp = ({ value }: { value: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: 1000 })
  
  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView])

  return <motion.span ref={ref}>{useTransform(spring, Math.round)}</motion.span>
}
```

### 6.5 Reduced Motion 필수 처리
```tsx
import { useReducedMotion } from 'motion/react'

const shouldReduce = useReducedMotion()
// shouldReduce가 true면 모든 애니메이션 duration을 0으로
```

### 6.6 Tooltip Hover 트랜지션
```tsx
// 차트 hover tooltip은 Recharts 기본 사용
// 커스텀 tooltip에 fade-in 적용:
const CustomTooltip = ({ active, payload }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="bg-[#212435] border border-[#2D3148] rounded-lg p-3"
      >
        {/* tooltip content */}
      </motion.div>
    )}
  </AnimatePresence>
)
```

---

## 7. theme.css

```css
:root {
  --color-bg: #0F1117;
  --color-bg-elevated: #1A1D27;
  --color-bg-surface: #212435;
  --color-primary: #7B68EE;
  --color-primary-muted: rgba(123, 104, 238, 0.2);
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
  --color-info: #38BDF8;
  --color-text: #E2E8F0;
  --color-text-muted: #64748B;
  --color-border: #2D3148;
  --font-heading: 'Geist', sans-serif;
  --font-mono: 'Geist Mono', monospace;
  --radius-card: 12px;
  --radius-badge: 6px;
}
```

---

## 8. layout.tsx 요구사항

```tsx
import { Geist, Geist_Mono } from 'next/font/google'
import './theme.css'

// 사이드바 + 헤더 고정 레이아웃
// main content는 pl-[260px] pt-[64px]
// 배경: var(--color-bg)
```

---

## 9. 데이터 파일 (data/dashboard-data.ts)

실제처럼 보이는 데이터를 하드코딩:

```typescript
// 월별 Revenue 데이터
export const monthlyRevenue = [
  { month: 'Jan', netProfit: 42000, revenue: 68000, cashflow: 31000 },
  { month: 'Feb', netProfit: 38000, revenue: 72000, cashflow: 28000 },
  // ... 12개월
]

// Todo 항목
export const todos = [
  { id: 1, text: 'Deploy new dashboard version', done: false, priority: 'urgent' },
  { id: 2, text: 'Update API documentation', done: true, priority: 'normal' },
  // ...
]

// Sale Report 연도별 데이터
export const saleReports = {
  '2019': [...],
  '2018': [...],
  // ...
}
```

---

## 10. 코드 품질 규칙

- 모든 차트 컴포넌트는 `'use client'` 선언
- 서버 컴포넌트: `page.tsx`, `layout.tsx`
- 아이콘: `@phosphor-icons/react` 전용, strokeWidth 일관 적용
- 숫자 표시: 항상 `font-mono` 클래스
- 카드 radius: 모두 `rounded-[var(--radius-card)]` 일관 적용
- em-dash(`—`) 금지 - 하이픈(-) 사용
- `font-light` 클래스 금지
- `italic` 클래스 금지

---

## 11. 완료 체크리스트

- [x] Sidebar 고정 레이아웃 완성
- [x] Header 실시간 시계 작동
- [x] StatsCard 4개 - 카운트업 애니메이션
- [x] WelcomeCard - 진행바 애니메이션
- [x] RevenueBarChart - Recharts + Emil 애니메이션
- [x] TodoList - 체크박스 인터랙션
- [x] DonutChart × 3 - stroke 애니메이션
- [x] LineChart × 2 - 부드러운 진입
- [x] RadarChart - 진입 애니메이션
- [x] SaleReportChart - 탭 전환 애니메이션
- [x] theme.css 적용
- [x] 모든 숫자 font-mono
- [x] useReducedMotion 적용
- [ ] `/impeccable` 스킬로 최종 품질 검수 (미실행)
- [ ] PAGES.md 7개 서브 페이지 제작
- [ ] 국문(ko) 템플릿 제작

---

## 12. 최종 실행

작업 완료 후 반드시 `/impeccable` 스킬 실행하여 다음 항목 검수:
- 타이포그래피 일관성
- 색상 대비 (WCAG AA)
- 카드/radius 일관성
- 애니메이션 자연스러움
- 모바일 반응형 (사이드바 collapse)
- 빈 상태/로딩 상태 처리
