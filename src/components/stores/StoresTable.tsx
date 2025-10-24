import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Store {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateCreated: string;
  status: "Active" | "Inactive";
  image: string;
}

const storesData: Store[] = [
  {
    id: "10",
    name: "Kings store",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "07",
    name: "Jewel Osco",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/71dd8da5c1657c64604a217c2453898ecc67a2cd?width=48",
  },
  {
    id: "04",
    name: "Mill filk",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "07",
    name: "Dollar Tree",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "02",
    name: "Marianos",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "12",
    name: "ADHL",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "05",
    name: "Pep Stores",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "01",
    name: "Kingshire Store",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
  },
  {
    id: "03",
    name: "Casmegios",
    email: "kingsstore@gmail.com",
    phone: "+44 676 454 3338",
    dateCreated: "12th Aug, 2025",
    status: "Active",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b3e4dd59e5a9a81391d04004463b2ed36067b466?width=60",
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

export function StoresTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white p-7">
      <div className="flex w-full flex-col items-start gap-[29px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1 rounded-md bg-[#D2EAE3] px-[14px] py-2.5">
            <span className="font-lato text-[15px] font-normal leading-5 text-black">
              All stores
            </span>
            <span className="font-lato text-[14px] font-bold leading-normal text-[#4EA674]">
              (145)
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
          <div className="flex w-full flex-col items-center gap-[22px]">
            <div className="w-full">
              <table className="w-full min-w-[1024px] border-separate border-spacing-0">
                <thead>
                  <tr className="rounded-md bg-[#D2EAE3]">
                    <th className="rounded-l-md bg-[#D2EAE3] px-7 py-[17px] text-left">
                      <div className="flex items-center gap-2.5">
                        <Checkbox className="h-4 w-4 rounded border-[#707070]" />
                        <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                          Store ID
                        </span>
                      </div>
                    </th>
                    <th className="bg-[#D2EAE3] py-[17px] pl-6 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Stores
                      </span>
                    </th>
                    <th className="bg-[#D2EAE3] py-[17px] pl-8 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Email Address
                      </span>
                    </th>
                    <th className="bg-[#D2EAE3] py-[17px] pl-8 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Phone Number
                      </span>
                    </th>
                    <th className="bg-[#D2EAE3] py-[17px] pl-6 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Date Created
                      </span>
                    </th>
                    <th className="bg-[#D2EAE3] py-[17px] pl-6 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Status
                      </span>
                    </th>
                    <th className="rounded-r-md bg-[#D2EAE3] py-[17px] pl-6 text-left">
                      <span className="font-sans text-[15px] font-bold leading-5 text-[#023337]">
                        Action
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {storesData.map((store, index) => (
                    <tr
                      key={index}
                      onClick={() => navigate("/store-management/substore")}
                      className="border-b border-[#D1D5DB] transition-colors hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-7 py-[17px]">
                        <div className="flex items-center gap-[11px]">
                          <img
                            src={store.image}
                            alt={store.name}
                            className="h-[30px] w-[30px] rounded-2xl object-cover"
                          />
                          <span className="font-sans text-[15px] font-normal text-black">
                            {store.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-[17px] pl-6">
                        <div className="flex items-center gap-2.5">
                          <span className="font-sans text-[15px] font-normal text-black">
                            {store.id}
                          </span>
                        </div>
                      </td>

                      <td className="py-[17px] pl-8">
                        <span className="font-sans text-[15px] font-normal text-black">
                          {store.email}
                        </span>
                      </td>
                      <td className="py-[17px] pl-8">
                        <span className="font-sans text-[15px] font-normal text-black">
                          {store.phone}
                        </span>
                      </td>
                      <td className="py-[17px] pl-6">
                        <span className="font-sans text-[15px] font-normal text-black">
                          {store.dateCreated}
                        </span>
                      </td>
                      <td className="py-[17px] pl-6">
                        <div className="flex items-center gap-2.5">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <circle cx="4" cy="4" r="4" fill="#21C45D" />
                          </svg>
                          <span className="font-sans text-[15px] font-normal text-[#21C45D]">
                            {store.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-[17px] pl-6">
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

            <div className="flex w-full items-center justify-between">
              <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
                <ArrowLeftIcon />
                <span className="whitespace-nowrap font-sans text-[15px] font-normal text-black">
                  Previous
                </span>
              </button>

              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "flex h-9 min-w-[36px] whitespace-nowrap items-center justify-center rounded p-2.5 px-3 font-sans text-[15px] transition-colors",
                      currentPage === page
                        ? "bg-[#D2EAE3] font-bold text-[#023337]"
                        : "border border-[#D1D5DB] font-normal text-[#023337] hover:bg-[#D2EAE3]/50",
                    )}
                  >
                    {page}
                  </button>
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] p-2.5">
                  <span className="whitespace-nowrap font-sans text-[15px] font-bold text-[#023337]">
                    .....
                  </span>
                </div>
                <button
                  onClick={() => setCurrentPage(24)}
                  className={cn(
                    "flex h-9 min-w-[36px] whitespace-nowrap items-center justify-center rounded p-2.5 px-3 font-sans text-[15px] transition-colors",
                    currentPage === 24
                      ? "bg-[#D2EAE3] font-bold text-[#023337]"
                      : "border border-[#D1D5DB] font-normal text-[#023337] hover:bg-[#D2EAE3]/50",
                  )}
                >
                  24
                </button>
              </div>

              <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
                <span className="whitespace-nowrap font-sans text-[15px] font-normal text-black">
                  Next
                </span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
