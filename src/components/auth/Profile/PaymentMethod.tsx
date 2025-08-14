import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="space-y-6">
      {/* Payment Methods Section */}
      <div>
        <h3 className="font-inter font-normal text-base leading-none text-black mb-4">
          Payment Methods
        </h3>
        
        {/* Payment Method Card */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-inter font-normal text-sm leading-none text-black mb-1">
                Stripe
              </h4>
              <p className="font-inter font-normal text-xs leading-none text-gray-600">
                your users are by default using this payment method
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="w-[143px] h-[43px] px-8 py-3 bg-[#5B7C99] text-white rounded font-inter font-normal text-sm hover:bg-[#4A6B8A] transition-colors shadow-[0px_4px_4px_0px_#00000040]">
          Save
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
