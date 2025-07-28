import { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all duration-300 w-64"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button className="relative p-2 text-gray-500 hover:text-red-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-600 animate-pulse"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center text-red-600 font-bold">AD</div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === "dashboard" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard 
                  title="Total Revenue" 
                  value="$24,780" 
                  change="+12.5%" 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  color="bg-green-100 text-green-800"
                />
                
                <StatCard 
                  title="New Orders" 
                  value="1,245" 
                  change="+8.2%" 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  }
                  color="bg-blue-100 text-blue-800"
                />
                
                <StatCard 
                  title="Active Users" 
                  value="856" 
                  change="+3.1%" 
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  }
                  color="bg-purple-100 text-purple-800"
                />
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">Revenue Overview</h3>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-red-50 to-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <p className="text-gray-400">Revenue chart will appear here</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">Traffic Sources</h3>
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-all">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-red-50 to-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                      <p className="text-gray-400">Pie chart will appear here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                  <button className="text-red-600 text-sm font-medium hover:underline flex items-center">
                    View All
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <ActivityItem 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    }
                    title="New order #1245 received"
                    time="2 minutes ago"
                    description="Customer: John Smith | Total: $125.00"
                    status="completed"
                  />
                  
                  <ActivityItem 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    }
                    title="New user registered"
                    time="15 minutes ago"
                    description="Username: john.doe | Email: john@example.com"
                    status="new"
                  />
                  
                  <ActivityItem 
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    }
                    title="System updated to v2.3.1"
                    time="1 hour ago"
                    description="Security patches and performance improvements"
                    status="system"
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === "orders" && <OrdersTab />}
          {activeTab === "products" && <ProductsTab />}
          {activeTab === "users" && <UsersTab />}
          {activeTab === "analytics" && <AnalyticsTab />}
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const StatCard = ({ title, value, change, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{title}</p>
          <p className="text-2xl font-bold mt-1 text-gray-800 group-hover:text-gray-900 transition-colors">{value}</p>
          <p className={`text-xs mt-1 ${color} px-2 py-1 rounded-full inline-flex items-center`}>
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            {change}
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-50 to-white flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ icon, title, time, description, status }) => {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    new: "bg-blue-100 text-blue-800",
    system: "bg-purple-100 text-purple-800"
  };

  return (
    <div className="flex items-start group">
      <div className="relative mr-4">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${statusColors[status]} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gray-200 transform -translate-x-1/2 group-hover:bg-red-200 transition-colors"></div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <p className="font-medium text-gray-800 group-hover:text-red-600 transition-colors">{title}</p>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="mt-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 group-hover:border-red-100 transition-colors">
          {description}
        </div>
      </div>
    </div>
  );
};

// Tab Components (simplified for example)
const OrdersTab = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-semibold mb-6">Orders Management</h2>
    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg h-96 flex items-center justify-center">
      <p className="text-gray-400">Orders content will appear here</p>
    </div>
  </div>
);

const ProductsTab = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-semibold mb-6">Products Management</h2>
    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg h-96 flex items-center justify-center">
      <p className="text-gray-400">Products content will appear here</p>
    </div>
  </div>
);

const UsersTab = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-semibold mb-6">Users Management</h2>
    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg h-96 flex items-center justify-center">
      <p className="text-gray-400">Users content will appear here</p>
    </div>
  </div>
);

const AnalyticsTab = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <h2 className="text-xl font-semibold mb-6">Analytics Dashboard</h2>
    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg h-96 flex items-center justify-center">
      <p className="text-gray-400">Analytics content will appear here</p>
    </div>
  </div>
);

export default AdminDashboard;