interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOutgoing: boolean;
}

interface MessageBubbleProps {
  message: Message;
  avatar: string;
}

export function MessageBubble({ message, avatar }: MessageBubbleProps) {
  const isLongMessage = message.text.length > 60;

  if (message.isOutgoing) {
    return (
      <div className="flex justify-end items-start gap-2 md:gap-4">
        <div className="flex flex-col items-end justify-center gap-2 max-w-[85%] md:max-w-[500px]">
          <div className={`${isLongMessage ? "min-h-16" : "min-h-11"} w-full rounded bg-[#E6E9F4] px-3 py-3 flex items-center`}>
            <p className="text-[#131523] font-sans text-xs md:text-sm font-normal leading-5">
              {message.text}
            </p>
          </div>
          <span className="text-[#A1A7C4] text-right font-sans text-[10px] md:text-xs font-normal leading-4">
            {message.timestamp}
          </span>
        </div>
        <img
          src={avatar}
          alt="Admin"
          className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover flex-shrink-0"
        />
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 md:gap-4">
      <img
        src={avatar}
        alt="User"
        className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center items-start gap-2 max-w-[85%] md:max-w-[491px]">
        <div className={`${isLongMessage ? "min-h-11" : "min-h-11"} w-full rounded bg-[#06888C] px-3 py-3 flex items-center`}>
          <p className="text-white font-sans text-xs md:text-sm font-normal leading-5">
            {message.text}
          </p>
        </div>
        <span className="text-[#A1A7C4] font-sans text-[10px] md:text-xs font-normal leading-4">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
