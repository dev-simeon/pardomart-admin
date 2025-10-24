import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import StoreManagement from "./pages/StoreManagement";
import SubStoreManagement from "./pages/SubStoreManagement";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import OrderDetails from "./pages/OrderDetails";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import EmailMarketing from "./pages/EmailMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateAccount />} />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/store-management"
              element={
                <Layout>
                  <StoreManagement />
                </Layout>
              }
            />
            <Route
              path="/store-management/substore"
              element={
                <Layout>
                  <SubStoreManagement />
                </Layout>
              }
            />
            <Route
              path="/transactions"
              element={
                <Layout>
                  <Transactions />
                </Layout>
              }
            />
            <Route
              path="/invoices"
              element={
                <Layout>
                  <Invoices />
                </Layout>
              }
            />
            <Route
              path="/invoices/:id"
              element={
                <Layout>
                  <InvoiceDetails />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <Products />
                </Layout>
              }
            />
            <Route
              path="/orders"
              element={
                <Layout>
                  <Orders />
                </Layout>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <Layout>
                  <OrderDetails />
                </Layout>
              }
            />
            <Route
              path="/customers"
              element={
                <Layout>
                  <Customers />
                </Layout>
              }
            />
            <Route
              path="/analytics"
              element={
                <Layout>
                  <Analytics />
                </Layout>
              }
            />
            <Route
              path="/settings"
              element={
                <Layout>
                  <Settings />
                </Layout>
              }
            />
            <Route
              path="/marketing"
              element={
                <Layout>
                  <EmailMarketing />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
