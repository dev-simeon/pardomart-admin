import { useVendorUsers } from "@/hooks/useVendorUsers";
import { StatCard } from "@/components/dashboard/StatCard";
import { StoresTable } from "@/components/stores/StoresTable";
import {
  UsersIcon,
  StoreIcon,
  OrderIcon,
  DeliveredIcon,
} from "@/components/icons/CustomIcons";

export default function StoreManagement() {
  const { total, loading } = useVendorUsers();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-[25px]">
        <div className="flex-1 min-w-[250px] max-w-[267px]">
          <StatCard
            title="Total Stores"
            value={loading ? "Loading..." : total.toLocaleString()}
            change="+ 0.03%"
            icon={StoreIcon}
            iconSize={16}
          />
        </div>
        <div className="flex-1 min-w-[250px] max-w-[267px]">
          <StatCard
            title="Total Users"
            value="61,876"
            change="+ 0.03%"
            icon={UsersIcon}
            iconSize={22}
          />
        </div>
        <div className="flex-1 min-w-[250px] max-w-[267px]">
          <StatCard
            title="Total Orders"
            value="61,876"
            change="+ 0.03%"
            icon={OrderIcon}
            iconSize={22}
          />
        </div>
        <div className="flex-1 min-w-[250px] max-w-[267px]">
          <StatCard
            title="Total Delivered"
            value="61,876"
            change="+ 0.03%"
            icon={DeliveredIcon}
            iconSize={22}
          />
        </div>
      </div>

      <StoresTable />
    </div>
  );
}
