import React from 'react'
import { FiSearch, FiUser, FiX } from 'react-icons/fi'

interface ChatListProps {
  onClose?: () => void
}

const ChatList = ({ onClose }: ChatListProps) => {
  const chats = [
    { id: 1, name: 'Counselor', time: '10:12 pm', isOnline: true, isActive: false },
    { id: 2, name: 'Counselor', time: '10:12 pm', isOnline: true, isActive: false },
    { id: 3, name: 'Counselor', time: '10:12 pm', isOnline: false, isActive: false },
    { id: 4, name: 'Counselor', time: '10:12 pm', isOnline: true, isActive: true }, // 4th one active
    { id: 5, name: 'Counselor', time: '10:12 pm', isOnline: true, isActive: false },
    { id: 6, name: 'Counselor', time: '10:12 pm', isOnline: false, isActive: false },
    { id: 7, name: 'Counselor', time: '10:12 pm', isOnline: true, isActive: false },
    { id: 8, name: 'Counselor', time: '10:12 pm', isOnline: false, isActive: false },
  ]

  return (
    <div className="w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-inter font-normal text-base leading-none tracking-[0%] text-black">
            Chats
          </h2>
          {/* Mobile Close Button */}
          {onClose && (
            <button 
              onClick={onClose}
              className="lg:hidden w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <FiX className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search User"
            className="w-full h-10 pl-4 pr-10 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
              chat.isActive ? 'bg-blue-50' : ''
            }`}
            onClick={() => {
              if (onClose) onClose() // Close chat list on mobile when chat is selected
            }}
          >
            {/* User Avatar */}
            <div className="relative">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <FiUser className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Chat Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-inter font-normal text-sm leading-none text-black truncate">
                  {chat.name}
                </h3>
                <span className="font-inter font-normal text-xs leading-none text-gray-500 ml-2">
                  {chat.time}
                </span>
              </div>
            </div>
            
            {/* Online Status */}
            {chat.isOnline && (
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatList
