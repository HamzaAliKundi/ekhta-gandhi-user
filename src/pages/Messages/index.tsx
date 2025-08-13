import Navbar from "../../components/navbar"
import ChatList from "../../components/auth/Messages/ChatList"
import ChatWindow from "../../components/auth/Messages/ChatWindow"
import { useState } from "react"

const MessagesPage = () => {
  const [isChatListVisible, setIsChatListVisible] = useState(false)

  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Messages" />
      <div className="bg-gray-50 min-h-screen">
        <div className="flex h-[calc(100vh-120px)]">
          {/* Left Panel - Chat List */}
          <div className={`${isChatListVisible ? 'block' : 'hidden'} lg:block lg:w-80 w-full lg:relative fixed inset-0 z-40 lg:z-auto`}>
            <ChatList onClose={() => setIsChatListVisible(false)} />
          </div>
          
          {/* Right Panel - Chat Window */}
          <div className="flex-1 bg-white lg:relative relative">
            {/* Mobile Header with Back Button */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <button 
                onClick={() => setIsChatListVisible(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-inter font-normal text-sm">Chats</span>
              </button>
              <h3 className="font-inter font-normal text-base text-black">Messages</h3>
              <div className="w-8"></div> {/* Spacer for centering */}
            </div>
            
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesPage
