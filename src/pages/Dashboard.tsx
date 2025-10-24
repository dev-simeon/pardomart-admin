import { StatCard } from "@/components/dashboard/StatCard";
import { WeeklyReportChart } from "@/components/dashboard/WeeklyReportChart";
import { Last7DaysSales } from "@/components/dashboard/Last7DaysSales";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AverageOrderValue } from "@/components/dashboard/AverageOrderValue";
import {
  UsersIcon,
  StoreIcon,
  OrderIcon,
  DeliveredIcon,
} from "@/components/icons/CustomIcons";

const statCards = [
  {
    title: "Total Users",
    value: "61,876",
    change: "+ 0.03%",
    icon: UsersIcon,
    iconSize: 22,
  },
  {
    title: "Total Stores",
    value: "61,876",
    change: "+ 0.03%",
    icon: StoreIcon,
    iconSize: 16,
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

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="flex flex-wrap gap-[25px]">
        {statCards.map((card, index) => (
          <div key={index} className="flex-1 min-w-[250px] max-w-[267px]">
            <StatCard {...card} />
          </div>
        ))}
      </div>

      {/* Weekly Report & Last 7 Days Sales */}
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[300px] max-w-[739px]">
          <WeeklyReportChart />
        </div>
        <div className="w-full lg:w-[377px] flex-shrink-0">
          <Last7DaysSales />
        </div>
      </div>

      {/* Recent Transactions & Average Order Value */}
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-1 min-w-[300px] max-w-[540px]">
          <RecentTransactions />
        </div>
        <div className="flex w-full lg:w-[587px] flex-shrink-0">
          <AverageOrderValue />
        </div>
      </div>
    </div>
  );
}
