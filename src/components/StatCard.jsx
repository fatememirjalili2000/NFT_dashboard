export default function StatCard({ icon, title, value, badge }) {
  return (
    <div className="flex items-center bg-white rounded-[20px] p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F7FE] text-brand-500 text-2xl mr-4">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-navy-500 uppercase tracking-wider">{title}</p>
        <div className="flex items-center gap-2 mt-1">
          <h4 className="text-2xl font-bold text-navy-700">{value}</h4>
          {badge && (
            <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}