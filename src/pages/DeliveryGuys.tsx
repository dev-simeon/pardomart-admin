import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DeliveryGuysStatCard } from "@/components/delivery/DeliveryGuysStatCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TotalDeliveryGuysIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="8.24723"
      cy="6.41667"
      rx="3.66667"
      ry="3.66667"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6694 2.86816C16.2919 3.28357 17.4266 4.74549 17.4266 6.42025C17.4266 8.09501 16.2919 9.55693 14.6694 9.97233"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.25 19.2502V17.4169C19.2404 15.7527 18.1113 14.3037 16.5 13.8877"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewDeliveryGuysIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8125 11V6.1875M15.8125 6.1875V5.5M15.8125 6.1875C15.8125 6.875 18.5625 9.625 18.5625 10.3125M18.5625 10.3125V5.5M18.5625 10.3125V11M3.4375 19.25V18.5625C3.4375 17.1038 4.01696 15.7049 5.04841 14.6734C6.07986 13.642 7.47881 13.0625 8.9375 13.0625H10.3125C11.7712 13.0625 13.1701 13.642 14.2016 14.6734C15.233 15.7049 15.8125 17.1038 15.8125 18.5625V19.25M13.0625 6.875C13.0625 7.78668 12.7003 8.66102 12.0557 9.30568C11.411 9.95034 10.5367 10.3125 9.625 10.3125C8.71332 10.3125 7.83898 9.95034 7.19432 9.30568C6.54966 8.66102 6.1875 7.78668 6.1875 6.875C6.1875 5.96332 6.54966 5.08898 7.19432 4.44432C7.83898 3.79966 8.71332 3.4375 9.625 3.4375C10.5367 3.4375 11.411 3.79966 12.0557 4.44432C12.7003 5.08898 13.0625 5.96332 13.0625 6.875Z"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const TotalDeliveryIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5833 3.66699H6.41659C5.40406 3.66699 4.58325 4.4878 4.58325 5.50033V17.417C4.58325 18.4295 5.40406 19.2503 6.41659 19.2503H15.5833C16.5958 19.2503 17.4166 18.4295 17.4166 17.417V5.50033C17.4166 4.4878 16.5958 3.66699 15.5833 3.66699Z"
      stroke="#6A717F"
      strokeWidth="2"
    />
    <path
      d="M8.25 8.25H13.75M8.25 11.9167H13.75M8.25 15.5833H11.9167"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TotalReturnsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1421_2732)">
      <path
        d="M20.1667 15.5837H1.83341C1.5903 15.5837 1.35714 15.6802 1.18523 15.8521C1.01333 16.0241 0.916748 16.2572 0.916748 16.5003C0.916748 16.7434 1.01333 16.9766 1.18523 17.1485C1.35714 17.3204 1.5903 17.417 1.83341 17.417H20.1667C20.4099 17.417 20.643 17.3204 20.8149 17.1485C20.9868 16.9766 21.0834 16.7434 21.0834 16.5003C21.0834 16.2572 20.9868 16.0241 20.8149 15.8521C20.643 15.6802 20.4099 15.5837 20.1667 15.5837ZM20.1667 19.2503H1.83341C1.5903 19.2503 1.35714 19.3469 1.18523 19.5188C1.01333 19.6907 0.916748 19.9239 0.916748 20.167C0.916748 20.4101 1.01333 20.6433 1.18523 20.8152C1.35714 20.9871 1.5903 21.0837 1.83341 21.0837H20.1667C20.4099 21.0837 20.643 20.9871 20.8149 20.8152C20.9868 20.6433 21.0834 20.4101 21.0834 20.167C21.0834 19.9239 20.9868 19.6907 20.8149 19.5188C20.643 19.3469 20.4099 19.2503 20.1667 19.2503ZM5.50008 6.41699C5.31878 6.41699 5.14155 6.47075 4.99081 6.57148C4.84006 6.6722 4.72257 6.81537 4.65319 6.98287C4.58381 7.15036 4.56566 7.33468 4.60103 7.51249C4.6364 7.69031 4.7237 7.85364 4.8519 7.98184C4.9801 8.11004 5.14343 8.19734 5.32125 8.23271C5.49906 8.26808 5.68338 8.24993 5.85087 8.18055C6.01837 8.11117 6.16154 7.99368 6.26226 7.84293C6.36299 7.69219 6.41675 7.51496 6.41675 7.33366C6.41675 7.09054 6.32017 6.85739 6.14826 6.68548C5.97635 6.51357 5.7432 6.41699 5.50008 6.41699ZM18.3334 0.916992H3.66675C2.9374 0.916992 2.23793 1.20672 1.7222 1.72245C1.20648 2.23817 0.916748 2.93765 0.916748 3.66699V11.0003C0.916748 11.7297 1.20648 12.4291 1.7222 12.9449C2.23793 13.4606 2.9374 13.7503 3.66675 13.7503H18.3334C19.0628 13.7503 19.7622 13.4606 20.278 12.9449C20.7937 12.4291 21.0834 11.7297 21.0834 11.0003V3.66699C21.0834 2.93765 20.7937 2.23817 20.278 1.72245C19.7622 1.20672 19.0628 0.916992 18.3334 0.916992ZM19.2501 11.0003C19.2501 11.2434 19.1535 11.4766 18.9816 11.6485C18.8097 11.8204 18.5765 11.917 18.3334 11.917H3.66675C3.42363 11.917 3.19047 11.8204 3.01857 11.6485C2.84666 11.4766 2.75008 11.2434 2.75008 11.0003V3.66699C2.75008 3.42388 2.84666 3.19072 3.01857 3.01881C3.19047 2.8469 3.42363 2.75033 3.66675 2.75033H18.3334C18.5765 2.75033 18.8097 2.8469 18.9816 3.01881C19.1535 3.19072 19.2501 3.42388 19.2501 3.66699V11.0003ZM11.0001 4.58366C10.4562 4.58366 9.9245 4.74494 9.47226 5.04712C9.02003 5.34929 8.66755 5.77878 8.45941 6.28128C8.25127 6.78378 8.19681 7.33671 8.30292 7.87016C8.40903 8.4036 8.67094 8.89361 9.05554 9.2782C9.44013 9.6628 9.93013 9.92471 10.4636 10.0308C10.997 10.1369 11.55 10.0825 12.0525 9.87433C12.555 9.66619 12.9844 9.31371 13.2866 8.86148C13.5888 8.40924 13.7501 7.87756 13.7501 7.33366C13.7501 6.60431 13.4604 5.90484 12.9446 5.38912C12.4289 4.87339 11.7294 4.58366 11.0001 4.58366ZM11.0001 8.25033C10.8188 8.25033 10.6416 8.19656 10.4908 8.09584C10.3401 7.99511 10.2226 7.85195 10.1532 7.68445C10.0838 7.51695 10.0657 7.33264 10.101 7.15483C10.1364 6.97701 10.2237 6.81368 10.3519 6.68548C10.4801 6.55728 10.6434 6.46997 10.8212 6.43461C10.9991 6.39924 11.1834 6.41739 11.3509 6.48677C11.5184 6.55615 11.6615 6.67364 11.7623 6.82439C11.863 6.97513 11.9167 7.15236 11.9167 7.33366C11.9167 7.57677 11.8202 7.80993 11.6483 7.98184C11.4764 8.15375 11.2432 8.25033 11.0001 8.25033ZM16.5001 6.41699C16.3188 6.41699 16.1416 6.47075 15.9908 6.57148C15.8401 6.6722 15.7226 6.81537 15.6532 6.98287C15.5838 7.15036 15.5657 7.33468 15.601 7.51249C15.6364 7.69031 15.7237 7.85364 15.8519 7.98184C15.9801 8.11004 16.1434 8.19734 16.3212 8.23271C16.4991 8.26808 16.6834 8.24993 16.8509 8.18055C17.0184 8.11117 17.1615 7.99368 17.2623 7.84293C17.363 7.69219 17.4167 7.51496 17.4167 7.33366C17.4167 7.09054 17.3202 6.85739 17.1483 6.68548C16.9764 6.51357 16.7432 6.41699 16.5001 6.41699Z"
        fill="#6A717F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1421_2732">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
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
      d="M15.2084 7.5C16.9232 7.56133 18.3792 8.84744 18.3323 10.5703C18.3214 10.9711 18.1662 11.4665 17.8556 12.4574C17.1082 14.842 15.8522 16.912 13.0386 17.4087C12.5213 17.5 11.9393 17.5 10.7753 17.5H9.22483C8.06083 17.5 7.47883 17.5 6.96161 17.4087C4.14791 16.912 2.8919 14.842 2.14455 12.4574C1.83401 11.4665 1.67874 10.9711 1.66785 10.5703C1.62101 8.84744 3.077 7.56133 4.79176 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M10.0001 11.6667V2.5M10.0001 11.6667C9.41658 11.6667 8.32636 10.0048 7.91675 9.58333M10.0001 11.6667C10.5836 11.6667 11.6738 10.0048 12.0834 9.58333"
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
      d="M5.83325 17.5V15"
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
      d="M5.83325 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83325 15C5.05669 15 4.6684 15 4.36211 14.8732C3.95374 14.704 3.62928 14.3795 3.46012 13.9712C3.33325 13.6648 3.33325 13.2766 3.33325 12.5C3.33325 11.7234 3.33325 11.3352 3.46012 11.0288C3.62928 10.6205 3.95374 10.296 4.36211 10.1268C4.6684 10 5.05669 10 5.83325 10C6.60982 10 6.9981 10 7.30439 10.1268C7.71277 10.296 8.03723 10.6205 8.20639 11.0288C8.33325 11.3352 8.33325 11.7234 8.33325 12.5C8.33325 13.2766 8.33325 13.6648 8.20639 13.9712C8.03723 14.3795 7.71277 14.704 7.30439 14.8732C6.9981 15 6.60982 15 5.83325 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.1667 10C13.3902 10 13.0019 10 12.6956 9.87317C12.2872 9.704 11.9627 9.3795 11.7936 8.97117C11.6667 8.66483 11.6667 8.27657 11.6667 7.5C11.6667 6.72343 11.6667 6.33515 11.7936 6.02886C11.9627 5.62048 12.2872 5.29602 12.6956 5.12687C13.0019 5 13.3902 5 14.1667 5C14.9433 5 15.3316 5 15.6379 5.12687C16.0462 5.29602 16.3707 5.62048 16.5399 6.02886C16.6667 6.33515 16.6667 6.72343 16.6667 7.5C16.6667 8.27657 16.6667 8.66483 16.5399 8.97117C16.3707 9.3795 16.0462 9.704 15.6379 9.87317C15.3316 10 14.9433 10 14.1667 10Z"
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

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.44444 7.30577H13.5556M6.44444 10.8613H11.7778M15.3333 2.86133C16.0406 2.86133 16.7189 3.14228 17.219 3.64238C17.719 4.14247 18 4.82075 18 5.52799V12.6391C18 13.3463 17.719 14.0246 17.219 14.5247C16.7189 15.0248 16.0406 15.3058 15.3333 15.3058H10.8889L6.44444 17.9724V15.3058H4.66667C3.95942 15.3058 3.28115 15.0248 2.78105 14.5247C2.28095 14.0246 2 13.3463 2 12.6391V5.52799C2 4.82075 2.28095 4.14247 2.78105 3.64238C3.28115 3.14228 3.95942 2.86133 4.66667 2.86133H15.3333Z"
      stroke="#6A717F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2833 7.50043L11.995 15.0004M8.005 15.0004L7.71667 7.50043M16.0233 4.82543C16.3083 4.86877 16.5917 4.9146 16.875 4.96377M16.0233 4.82543L15.1333 16.3946C15.097 16.8656 14.8842 17.3056 14.5375 17.6265C14.1908 17.9474 13.7358 18.1256 13.2633 18.1254H6.73667C6.26425 18.1256 5.80919 17.9474 5.46248 17.6265C5.11578 17.3056 4.90299 16.8656 4.86667 16.3946L3.97667 4.82543M16.0233 4.82543C15.0616 4.68003 14.0948 4.56968 13.125 4.4946M3.97667 4.82543C3.69167 4.86793 3.40833 4.91377 3.125 4.96293M3.97667 4.82543C4.93844 4.68003 5.9052 4.56968 6.875 4.4946M13.125 4.4946V3.73127C13.125 2.74793 12.3667 1.92793 11.3833 1.8971C10.4613 1.86763 9.53865 1.86763 8.61667 1.8971C7.63333 1.92793 6.875 2.74877 6.875 3.73127V4.4946M13.125 4.4946C11.0448 4.33383 8.95523 4.33383 6.875 4.4946"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type DeliveryGuyStatus = "active" | "inactive";

interface DeliveryGuy {
  id: string;
  name: string;
  email: string;
  avatar: string;
  totalDelivery: number;
  totalReturns: number;
  status: DeliveryGuyStatus;
}

const mockDeliveryGuys: DeliveryGuy[] = [
  {
    id: "1",
    name: "Kelvin B. James",
    email: "jameskelvin12@hotmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    totalDelivery: 55,
    totalReturns: 12,
    status: "active",
  },
  {
    id: "2",
    name: "Kelvin B. James",
    email: "jameskelvin12@hotmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    totalDelivery: 55,
    totalReturns: 12,
    status: "active",
  },
  {
    id: "3",
    name: "Kelvin B. James",
    email: "jameskelvin12@hotmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    totalDelivery: 55,
    totalReturns: 12,
    status: "active",
  },
  {
    id: "4",
    name: "Sandra Elizabeth",
    email: "Elizabethsandra@gmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a2755b1c4acafe0d821495bf7f5ca1c10ffe2a86?width=48",
    totalDelivery: 10,
    totalReturns: 2,
    status: "inactive",
  },
  {
    id: "5",
    name: "Sandra Elizabeth",
    email: "Elizabethsandra@gmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a2755b1c4acafe0d821495bf7f5ca1c10ffe2a86?width=48",
    totalDelivery: 10,
    totalReturns: 2,
    status: "inactive",
  },
  {
    id: "6",
    name: "Kelvin B. James",
    email: "jameskelvin12@hotmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    totalDelivery: 55,
    totalReturns: 12,
    status: "active",
  },
  {
    id: "7",
    name: "Sandra Elizabeth",
    email: "Elizabethsandra@gmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a2755b1c4acafe0d821495bf7f5ca1c10ffe2a86?width=48",
    totalDelivery: 10,
    totalReturns: 2,
    status: "inactive",
  },
  {
    id: "8",
    name: "Kelvin B. James",
    email: "jameskelvin12@hotmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    totalDelivery: 55,
    totalReturns: 12,
    status: "active",
  },
  {
    id: "9",
    name: "Sandra Elizabeth",
    email: "Elizabethsandra@gmail.com",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a2755b1c4acafe0d821495bf7f5ca1c10ffe2a86?width=48",
    totalDelivery: 10,
    totalReturns: 2,
    status: "inactive",
  },
];

export default function DeliveryGuys() {
  const [selectedDeliveryGuys, setSelectedDeliveryGuys] = useState<string[]>([]);

  const toggleDeliveryGuySelection = (deliveryGuyId: string) => {
    setSelectedDeliveryGuys((prev) =>
      prev.includes(deliveryGuyId)
        ? prev.filter((id) => id !== deliveryGuyId)
        : [...prev, deliveryGuyId],
    );
  };

  const toggleAllDeliveryGuys = () => {
    if (selectedDeliveryGuys.length === mockDeliveryGuys.length) {
      setSelectedDeliveryGuys([]);
    } else {
      setSelectedDeliveryGuys(mockDeliveryGuys.map((guy) => guy.id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DeliveryGuysStatCard
          icon={<TotalDeliveryGuysIcon />}
          title="Total Delivery guys"
          value="2,876"
        />
        <DeliveryGuysStatCard
          icon={<NewDeliveryGuysIcon />}
          title="New Delivery guys"
          value="676"
        />
        <DeliveryGuysStatCard
          icon={<TotalDeliveryIcon />}
          title="Total Delivery"
          value="1,116"
        />
        <DeliveryGuysStatCard
          icon={<TotalReturnsIcon />}
          title="Total Returns"
          value="186"
        />
      </div>

      {/* Delivery Guys Table Section */}
      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="space-y-7">
          {/* Filters and Actions */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* All Delivery guys Tab */}
            <div className="inline-flex items-center gap-1 rounded-md bg-[#D2EAE3] px-3.5 py-2.5">
              <span className="font-lato text-[15px] font-medium leading-5 text-black">
                All Delivery guys
              </span>
              <span className="font-lato text-sm font-bold leading-normal text-[#4EA674]">
                (1890)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <ExportIcon />
                Export
              </button>
              <div className="flex items-center">
                <button className="flex items-center gap-2.5 rounded-l-[10px] border border-[#DBDBDB] border-r-0 px-2.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565]">
                  Search by
                  <ChevronDown className="h-5 w-5 text-[#010101]" />
                </button>
                <input
                  type="text"
                  placeholder="Search anything"
                  className="h-10 w-[200px] rounded-r-[10px] border border-[#DBDBDB] px-2.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565] placeholder:text-[#656565] focus:border-[#06888C] focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-3.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <FilterIcon />
                Filter by
              </button>
            </div>
          </div>

          {/* Table Wrapper with horizontal scroll */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="rounded-md bg-[#D2EAE3]">
                  <th className="px-7 py-[13px] text-left">
                    <div className="flex items-center gap-2.5">
                      <Checkbox
                        checked={
                          selectedDeliveryGuys.length === mockDeliveryGuys.length
                        }
                        onCheckedChange={toggleAllDeliveryGuys}
                        className="h-4 w-4 rounded border-[#707070]"
                      />
                      <span className="font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                        Delivery guys ID
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Email Address
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Total Delivery
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Total Returns
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Status
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockDeliveryGuys.map((guy) => (
                  <tr
                    key={guy.id}
                    className="border-b border-[#D1D5DB]"
                  >
                    <td className="px-7 py-[17px]">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          checked={selectedDeliveryGuys.includes(guy.id)}
                          onCheckedChange={() =>
                            toggleDeliveryGuySelection(guy.id)
                          }
                          className="h-4 w-4 rounded border-[#707070]"
                        />
                        <div className="flex items-center gap-1.5">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={guy.avatar} alt={guy.name} />
                            <AvatarFallback>
                              {guy.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-sans text-[15px] font-normal leading-normal text-[#131523]">
                            {guy.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-[17px] font-sans text-[15px] font-normal leading-normal text-black">
                      {guy.email}
                    </td>
                    <td className="px-4 py-[17px] font-sans text-[15px] font-normal leading-normal text-black">
                      {guy.totalDelivery}
                    </td>
                    <td className="px-4 py-[17px] font-sans text-[15px] font-normal leading-normal text-black">
                      {guy.totalReturns}
                    </td>
                    <td className="px-4 py-[17px]">
                      {guy.status === "active" ? (
                        <div className="inline-flex h-6 items-center justify-center rounded bg-[#C4F8E2] px-4">
                          <span className="text-center font-sans text-sm font-normal leading-5 text-[#06A561]">
                            Active
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex h-6 items-center justify-center rounded bg-[#E6E9F4] px-2.5">
                          <span className="text-center font-sans text-sm font-normal leading-5 text-[#5A607F]">
                            Inactive
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-[17px]">
                      <div className="flex items-center gap-2">
                        <button className="transition-opacity hover:opacity-70">
                          <MessageIcon />
                        </button>
                        <button className="transition-opacity hover:opacity-70">
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
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
    </div>
  );
}
