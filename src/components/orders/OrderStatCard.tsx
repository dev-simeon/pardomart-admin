import { ArrowUp, ArrowDown } from "lucide-react";

interface OrderStatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
}

export function OrderStatCard({
  icon,
  title,
  value,
  change,
  isPositive,
  period,
}: OrderStatCardProps) {
  return (
    <div className="flex w-full flex-col items-start gap-2.5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="flex h-[22px] items-center gap-2">
          {icon}
          <div className="font-sans text-sm font-normal leading-5 text-[#6A717F]">
            {title}
          </div>
        </div>
        <div className="flex h-5 w-full items-start justify-between">
          <div className="font-sans text-2xl font-bold leading-5 text-black">
            {value}
          </div>
          <div className="flex h-4 items-center gap-2">
            <div className="rounded-xl font-sans text-xs font-normal leading-4 text-black">
              {change}
            </div>
            <div className="flex h-4 w-4 items-center justify-center rounded-lg">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65373 12.3607C1.45453 12.1695 1.44807 11.8529 1.63931 11.6537L4.99931 8.15373C5.09359 8.05552 5.22385 8 5.36 8C5.49615 8 5.62641 8.05552 5.72069 8.15373L7.76 10.278L10.1766 7.76067L8.45488 6.10777L14 4.5L12.6198 10.1061L10.898 8.4532L8.12069 11.3463C8.02641 11.4445 7.89615 11.5 7.76 11.5C7.62385 11.5 7.49359 11.4445 7.39931 11.3463L5.36 9.22199L2.36069 12.3463C2.16946 12.5455 1.85294 12.5519 1.65373 12.3607Z"
                  fill={isPositive ? "#01891C" : "#FF0000"}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans text-xs font-normal leading-normal text-[#6A717F]">
        {period}
      </div>
    </div>
  );
}
