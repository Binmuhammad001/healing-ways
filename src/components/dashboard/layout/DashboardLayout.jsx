import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="lg:ml-64 flex flex-col min-h-screen bg-gray-50 w-full">
        {/* Top Navigation */}
        <TopNavigation toggleSidebar={toggleSidebar} />

        {/* Page Content - Centered with max-width */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 w-full">
          <div className="w-full max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p className="text-center md:text-left">© 2024 Healing Ways. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
