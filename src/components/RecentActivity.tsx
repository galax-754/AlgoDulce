import React from 'react';
import { User, ShoppingCart, CreditCard, UserPlus } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'user',
    icon: User,
    title: 'New user registered',
    description: 'Sarah Johnson joined the platform',
    time: '2 minutes ago',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'order',
    icon: ShoppingCart,
    title: 'New order received',
    description: 'Order #1234 for $299.99',
    time: '15 minutes ago',
    color: 'bg-green-500'
  },
  {
    id: 3,
    type: 'payment',
    icon: CreditCard,
    title: 'Payment processed',
    description: 'Invoice #INV-001 paid',
    time: '1 hour ago',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    type: 'team',
    icon: UserPlus,
    title: 'Team member added',
    description: 'Mike Chen joined as developer',
    time: '3 hours ago',
    color: 'bg-orange-500'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-lg ${activity.color}`}>
              <activity.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500 truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
        View all activities
      </button>
    </div>
  );
}