import Navbar from "../../components/navbar"
import AppointmentInfoCards from "../../components/auth/Appointments/AppointmentInfoCards"
import SessionsRequests from "../../components/auth/Appointments/SessionsRequests"

const AppointmentsPage = () => {
  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="My Sessions" />
      <div className="bg-gray-50 min-h-screen">
        {/* Info Cards Row */}
        <AppointmentInfoCards />
        
        {/* Sessions Requests Section */}
        <SessionsRequests />
      </div>
    </div>
  )
}

export default AppointmentsPage
