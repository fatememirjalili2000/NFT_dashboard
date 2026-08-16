import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { MdArrowDropUp } from 'react-icons/md';

const trafficData = [
  { time: '00', val: 20 },
  { time: '04', val: 30 },
  { time: '08', val: 20 },
  { time: '12', val: 40 },
  { time: '14', val: 50 },
  { time: '16', val: 60 },
  { time: '18', val: 50 },
];

export default function DailyTrafficChart() {
  return (
    <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-navy-500">Daily Traffic</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h4 className="text-2xl font-bold text-navy-700">2.579</h4>
            <span className="text-xs font-bold text-navy-500">Visitors</span>
          </div>
        </div>
        <div className="flex items-center text-xs font-bold text-green-500">
          <MdArrowDropUp className="h-5 w-5" />
          <span>+2.45%</span>
        </div>
      </div>

      <div className="h-40 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData}>
            <XAxis dataKey="time" stroke="#A3AED0" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="val" fill="#4318FF" radius={[10, 10, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}