# Dashboard 파생 페이지 명세

## 브랜드: Oh My Template
## 참고: https://themelooks.net/demo/dashmin/html/dark/
## 총 8페이지 (메인 포함)

---

## 완료 상태

| 페이지 | 상태 |
|--------|------|
| `/` 메인 대시보드 | ✅ 완료 |
| `/analytics/` | ⏳ 대기 |
| `/reports/` | ⏳ 대기 |
| `/orders/` | ⏳ 대기 |
| `/customers/` | ⏳ 대기 |
| `/calendar/` | ⏳ 대기 |
| `/settings/` | ⏳ 대기 |
| `/profile/` | ⏳ 대기 |
| 국문(ko) 템플릿 | ⏳ 대기 |

---

## 전체 라우트

```
/en/templates/dashboard/             ← 1. 메인 대시보드 (INSTRUCTIONS.md)
/en/templates/dashboard/analytics/  ← 2. 분석
/en/templates/dashboard/reports/    ← 3. 리포트
/en/templates/dashboard/orders/     ← 4. 주문 관리
/en/templates/dashboard/customers/  ← 5. 고객 관리
/en/templates/dashboard/calendar/   ← 6. 캘린더
/en/templates/dashboard/settings/   ← 7. 설정
/en/templates/dashboard/profile/    ← 8. 프로필
```

---

## 사이드바 메뉴 구조

```
[Oh My Template 로고]

Main
  ● Dashboard      (ChartLine)
    Analytics      (TrendUp)
    Reports        (FileText)

Manage
    Orders         (ShoppingCart)
    Customers      (Users)
    Calendar       (CalendarBlank)

Account
    Settings       (Gear)
    Profile        (UserCircle)

[하단] 유저 아바타 + 이름 + 이메일
```

---

## 다크/라이트 모드

`theme.css`에서 `[data-theme="light"]`와 `[data-theme="dark"]` 두 세트 토큰 정의.
`layout.tsx`에서 theme toggle 버튼으로 전환. Header에 해/달 아이콘 버튼 배치.

**절대 Tailwind `dark:` 클래스 사용 금지 - 반드시 CSS 변수(토큰)만 사용.**

---

## 토큰 시스템 (theme.css 전체)

```css
/* ─── Dark Mode (default) ─────────────────────────── */
[data-theme="dark"], :root {
  /* Backgrounds */
  --color-bg:             #0F1117;
  --color-bg-elevated:    #1A1D27;
  --color-bg-surface:     #212435;
  --color-bg-hover:       rgba(255,255,255,0.05);

  /* Brand */
  --color-primary:        #7B68EE;
  --color-primary-hover:  #6B58DE;
  --color-primary-muted:  rgba(123,104,238,0.15);
  --color-primary-border: rgba(123,104,238,0.35);

  /* Semantic */
  --color-success:        #22C55E;
  --color-success-muted:  rgba(34,197,94,0.15);
  --color-warning:        #F59E0B;
  --color-warning-muted:  rgba(245,158,11,0.15);
  --color-danger:         #EF4444;
  --color-danger-muted:   rgba(239,68,68,0.15);
  --color-info:           #38BDF8;
  --color-info-muted:     rgba(56,189,248,0.15);

  /* Text */
  --color-text:           #E2E8F0;
  --color-text-secondary: #94A3B8;
  --color-text-muted:     #64748B;
  --color-text-disabled:  #334155;

  /* Borders */
  --color-border:         #2D3148;
  --color-border-strong:  #3D4168;

  /* Charts */
  --chart-grid:           #1E2235;
  --chart-tooltip-bg:     #212435;
  --chart-tooltip-border: #2D3148;

  /* Typography */
  --font-heading:         'Geist', sans-serif;
  --font-mono:            'Geist Mono', monospace;

  /* Radius */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);
  --shadow-elevated: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-focus: 0 0 0 3px var(--color-primary-border);
}

/* ─── Light Mode ──────────────────────────────────── */
[data-theme="light"] {
  --color-bg:             #F8FAFC;
  --color-bg-elevated:    #FFFFFF;
  --color-bg-surface:     #F1F5F9;
  --color-bg-hover:       rgba(0,0,0,0.04);

  --color-primary:        #6654D8;
  --color-primary-hover:  #5544C8;
  --color-primary-muted:  rgba(102,84,216,0.10);
  --color-primary-border: rgba(102,84,216,0.30);

  --color-success:        #16A34A;
  --color-success-muted:  rgba(22,163,74,0.10);
  --color-warning:        #D97706;
  --color-warning-muted:  rgba(217,119,6,0.10);
  --color-danger:         #DC2626;
  --color-danger-muted:   rgba(220,38,38,0.10);
  --color-info:           #0284C7;
  --color-info-muted:     rgba(2,132,199,0.10);

  --color-text:           #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted:     #94A3B8;
  --color-text-disabled:  #CBD5E1;

  --color-border:         #E2E8F0;
  --color-border-strong:  #CBD5E1;

  --chart-grid:           #E2E8F0;
  --chart-tooltip-bg:     #FFFFFF;
  --chart-tooltip-border: #E2E8F0;

  --shadow-card: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-elevated: 0 4px 16px rgba(0,0,0,0.12);
}
```

### 토큰 사용 원칙
```tsx
// ✅ 모든 색상은 CSS 변수로
className="bg-[var(--color-bg-elevated)] text-[var(--color-text)]"
className="border-[var(--color-border)] rounded-[var(--radius-lg)]"

// ❌ 절대 하드코딩 금지
className="bg-[#1A1D27] text-[#E2E8F0]"
className="dark:bg-gray-800"
```

---

## 1. Analytics 페이지 (`analytics/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Analytics                           [7D][30D][90D][1Y]  │
├──────────┬──────────┬──────────┬──────────────────────  │
│ Sessions │ Visitors │ Bounce   │ Avg Duration           │
│ 284,500  │ 142,300  │ 38.4%    │ 4m 32s                 │
├─────────────────────────────────────────────────────────│
│ Traffic Overview (Recharts AreaChart, Full Width)       │
│ 3 series: Sessions / Unique Users / Pageviews           │
├─────────────────────┬───────────────────────────────── │
│ Traffic Sources     │ Top Pages Table                  │
│ Recharts PieChart   │ URL / Views / Bounce Rate        │
│ Organic 42%         │ /dashboard    12,400   24%       │
│ Direct  28%         │ /analytics     8,200   31%       │
│ Social  18%         │ /orders        5,100   28%       │
│ Referral 12%        │ /customers     3,800   22%       │
├─────────────────────┴───────────────────────────────── │
│ Device Breakdown (3 progress bars)                     │
│ Desktop 58%  Mobile 34%  Tablet 8%                     │
└─────────────────────────────────────────────────────────┘
```

컴포넌트:
- `PeriodSelector`: Motion layoutId 탭 언더라인
- `TrafficAreaChart`: gradient fill (`var(--color-primary-muted)`)
- `TrafficSourcePie`: 커스텀 legend, 토큰 색상
- `TopPagesTable`: 행 stagger reveal
- `DeviceProgressBar`: bar fill + 카운트업 애니메이션

---

## 2. Reports 페이지 (`reports/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Reports                                [+ New Report]   │
│ Filter: [All][Revenue][Traffic][Sales]                  │
├─────────────────────────────────────────────────────────│
│ Report Cards Grid (3 columns)                          │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐          │
│ │ Q2 2026    │ │ Q1 2026    │ │ Dec 2025   │          │
│ │ Revenue    │ │ Traffic    │ │ Sales      │          │
│ │ +12.4%     │ │ -2.1%      │ │ +8.7%      │          │
│ │ Jun 1      │ │ Apr 2      │ │ Jan 5      │          │
│ │[Download]  │ │[Download]  │ │[Download]  │          │
│ └────────────┘ └────────────┘ └────────────┘          │
│ ... (총 9개 카드)                                       │
├─────────────────────────────────────────────────────────│
│ Annual Revenue Trend (Recharts LineChart, Full Width)  │
└─────────────────────────────────────────────────────────┘
```

컴포넌트:
- `FilterTabs`: AnimatePresence + layoutId
- `ReportCard`: hover `y:-4`, Download 버튼
- `TrendBadge`: 양수(success), 음수(danger) 토큰 색상

데이터 (`data/reports-data.ts`):
```typescript
export const reports = [
  { id: 1, title: 'Q2 2026 Revenue Report', type: 'revenue',
    trend: 12.4, date: '2026-06-01' },
  // 9개
]
```

---

## 3. Orders 페이지 (`orders/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Orders                        [Search...] [Filter ▾]   │
├──────────┬──────────┬──────────┬──────────────────────  │
│ 1,284    │ 142      │ 398      │ 744                    │
│ Total    │ Pending  │ Shipped  │ Completed              │
├─────────────────────────────────────────────────────────│
│ [All][Pending][Processing][Shipped][Completed]          │
├─────────────────────────────────────────────────────────│
│ ID    │ Customer   │ Plan     │ Amount │ Status  │ Date │
│ #4821 │ Alex T.    │ Pro      │ $299   │ ●Done   │Jun 9 │
│ #4820 │ Maria L.   │ Standard │ $149   │ ●Ship   │Jun 8 │
│ ...   │            │          │        │         │      │
│                              [← 1  2  3 →]             │
└─────────────────────────────────────────────────────────┘

행 클릭 시 오른쪽 슬라이드 패널:
┌────────────────────┐
│ Order #4821   [✕]  │
│ Jun 9, 2026        │
│ Alex Torres        │
│ alex@example.com   │
│ Plan Pro × 1  $299 │
│ ● Completed        │
└────────────────────┘
```

컴포넌트:
- `StatusBadge`: 각 상태별 `var(--color-*)` + `var(--color-*-muted)` 배경
- `OrdersTable`: stagger reveal, 행 클릭 패널
- `OrderDetailPanel`: `x: 400→0` Motion
- `Pagination`

데이터: 20개 주문 (`data/orders-data.ts`)

---

## 4. Customers 페이지 (`customers/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Customers           [Search...] [Grid|List] [+ Invite]  │
├──────────┬──────────┬──────────┬──────────────────────  │
│ 8,420    │ 7,103    │ 284      │ 2.1%                   │
│ Total    │ Active   │ New/Mo   │ Churn                  │
├─────────────────────────────────────────────────────────│
│ Grid (4 columns):                                       │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐          │
│ │  [AT]  │ │  [ML]  │ │  [JK]  │ │  [SM]  │          │
│ │ Alex T.│ │Maria L.│ │James K.│ │Sara M. │          │
│ │ Pro    │ │Standard│ │ Pro    │ │ Free   │          │
│ │●Active │ │●Active │ │●Inact. │ │●Active │          │
│ └────────┘ └────────┘ └────────┘ └────────┘          │
│ (12개, 페이지네이션)                                    │
└─────────────────────────────────────────────────────────┘
```

Grid ↔ List 토글: AnimatePresence crossfade

컴포넌트:
- `Avatar`: 이니셜 + 이름 해시 기반 배경색 (토큰 내 지정 팔레트에서 선택)
- `PlanBadge`: Free(muted) / Standard(info) / Pro(primary)
- `CustomerCard`: hover `y:-4` + "View" 버튼 opacity 0→1
- `ViewToggle`

데이터: 12개 고객 (`data/customers-data.ts`)

---

## 5. Calendar 페이지 (`calendar/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Calendar                               [+ Add Event]    │
├──────────────────┬──────────────────────────────────── │
│ Mini Calendar    │         June 2026                   │
│ (월 이동 가능)   │  Mon Tue Wed Thu Fri Sat Sun        │
│                  │  ─────────────────────────────────  │
│ Upcoming         │   1   2   3   4   5   6   7         │
│ ● Team Standup   │   8   9  [●] 11  12  13  14         │
│   Jun 9, 09:00   │  15  16 [●●] 18  19  20  21         │
│ ● Q2 Review      │  22  23  24  25  26  27  28         │
│   Jun 15, 14:00  │  29  30                             │
│ ● Product Launch │                                     │
│   Jun 22, 10:00  │ 날짜 클릭 시 이벤트 패널 노출       │
└──────────────────┴──────────────────────────────────── │
```

외부 라이브러리 없이 직접 구현 (순수 Date 계산).

컴포넌트:
- `CalendarGrid`: 7열 CSS Grid
- `EventDot`: 이벤트 있는 날 컬러 dot (category 색상)
- `EventPanel`: 선택 날짜 이벤트 목록, `x: 20→0` 진입
- `MiniCalendar`: 사이드 소형 달력, 월 이동 시 fade+slide

이벤트 카테고리 색상 (토큰으로):
```css
--event-meeting:  var(--color-primary);
--event-review:   var(--color-warning);
--event-launch:   var(--color-success);
--event-personal: var(--color-info);
```

데이터: 10개 이벤트 (`data/calendar-data.ts`)

---

## 6. Settings 페이지 (`settings/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Settings                                                │
├──────────────┬──────────────────────────────────────── │
│ Vertical     │ General                                 │
│ Tabs         │ ─────────────────────────────────────  │
│              │ Name     [Alex Torres          ]        │
│ ● General    │ Email    [alex@ohmytemplate.io   ]        │
│   Notifs     │ Company  [Oh My Template           ]        │
│   Security   │ Timezone [UTC+9 (Seoul)    ▾  ]        │
│   API Keys   │                                        │
│              │ Theme                                  │
│              │ ○ Light   ● Dark   ○ System            │
│              │                                        │
│              │              [Save Changes]            │
└──────────────┴──────────────────────────────────────── │
```

**4개 탭:**

**General**: 계정 정보 폼 + 테마 선택 (라디오)  
**Notifications**: 알림 토글 스위치 8개 항목  
**Security**: 비밀번호 변경 폼 + 2FA 토글  
**API Keys**: 키 목록 3개 + 새 키 생성 버튼

컴포넌트:
- `SettingsTabs`: 세로 탭, active Motion highlight
- `FormInput`: label + input, `var(--color-border)` 테두리, focus `var(--shadow-focus)`
- `ToggleSwitch`:
  ```tsx
  animate={{ backgroundColor: isOn ? 'var(--color-primary)' : 'var(--color-border)' }}
  // thumb
  animate={{ x: isOn ? 24 : 2 }}
  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
  ```
- `APIKeyRow`: 마스킹 키 + 복사/삭제 버튼

---

## 7. Profile 페이지 (`profile/page.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│ Cover (그라디언트 배너, primary→surface)                 │
│  [AT 아바타 큰 원]  Alex Torres                         │
│                     Lead Developer                      │
│                     Oh My Template · Seoul, Korea           │
│                     [Edit Profile]                      │
├──────────────┬─────────────────┬─────────────────────── │
│ About        │ Recent Activity │ Stats                  │
│              │                 │                        │
│ Bio text     │ ● Deployed v2.1 │ Reports:  142          │
│              │   2 hours ago   │ Orders:   284          │
│ Skills:      │ ● Updated docs  │ Customers: 47          │
│ React pill   │   Yesterday     │                        │
│ Next.js pill │ ● Closed #421   │ Performance: 94%       │
│ TypeScript   │   Jun 8         │ [SVG Gauge Chart]      │
└──────────────┴─────────────────┴─────────────────────── │
```

컴포넌트:
- `ProfileCover`: 그라디언트 커버 + 아바타 오버랩 (margin-top 음수로 겹침)
- `SkillBadge`: `var(--color-primary-muted)` 배경 pill
- `ActivityFeed`: 타임라인 점+선 구조
- `GaugeChart`: SVG 반원 arc, Motion strokeDashoffset 애니메이션

---

## 8. 공통 컴포넌트 (`_components/common/`)

```
PageHeader.tsx      ← 제목 + 부제 + 우측 액션 슬롯
Badge.tsx           ← 컬러 배지 (variant: success/warning/danger/info/primary)
Avatar.tsx          ← 이니셜 기반, 배경색 토큰 팔레트에서 결정
EmptyState.tsx      ← 빈 데이터 상태
LoadingSkeleton.tsx ← 스켈레톤 (animate-pulse, var 색상)
DataTable.tsx       ← 재사용 테이블 (thead/tbody, hover, sort)
```

### 페이지 공통 진입 애니메이션 (모든 page.tsx)
```tsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
>
  {/* page content */}
</motion.div>
```

---

## 9. 최종 파일 구조

```
dashboard/
├── layout.tsx
├── page.tsx                  ← 메인 대시보드
├── theme.css                 ← 전체 토큰 (dark + light)
├── analytics/page.tsx
├── reports/page.tsx
├── orders/page.tsx
├── customers/page.tsx
├── calendar/page.tsx
├── settings/page.tsx
├── profile/page.tsx
├── _components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx        ← 테마 토글 버튼 포함
│   │   └── DashboardLayout.tsx
│   ├── widgets/
│   │   ├── StatsCard.tsx
│   │   ├── WelcomeCard.tsx
│   │   └── TodoList.tsx
│   ├── charts/
│   │   ├── RevenueBarChart.tsx
│   │   ├── DonutChart.tsx
│   │   ├── RadarChart.tsx
│   │   └── SaleReportChart.tsx
│   └── common/
│       ├── PageHeader.tsx
│       ├── Badge.tsx
│       ├── Avatar.tsx
│       ├── EmptyState.tsx
│       ├── LoadingSkeleton.tsx
│       └── DataTable.tsx
└── data/
    ├── dashboard-data.ts
    ├── chart-theme.ts        ← var() 기반 차트 색상
    ├── orders-data.ts
    ├── customers-data.ts
    ├── reports-data.ts
    └── calendar-data.ts
```

---

## 10. 테마 토글 구현

`layout.tsx`:
```tsx
// data-theme 속성을 html 또는 wrapper div에 적용
// ThemeProvider로 상태 관리
// localStorage에 persist
```

`Header.tsx`:
```tsx
// Sun (라이트) / Moon (다크) 아이콘 버튼
// 클릭 시 data-theme 전환 + Motion animate
```

---

## 11. 작업 순서

1. `theme.css` (다크/라이트 토큰 전체)
2. `layout.tsx` + `DashboardLayout.tsx` (테마 토글 포함)
3. `Sidebar.tsx` + `Header.tsx`
4. `_components/common/` 전체
5. `page.tsx` 메인 대시보드 (INSTRUCTIONS.md 참조)
6. `analytics/page.tsx`
7. `reports/page.tsx`
8. `orders/page.tsx`
9. `customers/page.tsx`
10. `calendar/page.tsx`
11. `settings/page.tsx`
12. `profile/page.tsx`
13. `/impeccable` 스킬로 전체 검수
