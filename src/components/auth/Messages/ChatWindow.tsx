import React from 'react'
import { FiMic, FiSend } from 'react-icons/fi'

const ChatWindow = () => {
  const messages = [
    { id: 1, text: 'This is a hi mesage', isFromUser: false, time: '10:12 pm' },
    { id: 2, text: 'This is a hi mesage', isFromUser: true, time: '10:12 pm' },
    { id: 3, text: 'This is a hi mesage', isFromUser: false, time: '10:12 pm' },
    { id: 4, text: 'This is a hi mesage', isFromUser: true, time: '10:12 pm' },
    { id: 5, text: 'This is a hi mesage', isFromUser: false, time: '10:12 pm' },
    { id: 6, text: 'This is a hi mesage', isFromUser: true, time: '10:12 pm' },
    { id: 7, text: 'This is a hi mesage', isFromUser: false, time: '10:12 pm' },
  ]

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">S</span>
          </div>
          <div>
            <h3 className="font-inter font-normal text-base leading-none text-black">
              Student
            </h3>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${
                message.isFromUser
                  ? 'bg-blue-100 text-black'
                  : 'bg-white text-black border border-gray-200'
              }`}
            >
              <p className="font-inter font-normal text-sm leading-relaxed">
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <FiMic className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="type a message here"
              className="w-full h-12 pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
            />
          </div>
          
          {/* Send Button */}
          <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
            <FiSend className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
