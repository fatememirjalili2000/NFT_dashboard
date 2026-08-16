import { useState } from 'react';

export default function TasksWidget() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Landing Page Design", completed: false },
    { id: 2, label: "Mobile App Development", completed: true },
    { id: 3, label: "Dashboard Framework API", completed: true },
    { id: 4, label: "Promotional Video", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-navy-700 mb-4">Tasks</h3>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5 rounded text-brand-500 focus:ring-brand-500" 
              />
              <span className={`text-sm font-bold ${task.completed ? 'line-through text-navy-500' : 'text-navy-700'}`}>
                {task.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}