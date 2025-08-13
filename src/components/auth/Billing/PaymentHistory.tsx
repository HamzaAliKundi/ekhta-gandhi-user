import React from 'react'
import { FiPlus, FiFilter, FiArrowUp, FiSearch, FiMoreVertical } from 'react-icons/fi'

const PaymentHistory = () => {
  const payments = [
    { id: '#CM9801', student: 'Natali Craig', avatar: 'NC', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'In Progress', statusType: 'in-progress' },
    { id: '#CM9802', student: 'Kate Morrison', avatar: 'KM', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
    { id: '#CM9803', student: 'Drew Cano', avatar: 'DC', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'In Progress', statusType: 'in-progress' },
    { id: '#CM9804', student: 'Orlando Diggs', avatar: 'OD', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'In Progress', statusType: 'in-progress' },
    { id: '#CM9805', student: 'Andi Lane', avatar: 'AL', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'In Progress', statusType: 'in-progress' },
    { id: '#CM9801', student: 'Natali Craig', avatar: 'NC', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
    { id: '#CM9802', student: 'Kate Morrison', avatar: 'KM', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
    { id: '#CM9803', student: 'Drew Cano', avatar: 'DC', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
    { id: '#CM9804', student: 'Orlando Diggs', avatar: 'OD', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
    { id: '#CM9805', student: 'Andi Lane', avatar: 'AL', sessionDate: 'Feb 2, 2023', sessionFee: '25$', payout: '$23.75', status: 'Complete', statusType: 'complete' },
  ]

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'in-progress':
        return 'bg-purple-500'
      case 'complete':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="font-inter font-normal text-sm sm:text-base leading-none tracking-[0%] text-black">
          Payment History
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
                Ticket
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Students
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Session Date
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Session Fee
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Payout
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
                Status
              </th>
              <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C66]">
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {payment.id}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {payment.avatar}
                    </div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C] truncate">
                      {payment.student}
                    </span>
                  </div>
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {payment.sessionDate}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {payment.sessionFee}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                  {payment.payout}
                </td>
                <td className="py-2 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${getStatusColor(payment.statusType)} rounded-full`}></div>
                    <span className="font-inter font-normal text-xs leading-[18px] tracking-[0%] text-[#1C1C1C]">
                      {payment.status}
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

export default PaymentHistory
