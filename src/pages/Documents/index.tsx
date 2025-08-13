import Navbar from "../../components/navbar"
import DocumentInfoCards from "../../components/auth/Documents/DocumentInfoCards"
import CounselorsRequest from "../../components/auth/Documents/CounselorsRequest"

const DocumentsPage = () => {
  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Documents" />
      <div className="bg-gray-50 min-h-screen">
        {/* Info Cards Row */}
        <DocumentInfoCards />
        
        {/* Counselors Request Section */}
        <CounselorsRequest />
      </div>
    </div>
  )
}

export default DocumentsPage
