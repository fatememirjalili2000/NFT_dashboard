export default function MiniCalendar() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-navy-700">August 2026</h4>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-navy-500 mb-2">
        {days.map((d, i) => <div key={i}>{d}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-navy-700">
        {dates.slice(0, 28).map((date) => (
          <div 
            key={date} 
            className={`py-1.5 rounded-full cursor-pointer hover:bg-gray-100 ${
              date === 14 ? 'bg-brand-500 text-white font-bold' : ''
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}