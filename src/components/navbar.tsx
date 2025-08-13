import React from 'react'
import { FiBell } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ title }: { title: string }) => {
  const navigate = useNavigate()

  const handleNotificationClick = () => {
    navigate('/notifications')
  }

  return (
    <div className="flex items-center justify-between p-6 sm:p-6 bg-white">
      {/* Left Side - Greeting */}
      <div>
        <h1 className="font-poppins font-normal text-lg sm:text-[26px] leading-none tracking-[0%] text-black">{title}</h1>
      </div>
      
      {/* Right Side - Notifications and Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification Bell */}
        <button 
          onClick={handleNotificationClick}
          className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiBell className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>
        
        {/* User Profile Picture */}
        <button 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 hover:bg-gray-100 rounded-full p-1 transition-colors"
        >
          <div className="w-6 h-6 sm:w-[30px] sm:h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
            H
          </div>
          
          {/* Student Text */}
          <span className="font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] text-black">
            Student
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar