import React from 'react'
import { FiEdit } from 'react-icons/fi'

const PersonalInformation = () => {
  return (
    <div className="space-y-6">
      {/* Profile Picture Section */}
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">E</span>
          </div>
          <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
            <FiEdit className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              User Id
            </label>
            <input
              type="text"
              defaultValue="Emma Watson"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              defaultValue="Apple@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              defaultValue="Near apple store banana street muhallah qadu"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Jhon Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="000-111-222333"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="bg-[#5B7C99] text-white px-6 py-2 rounded-lg font-inter font-normal text-sm hover:bg-[#4A6B8A] transition-colors">
          Save
        </button>
      </div>
    </div>
  )
}

export default PersonalInformation