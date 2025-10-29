import { useParams } from "react-router-dom";
import { CustomerProfileHeader } from "@/components/customers/CustomerProfileHeader";
import { CustomerInfoSidebar } from "@/components/customers/CustomerInfoSidebar";
import { TransactionHistory } from "@/components/customers/TransactionHistory";
import { useUser } from "@/hooks/useUser";

export default function CustomerInformation() {
  const { id } = useParams();
  const { user } = useUser({ userId: id || "" });

  const name = user?.name || user?.fullName || user?.email?.split("@")[0] || "";
  const email = user?.email;
  const avatarUrl = user?.profileImage;
  const phone = user?.mobileNumber || user?.phoneNumber;
  const address = (user as any)?.address || (user as any)?.location || "";

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_379px] gap-5">
        <div className="space-y-6">
          <CustomerProfileHeader name={name} email={email} avatarUrl={avatarUrl} />
        </div>
        <CustomerInfoSidebar address={address} email={email} phone={phone} />
      </div>
      {id ? <TransactionHistory customerId={id} /> : null}
    </div>
  );
}
