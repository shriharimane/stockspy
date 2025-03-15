
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const Statistics = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white">
          <div className="p-4 h-16 flex items-center border-b border-gray-800">
            <h1 className="text-xl font-bold">StockSpy</h1>
          </div>
          <ul className="py-4">
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/" className="flex items-center">
                <i className="fas fa-tachometer-alt mr-2"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/profile" className="flex items-center">
                <i className="fas fa-user mr-2"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li className="px-4 py-2 bg-gray-800">
              <Link to="/statistics" className="flex items-center">
                <i className="fas fa-chart-bar mr-2"></i>
                <span>Statistics</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/analysis" className="flex items-center">
                <i className="fas fa-briefcase mr-2"></i>
                <span>Analysis</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/faq" className="flex items-center">
                <i className="fas fa-question-circle mr-2"></i>
                <span>FAQ</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/testimonials" className="flex items-center">
                <i className="fas fa-star mr-2"></i>
                <span>Testimonials</span>
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/settings" className="flex items-center">
                <i className="fas fa-cog mr-2"></i>
                <span>Settings</span>
              </Link>
            </li>
            <li className="px-4 py-2 mt-auto hover:bg-gray-800">
              <Link to="/logout" className="flex items-center">
                <i className="fas fa-sign-out-alt mr-2"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 bg-white shadow-sm flex justify-between items-center">
            <div>
              <span className="text-gray-500">Analytics</span>
              <h2 className="text-2xl font-bold">Statistics</h2>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input 
                  type="text" 
                  placeholder="Search stocks..." 
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4">
                <h4 className="text-sm text-gray-500 mb-1">Portfolio Growth</h4>
                <div className="text-2xl font-bold">+24.5%</div>
                <div className="text-green-500 text-sm">+2.1% from last month</div>
              </Card>
              
              <Card className="p-4">
                <h4 className="text-sm text-gray-500 mb-1">Total Trades</h4>
                <div className="text-2xl font-bold">145</div>
                <div className="text-blue-500 text-sm">15 trades this week</div>
              </Card>
              
              <Card className="p-4">
                <h4 className="text-sm text-gray-500 mb-1">Success Rate</h4>
                <div className="text-2xl font-bold">68%</div>
                <div className="text-green-500 text-sm">+5% from last month</div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-4">Portfolio Performance</h4>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-4">Sector Analysis</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Technology</span>
                      <span className="text-sm text-gray-500">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Healthcare</span>
                      <span className="text-sm text-gray-500">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Finance</span>
                      <span className="text-sm text-gray-500">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Consumer Goods</span>
                      <span className="text-sm text-gray-500">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-4">Trading History</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">AAPL Buy</div>
                      <div className="text-sm text-gray-500">May 15, 2023</div>
                    </div>
                    <div className="text-green-500">+$420.50</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">TSLA Sell</div>
                      <div className="text-sm text-gray-500">May 14, 2023</div>
                    </div>
                    <div className="text-red-500">-$125.30</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">MSFT Buy</div>
                      <div className="text-sm text-gray-500">May 13, 2023</div>
                    </div>
                    <div className="text-green-500">+$280.15</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="text-lg font-semibold mb-4">Risk Analysis</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Portfolio Beta</span>
                      <span className="text-sm text-gray-500">1.2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sharpe Ratio</span>
                      <span className="text-sm text-gray-500">1.8</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Alpha</span>
                      <span className="text-sm text-gray-500">0.3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
