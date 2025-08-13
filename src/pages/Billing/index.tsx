import Navbar from "../../components/navbar"
import PaymentHistory from "../../components/auth/Billing/PaymentHistory"

const BillingPage = () => {
  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Billing & Payments" />
      <div className="bg-gray-50 min-h-screen">
        {/* Payment History Section */}
        <PaymentHistory />
      </div>
    </div>
  )
}

export default BillingPage
