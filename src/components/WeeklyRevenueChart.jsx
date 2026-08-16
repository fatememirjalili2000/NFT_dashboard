import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MdBarChart } from 'react-icons/md';

const data = [
  { day: '17', val: 50 },
  { day: '18', val: 80 },
  { day: '19', val: 60 },
  { day: '20', val: 90 },
  { day: '21', val: 70 },
  { day: '22', val: 85 },
];

export default function WeeklyRevenueChart() {
  return (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-navy-700">Weekly Revenue</h3>
        <button className="p-2 bg-[#F4F7FE] text-brand-500 rounded-xl text-lg">
          <MdBarChart />
        </button>
      </div>

      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#A3AED0" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="val" fill="#4318FF" radius={[10, 10, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}