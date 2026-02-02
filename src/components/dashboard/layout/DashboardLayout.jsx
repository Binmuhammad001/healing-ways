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

      {/* Main Content Area - Offset by sidebar width */}
      <div className="lg:ml-64 min-h-screen bg-gray-50 flex flex-col">
        {/* Top Navigation - Full width within the offset area */}
        <TopNavigation toggleSidebar={toggleSidebar} />

        {/* Page Content - Centered with max-width */}
        <main className="flex-1 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {children}
          </div>
        </main>

        {/* Footer - Centered with max-width */}
        <footer className="bg-white border-t border-gray-200 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
              <p className="text-center md:text-left">© 2024 Healing Ways. All rights reserved.</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
