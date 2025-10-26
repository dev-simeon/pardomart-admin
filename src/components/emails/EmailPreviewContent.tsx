import { Mail } from "lucide-react";

interface EmailPreviewContentProps {
  subject: string;
  date: string;
  content: string;
}

export function EmailPreviewContent({
  subject,
  date,
  content,
}: EmailPreviewContentProps) {
  return (
    <div className="w-full overflow-hidden rounded-[14px] border border-[#B9B9B9] bg-white">
      <div className="flex flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-8 sm:py-5 md:px-12">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Mail className="h-5 w-5 flex-shrink-0 text-black sm:h-6 sm:w-6" />
            <h3 className="font-sans text-sm font-bold leading-normal text-[#202224] sm:text-base">
              {subject}
            </h3>
          </div>
          <span className="font-sans text-xs font-normal leading-normal text-[#50555C]">
            {date}
          </span>
        </div>

        <div className="h-px w-full bg-[#E0E0E0] opacity-50" />

        <div className="max-h-[300px] overflow-y-auto bg-[#F5F5F5] px-4 py-4 sm:max-h-[350px] sm:px-5 sm:py-6">
          <p className="whitespace-pre-line font-sans text-xs font-normal leading-[24px] tracking-[0.1px] text-[#202224] opacity-95 sm:text-sm sm:leading-[26px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
