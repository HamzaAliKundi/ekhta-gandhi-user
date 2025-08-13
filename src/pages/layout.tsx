import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./sideNav";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Fixed Navbar */}
        
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden fixed top-4 left-4 z-30 bg-white rounded-full p-2 shadow"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6 text-[#54B9EC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="px-8 py-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
