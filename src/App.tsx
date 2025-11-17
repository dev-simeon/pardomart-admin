import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import TokenExpirationManager from "@/components/auth/TokenExpirationManager";

const Login = lazy(() => import("./pages/Login"));
const VerifyOTP = lazy(() => import("./pages/VerifyOTP"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Orders = lazy(() => import("./pages/Orders"));
const Admins = lazy(() => import("./pages/Admins"));
const StoreManagement = lazy(() => import("./pages/StoreManagement"));
const SubStoreManagement = lazy(
  () => import("./pages/SubStoreManagement"),
);
const Transactions = lazy(() => import("./pages/Transactions"));
const Invoices = lazy(() => import("./pages/Invoices"));
const InvoiceDetails = lazy(() => import("./pages/InvoiceDetails"));
const EmailMarketing = lazy(() => import("./pages/EmailMarketing"));
const Profile = lazy(() => import("./pages/Profile"));
const DeliveryGuys = lazy(() => import("./pages/DeliveryGuys"));
const Settings = lazy(() => import("./pages/Settings"));
const Support = lazy(() => import("./pages/Support"));
const Messages = lazy(() => import("./pages/Messages"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CustomerInformation = lazy(
  () => import("./pages/CustomerInformation"),
);
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const Analytics = lazy(() => import("./pages/Analytics"));

const AppFallback = () => (
  <div className="flex h-screen items-center justify-center text-sm text-muted-foreground">
    Loading…
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <TokenExpirationManager />
        <Suspense fallback={<AppFallback />}>
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
        </Suspense>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
