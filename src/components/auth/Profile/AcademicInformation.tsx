import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const AcademicInformation = () => {
  return (
    <div className="space-y-6">
      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Grade Level
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm appearance-none bg-white">
                <option value="">Select</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              GPA (Unweighted or Weighted)
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="2.96"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
              />
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              AP/IB Courses Taken
            </label>
            <input
              type="text"
              placeholder="If applicable"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Top 3 Colleges
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm appearance-none bg-white">
                <option value="">Select 3 atleast</option>
                <option value="harvard">Harvard University</option>
                <option value="stanford">Stanford University</option>
                <option value="mit">MIT</option>
                <option value="yale">Yale University</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Current High School
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              SAT/ACT Scores (if available)
            </label>
            <input
              type="text"
              placeholder="If applicable"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm"
            />
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Extracurricular Activities
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter font-normal text-sm appearance-none bg-white">
                <option value="">Select major</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="debate">Debate</option>
                <option value="volunteer">Volunteer Work</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-inter font-normal text-sm leading-none text-gray-700 mb-2">
              Intended Major
            </label>
            <input
              type="text"
              placeholder="Academic Interests"
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

export default AcademicInformation
