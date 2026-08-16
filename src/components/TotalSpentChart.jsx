import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MdOutlineCalendarToday, MdBarChart } from 'react-icons/md';

const data = [
  { month: 'SEP', spent: 30, revenue: 20 },
  { month: 'OCT', spent: 40, revenue: 25 },
  { month: 'NOV', spent: 25, revenue: 40 },
  { month: 'DEC', spent: 50, revenue: 30 },
  { month: 'JAN', spent: 45, revenue: 60 },
  { month: 'FEB', spent: 60, revenue: 50 },
];

export default function TotalSpentChart() {
  return (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <button className="flex items-center gap-2 text-xs font-bold text-navy-500 bg-[#F4F7FE] px-3 py-2 rounded-xl">
          <MdOutlineCalendarToday /> This Month
        </button>
        <button className="p-2 bg-[#F4F7FE] text-brand-500 rounded-xl text-lg">
          <MdBarChart />
        </button>
      </div>

      <div className="flex items-baseline gap-4 mb-4">
        <h3 className="text-3xl font-bold text-navy-700">$37.5K</h3>
        <span className="text-xs font-bold text-green-500">+2.45%</span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4318FF" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#4318FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#A3AED0" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="spent" stroke="#4318FF" strokeWidth={3} fillOpacity={1} fill="url(#colorSpent)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
