interface HelpCardProps {
  title: string;
  description1: string;
  description2: string;
  linkText: string;
  iconBgColor?: string;
}

const RocketIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.5 49.6793C48.6375 10.2876 74.9583 9.83347 85.4708 14.5293C90.1667 25.046 89.7125 51.3626 50.3208 72.5001C49.9125 70.1501 47.6417 64.0001 41.8208 58.1793C36 52.3585 29.85 50.0876 27.5 49.6793Z"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M55.625 70.6256C63.2875 74.3756 64.1042 81.1006 65.1667 87.5006C65.1667 87.5006 81.2083 75.6423 70.9458 59.3756M29.375 44.6964C25.625 37.0339 18.9 36.2173 12.5 35.1548C12.5 35.1548 24.3625 19.1131 40.625 29.3756M25.075 62.1339C22.9417 64.2631 19.3167 70.4506 21.875 78.1256C29.5542 80.6839 35.7375 77.0589 37.875 74.9298M72.0833 35.2089C72.0833 33.275 71.3151 31.4204 69.9477 30.0529C68.5802 28.6855 66.7255 27.9172 64.7917 27.9172C62.8578 27.9172 61.0031 28.6855 59.6357 30.0529C58.2682 31.4204 57.5 33.275 57.5 35.2089C57.5 37.1428 58.2682 38.9975 59.6357 40.3649C61.0031 41.7324 62.8578 42.5006 64.7917 42.5006C66.7255 42.5006 68.5802 41.7324 69.9477 40.3649C71.3151 38.9975 72.0833 37.1428 72.0833 35.2089Z"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function HelpCard({
  title,
  description1,
  description2,
  linkText,
  iconBgColor = "#FFE5E5",
}: HelpCardProps) {
  return (
    <div className="w-full h-full border border-[#898A8D] rounded-[11px] bg-white shadow-[0_1px_4px_0_rgba(21,34,50,0.08)] flex flex-col items-center p-7 gap-6">
      <div
        className="w-[140px] h-[140px] rounded-[32px] flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBgColor }}
      >
        <RocketIcon />
      </div>

      <div className="w-full flex flex-col items-center gap-0">
        <h3 className="text-[#131523] text-center font-sans text-xl font-bold leading-7 mb-[10px]">
          {title}
        </h3>
        <div className="flex flex-col gap-3">
          <p className="text-[#131523] text-center font-sans text-sm font-normal leading-5">
            {description1}
          </p>
          <p className="text-[#131523] text-center font-sans text-sm font-normal leading-5">
            {description2}
          </p>
        </div>
        <button className="mt-[10px] text-[#06888C] text-center font-sans text-sm font-semibold leading-5 hover:underline transition-all">
          {linkText}
        </button>
      </div>
    </div>
  );
}
