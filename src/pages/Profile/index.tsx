import React, { useState } from 'react'
import Navbar from "../../components/navbar"
import AcademicInformation from "../../components/auth/Profile/AcademicInformation"
import PaymentMethod from "../../components/auth/Profile/PaymentMethod"
import ChangePassword from '../../components/auth/Profile/ChangePassword'
import PersonalInformation from '../../components/auth/Profile/PersonalInformation'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const tabs = [
    { id: 'personal', name: 'Personal Information' },
    { id: 'academic', name: 'Academic Information' },
    { id: 'payment', name: 'Payment Method' },
    { id: 'password', name: 'Change Password' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInformation />
      case 'academic':
        return <AcademicInformation />
      case 'payment':
        return <PaymentMethod />
      case 'password':
        return <ChangePassword />
      default:
        return <PersonalInformation />
    }
  }

  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Profile" />
      <div className="bg-gray-50 min-h-screen">
        {/* Main Profile Card */}
        <div className="bg-white rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6">
              <div className="flex space-x-4 sm:space-x-10 min-w-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-3 sm:px-6 border-b-2 font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'border-[#5B7C99] text-black'
                        : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
