import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./pages/protextedRoutes";
import Layout from "./pages/layout";
import { Toaster } from "react-hot-toast";
import Login from "./components/auth/login";
import DashboardPage from "./pages/Dasboard";
import AppointmentsPage from "./pages/Appointments";
import DocumentsPage from "./pages/Documents";
import MessagesPage from "./pages/Messages";
import BillingPage from "./pages/Billing";
import NotificationsPage from "./pages/Notifications";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
          <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
