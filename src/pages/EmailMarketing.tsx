import { useState } from "react";
import { Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CreateEmailModal, EmailPreviewModal } from "@/components/emails";

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

export interface Email {
  id: number;
  subject: string;
  content: string;
  email: string;
  date: string;
}

const mockEmails: Email[] = [
  {
    id: 1,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 2,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 3,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 4,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 5,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 6,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 7,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 9,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 10,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 11,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 12,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 13,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
];

export default function EmailMarketing() {
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const toggleEmailSelection = (emailId: number) => {
    setSelectedEmails((prev) =>
      prev.includes(emailId)
        ? prev.filter((id) => id !== emailId)
        : [...prev, emailId],
    );
  };

  const toggleAllEmails = () => {
    if (selectedEmails.length === mockEmails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(mockEmails.map((email) => email.id));
    }
  };

  const handlePreviewEmail = (email: Email) => {
    setSelectedEmail(email);
    setIsPreviewModalOpen(true);
  };

  return (
    <>
      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="space-y-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex items-center gap-1 rounded-md bg-[#D2EAE3] px-3.5 py-2.5">
              <span className="font-lato text-[15px] font-medium leading-5 text-black">
                All Emails
              </span>
              <span className="font-lato text-sm font-bold leading-normal text-[#4EA674]">
                (700)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <ExportIcon />
                Export
              </button>
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-3.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]">
                <FilterIcon />
                Filter by
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex h-12 items-center justify-center gap-1 rounded-lg bg-[#06888C] px-4 py-1.5"
              >
                <Plus className="h-6 w-6 text-white" />
                <span className="font-sans text-[15px] font-bold leading-normal tracking-[-0.3px] text-white">
                  Send Email
                </span>
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#D2EAE3]">
                  <th className="rounded-l-md px-7 py-3.5 text-left">
                    <div className="flex items-center gap-2.5">
                      <Checkbox
                        checked={selectedEmails.length === mockEmails.length}
                        onCheckedChange={toggleAllEmails}
                        className="h-4 w-4 rounded border-[#707070]"
                      />
                      <span className="font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                        ID
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Subject
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Content
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Email
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Date
                  </th>
                  <th className="rounded-r-md px-4 py-3.5 text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockEmails.map((email, index) => (
                  <tr
                    key={`${email.id}-${index}`}
                    className="border-b border-[#D1D5DB]"
                  >
                    <td className="px-7 py-5">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          checked={selectedEmails.includes(email.id)}
                          onCheckedChange={() => toggleEmailSelection(email.id)}
                          className="h-4 w-4 rounded border-[#707070]"
                        />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {email.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <span className="font-sans text-[15px] font-normal leading-5 text-[#131523]">
                        {email.subject}
                      </span>
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {email.content}
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {email.email}
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {email.date}
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handlePreviewEmail(email)}
                          className="text-[#6A717F] hover:text-[#023337]"
                        >
                          <MessageIcon />
                        </button>
                        <button className="text-[#6A717F] hover:text-red-600">
                          <TrashIcon />
                        </button>
                      </div>
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

      <CreateEmailModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {selectedEmail && (
        <EmailPreviewModal
          open={isPreviewModalOpen}
          onOpenChange={setIsPreviewModalOpen}
          email={selectedEmail}
        />
      )}
    </>
  );
}
