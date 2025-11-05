import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Admins from "./pages/Admins";
import StoreManagement from "./pages/StoreManagement";
import SubStoreManagement from "./pages/SubStoreManagement";
import Transactions from "./pages/Transactions";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import EmailMarketing from "./pages/EmailMarketing";
import Profile from "./pages/Profile";
import DeliveryGuys from "./pages/DeliveryGuys";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Messages from "./pages/Messages";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CustomerInformation from "./pages/CustomerInformation";
import OrderDetails from "./pages/OrderDetails";
import Analytics from "./pages/Analytics";
import { Toaster } from "@/components/ui/toaster";
import TokenExpirationManager from "@/components/auth/TokenExpirationManager";

function App() {
  return (
    <AuthProvider>
      <Router>
        <TokenExpirationManager />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/store-management" element={<StoreManagement />} />
            <Route
              path="/store-management/substore/:userId"
              element={<SubStoreManagement />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/:id" element={<InvoiceDetails />} />
            <Route path="/marketing" element={<EmailMarketing />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerInformation />} />
            <Route path="/delivery" element={<DeliveryGuys />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
