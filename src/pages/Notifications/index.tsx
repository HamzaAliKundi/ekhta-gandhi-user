import Navbar from "../../components/navbar"
import NotificationList from "../../components/auth/Notifications/NotificationList"

const NotificationsPage = () => {
  return (
    <div className="flex flex-col bg-[#ECF2F7]">
      <Navbar title="Notifications" />
      <div className="bg-gray-50 min-h-screen">
        {/* Notification List Section */}
        <NotificationList />
      </div>
    </div>
  )
}

export default NotificationsPage
