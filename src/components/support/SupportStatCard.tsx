interface SupportStatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export function SupportStatCard({ icon, title, value }: SupportStatCardProps) {
  return (
    <div className="flex w-full flex-col items-start gap-2.5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex items-center gap-2">
          {icon}
          <div className="font-sans text-sm font-normal leading-5 tracking-[0px] text-[#6A717F]">
            {title}
          </div>
        </div>
        <div className="flex items-center gap-20 self-stretch">
          <div className="font-sans text-2xl font-bold leading-5 text-black">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
