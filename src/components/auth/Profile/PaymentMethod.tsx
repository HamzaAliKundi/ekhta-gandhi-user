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
        <button className="bg-[#5B7C99] text-white px-6 py-2 rounded-lg font-inter font-normal text-sm hover:bg-[#4A6B8A] transition-colors">
          Save
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
