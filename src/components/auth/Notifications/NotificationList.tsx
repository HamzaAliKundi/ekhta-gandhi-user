import React from 'react'
import { FiFilter, FiArrowUp, FiSearch, FiMoreVertical } from 'react-icons/fi'

const NotificationList = () => {
  const notifications = [
    { id: 1, avatar: 'NC', avatarColor: 'bg-black', text: 'This notification is not opened yet', date: 'Just now' },
    { id: 2, avatar: 'KM', avatarColor: 'bg-red-500', text: 'Kate Morrison', date: 'A minute ago' },
    { id: 3, avatar: 'DC', avatarColor: 'bg-brown-500', text: 'Drew Cano', date: '1 hour ago' },
    { id: 4, avatar: 'OD', avatarColor: 'bg-gray-500', text: 'Orlando Diggs', date: 'Yesterday' },
    { id: 5, avatar: 'AL', avatarColor: 'bg-blue-500', text: 'Andi Lane', date: 'Feb 2, 2023' },
    { id: 6, avatar: 'NC', avatarColor: 'bg-black', text: 'Natali Craig', date: 'Just now' },
    { id: 7, avatar: 'KM', avatarColor: 'bg-red-500', text: 'Kate Morrison', date: 'A minute ago' },
    { id: 8, avatar: 'DC', avatarColor: 'bg-brown-500', text: 'Drew Cano', date: '1 hour ago' },
    { id: 9, avatar: 'OD', avatarColor: 'bg-gray-500', text: 'Orlando Diggs', date: 'Yesterday' },
    { id: 10, avatar: 'AL', avatarColor: 'bg-blue-500', text: 'Andi Lane', date: 'Feb 2, 2023' },
  ]

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Filter Icon */}
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <FiFilter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          {/* Sort Icon */}
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-32 sm:w-40 h-8 pl-10 pr-3 py-1 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Notification
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Date
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 ${notification.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-semibold`}>
                      {notification.avatar}
                    </div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C] truncate">
                      {notification.text}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {notification.date}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              page === 1 
                ? 'bg-gray-200 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NotificationList
