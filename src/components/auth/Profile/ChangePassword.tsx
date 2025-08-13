import React, { useState } from 'react'

const ChangePassword = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)

  return (
    <div className="space-y-6">
      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              User ID
            </label>
            <input
              type="text"
              defaultValue="admin001"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Backup Email
            </label>
            <input
              type="email"
              defaultValue="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication Toggle */}
      <div className="flex items-center justify-between pt-4">
        <label className="font-inter font-normal text-sm leading-none text-gray-700">
          Enable Two-factor Authentication
        </label>
        <button
          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            twoFactorEnabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
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

export default ChangePassword
