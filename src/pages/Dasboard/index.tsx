import Navbar from "../../components/navbar"
import InfoCards from "../../components/auth/Dashboard/InfoCards"
import WelcomeStudent from "../../components/auth/Dashboard/WelcomeStudent"
import ExploreCounselor from "../../components/auth/Dashboard/ExploreCounselor"
import DocumentRequests from "../../components/auth/Dashboard/DocumentRequests"
import SessionsStatus from "../../components/auth/Dashboard/SessionsStatus"

const DashboardPage = () => {
  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Hello Hamza" />
      <div className=" bg-gray-50 min-h-screen">
      {/* Info Cards Row */}
      <InfoCards />
      
      {/* Welcome and Explore Counselor Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <WelcomeStudent />
        <ExploreCounselor />
      </div>
      
      {/* Document Requests and Sessions Status Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentRequests />
        <SessionsStatus />
      </div>
    </div>
    </div>
  )
}

export default DashboardPage