import { useNavigate } from "react-router-dom";
import { CustomerProfileHeader } from "@/components/customers/CustomerProfileHeader";
import { OrderOverview } from "@/components/customers/OrderOverview";
import { CustomerInfoSidebar } from "@/components/customers/CustomerInfoSidebar";
import { TransactionHistory } from "@/components/customers/TransactionHistory";

export default function CustomerInformation() {
  const navigate = useNavigate();

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_379px] gap-5">
        <div className="space-y-6">
          <CustomerProfileHeader />
        </div>
        <CustomerInfoSidebar />
      </div>
      <TransactionHistory />
    </div>
  );
}
