import React from 'react'
import { FiVideo, FiUpload, FiMessageSquare } from 'react-icons/fi'

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Upcoming Appointment Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 text-white relative">
        <div className="absolute top-4 right-4 w-[29.36px] h-6 flex items-center justify-center">
          <FiVideo className="w-6 h-6 text-white" />
        </div>
        <div className="mt-4">
          <div className="font-poppins font-normal text-[26px] leading-none tracking-[0%] text-white mb-2">10:30 pm</div>
          <div className="font-inter font-normal text-base leading-none tracking-[0%] text-white">Upcoming Appointment</div>
        </div>
      </div>

      {/* Upload Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 text-white relative">
        <div className="absolute top-4 right-4 w-[29.36px] h-6 flex items-center justify-center">
          <FiUpload className="w-6 h-6 text-white" />
        </div>
        <div className="mt-4">
          <div className="font-poppins font-normal text-[26px] leading-none tracking-[0%] text-white mb-2">Upload</div>
          <div className="font-inter font-normal text-base leading-none tracking-[0%] text-white">Add Documents</div>
        </div>
      </div>

      {/* New Messages Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 text-white relative">
        <div className="absolute top-4 right-4 w-[29.36px] h-6 flex items-center justify-center">
          <FiMessageSquare className="w-6 h-6 text-white" />
        </div>
        <div className="mt-4">
          <div className="font-poppins font-normal text-[26px] leading-none tracking-[0%] text-white mb-2">12</div>
          <div className="font-inter font-normal text-base leading-none tracking-[0%] text-white">New Messages</div>
        </div>
      </div>
    </div>
  )
}

export default InfoCards
