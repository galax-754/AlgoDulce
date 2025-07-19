import React from 'react';

const data = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 78 },
  { month: 'Mar', value: 52 },
  { month: 'Apr', value: 82 },
  { month: 'May', value: 95 },
  { month: 'Jun', value: 87 },
];

export default function Chart() {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
      </div>
      
      <div className="flex items-end space-x-4 h-64">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex items-end justify-center mb-2" style={{ height: '200px' }}>
              <div
                className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                style={{ 
                  height: `${(item.value / maxValue) * 180}px`,
                  animationDelay: `${index * 100}ms`
                }}
              />
            </div>
            <span className="text-sm text-gray-600 font-medium">{item.month}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Revenue</span>
          </div>
        </div>
        <span className="text-gray-500">$125,430 total</span>
      </div>
    </div>
  );
}