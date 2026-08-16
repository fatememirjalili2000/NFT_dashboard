import { MdCheckCircle, MdCancel, MdError } from 'react-icons/md';

export default function ComplexTable() {
  const tableData = [
    { name: "Marketplace", status: "Approved", date: "24.Jan.2026", progress: 75.5 },
    { name: "Marketplace", status: "Disable", date: "30.Dec.2025", progress: 25.5 },
    { name: "Marketplace", status: "Error", date: "20.May.2026", progress: 90.0 },
    { name: "Marketplace", status: "Approved", date: "12.Jul.2026", progress: 50.8 },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved': return <MdCheckCircle className="text-green-500 text-lg" />;
      case 'Disable': return <MdCancel className="text-red-500 text-lg" />;
      case 'Error': return <MdError className="text-amber-500 text-lg" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-navy-700 mb-4">Complex Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-bold text-navy-500 uppercase tracking-wider">
              <th className="pb-3">Name</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm font-bold text-navy-700">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4">{row.name}</td>
                <td className="py-4 flex items-center gap-2">
                  {getStatusIcon(row.status)}
                  <span className="text-xs">{row.status}</span>
                </td>
                <td className="py-4 text-xs text-navy-500">{row.date}</td>
                <td className="py-4">
                  <div className="w-24 bg-gray-100 rounded-full h-2">
                    <div className="bg-brand-500 h-2 rounded-full" style={{ width: `${row.progress}%` }}></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}