import { WelcomeCard } from './_components/widgets/WelcomeCard'
import { StatsCard } from './_components/widgets/StatsCard'
import { TodoList } from './_components/widgets/TodoList'
import { ActivityFeed } from './_components/widgets/ActivityFeed'
import { QuickNotes } from './_components/widgets/QuickNotes'
import { ProjectStatus } from './_components/widgets/ProjectStatus'
import { RevenueBarChart } from './_components/charts/RevenueBarChart'
import { ModelSalesLine } from './_components/charts/ModelSalesLine'
import { DealerScatterChart } from './_components/charts/ScatterChart'
import { DonutChart } from './_components/charts/DonutChart'
import { CloudStorageRadar, ActivityCards } from './_components/charts/RadarChart'
import { todos } from './data/dashboard-data'
import { DashboardLayout } from './_components/layout/DashboardLayout'

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-3">

        {/* Row 1: Welcome + Stats */}
        <div className="grid grid-cols-12 gap-3 items-stretch">
          <div className="col-span-4 flex flex-col">
            <WelcomeCard />
          </div>
          <div className="col-span-2 flex flex-col"><StatsCard label="Sales Revenue" value={9280000} change="12.5%" positive={true} color="success" /></div>
          <div className="col-span-2 flex flex-col"><StatsCard label="Vehicle Orders" value={1284} change="3.2%" positive={false} color="danger" /></div>
          <div className="col-span-2 flex flex-col"><StatsCard label="Test Drive Leads" value={847} change="8.7%" positive={true} color="info" /></div>
          <div className="col-span-2 flex flex-col"><StatsCard label="Close Rate" value={4.2} suffix="%" change="0.8%" positive={true} color="primary" /></div>
        </div>

        {/* Row 2: Revenue bar chart + Todo */}
        <div className="grid grid-cols-12 gap-3 items-stretch">
          <div className="col-span-8 flex flex-col">
            <RevenueBarChart />
          </div>
          <div className="col-span-4 flex flex-col">
            <TodoList todos={todos} />
          </div>
        </div>

        {/* Row 3: Projects + Activity + Notes (equal height) */}
        <div className="grid grid-cols-12 gap-3 items-stretch">
          <div className="col-span-5 flex flex-col">
            <ProjectStatus className="flex-1" />
          </div>
          <div className="col-span-4 flex flex-col">
            <ActivityFeed className="flex-1" />
          </div>
          <div className="col-span-3 flex flex-col">
            <QuickNotes className="flex-1" />
          </div>
        </div>

        {/* Row 4: Line + Scatter (equal width) */}
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6">
            <ModelSalesLine />
          </div>
          <div className="col-span-6">
            <DealerScatterChart />
          </div>
        </div>

        {/* Row 5: Radar + Donut + Donut + KPIs (4-col compact) */}
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <CloudStorageRadar />
          </div>
          <div className="col-span-3">
            <DonutChart
              percentage={78}
              label="EV9 Delivery Rate"
              subLabel="vs. Q2 Target"
              color="var(--color-primary)"
              metrics={[{ label: 'Delivered', value: '1,092' }, { label: 'Pending', value: '308' }]}
            />
          </div>
          <div className="col-span-3">
            <DonutChart
              percentage={62}
              label="Test Drive Conversion"
              subLabel="vs. Last Quarter"
              color="var(--color-success)"
              metrics={[{ label: 'Converted', value: '524' }, { label: 'No-show', value: '98' }]}
            />
          </div>
          <div className="col-span-3">
            <ActivityCards />
          </div>
        </div>


      </div>
    </DashboardLayout>
  )
}
