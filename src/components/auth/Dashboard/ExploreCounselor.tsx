import React from 'react'
import { FiSearch, FiMoreVertical } from 'react-icons/fi'

const ExploreCounselor = () => {
  const counselors = [
    { name: 'Natali Craig', rank: 'First', sessions: '169', avatar: 'NC' },
    { name: 'Kate Morrison', rank: 'Second', sessions: '166', avatar: 'KM' },
    { name: 'Drew Cano', rank: 'Third', sessions: '164', avatar: 'DC' },
  ]

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] text-black">
          Explore Counselor
        </h2>
        <div className="relative w-full sm:w-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-40 h-8 pl-10 pr-3 py-1 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-1 overflow-x-auto">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                  Top Councilors
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                  Ranked
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                  Sessions
                </th>
              </tr>
            </thead>
            <tbody>
              {counselors.map((counselor, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {counselor.avatar}
                      </div>
                      <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C] truncate">
                        {counselor.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                    {counselor.rank}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                    {counselor.sessions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Counselor Image - responsive */}
        <div className="flex justify-center lg:justify-end lg:flex-shrink-0 lg:mt-8">
          <img 
            src="/dashboard/counselor.svg" 
            alt="Counselor illustration" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-[146px] md:h-[152px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ExploreCounselor
