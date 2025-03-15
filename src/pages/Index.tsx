
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white">
          <div className="p-4 h-16 flex items-center border-b border-gray-800">
            <h1 className="text-xl font-bold">StockSpy</h1>
          </div>
          <ul className="py-4">
            <li className="px-4 py-2 bg-gray-800">
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
            <li className="px-4 py-2 hover:bg-gray-800">
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
              <span className="text-gray-500">Primary</span>
              <h2 className="text-2xl font-bold">Dashboard</h2>
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
            <h3 className="text-xl font-semibold mb-4">Market Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-red-50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-600">S&P 500</span>
                    <div className="text-xl font-bold">4,587.64</div>
                  </div>
                  <div className="text-red-500">-0.28%</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">Last updated: 15 mins ago</div>
              </Card>
              
              <Card className="bg-green-50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-600">NASDAQ</span>
                    <div className="text-xl font-bold">14,189.16</div>
                  </div>
                  <div className="text-green-500">+0.12%</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">Last updated: 15 mins ago</div>
              </Card>
              
              <Card className="bg-blue-50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-600">DOW</span>
                    <div className="text-xl font-bold">36,042.28</div>
                  </div>
                  <div className="text-red-500">-0.15%</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">Last updated: 15 mins ago</div>
              </Card>
              
              <Card className="bg-purple-50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-600">Bitcoin</span>
                    <div className="text-xl font-bold">$43,651.20</div>
                  </div>
                  <div className="text-green-500">+1.24%</div>
                </div>
                <div className="text-sm text-gray-500 mt-2">Last updated: 15 mins ago</div>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Your Watchlist</h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Symbol</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Change</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Market Cap</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AAPL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Apple Inc.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$175.84</td>
                    <td className="px-6 py-4 text-sm text-green-500">+1.25%</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$2.87T</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <Button variant="outline" size="sm">Buy</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">MSFT</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Microsoft Corporation</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$332.42</td>
                    <td className="px-6 py-4 text-sm text-red-500">-0.35%</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$2.47T</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <Button variant="outline" size="sm">Buy</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">TSLA</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Tesla, Inc.</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$226.89</td>
                    <td className="px-6 py-4 text-sm text-green-500">+3.21%</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$723.35B</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <Button variant="outline" size="sm">Buy</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
