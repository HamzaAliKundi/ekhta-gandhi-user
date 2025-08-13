import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiVideo, FiFolder, FiMessageSquare, FiCreditCard, FiBell, FiLogOut } from "react-icons/fi";

interface SideNavProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Appointments", path: "/appointments", icon: FiVideo },
  { name: "Documents", path: "/documents", icon: FiFolder },
  { name: "Messages", path: "/messages", icon: FiMessageSquare },
  { name: "Billing & Payments", path: "/billing", icon: FiCreditCard },
];

const SideNav = ({ isSidebarOpen, toggleSidebar }: SideNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("userRole");
      setIsLogoutModalOpen(false);
      setIsLoggingOut(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        className={`fixed z-40 top-0 left-0 bg-white flex flex-col transition-transform duration-300 md:relative md:translate-x-0 md:z-0 w-[281px] h-screen max-h-screen pt-[23px] pr-6 pb-[50px] pl-6 shadow-[0px_4px_4px_0px_#00000040]
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-600 text-2xl"
          onClick={toggleSidebar}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200 mb-6 flex-shrink-0">
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="Admin Panel Logo" className="h-10" />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 mb-6 overflow-y-auto min-h-0">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={`flex items-center gap-3 transition-all duration-200 text-black hover:bg-gray-50 w-[233px] h-[72px] p-6 gap-3 rounded-xl font-inter font-normal text-base leading-none tracking-[0%] ${
                      isActive ? 'bg-[#ECF2F7] font-medium' : ''
                    }`}
                    onClick={() => { if (window.innerWidth < 768) toggleSidebar(); }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-inter font-normal text-base leading-none tracking-[0%] text-black">{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sign Out Button */}
        <div className="flex-shrink-0 mt-auto">
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center justify-center gap-3 text-black transition-all duration-200 hover:bg-gray-200 w-[233px] h-[72px] gap-3 pt-6 pr-6 pb-6 pl-[26px] rounded-xl bg-[#ECF2F7]"
          >
            <FiLogOut className="w-5 h-5" />
            <span className="font-inter font-normal text-base leading-none tracking-[0%]">Sign Out</span>
          </button>
        </div>

        {/* Logout Modal */}
        {isLogoutModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 max-w-sm w-full px-6 py-6 flex flex-col items-center animate-fade-in mx-4">
              <button 
                onClick={() => setIsLogoutModalOpen(false)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 rounded-full p-1 transition-colors"
                aria-label="Close modal"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="flex flex-col items-center gap-2 mb-6 mt-1">
                <div className="bg-red-100 text-red-500 rounded-full p-2 mb-1">
                  <FiLogOut className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">Logout Confirmation</h2>
                <p className="text-gray-500 text-center text-sm max-w-xs">
                  Are you sure you want to logout from your account?
                </p>
              </div>
              <div className="flex gap-3 w-full mt-2 px-2">
                <button
                  onClick={() => setIsLogoutModalOpen(false)}
                  className="flex-1 h-9 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 font-medium text-xs"
                  disabled={isLoggingOut}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 h-9 rounded-md bg-red-600 text-white hover:bg-red-700 transition-all duration-200 flex items-center justify-center disabled:opacity-50 font-semibold text-xs min-w-[80px]"
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? (
                    <div className="flex items-center justify-center gap-1">
                      <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Logging out...</span>
                    </div>
                  ) : (
                    "Logout"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default SideNav;