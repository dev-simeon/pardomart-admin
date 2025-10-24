import { ReactNode } from "react";

interface CustomerStatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export function CustomerStatCard({ icon, title, value }: CustomerStatCardProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-sans text-sm font-normal leading-5 tracking-[0px] text-[#6A717F]">
          {title}
        </span>
      </div>
      <div className="font-sans text-2xl font-bold leading-5 text-black">
        {value}
      </div>
    </div>
  );
}
