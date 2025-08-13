import React from 'react'
import { FiVideo, FiUserPlus, FiUserCheck } from 'react-icons/fi'

const AppointmentInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Upcoming Appointment Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              10:30 pm
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Upcoming Appointment
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiVideo className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Reschedule Appointments Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              30+
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Reschedule Appointments
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiUserPlus className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Completed Appointments Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              32
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Completed Appointments
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiUserCheck className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentInfoCards
