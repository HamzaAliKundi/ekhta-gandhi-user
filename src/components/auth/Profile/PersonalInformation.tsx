import React from 'react'
import { FiEdit } from 'react-icons/fi'

const PersonalInformation = () => {
  return (
    <div className="space-y-6">
      {/* Profile Picture Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-[132px] sm:h-[130px] bg-orange-400 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-semibold text-orange-400">E</span>
            </div>
          </div>
          {/* Edit Icon */}
          <button className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <FiEdit className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block font-inter font-normal text-xs leading-none text-black mb-2">
                  User Id
                </label>
                <input
                  type="text"
                  defaultValue="Emma Watson"
                  className="w-full h-12 px-4 py-3 border border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm bg-white shadow-[0px_1px_2px_0px_#0A0D120D]"
                />
              </div>

              <div>
                <label className="block font-inter font-normal text-xs leading-none text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  defaultValue="Apple@gmail.com"
                  className="w-full h-12 px-4 py-3 border border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm bg-white shadow-[0px_1px_2px_0px_#0A0D120D]"
                />
              </div>

              <div>
                <label className="block font-inter font-normal text-xs leading-none text-black mb-2">
                  Address
                </label>
                <textarea
                  defaultValue="Near apple store banana street muhallah qadu"
                  rows={3}
                  className="w-full px-4 py-3 border border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm bg-white shadow-[0px_1px_2px_0px_#0A0D120D] resize-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block font-inter font-normal text-xs leading-none text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  defaultValue="Jhon Doe"
                  className="w-full h-12 px-4 py-3 border border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm bg-white shadow-[0px_1px_2px_0px_#0A0D120D]"
                />
              </div>

              <div>
                <label className="block font-inter font-normal text-xs leading-none text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="000-111-222333"
                  className="w-full h-12 px-4 py-3 border border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm bg-white shadow-[0px_1px_2px_0px_#0A0D120D]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="w-[143px] h-[43px] px-8 py-3 bg-[#5B7C99] text-white rounded font-inter font-normal text-sm hover:bg-[#4A6B8A] transition-colors shadow-[0px_4px_4px_0px_#00000040]">
          Save
        </button>
      </div>
    </div>
  )
}

export default PersonalInformation