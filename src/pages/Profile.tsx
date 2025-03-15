
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
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
            <li className="px-4 py-2 bg-gray-800">
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
              <span className="text-gray-500">User</span>
              <h2 className="text-2xl font-bold">Profile</h2>
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
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mr-6 mb-4 md:mb-0"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">John Doe</h3>
                  <p className="text-gray-500">Premium Investor</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Experienced Trader</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Tech Sector Focus</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Premium Member</span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0">Edit Profile</Button>
              </div>
            </div>
            
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="portfolio" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Your Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500 mb-1">Total Value</h4>
                    <div className="text-2xl font-bold">$126,854.20</div>
                    <div className="text-green-500 text-sm mt-1">+2.14% today</div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500 mb-1">Annual Return</h4>
                    <div className="text-2xl font-bold">+18.5%</div>
                    <div className="text-gray-500 text-sm mt-1">vs. S&P 500 +12.4%</div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="text-sm text-gray-500 mb-1">Risk Level</h4>
                    <div className="text-2xl font-bold">Medium</div>
                    <div className="text-gray-500 text-sm mt-1">Diversification: Good</div>
                  </Card>
                </div>
                
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Shares</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Avg Cost</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Current Price</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Market Value</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Gain/Loss</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">AAPL</td>
                        <td className="px-6 py-4 text-sm text-gray-500">150</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$142.65</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$175.84</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$26,376.00</td>
                        <td className="px-6 py-4 text-sm text-green-500">+23.3%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="outline" size="sm">Sell</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">MSFT</td>
                        <td className="px-6 py-4 text-sm text-gray-500">85</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$288.30</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$332.42</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$28,255.70</td>
                        <td className="px-6 py-4 text-sm text-green-500">+15.3%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="outline" size="sm">Sell</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">TSLA</td>
                        <td className="px-6 py-4 text-sm text-gray-500">100</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$242.50</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$226.89</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$22,689.00</td>
                        <td className="px-6 py-4 text-sm text-red-500">-6.4%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="outline" size="sm">Sell</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="transactions" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Shares</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-500">May 15, 2023</td>
                        <td className="px-6 py-4 text-sm text-green-500">Buy</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">AAPL</td>
                        <td className="px-6 py-4 text-sm text-gray-500">25</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$168.22</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$4,205.50</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-500">May 10, 2023</td>
                        <td className="px-6 py-4 text-sm text-red-500">Sell</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">NFLX</td>
                        <td className="px-6 py-4 text-sm text-gray-500">15</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$418.56</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$6,278.40</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-500">May 5, 2023</td>
                        <td className="px-6 py-4 text-sm text-green-500">Buy</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">MSFT</td>
                        <td className="px-6 py-4 text-sm text-gray-500">10</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$304.18</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$3,041.80</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="watchlist" className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Your Watchlist</h3>
                  <Button variant="outline" size="sm">Add Stock</Button>
                </div>
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Symbol</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Change</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Market Cap</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Added On</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">AMZN</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Amazon.com, Inc.</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$128.91</td>
                        <td className="px-6 py-4 text-sm text-green-500">+0.62%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$1.32T</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Apr 28, 2023</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="ghost" size="icon">
                              <i className="fa fa-trash text-red-500"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">GOOGL</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Alphabet Inc.</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$137.42</td>
                        <td className="px-6 py-4 text-sm text-red-500">-0.12%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$1.73T</td>
                        <td className="px-6 py-4 text-sm text-gray-500">May 2, 2023</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="ghost" size="icon">
                              <i className="fa fa-trash text-red-500"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">NVDA</td>
                        <td className="px-6 py-4 text-sm text-gray-500">NVIDIA Corporation</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$455.72</td>
                        <td className="px-6 py-4 text-sm text-green-500">+2.89%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">$1.12T</td>
                        <td className="px-6 py-4 text-sm text-gray-500">May 10, 2023</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Buy</Button>
                            <Button variant="ghost" size="icon">
                              <i className="fa fa-trash text-red-500"></i>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="mb-6">
                    <h4 className="text-md font-semibold mb-4">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          value="John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          value="john.doe@example.com" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          value="(123) 456-7890" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                          value="1985-06-12" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-md font-semibold mb-4">Notification Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input type="checkbox" id="email-alerts" className="mr-2" checked />
                        <label htmlFor="email-alerts">Email Alerts for Price Changes</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="news-updates" className="mr-2" checked />
                        <label htmlFor="news-updates">News Updates for Watched Stocks</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="portfolio-summary" className="mr-2" checked />
                        <label htmlFor="portfolio-summary">Weekly Portfolio Summary</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="market-insights" className="mr-2" />
                        <label htmlFor="market-insights">Market Insights and Analysis</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="mr-2" variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
