import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { InvoiceStatCard } from "@/components/invoices/InvoiceStatCard";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const TotalInvoicesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7497 6.41667H8.24967M13.7497 10.0833H8.24967M13.7497 13.75H10.083M4.58301 2.75H17.4163V19.25L16.4703 18.4397C16.1381 18.1549 15.7149 17.9984 15.2773 17.9984C14.8397 17.9984 14.4165 18.1549 14.0843 18.4397L13.1383 19.25L12.1932 18.4397C11.8608 18.1547 11.4375 17.998 10.9997 17.998C10.5619 17.998 10.1385 18.1547 9.80617 18.4397L8.86109 19.25L7.91509 18.4397C7.58282 18.1549 7.15965 17.9984 6.72205 17.9984C6.28445 17.9984 5.86128 18.1549 5.52901 18.4397L4.58301 19.25V2.75Z"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PendingInvoicesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5833 8.25H6.41667V6.41667H15.5833V8.25ZM13.75 11.9167V15.2992L16.6742 16.9858L17.3617 15.7942L15.125 14.5017V11.9167H13.75ZM8.25 20.1667L9.96417 19.03C10.5628 19.6796 11.29 20.1976 12.0996 20.551C12.9091 20.9045 13.7833 21.0858 14.6667 21.0833C18.2142 21.0833 21.0833 18.2142 21.0833 14.6667C21.0833 12.9158 20.3867 11.33 19.25 10.175V2.75H2.75V20.1667L5.5 18.3333L8.25 20.1667ZM8.25 17.9667L5.5 16.1333L4.58333 16.7383V4.58333H17.4167V8.86417C16.5825 8.47 15.6475 8.25 14.6667 8.25C12.9158 8.25 11.33 8.94667 10.175 10.0833H6.41667V11.9167H8.86417C8.47 12.7508 8.25 13.6858 8.25 14.6667C8.25 15.6933 8.48833 16.6558 8.91917 17.5175L8.25 17.9667ZM14.6667 19.25C12.1367 19.25 10.0833 17.1967 10.0833 14.6667C10.0833 12.1367 12.1367 10.0833 14.6667 10.0833C17.1967 10.0833 19.25 12.1367 19.25 14.6667C19.25 17.1967 17.1967 19.25 14.6667 19.25Z"
      fill="#6A717F"
    />
  </svg>
);

const PaidInvoicesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 18.3333L12.1917 19.1217C12.0083 18.59 11.9167 18.0125 11.9167 17.4167C11.9167 17.1967 11.9167 16.9583 11.9533 16.7658L11 16.1333L8.25 17.9667L5.5 16.1333L4.58333 16.7383V4.58333H17.4167V11.9167C18.0583 11.9167 18.6725 12.0267 19.25 12.2283V2.75H2.75V20.1667L5.5 18.3333L8.25 20.1667L11 18.3333ZM15.5833 8.25V6.41667H6.41667V8.25H15.5833ZM13.75 11.9167V10.0833H6.41667V11.9167H13.75ZM14.2083 17.4167L16.7292 20.1667L21.0833 15.7942L20.02 14.5017L16.7292 17.7925L15.2717 16.335L14.2083 17.4167Z"
      fill="#6A717F"
    />
  </svg>
);

const InactiveInvoicesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 12.2283C18.6725 12.0267 18.0583 11.9167 17.4167 11.9167V4.58333H4.58333V16.7383L5.5 16.1333L8.25 17.9667L11 16.1333L11.9533 16.7658C11.9167 16.9583 11.9167 17.1967 11.9167 17.4167C11.9167 18.0125 12.0083 18.59 12.1917 19.1217L11 18.3333L8.25 20.1667L5.5 18.3333L2.75 20.1667V2.75H19.25V12.2283ZM15.5833 8.25V6.41667H6.41667V8.25H15.5833ZM13.75 11.9167V10.0833H6.41667V11.9167H13.75ZM13.75 16.5V18.3333H21.0833V16.5H13.75Z"
      fill="#6A717F"
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
      d="M15.2087 7.5C16.9234 7.56133 18.3794 8.84744 18.3326 10.5703C18.3217 10.9711 18.1664 11.4665 17.8558 12.4574C17.1085 14.842 15.8525 16.912 13.0388 17.4087C12.5216 17.5 11.9396 17.5 10.7756 17.5H9.22508C8.06108 17.5 7.47908 17.5 6.96186 17.4087C4.14815 16.912 2.89214 14.842 2.14479 12.4574C1.83426 11.4665 1.67898 10.9711 1.66809 10.5703C1.62126 8.84744 3.07724 7.56133 4.792 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M10.0003 11.6667V2.5M10.0003 11.6667C9.41683 11.6667 8.3266 10.0048 7.91699 9.58333M10.0003 11.6667C10.5838 11.6667 11.6741 10.0048 12.0837 9.58333"
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
      d="M5.83301 17.5V15"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.167 17.5V12.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.167 5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83301 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83301 15C5.05644 15 4.66816 15 4.36187 14.8732C3.95349 14.704 3.62903 14.3795 3.45987 13.9712C3.33301 13.6648 3.33301 13.2766 3.33301 12.5C3.33301 11.7234 3.33301 11.3352 3.45987 11.0288C3.62903 10.6205 3.95349 10.296 4.36187 10.1268C4.66816 10 5.05644 10 5.83301 10C6.60957 10 6.99786 10 7.30415 10.1268C7.71252 10.296 8.03698 10.6205 8.20614 11.0288C8.33301 11.3352 8.33301 11.7234 8.33301 12.5C8.33301 13.2766 8.33301 13.6648 8.20614 13.9712C8.03698 14.3795 7.71252 14.704 7.30415 14.8732C6.99786 15 6.60957 15 5.83301 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.167 10C13.3904 10 13.0022 10 12.6958 9.87317C12.2875 9.704 11.963 9.3795 11.7938 8.97117C11.667 8.66483 11.667 8.27657 11.667 7.5C11.667 6.72343 11.667 6.33515 11.7938 6.02886C11.963 5.62048 12.2875 5.29602 12.6958 5.12687C13.0022 5 13.3904 5 14.167 5C14.9436 5 15.3318 5 15.6382 5.12687C16.0465 5.29602 16.371 5.62048 16.5402 6.02886C16.667 6.33515 16.667 6.72343 16.667 7.5C16.667 8.27657 16.667 8.66483 16.5402 8.97117C16.371 9.3795 16.0465 9.704 15.6382 9.87317C15.3318 10 14.9436 10 14.167 10Z"
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

const CreditCardIcon = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/2d953ed78d8629811a2176be28d773fb5e11f0ca?width=40"
    alt="Credit Card"
    className="h-5 w-5"
  />
);

type InvoiceStatus = "complete" | "pending" | "cancelled";

interface Invoice {
  id: string;
  billingName: string;
  orderDate: string;
  method: string;
  total: string;
  status: InvoiceStatus;
}

const mockInvoices: Invoice[] = [
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
  {
    id: "#543214BB",
    billingName: "Damilola Kingsley",
    orderDate: "22nd Aug, 2025",
    method: "EBT",
    total: "$147.44",
    status: "complete",
  },
];

export default function Invoices() {
  const navigate = useNavigate();
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case "complete":
        return "text-[#21C45D]";
      case "pending":
        return "text-[#EE9C03]";
      case "cancelled":
        return "text-[#FF0000]";
    }
  };

  const getStatusText = (status: InvoiceStatus) => {
    switch (status) {
      case "complete":
        return "Complete";
      case "pending":
        return "Pending";
      case "cancelled":
        return "Cancelled";
    }
  };

  const toggleInvoiceSelection = (invoiceId: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(invoiceId)
        ? prev.filter((id) => id !== invoiceId)
        : [...prev, invoiceId],
    );
  };

  const toggleAllInvoices = () => {
    if (selectedInvoices.length === mockInvoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(mockInvoices.map((invoice) => invoice.id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <InvoiceStatCard
          icon={<TotalInvoicesIcon />}
          title="Total Invoices"
          value="2,876"
        />
        <InvoiceStatCard
          icon={<PendingInvoicesIcon />}
          title="Pending Invoices"
          value="676"
        />
        <InvoiceStatCard
          icon={<PaidInvoicesIcon />}
          title="Paid Invoices"
          value="1,116"
        />
        <InvoiceStatCard
          icon={<InactiveInvoicesIcon />}
          title="Inactive Invoices"
          value="186"
        />
      </div>

      {/* Invoices Table Section */}
      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="space-y-7">
          {/* Filters and Actions */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* All Invoices Tab */}
            <div className="inline-flex items-center gap-1 rounded-md bg-[#D2EAE3] px-3.5 py-2.5">
              <span className="font-lato text-[15px] font-medium leading-5 text-black">
                All Invoices
              </span>
              <span className="font-lato text-sm font-bold leading-normal text-[#4EA674]">
                (71)
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
                          selectedInvoices.length === mockInvoices.length
                        }
                        onCheckedChange={toggleAllInvoices}
                        className="h-4 w-4 rounded border-[#707070]"
                      />
                      <span className="font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                        Invoice ID
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Billing Name
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Order Date
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Method
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Total
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
                {mockInvoices.map((invoice, index) => (
                  <tr
                    key={`${invoice.id}-${index}`}
                    className="border-b border-[#D1D5DB]"
                  >
                    <td className="px-7 py-[19px]">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          checked={selectedInvoices.includes(invoice.id)}
                          onCheckedChange={() =>
                            toggleInvoiceSelection(invoice.id)
                          }
                          className="h-4 w-4 rounded border-[#707070]"
                        />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {invoice.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-[19px] font-sans text-[15px] font-normal leading-normal text-black">
                      {invoice.billingName}
                    </td>
                    <td className="px-4 py-[19px] font-sans text-[15px] font-normal leading-normal text-black">
                      {invoice.orderDate}
                    </td>
                    <td className="px-4 py-[19px]">
                      <div className="flex items-center gap-2.5">
                        <CreditCardIcon />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {invoice.method}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-[19px] font-sans text-[15px] font-normal leading-normal text-black">
                      {invoice.total}
                    </td>
                    <td className="px-4 py-[19px]">
                      <div className="flex items-center justify-center gap-2.5">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="#21C45D" />
                        </svg>
                        <span
                          className={cn(
                            "font-sans text-[15px] font-normal leading-normal",
                            getStatusColor(invoice.status),
                          )}
                        >
                          {getStatusText(invoice.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-[19px]">
                      <button
                        onClick={() =>
                          navigate(`/invoices/${invoice.id.replace("#", "")}`)
                        }
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
