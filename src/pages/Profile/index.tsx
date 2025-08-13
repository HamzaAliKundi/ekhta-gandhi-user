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
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Main Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-inter font-normal text-sm leading-none tracking-[0%] transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 font-medium'
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
