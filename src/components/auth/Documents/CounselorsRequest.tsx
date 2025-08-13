import React from 'react'
import { FiPlus, FiFilter, FiArrowUp, FiSearch, FiMoreVertical } from 'react-icons/fi'

const CounselorsRequest = () => {
  const requests = [
    { id: '#CM9801', counselor: 'Natali Craig', avatar: 'NC', document: 'Essay writing', date: 'Just now', status: 'Pending', statusType: 'pending' },
    { id: '#CM9802', counselor: 'Kate Morrison', avatar: 'KM', document: 'Research paper', date: 'A minute ago', status: 'Approved', statusType: 'approved' },
    { id: '#CM9803', counselor: 'Drew Cano', avatar: 'DC', document: 'Assignment', date: '1 hour ago', status: 'Rejected', statusType: 'rejected' },
    { id: '#CM9804', counselor: 'Orlando Diggs', avatar: 'OD', document: 'Thesis', date: 'Yesterday', status: 'Pending', statusType: 'pending' },
    { id: '#CM9805', counselor: 'Andi Lane', avatar: 'AL', document: 'Project report', date: 'Feb 2, 2023', status: 'Approved', statusType: 'approved' },
  ]

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'approved':
        return 'bg-green-500'
      case 'rejected':
        return 'bg-red-500'
      case 'pending':
        return 'bg-orange-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] text-black">
          Counselor's Request
        </h2>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Action Buttons */}
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <FiPlus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <FiFilter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-32 sm:w-40 h-8 pl-10 pr-3 py-1 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                User ID
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Counselors
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Document
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Date
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Status
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {request.id}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {request.avatar}
                    </div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C] truncate">
                      {request.counselor}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {request.document}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {request.date}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${getStatusColor(request.statusType)} rounded-full`}></div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                      {request.status}
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

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              page === 1 
                ? 'bg-gray-200 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CounselorsRequest
