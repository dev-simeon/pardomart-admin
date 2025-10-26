import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const TotalTransactionIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5835 3.66699H6.41683C5.40431 3.66699 4.5835 4.4878 4.5835 5.50033V17.417C4.5835 18.4295 5.40431 19.2503 6.41683 19.2503H15.5835C16.596 19.2503 17.4168 18.4295 17.4168 17.417V5.50033C17.4168 4.4878 16.596 3.66699 15.5835 3.66699Z"
      stroke="#6A717F"
      strokeWidth="1.5"
    />
    <path
      d="M8.25 8.25H13.75M8.25 11.9167H13.75M8.25 15.5833H11.9167"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TotalIncomeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M8.53764 14.5536L7.87764 15.1952C8.29197 15.9772 8.1618 16.9598 7.48439 17.6162L6.43205 18.6373C6.02101 19.0301 5.47435 19.2493 4.90581 19.2493C4.33726 19.2493 3.7906 19.0301 3.37956 18.6373C3.18073 18.4473 3.02247 18.219 2.91435 17.9661C2.80623 17.7132 2.75049 17.4411 2.75049 17.1661C2.75049 16.8911 2.80623 16.6189 2.91435 16.366C3.02247 16.1132 3.18073 15.8848 3.37956 15.6948L4.03956 15.055C3.83259 14.6636 3.75892 14.2154 3.82972 13.7783C3.90052 13.3412 4.11194 12.9392 4.43189 12.6332L5.48422 11.612C5.89527 11.2192 6.44193 11 7.01047 11C7.57902 11 8.12568 11.2192 8.53672 11.612C8.73555 11.802 8.8938 12.0303 9.00192 12.2832C9.11004 12.5361 9.16579 12.8082 9.16579 13.0832C9.16579 13.3583 9.11004 13.6304 9.00192 13.8833C8.8938 14.1362 8.73555 14.3645 8.53672 14.5545M7.93997 13.9953C8.06286 13.8775 8.16065 13.7361 8.22745 13.5795C8.29426 13.4229 8.32869 13.2544 8.32869 13.0842C8.32869 12.9139 8.29426 12.7454 8.22745 12.5888C8.16065 12.4323 8.06286 12.2908 7.93997 12.173C7.68989 11.9329 7.35666 11.7989 7.01001 11.7989C6.66336 11.7989 6.33014 11.9329 6.08005 12.173L5.02681 13.1942C4.86022 13.3544 4.7407 13.5571 4.68123 13.7805C4.62176 14.0038 4.62461 14.2392 4.68947 14.461C5.0847 14.1862 5.55859 14.0474 6.03962 14.0656C6.52065 14.0838 6.9827 14.258 7.35605 14.5618L7.93997 13.9953ZM5.15697 15.1247C5.38889 15.2961 5.66971 15.3887 5.95814 15.3887C6.24657 15.3887 6.52739 15.2961 6.75931 15.1247C6.52739 14.9532 6.24657 14.8606 5.95814 14.8606C5.66971 14.8606 5.38889 14.9532 5.15697 15.1247ZM3.97539 16.2549C3.8525 16.3727 3.75471 16.5142 3.68791 16.6708C3.6211 16.8273 3.58667 16.9958 3.58667 17.1661C3.58667 17.3363 3.6211 17.5048 3.68791 17.6614C3.75471 17.818 3.8525 17.9594 3.97539 18.0772C4.22547 18.3173 4.5587 18.4513 4.90535 18.4513C5.252 18.4513 5.58522 18.3173 5.83531 18.0772L6.88855 17.0561C7.24147 16.7142 7.35422 16.2256 7.22589 15.7892C6.83066 16.064 6.35677 16.2028 5.87574 16.1846C5.39471 16.1664 4.93266 15.9923 4.5593 15.6884L3.97539 16.2549ZM12.8331 11.9163C12.59 11.9163 12.3569 12.0129 12.185 12.1848C12.013 12.3567 11.9165 12.5899 11.9165 12.833C11.9165 13.0761 12.013 13.3093 12.185 13.4812C12.3569 13.6531 12.59 13.7497 12.8331 13.7497H15.5831C15.8263 13.7497 16.0594 13.6531 16.2313 13.4812C16.4032 13.3093 16.4998 13.0761 16.4998 12.833C16.4998 12.5899 16.4032 12.3567 16.2313 12.1848C16.0594 12.0129 15.8263 11.9163 15.5831 11.9163H12.8331Z"
      fill="#6A717F"
    />
    <path
      d="M15.4273 3.89551H6.57234C6.08192 3.89551 5.674 3.89551 5.33942 3.92301C4.99109 3.95051 4.66475 4.01284 4.35584 4.17051C3.88141 4.41221 3.4957 4.79792 3.254 5.27234C3.1715 5.43459 3.1385 5.63534 3.12017 5.75451C3.09538 5.931 3.07704 6.10834 3.06517 6.28617C3.03584 6.68034 3.01659 7.16984 3.00375 7.67034C2.979 8.67134 2.979 9.75117 2.979 10.2645V10.2663C2.979 10.4487 3.05144 10.6235 3.18037 10.7525C3.3093 10.8814 3.48417 10.9538 3.6665 10.9538C3.84884 10.9538 4.02371 10.8814 4.15264 10.7525C4.28157 10.6235 4.354 10.4487 4.354 10.2663C4.354 10.0097 4.354 9.61734 4.35675 9.16634H17.6457V13.5663C17.6457 14.0907 17.6457 14.4436 17.6228 14.714C17.6017 14.978 17.5632 15.1036 17.521 15.1861C17.4111 15.402 17.2355 15.5776 17.0196 15.6875C16.9371 15.7297 16.8115 15.7682 16.5475 15.7893C16.2771 15.8113 15.9242 15.8122 15.3998 15.8122H10.9998C10.8175 15.8122 10.6426 15.8846 10.5137 16.0135C10.3848 16.1425 10.3123 16.3173 10.3123 16.4997C10.3123 16.682 10.3848 16.8569 10.5137 16.9858C10.6426 17.1147 10.8175 17.1872 10.9998 17.1872H15.4273C15.9178 17.1872 16.3257 17.1872 16.6603 17.1597C17.0086 17.1322 17.3349 17.0698 17.6438 16.9122C18.1181 16.6707 18.5038 16.2853 18.7457 15.8113C18.9033 15.5014 18.9657 15.1751 18.9932 14.8268C19.0207 14.4922 19.0207 14.0843 19.0207 13.5948V7.48884C19.0207 6.99842 19.0207 6.59051 18.9932 6.25592C18.9657 5.90759 18.9033 5.58126 18.7457 5.27234C18.5045 4.7982 18.1194 4.41252 17.6457 4.17051C17.3358 4.01284 17.0095 3.95051 16.6612 3.92301C16.3266 3.89551 15.9178 3.89551 15.4273 3.89551ZM17.6457 7.33301H4.38975C4.40075 6.98101 4.41725 6.65559 4.43559 6.38792C4.45025 6.20581 4.46523 6.0622 4.4805 5.95709C4.48845 5.90759 4.49395 5.87581 4.497 5.86176C4.60781 5.66147 4.77607 5.49896 4.98009 5.39517C5.06259 5.35301 5.18817 5.31451 5.45125 5.29342C5.72259 5.27142 6.07459 5.27051 6.59984 5.27051H15.3998C15.9242 5.27051 16.2771 5.27051 16.5475 5.29342C16.8115 5.31451 16.9371 5.35301 17.0196 5.39517C17.2359 5.50517 17.411 5.68026 17.521 5.89659C17.5632 5.97909 17.6017 6.10467 17.6228 6.36776C17.642 6.60609 17.6448 6.90767 17.6457 7.33301Z"
      fill="#6A717F"
    />
  </svg>
);

const TotalExpensesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3332 1.83301H9.1665C8.43716 1.83301 7.73769 2.12274 7.22196 2.63846C6.70623 3.15419 6.4165 3.85366 6.4165 4.58301V10.9997C6.4165 11.729 6.70623 12.4285 7.22196 12.9442C7.73769 13.4599 8.43716 13.7497 9.1665 13.7497H18.3332C19.0625 13.7497 19.762 13.4599 20.2777 12.9442C20.7934 12.4285 21.0832 11.729 21.0832 10.9997V4.58301C21.0832 3.85366 20.7934 3.15419 20.2777 2.63846C19.762 2.12274 19.0625 1.83301 18.3332 1.83301ZM19.2498 10.9997C19.2498 11.2428 19.1533 11.4759 18.9814 11.6479C18.8094 11.8198 18.5763 11.9163 18.3332 11.9163H9.1665C8.92339 11.9163 8.69023 11.8198 8.51832 11.6479C8.34641 11.4759 8.24984 11.2428 8.24984 10.9997V4.58301C8.24984 4.33989 8.34641 4.10674 8.51832 3.93483C8.69023 3.76292 8.92339 3.66634 9.1665 3.66634H18.3332C18.5763 3.66634 18.8094 3.76292 18.9814 3.93483C19.1533 4.10674 19.2498 4.33989 19.2498 4.58301V10.9997ZM16.0415 7.33301C15.7023 7.33503 15.3758 7.46236 15.1248 7.69051C14.9277 7.51135 14.6828 7.39329 14.4199 7.3507C14.1569 7.30811 13.8873 7.3428 13.6437 7.45058C13.4001 7.55835 13.193 7.73455 13.0477 7.95778C12.9024 8.181 12.825 8.44164 12.825 8.70801C12.825 8.97438 12.9024 9.23501 13.0477 9.45824C13.193 9.68146 13.4001 9.85767 13.6437 9.96544C13.8873 10.0732 14.1569 10.1079 14.4199 10.0653C14.6828 10.0227 14.9277 9.90467 15.1248 9.72551C15.2904 9.87596 15.4901 9.98375 15.7067 10.0395C15.9234 10.0953 16.1503 10.0974 16.3679 10.0456C16.5856 9.99386 16.7872 9.88976 16.9555 9.74239C17.1238 9.59502 17.2536 9.40882 17.3336 9.19993C17.4137 8.99105 17.4415 8.76579 17.4148 8.5437C17.3881 8.32162 17.3076 8.1094 17.1803 7.92547C17.053 7.74154 16.8827 7.59144 16.6843 7.4882C16.4858 7.38495 16.2652 7.33168 16.0415 7.33301ZM14.6665 15.583C14.4234 15.583 14.1902 15.6796 14.0183 15.8515C13.8464 16.0234 13.7498 16.2566 13.7498 16.4997V17.4163C13.7498 17.6595 13.6533 17.8926 13.4814 18.0645C13.3094 18.2364 13.0763 18.333 12.8332 18.333H3.6665C3.42339 18.333 3.19023 18.2364 3.01832 18.0645C2.84641 17.8926 2.74984 17.6595 2.74984 17.4163V13.7497H3.6665C3.90962 13.7497 4.14278 13.6531 4.31468 13.4812C4.48659 13.3093 4.58317 13.0761 4.58317 12.833C4.58317 12.5899 4.48659 12.3567 4.31468 12.1848C4.14278 12.0129 3.90962 11.9163 3.6665 11.9163H2.74984V10.9997C2.74984 10.7566 2.84641 10.5234 3.01832 10.3515C3.19023 10.1796 3.42339 10.083 3.6665 10.083C3.90962 10.083 4.14278 9.98643 4.31468 9.81452C4.48659 9.64261 4.58317 9.40946 4.58317 9.16634C4.58317 8.92323 4.48659 8.69007 4.31468 8.51816C4.14278 8.34625 3.90962 8.24967 3.6665 8.24967C2.93716 8.24967 2.23769 8.53941 1.72196 9.05513C1.20624 9.57086 0.916504 10.2703 0.916504 10.9997V17.4163C0.916504 18.1457 1.20624 18.8452 1.72196 19.3609C2.23769 19.8766 2.93716 20.1663 3.6665 20.1663H12.8332C13.5625 20.1663 14.262 19.8766 14.7777 19.3609C15.2934 18.8452 15.5832 18.1457 15.5832 17.4163V16.4997C15.5832 16.2566 15.4866 16.0234 15.3147 15.8515C15.1428 15.6796 14.9096 15.583 14.6665 15.583ZM5.49984 16.4997H6.4165C6.65962 16.4997 6.89278 16.4031 7.06468 16.2312C7.23659 16.0593 7.33317 15.8261 7.33317 15.583C7.33317 15.3399 7.23659 15.1067 7.06468 14.9348C6.89278 14.7629 6.65962 14.6663 6.4165 14.6663H5.49984C5.25672 14.6663 5.02356 14.7629 4.85166 14.9348C4.67975 15.1067 4.58317 15.3399 4.58317 15.583C4.58317 15.8261 4.67975 16.0593 4.85166 16.2312C5.02356 16.4031 5.25672 16.4997 5.49984 16.4997Z"
      fill="#6A717F"
    />
  </svg>
);

const TotalRevenueIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.8335 6.41634H18.3335M14.6668 1.83301L19.2502 6.41634L14.6668 10.9997M20.1668 15.583H3.66683M7.3335 10.9997L2.75016 15.583L7.3335 20.1663"
      stroke="#6A717F"
      strokeWidth="2"
    />
  </svg>
);

const ExportIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2083 7.5C16.9231 7.56133 18.3791 8.84744 18.3322 10.5703C18.3213 10.9711 18.1661 11.4665 17.8555 12.4574C17.1082 14.842 15.8522 16.912 13.0385 17.4087C12.5212 17.5 11.9392 17.5 10.7752 17.5H9.22474C8.06074 17.5 7.47874 17.5 6.96152 17.4087C4.14781 16.912 2.89181 14.842 2.14446 12.4574C1.83392 11.4665 1.67865 10.9711 1.66776 10.5703C1.62092 8.84744 3.07691 7.56133 4.79166 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M9.99999 11.6667V2.5M9.99999 11.6667C9.41649 11.6667 8.32626 10.0048 7.91666 9.58333M9.99999 11.6667C10.5835 11.6667 11.6737 10.0048 12.0833 9.58333"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FilterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83334 17.5V15"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 17.5V12.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83334 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83334 15C5.05677 15 4.66849 15 4.36219 14.8732C3.95382 14.704 3.62936 14.3795 3.4602 13.9712C3.33334 13.6648 3.33334 13.2766 3.33334 12.5C3.33334 11.7234 3.33334 11.3352 3.4602 11.0288C3.62936 10.6205 3.95382 10.296 4.36219 10.1268C4.66849 10 5.05677 10 5.83334 10C6.6099 10 6.99819 10 7.30448 10.1268C7.71285 10.296 8.03731 10.6205 8.20647 11.0288C8.33334 11.3352 8.33334 11.7234 8.33334 12.5C8.33334 13.2766 8.33334 13.6648 8.20647 13.9712C8.03731 14.3795 7.71285 14.704 7.30448 14.8732C6.99819 15 6.6099 15 5.83334 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.1667 10C13.3901 10 13.0018 10 12.6955 9.87317C12.2872 9.704 11.9627 9.3795 11.7935 8.97117C11.6667 8.66483 11.6667 8.27657 11.6667 7.5C11.6667 6.72343 11.6667 6.33515 11.7935 6.02886C11.9627 5.62048 12.2872 5.29602 12.6955 5.12687C13.0018 5 13.3901 5 14.1667 5C14.9432 5 15.3315 5 15.6378 5.12687C16.0462 5.29602 16.3707 5.62048 16.5398 6.02886C16.6667 6.33515 16.6667 6.72343 16.6667 7.5C16.6667 8.27657 16.6667 8.66483 16.5398 8.97117C16.3707 9.3795 16.0462 9.704 15.6378 9.87317C15.3315 10 14.9432 10 14.1667 10Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1667 16.375L7 12M7 12L11.1667 7.625M7 12H17"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8333 16.375L17 12M17 12L12.8333 7.625M17 12H7"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowFallIcon = ({ color = "#01891C" }: { color?: string }) => (
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
      fill={color}
    />
  </svg>
);

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
}

const StatCard = ({
  icon,
  title,
  value,
  change,
  isPositive,
  period,
}: StatCardProps) => (
  <div className="flex flex-col items-start gap-2.5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
    <div className="flex flex-col items-start justify-center gap-4 self-stretch">
      <div className="flex items-center gap-2">
        {icon}
        <div className="font-sans text-sm font-normal leading-5 text-[#6A717F]">
          {title}
        </div>
      </div>
      <div className="flex h-5 items-start justify-between self-stretch">
        <div className="font-sans text-2xl font-bold leading-5 text-black">
          {value}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start justify-center rounded-xl">
            <div className="self-stretch font-sans text-xs font-normal leading-4 text-black">
              {change}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg">
            <ArrowFallIcon color={isPositive ? "#01891C" : "#FF0000"} />
          </div>
        </div>
      </div>
    </div>
    <div className="font-sans text-xs font-normal leading-normal text-[#6A717F]">
      {period}
    </div>
  </div>
);

type TransactionStatus = "complete" | "cancelled" | "pending";

interface Transaction {
  id: string;
  dateTime: string;
  amount: string;
  method: string;
  status: TransactionStatus;
}

const mockTransactions: Transaction[] = [
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "cancelled",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "pending",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "cancelled",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete",
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "cancelled",
  },
];

export default function Transactions() {
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>(
    [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<{
    id: string;
    date: string;
    time: string;
    amount: string;
    method: string;
    status: TransactionStatus;
  } | null>(null);

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case "complete":
        return "text-[#21C45D]";
      case "cancelled":
        return "text-[#EF4343]";
      case "pending":
        return "text-[#FBBD23]";
    }
  };

  const getStatusText = (status: TransactionStatus) => {
    switch (status) {
      case "complete":
        return "Complete";
      case "cancelled":
        return "Cancelled";
      case "pending":
        return "Pending";
    }
  };

  const toggleTransactionSelection = (transactionId: string) => {
    setSelectedTransactions((prev) =>
      prev.includes(transactionId)
        ? prev.filter((id) => id !== transactionId)
        : [...prev, transactionId],
    );
  };

  const toggleAllTransactions = () => {
    if (selectedTransactions.length === mockTransactions.length) {
      setSelectedTransactions([]);
    } else {
      setSelectedTransactions(mockTransactions.map((t) => t.id));
    }
  };

  const handleViewDetails = (transaction: Transaction) => {
    const [date, time] = transaction.dateTime.split(" & ");
    setSelectedTransaction({
      id: "#654321DB",
      date: "23rd Aug, 2025",
      time: "09:00 PM",
      amount: "$564.66",
      method: transaction.method,
      status: transaction.status,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<TotalTransactionIcon />}
          title="Total Transaction"
          value="6,876"
          change="+ 0.03%"
          isPositive={true}
          period="Last 30 days"
        />
        <StatCard
          icon={<TotalIncomeIcon />}
          title="Total Income"
          value="61,876"
          change="+ 0.03%"
          isPositive={true}
          period="Last 30 days"
        />
        <StatCard
          icon={<TotalExpensesIcon />}
          title="Total Expenses"
          value="42,876"
          change="+ 0.03%"
          isPositive={true}
          period="Last 30 days"
        />
        <StatCard
          icon={<TotalRevenueIcon />}
          title="Total Revenue"
          value="1,876"
          change="- 0.03%"
          isPositive={false}
          period="Last 30 days"
        />
      </div>

      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="space-y-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1">
              <button className="flex items-center justify-center gap-1 rounded-md bg-white px-3 py-1.5 font-sans text-[15px] font-normal leading-5 text-black">
                All order
                <span className="ml-1 font-sans text-sm font-bold leading-normal text-[#4EA674]">
                  (240)
                </span>
              </button>
              <button className="flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-base font-normal leading-5 text-[#4B5563]">
                Completed
              </button>
              <button className="flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-[15px] font-normal leading-5 text-[#4B5563]">
                Pending
              </button>
              <button className="flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-[15px] font-normal leading-5 text-[#4B5563]">
                Canceled
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <ExportIcon />
                Export
              </button>
              <div className="flex items-center">
                <button className="flex items-center gap-2.5 rounded-l-[10px] border border-[#DBDBDB] border-r-0 px-2.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565]">
                  Search by
                  <ChevronDown className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  placeholder="Search anything"
                  className="w-[200px] rounded-r-[10px] border border-[#DBDBDB] px-2.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565] placeholder:text-[#656565] focus:border-[#06888C] focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-3.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <FilterIcon />
                Filter by
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="rounded-md bg-[#D2EAE3]">
                  <th className="px-7 py-[17px] text-left">
                    <div className="flex items-center gap-2.5">
                      <Checkbox
                        checked={
                          selectedTransactions.length ===
                          mockTransactions.length
                        }
                        onCheckedChange={toggleAllTransactions}
                        className="h-4 w-4 rounded border-[#707070]"
                      />
                      <span className="font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                        Transaction ID
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-[17px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Date & Time
                  </th>
                  <th className="px-4 py-[17px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Amount
                  </th>
                  <th className="px-4 py-[17px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Method
                  </th>
                  <th className="px-4 py-[17px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Status
                  </th>
                  <th className="px-4 py-[17px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction, index) => (
                  <tr
                    key={`${transaction.id}-${index}`}
                    className="border-b border-[#D1D5DB]"
                  >
                    <td className="px-7 py-5">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          checked={selectedTransactions.includes(
                            transaction.id,
                          )}
                          onCheckedChange={() =>
                            toggleTransactionSelection(transaction.id)
                          }
                          className="h-4 w-4 rounded border-[#707070]"
                        />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {transaction.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {transaction.dateTime}
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/8f0fdbc45b316f25f25a06374f9d1b2a49e555b1?width=40"
                          alt="Payment method"
                          className="h-5 w-5"
                        />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {transaction.method}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center justify-start gap-2.5">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4"
                            cy="4"
                            r="4"
                            fill={
                              transaction.status === "complete"
                                ? "#21C45D"
                                : transaction.status === "cancelled"
                                  ? "#EF4343"
                                  : "#FBBD23"
                            }
                          />
                        </svg>
                        <span
                          className={cn(
                            "font-sans text-[15px] font-normal leading-normal",
                            getStatusColor(transaction.status),
                          )}
                        >
                          {getStatusText(transaction.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <button
                        onClick={() => handleViewDetails(transaction)}
                        className="text-center font-sans text-[15px] font-normal leading-normal text-[#06888C] hover:underline"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
              <ArrowLeftIcon />
              <span className="font-sans text-[15px] font-normal leading-normal text-black">
                Previous
              </span>
            </button>

            <div className="flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded bg-[#D2EAE3] font-sans text-[15px] font-bold leading-normal text-[#023337]">
                1
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337]">
                2
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337]">
                3
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337]">
                4
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337]">
                5
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-bold leading-normal text-[#023337]">
                .....
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337]">
                24
              </button>
            </div>

            <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
              <span className="font-sans text-[15px] font-normal leading-normal text-black">
                Next
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* <TransactionDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        transaction={selectedTransaction || undefined}
      /> */}
    </div>
  );
}
