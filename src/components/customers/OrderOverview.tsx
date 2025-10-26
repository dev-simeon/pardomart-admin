export function OrderOverview() {
  return (
    <div className="bg-white rounded-2xl p-10">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-sans font-bold text-black leading-6">
          Order Overview
        </h3>
        <button className="px-4 py-3 bg-[#06888C] rounded-lg hover:bg-[#057579] transition-colors">
          <span className="text-[15px] font-sans font-bold text-white leading-normal tracking-[-0.3px]">
            Suspend Account
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
          <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                stroke="#6A717F"
                strokeWidth="2"
              />
              <path
                d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                stroke="#6A717F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-base font-sans font-bold text-black leading-normal">
            150 Total order
          </span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
          <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                stroke="#6A717F"
                strokeWidth="2"
              />
              <path
                d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                stroke="#6A717F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-base font-sans font-bold text-[#06888C] leading-normal">
            140 Completed
          </span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
          <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                stroke="#6A717F"
                strokeWidth="2"
              />
              <path
                d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                stroke="#6A717F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-base font-sans font-bold text-[#EF4343] leading-normal">
            150 Cancelled
          </span>
        </div>
      </div>
    </div>
  );
}
