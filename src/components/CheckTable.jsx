export default function CheckTable() {
  const tableData = [
    { name: "Horizon UI Free", progress: 75.5, quantity: 2458, date: "12.Jan.2026" },
    { name: "Horizon UI PRO", progress: 25.5, quantity: 1485, date: "21.Feb.2026" },
    { name: "Weekly Update", progress: 90.0, quantity: 1024, date: "13.Mar.2026" },
    { name: "Marketplace System", progress: 50.8, quantity: 858, date: "24.Jan.2026" },
  ];

  return (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-navy-700 mb-4">Check Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-bold text-navy-500 uppercase tracking-wider">
              <th className="pb-3">Name</th>
              <th className="pb-3">Progress</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm font-bold text-navy-700">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 flex items-center gap-3">
                  <input type="checkbox" className="rounded text-brand-500 focus:ring-brand-500 h-4 w-4" defaultChecked={idx % 2 === 0} />
                  {row.name}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{row.progress}%</span>
                    <div className="w-24 bg-gray-100 rounded-full h-2">
                      <div className="bg-brand-500 h-2 rounded-full" style={{ width: `${row.progress}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{row.quantity}</td>
                <td className="py-4 text-xs text-navy-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}