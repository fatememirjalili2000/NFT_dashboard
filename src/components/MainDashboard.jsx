import StatCard from "./StatCard";
import TotalSpentChart from "./TotalSpentChart";
import WeeklyRevenueChart from "./WeeklyRevenueChart";
import CheckTable from "./CheckTable";
import ComplexTable from "./ComplexTable";
import DailyTrafficChart from "./DailyTrafficChart";
import PieChartCard from "./PieChartCard";
import TasksWidget from "./TasksWidget";
import MiniCalendar from "./MiniCalendar";
import { MdBarChart, MdAttachMoney, MdFileCopy, MdCheckCircle } from "react-icons/md";

export default function MainDashboard() {
  return (
    <div className="space-y-6 min-w-0">
      {/* ردیف اول: کارت‌های آماری */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 min-w-0">
        <StatCard icon={<MdAttachMoney />} title="Earnings" value="$340.5" />
        <StatCard icon={<MdBarChart />} title="Spend this month" value="$642.39" />
        <StatCard icon={<MdAttachMoney />} title="Sales" value="$574.34" badge="+23%" />
        <StatCard icon={<MdAttachMoney />} title="Your Balance" value="$1,000" />
        <StatCard icon={<MdCheckCircle />} title="New Tasks" value="145" />
        <StatCard icon={<MdFileCopy />} title="Total Projects" value="$2433" />
      </div>

      {/* ردیف دوم: نمودارها */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 min-w-0">
        <div className="xl:col-span-2 min-w-0">
          <TotalSpentChart />
        </div>
        <div className="min-w-0">
          <WeeklyRevenueChart />
        </div>
      </div>

      {/* ردیف سوم: جداول و ویجت‌ها */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 min-w-0">
        <div className="space-y-5 min-w-0">
          <CheckTable />
          <ComplexTable />
        </div>
        <div className="space-y-5 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
            <DailyTrafficChart />
            <PieChartCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
            <TasksWidget />
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}