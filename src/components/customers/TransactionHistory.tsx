import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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
    status: "complete" as const,
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete" as const,
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "complete" as const,
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "cancelled" as const,
  },
  {
    id: "#543214BB",
    dateTime: "22nd Aug, 2025 & 9:00 PM",
    amount: "$154.33",
    method: "EBT",
    status: "cancelled" as const,
  },
];

export function TransactionHistory() {
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
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="px-6 md:px-11 py-7 flex items-center justify-between flex-wrap gap-4">
        <div className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 bg-[#D2EAE3] rounded-md">
          <span className="text-[15px] font-lato font-medium text-black leading-5">
            Transaction History
          </span>
        </div>
        <button className="flex items-center gap-3 text-[15px] font-sans font-semibold text-[#06888C] hover:opacity-80 transition-opacity">
          View All
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.58333 9.5L10.75 5.125M10.75 5.125L6.58333 0.75M10.75 5.125H0.75"
              stroke="#06888C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="rounded-md bg-[#D2EAE3]">
                <th className="px-7 py-[17px] text-left">
                  <div className="flex items-center gap-2.5">
                    <Checkbox
                      checked={
                        selectedTransactions.length === mockTransactions.length
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
                        checked={selectedTransactions.includes(transaction.id)}
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
      </div>
    </div>
  );
}
