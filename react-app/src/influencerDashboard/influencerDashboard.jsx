import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const InfluencerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true); // Default to collapsed
  const navigate = useNavigate(); // Initialize the navigate function
  
  // User information
  const user = {
    name: "Sarah Johnson",
    avatar: "/api/placeholder/80/80",
    role: "Content Creator"
  };
  
  // Dummy data for demonstration (expanded with more examples)
  const previousCollaborations = [
    { id: 1, brand: "FitStyle", type: "Sponsored Post", status: "Completed", payment: "$500" },
    { id: 2, brand: "GlowCosmetics", type: "Product Review", status: "Completed", payment: "$300" },
    { id: 3, brand: "TechGadgets", type: "Unboxing Video", status: "Completed", payment: "$650" },
    { id: 4, brand: "EcoFriendly", type: "Brand Ambassador", status: "Completed", payment: "$800" },
    { id: 5, brand: "TravelMore", type: "Instagram Story", status: "Completed", payment: "$250" },
  ];

  const availableCollaborations = [
    { 
      id: 1, 
      brand: "FoodDelight", 
      logo: "/api/placeholder/64/64", 
      description: "Promote new organic snack line", 
      payment: "$400", 
      deadline: "2023-12-01" 
    },
    { 
      id: 2, 
      brand: "FitnessPro", 
      logo: "/api/placeholder/64/64", 
      description: "Create Instagram Reel showing workout routine", 
      payment: "$250", 
      deadline: "2023-11-15" 
    },
    { 
      id: 3, 
      brand: "BeautyEssentials", 
      logo: "/api/placeholder/64/64", 
      description: "Review winter skincare collection", 
      payment: "$350", 
      deadline: "2023-12-10" 
    },
    { 
      id: 4, 
      brand: "HomeDecor", 
      logo: "/api/placeholder/64/64", 
      description: "Create home styling video with products", 
      payment: "$500", 
      deadline: "2023-11-30" 
    },
  ];

  const payments = [
    { id: 1, date: "2023-10-01", amount: "$500", brand: "FitStyle", status: "Paid" },
    { id: 2, date: "2023-09-15", amount: "$300", brand: "GlowCosmetics", status: "Pending" },
    { id: 3, date: "2023-08-22", amount: "$650", brand: "TechGadgets", status: "Paid" },
    { id: 4, date: "2023-07-30", amount: "$800", brand: "EcoFriendly", status: "Paid" },
    { id: 5, date: "2023-07-10", amount: "$250", brand: "TravelMore", status: "Pending" },
  ];

  // Stats data
  const stats = [
    { label: "Total Earnings", value: "$2,500", icon: "revenue" },
    { label: "Active Collaborations", value: "4", icon: "collaborations" },
    { label: "Engagement Rate", value: "8.5%", icon: "engagement" },
    { label: "Total Followers", value: "125K", icon: "followers" },
  ];

  // Toggle user menu
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Navigate to available opportunities page
  const navigateToAvailableOpportunities = () => {
    navigate('/available-opportunity');
  };

  // Icon components for a more professional look
  const icons = {
    revenue: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    collaborations: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    engagement: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    followers: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    logout: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
    profile: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    settings: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    notification: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    overview: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    analytics: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    performance: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  };
  

  return (
    <div className="h-screen w-screen flex bg-gray-100 overflow-hidden">
      {/* Left sidebar - now collapsed by default */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-gray-900 text-white flex flex-col transition-all duration-300`}>
        {/* Toggle button */}
        <div className="py-4 px-3 border-b border-gray-800 flex justify-center">
          <button 
            onClick={toggleSidebar} 
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {sidebarCollapsed ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation menu */}
        <nav className="mt-6 flex-grow">
          <ul>
            {[
              { id: 'overview', icon: 'overview' },
              { id: 'collaborations', icon: 'collaborations' },
              { id: 'payments', icon: 'revenue' },
              { id: 'analytics', icon: 'analytics' },
              { id: 'performance', icon: 'performance' },
              { id: 'settings', icon: 'settings' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left px-3 py-3 flex items-center ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {/* Display only icon when collapsed, full name when expanded */}
                  <span className={`${sidebarCollapsed ? 'mx-auto' : ''}`}>
                    {icons[item.icon]}
                  </span>
                  {!sidebarCollapsed && (
                    <span className="ml-3 capitalize">{item.id}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        {!sidebarCollapsed && (
          <div className="p-4 text-gray-400 text-xs border-t border-gray-800">
            <p>© 2023 Influencer Platform</p>
            <p>Version 2.1.0</p>
          </div>
        )}
      </div>
      
      {/* Main content */}
      <div className="flex-grow overflow-y-auto">
        {/* Header - with user profile moved to right side */}
        <header className="bg-white py-3 px-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            {activeTab === 'overview' ? 'Dashboard Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <div className="flex items-center space-x-4">
            {/* Notification button */}
            <button className="relative p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
              {icons.notification}
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {/* User profile moved to right side */}
            <div className="relative">
              <div 
                className="flex items-center cursor-pointer"
                onClick={toggleUserMenu}
              >
                <img 
                  src={user.avatar} 
                  alt="User" 
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                />
                <div className="hidden md:block ml-3">
                  <h3 className="font-medium text-sm text-gray-800">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* User dropdown menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                      <span className="mr-2 text-gray-500">{icons.profile}</span>
                      <span className="text-sm">Profile</span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                      <span className="mr-2 text-gray-500">{icons.settings}</span>
                      <span className="text-sm">Settings</span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center text-red-600 cursor-pointer border-t border-gray-100">
                      <span className="mr-2">{icons.logout}</span>
                      <span className="text-sm">Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="p-6">
          {activeTab === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                        {icons[stat.icon]}
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Previous Collaborations - Professional Table */}
              <div className="mb-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">Previous Collaborations</h2>
                  <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {previousCollaborations.map((collab) => (
                        <tr key={collab.id} className="hover:bg-gray-50">
                          <td className="py-4 px-6 text-sm text-gray-900">{collab.brand}</td>
                          <td className="py-4 px-6 text-sm text-gray-900">{collab.type}</td>
                          <td className="py-4 px-6 text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              {collab.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900">{collab.payment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Available Collaborations - Card Style with Brand Logos */}
              <div className="mb-8 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">Available Opportunities</h2>
                  <button 
                    className="text-blue-600 text-sm hover:text-blue-800" 
                    onClick={navigateToAvailableOpportunities} // Added onClick handler here
                  >
                    Browse More
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableCollaborations.map((collab) => (
                    <div 
                      key={collab.id} 
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-3">
                        <img 
                          src={collab.logo} 
                          alt={`${collab.brand} logo`} 
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-800">{collab.brand}</h3>
                          <span className="font-bold text-gray-900">{collab.payment}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{collab.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Deadline: {collab.deadline}</span>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'payments' && (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {payments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm text-gray-900">{payment.date}</td>
                        <td className="py-4 px-6 text-sm text-gray-900">{payment.brand}</td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{payment.amount}</td>
                        <td className="py-4 px-6 text-sm">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            payment.status === 'Paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                          View Receipt
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Placeholder for other tabs */}
          {(activeTab !== 'overview' && activeTab !== 'payments') && (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex justify-center items-center h-64">
              <p className="text-gray-500">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InfluencerDashboard;