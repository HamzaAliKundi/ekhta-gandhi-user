import React from 'react'

const WelcomeStudent = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 relative min-h-[200px] sm:min-h-[250px]">
      <div className="flex flex-col">
        {/* First Row - Title */}
        <div className="mb-2 sm:mb-4">
          <h2 className="font-inter-tight font-normal text-sm sm:text-base leading-none text-black">
            Welcome "student"
          </h2>
        </div>
        
        {/* Second Row - Description */}
        <div className="mb-4 sm:mb-6 pr-0 sm:pr-32 lg:pr-40">
          <p className="font-poppins font-light text-xs leading-relaxed sm:leading-none tracking-[0%] text-[#8F8F8F]">
            Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!
          </p>
        </div>
      </div>
      
      {/* Image positioned at bottom right corner - responsive */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
        <img 
          src="/dashboard/welcome.svg" 
          alt="Student illustration" 
          className="w-32 h-14 sm:w-48 sm:h-20 md:w-64 md:h-28 lg:w-[285.69px] lg:h-[122px]"
        />
      </div>
    </div>
  )
}

export default WelcomeStudent
