import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const navItems = [
    { path: "/", name: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { path: "/products", name: "Products", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { path: "/orders", name: "Orders", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { path: "/customers", name: "Customers", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { path: "/analytics", name: "Analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  ];

  return (
    <aside className={`${expanded ? 'w-64' : 'w-20'} bg-gray-900 text-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out`}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {expanded ? (
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        ) : (
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">A</div>
        )}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-gray-700"
        >
          {expanded ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`flex items-center p-3 rounded-md transition-colors ${location.pathname === item.path ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
              >
                <svg 
                  className="w-5 h-5 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {expanded && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">AD</div>
          {expanded && (
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;