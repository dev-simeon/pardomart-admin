import { useNavigate } from "react-router-dom";

const CheckCircleIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 52.5C32.9547 52.5 35.8806 51.918 38.6104 50.7873C41.3402 49.6566 43.8206 47.9992 45.9099 45.9099C47.9992 43.8206 49.6566 41.3402 50.7873 38.6104C51.918 35.8806 52.5 32.9547 52.5 30C52.5 27.0453 51.918 24.1194 50.7873 21.3896C49.6566 18.6598 47.9992 16.1794 45.9099 14.0901C43.8206 12.0008 41.3402 10.3434 38.6104 9.21271C35.8806 8.08198 32.9547 7.5 30 7.5C24.0326 7.5 18.3097 9.87053 14.0901 14.0901C9.87053 18.3097 7.5 24.0326 7.5 30C7.5 35.9674 9.87053 41.6903 14.0901 45.9099C18.3097 50.1295 24.0326 52.5 30 52.5ZM29.42 39.1L41.92 24.1L38.08 20.9L27.33 33.7975L21.7675 28.2325L18.2325 31.7675L25.7325 39.2675L27.6675 41.2025L29.42 39.1Z"
      fill="#21C45D"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.3871 0.209705L5.29289 0.292893L0.292893 5.29289C-0.0675907 5.65338 -0.0953203 6.22061 0.209705 6.6129L0.292893 6.70711L5.29289 11.7071C5.68342 12.0976 6.31658 12.0976 6.70711 11.7071C7.06759 11.3466 7.09532 10.7794 6.7903 10.3871L6.70711 10.2929L3.414 6.999L14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5L3.416 4.999L6.70711 1.70711C7.06759 1.34662 7.09532 0.779392 6.7903 0.387101L6.70711 0.292893C6.34662 -0.0675907 5.77939 -0.0953203 5.3871 0.209705Z"
      fill="#7E84A3"
    />
  </svg>
);

interface InvoiceItem {
  no: number;
  description: string;
  quantity: number;
  baseCost: string;
  tax: string;
  totalCost: string;
}

const invoiceItems: InvoiceItem[] = [
  {
    no: 1,
    description: "Celsius Life 500ml",
    quantity: 2,
    baseCost: "$147.44",
    tax: "$10",
    totalCost: "$157.44",
  },
  {
    no: 2,
    description: "Bread SHakes big",
    quantity: 2,
    baseCost: "$147.44",
    tax: "$10",
    totalCost: "$157.44",
  },
  {
    no: 3,
    description: "Celsius Life 200ml",
    quantity: 2,
    baseCost: "$147.44",
    tax: "$10",
    totalCost: "$157.44",
  },
  {
    no: 4,
    description: "Celsius Life 600ml",
    quantity: 2,
    baseCost: "$147.44",
    tax: "$10",
    totalCost: "$157.44",
  },
  {
    no: 5,
    description: "Celsius Life 100ml",
    quantity: 2,
    baseCost: "$147.44",
    tax: "$10",
    totalCost: "$157.44",
  },
];

export default function InvoiceDetails() {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-[11px] bg-white p-4 sm:p-6 md:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="mb-[38px] flex items-center gap-[45px]">
        <CheckCircleIcon />
        <div className="flex flex-1 flex-wrap items-start gap-x-[45px] gap-y-6 lg:flex-nowrap lg:gap-x-[213px]">
          <div className="min-w-[101px] space-y-[12px]">
            <h3 className="font-nunito text-base font-semibold leading-normal text-[#404040]">
              Invoice From :
            </h3>
            <p className="font-sans text-base font-bold leading-normal text-[#404040]">
              Miller Smith
            </p>
            <p className="font-sans text-sm font-semibold leading-normal text-[#565656]">
              United States
            </p>
          </div>

          <div className="min-w-[105px] space-y-[12px]">
            <h3 className="font-sans text-base font-semibold leading-normal text-[#404040]">
              Invoice To :
            </h3>
            <p className="font-sans text-base font-bold leading-normal text-[#404040]">
              Jason George
            </p>
            <p className="font-sans text-sm font-semibold leading-normal text-[#565656]">
              Alabama
            </p>
          </div>

          <div className="min-w-[202px] space-y-[10px]">
            <p className="font-sans text-base font-semibold leading-normal text-[#404040]">
              Invoice Date : 23 Aug 2025
            </p>
            <p className="font-sans text-base font-semibold leading-normal text-[#404040]">
              Due Date : 25 Aug 2025
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[40px] mx-auto max-w-[1200px] overflow-x-auto">
        <div className="min-w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="rounded-lg bg-[#D2EAE3]">
                <th className="rounded-l-lg px-4 py-[13px] text-center font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[80px]">
                  No.
                </th>
                <th className="px-4 py-[13px] text-left font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[200px]">
                  Description
                </th>
                <th className="px-4 py-[13px] text-center font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[100px]">
                  Quantity
                </th>
                <th className="px-4 py-[13px] text-center font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[120px]">
                  Base Cost
                </th>
                <th className="px-4 py-[13px] text-center font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[80px]">
                  Tax
                </th>
                <th className="rounded-r-lg px-4 py-[13px] text-center font-sans text-sm font-semibold leading-normal text-[#202224] min-w-[120px]">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item) => (
                <tr key={item.no} className="border-b border-[#D1D5DB]">
                  <td className="px-4 py-[19px] text-center font-sans text-[15px] font-normal leading-normal text-black">
                    {item.no}
                  </td>
                  <td className="px-4 py-[19px] text-left font-sans text-[15px] font-normal leading-normal text-black">
                    {item.description}
                  </td>
                  <td className="px-4 py-[19px] text-center font-sans text-[15px] font-normal leading-normal text-black">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-[19px] text-center font-sans text-[15px] font-normal leading-normal text-black">
                    {item.baseCost}
                  </td>
                  <td className="px-4 py-[19px] text-center font-sans text-[15px] font-normal leading-normal text-black">
                    {item.tax}
                  </td>
                  <td className="px-4 py-[19px] text-center font-sans text-[15px] font-normal leading-normal text-black">
                    {item.totalCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-[40px] flex w-full justify-end pr-0 sm:pr-[73px]">
        <div className="flex items-center gap-[12px]">
          <span className="font-nunito text-base font-extrabold leading-normal text-[#202224]">
            Total =
          </span>
          <span className="font-nunito text-base font-extrabold leading-normal text-[#202224]">
            $4680
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <button
          onClick={() => navigate("/invoices")}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded bg-white">
            <ArrowLeftIcon />
          </div>
          <span className="font-nunito text-xl font-medium leading-normal tracking-[-0.114px] text-black">
            Go back
          </span>
        </button>

        <div className="flex items-center gap-[11px]">
          <button className="flex h-14 items-center justify-center gap-1 rounded-lg border border-black px-5 py-5 transition-colors hover:bg-black hover:text-white">
            <span className="font-sans text-xl font-bold leading-normal tracking-[-0.4px]">
              Print
            </span>
          </button>
          <button className="flex h-14 items-center justify-center gap-1 rounded-lg bg-[#06888C] px-4 py-5 transition-opacity hover:opacity-90">
            <span className="font-sans text-xl font-bold leading-normal tracking-[-0.4px] text-white">
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
