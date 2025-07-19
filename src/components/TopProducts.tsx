import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    sales: 1234,
    revenue: '$45,678',
    change: 12.5,
    trend: 'up',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 2,
    name: 'Smart Watch',
    sales: 987,
    revenue: '$32,456',
    change: 8.3,
    trend: 'up',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    sales: 756,
    revenue: '$18,234',
    change: -3.2,
    trend: 'down',
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  },
  {
    id: 4,
    name: 'USB-C Cable',
    sales: 543,
    revenue: '$12,890',
    change: 15.7,
    trend: 'up',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
  }
];

export default function TopProducts() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Products</h3>
      
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {index + 1}
            </div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.sales} sales</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
              <div className="flex items-center justify-end space-x-1">
                {product.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-green-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                )}
                <span className={`text-xs font-medium ${
                  product.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.change > 0 ? '+' : ''}{product.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}