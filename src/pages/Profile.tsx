import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyStockDialog from '@/components/BuyStockDialog';
import SellStockDialog from '@/components/SellStockDialog';
import Sidebar from '@/components/Sidebar';
import { toast } from "sonner";

type StockItem = {
  symbol: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  marketValue: number;
  gainLossPercent: number;
};

type Transaction = {
  date: string;
  type: 'Buy' | 'Sell';
  symbol: string;
  shares: number;
  price: number;
  total: number;
};

const Profile = () => {
  const [buyDialogOpen, setBuyDialogOpen] = useState(false);
  const [sellDialogOpen, setSellDialogOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState<StockItem | null>(null);
  const [portfolioData, setPortfolioData] = useState<StockItem[]>([
    {
      symbol: "AAPL",
      shares: 150,
      avgCost: 142.65,
      currentPrice: 175.84,
      marketValue: 26376.00,
      gainLossPercent: 23.3,
    },
    {
      symbol: "MSFT",
      shares: 85,
      avgCost: 288.30,
      currentPrice: 332.42,
      marketValue: 28255.70,
      gainLossPercent: 15.3,
    },
    {
      symbol: "TSLA",
      shares: 100,
      avgCost: 242.50,
      currentPrice: 226.89,
      marketValue: 22689.00,
      gainLossPercent: -6.4,
    },
  ]);
  
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      date: "May 15, 2023",
      type: "Buy",
      symbol: "AAPL",
      shares: 25,
      price: 168.22,
      total: 4205.50,
    },
    {
      date: "May 10, 2023",
      type: "Sell",
      symbol: "NFLX",
      shares: 15,
      price: 418.56,
      total: 6278.40,
    },
    {
      date: "May 5, 2023",
      type: "Buy",
      symbol: "MSFT",
      shares: 10,
      price: 304.18,
      total: 3041.80,
    },
  ]);

  const [portfolioValue, setPortfolioValue] = useState(0);
  useEffect(() => {
    const total = portfolioData.reduce((sum, stock) => sum + stock.marketValue, 0);
    setPortfolioValue(total);
  }, [portfolioData]);

  const handleBuyClick = (stock: StockItem) => {
    setSelectedStock(stock);
    setBuyDialogOpen(true);
  };

  const handleSellClick = (stock: StockItem) => {
    setSelectedStock(stock);
    setSellDialogOpen(true);
  };

  const handleStockPurchased = (symbol: string, shares: number, price: number) => {
    setPortfolioData(prevData => {
      const newData = [...prevData];
      const stockIndex = newData.findIndex(item => item.symbol === symbol);
      
      if (stockIndex !== -1) {
        const stock = newData[stockIndex];
        const newShares = stock.shares + shares;
        const newTotalCost = (stock.shares * stock.avgCost) + (shares * price);
        const newAvgCost = newTotalCost / newShares;
        const newMarketValue = newShares * stock.currentPrice;
        const newGainLossPercent = ((stock.currentPrice - newAvgCost) / newAvgCost) * 100;
        
        newData[stockIndex] = {
          ...stock,
          shares: newShares,
          avgCost: newAvgCost,
          marketValue: newMarketValue,
          gainLossPercent: newGainLossPercent,
        };
      } else {
        newData.push({
          symbol,
          shares,
          avgCost: price,
          currentPrice: price,
          marketValue: shares * price,
          gainLossPercent: 0,
        });
      }
      
      return newData;
    });
    
    const total = shares * price;
    setTransactions(prev => [
      {
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        type: 'Buy',
        symbol,
        shares,
        price,
        total
      },
      ...prev
    ]);

    toast.success(`Portfolio updated with purchase of ${shares} shares of ${symbol}`);
  };

  const handleStockSold = (symbol: string, shares: number, price: number) => {
    setPortfolioData(prevData => {
      const newData = [...prevData];
      const stockIndex = newData.findIndex(item => item.symbol === symbol);
      
      if (stockIndex !== -1) {
        const stock = newData[stockIndex];
        
        const newShares = stock.shares - shares;
        
        if (newShares > 0) {
          const newMarketValue = newShares * stock.currentPrice;
          
          newData[stockIndex] = {
            ...stock,
            shares: newShares,
            marketValue: newMarketValue,
          };
        } else {
          newData.splice(stockIndex, 1);
          toast.info(`${symbol} has been removed from your portfolio as you've sold all shares.`);
        }
      }
      
      return newData;
    });
    
    const total = shares * price;
    setTransactions(prev => [
      {
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        type: 'Sell',
        symbol,
        shares,
        price,
        total
      },
      ...prev
    ]);

    toast.success(`Portfolio updated with sale of ${shares} shares of ${symbol}`);
  };

  const getTotalGainLoss = () => {
    const totalInvested = portfolioData.reduce((sum, stock) => sum + (stock.shares * stock.avgCost), 0);
    const currentValue = portfolioValue;
    const percentChange = totalInvested > 0 ? ((currentValue - totalInvested) / totalInvested) * 100 : 0;
    
    return {
      value: currentValue - totalInvested,
      percent: percentChange
    };
  };

  const gainLoss = getTotalGainLoss();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        <Sidebar />
        
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
                    <div className="text-2xl font-bold">${portfolioValue.toFixed(2)}</div>
                    <div className={`text-sm mt-1 ${gainLoss.percent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {gainLoss.percent >= 0 ? '+' : ''}{gainLoss.percent.toFixed(2)}% overall
                    </div>
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
                      {portfolioData.map((stock) => (
                        <tr key={stock.symbol}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{stock.symbol}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{stock.shares}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">${stock.avgCost.toFixed(2)}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">${stock.currentPrice.toFixed(2)}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">${stock.marketValue.toFixed(2)}</td>
                          <td className={`px-6 py-4 text-sm ${stock.gainLossPercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {stock.gainLossPercent >= 0 ? '+' : ''}{stock.gainLossPercent.toFixed(1)}%
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleBuyClick(stock)}
                              >
                                Buy
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleSellClick(stock)}
                              >
                                Sell
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {portfolioData.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 text-sm text-center text-gray-500">
                            No stocks in your portfolio. Start by adding some stocks!
                          </td>
                        </tr>
                      )}
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
                      {transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-500">{transaction.date}</td>
                          <td className={`px-6 py-4 text-sm ${transaction.type === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
                            {transaction.type}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.symbol}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{transaction.shares}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">${transaction.price.toFixed(2)}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">${transaction.total.toFixed(2)}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                          </td>
                        </tr>
                      ))}
                      {transactions.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 text-sm text-center text-gray-500">
                            No transaction history yet.
                          </td>
                        </tr>
                      )}
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

      {selectedStock && (
        <BuyStockDialog
          open={buyDialogOpen}
          onOpenChange={setBuyDialogOpen}
          stock={{
            symbol: selectedStock.symbol,
            currentPrice: selectedStock.currentPrice
          }}
          onStockPurchased={handleStockPurchased}
        />
      )}

      {selectedStock && (
        <SellStockDialog
          open={sellDialogOpen}
          onOpenChange={setSellDialogOpen}
          stock={{
            symbol: selectedStock.symbol,
            currentPrice: selectedStock.currentPrice,
            ownedShares: selectedStock.shares
          }}
          onStockSold={handleStockSold}
        />
      )}
    </div>
  );
};

export default Profile;
