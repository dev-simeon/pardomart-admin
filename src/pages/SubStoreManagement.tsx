import { StatCard } from "@/components/dashboard/StatCard";
import { SubStoresTable } from "@/components/stores/SubStoresTable";
import { OrderIcon, ProductsIcon, InStockIcon, OutOfStockIcon } from "@/components/icons/CustomIcons";

const statCards = [
  {
    title: "Total Orders",
    value: "6,876",
    change: "+ 0.03%",
    icon: OrderIcon,
    iconSize: 22,
  },
  {
    title: "Total Products",
    value: "61,876",
    change: "+ 0.03%",
    icon: ProductsIcon,
    iconSize: 22,
  },
  {
    title: "In-Stock Products",
    value: "42,876",
    change: "+ 0.03%",
    icon: InStockIcon,
    iconSize: 22,
  },
  {
    title: "Out-of-Stock Products",
    value: "1,876",
    change: "+ 0.03%",
    icon: OutOfStockIcon,
    iconSize: 22,
  },
];

export default function SubStoreManagement() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-[25px]">
        {statCards.map((card, index) => (
          <div key={index} className="flex-1 min-w-[250px] max-w-[267px]">
            <StatCard {...card} />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b3fec63d76280b85ef3eec138726ae2700903069?width=80"
          alt="Jewel Osco"
          className="w-10 h-10 rounded-2xl object-cover"
        />
        <h2 className="font-lato text-[22px] font-bold text-[#023337] leading-normal tracking-[0.11px]">
          Jewel Osco Store
        </h2>
      </div>

      <SubStoresTable />
    </div>
  );
}
