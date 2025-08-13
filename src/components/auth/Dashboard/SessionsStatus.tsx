import React from 'react'
import { FiMoreVertical, FiArrowUpRight } from 'react-icons/fi'

const SessionsStatus = () => {
  const sessions = [
    { name: 'Natali Craig', status: 'Approved', avatar: 'NC' },
    { name: 'Kate Morrison', status: 'Approved', avatar: 'KM' },
    { name: 'Drew Cano', status: 'Rejected', avatar: 'DC' },
    { name: 'John Smith', status: 'Approved', avatar: 'JS' },
  ]

  const getStatusColor = (status: string) => {
    return status === 'Approved' ? 'bg-yellow-500' : 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] text-black">
          Sessions Status
        </h2>
        <button className="flex items-center gap-2 text-black hover:text-gray-700 font-inter font-normal text-xs leading-none tracking-[0%]">
          View more
          <FiArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[300px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Counselor
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Status
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {session.avatar}
                    </div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C] truncate">
                      {session.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${getStatusColor(session.status)} rounded-full`}></div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                      {session.status}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SessionsStatus
