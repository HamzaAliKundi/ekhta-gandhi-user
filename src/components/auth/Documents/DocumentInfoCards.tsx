import React from 'react'
import { FiFolder } from 'react-icons/fi'

const DocumentInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* All Documents Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm h-[120px]">
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              1030
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              All Documents
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiFolder className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Upload Documents Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm h-[120px]">
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              600
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Upload Documents
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiFolder className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Shared with Counselor Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm h-[120px]">
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              86
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Shared with Counselor
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiFolder className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Add Documents Card */}
      <div className="bg-[#5B7C99] rounded-xl p-6 shadow-sm h-[120px]">
        <div className="flex items-start justify-between h-full">
          <div className="flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[26px] leading-none text-white mb-2">
              Upload
            </h3>
            <p className="font-inter font-normal text-base leading-none text-white">
              Add Documents
            </p>
          </div>
          <div className="w-[29.36px] h-6 flex items-center justify-center">
            <FiFolder className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentInfoCards
