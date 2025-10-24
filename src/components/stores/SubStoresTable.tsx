import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface SubStore {
  id: string;
  address: string;
  email: string;
  orders: number;
  deliveryAvailable: {
    pickup: boolean;
    deliveryPerson: boolean;
  };
  image: string;
}

const subStoresData: SubStore[] = [
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 454,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 200,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 23,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 600,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 234,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "Jewel Osco",
    address: "3454 South Union Avenue, Il Chicago",
    email: "Jewelosco12@gmail.com",
    orders: 333,
    deliveryAvailable: {
      pickup: true,
      deliveryPerson: true,
    },
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
];

const ExportIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2083 7.5C16.923 7.56133 18.379 8.84744 18.3322 10.5703C18.3213 10.9711 18.166 11.4665 17.8555 12.4574C17.1081 14.842 15.8521 16.912 13.0385 17.4087C12.5212 17.5 11.9392 17.5 10.7752 17.5H9.22471C8.06071 17.5 7.47871 17.5 6.96149 17.4087C4.14778 16.912 2.89178 14.842 2.14443 12.4574C1.83389 11.4665 1.67862 10.9711 1.66773 10.5703C1.62089 8.84744 3.07688 7.56133 4.79163 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M9.99996 11.6667V2.5M9.99996 11.6667C9.41646 11.6667 8.32623 10.0048 7.91663 9.58333M9.99996 11.6667C10.5835 11.6667 11.6737 10.0048 12.0833 9.58333"
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
      d="M5.83337 17.5V15"
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
      d="M5.83337 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83337 15C5.0568 15 4.66852 15 4.36222 14.8732C3.95385 14.704 3.62939 14.3795 3.46024 13.9712C3.33337 13.6648 3.33337 13.2766 3.33337 12.5C3.33337 11.7234 3.33337 11.3352 3.46024 11.0288C3.62939 10.6205 3.95385 10.296 4.36222 10.1268C4.66852 10 5.0568 10 5.83337 10C6.60993 10 6.99822 10 7.30451 10.1268C7.71288 10.296 8.03735 10.6205 8.2065 11.0288C8.33337 11.3352 8.33337 11.7234 8.33337 12.5C8.33337 13.2766 8.33337 13.6648 8.2065 13.9712C8.03735 14.3795 7.71288 14.704 7.30451 14.8732C6.99822 15 6.60993 15 5.83337 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.1667 10C13.3901 10 13.0018 10 12.6955 9.87317C12.2871 9.704 11.9627 9.3795 11.7935 8.97117C11.6667 8.66483 11.6667 8.27657 11.6667 7.5C11.6667 6.72343 11.6667 6.33515 11.7935 6.02886C11.9627 5.62048 12.2871 5.29602 12.6955 5.12687C13.0018 5 13.3901 5 14.1667 5C14.9432 5 15.3315 5 15.6378 5.12687C16.0462 5.29602 16.3706 5.62048 16.5398 6.02886C16.6667 6.33515 16.6667 6.72343 16.6667 7.5C16.6667 8.27657 16.6667 8.66483 16.5398 8.97117C16.3706 9.3795 16.0462 9.704 15.6378 9.87317C15.3315 10 14.9432 10 14.1667 10Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5"
      stroke="#010101"
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

const TrashIcon = () => (
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

const PickupIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.625 2.33366C2.625 1.68616 3.14417 1.16699 3.79167 1.16699C4.43917 1.16699 4.95833 1.68616 4.95833 2.33366C4.95833 2.98116 4.43917 3.50033 3.79167 3.50033C3.14417 3.50033 2.625 2.98116 2.625 2.33366ZM5.83333 6.38783V5.25033C5.83333 4.60866 5.30833 4.08366 4.66667 4.08366H2.91667C2.275 4.08366 1.75 4.60866 1.75 5.25033V8.75033H2.91667V12.8337H4.95833V12.7695C4.235 12.0345 3.79167 11.0253 3.79167 9.91699C3.79167 8.41199 4.61417 7.09366 5.83333 6.38783ZM9.625 9.91699C9.625 10.8795 8.8375 11.667 7.875 11.667C6.9125 11.667 6.125 10.8795 6.125 9.91699C6.125 9.26949 6.48083 8.71533 7 8.41199V7.15199C5.82167 7.52533 4.95833 8.61616 4.95833 9.91699C4.95833 11.527 6.265 12.8337 7.875 12.8337C9.485 12.8337 10.7917 11.527 10.7917 9.91699H9.625ZM11.3983 8.16699H8.75V4.66699H7.58333V9.33366H10.7683L12.2092 11.4978L13.1775 10.8503L11.3983 8.16699Z"
      fill="#06888C"
    />
  </svg>
);

export function SubStoresTable() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white p-7">
      <div className="flex w-full flex-col items-start gap-[29px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1 rounded-md bg-[#D2EAE3] px-[14px] py-2.5">
            <span className="font-lato text-[15px] font-normal leading-5 text-black">
              All stores
            </span>
            <span className="font-lato text-[14px] font-bold leading-normal text-[#4EA674]">
              (7)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 transition-colors hover:bg-gray-50">
              <ExportIcon />
              <span className="font-sans text-[14px] font-normal text-[#06888C]">
                Export
              </span>
            </button>

            <div className="flex items-center">
              <div className="flex items-center gap-2.5 rounded-l-[10px] border border-r-0 border-[#DBDBDB] px-2.5 py-2.5">
                <span className="font-sans text-[14px] font-normal text-[#656565]">
                  Search by
                </span>
                <ArrowDownIcon />
              </div>
              <input
                type="text"
                placeholder="Search anything"
                className="h-10 w-[200px] rounded-r-[10px] border border-[#DBDBDB] px-2.5 py-2.5 font-sans text-[14px] text-[#656565] placeholder:text-[#656565] outline-none transition-colors focus:border-[#06888C]"
              />
            </div>

            <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[14px] py-2.5 transition-colors hover:bg-gray-50">
              <FilterIcon />
              <span className="font-sans text-[14px] font-normal text-[#06888C]">
                Filter by
              </span>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[1024px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="rounded-l-md bg-[#D2EAE3] pl-7 py-[17px] text-left">
                  <div className="flex items-center gap-2.5">
                    <Checkbox className="h-4 w-4 rounded border-[#707070]" />
                    <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                      Store ID
                    </span>
                  </div>
                </th>
                <th className="bg-[#D2EAE3] py-[17px] text-left">
                  <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                    Address
                  </span>
                </th>
                <th className="bg-[#D2EAE3] py-[17px] text-left">
                  <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                    Email Address
                  </span>
                </th>
                <th className="bg-[#D2EAE3] py-[17px] text-left">
                  <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                    Orders
                  </span>
                </th>
                <th className="bg-[#D2EAE3] py-[17px] text-left">
                  <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                    Delivery Available
                  </span>
                </th>
                <th className="rounded-r-md bg-[#D2EAE3] py-[17px] pr-7 text-left">
                  <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                    Action
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {subStoresData.map((store, index) => (
                <tr
                  key={index}
                  className="border-b border-[#D1D5DB] transition-colors hover:bg-gray-50"
                >
                  <td className="pl-7 py-[17px] min-w-[200px]">
                    <div className="flex items-center gap-[11px]">
                      <img
                        src={store.image}
                        alt={store.id}
                        className="h-[30px] w-[30px] rounded-2xl object-cover"
                      />
                      <span className="font-sans text-[15px] font-normal text-black">
                        {store.id}
                      </span>
                    </div>
                  </td>
                  <td className="py-[17px] w-[250px]">
                    <span className="font-sans text-[15px] font-normal text-black">
                      {store.address}
                    </span>
                  </td>
                  <td className="py-[17px] min-w-[200px]">
                    <span className="font-sans text-[15px] font-normal text-black">
                      {store.email}
                    </span>
                  </td>
                  <td className="py-[17px] min-w-[80px]">
                    <span className="font-sans text-[15px] font-normal text-black">
                      {store.orders}
                    </span>
                  </td>
                  <td className="py-[17px] min-w-[250px]">
                    <div className="flex items-center gap-1">
                      {store.deliveryAvailable.pickup && (
                        <div className="flex items-center gap-[6px] rounded-lg bg-[#E5FFEA] px-2.5 py-[6px]">
                          <PickupIcon />
                          <span className="font-sans text-[10px] font-semibold text-black">
                            Pick up
                          </span>
                        </div>
                      )}
                      {store.deliveryAvailable.deliveryPerson && (
                        <div className="flex items-center gap-[6px] rounded-lg bg-[rgba(255,221,161,0.5)] px-2.5 py-[6px]">
                          <img
                            src="/delivery-person.svg"
                            alt="Delivery Person"
                            className="w-4 h-4"
                          />
                          <span className="font-sans text-[10px] font-semibold text-black">
                            Delivery Person
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-[17px] pr-7">
                    <div className="flex items-center gap-2">
                      <button className="transition-opacity hover:opacity-70">
                        <MessageIcon />
                      </button>
                      <button className="transition-opacity hover:opacity-70">
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
