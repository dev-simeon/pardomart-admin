import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";

interface TransactionDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction?: {
    id: string;
    date: string;
    time: string;
    amount: string;
    method: string;
    status: "complete" | "cancelled" | "pending";
  };
}

const TransactionDetailsModal = ({
  open,
  onOpenChange,
  transaction,
}: TransactionDetailsModalProps) => {
  if (!transaction) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "#21C45D";
      case "cancelled":
        return "#EF4343";
      case "pending":
        return "#FBBD23";
      default:
        return "#21C45D";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "complete":
        return "Complete";
      case "cancelled":
        return "Cancelled";
      case "pending":
        return "Pending";
      default:
        return "Complete";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent className="max-w-[913px] gap-0 rounded-2xl border-0 p-0 shadow-none">
          <div className="flex w-full flex-col items-center gap-[52px] rounded-2xl bg-white pb-[109px] pt-9">
            <div className="flex w-full flex-col items-center gap-[43px]">
              <div className="flex w-full flex-col items-center gap-[33px] px-[76px]">
                <div className="flex w-full items-center justify-between">
                  <h2 className="font-sans text-[32px] font-bold leading-normal tracking-[-0.114px] text-[#202224]">
                    Transaction Information
                  </h2>
                  <button
                    onClick={() => onOpenChange(false)}
                    className="flex h-[26px] w-[26px] items-center justify-center transition-opacity hover:opacity-70"
                  >
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.8529 2.62433L24.1485 0L13.4265 10.4042L2.70447 0L0 2.62433L10.722 13.0286L0 23.4328L2.70447 26.0571L13.4265 15.6529L24.1485 26.0571L26.8529 23.4328L16.1309 13.0286L26.8529 2.62433Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <svg
                  width="913"
                  height="1"
                  viewBox="0 0 913 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full opacity-50"
                >
                  <path
                    d="M913 0.43457H0"
                    stroke="#E0E0E0"
                    strokeWidth="0.87"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              <div className="flex w-full flex-col items-end gap-[25px] px-[75px]">
                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-start justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Date of Transaction
                    </div>
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      {transaction.date}
                    </div>
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-start justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Time of Transaction
                    </div>
                    <div className="text-right font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      {transaction.time}
                    </div>
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-start justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Transaction ID
                    </div>
                    <div className="text-right font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      {transaction.id}
                    </div>
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-start justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Amount
                    </div>
                    <div className="text-right font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      {transaction.amount}
                    </div>
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-center justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Method
                    </div>
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
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>

                <div className="flex w-full flex-col items-start gap-[25px]">
                  <div className="flex w-full items-center justify-between">
                    <div className="font-sans text-2xl font-normal leading-normal tracking-[-0.114px] text-black">
                      Status
                    </div>
                    <div className="flex items-center justify-center gap-2.5">
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
                          fill={getStatusColor(transaction.status)}
                        />
                      </svg>
                      <span
                        className="font-sans text-[15px] font-normal leading-normal"
                        style={{ color: getStatusColor(transaction.status) }}
                      >
                        {getStatusText(transaction.status)}
                      </span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-[#D9D9D9]"></div>
                </div>
              </div>

              <button className="mx-[75px] flex h-[62px] w-[calc(100%-150px)] items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-[30px] py-3.5">
                <span className="font-sans text-xl font-bold leading-normal text-white">
                  Download Receipt
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default TransactionDetailsModal;
