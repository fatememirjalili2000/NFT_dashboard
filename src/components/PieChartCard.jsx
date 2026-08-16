import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Your Files', value: 63, color: '#4318FF' },
  { name: 'System', value: 25, color: '#6AD2FF' },
  { name: 'Other', value: 12, color: '#EFF4FB' },
];

export default function PieChartCard() {
  return (
    <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-base font-bold text-navy-700">Your Pie Chart</h4>
        <select className="text-xs text-navy-500 bg-transparent outline-none cursor-pointer">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>

      <div className="h-40 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} innerRadius={45} outerRadius={65} paddingAngle={2} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around items-center pt-2 border-t border-gray-100 text-xs">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="text-navy-500">Your Files</span>
          </div>
          <span className="font-bold text-navy-700 mt-1">63%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#6AD2FF]"></span>
            <span className="text-navy-500">System</span>
          </div>
          <span className="font-bold text-navy-700 mt-1">25%</span>
        </div>
      </div>
    </div>
  );
}