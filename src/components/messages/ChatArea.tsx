import { useState } from "react";
import { MessageBubble } from "./MessageBubble";
import { Paperclip, ArrowLeft } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOutgoing: boolean;
}

interface ChatAreaProps {
  conversation?: Conversation;
  messages: Message[];
  onBack?: () => void;
}

export function ChatArea({ conversation, messages, onBack }: ChatAreaProps) {
  const [messageInput, setMessageInput] = useState("");

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-[#A1A7C4] p-4 text-center">
        Select a conversation to start messaging
      </div>
    );
  }

  const adminAvatar = "https://api.builder.io/api/v1/image/assets/TEMP/5a0e18f362aaeb1f3c5f80dbeb0b0f6858c29fb0?width=72";
  const customerAvatar = "https://api.builder.io/api/v1/image/assets/TEMP/be49974607e92074195149dd07ce08c646eea48d?width=72";

  return (
    <div className="flex-1 flex flex-col items-center gap-8 md:gap-[54px] px-3 md:px-7 h-full overflow-hidden">
      <div className="w-full max-w-[704px] flex-1 flex flex-col relative pt-2.5 overflow-hidden">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                onClick={onBack}
                className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#7E84A3]" />
              </button>
            )}
            <h3 className="text-[#131523] font-sans text-sm md:text-base font-bold leading-6">
              Sandra Elizabeth
            </h3>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <circle cx="8" cy="8" r="6" fill="#1FD286" stroke="white" strokeWidth="4" />
            </svg>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-6 h-6 cursor-pointer hover:opacity-70">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 9C12.3349 9 15.8645 12.4478 15.9962 16.7508L16 17V18H0V17C0 12.5817 3.58172 9 8 9ZM8 11C5.14444 11 2.75479 12.9948 2.14861 15.667L2.10104 15.8977L2.084 16H13.915L13.899 15.8977C13.4095 13.2618 11.1969 11.2312 8.47386 11.0184L8.22494 11.0041L8 11ZM8 0C10.2091 0 12 1.79086 12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0ZM8 2C6.89543 2 6 2.89543 6 4C6 5.10457 6.89543 6 8 6C9.10457 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2Z"
                  fill="#7E84A3"
                />
              </svg>
            </div>
            <div className="w-6 h-6 cursor-pointer hover:opacity-70">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0L15 4L18.4855 1.9087C18.9591 1.62455 19.5733 1.77811 19.8575 2.25169C19.9507 2.40711 20 2.58495 20 2.76619V11.2338C20 11.7861 19.5523 12.2338 19 12.2338C18.8188 12.2338 18.6409 12.1846 18.4855 12.0913L15 10L13 14H2C0.89543 14 0 13.1046 0 12V2C0 0.89543 0.89543 0 2 0H13ZM15 6H14L11.929 2H2V12H11.928L14 8H15L18 9.468V4.531L15 6Z"
                  fill="#7E84A3"
                />
              </svg>
            </div>
            <div className="w-6 h-6 cursor-pointer hover:opacity-70">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 0L14 3L18 3.5L20 6.5L18 10L20 13.5L18 16.5L14 17L11.5 20H8.5L6 17L2 16.5L0 13.5L2 10L0 6.5L2 3.5L6 3L8.5 0H11.5ZM10.562 1.999H9.437L7.0312 4.88666L3.156 5.37L2.35 6.581L4.3035 10L2.35 13.418L3.156 14.629L7.0312 15.1133L9.436 17.999H10.563L12.9688 15.1133L16.843 14.629L17.649 13.418L15.6965 10L17.649 6.581L16.843 5.37L12.9688 4.88666L10.562 1.999ZM10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6ZM10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8Z"
                  fill="#7E84A3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#E6E9F4] mb-4 md:mb-7" />

        <div className="flex-1 overflow-y-auto space-y-12 md:space-y-24 pb-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={message.id}
              message={message}
              avatar={message.isOutgoing ? adminAvatar : customerAvatar}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[704px] flex flex-col items-center gap-2 md:gap-3.5 pb-2">
        <div className="h-px w-full bg-[#E6E9F4]" />
        <div className="flex w-full justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Your message…"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 text-xs md:text-sm leading-5 text-[#A1A7C4] font-sans placeholder:text-[#A1A7C4] outline-none bg-transparent min-w-0"
          />
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
            <div className="hidden md:block w-6 h-6 cursor-pointer hover:opacity-70">
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 0C17.5376 0 20 2.46243 20 5.5C20 8.46348 17.6562 10.8795 14.7212 10.9956L14.5 11H3C2.44772 11 2 10.5523 2 10C2 9.48716 2.38604 9.06449 2.88338 9.00673L3 9H14.5C16.433 9 18 7.433 18 5.5C18 3.63144 16.5357 2.10487 14.692 2.00518L14.5 2H4C2.89543 2 2 2.89543 2 4C2 5.05436 2.81588 5.91817 3.85074 5.99451L4 6H13.5C13.7761 6 14 5.77614 14 5.5C14 5.25454 13.8231 5.05039 13.5899 5.00806L13.5 5H6C5.44772 5 5 4.55228 5 4C5 3.48716 5.38604 3.06449 5.88338 3.00673L6 3H13.5C14.8807 3 16 4.11929 16 5.5C16 6.82548 14.9685 7.91004 13.6644 7.99468L13.5 8H4C1.79086 8 0 6.20914 0 4C0 1.8578 1.68397 0.108921 3.80036 0.00489531L4 0H14.5Z"
                  fill="#7E84A3"
                />
              </svg>
            </div>
            <button className="flex h-10 md:h-12 px-2.5 md:px-3 py-1.5 md:pr-4 items-center justify-center gap-1 rounded-lg bg-[#06888C] hover:bg-[#057275] transition-colors whitespace-nowrap">
              <span className="text-white font-sans text-xs md:text-[15px] font-bold leading-normal tracking-[-0.3px]">
                Send
              </span>
              <span className="hidden sm:inline text-white font-sans text-xs md:text-[15px] font-bold leading-normal tracking-[-0.3px]">
                Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
