
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 bg-white shadow-sm flex justify-between items-center">
            <div>
              <span className="text-gray-500">Dashboard</span>
              <h2 className="text-2xl font-bold">Welcome to StockSpy</h2>
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
              <Link to="/profile">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              </Link>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-500">Market Value</h3>
                    <p className="text-2xl font-bold">$500.00</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <i className="fas fa-dollar-sign text-red-500"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">**** **** **** 3484</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-500">Order Value</h3>
                    <p className="text-2xl font-bold">$200.00</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <i className="fas fa-list text-purple-500"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">**** **** **** 5542</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-500">Customer Value</h3>
                    <p className="text-2xl font-bold">$350.00</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <i className="fas fa-users text-green-500"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">**** **** **** 8896</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-500">Processed Value</h3>
                    <p className="text-2xl font-bold">$150.00</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <i className="fas fa-check text-blue-500"></i>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">**** **** **** 7745</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Financial Data</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-500">2023-01-05</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Expenses</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Office Supplies</td>
                      <td className="px-6 py-4 text-sm text-gray-500">$250</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Office Expenses</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-500">2023-02-05</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Income</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Client Payment</td>
                      <td className="px-6 py-4 text-sm text-gray-500">$500</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Sales</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-500">2023-03-05</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Expenses</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Travel Expenses</td>
                      <td className="px-6 py-4 text-sm text-gray-500">$250</td>
                      <td className="px-6 py-4 text-sm text-gray-500">Travel</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td colSpan={7} className="px-6 py-4 text-sm font-medium">
                        Total: $1,000
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
