import { Search } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ConversationList({
  conversations,
  selectedId,
  onSelect,
  searchQuery,
  onSearchChange,
}: ConversationListProps) {
  return (
    <div className="w-full md:w-[350px] flex flex-col items-center gap-6 md:gap-9 flex-shrink-0 overflow-hidden h-full">
      <div className="w-full pt-2.5 flex flex-col h-full">
        <h2 className="text-center text-[#131523] font-sans text-base font-bold leading-6 mb-6 md:mb-9">
          Conversations
        </h2>

        <div className="px-3 md:px-4 mb-6 md:mb-9">
          <div className="flex h-10 px-3 md:px-4 items-center gap-2 rounded-[5px] border border-[#D9E1EC] bg-white">
            <div className="w-6 h-6 relative flex items-center justify-center flex-shrink-0">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 0C11.6421 0 15 3.35786 15 7.5C15 9.21015 14.4276 10.7866 13.464 12.0483L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3466 17.0676 15.7794 17.0953 15.3871 16.7903L15.2929 16.7071L12.0483 13.464C10.7866 14.4276 9.21015 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0ZM7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13C8.85114 13 10.0885 12.5128 11.0459 11.7045C11.091 11.5536 11.1738 11.412 11.2929 11.2929C11.412 11.1738 11.5536 11.091 11.7041 11.0446C12.5128 10.0885 13 8.85114 13 7.5C13 4.46243 10.5376 2 7.5 2Z"
                  fill="#7E84A3"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 h-6 text-sm md:text-base font-normal leading-6 text-[#A1A7C4] placeholder:text-[#A1A7C4] outline-none bg-transparent"
              style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
            />
          </div>
        </div>

        <div className="flex flex-col overflow-y-auto flex-1">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => onSelect(conversation.id)}
              className={`flex h-20 md:h-24 px-4 md:px-8 items-center gap-3 md:gap-4 cursor-pointer transition-colors ${
                selectedId === conversation.id ? "bg-[#ECF2FF]" : "hover:bg-[#F5F6FA]"
              }`}
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0 h-11 relative">
                <div
                  className={`text-sm leading-5 truncate pr-20 ${
                    selectedId === conversation.id || conversation.unreadCount
                      ? "font-bold"
                      : "font-normal"
                  } text-[#131523]`}
                  style={{
                    fontFamily: selectedId === conversation.id || conversation.unreadCount
                      ? "Inter, -apple-system, Roboto, Helvetica, sans-serif"
                      : "Open Sans, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {conversation.name}
                </div>
                {conversation.unreadCount && (
                  <div className="absolute left-[110px] top-0.5 w-4 h-4 rounded-xl bg-[#06888C] flex items-center justify-center">
                    <span className="text-white text-center font-sans text-xs font-bold leading-4">
                      {conversation.unreadCount}
                    </span>
                  </div>
                )}
                <div className="absolute right-0 top-0 text-right text-[#A1A7C4] font-sans text-xs md:text-sm font-normal leading-5">
                  {conversation.time}
                </div>
                <div className="absolute left-0 top-6 right-0 text-[#5A607F] font-sans text-xs md:text-sm font-normal leading-5 truncate">
                  {conversation.lastMessage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
