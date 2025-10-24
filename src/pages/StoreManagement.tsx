import { StatCard } from "@/components/dashboard/StatCard";
import { StoresTable } from "@/components/stores/StoresTable";
import {
  UsersIcon,
  StoreIcon,
  OrderIcon,
  DeliveredIcon,
} from "@/components/icons/CustomIcons";

const statCards = [
  {
    title: "Total Stores",
    value: "61,876",
    change: "+ 0.03%",
    icon: StoreIcon,
    iconSize: 16,
  },
  {
    title: "Total Users",
    value: "61,876",
    change: "+ 0.03%",
    icon: UsersIcon,
    iconSize: 22,
  },
  {
    title: "Total Orders",
    value: "61,876",
    change: "+ 0.03%",
    icon: OrderIcon,
    iconSize: 22,
  },
  {
    title: "Total Delivered",
    value: "61,876",
    change: "+ 0.03%",
    icon: DeliveredIcon,
    iconSize: 22,
  },
];

export default function StoreManagement() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-[25px]">
        {statCards.map((card, index) => (
          <div key={index} className="flex-1 min-w-[250px] max-w-[267px]">
            <StatCard {...card} />
          </div>
        ))}
      </div>

      <StoresTable />
    </div>
  );
}
