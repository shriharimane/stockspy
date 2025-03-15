
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-gray-900 text-white">
      <div className="p-4 h-16 flex items-center border-b border-gray-800">
        <h1 className="text-xl font-bold">StockSpy</h1>
      </div>
      <ul className="py-4">
        <li className={`px-4 py-2 ${location.pathname === '/' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}>
          <Link to="/" className="flex items-center">
            <i className="fas fa-tachometer-alt mr-2"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`px-4 py-2 ${location.pathname === '/profile' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}>
          <Link to="/profile" className="flex items-center">
            <i className="fas fa-user mr-2"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className={`px-4 py-2 ${location.pathname === '/statistics' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}>
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
  );
};

export default Sidebar;
